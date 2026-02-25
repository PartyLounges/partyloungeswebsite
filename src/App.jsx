import { Route, Routes } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import "./index.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import BackToTopButton from "./Components/BackToTop";
import Blogs from "./Pages/Blogs";
import BlogShowPage from "./Sections/Blog/BlogShowPage";
import GalleryTypePage from "./Sections/Gallery/GalleryTypePage";
import Catalogue from "./Pages/Catalogue";

function App() {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="/blog/:id" element={<BlogShowPage />} />
            <Route path="/gallery/:type" element={<GalleryTypePage />} />
            <Route path="catalogues" element={<Catalogue />} />
          </Routes>
          <BackToTopButton />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}


export default App;
