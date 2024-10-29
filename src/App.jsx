import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { TaskContextProvider } from './store/TaskContext';
import { Toaster } from 'react-hot-toast';
import Dashboard from './components/Dashboard';
import Habit from './pages/Habit';
import { useState } from 'react';
import Sidebar from './components/Sidebar';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <TaskContextProvider>
      <Toaster />
      <Router>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <button className="hamburger" onClick={toggleSidebar}>
          &#9776; {/* Hamburger icon */}
        </button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<div>Login</div>} />
          <Route path="/signup" element={<div>Signup</div>} />
          <Route path="/habit/:id" element={<Habit />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </Router>
    </TaskContextProvider>
  );
}

export default App;
