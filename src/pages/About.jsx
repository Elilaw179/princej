import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <img
          src="/gallery/prince.jpg"
          alt="Prince Joshua Portrait"
          className="min-w-80 min-h-80  object-cover shadow-lg "
        />
        <div>
          <h2 className="text-4xl font-bold mb-4 text-yellow-400">About Prince Joshua</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Prince Joshua is a passionate musician blending Afrobeat, soul, and jazz into a unique musical experience.
            With over a decade of live performances and studio work, his artistry transcends genres and touches hearts worldwide.
            Whether on stage or in the studio, Prince Joshua’s music is a journey through rhythm and emotion.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
