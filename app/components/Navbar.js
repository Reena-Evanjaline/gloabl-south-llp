'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export default function Navbar() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      require('bootstrap/dist/js/bootstrap.bundle.min.js');

      const handleHover = () => {
        const isMobile = window.matchMedia('(max-width: 991px)').matches;

        document.querySelectorAll('.navbar .dropdown').forEach((dropdown) => {
          const toggle = dropdown.querySelector('[data-bs-toggle="dropdown"]');
          const menu = dropdown.querySelector('.dropdown-menu');

          if (!toggle || !menu) return;

          // Clear old listeners
          dropdown.onmouseenter = null;
          dropdown.onmouseleave = null;

          if (!isMobile) {
            dropdown.onmouseenter = () => {
              toggle.classList.add('show');
              menu.classList.add('show');
              toggle.setAttribute('aria-expanded', 'true');
            };

            dropdown.onmouseleave = () => {
              toggle.classList.remove('show');
              menu.classList.remove('show');
              toggle.setAttribute('aria-expanded', 'false');
            };
          }
        });
      };

      handleHover();
      window.addEventListener('resize', handleHover);
      return () => window.removeEventListener('resize', handleHover);
    }
  }, []);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Form submitted!');
    setShow(false);
  };


  return (
    <>
      <div
        className="d-flex justify-content-between align-items-start bg-white"
        style={{ zIndex: 1020, fontSize: '18px', position: 'fixed', top: 0, width: '100%' }}
      >
        <div className="logo">
          <Image src="/images/lo-1.png" alt="Logo" width={200} height={80} />
        </div>

        <div className="flex-grow-1">
          <div className="top-bar-wrapper">
            <div className="bg-dark text-white d-flex justify-content-between align-items-center px-4 py-2 rounded-start-pill ms-2">
              <div>
                <span className="me-4">📞 01892 673 435</span>
                <span onClick={handleShow} style={{ cursor: 'pointer' }}>
                  📧 Online Enquiry
                </span>
              </div>

              <div className="d-flex align-items-center">
                <Link href="#" legacyBehavior><a className="text-white text-decoration-none me-2">About Us</a></Link>
                <span className="text-white">|</span>
                <Link href="#" legacyBehavior><a className="text-white text-decoration-none mx-2">Meet The Team</a></Link>
                <span className="text-white">|</span>
                <Link href="#" legacyBehavior><a className="text-white text-decoration-none mx-2">Contact Us</a></Link>
                <i className="bi bi-linkedin text-white me-2"></i>
                <i className="bi bi-twitter text-white"></i>
              </div>
            </div>
          </div>

          <nav className="navbar navbar-expand-lg navbar-light bg-white px-0 mt-2 me-4 fw-bold">
            <div className="container-fluid d-flex justify-content-between align-items-center px-0" style={{ fontSize: '27px' }}>
              <button
                className="navbar-toggler d-lg-none ms-auto"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#mobileNav"
                aria-controls="mobileNav"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="d-none d-lg-block ms-auto">
                <ul className="navbar-nav ms-auto nav-custom" style={{ fontSize: '20px' }}>
                  <li className="nav-item"><Link href="/" legacyBehavior><a className="nav-link">Home</a></Link></li>

                  <li className="nav-item dropdown">
                    <Link href="#" legacyBehavior>
                      <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">
                        Service Portfolio
                      </a>
                    </Link>
                    <ul className="dropdown-menu">
                      <li><Link href="/market-reports" legacyBehavior><a className="dropdown-item">MARKET REPORTS</a></Link></li>
                      <li><Link href="/satelite-office" legacyBehavior><a className="dropdown-item">SATELLITE OFFICE</a></Link></li>
                      <li><Link href="/trade-mission" legacyBehavior><a className="dropdown-item">TRADE MISSION</a></Link></li>
                      <li><Link href="/personalized" legacyBehavior><a className="dropdown-item">PERSONALIZED BUYER MEETINGS</a></Link></li>
                      <li><Link href="/distributor" legacyBehavior><a className="dropdown-item">DISTRIBUTOR / IMPORTER REPORTS</a></Link></li>
                      <li><Link href="/investment" legacyBehavior><a className="dropdown-item">INVESTMENT DESTINATION PROMOTION</a></Link></li>
                    </ul>
                  </li>

                  <li className="nav-item"><Link href="/access-market" legacyBehavior><a className="nav-link">Access our market reports</a></Link></li>
                  <li className="nav-item"><Link href="/exim-data" legacyBehavior><a className="nav-link">Access the exim data</a></Link></li>
                  <li className="nav-item"><Link href="/online-mall" legacyBehavior><a className="nav-link">Online mall</a></Link></li>
                  <li className="nav-item"><Link href="/testimonials" legacyBehavior><a className="nav-link">Testimonials</a></Link></li>
                  <li className="nav-item"><Link href="/faq" legacyBehavior><a className="nav-link">FAQ</a></Link></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="offcanvas offcanvas-end custom-offcanvas-width" tabIndex={-1} id="mobileNav" aria-labelledby="mobileNavLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="mobileNavLabel">Menu</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav nav-custom">
            {[
              { href: '/', label: 'Home' },
              { href: '/market-reports', label: 'Market Reports' },
              { href: '/satelite-office', label: 'Satellite Office' },
              { href: '/trade-mission', label: 'Trade Mission' },
              { href: '/personalized', label: 'Personalized Buyer Meetings' },
              { href: '/distributor', label: 'Distributor / Importer Reports' },
              { href: '/investment', label: 'Investment Destination Promotion' },
              { href: '/access-market', label: 'Access Market Reports' },
              { href: '/exim-data', label: 'Access EXIM Data' },
              { href: '/online-mall', label: 'Online Mall' },
              { href: '/testimonials', label: 'Testimonials' },
              { href: '/faq', label: 'FAQ' },
            ].map((link, idx) => (
              <li key={idx} className="nav-item">
                <Link href={link.href} className="nav-link" onClick={() => {
                  // Manually close offcanvas on click
                  const offcanvasEl = document.querySelector('.offcanvas.show');
                  if (offcanvasEl) {
                    const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
                    bsOffcanvas?.hide();
                  }
                }}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      <style jsx>{`
        .nav-custom .nav-link {
          position: relative;
          color: #000 !important;
          padding-bottom: 4px;
          transition: color 0.3s ease;
        }

        .nav-custom .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 2px;
          background-color: #00b7b1;
          transition: width 0.3s ease-in-out;
        }

        .nav-custom .nav-link:hover::after,
        .nav-custom .nav-link.active::after {
          width: 100%;
        }

        .nav-custom .nav-link:hover {
          color: #00b7b1 !important;
        }

        .top-bar-wrapper a.text-white.text-decoration-none {
          position: relative;
          color: #ffffff !important;
          padding-bottom: 2px;
          transition: color 0.3s ease;
        }

        .top-bar-wrapper a.text-white.text-decoration-none::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 0;
          background-color: #00b7b1;
          transition: width 0.3s ease-in-out;
        }

        .top-bar-wrapper a.text-white.text-decoration-none:hover {
          color: #00b7b1 !important;
        }

        .top-bar-wrapper a.text-white.text-decoration-none:hover::after {
          width: 100%;
        }

        .dropdown-item:hover {
          background-color: #00b7b1;
          color: #fff !important;
        }

        .offcanvas-body .nav-link {
          position: relative;
          color: #000 !important;
          padding-bottom: 4px;
          transition: color 0.3s ease;
        }

        .offcanvas-body .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 0;
          background-color: #00b7b1;
          transition: width 0.3s ease-in-out;
        }

        .offcanvas-body .nav-link:hover {
          color: #00b7b1 !important;
        }

        .offcanvas-body .nav-link:hover::after {
          width: 100%;
        }

        .logo {
          padding-top: 4px;
        }

        .custom-offcanvas-width {
          width: 432px;
        }

        @media (max-width: 767px) {
          .top-bar-wrapper {
            display: none !important;
          }
        }
      `}</style>

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Speak to a Specialist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
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

            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </Modal.Body>
      </Modal>

    </>
  );
}
