'use client';
import React from 'react';
import Image from 'next/image';

function Dedicate() {
  return (
    <div className="py-5 text-center" style={{ backgroundColor: "#f1f0ec" }}>
      <div className="container px-3">
        <h2 className="fw-bold text-dark">What We Deliver</h2>
        <div className="border-bottom border-3 border-info w-25 mx-auto my-3"></div>

        <div className="row g-4 justify-content-center mb-4">
          {[
            { src: '/images/targetting.png', alt: 'Targeting' },
            { src: '/images/trade.png', alt: 'Trade' },
            { src: '/images/develop.png', alt: 'Develop' },
            { src: '/images/inbound.png', alt: 'Inbound' },
            { src: '/images/investment.png', alt: 'Investment' },
          ].map((item, index) => (
            <div className="col-12 col-sm-6 col-lg-4" key={index}>
              <div
                className="bg-white rounded shadow-sm p-3"
                style={{ width: '100%', height: '200px', position: 'relative', overflow: 'hidden' }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={index === 0}
                />
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
