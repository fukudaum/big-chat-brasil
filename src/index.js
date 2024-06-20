import React from 'react';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SendMessage from './components/SendMessage';
import { createRoot } from 'react-dom/client'; 
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import UserEdit from './components/UserEdit';
import UserCreate from './components/UserCreate';

// Cria uma raiz de renderização no elemento root
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/users" element={<UserList/>} />
        <Route path="/users/:id" element={<UserDetail/>} />
        <Route path="/users/:id/edit" element={<UserEdit/>} />
        <Route path="/send-message" element={<SendMessage />} />
        <Route path="/register" element={<UserCreate />} />
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
