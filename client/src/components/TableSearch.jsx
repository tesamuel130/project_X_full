import React, { useEffect, useState } from "react";
import { users } from "../tryusers";
import axios from "axios";

export default function TableSearch() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const featchUsers = async () => {
      const res = await axios.get("/tabeltry");
      setData(res.data);
    };
    featchUsers();
  }, []);

  const keys = ["id", "name", "email", "gender"];

  //   this method used to search from all string letters
  const tbSearchM2 = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  //   this method used to search the strign starting letter
  const tbSearch = (data) => {
    return data.filter(
      (items) =>
        items.id.toLowerCase().includes(query) ||
        items.name.toLowerCase().includes(query) ||
        items.email.toLowerCase().includes(query) ||
        items.gender.toLowerCase().includes(query)
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

          {tbSearchM2(data).map((item) => (
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
