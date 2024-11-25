import { Route, Routes } from 'react-router-dom';
import './index.css'
import Home from './Pages/Home';
import About from './Pages/About';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="about" element={ <About/> } />
      <Route path="gallery" element={ <Gallery/> } />
      <Route path="contact" element={ <Contact/> } />
      <Route path="blog" element={ <Blog/> } />
    </Routes>
  );
}

export default App
