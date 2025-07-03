'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Management() {
  const services = [
    {
      title: 'MARKET REPORTS',
      description:
        'INCLUDE  MARKET  REPORTS, INVESTIGATION VERIFICATION REPORTS , DISTRIBUTOR / INPORTER -EXPORTERS REPORTS, PRODUCT SOURCING REPORTS ',
      image: '/images/sub-b.png',
      link: '/market-reports',
    },
    {
      title: 'TRADE MISSION',
      description:
        'GOVERNMENT HEADED TRADE MISSIONS INDUSTRY SPECIFIC TRADE MISSION PRODUCT SPECIFIC TRADE MISSION MULTISECTOR TRADE MISSION CHAMBER OF COMMERCE LEAD MISSION ASSOCIATION LEAD TRADE MISSION.',
      image: '/images/sub-4.png',
      link: '/trade-mission',
    },
    {
      title: 'INVESTMENT',
      description:
        'PROMOTING FOREIGN PROVINCES, INDUSTRIAL ZONE AS INVESTMENT DESTINATION SEMINARS & ROAD SHOWS SUPPORT FOR COMPANY INCORPORATION SPECIAL VISA PROGRAM.',
      image: '/images/sub-2.png',
      link: '/investment',
    },
    {
      title: 'PERSONALIZED SERVICES',
      description:
        'HANDHOLD VISITING ENTERPRISES, REPRESENTATION IN EXHIBITIONS, IMPORTER REPORTS, CATALOG & SAMPLES DISTRIBUTION, ECOMMERCE LISTING, PRODUCT SOURCING.',
      image: '/images/sub-3.png',
      link: '/personalized',
    },
    {
      title: 'COMPLIANCES',
      description:
        'COMPANY INCORPORATION WITH REGISTRAR OF COMPANIES IE CODE FACILITATION WITH DIRECTORATE GENERAL OF FOREIGN TRADE VENDOR EMPANELLEMENT WITH PRIVATE ENTITIES / GOVT. UNDERTAKINGS.',
      image: '/images/c.png',
      link: '/export-consulting',
    },
  ];

  return (
    <div className="container">
      <h2 className="fw-bold ">
        INTERNATIONAL TRADE FACILITATION ORGANIZATION
      </h2>
      <p className="">
        We are an INTERNATIONAL TRADE FACILITATION ORGANIZATION committed to helping Businesses—Especially SMEs—expand their footprint in India and beyond. Operated by seasoned professionals with over 20 years of experience, we offer Strategic, value-driven services to ensure efficient market entry and Sustained Growth. Whether you're a Foreign Business exploring Indian opportunities or a Domestic Firm Aiming for Global Outreach, we act as your extended trade Arm—Offering Satellite Office Support, Market Insights, Buyer Matchmaking, Trade Missions, Government Liaison, and more. Our Market Reports Deliver Sharp, Bird’s-Eye Insights not readily available in the Public Domain, and our Roadshows and Campaigns are curated using design thinking for maximum impact—not just event execution. We work with Embassies, Trade bodies, Chambers, and Businesses of all sizes—from startups to large Enterprises.
      </p>

      {/* Desktop View */}
      <div
        className="d-none d-md-flex mt-4"
        style={{
          display: 'flex',
          flexWrap: 'nowrap',
          gap: '16px',
        }}
      >
        {services.map((item, index) => (
          <div
            key={index}
            style={{
              flex: '1 0 20%',
              minWidth: '200px',
              maxWidth: '20%',
            }}
          >
            <Link href={item.link} passHref legacyBehavior>
              <a
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'block',
                  height: '100%',
                }}
              >
                <div className="card border-0 shadow rounded overflow-hidden h-100">
                  <div
                    className="image-container"
                    style={{ height: '180px', position: 'relative' }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div
                    className="card-body text-white"
                    style={{ background: 'teal', minHeight: '130px' }}
                  >
                    <h5
                      className="card-title fw-bold"
                      style={{
                        textAlign: 'center',
                        marginBottom: '8px',
                      }}
                    >
                      {item.title}
                    </h5>
                    <p
                      className="card-text"
                      style={{
                        fontSize: '0.85rem',
                        lineHeight: '1.4',
                        marginBottom: 0,
                        textAlign: 'center',
                        wordSpacing: '2px',
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>

      {/* Mobile View - Swiper */}
      <div className="d-block d-md-none mt-4">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          loop={true}
          slidesPerView={1}
        >
          {services.map((item, index) => (
            <SwiperSlide key={index}>
              <Link href={item.link} passHref legacyBehavior>
                <a
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  <div className="card border-0 shadow rounded overflow-hidden mb-4">
                    <div
                      className="image-container"
                      style={{ height: '200px', position: 'relative' }}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div
                      className="card-body text-white"
                      style={{ background: 'teal', minHeight: '150px' }}
                    >
                      <h5
                        className="card-title fw-bold"
                        style={{
                          textAlign: 'center',
                          marginBottom: '8px',
                        }}
                      >
                        {item.title}
                      </h5>
                      <p
                        className="card-text"
                        style={{
                          fontSize: '0.85rem',
                          lineHeight: '1.4',
                          marginBottom: 0,
                          textAlign: 'center',
                          wordSpacing: '2px',
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </a>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
