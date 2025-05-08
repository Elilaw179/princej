import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './pages/About';
import Music from './pages/Music';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Gallery from './pages/Gallery';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <HeroSection />
      <About />
      <Music />
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
