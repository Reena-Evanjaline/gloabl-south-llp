'use client';
import React from 'react';
import Image from 'next/image';


function Management() {
  return (
    <div className="container my-5">
      <h2 className="fw-bold">International Trade Promotion Organization</h2>
      <p>
        We are an International Trade Promotion Organization committed to helping businesses—especially SMEs—expand their footprint in India and beyond. Operated by seasoned professionals with over 20 years of experience, we offer strategic, value-driven services to ensure efficient market entry and sustained growth.
        Whether you're a foreign business exploring Indian opportunities or a domestic firm aiming for global outreach, we act as your extended trade arm—offering satellite office support, market insights, buyer matchmaking, trade missions, government liaison, and more.
        Our market reports deliver sharp, bird’s-eye insights not readily available in the public domain, and our roadshows and campaigns are curated using design thinking for maximum impact—not just event execution.
         We work with embassies, trade bodies, chambers, and businesses of all sizes—from startups to large enterprises—on a flexible fee model: assignment-based or annual subscription.
        Get in touch today—submit an inquiry and our team will guide you forward.
      </p>


      <div className="row mt-4">
        {[
          {
            title: 'REPORTS',
            description: 'Include Market reports, Investigation verification reports , distributor / importer -exporters reports, Product sourcing reports ',
            image: '/images/destinations-thumb.jpg',
          },
          {
            title: 'TRADE MISSION',
            description: 'Include SATELLITE Office space provision,  personalised buyer- seller meeting, launch , promotion campaign, market entry assistance,',
            image: '/images/services-thumb.jpg',
          },
          {
            title: 'INVESTMENT',
            description: 'include investment support , destination promotion , trade facilitation, Trade office outsourcing, product sourcing suppport ',
            image: '/images/sponsors-thumb.jpg',
          },
          {
            title: 'Sectors',
            description: 'Automotive, Capital &Industrial goods, Cosmetics, Infrastructure , AI &Machinelearning , Semiconductor, electronics.',
            image: '/images/sectors-thumb.jpg',
          },
        ].map((item, index) => (
          <div key={index} className="col-md-3 mb-4">
            <div className="card card-hover border-0 shadow rounded overflow-hidden">
              <div className="image-container" style={{ height: '220px', position: 'relative' }}>
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="card-body text-white" style={{ background: 'teal' }}>
                <h5 className="card-title fw-bold">{item.title}</h5>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Management;
