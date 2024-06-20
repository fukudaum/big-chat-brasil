import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SendMessage = () => {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState('');
  const [receiverId, setReceiverId] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3010/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleSend = () => {
    axios.post(`http://localhost:3010/messages/${userId}`, { isWhatsApp: false, text:message, receiverId })
      .then(response => {
        console.log(response.data);
        setUserId('');
        setReceiverId('');
        setMessage('');
      })
      .catch(error => console.error(error));
  };

  return (
    <div className='container'>
      <h2>Send Message</h2>
      <label>
        Select User:
        <select value={userId} onChange={e => setUserId(e.target.value)}>
          <option value="">Select a user</option>
          {users.map(user => (
            <option key={user.id} value={user.id}>{user.username}</option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Select Receiver:
        <select value={receiverId} onChange={e => setReceiverId(e.target.value)}>
          <option value="">Select a user</option>
          {users.map(user => (
            <option key={user.id} value={user.id}>{user.username}</option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Message:
        <textarea value={message} onChange={e => setMessage(e.target.value)}></textarea>
      </label>
      <button onClick={handleSend}>Send</button>
      <Link to="/" className='button-like-link'>Back</Link>
    </div>
  );
};

export default SendMessage;
