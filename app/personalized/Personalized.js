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
      {/* Inline style block */}
      <style>{`
        .banner-section {
          background-image: url('/images/pers.png');
          background-size: cover;
          background-position: center;
          height: 65vh;
          padding: 0.5px 5%;
        }

        @media (max-width: 768px) {
          .banner-section {
            height: auto !important;
            aspect-ratio: 16 / 9;
          }
        }

        .banner-overlay {
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

      {/* Banner */}
      <div className="banner-section d-flex align-items-start justify-content-start text-white">
        <div className="banner-overlay">
          <div style={{ transform: 'skewY(1deg)' }}>
            <h1 className="fw-bold mb-4">Personalized meetings</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid my-2">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-8 text-justify">
            <h1 className="mt-3">Personalized buyer meetings</h1>
            <p>Have you ever thought about a business guide akin to a tourist guide? Yes, we offer those services to handhold visiting enterprises and help them navigate their business engagements with ease during their tour. Though we might be seen as merely optimizing a tour schedule, our role goes far beyond that.</p>
            <p>Once we identify your interest in availing our services, you can send us a precise request detailing the types of people or organizations you wish to meet — such as manufacturers, distributors, service providers, or government departments.</p>
            <p>We analyze your request within a reasonable time frame and get back to you regarding the feasibility of taking up the assignment.</p>
            <p>If we proceed, the tour date is finalized in mutual consultation, considering local factors and schedules.</p>
            <p>You will receive regular updates regarding the tour program, the areas being covered, and the key buyers or stakeholders we are targeting.</p>
            <p>A finalized tour itinerary will be shared with you well in advance of your departure.</p>
            <p>If you wish to send samples or physical catalogs in advance, you may send them to us. We will ensure they are delivered at the right time upon your arrival.</p>
            <p>Advance information to potential buyers allows you to enter serious discussions directly and more efficiently.</p>
            <p>Non-serious or irrelevant buyers are filtered out at the outset, saving your time and resources.</p>
            <p>You can choose whether to meet buyers at your location or visit theirs — we can facilitate both arrangements.</p>
            <p>We also assist in securing appointments with government officials if needed.</p>
            <p>Media personnel looking to connect with specific entities for business-related coverage can also use our services.</p>
            <p>Post-meeting follow-ups, including coordination for sending and receiving samples, can be facilitated by us as well.</p>

            <button
              className="btn btn-outline-light bg-primary px-4 py-2 rounded-pill mt-2"
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
          <div className="col-lg-4 d-flex flex-column mt-5">
            <Image
              src="/images/pee.png"
              alt="Trade Mission"
              width={800}
              height={230}
              className="img-fluid rounded shadow mb-4"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Trade;
