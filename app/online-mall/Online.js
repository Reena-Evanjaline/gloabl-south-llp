'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Modal, Form, Button } from 'react-bootstrap';

function Online() {
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
            {/* Banner */}
            <div
                className="d-flex align-items-start justify-content-start text-white"
                style={{
                    backgroundImage: 'url("/images/online.png")',
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
                        <h1 className="fw-bold mb-4">Online mall</h1>
                    </div>
                </div>
            </div>

            {/* Main Section with Columns */}
            <div className="container-fluid my-5">
                <div className="row">
                    {/* Left Column */}
                    <div className="col-lg-8 px-5">
                        <h2 className="mb-1 fw-bold">Online Mall – Product Gallery & Video Showcase</h2>
                        <p className="mb-1">
                            Step into our <strong>Interactive Online Mall</strong> – your one-stop digital destination to explore global products, innovations, and solutions.
                        </p>

                        <h3 className="mt-4 mb-3 fw-bold">Product Gallery</h3>
                        <p className="mb-1">
                            Browse a curated collection of high-quality products from verified exporters, manufacturers, and suppliers across various sectors:
                        </p>
                        <ul className="mb-2">
                            <li>Industrial & Consumer Goods</li>
                            <li>Health & Wellness Products</li>
                            <li>Fashion & Textiles</li>
                            <li>Food & Beverage</li>
                            <li>Engineering & Tools</li>
                        </ul>

                        <h4 className="mb-1 fw-semibold">Key Features of Each Listing:</h4>
                        <ul className="mb-3">
                            <li>HD product images</li>
                            <li>Technical specifications</li>
                            <li>Company details</li>
                            <li>Direct inquiry options</li>
                        </ul>

                        <h3 className="mt-4 mb-3 fw-bold">Video Showcases</h3>
                        <p className="mb-1">Experience products in action! Our product videos provide:</p>
                        <ul className="mb-3">
                            <li>Real-time demonstrations</li>
                            <li>Usage highlights and features</li>
                            <li>Factory tours and quality assurance processes</li>
                            <li>Brand stories and market applications</li>
                        </ul>

                        {/* CTA Buttons */}
                        {/* <div className="d-flex gap-3 mt-4 flex-wrap">
              <Button variant="primary" data-bs-toggle="modal" data-bs-target="#sampleReportModal">
                Request Sample Report
              </Button>
              <Button variant="success" data-bs-toggle="modal" data-bs-target="#consultationModal">
                Book a Consultation
              </Button>
            </div> */}
                    </div>

                    {/* Right Column with Image */}
                    <div className="col-lg-4 d-flex flex-column ">
                        <Image
                            src="/images/ml.png"
                            alt="Trade Mission"
                            width={800}
                            height={230}
                            className="img-fluid rounded shadow mb-4"
                        />

                    </div>
                </div>
            </div>

            {/* Sample Report Modal */}
            <div className="modal fade" id="sampleReportModal" tabIndex="-1" aria-labelledby="sampleReportModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form method="POST" action="/api/send-sample-report">
                            <div className="modal-header">
                                <h5 className="modal-title" id="sampleReportModalLabel">Request a Sample Report</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="name" required />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name="email" required />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" name="message" rows={3} />
                                </Form.Group>
                            </div>
                            <div className="modal-footer">
                                <Button variant="secondary" data-bs-dismiss="modal">Close</Button>
                                <Button variant="primary" type="submit">Submit Request</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Consultation Modal */}
            <div className="modal fade" id="consultationModal" tabIndex="-1" aria-labelledby="consultationModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form method="POST" action="/api/book-consultation">
                            <div className="modal-header">
                                <h5 className="modal-title" id="consultationModalLabel">Book a Consultation</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="name" required />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name="email" required />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Preferred Date</Form.Label>
                                    <Form.Control type="date" name="date" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" name="message" rows={3} />
                                </Form.Group>
                            </div>
                            <div className="modal-footer">
                                <Button variant="secondary" data-bs-dismiss="modal">Close</Button>
                                <Button variant="success" type="submit">Book Now</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Online;
