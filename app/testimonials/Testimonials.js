'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Modal, Form, Button } from 'react-bootstrap';
import { BsTelephoneFill, BsEnvelopeFill } from 'react-icons/bs';

function Testimonials() {
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
      {/* Header Section */}
      <div
        className="d-flex align-items-start justify-content-start text-white"
        style={{
          backgroundImage: 'url("/images/test-ban.png")',
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
            <h1 className="fw-bold mb-4">Testimonials</h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container my-5">
        <div className="row">
          {/* Left Column - Testimonials */}
          <div className="col-lg-8">
            <h2 className="mb-4 fw-bold"> What Our Clients Say</h2>

            {[
              {
                title: 'Seamless Market Entry Support!',
                quote:
                  '“Thanks to the distributor report and video insights, we quickly identified a reliable partner in Southeast Asia. The local insights saved us months of groundwork.”',
               
              },
              {
                title: 'The Online Mall is a Game-Changer',
                quote:
                  '“The product video showcase helped us present our machinery to buyers in Europe without even flying out. We closed 3 new deals through the platform.”',
               
              },
              {
                title: 'Professional and Transparent',
                quote:
                  '“From detailed supplier verification to post-meeting follow-ups, the team handled everything. We felt like we had our own in-country office.”',
               
              },
              {
                title: 'Invaluable Reports',
                quote:
                  '“Their market intelligence and importer reports gave us clear direction. We were able to benchmark pricing and re-strategize in record time.”',
               
              },
            ].map((testimonial, i) => (
              <div className="mb-5" key={i}>
                <h5 className="fw-semibold">"{testimonial.title}"</h5>
                <p>{testimonial.quote}</p>
                <p className="text-muted">{testimonial.author}</p>
              </div>
            ))}

            {/* Button to open modal */}
            <button
              className="btn btn-outline-light bg-primary px-4 py-2 rounded-pill"
              onClick={handleShow}
            >
              For Enquiries &nbsp; <span>&rarr;</span>
            </button>
          </div>

          {/* Right Column - Image */}
          <div className="col-lg-4 d-flex flex-column align-items-center mt-4 mt-lg-0">
            <Image
              src="/images/test.png"
              alt="Trade Mission"
              width={800}
              height={230}
              className="img-fluid rounded shadow mb-4"
            />
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
            {/* Dropdown Fields */}
            {[
              {
                label: 'Inquiry Type',
                options: [
                  'Buying',
                  'Selling',
                  'Market Report',
                  'Trade mission',
                  'Local Exhibition Participation',
                  'Satellite Office',
                  'Personalized B2Bs',
                  'Campaign',
                  'Others',
                  'Foreign Trade Event Promotion in India',
                ],
              },
              {
                label: 'Nature of Entity',
                options: [
                  'Govt',
                  'Private',
                  'Business Chamber',
                  'Non Profit offices',
                  'Individual',
                ],
              },
              {
                label: 'Business Type',
                options: [
                  'Domestic',
                  'Export',
                  'Import',
                  'Warehousing & Indenting Agents',
                  'Others',
                ],
              },
              {
                label: 'Business Category',
                options: ['Manufacturer', 'Exporter', 'Importer', 'Others'],
              },
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

            {/* Input Fields */}
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
                  type={label === 'Details of Service Required' ? 'textarea' : 'text'}
                  as={label === 'Details of Service Required' ? 'textarea' : 'input'}
                  rows={label === 'Details of Service Required' ? 3 : undefined}
                  placeholder={label}
                  required={['Company Name', 'Email'].includes(label)}
                />
              </Form.Group>
            ))}

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Testimonials;
