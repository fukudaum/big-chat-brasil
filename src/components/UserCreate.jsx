import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserCreate = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [cpf, setCpf] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [planType, setPlanType] = useState('PRE_PAID');

  const handleRegister = () => {
    const newUser = {
      email,
      username,
      cpf,
      cnpj,
      password,
      phone,
      companyName,
      planType,
    };

    axios.post('http://localhost:3010/users', newUser)
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  };

  return (
    <div className='container'>
      <h2>Register New User</h2>
      <label>
        Email:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Username:
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        CPF:
        <input type="text" value={cpf} onChange={e => setCpf(e.target.value)} />
      </label>
      <br />
      <label>
        CNPJ:
        <input type="text" value={cnpj} onChange={e => setCnpj(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <br />
      <label>
        Phone:
        <input type="text" value={phone} onChange={e => setPhone(e.target.value)} />
      </label>
      <br />
      <label>
        Company Name:
        <input type="text" value={companyName} onChange={e => setCompanyName(e.target.value)} />
      </label>
      <br />
      <label>
        Plan Type:
        <select value={planType} onChange={e => setPlanType(e.target.value)}>
          <option value="PRE_PAID">PRE_PAID</option>
          <option value="POST_PAID">POST_PAID</option>
        </select>
      </label>
      <br />
      <button onClick={handleRegister}>Register</button>
      <Link to="/users" className='button-like-link'>Cancel</Link>
    </div>
  );
};

export default UserCreate;
