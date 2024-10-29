import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { TaskContextProvider } from './store/TaskContext';
import { Toaster } from 'react-hot-toast';
import Dashboard from './pages/Dashboard';
import Habit from './pages/Habit';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Signup from './pages/Signup';
import Login from './pages/Login';

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
       { !isSidebarOpen && <button style={{position:'absolute',left:0}} className="hamburger" onClick={toggleSidebar}>
          &#9776; 
        </button> }
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/habit/:id" element={<Habit />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </Router>
    </TaskContextProvider>
  );
}

export default App;
