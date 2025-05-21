
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import AdminPage from './pages/AdminPage';
import { Toaster } from 'react-hot-toast';
import PublicMusicGallery from './components/PublicMusicGallery';
import PublicImageGallery from './components/PublicImageGallery';

function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      
        <Toaster position="top-center" reverseOrder={false} />

        <Routes>
          {/* Public website route */}
          <Route path="/" element={
            <>
              <Navbar />
              <HeroSection />
              <About />
              <PublicMusicGallery />
              <PublicImageGallery />
              <Contact />
              <Footer />
            </>
          } />
          {/* Admin page route */}
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
