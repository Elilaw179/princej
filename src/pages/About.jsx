// import React from 'react';

// const About = () => {
//   return (
//     <section id="about" className="py-20 px-6 bg-gray-800">
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
//         <img
//           src="/gallery/prince.jpg"
//           alt="Prince Joshua Portrait"
//           className="min-w-80 min-h-80  object-cover shadow-lg "
//         />
//         <div>
//           <h2 className="text-4xl font-bold mb-4 text-yellow-400">About Prince Joshua</h2>
//           <p className="text-lg text-gray-300 leading-relaxed">
//             Prince Joshua is a passionate musician blending Afrobeat, soul, and jazz into a unique musical experience.
//             With over a decade of live performances and studio work, his artistry transcends genres and touches hearts worldwide.
//             Whether on stage or in the studio, Prince Joshua’s music is a journey through rhythm and emotion.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;




// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-6 bg-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">

        {/* Image Section */}
        <img
          src="/gallery/prince.jpg"
          alt="Prince Joshua Portrait"
          className="w-full md:w-80 h-auto rounded-lg object-cover shadow-lg hover:scale-105 transition duration-300"
        />

        {/* Text Section */}
        <div className="text-center md:text-left flex-1">
          <h2 className="text-4xl font-bold mb-4 text-yellow-400">About Prince Joshua</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Prince Joshua is a passionate musician blending Afrobeat, soul, and jazz into a unique musical experience.
            With over a decade of live performances and studio work, his artistry transcends genres and touches hearts worldwide.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Whether on stage or in the studio, Prince Joshua’s music is a journey through rhythm and emotion — inspiring listeners to move, feel, and connect.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
