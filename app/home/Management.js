'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function Management() {
  const services = [
    {
      title: 'MARKET REPORTS',
      description:
        'Include Market reports, Investigation verification reports , distributor / importer -exporters reports, Product sourcing reports ',
      image: '/images/sub-b.png',
      link: '/market-reports',
    },
    {
      title: 'TRADE MISSION',
      description:
        'Include SATELLITE Office space provision, personalised buyer- seller meeting, launch , promotion campaign, market entry assistance,',
      image: '/images/sub-4.png',
      link: '/trade-mission',
    },
    {
      title: 'INVESTMENT',
      description:
        'Include investment support , destination promotion , "Trade Facilitation", Trade office outsourcing, product sourcing  ',
      image: '/images/sub-2.png',
      link: '/investment',
    },
    {
      title: 'PERSONALIZED SERVICES',
      description:
        'Automotive, Capital & Industrial goods, Cosmetics, Infrastructure, AI & Machine Learning, Semiconductor, Electronics.',
      image: '/images/sub-3.png',
      link: '/personalized',
    },
  ];

  return (
    <div className="container my-3" style={{ textAlign: 'justify' }}>
      <h2 className="fw-bold">INTERNATIONAL TRADE FACILITATION ORGANIZATION</h2>
      <p>
        We are an INTERNATIONAL TRADE FACILITATION ORGANIZATION committed to helping Businesses—Especially SMEs—expand their footprint in India and beyond. Operated by seasoned professionals with over 20 years of experience, we offer Strategic, value-driven services to ensure efficient market entry and Sustained Growth.
        Whether you're a Foreign Business exploring Indian opportunities or a Domestic Firm Aiming for Global Outreach, we act as your extended trade Arm—Offering Satellite Office Support, Market Insights, Buyer Matchmaking, Trade Missions, Government Liaison, and more.
        Our Market Reports Deliver Sharp, Bird’s-Eye Insights not readily available in the Public Domain, and our Roadshows and Campaigns are curated using design thinking for maximum impact—not just event execution.
        We work with Embassies, Trade bodies, Chambers, and Businesses of all sizes—from startups to large Enterprises.
      </p>

      {/* Desktop View */}
      <div className="row mt-4 d-none d-md-flex">
        {services.map((item, index) => (
          <div key={index} className="col-md-3 mb-4">
            <Link href={item.link} passHref legacyBehavior>
              <a style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="card border-0 shadow rounded overflow-hidden card-hover">
                  <div
                    className="image-container"
                    style={{ height: '220px', position: 'relative' }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="card-body text-white" style={{ background: 'teal' }}>
                    <h5 className="card-title fw-bold">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
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
                <a style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="card border-0 shadow rounded overflow-hidden card-hover mb-4">
                    <div
                      className="image-container"
                      style={{ height: '220px', position: 'relative' }}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="card-body text-white" style={{ background: 'teal' }}>
                      <h5 className="card-title fw-bold">{item.title}</h5>
                      <p className="card-text">{item.description}</p>
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

export default Management;