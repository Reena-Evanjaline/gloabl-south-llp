'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Modal, Form, Button } from 'react-bootstrap';

function Investment() {
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
      {/* Responsive Banner */}
      <div className="banner-wrapper position-relative w-100 text-white">
        <div className="banner-inner d-flex align-items-start justify-content-start">
          <div className="banner-content text-white p-4">
            <div style={{ transform: 'skewY(1deg)' }}>
              <h1 className="fw-bold mb-4">INVESTMENT REPORTS</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container my-5 justify-text">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-8">
            <h2 className="mb-4">Investment Destination Promotions</h2>

            <h4><strong>Investor Targeting & Outreach</strong></h4>
            <p>Identify and engage qualified foreign investors aligned with local sectoral strengths (e.g., manufacturing, tech, infrastructure, clean energy).</p>

            <h4><strong>Opportunity Packaging</strong></h4>
            <p>Create sectoral investment briefs, pitch decks, and market access guides that highlight ROI, incentives, and success stories.</p>

            <h4><strong>Promotion Campaigns</strong></h4>
            <p>Design and execute online and offline campaigns — webinars, roadshows, trade missions — in collaboration with investment promotion authorities.</p>

            <h4><strong>Investor Support & Facilitation</strong></h4>
            <p>Bilingual assistance with inquiries, matchmaking, site visits, and regulatory clarifications.</p>

            <h4><strong>Reputation & Trust Building</strong></h4>
            <p>Highlight policy stability, ecosystem readiness, and success cases through editorial content, interviews, and media placements.</p>

            <h4><strong>Ideal Clients</strong></h4>
            <ul>
              <li>National and sub-national investment promotion agencies</li>
              <li>Economic zones, industrial parks, or SEZs</li>
              <li>Sectoral ministries (energy, infrastructure, EV, agri-tech, etc.)</li>
              <li>Chambers of commerce and international trade desks</li>
            </ul>

            <h4><strong>Impact You Can Expect</strong></h4>
            <ul>
              <li>Increased investor engagement and qualified leads</li>
              <li>More persuasive value proposition for Global Investors</li>
              <li>Enhanced visibility among strategic sectors and geographies</li>
            </ul>

            <p>
              As a Trade Office–style representative, we work alongside Governments, investment promotion agencies, economic zones, and chambers of commerce to position their regions as prime destinations for foreign investment and promote the resident Company’s product in the Indian Market.
            </p>
            <p>
              We act as your external investment desk — promoting your region or sector to targeted investor groups, managing inquiries, and nurturing long-term interest from credible firms.
            </p>
            <Button
              className="mt-4 btn btn-primary rounded-pill px-4"
              onClick={handleShow}
            >
              For Enquiries &nbsp; →
            </Button>
          </div>

          {/* Right Column */}
          <div className="col-lg-4 mt-5 mt-lg-0">
            <Image
              src="/images/what.png"
              alt="Trade Mission"
              width={600}
              height={400}
              className="img-fluid rounded shadow mb-4"
            />

            <h4><strong>Suitable For</strong></h4>
            <ul>
              <li>National & subnational IPAs</li>
              <li>SEZs & industrial corridors</li>
              <li>Sectoral ministries</li>
              <li>FDI-ambitious city/regional govts</li>
            </ul>

            <h4><strong>Why Partner With Us?</strong></h4>
            <ul>
              <li>Proven experience in trade facilitation</li>
              <li>In-depth sectoral knowledge and access to business networks</li>
              <li>Diplomatic-style engagement with a business-first approach</li>
              <li>On-ground presence with multilingual, cross-cultural teams</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Enquiry Modal */}
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>For Enquiries</Modal.Title>
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
                <Form.Control
                  as={label === 'Details of Service Required' ? 'textarea' : 'input'}
                  type="text"
                  placeholder={label}
                  required
                />
              </Form.Group>
            ))}

            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Responsive Banner Styles */}
      <style jsx>{`
        .justify-text {
          text-align: justify;
        }
        .banner-wrapper {
          width: 100%;
        }
        .banner-inner {
          background-image: url("/images/invest.jpg");
          background-size: cover;
          background-position: center;
          padding: 0.5px 5%;
        }
        .banner-content {
          background-color: #00b7b1;
          max-width: 600px;
          border-bottom-right-radius: 40px;
          border-top-left-radius: 8px;
          opacity: 0.85;
        }

        @media (min-width: 992px) {
          .banner-inner {
            height: 65vh;
          }
        }

        @media (max-width: 991px) {
          .banner-inner {
            position: relative;
            width: 100%;
            padding-top: 56.25%; /* 16:9 aspect ratio */
          }

          .banner-inner .banner-content {
            position: absolute;
            top: 0;
            left: 0;
          }
        }
      `}</style>
    </>
  );
}

export default Investment;
