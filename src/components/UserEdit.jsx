import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const UserEdit = () => {
    const { id } = useParams();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    cpf: '',
    cnpj: '',
    password: '',
    phone: '',
    companyName: '',
  });

  useEffect(() => {
    axios.get(`http://localhost:3010/users/${id}`)
      .then(response => {
        setUser(response.data);
        const { email, username, cpf, cnpj, phone, companyName } = response.data;
        setFormData({ email, username, cpf, cnpj, phone, companyName });
      })
      .catch(error => console.error('Error fetching user:', error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3010/users/${id}`, formData)
      .then(response => {
        console.log('User updated successfully:', response.data);
        // Atualize o estado do usuário ou exiba uma mensagem de sucesso, se necessário
        setUser(response.data);
      })
      .catch(error => console.error('Error updating user:', error));
  };

  return (
    <div>
      <h2>Edit User</h2>
      {user ? (
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </label>
          <label>
            CPF:
            <input
              type="text"
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
            />
          </label>
          <label>
            CNPJ:
            <input
              type="text"
              name="cnpj"
              value={formData.cnpj}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone:
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
          <label>
            Company:
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Save Changes</button>
          <Link to="/users" className='button-like-link'>Cancel</Link>
        </form>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default UserEdit;
