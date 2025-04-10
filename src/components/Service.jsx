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
              <a className="btn btn-primary py-3 px-5" href="">Get Started</a>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                <div className="bg-icon flex-shrink-0 mb-3">
                  <i className="fa fa-shopping-cart fa-2x text-dark"></i>
                </div>
                <div className="ms-sm-4">
                  <h4 className="mb-3">E-commerce Launch Package</h4>
                  {/* <h6 className="mb-3">Start from <span className="text-primary">$99.9</span></h6> */}
                  <span>Premium online store setup with advanced payment gateways, customizable product categories, and mobile-first design.</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
  <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
    <div className="bg-icon flex-shrink-0 mb-3">
      <i className="fa fa-telegram fa-2x text-dark"></i>
    </div>
    <div className="ms-sm-4">
      <h4 className="mb-3">Telegram Mini App</h4>
      {/* <h6 className="mb-3">Start from <span className="text-primary">$399</span></h6> */}
      <span>Custom Telegram Mini App development with seamless e-commerce integration, user engagement features, and secure payment processing.</span>
    </div>
  </div>
</div>
            
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                <div className="bg-icon flex-shrink-0 mb-3">
                  <i className="fa fa-users-cog fa-2x text-dark"></i>
                </div>
                <div className="ms-sm-4">
                  <h4 className="mb-3">management system</h4>
                  {/* <h6 className="mb-3">Start from <span className="text-primary">$279</span></h6> */}
                  <span>Integrated CRM with customer profiles, support ticketing, and targeted marketing automation.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}