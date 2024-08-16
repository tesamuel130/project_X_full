import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

export default function PaymentSubmition(id) {
  const [files, setFiles] = useState([]);
  const [userId, setUserId] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [newTransaction, setNewTransaction] = useState({
    accountUserName: "",
    accountNumber: "",
    currency: "",
    amount: "",
    paymentMethod: "",
  });
  const [user, setUser] = useState(null);
  const [currencies, setCurrencies] = useState([]);
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [chatMin, setChatMin] = useState("");

  useEffect(() => {
    if (userId) {
      fetchUser(userId);
    }
    fetchCurrencies();
    fetchPaymentMethods();
  }, [userId]);

  const fetchUser = async (id) => {
    try {
      const res = await axios.get(`http://localhost:5000/users/${id}`);
      setUser(res.data);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  const fetchCurrencies = async () => {
    try {
      const res = await axios.get(
        "/chat/public/chatseller/paymentauth/currency-options"
      );
      setCurrencies(res.data);
    } catch (error) {
      console.error("Error fetching currencies:", error);
    }
  };

  const fetchPaymentMethods = async () => {
    try {
      const res = await axios.get(
        "/chat/public/chatseller/paymentauth/payment-options"
      );
      setPaymentMethods(res.data);
    } catch (error) {
      console.error("Error fetching payment methods:", error);
    }
  };

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const handleTransactionChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction((prev) => ({ ...prev, [name]: value }));
  };

  const addTransaction = () => {
    setTransactions((prev) => [...prev, newTransaction]);
    setNewTransaction({
      accountUserName: "",
      accountNumber: "",
      currency: "",
      amount: "",
      paymentMethod: "",
    });
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
    formData.append("userId", userId);
    formData.append("transactions", JSON.stringify(transactions));

    try {
      const res = await axios.post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setFiles([]);
      setUserId("");
      setTransactions([]);
      setUser(res.data);
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  const handleChatMinChange = (e) => {
    const value = e.target.value;
    setChatMin(value);
    const calculatedAmount = value * 5; // Example calculation, adjust as necessary
    setNewTransaction((prev) => ({ ...prev, amount: calculatedAmount }));
  };

  return (
    <div className="pay-form-cont">
      <form action="post" className="pay-form" onSubmit={handleFileUpload}>
        <div className="form-out-input">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="accountUserName"
            value={newTransaction.accountUserName}
            onChange={handleTransactionChange}
            placeholder="Please enter your account user name..."
            required
          />
        </div>
        <div className="form-out-input">
          <label htmlFor="accountNumber">Account</label>
          <input
            type="text"
            name="accountNumber"
            value={newTransaction.accountNumber}
            onChange={handleTransactionChange}
            placeholder="Please enter your account number"
            required
          />
        </div>

        <div className="amount-input">
          <select
            name="currency"
            value={newTransaction.currency}
            onChange={handleTransactionChange}
            required
          >
            <option value="">Currency</option>
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
          <div className="input-min">
            <label htmlFor="chatMin">Input Chat/Min</label>
            <input
              type="number"
              name="chatMin"
              value={chatMin}
              onChange={handleChatMinChange}
              placeholder="Minimum 5M"
              required
            />
          </div>
          <div className="total-amount">
            <label htmlFor="amount">Total Amount</label>
            <input
              type="number"
              name="amount"
              value={newTransaction.amount}
              onChange={handleTransactionChange}
              placeholder="999"
              readOnly
              required
            />
          </div>
        </div>

        <div className="payment-method">
          <select
            name="paymentMethod"
            value={newTransaction.paymentMethod}
            onChange={handleTransactionChange}
            required
          >
            <option value="">Payment Method</option>
            {paymentMethods.map((method) => (
              <option key={method} value={method}>
                {method}
              </option>
            ))}
          </select>
          <div className="account-numb">
            <input type="text" placeholder="name" />
            <input type="text" placeholder="1000*****12" />
            <FontAwesomeIcon className="copy-account" icon={faCopy} />
          </div>
        </div>
        <div className="form-out-input">
          <label htmlFor="img">Receipt</label>
          <input
            type="file"
            multiple
            className="imgInp"
            onChange={handleFileChange}
            required
          />
        </div>

        <button className="btn btn-primary pay-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
