"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Who from './Who';

const Home = () => {
  return (
    <>
    <Navbar />
    <div className="main-content" style={{ marginTop: "120px" }}>
      {/* The Who component will be rendered here */}
      <Who />
      <Footer />
      </div>
    </>
  );
};

export default Home;
