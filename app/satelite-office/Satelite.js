'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Modal, Form, Button } from 'react-bootstrap';

function Satelite() {
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
      {/* Inline styles for banner */}
      <style>{`
        .hero-banner {
          background-image: url('/images/sa.jpg');
          background-size: cover;
          background-position: center;
          height: 65vh;
          padding: 0.5px 5%;
        }

        @media (max-width: 768px) {
          .hero-banner {
            aspect-ratio: 16 / 9;
            height: auto !important;
          }
        }

        .banner-content {
          background-color: rgba(0, 183, 177, 0.8);
          color: white;
          padding: 20px;
          max-width: 600px;
          border-bottom-right-radius: 40px;
          border-top-left-radius: 8px;
        }

        .text-justify {
          text-align: justify;
        }
      `}</style>

      {/* Hero Banner */}
      <div className="hero-banner text-white d-flex align-items-start justify-content-start">
        <div className="banner-content">
          <div style={{ transform: 'skewY(1deg)' }}>
            <h1 className="fw-bold mb-4">Satellite Office</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid my-2">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-8 text-justify">
            <h1 className="mt-3">Satellite Office</h1>
            <p>
              This concept has been practiced across the Globe for several years, but relatively nascent in India...
            </p>

            <h2 className="fw-bold mt-4">Satellite Office Services in India</h2>
            <small className="">Your Local Presence. Our Strategic Support.</small>

            <p className="mt-3">
              While satellite offices are a proven Global concept...
            </p>

            <h2 className="fw-bold mt-4">What We Offer:</h2>
            <ul>
              <li className="mt-2">Fully managed office space</li>
              <li className="mt-2">Local staff hiring & payroll support</li>
              <li className="mt-2">Camp office for visiting executives</li>
              <li className="mt-2">Product display center for client visits</li>
              <li className="mt-2">Warehouse support for goods and samples</li>
              <li className="mt-2">Compliance advisory and documentation</li>
              <li className="mt-2">International logistics assistance</li>
            </ul>

            <p className="fw-bold mt-4" style={{ fontSize: '1.2rem' }}>
              Interested in working with us? Whether you're looking to assess a market...
            </p>
<button
              className="btn btn-outline-light bg-primary px-4 py-2 rounded-pill mt-4"
              onClick={handleShow}
            >
              For Enquiries &nbsp; <span>&rarr;</span>
            </button>
            {/* Modal */}
            <Modal show={show} onHide={handleClose} centered size="lg">
              <Modal.Header closeButton>
                <Modal.Title>For enquiries</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={handleSubmit}>
                  {[{
                    label: 'Inquiry Type',
                    options: ['Buying', 'Selling', 'Market Report', 'Trade mission', 'Local Exhibition Participation', 'Satellite Office', 'Personalized B2Bs', 'Campaign', 'Others', 'Foreign Trade Event Promotion in India']
                  }, {
                    label: 'Nature of Entity',
                    options: ['Govt', 'Private', 'Business Chamber', 'Non Profit offices', 'Individual']
                  }, {
                    label: 'Business Type',
                    options: ['Domestic', 'Export', 'Import', 'Warehousing & Indenting Agents', 'Others']
                  }, {
                    label: 'Business Category',
                    options: ['Manufacturer', 'Exporter', 'Importer', 'Others']
                  }].map((field, idx) => (
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
                    'Company Name', 'Tel', 'Email', 'Products / Services',
                    'HS Code', 'Comp. Homepage', 'Address', 'Zip', 'Details of Service Required'
                  ].map((label, i) => (
                    <Form.Group className="mb-3" key={i}>
                      <Form.Label>{label}</Form.Label>
                      <Form.Control as="input" placeholder={label} />
                    </Form.Group>
                  ))}

                  <Button variant="primary" type="submit">Submit</Button>
                </Form>
              </Modal.Body>
            </Modal>
          </div>

          {/* Right Column */}
          <div className="col-lg-4">
            <Image
              src="/images/sat.jpeg"
              alt="Satellite Office"
              width={800}
              height={230}
              className="img-fluid rounded shadow"
            />
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Satelite;
