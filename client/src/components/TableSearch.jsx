import React, { useState } from "react";
import { users } from "../tryusers";

export default function TableSearch() {
  const [query, setQuery] = useState("");

  const tbSearch = (data) => {
    return data.filter(
      (items) =>
        items.name.toLowerCase().includes(query) ||
        items.name.toLowerCase().includes(query) ||
        items.name.toLowerCase().includes(query)
    );
  };
  return (
    <div className="app">
      <input
        type="text"
        placeholder="search"
        className="trysearch"
        onChange={(e) => setQuery(e.target.value)}
      />
      <table>
        <tbody>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>gender</th>
          </tr>

          {users.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
