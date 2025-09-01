import React from "react";
import { auth } from "../firebase";

export default function ChatMessage({ message }) {
  const { text, displayName, photoURL, uid } = message;

  return (
    <div style={{
      background: uid === auth.currentUser.uid ? "#DCF8C6" : "#FFF",
      margin: "5px",
      padding: "10px",
      borderRadius: "5px"
    }}>
      <img src={photoURL} alt="" width="30" style={{ borderRadius: "50%" }} />
      <b>{displayName}</b>
      <p>{text}</p>
    </div>
  );
}
