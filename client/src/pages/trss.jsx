import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [admins, setAdmins] = useState([]);
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [adminsResponse, usersResponse, productsResponse] =
          await Promise.all([
            axios.get("http://localhost:5000/api/admins"),
            axios.get("http://localhost:5000/api/users"),
            axios.get("http://localhost:5000/api/products"),
          ]);
        setAdmins(adminsResponse.data);
        setUsers(usersResponse.data);
        setProducts(productsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Admin List</h1>
      <ul>
        {admins.map((admin) => (
          <li key={admin._id}>
            <h2>{admin.name}</h2>
            <p>Bank Account Details:</p>
            <ul>
              {admin.bankAccountDetail.map((account, index) => (
                <li key={index}>
                  <p>User Name: {account.bankAccountUserName}</p>
                  <p>Type: {account.bankAccountType}</p>
                  <p>Number: {account.bankAccountNumber}</p>
                </li>
              ))}
            </ul>
            <p>Contact Accounts:</p>
            <ul>
              {admin.contactAccounts.map((contact, index) => (
                <li key={index}>
                  <p>Telegram: {contact.telegram}</p>
                  <p>WhatsApp: {contact.whatsapp}</p>
                  <p>Email: {contact.email}</p>
                </li>
              ))}
            </ul>
            <p>User Guides:</p>
            <ul>
              {admin.userGuide.map((guide, index) => (
                <li key={index}>
                  <p>Video: {guide.video}</p>
                  <p>Title: {guide.title}</p>
                  <p>Description: {guide.description}</p>
                  <p>Audio: {guide.audio}</p>
                  <p>Image: {guide.image}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <h2>{user.username}</h2>
            <p>Email: {user.email}</p>
          </li>
        ))}
      </ul>

      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
