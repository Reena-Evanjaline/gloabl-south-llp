"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Investment from './Investment';

const Home = () => {
  return (
    <>
    
    <Navbar />
    <div className="main-content" style={{ marginTop: "120px" }}>
      <Investment />
      <Footer />
      </div>
    </>
  );
};

export default Home;
