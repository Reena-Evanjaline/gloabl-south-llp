import React from 'react';
import Image from 'next/image';

function Dedicate() {
  return (
    <div className=" py-5 text-center" style={{ backgroundColor:"#f1f0ec" }}>
      <div className="container">
        <h2 className="fw-bold text-dark">What We Deliver</h2>
        <div className="border-bottom border-3 border-info w-25 mx-auto my-3"></div>

        

        <div className="d-flex gap-4 mb-5 flex-wrap justify-content-center">
          {/* Targeting */}
          <div style={{ position: 'relative', width: '300px', height: '100px' }}>
            <Image
              src="/images/targetting.png"
              alt="Targeting"
              fill
              style={{ objectFit: 'contain' }}
              quality={100}
            />
          </div>

          {/* Trade */}
          <div style={{ position: 'relative', width: '300px', height: '100px' }}>
            <Image
              src="/images/trade.png"
              alt="Trade"
              className=''
              fill
              style={{ objectFit: 'contain' }}
              quality={100}
            />
          </div>

          {/* Develop */}
          <div style={{ position: 'relative', width: '300px', height: '100px' }}>
            <Image
              src="/images/develop.png"
              alt="Develop"
              fill
              style={{ objectFit: 'contain' }}
              quality={100}
            />
          </div>

          {/* Inbound */}
          <div style={{ position: 'relative', width: '300px', height: '100px' }}>
            <Image
              src="/images/inbound.png"
              alt="Inbound"
              fill
              style={{ objectFit: 'contain' }}
              quality={100}
            />
          </div>

          {/* Investment */}
          <div style={{ position: 'relative', width: '300px', height: '110px' }}>
            <Image
              src="/images/investment.png"
              alt="Investment"
              fill
              style={{ objectFit: 'contain' }}
              quality={100}
            />
          </div>
        </div>

       <p style={{textAlign:"justify"}}>As a Trade Office–style representative, we work alongside governments, investment promotion agencies, economic zones, and chambers of commerce to position their regions as prime destinations for foreign investment and promote the resident Company’s product in the Indian Market. We act as your external investment desk — promoting your region or sector to targeted investor groups, managing inquiries, and nurturing long-term interest from credible firms.</p>
      </div>
      
    </div>
  );
}

export default Dedicate;
