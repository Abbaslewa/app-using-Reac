// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import './index.css';
// import About from './pages/Nav'; // Ensure this path is correct
// import Search from './pages/Search'; // Ensure this path is correct

// function App() {
//     const [searchTerm, setSearchTerm] = useState('');

//     const handleSearchChange = (e) => {
//         setSearchTerm(e.target.value);
//     };

//     return (
//         <Router>
//             <div className="flex flex-col min-h-screen bg-gray-100">
//                 <header className="bg-green-700 text-white p-4 shadow-lg">
//                     <nav className="container mx-auto flex justify-between items-center">
//                         <h1 className="text-2xl font-bold">Abbas Lewa's Website</h1>
//                         <ul className="flex space-x-4">
//                             <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
//                             <li><Link to="/about" className="hover:text-gray-200">About</Link></li>
//                             <li><Link to="/search" className="hover:text-gray-200">Search</Link></li>
//                         </ul>
//                     </nav>
//                 </header>

//                 <main className="flex-grow">
//                     <Routes>
//                         <Route 
//                             path="/" 
//                             element={
//                                 <section className="bg-green-700 text-white py-20 text-center">
//                                     <h2 className="text-4xl font-bold mb-4">Welcome to Abbas Lewa's Website!</h2>
//                                     <p className="text-lg mb-8">Explore my projects and learn more about my work.</p>
//                                     <input 
//                                         type="text" 
//                                         placeholder="Search..." 
//                                         value={searchTerm}
//                                         onChange={handleSearchChange}
//                                         className="border rounded-lg p-2 mb-4 shadow-md hover:shadow-lg transition duration-300"
//                                     />
//                                     <Link to="/about">
//                                         <button className="bg-green-300 text-green-700 px-6 py-2 rounded-lg font-semibold hover:bg-green-400 shadow-md hover:shadow-lg transition duration-300">
//                                             Get Started
//                                         </button>
//                                     </Link>
//                                 </section>
//                             } 
//                         />
//                         <Route path="/about" element={<About />} />
//                         <Route path="/search" element={<Search />} /> {/* Add Search route */}
//                     </Routes>
//                 </main>

//                 <footer className="bg-green-700 text-white p-4 text-center shadow-lg">
//                     <p>&copy; 2024 Abbas Lewa. All rights reserved.</p>
//                     <Link to="#contact" className="hover:underline">Contact Us</Link>
//                 </footer>
//             </div>
//         </Router>
//     );
// }

// export default App;





import React from 'react';

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col gap-5 bg-white shadow-2xl p-10 w-[60%] rounded-lg">
        <h2 className="text-2xl text-primary">{displayName}</h2>
        <input 
          type="text" 
          placeholder="Enter your name" 
          className="w-full p-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary border border-gray-400"
          value={name}
          onChange={handleNameChange}
        />
        <button 
          className="bg-accent text-white p-3 rounded-lg w-[20%]" 
          onClick={handleButtonClick}
        >
          Show me
        </button>
      </div>
    </div>
  );
};

export default App;