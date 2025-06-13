"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Satelite from './Satelite';

const Home = () => {
  return (
    <>
    <Navbar />
    <div className="main-content" style={{ marginTop: "120px" }}>
      {/* The Satelite component will be rendered here */}
      <Satelite />
      <Footer />
      </div>
    </>
  );
};

export default Home;
