'use client';
import React from 'react';
import {
  FaChartBar,
  FaGlobe,
  FaHandshake,
  FaUserTie,
  FaFileAlt,
  FaBuilding,
} from 'react-icons/fa';

function Dedicate() {
  const cards = [
    { title: 'Market Reports', icon: <FaFileAlt /> },
    { title: 'Satellite Office', icon: <FaBuilding /> },
    { title: 'Trade Mission', icon: <FaGlobe /> },
    { title: 'Personalized Buyer Meetings', icon: <FaHandshake /> },
    { title: 'Distributor Importer Reports', icon: <FaChartBar /> },
    { title: 'Investment Destination Promotion', icon: <FaUserTie /> },
  ];

  return (
    <div
      className="py-5 text-center"
      style={{
        backgroundColor: '#dff2f7',
        backgroundImage: 'linear-gradient(180deg, #dff2f7 0%, #ffffff 100%)',
      }}
    >
      <div className="container px-3">
        <h2 className="fw-bold text-dark display-6">What We Deliver</h2>
        <div className="border-bottom border-3 border-info w-25 mx-auto my-3"></div>

        <div className="row g-4 justify-content-center mb-5">
          {cards.map((item, index) => (
            <div className="col-12 col-sm-6 col-lg-4" key={index}>
              <div
                className="h-100 p-4 d-flex flex-column justify-content-center align-items-center text-center"
                style={{
                  borderRadius: '20px',
                  backdropFilter: 'blur(12px)',
                  background: 'rgba(255, 255, 255, 0.85)', // Slightly more opaque
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  boxShadow:
                    '0 8px 30px rgba(0, 0, 0, 0.05), 0 0 8px rgba(13, 202, 240, 0.15)',
                  transition: 'all 0.4s ease-in-out',
                  backgroundColor: '#f9fdff', // subtle solid background color
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow =
                    '0 16px 40px rgba(0,0,0,0.1), 0 0 12px rgba(13, 202, 240, 0.3)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow =
                    '0 8px 30px rgba(0,0,0,0.05), 0 0 8px rgba(13, 202, 240, 0.15)';
                }}
              >
                <div
                  className="mb-3 d-flex justify-content-center align-items-center"
                  style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #0dcaf0, #0aa7c7)',
                    color: '#fff',
                    fontSize: '28px',
                    animation: 'pulse 2s infinite',
                  }}
                >
                  {item.icon}
                </div>
                <h5 className="fw-bold text-dark">{item.title}</h5>
              </div>
            </div>
          ))}
        </div>

        <p
          className="lead mx-3"
          style={{ textAlign: 'justify', margin: '0 auto' }}
        >
          As a Trade Office–style representative, we work alongside governments,
          investment promotion agencies, economic zones, and chambers of commerce to
          position their regions as prime destinations for foreign investment and
          promote the resident company’s product in the Indian market. We act as your
          external investment desk — promoting your region or sector to targeted
          investor groups, managing inquiries, and nurturing long-term interest from
          credible firms.
        </p>
      </div>

      {/* Pulse animation */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}

export default Dedicate;
