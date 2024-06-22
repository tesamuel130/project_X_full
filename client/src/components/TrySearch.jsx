import React, { useState } from "react";
import { users } from "../tryusers";

export default function TrySearch() {
  const [query, setQuery] = useState("");

  return (
    <div className="app">
      <input
        type="text"
        placeholder="search"
        className="trysearch"
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul className="list">
        {users
          .filter((users) => users.name.toLowerCase().includes(query))
          .map((users) => (
            <li key={users.id} className="listItem">
              {users.name}
            </li>
          ))}
      </ul>
    </div>
  );
}
