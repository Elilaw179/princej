import React from 'react';
import Marquee from 'react-fast-marquee';



const marqueeImages = [
  "/gallery/princeth.jpg",
  "/gallery/princt.jpg",
  "/gallery/princt.jpg",
  "/gallery/princt.jpg",
  "/gallery/princeth.jpg",
  "/gallery/princeth.jpg",
  "/gallery/princeth.jpg",
];



const MarqueeGallery = () => {
  return (
    <div className="bg-gray-800 py-8">
      <Marquee gradient={false} speed={40}>
        {marqueeImages.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Marquee ${index}`}
            className="h-48 w-auto mx-4 rounded-lg shadow-lg border border-gray-700 hover:border-yellow-400 transition duration-300"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeGallery;
