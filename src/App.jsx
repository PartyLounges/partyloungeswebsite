import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import BackToTopButton from "./Components/BackToTop";

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
          <Route path="blog" element={<Blog />} />
        </Routes>
        <BackToTopButton />
      </main>
      <Footer />
    </div>
  );
}


export default App;
