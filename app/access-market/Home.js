"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import Access from './Access';

const Home = () => {
  return (
    <>
    <Navbar />
    <div className="main-content" style={{ marginTop: "120px" }}>
      {/* The Access component will be rendered here */}
      <Access />
      <Footer />
      </div>
    </>
  );
};

export default Home;
