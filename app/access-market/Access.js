import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Access() {
  return (
    <>
      <div
        className="d-flex align-items-start justify-content-start text-white"
        style={{
          backgroundImage: 'url("/images/dist.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '80vh',
          padding: '.5px 5%',
        }}
      >
        <div
          style={{
            backgroundColor: '#00b7b1',
            color: '#fff',
            padding: '40px',
            maxWidth: '600px',
            borderBottomRightRadius: '40px',
            borderTopLeftRadius: '8px',
          }}
        >
          <div style={{ transform: 'skewY(1deg)' }}>
            <h1 className="fw-bold mb-4">ACCESS MARKET</h1>

          </div>
        </div>
      </div>
      <div className='container-fluid mt-3'>
        <div className='row'>
          <div className='col-lg-6'>
            <Image
              src="/images/report-1.png"
              alt="Trade Mission"
              width={800}
              height={230}
              className="img-fluid rounded shadow mb-4"
            />
          </div>
          <div className='col-lg-6'>
            <section className="container">
              <h2 className="mb-4  fw-bold">Access the Market Data</h2>
              <p>
                Gain real-time insights into global trade flows, product trends, and emerging opportunities with our comprehensive market data access.
              </p>

              <div className="row ">
                <div className="col-md-6">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <strong>Country-wise Trade Statistics</strong>
                      <br />
                      Discover top import/export partners, trade balances, and tariffs by country.
                    </li>
                    <li className="list-group-item">
                      <strong>Product-Specific Trends</strong>
                      <br />
                      Analyze trade volumes, pricing, and demand patterns using HS Codes.
                    </li>
                    <li className="list-group-item">
                      <strong>Custom Reports</strong>
                      <br />
                      Generate tailored market intelligence reports.
                    </li>
                    <li className="list-group-item">
                      <strong>Port-wise Traffic Data</strong>
                      <br />
                      Track trade across major Indian and global ports.
                    </li>
                    {/* <li className="list-group-item">
                      <strong>Competitor Benchmarking</strong>
                      <br />
                      Discover top exporters/importers of specific goods.
                    </li> */}
                  </ul>
                </div>

                <div className="col-md-6 mt-5">
                  <table className="table table-bordered table-striped ">
                    <thead className="table-dark">
                      <tr>
                        <th>Data Type</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Export Data</td>
                        <td>Country-wise and port-wise outbound shipment details.</td>
                      </tr>
                      <tr>
                        <td>Import Data</td>
                        <td>Inbound shipment records with source details.</td>
                      </tr>
                      <tr>
                        <td>HS Code Lookup</td>
                        <td>Search and interpret HS codes for classification.</td>
                      </tr>
                      <tr>
                        <td>Pricing Trends</td>
                        <td>Average pricing trends by product and region.</td>
                      </tr>
                      
                    </tbody>
                  </table>
                </div>
              </div>

              {/* <div className="bg-light p-4 mt-5 rounded shadow-sm">
                <h4 className="text-success mb-3"> Who Can Use This?</h4>
                <div className="row">
                  <div className="col-md-6">
                    <ul>
                      <li> Exporters & Importers</li>
                      <li> Trade Promotion Councils</li>
                      <li>Market Analysts</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul>
                      <li> Business Development Teams</li>
                      <li> Government & Policy Makers</li>
                    </ul>
                  </div>
                </div>
              </div> */}

            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default Access