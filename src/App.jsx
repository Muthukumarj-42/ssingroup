import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import DivisionTemplate from './pages/DivisionTemplate';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            
            {/* Division Routes */}
            <Route path="/division/builders" element={<DivisionTemplate division="builders" />} />
            <Route path="/division/real-estate" element={<DivisionTemplate division="real-estate" />} />
            <Route path="/division/jewellery" element={<DivisionTemplate division="jewellery" />} />
            <Route path="/division/garments" element={<DivisionTemplate division="garments" />} />
            <Route path="/division/finance" element={<DivisionTemplate division="finance" />} />
            <Route path="/division/organic-products" element={<DivisionTemplate division="organic-products" />} />
            
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
