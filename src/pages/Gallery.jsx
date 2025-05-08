import React, { useState } from 'react';
import Lightbox from 'react-awesome-lightbox';
import 'react-awesome-lightbox/build/style.css';
import MarqueeGallery from '../components/MarqueeGallery';

const galleryItems = [
  "/gallery/princeth.jpg",
  "/gallery/princt.jpg",
  "/gallery/princt.jpg",
  "/gallery/princt.jpg",
  "/gallery/princeth.jpg",
  "/gallery/princeth.jpg",
];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <section id="gallery" className="py-20 px-6 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-yellow-400 text-center">Gallery</h2>

        <MarqueeGallery />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {galleryItems.map((url, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg border border-gray-700 hover:border-yellow-400 transition duration-300 cursor-pointer"
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
            >
              <img
                src={url}
                alt={`Gallery ${index + 1}`}
                className="w-full h-48 md:h-120 object-cover transform group-hover:scale-110 transition duration-300"
              />
            </div>
          ))}
        </div>

      {isOpen && (
  <Lightbox
    image={galleryItems[photoIndex]}
    title={`Image ${photoIndex + 1}`}
    onClose={() => setIsOpen(false)}
    style={{
      image: {
        maxWidth: '90vw',
        maxHeight: '90vh',
        objectFit: 'contain',
      },
    }}
  />
)}

      </div>
    </section>
  );
};

export default Gallery;
