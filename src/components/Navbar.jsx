// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav className="bg-black text-white flex justify-between items-center px-6 py-4 fixed w-full z-50">
//       <h1 className="text-2xl font-bold">🎸 PrinceJ</h1>
//       <ul className="flex space-x-6 text-lg">
//         <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
//         <li><a href="#about" className="hover:text-yellow-400">About</a></li>
//         <li><a href="#music" className="hover:text-yellow-400">Music</a></li>
//         <li><a href="#gallery" className="hover:text-yellow-400">Gallery</a></li>
//         <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
//       </ul>

      
//     </nav>
//   );
// };

// export default Navbar;








// src/components/Navbar.jsx
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-black text-white fixed w-full z-50 shadow-lg transition duration-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-5xl font-bold text-yellow-400 ">JP</h1>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex space-x-6 text-lg">
          <li><a href="#home" className="hover:text-yellow-400 transition duration-300">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-400 transition duration-300">About</a></li>
          <li><a href="#music" className="hover:text-yellow-400 transition duration-300">Music</a></li>
          <li><a href="#gallery" className="hover:text-yellow-400 transition duration-300">Gallery</a></li>
          <li><a href="#contact" className="hover:text-yellow-400 transition duration-300">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className={`sm:hidden text-3xl focus:outline-none transition-transform duration-300 ${
            menuOpen ? 'rotate-90 text-yellow-400' : ''
          }`}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Links (with animation) */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-gray-900 border-t border-gray-700`}
      >
        <ul className="flex flex-col text-lg text-center space-y-4 py-4">
          <li><a href="#home" onClick={closeMenu} className="hover:text-yellow-400 transition duration-300">Home</a></li>
          <li><a href="#about" onClick={closeMenu} className="hover:text-yellow-400 transition duration-300">About</a></li>
          <li><a href="#music" onClick={closeMenu} className="hover:text-yellow-400 transition duration-300">Music</a></li>
          <li><a href="#gallery" onClick={closeMenu} className="hover:text-yellow-400 transition duration-300">Gallery</a></li>
          <li><a href="#contact" onClick={closeMenu} className="hover:text-yellow-400 transition duration-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
