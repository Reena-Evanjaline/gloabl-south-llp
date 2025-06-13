'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Modal, Form, Button } from 'react-bootstrap';

function Distributor() {
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
                    backgroundImage: 'url("/images/dist.png")',
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
                        <h1 className="fw-bold mb-4">DISTRIBUTOR REPORTS</h1>

                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container-fluid my-2">
                <div className="row">
                    {/* Left Column */}
                    <div className="col-lg-8" style={{ textAlign: 'justify' }}>
                        <h2><strong>Gain clarity before you commit.</strong></h2>
                        <p>Our Distributor / Importer Reports help you evaluate, select, and engage with the right partners for your product in unfamiliar markets.</p>
                        <p>Whether you're a manufacturer seeking a trusted distributor or a brand exploring new import channels, we provide deep, actionable insights into potential trade partners — so your decisions are based on facts, not assumptions.</p>

                        <h2><strong>What’s Included in the Report?</strong></h2>
                        <ul>
                            <li><strong>Company Profile:</strong> Ownership structure, Years in operation, Key management, Licensing and legal compliance</li>
                            <li><strong>Financial Overview:</strong> Creditworthiness, Trade history, Import/export volumes (where available)</li>
                            <li><strong>Operational Capacity:</strong> Distribution network, Warehousing/logistics capabilities, Geographic reach</li>
                            <li><strong>Strategic Fit Assessment:</strong> Product portfolio compatibility, Cultural/business alignment</li>
                        </ul>

                        <h2><strong>Why Choose Us?</strong></h2>
                        <p>With years of experience in Trade Facilitation, our team has facilitated brand launches, export transactions, and cross-border alliances. We know the stakes — and how to reduce your risk.</p>
                        <p>Our on-ground networks and multilingual capabilities allow us to gather verified intelligence that goes beyond the surface, especially in emerging and complex markets.</p>

                        <h2><strong>Results You Can Expect</strong></h2>
                        <ul>
                            <li>Reduced sourcing risk</li>
                            <li>Better supplier communication</li>
                            <li>Transparent pricing and quality assurance</li>
                            <li>Faster go-to-market timelines</li>
                        </ul>



                        <h2><strong>Product Sourcing Assistance</strong></h2>
                        <p>Find the right product, at the right price, from the right supplier.</p>
                        <p>We help businesses identify, verify, and secure reliable sources for products in international markets — with a focus on quality, compliance, and long-term viability.</p>

                        <h2><strong>Ideal For:</strong></h2>
                        <ul>
                            <li>Brands sourcing for private label or OEM production</li>
                            <li>Retailers or distributors seeking new product lines</li>
                            <li>Startups validating supply options before scaling</li>
                            <li>SMEs needing bilingual help navigating foreign markets</li>
                        </ul>



                        <button
                            className="btn btn-outline-light bg-primary px-4 py-2 rounded-pill "
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
                                            <Form.Control
                                                as={label === 'Details of Service Required' ? 'textarea' : 'input'}
                                                type="text"
                                                placeholder={label}
                                                required
                                            />
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
                            src="/images/di.png"
                            alt="Trade Mission"
                            width={800}
                            height={230}
                            className="img-fluid rounded shadow mb-4"
                        />

                        <h2><strong>Delivery Format</strong></h2>
                        <ul>
                            <li>Reports are delivered as PDF documents (10–20 pages)</li>
                            <li>Standard turnaround: 7–10 business days</li>
                            <li>Rush delivery available upon request</li>
                        </ul>
                        <div className="d-flex gap-5 justify-content-center mt-2">
                            <button
                                type="button"
                                className="btn btn-primary rounded-pill"
                                data-bs-toggle="modal"
                                data-bs-target="#sampleReportModal"
                            >
                                Request a Sample Report
                            </button>

                            <button
                                type="button"
                                className="btn btn-success rounded-pill"
                                data-bs-toggle="modal"
                                data-bs-target="#consultationModal"
                            >
                                Book a Consultation
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            {/* Request a Sample Report Modal */}
            <div className="modal fade" id="sampleReportModal" tabIndex="-1" aria-labelledby="sampleReportModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form method="POST" action="/api/send-sample-report"> {/* Optional: Handle via API */}
                            <div className="modal-header">
                                <h5 className="modal-title" id="sampleReportModalLabel">Request a Sample Report</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label htmlFor="sampleName" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="sampleName" name="name" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="sampleEmail" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="sampleEmail" name="email" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="sampleMessage" className="form-label">Message</label>
                                    <textarea className="form-control" id="sampleMessage" name="message" rows="3" />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Submit Request</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* Book a Consultation Modal */}
            <div className="modal fade" id="consultationModal" tabIndex="-1" aria-labelledby="consultationModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form method="POST" action="/api/book-consultation">
                            <div className="modal-header">
                                <h5 className="modal-title" id="consultationModalLabel">Book a Consultation</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label htmlFor="consultName" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="consultName" name="name" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="consultEmail" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="consultEmail" name="email" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="consultDate" className="form-label">Preferred Date</label>
                                    <input type="date" className="form-control" id="consultDate" name="date" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="consultMessage" className="form-label">Message</label>
                                    <textarea className="form-control" id="consultMessage" name="message" rows="3" />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-success">Book Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Distributor;
