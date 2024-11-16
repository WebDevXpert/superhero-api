import React, { useState } from "react";
import { data } from "./data";
import Main from "./main";

function GithubUsers() {
  const [users, setUsers] = useState(data);
  function removeUser(id) {
    const filteredData = users.filter((mereUsers) => mereUsers.id !== id);
    setUsers(filteredData);
  }
  return (
    <div className="w-[80%] mx-auto">
      <div className="flex justify-between items-center">
        <h1>Github Users</h1>
        <h1>{users.length}</h1>
      </div>
      <div className="users flex flex-wrap justify-between gap-2">
        {users.map((mereUsers) => {
          return <Main {...mereUsers} removeUser={removeUser} />;
        })}
      </div>
    </div>
  );
}

export default GithubUsers;

// CRUD
// C - create
// R - read
// U - update
// D - delete
