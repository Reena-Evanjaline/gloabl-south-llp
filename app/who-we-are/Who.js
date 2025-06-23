'use client';
import React from 'react';
import Image from 'next/image';

function Who() {
  return (
    <>
      {/* Banner Image */}
      <div
        className="d-flex align-items-start justify-content-start text-white"
        style={{
          backgroundImage: 'url("/images/who.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '80vh',
          padding: '.5px 5%',
        }}
      >
        <div
          style={{
            backgroundColor: '#00b7b1',
            color: '#fff',
            padding: '20px',
            maxWidth: '600px',
            borderBottomRightRadius: '40px',
            borderTopLeftRadius: '8px',
             opacity: 0.8,
          }}
        >
          <div style={{ transform: 'skewY(1deg)' }}>
            <h1 className="fw-bold mb-4">WHO WE ARE</h1>

          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-12">
            <h2><strong>Empowering Global Trade Connections</strong></h2>
            <p style={{ textAlign: 'justify' }}>
              We are an international trade facilitation and promotion organization committed to connecting global businesses through reliable partnerships, strategic insights, and actionable market intelligence. Our mission is to simplify the complexities of cross-border trade by offering customized solutions, from distributor research to trade delegations and promotional campaigns.
            </p>

            <h2><strong>Our Mission</strong></h2>
            <p style={{ textAlign: 'justify' }}>
              To bridge gaps between manufacturers, importers, and exporters across geographies by delivering meaningful business intelligence and on-ground support that drive long-term success.
            </p>

            <h2><strong>Our Vision</strong></h2>
            <p style={{ textAlign: 'justify' }}>
              A world where global business is driven by transparency, trust, and shared value. We envision a thriving ecosystem of small and medium enterprises tapping into new markets with confidence.
            </p>

            <h2><strong>What We Offer</strong></h2>
            <ul>
              <li>
                <strong>Supplier Identification & Shortlisting —</strong>
                We research and screen suppliers based on your product specs, volumes, certifications, and target price.
              </li>
              <li>
                <strong>Quotation & Benchmarking —</strong>
                Transparent comparison of prices, MOQs, payment terms, and lead times.
              </li>
              <li>
                <strong>Supplier Verification & Audits —</strong>
                Background checks, factory visits (on request), and compliance assessments.
              </li>
              <li>
                <strong>Negotiation & Communication Support —</strong>
                Multilingual negotiation assistance to close favorable terms.
              </li>
              <li>
                <strong>Sampling & Quality Checks —</strong>
                Sample procurement, lab testing, and third-party inspection coordination.
              </li>
              <li>
                <strong>Logistics & Import Guidance —</strong>
                Advice on duties, documentation, and freight forwarding.
              </li>
            </ul>

          </div>
        </div>
      </div>
    </>
  );
}

export default Who;
