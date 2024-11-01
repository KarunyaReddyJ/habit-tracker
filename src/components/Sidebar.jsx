
import { Link } from 'react-router-dom';
const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button onClick={toggleSidebar} className="close-btn">✖</button>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
