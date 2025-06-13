"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Faq from './Faq';

const Home = () => {
  return (
    <>
    <Navbar />
    <div className="main-content" style={{ marginTop: "120px" }}>
      {/* The Faq component will be rendered here */}
      <Faq />
      <Footer />
      </div>
    </>
  );
};

export default Home;
