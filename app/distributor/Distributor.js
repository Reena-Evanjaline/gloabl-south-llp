'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Modal, Form, Button } from 'react-bootstrap';

export default function Distributor() {
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
                className="position-relative w-100 text-white d-flex align-items-start justify-content-start"
                style={{
                    backgroundImage: 'url("/images/dist.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '65vh',
                }}
            >
                <div
                    style={{
                        backgroundColor: '#00b7b1',
                        color: '#fff',
                        padding: '20px',
                        maxWidth: '600px',
                        borderBottomRightRadius: '40px',
                        borderTopLeftRadius: '8px',
                        opacity: 0.85,
                    }}
                >
                    <div style={{ transform: 'skewY(1deg)' }}>
                        <h1 className="fw-bold mb-4">DISTRIBUTOR REPORTS</h1>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container my-4">
                <div className="row">
                    {/* Left Column */}
                    <div className="col-lg-8 justify-text">
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

                        <button className="btn btn-outline-light bg-primary px-4 py-2 rounded-pill" onClick={handleShow}>
                            For Enquiries &nbsp; <span>&rarr;</span>
                        </button>

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
                    </div>

                    {/* Right Column */}
                    <div className="col-lg-4 mt-5">
                        <div className="mb-4">
                            <Image
                                src="/images/di.png"
                                alt="Trade Mission"
                                width={400}
                                height={400}
                                className="img-fluid rounded shadow"
                            />
                        </div>

                        <h2><strong>Delivery Format</strong></h2>
                        <ul>
                            <li>Reports are delivered as PDF documents (10–20 pages)</li>
                            <li>Standard turnaround: 7–10 business days</li>
                            <li>Rush delivery available upon request</li>
                        </ul>

                        <div className="d-flex flex-column flex-md-row gap-3 justify-content-center mt-3">
                            <button className="btn btn-primary rounded-pill" data-bs-toggle="modal" data-bs-target="#sampleReportModal">
                                Request a Sample Report
                            </button>
                            <button className="btn btn-success rounded-pill" data-bs-toggle="modal" data-bs-target="#consultationModal">
                                Book a Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sample Report Modal */}
            <div className="modal fade" id="sampleReportModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form method="POST" action="/api/send-sample-report">
                            <div className="modal-header">
                                <h5 className="modal-title">Request a Sample Report</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
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
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Submit Request</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Consultation Modal */}
            <div className="modal fade" id="consultationModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form method="POST" action="/api/book-consultation">
                            <div className="modal-header">
                                <h5 className="modal-title">Book a Consultation</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
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
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-success">Book Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Justify Text Class */}
            <style jsx>{`
                .justify-text {
                    text-align: justify;
                }
            `}</style>
        </>
    );
}
