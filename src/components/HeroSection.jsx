import React from 'react';
import {Typewriter} from 'react-simple-typewriter'

const HeroSection = () => {
  return (
    <section
      id="home"
      className="h-[70vh] bg-cover bg-center flex flex-col justify-center items-center text-center px-4"
      style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/harmonic-abstract-music-notes-background_1077802-76320.jpg?semt=ais_hybrid&w=740')" }}
    >
      <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">
        <Typewriter words={["Prince Joshua ", "Prince Joshua"]} loop cursor cursorStyle ='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
      </h1>
      <p className="text-2xl text-gray-200 mb-6 drop-shadow">
        Feel the rhythm. Experience the soul 🎶.
      </p>
      <a href="#music">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 text-lg rounded-full font-semibold transition duration-300">
          Listen Now
        </button>
      </a>
    </section>
  );
};

export default HeroSection;
