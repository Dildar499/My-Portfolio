import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home";
import About from "./screens/About";
import Services from "./screens/Services";
import Blogs from "./screens/Blogs";
import Skills from "./screens/Skills";
import BlogDetails from "./screens/BlogDetails";
import Contact from "./screens/Contact";
import ScrollToTop from "./components/ScrollTop";
import { ScrollProgress } from "@/components/ui/scroll-progress";


function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">

        <ScrollProgress/>
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
           
            <Route
              path="/home"
              element={
                <>
                 <ScrollToTop/>
                  <Home />
                  <About />
                  <Skills />
                  <Services />
                  <Blogs />
                  <Contact />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/services" element={<Services />} />
            <Route path="/Blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
