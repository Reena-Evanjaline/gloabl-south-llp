'use client';
import React from 'react';
import { Card } from 'react-bootstrap';

const cardData = [
  {
    title: 'Product Name',
    description:
      'Enter the exact name of the product to get precise insights and data trends specific to that item.',
  },
  {
    title: 'HS Code (Harmonized System Code)',
    description:
      'Provide the 6–10 digit HS code to classify your product using international customs standards.',
  },
  {
    title: 'Record Type Required – Exports / Imports',
    description:
      'Choose whether you need export data, import data, or both for focused reporting.',
  },
  {
    title: 'Year of Interest',
    description:
      'Specify the target year(s) to analyze trade volumes and market behavior over time.',
  },
  {
    title: 'Target Country',
    description:
      'Mention the country of trade interest to narrow down data to that specific geography.',
  },
  {
    title: 'Port of Entry/Exit',
    description:
      'State the customs port involved to refine your trade data search by location.',
  },
];

function Exim() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="d-flex align-items-start justify-content-start text-white exim-hero"
        style={{
          backgroundImage: 'url("/images/exim.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '.5px 5%',
        }}
      >
        <div
          className="exim-overlay p-4"
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
            <h1 className="fw-bold mb-4">Exim data</h1>
          </div>
        </div>
      </div>

      {/* Card Section */}
      <div className="container py-5">
        <div className="row g-4">
          {cardData.map((item, idx) => (
            <div className="col-md-4" key={idx}>
              <Card
                className="shadow text-white h-100"
                style={{
                  backgroundColor: '#597cb3',
                  border: 'none',
                  minHeight: '200px',
                }}
              >
                <Card.Body className="d-flex flex-column justify-content-center p-4">
                  <Card.Title className="fs-5 fw-bold mb-3 text-center">
                    {item.title}
                  </Card.Title>
                  <Card.Text
                    className="text-white text-justify"
                    style={{ fontSize: '0.95rem' }}
                  >
                    {item.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .exim-hero {
          height: 65vh;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
        }

        .text-justify {
          text-align: justify;
        }

        @media (max-width: 767px) {
          .exim-hero {
            height: auto;
            aspect-ratio: 16 / 9;
            position: relative;
          }

          .exim-overlay {
            position: absolute;
            top: 0;
            left: 0;
            padding: 20px;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}

export default Exim;
