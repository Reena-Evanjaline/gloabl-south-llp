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
      answer: "An International Trade Promotion Organization, primarily targeted to promote SME businesses in the overseas markets."
    },
    {
      question: "What Geography do you work in?",
      answer: "We work with businesses from all geographies who want to do business in India."
    },
    {
      question: "Who runs this Organization?",
      answer: "It is being run by professionals who have two decades of experience in the areas mentioned in the service portfolio."
    },
    {
      question: "Is this a profit making entity?",
      answer: "No, as of now the entity works on cost-to-cost basis."
    },
    {
      question: "Who are major Clients?",
      answer: "Govt. bodies, Chambers, Independent firms etc.."
    },
    {
      question: "Why should I avail your services?",
      answer: "We can handhold you to enter and establish in India with our proven network expertise."
    },
    {
      question: "Can you tell me about your Market Reports?",
      answer: "Yes, it offers a bird’s-eye view of the subject, generally not available in the public domain. We compile reports from multiple domains including personal interviews."
    },
    {
      question: "What’s Satellite Office?",
      answer: "We can function as your extended branch office, efficiently entering a new market without upfront investment."
    },
    {
      question: "Do you find buyers to sell our products?",
      answer: "Yes, we can find buyers, arrange meetings, and follow up long-term until a conclusion is reached."
    },
    {
      question: "What's your experience in Trade Missions?",
      answer: "Handled 100+ missions—great for analyzing opportunities and forging buyer connections."
    },
    {
      question: "Do you liaise with local governments?",
      answer: "Yes, on a case-by-case basis, especially for tenders and formal entry."
    },
    {
      question: "What type of roadshows do you conduct?",
      answer: "Exhibition promotions, new product launches—curated with design thinking, not mere event management."
    },
    {
      question: "Do you serve both domestic and foreign companies?",
      answer: "Yes. Our work is based on client suitability and our expertise—not location."
    },
    {
      question: "We’re large enough to operate ourselves. Why use you?",
      answer: "We complement your efforts, helping large firms save time and small firms reduce risk and cost."
    },
    {
      question: "Can you be our Trade Office in India?",
      answer: "Absolutely. We bring synergy with our network to promote your country’s enterprises."
    },
    {
      question: "We already have a Commercial Attaché. How can you help?",
      answer: "We act as a force multiplier for diplomatic missions with limited workforce in commercial tasks."
    },
    {
      question: "How can I start doing business with you?",
      answer: "Fill out the inquiry form. Our team will reach out promptly."
    },
    {
      question: "How is your service fee structured?",
      answer: "Either assignment-specific or annual subscription-based."
    },
    {
      question: "Do you have a tariff card?",
      answer: "No. We tailor pricing to the project—no one-size-fits-all."
    },
  ];

  return (
    <div className="bg-light">
      <div className="container text-center py-2">
        <h2 className="fw-bold text-dark">Frequently Asked Questions</h2>
        <div className="border-bottom border-3 border-info w-25 mx-auto mb-4"></div>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          spaceBetween={10}
          slidesPerView={1}
          className="custom-swiper"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="px-md-5">
                <p className="text-dark fw-semibold fs-5">{item.question}</p>
                <p className="text-secondary fs-6">{item.answer}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx>{`
        .custom-swiper {
          padding-bottom: 40px; /* Ensure pagination doesn't overlap content */
        }
        .swiper-pagination {
          margin-top: 0 !important; /* Remove space */
          bottom: 5px !important;
        }
      `}</style>
    </div>
  );
}

export default Testimonials;
