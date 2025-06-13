'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Navbar() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      require('bootstrap/dist/js/bootstrap.bundle.min.js');

      const setupHover = () => {
        const isMobile = window.matchMedia('(max-width: 991px)').matches;

        document.querySelectorAll('.navbar .dropdown').forEach((dropdown) => {
          dropdown.removeEventListener('mouseenter', null);
          dropdown.removeEventListener('mouseleave', null);

          if (!isMobile) {
            dropdown.addEventListener('mouseenter', () => {
              const toggle = dropdown.querySelector('[data-bs-toggle="dropdown"]');
              const menu = dropdown.querySelector('.dropdown-menu');
              toggle?.classList.add('show');
              menu?.classList.add('show');
            });

            dropdown.addEventListener('mouseleave', () => {
              const toggle = dropdown.querySelector('[data-bs-toggle="dropdown"]');
              const menu = dropdown.querySelector('.dropdown-menu');
              toggle?.classList.remove('show');
              menu?.classList.remove('show');
            });
          }
        });
      };

      setupHover();
      window.addEventListener('resize', setupHover);
      return () => window.removeEventListener('resize', setupHover);
    }
  }, []);

  return (
    <>
      <div
        className="d-flex justify-content-between align-items-start bg-white px-4"
        style={{ zIndex: 1020, fontSize: '18px', position: 'fixed', top: 0, width: '100%' }}
      >
        {/* Logo */}
        <div className="logo">
          <Image src="/images/lo.png" alt="Logo" width={180} height={70} />
        </div>

        {/* Right Section */}
        <div className="flex-grow-1">
          {/* Top Bar */}
          <div className="top-bar-wrapper">
            <div className="bg-dark text-white d-flex justify-content-between align-items-center px-4 py-2 rounded-start-pill ms-2">
              <div>
                <span className="me-4">📞 01892 673 435</span>
                <span>📧 Online Enquiry</span>
              </div>
              <div className="d-flex align-items-center">
                <Link href="#" className="text-white text-decoration-none me-2">About Us</Link>
                <span className="text-white">|</span>
                <Link href="#" className="text-white text-decoration-none mx-2">Meet The Team</Link>
                <span className="text-white">|</span>
                <Link href="#" className="text-white text-decoration-none mx-2">Contact Us</Link>
                <i className="bi bi-linkedin text-white me-2"></i>
                <i className="bi bi-twitter text-white"></i>
              </div>
            </div>
          </div>

          {/* Main Navbar */}
          <nav className="navbar navbar-expand-lg navbar-light bg-white px-0 mt-2 me-5 fw-bold">
            <div className="container-fluid px-0" style={{ fontSize: '25px' }}>
              <button
                className="navbar-toggler ms-auto"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto nav-custom" style={{ fontSize: '20px' }}>
                  <li className="nav-item">
                    <Link href="/" className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      href="#"
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Service Portfolio
                    </Link>
                    <ul className="dropdown-menu">
                      <li><Link href="/market-reports" className="dropdown-item">MARKET REPORTS</Link></li>
                      <li><Link href="/satelite-office" className="dropdown-item">SATELLITE OFFICE</Link></li>
                      <li><Link href="/trade-mission" className="dropdown-item">TRADE MISSION</Link></li>
                      <li><Link href="/personalized" className="dropdown-item">PERSONALIZED BUYER MEETINGS</Link></li>
                      <li><Link href="/distributor" className="dropdown-item">DISTRIBUTOR / IMPORTER REPORTS</Link></li>
                      <li><Link href="/investment" className="dropdown-item">INVESTMENT DESTINATION PROMOTION</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link href="/access-market" className="nav-link">Access our market reports</Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/exim-data" className="nav-link">Access the exim data</Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/online-mall" className="nav-link">Online mall</Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/testimonials" className="nav-link">Testimonials</Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/faq" className="nav-link">FAQ</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .nav-custom .nav-link {
          position: relative;
          color: #000 !important;
          text-decoration: none;
          padding-bottom: 4px;
          transition: color 0.3s ease;
        }

        .nav-custom .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
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
          text-decoration: underline;
        }

        .dropdown-item:hover {
          background-color: #00b7b1;
          color: #fff !important;
        }

        .logo {
          padding-top: 4px;
        }

        @media (max-width: 767px) {
          .top-bar-wrapper {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
