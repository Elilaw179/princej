import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white flex justify-between items-center px-6 py-4 fixed w-full z-50">
      <h1 className="text-2xl font-bold">🎸 PrinceJ</h1>
      <ul className="flex space-x-6 text-lg">
        <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
        <li><a href="#about" className="hover:text-yellow-400">About</a></li>
        <li><a href="#music" className="hover:text-yellow-400">Music</a></li>
        <li><a href="#gallery" className="hover:text-yellow-400">Gallery</a></li>
        <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
      </ul>

      
    </nav>
  );
};

export default Navbar;
