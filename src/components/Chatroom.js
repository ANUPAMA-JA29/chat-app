import { auth, db, signInWithGoogle, logout } from "./firebase";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db, auth } from "../firebase";
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "firebase/firestore";
import ChatMessage from "./ChatMessage";

export default function ChatRoom() {
  const { roomId } = useParams();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const q = query(
      collection(db, "rooms", roomId, "messages"),
      orderBy("createdAt", "asc")
    );
    const unsub = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return unsub;
  }, [roomId]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input) return;

    await addDoc(collection(db, "rooms", roomId, "messages"), {
      text: input,
      uid: auth.currentUser.uid,
      photoURL: auth.currentUser.photoURL,
      displayName: auth.currentUser.displayName,
      createdAt: serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div>
      <h2>Room: {roomId}</h2>
      <div>
        {messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
      </div>
      <form onSubmit={sendMessage}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
