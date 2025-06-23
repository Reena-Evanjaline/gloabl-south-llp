'use client';
import Image from 'next/image';
import React from 'react';


function Partner() {
  return (
    <div className="container-fluid mt-2">
      <div className="row m-0 p-0">
        <div className="col-lg-6">
          <Image
            src="/images/partner.png"
            alt="Partner"
            width={600}
            height={350}
            className="img-fluid"
          />
        </div>
        <div className="col-lg-6 fw-bold text-justify custom-wordspace mt-4">
          <h1 className="custom-heading fw-bold">
            Your External Investment Desk in India
          </h1>
          <p className="custom-paragraph" style={{textAlign: 'justify'}}>
            We represent governments, investment agencies, economic zones, and chambers of commerce to attract foreign investment and promote regional companies in the Indian market. Acting as your dedicated trade and investment desk, we position your region or sector to the right investor groups, manage inbound inquiries, and build lasting interest from credible businesses.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Partner;
