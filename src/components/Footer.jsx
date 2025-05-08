import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 text-center py-6 border-t border-gray-700">
      <p>&copy; {new Date().getFullYear()} Prince Joshua. All rights reserved.</p>
      <p className="mt-2 text-sm">Website built by Prince Joshua using React & Tailwind CSS</p>
    </footer>
  );
};

export default Footer;
