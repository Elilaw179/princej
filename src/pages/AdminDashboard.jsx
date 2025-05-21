

// src/pages/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import toast from 'react-hot-toast';

const AdminDashboard = ({ onLogout }) => {
  const [musicFile, setMusicFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [youtubeLink, setYoutubeLink] = useState('');
  const [musicList, setMusicList] = useState([]);
  const [imageList, setImageList] = useState([]);
  const [isUploadingMusic, setIsUploadingMusic] = useState(false);
  const [isUploadingImage, setIsUploadingImage] = useState(false);

  // Fetch Files on load
  useEffect(() => {
    fetchMusicFiles();
    fetchImageFiles();
  }, []);

  const fetchMusicFiles = async () => {
    const { data, error } = await supabase.storage.from('music-assets').list('music', { limit: 100 });
    if (error) console.error(error);
    else setMusicList(data);
  };

  const fetchImageFiles = async () => {
    const { data, error } = await supabase.storage.from('music-assets').list('images', { limit: 100 });
    if (error) console.error(error);
    else setImageList(data);
  };

  // Upload Music
  const handleMusicUpload = async () => {
    if (!musicFile) return toast.error("Please select an MP3 file");
    setIsUploadingMusic(true);

    const { error } = await supabase.storage
      .from('music-assets')
      .upload(`music/${musicFile.name}`, musicFile, { cacheControl: '3600', upsert: true });

    setIsUploadingMusic(false);
    setMusicFile(null);

    if (error) {
      toast.error("Upload failed");
    } else {
      toast.success("Music uploaded!");
      fetchMusicFiles();
    }
  };

  // Upload Image
  const handleImageUpload = async () => {
    if (!imageFile) return toast.error("Please select an image file");
    setIsUploadingImage(true);

    const { error } = await supabase.storage
      .from('music-assets')
      .upload(`images/${imageFile.name}`, imageFile, { cacheControl: '3600', upsert: true });

    setIsUploadingImage(false);
    setImageFile(null);

    if (error) {
      toast.error("Upload failed");
    } else {
      toast.success("Image uploaded!");
      fetchImageFiles();
    }
  };

  // Delete File
  const handleDelete = async (folder, filename, fetchFn) => {
    const { error } = await supabase.storage.from('music-assets').remove([`${folder}/${filename}`]);
    if (error) {
      toast.error("Delete failed");
    } else {
      toast.success("File deleted");
      fetchFn();
    }
  };

  // Save YouTube link
  const handleYoutubeSave = () => {
    if (!youtubeLink) return toast.error("Please paste YouTube link");
    toast.success("YouTube link saved!");
    console.log("YouTube Link:", youtubeLink);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-gray-800 rounded-lg shadow-xl p-8 space-y-8">

        <h1 className="text-3xl font-bold text-yellow-400 text-center mb-6">🎸 Admin Dashboard</h1>

        {/* Upload Music Card */}
        <div className="bg-gray-700 rounded-lg p-6 space-y-3">
          <h2 className="text-2xl font-semibold text-yellow-400">Upload Music (MP3)</h2>
          <input type="file" accept="audio/*" onChange={(e) => setMusicFile(e.target.files[0])} className="w-full bg-gray-600 p-2 rounded" />
          <button
            onClick={handleMusicUpload}
            disabled={isUploadingMusic}
            className={`w-full ${isUploadingMusic ? 'bg-yellow-300' : 'bg-yellow-400 hover:bg-yellow-500'} text-black font-bold py-2 rounded transition duration-300`}
          >
            {isUploadingMusic ? 'Uploading...' : 'Upload Music'}
          </button>

          <div className="mt-4 space-y-2 max-h-40 overflow-y-auto">
            {musicList.map(file => (
              <div key={file.name} className="flex justify-between items-center bg-gray-600 p-2 rounded text-sm">
                <span className="truncate">{file.name}</span>
                <button onClick={() => handleDelete('music', file.name, fetchMusicFiles)} className="text-red-400 hover:text-red-600">Delete</button>
              </div>
            ))}
          </div>
        </div>

        {/* Upload Image Card */}
        <div className="bg-gray-700 rounded-lg p-6 space-y-3">
          <h2 className="text-2xl font-semibold text-yellow-400">Upload Album Image</h2>
          <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} className="w-full bg-gray-600 p-2 rounded" />
          <button
            onClick={handleImageUpload}
            disabled={isUploadingImage}
            className={`w-full ${isUploadingImage ? 'bg-yellow-300' : 'bg-yellow-400 hover:bg-yellow-500'} text-black font-bold py-2 rounded transition duration-300`}
          >
            {isUploadingImage ? 'Uploading...' : 'Upload Image'}
          </button>

          <div className="mt-4 space-y-2 max-h-40 overflow-y-auto">
            {imageList.map(file => (
              <div key={file.name} className="flex justify-between items-center bg-gray-600 p-2 rounded text-sm">
                <span className="truncate">{file.name}</span>
                <button onClick={() => handleDelete('images', file.name, fetchImageFiles)} className="text-red-400 hover:text-red-600">Delete</button>
              </div>
            ))}
          </div>
        </div>

        {/* YouTube Link Card */}
        <div className="bg-gray-700 rounded-lg p-6 space-y-3">
          <h2 className="text-2xl font-semibold text-yellow-400">Add YouTube Video Link</h2>
          <input
            type="text"
            placeholder="https://youtube.com/..."
            value={youtubeLink}
            onChange={(e) => setYoutubeLink(e.target.value)}
            className="w-full bg-gray-600 p-2 rounded text-white"
          />
          <button onClick={handleYoutubeSave} className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 rounded transition duration-300">Save Link</button>
        </div>

        {/* Logout */}
        <button
          onClick={onLogout}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded transition duration-300 font-bold"
        >
          Logout
        </button>

      </div>
    </div>
  );
};

export default AdminDashboard;
