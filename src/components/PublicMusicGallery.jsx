

import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { FaDownload, FaHeart } from 'react-icons/fa';

const PublicMusicGallery = () => {
  const [musicList, setMusicList] = useState([]);
  const [likes, setLikes] = useState({});

  useEffect(() => {
    fetchMusic();
  }, []);

  const fetchMusic = async () => {
    const { data, error } = await supabase.storage.from('music-assets').list('music', { limit: 100 });
    if (error) console.error(error);
    else setMusicList(data);
  };

  const getPublicURL = (filename) => {
    return `https://cskmlbudpmfpvlellefv.supabase.co/storage/v1/object/public/music-assets/music/${filename}`;
  };

  const handleLike = (filename) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [filename]: (prevLikes[filename] || 0) + 1,
    }));
    // Optionally, send this like to your backend to persist
  };

  return (
    <section id="music" className="py-10 px-4 md:px-8 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-yellow-400 text-center mb-12">🎶 Music Gallery</h2>

      {musicList.length === 0 ? (
        <p className="text-center text-gray-400 mt-8">No music uploaded yet. Please check back soon!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {musicList.map((file) => (
            <div
              key={file.name}
              className="bg-gray-800 rounded-2xl shadow-lg border border-gray-700 hover:border-yellow-400 transition transform hover:-translate-y-1 hover:shadow-yellow-400/40 p-6 flex flex-col h-full"
            >
              <p className="font-semibold text-lg text-yellow-300 truncate mb-4">{file.name}</p>

              <audio controls className="w-full rounded mb-4" src={getPublicURL(file.name)}>
                Your browser does not support the audio element.
              </audio>

              <div className="flex items-center justify-between mt-auto">
                <a
                  href={getPublicURL(file.name)}
                  download
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-full text-center transition duration-300"
                >
                  <FaDownload className="inline mr-2" />
                  Download
                </a>
                <button
                  onClick={() => handleLike(file.name)}
                  className="flex items-center text-red-500 hover:text-red-600"
                >
                  <FaHeart className="mr-1" />
                  {likes[file.name] || 0}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default PublicMusicGallery;
