import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
    <h1 className='user-management'>User Management</h1>
    <ul>
      <li><Link to="/users" className='manage-link'>Manage Users</Link></li>
      <li><Link to="/send-message" className='manage-link'>Send Message</Link></li>
    </ul>
  </div>
  );
}

export default App;
