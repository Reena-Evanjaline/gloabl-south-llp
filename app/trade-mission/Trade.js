'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Modal, Form, Button } from 'react-bootstrap';
import { BsTelephoneFill, BsEnvelopeFill } from 'react-icons/bs';

function Trade() {
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
      {/* Responsive background image banner */}
      <div className="position-relative bg-cover-wrapper text-white">
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-start justify-content-start" style={{ padding: '.5px 5%' }}>
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
              <h1 className="fw-bold mb-4">Trade mission</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-2" style={{ textAlign: 'justify' }}>
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-8" style={{ textAlign: 'justify' }}>
            <h1 className="mt-3">Trade Mission</h1>
            <h2 className="mt-2"><strong>Our Trade Mission Services Include:</strong></h2>

            <p>✅ <strong>Curated B2B Meetings:</strong><br /> Engage in one-on-one sessions with vetted Indian enterprises — importers, distributors, OEMs, and channel partners.</p>
            <p>✅ <strong>G2G & Institutional Delegations:</strong><br /> Meetings arranged with relevant government counterparts to enhance bilateral cooperation and sectoral partnerships.</p>
            <p>✅ <strong>NGO Delegations:</strong><br /> Support in connecting with appropriate communities and institutions aligned with your mission or outreach objectives.</p>
            <p>✅ <strong>Networking with Trade Bodies:</strong><br /> Connect with chambers of commerce, sector-specific associations, and export promotion councils.</p>
            <p>✅ <strong>Exclusive Briefings:</strong><br /> Closed-door sessions with nodal ministries, business consultants, attorneys, and auditors to understand legal, tax, and regulatory environments.</p>
            <p>✅ <strong>Industrial & Site Visits:</strong><br /> Guided visits to SEZs, industrial parks, local manufacturing units, and key infrastructure projects.</p>
            <p>✅ <strong>Pan-India Market Exploration:</strong><br /> Cover multiple Indian cities in a single mission to assess regional opportunities and economic potential.</p>
            <p>✅ <strong>Import Facilitation:</strong><br /> Support for pre-shipment of samples, brochures, and literature to ensure readiness for display and discussion.</p>
            <p>✅ <strong>Logistics Management:</strong><br /> Full support for hotel bookings, local travel arrangements, interpreter services, and delegation kits.</p>
            <p>✅ <strong>Pre-Mission Planning:</strong><br /> Regular client consultations to ensure agenda alignment, cultural fit, and outcomes-oriented programming.</p>

            <h2><strong>Why Choose Us?</strong></h2>
            <ul style={{ textAlign: 'justify' }}>
              <li>20+ years of India market facilitation experience</li>
              <li>In-house multilingual, cross-cultural teams</li>
              <li>Seamless experience from airport arrival to business meetings</li>
            </ul>

            <p style={{ textAlign: 'justify' }}> <strong>Contact us today</strong> to design a tailor-made trade mission that delivers results — whether it's sector-specific, multi-industry, or investment-focused.</p>
            <p style={{ textAlign: 'justify' }}><strong>Let us be your trusted bridge to India.</strong></p>

            <button className="btn btn-outline-light bg-primary px-4 py-2 rounded-pill mt-2 mb-3" onClick={handleShow}>
              For Enquiries &nbsp; <span>&rarr;</span>
            </button>

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
                    'Company Name', 'Tel', 'Email', 'Products / Services',
                    'HS Code', 'Comp. Homepage', 'Address', 'Zip',
                    'Details of Service Required',
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
          <div className="col-lg-4 d-flex flex-column" style={{ textAlign: 'justify' }}>
            <Image
              src="/images/trade-1.png"
              alt="Trade Mission"
              width={800}
              height={230}
              className="img-fluid rounded shadow mb-4"
            />
            <h2><strong>Impact You Can Expect</strong></h2>
            <ul>
              <li className="mt-2">Increased investor engagement and qualified leads</li>
              <li className="mt-2">More persuasive value proposition for global investors</li>
              <li className="mt-2">Enhanced visibility among strategic sectors and geographies</li>
            </ul>

            <h2 className="fw-bold">Planning a trade mission</h2>

            <div className="d-flex flex-column flex-md-row gap-3 mt-3 w-100 custom-width mx-auto">


              <div className="d-flex border border-2 border-danger rounded-pill overflow-hidden w-100">
                <div className="d-flex align-items-center justify-content-center px-3 text-danger fs-5">
                  <BsTelephoneFill />
                </div>
                <div className="d-flex align-items-center px-2 text-danger fw-bold px-3 py-2">
                  01892 673
                </div>
              </div>

              <button className="btn d-flex align-items-center bg-danger text-white rounded-pill px-0 py-0 border-0 w-100">
                <div className="bg-white text-danger d-flex align-items-center justify-content-center px-3 py-2 rounded-start-pill fs-5">
                  <BsEnvelopeFill />
                </div>
                <div className="px-3 py-2 fw-bold text-start w-100">Start Planning Now</div>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Style for mobile background ratio */}
      <style jsx>{`
        .bg-cover-wrapper {
          background-image: url('/images/tr.png');
          background-size: cover;
          background-position: center;
          width: 100%;
          padding-top: 56.25%; /* 16:9 aspect ratio */
        }

        @media (min-width: 768px) {
          .bg-cover-wrapper {
            height: 65vh;
            padding-top: 0;
          }
        }
          .custom-width {
  max-width: 100%;
}

@media (max-width: 576px) {
  .custom-width {
    max-width: 280px; /* Adjust as needed */
  }
}

      `}</style>
    </>
  );
}

export default Trade;
