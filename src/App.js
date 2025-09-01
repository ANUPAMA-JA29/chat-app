import React, { useState } from "react";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { text: input, sender: "You" }]);
    setInput("");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-lg flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-700 text-center font-bold text-lg">
          💬 Chat Room
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-2">
          {messages.length === 0 ? (
            <p className="text-gray-400 text-center">No messages yet...</p>
          ) : (
            messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg ${
                  msg.sender === "You"
                    ? "bg-blue-600 self-end text-right"
                    : "bg-gray-600 text-left"
                }`}
              >
                <strong>{msg.sender}: </strong>
                {msg.text}
              </div>
            ))
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 flex border-t border-gray-700">
          <input
            type="text"
            className="flex-1 p-2 rounded-lg bg-gray-700 focus:outline-none"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="ml-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
