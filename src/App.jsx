// import React, { useState } from 'react';
// import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
// import About from './pages/About';
// import Music from './pages/Music';
// import Gallery from './pages/Gallery';
// import Contact from './pages/Contact';
// import Footer from './components/Footer';
// import Login from './pages/Login';
// import { Toaster } from 'react-hot-toast';
// import { signOut } from "firebase/auth";
// import { auth } from './firebase';

// function App() {
//   const [user, setUser] = useState(null);

//   // LOGOUT FUNCTION → OUTSIDE JSX, here 👇
//   const handleLogout = async () => {
//     await signOut(auth);
//     setUser(null);
//   };

//   return (
//     <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      
//       {/* Toast notification setup */}
//       <Toaster position="top-center" reverseOrder={false} />

//       {user ? ( 
//         <>
//           <Navbar />
//           <HeroSection />
//           <About />
//           <Music />
//           <Gallery />
//           <Contact />
//           <Footer />

//           {/* LOGOUT BUTTON */}
//           <div className="text-center my-4">
//             <button
//               onClick={handleLogout}
//               className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
//             >
//               Logout
//             </button>
//           </div>
//         </>
//       ) : (
//         <Login onLogin={(user) => setUser(user)} />
//       )}
//     </div>
//   );
// }

// export default App;




import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './pages/About';
import Music from './pages/Music';
import Gallery from './pages/Gallery';
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
              <PublicMusicGallery/>
              <PublicImageGallery/>
              
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
