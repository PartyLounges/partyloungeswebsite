import { Route, Routes } from "react-router-dom";
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

function App() {
  return (
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
        </Routes>
        <BackToTopButton />
      </main>
      <Footer />
    </div>
  );
}


export default App;
