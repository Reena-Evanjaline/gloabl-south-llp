'use client';
import React from 'react';

function Dedicate() {
  const cards = [
    { title: 'Market Reports' },
    { title: 'Satelite Office' },
    { title: 'Trade Mission' },
    { title: 'Personalized Buyer Meetings' },
    { title: 'Distributor Importer Reports' },
    { title: 'Investment Destination Promotion' },
  ];

  return (
    <div className="py-5 text-center" style={{ backgroundColor: "#f1f0ec" }}>
      <div className="container px-3">
        <h2 className="fw-bold text-dark">What We Deliver</h2>
        <div className="border-bottom border-3 border-info w-25 mx-auto my-3"></div>

        <div className="row g-4 justify-content-center mb-4">
          {cards.map((item, index) => (
            <div className="col-12 col-sm-6 col-lg-4" key={index}>
              <div
                className="card custom-card h-100 shadow-sm border-0"
                style={{
                  borderTop: '5px solid #0dcaf0',
                  borderRadius: '12px',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                }}
              >
                <div className="card-body d-flex justify-content-center align-items-center">
                  <h5 className="card-title fw-bold text-dark m-0">{item.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mx-2" style={{ textAlign: 'justify' }}>
          As a Trade Office–style representative, we work alongside governments, investment
          promotion agencies, economic zones, and chambers of commerce to position their regions
          as prime destinations for foreign investment and promote the resident Company’s product
          in the Indian Market. We act as your external investment desk — promoting your region
          or sector to targeted investor groups, managing inquiries, and nurturing long-term
          interest from credible firms.
        </p>
      </div>
    </div>
  );
}

export default Dedicate;
