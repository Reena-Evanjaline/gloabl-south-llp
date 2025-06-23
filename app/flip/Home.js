"use client";
import React from 'react';
import FlipBook_v2 from './FlipBook_v2';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
    <Navbar />
    <div className="main-content" style={{ marginTop: "120px" }}>
      <FlipBook_v2 />
      <Footer />
      </div>
    </>
  );
};

export default Home;
