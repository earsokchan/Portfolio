import React from 'react'

export default function Header() {
  return (
    <div>
  <div className="container-fluid bg-light my-6 mt-0" id="home">
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6 py-6 pb-0 pt-lg-0">
          <h3 className="text-primary mb-3">I'm</h3>
          <h1 className="display-3 mb-3">Ear Sokchan</h1>
          <h2 className="typed-text-output d-inline" />
          <div className="typed-text">Web Developer</div>
          <div className="d-flex align-items-center pt-5">
          <a 
            href="./CV/EarSokchan_Cv.pdf" 
            className="btn btn-primary py-3 px-4 me-5"
            download="YourName_CV.pdf"
          >
            Download CV
          </a>
        </div>
        </div>
        <div className="col-lg-6">
          <img className="img-fluid" src="img/about-2.png" alt />
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
