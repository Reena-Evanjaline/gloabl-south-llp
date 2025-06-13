"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Personalized from './Personalized';

const Home = () => {
  return (
    <>
    <Navbar />
    <div className="main-content" style={{ marginTop: "120px" }}>
      {/* The Personalized component will be rendered here */}
      <Personalized />
      <Footer />
      </div>
    </>
  );
};

export default Home;
