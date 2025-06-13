import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import "./footer.css";
const Footer = () => {
  return (
    <div
      className="footer-hidden-mobile footer container-fluid mt-5 "
      style={{
        backgroundImage: 'url("/images/bgg.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "20vh",
        padding: "20px 0",
      }}
    >
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          <div className="col-12 col-md-3 d-flex justify-content-center">
            <Image
              src="/images/lo.png"
              width={160} 
              height={200}
              alt="logo"
              style={{ objectFit: "contain", maxWidth: "100%", height: "auto" }}
            />
          </div>

          <div className="col-12 col-md-6">
            <p className="mb-0" style={{ fontSize: "16px" , textAlign: "justify" }}>
              At Global llp, we are passionate about transforming ideas
              into impactful solutions. As trusted consultants, we partner with
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
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} style={{ color: "#E4405F" }} />
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={24} style={{ color: "#1877F2" }} />
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter size={24} style={{ color: "#000" }} />
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} style={{ color: "#0077B5" }} />
            </a>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-12 d-flex flex-column flex-md-row justify-content-between">
            <p
              className="mb-1 text-center text-md-start"
              style={{ fontSize: "14px" }}
            >
              © 2025 Global llp - All Rights Reserved
            </p>

            {/* Links Section */}
            <div className="row text-center text-md-start">
              <div className="col-6 col-md-auto mb-2">
                <a
                  href="/"
                  className="text-decoration-none text-dark d-block"
                  style={{ fontSize: "14px" }}
                >
                  About Us
                </a>
              </div>
              <div className="col-6 col-md-auto mb-2">
                <a
                  href="/"
                  className="text-decoration-none text-dark d-block"
                  style={{ fontSize: "14px" }}
                >
                  Careers
                </a>
              </div>
              <div className="col-6 col-md-auto">
                <a
                  href="/"
                  className="text-decoration-none text-dark d-block"
                  style={{ fontSize: "14px" }}
                >
                  Contact
                </a>
              </div>
              <div className="col-6 col-md-auto">
                <a
                  href="/"
                  className="text-decoration-none text-dark d-block"
                  style={{ fontSize: "14px" }}
                >
                  Investor
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
