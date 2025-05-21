

// src/pages/About.jsx
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-10 px-4 md:px-6 bg-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Image Section */}
        <img
          src="/gallery/prince.jpg"
          alt="Prince Joshua Portrait"
          className="w-full md:w-80 h-auto rounded-lg object-cover shadow-lg hover:scale-105 transition duration-300"
        />

        {/* Text Section */}
        <div className="text-center md:text-left flex-1">
          <h2 className="text-4xl font-bold text-yellow-400 mb-2">
            About Prince Joshua
          </h2>

          {/* Divider Line */}
          <div className="w-20 h-1 bg-yellow-400 mx-auto md:mx-0 mb-6 rounded"></div>

          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Prince Josh JP is a dedicated Nigerian gospel worship leader and
            songwriter hailing from Akwa Ibom State. With a deep passion for
            worship, he conveys God's love and grace through soul-stirring music
            that resonates with the heart.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Whether on stage or in the studio, Prince Joshua’s music is a
            journey through rhythm and emotion — inspiring listeners to move,
            feel, and connect.
          </p>

          {/* Read More Button */}
          <a href="#contact">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-2 rounded-full transition duration-300">
              Read More
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
