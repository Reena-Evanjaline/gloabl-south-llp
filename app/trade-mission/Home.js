"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Trade from './Trade';

const Home = () => {
  return (
    <>
    <Navbar />
    <div className="main-content" style={{ marginTop: "120px" }}>
      {/* The Trade component will be rendered here */}
      <Trade />
      <Footer />
      </div>
    </>
  );
};

export default Home;
