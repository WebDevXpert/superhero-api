import { Button } from "react-bootstrap";
import React, { useState } from "react";

export default function ObjectExample() {
  const [user, setUser] = useState({
    name: "Haris",
    age: 76,
    message: "Hey Random User",
  });
  function changeText() {
    setUser({ ...user, message: "Hey Haris" });
  }
  return (
    <div className="text-center">
      <h1>Object Example</h1>
      <h2>{user.name}</h2>
      <h2>{user.age}</h2>
      <h2>{user.message}</h2>
      <Button variant="secondary" onClick={changeText}>
        Click
      </Button>
    </div>
  );
}
