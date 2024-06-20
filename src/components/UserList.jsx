import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3010/users')
      .then(response => {setUsers(response.data);
        console.log(response.data)
      })
      .catch(error => console.error(error));
  }, []);

  const handleNewUser = () => {
    navigate('/register');
  };

  return (
    <div className='container'>
      <h2>User List</h2>
      <button onClick={handleNewUser}>New User</button>
      <ul className='user-list'>
        {users.map(user => (
          <li key={user.id}>
            {user.username}
            <Link to={`/users/${user.id}`} className='link'> View</Link>            
            <Link to={`/users/${user.id}/edit`} className='link'> Edit</Link>            
          </li>
        ))}
      </ul>
      <Link to="/" className='button-like-link'>Back</Link>
    </div>
  );
};

export default UserList;
