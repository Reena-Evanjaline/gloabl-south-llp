'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Modal, Button, Form } from 'react-bootstrap';

function Market() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
    handleClose();
  };

  return (
    <>
      {/* Hero Section */}
      <div
        className="d-flex align-items-start justify-content-start text-white"
        style={{
          backgroundImage: 'url("/images/ma-bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '60vh',
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
            <h1 className="fw-bold mb-4">Market Reports</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <h1 className="text-center mt-3" style={{fontSize:"55px"}}>Market Reports</h1>
      <div className="container mt-4">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-7">
            <p style={{ textAlign: 'justify' }}>
              <h2><strong>Research-Backed Market Intelligence, Designed for Decision-Makers</strong></h2>
              
              At the core of our research practice lies design thinking — we start with the client's
              needs in mind, even before the assignment begins. Our Terms of Reference are shaped by
              proactive engagement and a deep understanding of the business challenge.
            </p>

            <p style={{ textAlign: 'justify' }}>
              <h2><strong> What Sets Us Apart?</strong></h2>
              <br />
              <strong>Narrow Focus, Deep Insight:</strong> Our market investigations are sharply
              focused, allowing us to dive deep into specifics that truly matter.
            </p>

            <p style={{ textAlign: 'justify' }}>
             <h2> <strong>Beyond Desk Research:</strong></h2> We don’t just rely on published data. Our team
              actively meets relevant industry stakeholders to gather first-hand insights.
            </p>

            <p style={{ textAlign: 'justify' }}>
              <h2><strong>Validated & Refined:</strong> All primary and secondary information is</h2>
              validated and enhanced with the expertise of our in-house researchers.
            </p>

            <p style={{ textAlign: 'justify' }}>
              <h2><strong> Our Market Research Services Include:</strong></h2>
            </p>

            <ul style={{ textAlign: 'justify', listStyleType: 'disc', paddingLeft: '20px' }}>
              <li> Market Sizing & Forecasting</li>
              <li> Trend Analysis & Competitive Landscape</li>
              <li> Key Market Participants Overview</li>
              <li>Raw Material & Production Environment Study</li>
              <li> Infrastructure & Location Intelligence</li>
              <li> Geo-Political Climate Impact Reports</li>
            </ul>

            <p style={{ textAlign: 'justify' }}>
              We serve a wide range of industries and product categories — excluding only those
              requiring highly specialised technical know-how.
            </p>

            <p style={{ textAlign: 'justify' }}>
              <h2><strong> Exclusive Insights & Short Reports</strong></h2>
              <br />
              Our reports are concise, precise, and delivered in an executive-friendly format. Where
              possible, we include interviews with key stakeholders (subject to their consent).
            </p>

            

            {/* Modal */}
            <Modal show={show} onHide={handleClose} centered size="lg">
              <Modal.Header closeButton>
                <Modal.Title>For enquiries</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={handleSubmit}>
                  {[
                    { label: 'Inquiry Type', options: ['Buying', 'Selling', 'Market Report', 'Trade mission', 'Local Exhibition Participation', 'Satellite Office', 'Personalized B2Bs', 'Campaign', 'Others', 'Foreign Trade Event Promotion in India'] },
                    { label: 'Nature of Entity', options: ['Govt', 'Private', 'Business Chamber', 'Non Profit offices', 'Individual'] },
                    { label: 'Business Type', options: ['Domestic', 'Export', 'Import', 'Warehousing & Indenting Agents', 'Others'] },
                    { label: 'Business Category', options: ['Manufacturer', 'Exporter', 'Importer', 'Others'] },
                  ].map((field, idx) => (
                    <Form.Group className="mb-3" key={idx}>
                      <Form.Label>{field.label}</Form.Label>
                      <Form.Select required>
                        <option value="">Select {field.label}</option>
                        {field.options.map((opt, i) => (
                          <option key={i}>{opt}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  ))}

                  {[
                    'Company Name',
                    'Tel',
                    'Email',
                    'Products / Services',
                    'HS Code',
                    'Comp. Homepage',
                    'Address',
                    'Zip',
                    'Details of Service Required',
                  ].map((label, i) => (
                    <Form.Group className="mb-3" key={i}>
                      <Form.Label>{label}</Form.Label>
                      <Form.Control as="input" placeholder={label} />
                    </Form.Group>
                  ))}

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Modal.Body>
            </Modal>
          </div>

          {/* Right Column */}
          <div className="col-lg-5">
            <Image
              src="/images/market-banner.png"
              alt="Market Reports"
              width={600}
              height={300}
              className="img-fluid rounded"
            />
            <p className="fw-bold mt-3">
              Interested in working with us? Whether you're looking to assess a market, validate a
              location, or verify a business partner, we offer actionable insights with
              confidentiality and integrity
            </p>

            <button className="btn btn-outline-light bg-primary px-4 py-2 rounded-pill" onClick={handleShow}>
              For Enquiries &nbsp; <span>&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Market;
