
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchQuery}`);
  };

  return (
    <nav className="bg-indigo-900 text-white py-4 flex justify-between">
      <div className="flex justify-center space-x-4">
        <NavLink 
          to="/" 
          className={({ isActive }) => (isActive ? "text-emerald-400" : "text-white hover:text-emerald-400")}
        >
          Home
        </NavLink>
      </div>
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input 
          type="text" 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
          placeholder="Search" 
          className="bg-indigo-700 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-emerald-400"
        />
        <button 
          type="submit" 
          className="bg-emerald-500 text-white py-2 px-4 rounded-lg hover:bg-emerald-600"
        >
          Search
        </button>
      </form>
    </nav>
  );
}

export default Navbar;