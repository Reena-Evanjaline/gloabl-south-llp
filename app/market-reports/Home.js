"use client";
import React from 'react';
import Market from './Market';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
    <Navbar />
    <div className="main-content" style={{ marginTop: "120px" }}>
      <Market />
      <Footer />
      </div>
    </>
  );
};

export default Home;
