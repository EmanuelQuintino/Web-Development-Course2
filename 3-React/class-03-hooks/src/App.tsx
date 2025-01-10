import React, { useState } from "react";

export function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [users, setUsers] = useState(["user1", "user2", "user3"]);

  console.log(count);

  function add() {
    setCount(count + 1);
  }

  function handleName(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  return (
    <>
      <h1>Class 03 Hooks</h1>

      <p>Count: {count}</p>
      <button onClick={add}>add</button>

      <p>Name: {name}</p>
      <input type="text" onInput={handleName} />

      {users.map((user) => {
        return <p key={user}>{user}</p>;
      })}
    </>
  );
}
