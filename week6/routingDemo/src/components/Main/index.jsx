import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import Contact from '../Contact';
import Products from '../Products';
import ProductDetails from '../ProductDetails';
import NotFound from '../NotFound';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default Main;
