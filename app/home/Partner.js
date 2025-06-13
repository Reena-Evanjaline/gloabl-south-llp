import Image from 'next/image'
import React from 'react'

function Partner() {
    return (
        <div className='container-fluid mt-2'>
            {/* <h2 className="fw-bold text-dark text-center">Why partner with us</h2>
            <div className="border-bottom border-3 border-info w-25 mx-auto mb-4"></div> */}
            <div className='row m-0 p-0'>
                <div className='col-lg-6'>
                    <Image
                        src="/images/partner.png"
                        alt="Partner"
                        width={600}
                        height={350}
                        className='img-fluid'
                    />
                </div>
                <div className='col-lg-6 fw-bold ' style={{wordSpacing: '15px', marginTop: '25px',textAlign: 'justify'}}>
                    <h1 style={{fontSize:"50px"}}>Your External Investment Desk in India</h1>
                    <p style={{fontSize: '20px'}}>
                        We represent governments, investment agencies, economic zones, and chambers of commerce to attract foreign investment and promote regional companies in the Indian market. Acting as your dedicated trade and investment desk, we position your region or sector to the right investor groups, manage inbound inquiries, and build lasting interest from credible businesses.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Partner