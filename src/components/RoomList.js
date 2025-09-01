import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function RoomList() {
  const [rooms, setRooms] = useState(["General", "Tech", "Sports"]);

  return (
    <div>
      <h3>Select a Room</h3>
      {rooms.map((room, idx) => (
        <p key={idx}>
          <Link to={`/room/${room}`}>{room}</Link>
        </p>
      ))}
    </div>
  );
}
