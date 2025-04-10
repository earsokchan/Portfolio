import './App.css';

import Navbar from './page/Navbar';
import Header from './page/Header';
import VideoModal from './page/VideoModal';

import About from './page/About';
import Expertise from './page/Expertise';

import Service from './components/Service';
import Projects from './components/Projects';
import Contact from './components/Contact';

import Map from './page/Map';
function App() {
  return (
    <div>
     
      <Navbar />
      <Header />
      <VideoModal />

      <About />
      <Expertise />

      <Service />
      <Projects />
      <Contact />
      
      <Map />
    
    </div>
  );
}

export default App;
