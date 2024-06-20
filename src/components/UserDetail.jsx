import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [amount, setAmount] = useState(0);
  const [newLimit, setNewLimit] = useState(0);
  const [newPlanType, setNewPlanType] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3010/users/${id}`)
      .then(response => setUser(response.data))
      .catch(error => console.error(error));
  }, [id]);

  
  const handleAddBalance = (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    axios.patch(`http://localhost:3010/users/backoffice/balance`, { userId:user.id, balance:amount })
      .then(response => {
        console.log('Balance updated successfully:', response.data);
        // Atualize o estado do usuário ou exiba uma mensagem de sucesso, se necessário
        setUser(prevUser => ({
            ...prevUser,
            balance: prevUser.balance + amount,
          }));
        setAmount(0);
      })
      .catch(error => console.error('Error updating balance:', error));
  };

  const handleUpdateLimit = (event) => {
    event.preventDefault();
    axios.patch(`http://localhost:3010/users/backoffice/limit`, { limit:newLimit, userId:id })
      .then(response => {
        console.log('Limit updated successfully:', response.data);
        setUser(prevUser => ({
          ...prevUser,
          maxLimit: newLimit,
        }));
        setNewLimit(0);
      })
      .catch(error => console.error('Error updating limit:', error));
  };

  const handleUpdatePlanType = (event) => {
    event.preventDefault();
    axios.patch(`http://localhost:3010/users/backoffice/plan`, { plan: newPlanType, userId: id })
      .then(response => {
        console.log('Plan type updated successfully:', response.data);
        setUser(prevUser => ({
          ...prevUser,
          planType: newPlanType,
        }));
        setNewPlanType('');
      })
      .catch(error => console.error('Error updating plan type:', error));
  };

  if (!user) return <div>Loading...</div>;

    // Renderiza o formulário somente se o plano for PRE_PAID
    const renderAddBalanceForm = () => {
        if (user.planType === 'PRE_PAID') {
          return (
            <form onSubmit={handleAddBalance}>
              <label>
                Add Balance:
                <input
                  type="number"
                  value={amount}
                  onChange={e => setAmount(Number(e.target.value))}
                />
              </label>
              <button type="submit">Add</button>
            </form>
          );
        }
        return null;
    };

    const renderLimitForm = () => {
    if (user && user.planType === 'POST_PAID') {
        return (
        <form onSubmit={handleUpdateLimit}>
            <label>
            New Limit:
            <input
                type="number"
                value={newLimit}
                onChange={e => setNewLimit(Number(e.target.value))}
            />
            </label>
            <button type="submit">Update Limit</button>
        </form>
        );
    }
    return null;
    };

    const renderPlanTypeForm = () => {
        return (
          <form onSubmit={handleUpdatePlanType}>
            <label>
              New Plan Type:
              <select value={newPlanType} onChange={e => setNewPlanType(e.target.value)}>
                <option value="">Select a plan type</option>
                <option value="PRE_PAID">PRE_PAID</option>
                <option value="POST_PAID">POST_PAID</option>
              </select>
            </label>
            <button type="submit">Update Plan Type</button>
          </form>
        );
    };

  return (
    <div className='user-detail-container'>
      <h2 className='user-detail-header'>{user.username}</h2>
      <div className='user-detail-content'>
        <p>Email: {user.email}</p>
        <p>CPF: {user.cpf}</p>
        <p>CNPJ: {user.cnpj}</p>
        <p>Phone: {user.phone}</p>
        <p>Company: {user.companyName}</p>
        <p>Plan Type: {user.planType}</p>
        {renderPlanTypeForm()}
        {user.planType === 'PRE_PAID' && (
            <p>Balance: {user.balance}</p>
        )}
        {user.planType === 'PRE_PAID' && (
            renderAddBalanceForm()
        )}
        {user.planType === 'POST_PAID' && (
            <div>
                <p>Message Limit: {user.maxLimit}</p>
                <p>Messages Sent: {user.messageSent}</p>
                {renderLimitForm()}
            </div>
        )}
        
        </div>
        <Link to="/users" className='button-like-link'>Cancel</Link>
    </div>
  );
};

export default UserDetail;
