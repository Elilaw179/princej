import React from 'react';
import { FaInstagram, FaYoutube, FaFacebook, FaEnvelope, FaTiktok } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-10 px-6 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-yellow-400">Contact</h2>
        <p className="text-lg text-gray-300 mb-10">
          Get in touch or follow Prince Joshua on social media to stay updated with the latest music and events!
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 mb-6">
          <a href="https://www.instagram.com/p/DJerIOVMVzc/?igsh=NTc4MTIwNjQ2YQ==" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-gray-800 hover:bg-yellow-400 hover:text-black text-white px-5 py-3 rounded-full transition duration-300">
            <FaInstagram className="text-xl" /> Instagram
          </a>
          <a href="https://youtube.com/shorts/U8LV_TrdBQc?si=hrSX68w56Qp_0ENJ" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-gray-800 hover:bg-yellow-400 hover:text-black text-white px-5 py-3 rounded-full transition duration-300">
            <FaYoutube className="text-xl" /> YouTube
          </a>
          <a href="https://www.facebook.com/profile.php?id=61552332580672" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-gray-800 hover:bg-yellow-400 hover:text-black text-white px-5 py-3 rounded-full transition duration-300">
            <FaFacebook className="text-xl" /> Facebook
          </a>
          <a href="https://vm.tiktok.com/ZMSJ4q8cn" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-gray-800 hover:bg-yellow-400 hover:text-black text-white px-5 py-3 rounded-full transition duration-300">
            <FaTiktok className="text-xl" /> Tik Tok
          </a>
        </div>

        <div className="mt-6 text-gray-300 text-lg">
          <p className="flex justify-center items-center gap-2"><FaEnvelope className="text-yellow-400" /> princejosjp@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
