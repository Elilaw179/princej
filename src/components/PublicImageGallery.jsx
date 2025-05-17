

// // src/components/PublicImageGallery.jsx
// import React, { useEffect, useState } from 'react';
// import { supabase } from '../supabaseClient';
// import Lightbox from 'yet-another-react-lightbox';
// import 'yet-another-react-lightbox/styles.css';

// const PublicImageGallery = () => {
//   const [imageList, setImageList] = useState([]);
//   const [lightboxOpen, setLightboxOpen] = useState(false);
//   const [lightboxIndex, setLightboxIndex] = useState(0);

//   useEffect(() => {
//     fetchImages();
//   }, []);

//   const fetchImages = async () => {
//     const { data, error } = await supabase.storage
//       .from('music-assets')
//       .list('images', { limit: 100 });
//     if (error) console.error(error);
//     else setImageList(data);
//   };

//   const getPublicURL = (filename) => {
//     return `https://cskmlbudpmfpvlellefv.supabase.co/storage/v1/object/public/music-assets/images/${filename}`;
//   };

//   const slides = imageList.map((file) => ({
//     src: getPublicURL(file.name),
//   }));

//   return (
//     <section id="gallery" className="py-10 px-4 md:px-8  bg-gray-800 text-white">
//       <h2 className="text-4xl font-bold text-yellow-400 text-center mb-12">Album Gallery</h2>

//       {imageList.length === 0 ? (
//         <p className="text-center text-gray-400 mt-8">No images uploaded yet. Please check back soon!</p>
//       ) : (
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//           {imageList.map((file, index) => (
//             <div
//               key={file.name}
//               className="overflow-hidden rounded-lg shadow-lg border border-gray-700 hover:border-yellow-400 transition transform hover:scale-105 cursor-pointer"
//               onClick={() => {
//                 setLightboxIndex(index);
//                 setLightboxOpen(true);
//               }}
//             >
//               <img
//                 src={getPublicURL(file.name)}
//                 alt={file.name}
//                 className="w-full h-60 lg:h-90 object-cover"
//               />
//             </div>
//           ))}
//         </div>
//       )}

//       {lightboxOpen && (
//         <Lightbox
//           open={lightboxOpen}
//           close={() => setLightboxOpen(false)}
//           slides={slides}
//           index={lightboxIndex}
//         />
//       )}
//     </section>
//   );
// };

// export default PublicImageGallery;



// src/components/PublicImageGallery.jsx
import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const PublicImageGallery = () => {
  const [imageList, setImageList] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const { data, error } = await supabase.storage
      .from('music-assets')
      .list('images', { limit: 100 });
    if (error) console.error(error);
    else setImageList(data);
  };

  const getPublicURL = (filename) => {
    return `https://cskmlbudpmfpvlellefv.supabase.co/storage/v1/object/public/music-assets/images/${filename}`;
  };

  const slides = imageList.map((file) => ({
    src: getPublicURL(file.name),
  }));

  return (
    <section id="gallery" className="py-10 px-4 md:px-8 bg-gray-800 text-white overflow-hidden">
      <h2 className="text-4xl font-bold text-yellow-400 text-center mb-12">Album Gallery</h2>

      {imageList.length === 0 ? (
        <p className="text-center text-gray-400 mt-8">No images uploaded yet. Please check back soon!</p>
      ) : (
 <div className="w-full flex justify-center">
  <div className="relative max-w-6xl w-full overflow-hidden px-4">
    <div className="scroll-left">
      {[...imageList, ...imageList].map((file, index) => (
        <div
          key={file.name + index}
          className="min-w-[250px] h-90 overflow-hidden rounded-lg shadow-lg border border-gray-700 hover:border-yellow-400 transition-transform transform hover:scale-105 cursor-pointer"
          onClick={() => {
            setLightboxIndex(index % imageList.length);
            setLightboxOpen(true);
          }}
        >
          <img
            src={getPublicURL(file.name)}
            alt={file.name}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  </div>
</div>


      )}

      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={slides}
          index={lightboxIndex}
        />
      )}
    </section>
  );
};

export default PublicImageGallery;
