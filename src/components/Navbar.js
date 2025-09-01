import React from "react";
import { auth, signInWithGoogle, logout } from "../firebase";

export default function Navbar() {
  return (
    <div className="navbar">
      <h2>Chat App</h2>
      {auth.currentUser ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={signInWithGoogle}>Login with Google</button>
      )}
    </div>
  );
}
