'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

function Testimonials() {
  const testimonials = [
    {
      question: "What type of Organization is this?",
      answer: "An International Trade Promotion Organization, primarily targeted to promote SME businesses in the overseas markets.",
    },
    {
      question: "What Geography do you work in?",
      answer: "We work with businesses from all geographies who want to do business in India.",
    },
    {
      question: "Who runs this Organization?",
      answer: "It is being run by professionals who have two decades of experience in the areas mentioned in the service portfolio.",
    },
    {
      question: "Is this a profit making entity?",
      answer: "No, as of now the entity works on cost-to-cost basis.",
    },
    {
      question: "Who are major Clients?",
      answer: "Govt. bodies, Chambers, Independent firms etc..",
    },
    {
      question: "Why should I avail your services?",
      answer: "We can handhold you to enter and establish in India with our proven network expertise.",
    },
    {
      question: "Can you tell me about your Market Reports?",
      answer: "Yes, it offers a bird’s-eye view of the subject, generally not available in the public domain. We compile reports from multiple domains including personal interviews.",
    },
    {
      question: "What’s Satellite Office?",
      answer: "We can function as your extended branch office, efficiently entering a new market without upfront investment.",
    },
    {
      question: "Do you find buyers to sell our products?",
      answer: "Yes, we can find buyers, arrange meetings, and follow up long-term until a conclusion is reached.",
    },
    {
      question: "What's your experience in Trade Missions?",
      answer: "Handled 100+ missions—great for analyzing opportunities and forging buyer connections.",
    },
    {
      question: "Do you liaise with local Governments?",
      answer: "Yes, on a case-by-case basis, especially for tenders and formal entry.",
    },
    {
      question: "What type of roadshows do you conduct?",
      answer: "Exhibition promotions, new product launches—curated with design thinking, not mere event management.",
    },
    {
      question: "Do you serve both domestic and foreign companies?",
      answer: "Yes. Our work is based on client suitability and our expertise—not location.",
    },
    {
      question: "We’re large enough to operate ourselves. Why use you?",
      answer: "We complement your efforts, helping large firms save time and small firms reduce risk and cost.",
    },
    {
      question: "Can you be our Trade Office in India?",
      answer: "Absolutely. We bring synergy with our network to promote your country’s enterprises.",
    },
    {
      question: "We already have a Commercial Attaché. How can you help?",
      answer: "We act as a force multiplier for diplomatic missions with limited workforce in commercial tasks.",
    },
    {
      question: "How can I start doing business with you?",
      answer: "Fill out the inquiry form. Our team will reach out promptly.",
    },
    {
      question: "How is your service fee structured?",
      answer: "Either assignment-specific or annual subscription-based.",
    },
    {
      question: "Do you have a tariff card?",
      answer: "No. We tailor pricing to the project—no one-size-fits-all.",
    },
  ];

  return (
    <div className="bg-light py-5 my-5">
      <div className="container-fluid px-0 mx-0">
        <div className="text-center px-3">
          <h2 className="fw-bold text-dark mb-3">Frequently Asked Questions</h2>
          <div className="border-bottom border-3 border-info w-25 mx-auto mb-4"></div>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={1}
          className="custom-swiper"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-100 d-flex justify-content-center px-3">
                <div
                  className="bg-white p-3 rounded"
                  style={{ maxWidth: '700px', width: '100%' }}
                >
                  <p className="text-dark fw-semibold fs-5 mb-2">{item.question}</p>
                  <p className="text-secondary fs-6">{item.answer}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx>{`
        .custom-swiper {
          padding-bottom: 40px;
        }
        .swiper-pagination {
          bottom: 10px !important;
        }
        :global(body) {
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
}

export default Testimonials;
