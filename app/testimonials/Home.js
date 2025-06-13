"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Testimonials from './Testimonials';

const Home = () => {
  return (
    <>
    <Navbar />
    <div className="main-content" style={{ marginTop: "120px" }}>
      {/* The Testimonials component will be rendered here */}
      <Testimonials />
      <Footer />
      </div>
    </>
  );
};

export default Home;
