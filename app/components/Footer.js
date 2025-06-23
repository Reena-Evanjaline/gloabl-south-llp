'use client';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter, FaChartBar, FaPhone, FaBars } from 'react-icons/fa6';
import { FaFileAlt, FaHandHoldingUsd, FaGlobeAsia, FaUserCog } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import './footer.css';

const Footer = () => {
  return (
    <>
      {/* Desktop Footer */}
      <div className="footer-hidden-mobile footer container-fluid mt-5">
        <div className="container">
          <div className="row align-items-center text-center text-md-start">
            <div className="col-12 col-md-3 d-flex justify-content-center">
              <Image
                src="/images/lo-1.png"
                width={160}
                height={200}
                alt="logo"
                style={{
                  objectFit: 'contain',
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
            </div>

            <div className="col-12 col-md-6">
              <p
                className="mb-0 m-2"
                style={{ fontSize: '16px', textAlign: 'justify' }}
              >
                At GLOBAL SOUTH, we are passionate about transforming ideas
                into impactful solutions. AS TRUSTED ENTITY, we partner with
                businesses to navigate complex challenges and deliver innovative
                strategies that drive success. Our team excels at designing and
                implementing custom solutions tailored to your unique needs,
                helping you stay ahead in a fast-paced world. With a focus on
                collaboration, creativity, and sustainability, we are dedicated to
                delivering results that empower growth and create lasting value
                for our clients.
              </p>
            </div>

            <div className="col-12 col-md-3 d-flex justify-content-center justify-content-md-end gap-2">
              <a href="/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} style={{ color: '#E4405F' }} />
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} style={{ color: '#1877F2' }} />
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <FaXTwitter size={24} style={{ color: '#000' }} />
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} style={{ color: '#0077B5' }} />
              </a>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-12 d-flex flex-column flex-md-row justify-content-between">
              <p
                className="mb-1 text-center text-md-start"
                style={{ fontSize: '14px' }}
              >
                © 2025 Global South LLP - All Rights Reserved
              </p>
              <div className="row text-center text-md-start">
                <div className="col-6 col-md-auto mb-2">
                  <Link
                    href="/market-report"
                    className="text-decoration-none text-dark d-block"
                    style={{ fontSize: '14px' }}
                  >
                    Report
                  </Link>
                </div>
                <div className="col-6 col-md-auto mb-2">
                  <Link
                    href="/trade-mission"
                    className="text-decoration-none text-dark d-block"
                    style={{ fontSize: '14px' }}
                  >
                    Trade Mission
                  </Link>
                </div>
                <div className="col-6 col-md-auto">
                  <Link
                    href="/investment"
                    className="text-decoration-none text-dark d-block"
                    style={{ fontSize: '14px' }}
                  >
                    Investment
                  </Link>
                </div>
                <div className="col-6 col-md-auto">
                  <Link
                    href="/personalised"
                    className="text-decoration-none text-dark d-block"
                    style={{ fontSize: '14px' }}
                  >
                    Personalised Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Footer Icons */}
      <div className="mobile-footer-icons d-md-none d-flex justify-content-around align-items-center py-2 border-top">
        <Link href="/market-report" className="text-center text-decoration-none text-dark">
          <FaFileAlt size={20} />
          <div style={{ fontSize: '12px' }}>Report</div>
        </Link>
        <Link href="/investment" className="text-center text-decoration-none text-dark">
          <FaHandHoldingUsd size={20} />
          <div style={{ fontSize: '12px' }}>Investment</div>
        </Link>
        <Link href="/trade-mission" className="text-center text-decoration-none text-dark">
          <FaGlobeAsia size={20} />
          <div style={{ fontSize: '12px' }}>Trade Mission</div>
        </Link>
        <Link href="/personalized" className="text-center text-decoration-none text-dark">
          <FaUserCog size={20} />
          <div style={{ fontSize: '12px' }}>Personalised</div>
        </Link>
      </div>
    </>
  );
};

export default Footer;
