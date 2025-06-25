import React from 'react';

export default function Service() {
  return (
    <div>
      <div className="container-fluid bg-light my-5 py-6" id="service">
        <div className="container">
          <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="col-lg-6">
              <h1 className="display-5 mb-0">My Service</h1>
            </div>
            <div className="col-lg-6 text-lg-end">
              <a
                className="btn btn-primary py-3 px-5"
                href="https://t.me/Ear_Sokchan"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  borderRadius: '8px',
                  fontWeight: 500,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.07)'
                }}
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="row g-4">
            {/* Service Card 1 */}
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div
                className="service-item d-flex flex-column flex-sm-row bg-white h-100"
                style={{
                  borderRadius: '16px',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                  padding: '2rem',
                  transition: 'box-shadow 0.2s',
                  alignItems: 'center',
                  gap: '1.5rem'
                }}
              >
                <div
                  className="bg-icon flex-shrink-0 mb-3"
                  style={{
                    background: '#f5f5f5',
                    borderRadius: '50%',
                    width: 56,
                    height: 56,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <i className="fa fa-shopping-cart fa-2x text-dark"></i>
                </div>
                <div className="ms-sm-4">
                  <h4 className="mb-2" style={{fontWeight: 600}}>E-commerce Launch Package</h4>
                  <span style={{color: '#555'}}>Premium online store setup with advanced payment gateways, customizable product categories, and mobile-first design.</span>
                </div>
              </div>
            </div>
            {/* Service Card 2 */}
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <div
                className="service-item d-flex flex-column flex-sm-row bg-white h-100"
                style={{
                  borderRadius: '16px',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                  padding: '2rem',
                  transition: 'box-shadow 0.2s',
                  alignItems: 'center',
                  gap: '1.5rem'
                }}
              >
                <div
                  className="bg-icon flex-shrink-0 mb-3"
                  style={{
                    background: '#f5f5f5',
                    borderRadius: '50%',
                    width: 56,
                    height: 56,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <i className="fa fa-telegram fa-2x text-dark"></i>
                </div>
                <div className="ms-sm-4">
                  <h4 className="mb-2" style={{fontWeight: 600}}>Telegram Mini App</h4>
                  <span style={{color: '#555'}}>Custom Telegram Mini App development with seamless e-commerce integration, user engagement features, and secure payment processing.</span>
                </div>
              </div>
            </div>
            {/* Service Card 3 */}
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div
                className="service-item d-flex flex-column flex-sm-row bg-white h-100"
                style={{
                  borderRadius: '16px',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                  padding: '2rem',
                  transition: 'box-shadow 0.2s',
                  alignItems: 'center',
                  gap: '1.5rem'
                }}
              >
                <div
                  className="bg-icon flex-shrink-0 mb-3"
                  style={{
                    background: '#f5f5f5',
                    borderRadius: '50%',
                    width: 56,
                    height: 56,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <i className="fa fa-coffee fa-2x text-dark"></i>
                </div>
                <div className="ms-sm-4">
                  <h4 className="mb-2" style={{fontWeight: 600}}>Digital Menu for Coffee & Food</h4>
                  <span style={{color: '#555'}}>Interactive digital menu solutions for cafes and restaurants, featuring QR code access, real-time updates, and easy order management.</span>
                </div>
              </div>
            </div>
            {/* Service Card 4 */}
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.7s">
              <div
                className="service-item d-flex flex-column flex-sm-row bg-white h-100"
                style={{
                  borderRadius: '16px',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                  padding: '2rem',
                  transition: 'box-shadow 0.2s',
                  alignItems: 'center',
                  gap: '1.5rem'
                }}
              >
                <div
                  className="bg-icon flex-shrink-0 mb-3"
                  style={{
                    background: '#f5f5f5',
                    borderRadius: '50%',
                    width: 56,
                    height: 56,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <i className="fa fa-users-cog fa-2x text-dark"></i>
                </div>
                <div className="ms-sm-4">
                  <h4 className="mb-2" style={{fontWeight: 600}}>Management System</h4>
                  <span style={{color: '#555'}}>Integrated CRM with customer profiles, support ticketing, and targeted marketing automation.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Inline style for hover effect */}
      <style>{`
        .service-item:hover {
          box-shadow: 0 8px 32px rgba(0,0,0,0.12) !important;
          transform: translateY(-4px);
        }
      `}</style>
    </div>
  );
}