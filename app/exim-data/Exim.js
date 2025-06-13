import React from 'react';
import { Card } from 'react-bootstrap';

const cardData = [
  {
    title: 'Product Name',
    description: 'Enter the exact name of the product to get precise insights and data trends specific to that item.',
  },
  {
    title: 'HS Code (Harmonized System Code)',
    description: 'Provide the 6–10 digit HS code to classify your product using international customs standards.',
  },
  {
    title: 'Record Type Required – Exports / Imports',
    description: 'Choose whether you need export data, import data, or both for focused reporting.',
  },
  {
    title: 'Year of Interest',
    description: 'Specify the target year(s) to analyze trade volumes and market behavior over time.',
  },
  {
    title: 'Target Country',
    description: 'Mention the country of trade interest to narrow down data to that specific geography.',
  },
  {
    title: 'Port of Entry/Exit',
    description: 'State the customs port involved to refine your trade data search by location.',
  },
];

function Exim() {
  return (
    <>
     <div
                className="d-flex align-items-start justify-content-start text-white"
                style={{
                    backgroundImage: 'url("/images/exim.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '65vh',
                    padding: '.5px 5%',
                }}
            >
                <div
                    style={{
                        backgroundColor: '#00b7b1',
                        color: '#fff',
                        padding: '40px',
                        maxWidth: '600px',
                        borderBottomRightRadius: '40px',
                        borderTopLeftRadius: '8px',
                    }}
                >
                    <div style={{ transform: 'skewY(1deg)' }}>
                        <h1 className="fw-bold mb-4">Exim data</h1>
                      
                    </div>
                </div>
            </div>
    <div className="container py-5">
      <div className="row g-4">
        {cardData.map((item, idx) => (
          <div className="col-md-4" key={idx}>
            <Card
              className="shadow text-white h-100"
              style={{
                backgroundColor: '#597cb3', // Navy blue
                border: 'none',
                minHeight: '200px',
              }}
            >
              <Card.Body className="d-flex flex-column justify-content-center p-4">
                <Card.Title className="fs-5 fw-bold mb-3 text-center">{item.title}</Card.Title>
                <Card.Text className="text-white text-center" style={{ fontSize: '0.95rem' }}>
                  {item.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Exim;
