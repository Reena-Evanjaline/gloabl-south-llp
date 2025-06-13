"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Exim from './Exim';

const Home = () => {
  return (
    <>
    <Navbar />
    <div className="main-content" style={{ marginTop: "120px" }}>
      {/* The Exim component will be rendered here */}
      < Exim/>
      <Footer />
      </div>
    </>
  );
};

export default Home;
