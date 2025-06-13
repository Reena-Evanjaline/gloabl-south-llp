"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Distributor from './Distributor';

const Home = () => {
  return (
    <>
    <Navbar />
    <div className="main-content" style={{ marginTop: "120px" }}>
      {/* The Distributor component will be rendered here */}
      <Distributor />
      <Footer />
      </div>
    </>
  );
};

export default Home;
