"use client";
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function Banner() {
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
      {/* Background Video */}
      <div style={{ position: 'relative', height: '85vh', overflow: 'hidden' }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1,
          }}
        >
          <source src="/images/global.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content Section */}
        <div
          style={{
            backgroundColor: '#00b7b1',
            color: '#fff',
            padding: '40px',
            maxWidth: '600px',
            borderBottomRightRadius: '40px',
            borderTopLeftRadius: '8px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div style={{ transform: 'skewY(1deg)' }}>
            <h1 className="fw-bold mb-4">
              Expanding networks ...<br />Opening up new markets
            </h1>
            <button
              className="btn btn-outline-light px-4 py-2 rounded-pill"
              onClick={handleShow}
            >
              For Enquiries &nbsp; <span>&rarr;</span>
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Speak to a Specialist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {/* Dropdown Fields */}
            <Form.Group className="mb-3" controlId="inquiryType">
              <Form.Label>Inquiry Type</Form.Label>
              <Form.Select required>
                <option value="">Select Inquiry Type</option>
                <option>Buying</option>
                <option>Selling</option>
                <option>Market Report</option>
                <option>Trade mission</option>
                <option>Local Exhibition Participation</option>
                <option>Satellite Office</option>
                <option>Personalized B2Bs</option>
                <option>Campaign</option>
                <option>Others</option>
                <option>Foreign Trade Event Promotion in India</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="natureEntity">
              <Form.Label>Nature of Entity</Form.Label>
              <Form.Select required>
                <option value="">Select Nature of Entity</option>
                <option>Govt</option>
                <option>Private</option>
                <option>Business Chamber</option>
                <option>Non Profit offices</option>
                <option>Individual</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="businessType">
              <Form.Label>Business Type</Form.Label>
              <Form.Select required>
                <option value="">Select Business Type</option>
                <option>Domestic</option>
                <option>Export</option>
                <option>Import</option>
                <option>Warehousing & Indenting Agents</option>
                <option>Others</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="businessCategory">
              <Form.Label>Business Category</Form.Label>
              <Form.Select required>
                <option value="">Select Business Category</option>
                <option>Manufacturer</option>
                <option>Exporter</option>
                <option>Importer</option>
                <option>Others</option>
              </Form.Select>
            </Form.Group>

            {/* Text Fields */}
            <Form.Group className="mb-3" controlId="companyName">
              <Form.Label>Company Name</Form.Label>
              <Form.Control type="text" placeholder="Company Name" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="tel">
              <Form.Label>Tel</Form.Label>
              <Form.Control type="text" placeholder="Tel" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="productsServices">
              <Form.Label>Products / Services</Form.Label>
              <Form.Control type="text" placeholder="Products / Services" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="hsCode">
              <Form.Label>HS Code</Form.Label>
              <Form.Control type="text" placeholder="HS Code" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="homepage">
              <Form.Label>Comp. Homepage</Form.Label>
              <Form.Control type="text" placeholder="Comp. Homepage" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Address" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="zip">
              <Form.Label>Zip</Form.Label>
              <Form.Control type="text" placeholder="Zip" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="serviceDetails">
              <Form.Label>Details of Service Required</Form.Label>
              <Form.Control type="text" placeholder="Details of Service Required" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Banner;
