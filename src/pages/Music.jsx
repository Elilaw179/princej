import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const tracks = [
  {
    title: "Sunset Vibes",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    title: "City Nights",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    title: "Rhythm & Soul",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
];

const Music = () => {
  return (
    <section id="music" className="py-20 px-6 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-yellow-400 text-center">Music</h2>
        <div className="space-y-10">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700 hover:border-yellow-400 transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-3 text-white">{track.title}</h3>
              <ReactAudioPlayer
                src={track.url}
                controls
                className="w-full mb-4"
              />
              <a
                href={track.url}
                download
                className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full transition duration-300"
              >
                Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Music;
