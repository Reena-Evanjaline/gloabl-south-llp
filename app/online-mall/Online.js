'use client';
import React from 'react';
import Image from 'next/image';
import { Form, Button } from 'react-bootstrap';

function Online() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="d-flex align-items-start justify-content-start text-white online-hero"
        style={{
          backgroundImage: 'url("/images/online.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '.5px 5%',
        }}
      >
        <div
          className="online-overlay p-2"
          style={{
            backgroundColor: '#00b7b1',
            color: '#fff',
            maxWidth: '600px',
            borderBottomRightRadius: '40px',
            borderTopLeftRadius: '8px',
            opacity: 0.8,
          }}
        >
          <div style={{ transform: 'skewY(1deg)' }}>
            <h1 className="fw-bold mb-4">Online Mall</h1>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="container-fluid my-2">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-8 px-5">
            <h2 className="mb-1 fw-bold">Online Mall – Product Gallery & Video Showcase</h2>
            <p className="mb-1 text-justify">
              Step into our <strong>Interactive Online Mall</strong> – your one-stop digital destination to explore global products, innovations, and solutions.
            </p>

            <h3 className="mt-4 mb-3 fw-bold">Product Gallery</h3>
            <p className="mb-1 text-justify">
              Browse a curated collection of high-quality products from verified exporters, manufacturers, and suppliers across various sectors:
            </p>
            <ul className="mb-2 text-justify">
              <li>Industrial & Consumer Goods</li>
              <li>Health & Wellness Products</li>
              <li>Fashion & Textiles</li>
              <li>Food & Beverage</li>
              <li>Engineering & Tools</li>
            </ul>

            <h4 className="mb-1 fw-semibold">Key Features of Each Listing:</h4>
            <ul className="mb-3 text-justify">
              <li>HD product images</li>
              <li>Technical specifications</li>
              <li>Company details</li>
              <li>Direct inquiry options</li>
            </ul>

            <h3 className="mt-4 mb-3 fw-bold">Video Showcases</h3>
            <p className="mb-1 text-justify">Experience products in action! Our product videos provide:</p>
            <ul className="mb-3 text-justify">
              <li>Real-time demonstrations</li>
              <li>Usage highlights and features</li>
              <li>Factory tours and quality assurance processes</li>
              <li>Brand stories and market applications</li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="col-lg-4 d-flex flex-column">
            <Image
              src="/images/ml-1.png"
              alt="Trade Mission"
              width={800}
              height={230}
              className="img-fluid rounded shadow mb-4"
            />
          </div>
        </div>
      </div>

      {/* Modals remain unchanged... */}

      {/* Styles */}
      <style jsx>{`
        .online-hero {
          height: 65vh;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
        }

        .text-justify {
          text-align: justify;
        }

        @media (max-width: 767px) {
          .online-hero {
            height: auto;
            aspect-ratio: 16 / 9;
            position: relative;
          }

          .online-overlay {
            position: absolute;
            top: 0;
            left: 0;
            padding: 20px;
            width: 100%;
          }
        }

        ul.text-justify li {
          text-align: justify;
        }
      `}</style>
    </>
  );
}

export default Online;
