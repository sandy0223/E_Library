import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Categories from '../Pages/Categories';
import MyLibrary from '../Pages/Contact';
import EJournals from '../Pages/EJournals';
import Magazines from '../Pages/Magazines';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Login from '../Pages/Login';
import NotFound from '../Pages/NotFound';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AppRoutes = () => {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/my-library" element={<MyLibrary />} />
        <Route path="/e-journals" element={<EJournals />} />
        <Route path="/magazines" element={<Magazines />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route for undefined paths */}
      </Routes>
      <Footer/>
    </Router>
    </>
  );
};

export default AppRoutes;
