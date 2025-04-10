import React from 'react'

export default function Projects() {
  return (
<div>
  <div className="container-xxl py-6 pt-5" id="project">
    <div className="container">
      <div className="row g-5 mb-5 align-items-center wow fadeInUp" data-wow-delay="0.1s">
        <div className="col-lg-6">
          <h1 className="display-5 mb-0">My Projects</h1>
        </div>
        <div className="col-lg-6 text-lg-end">
          <ul className="list-inline mx-n3 mb-0" id="portfolio-flters">
            <li className="mx-3 active" data-filter="*">All Projects</li>
            {/* <li className="mx-3" data-filter=".first">UI/UX Design</li>
            <li className="mx-3" data-filter=".second">Graphic Design</li> */}
          </ul>
        </div>
      </div>
      <div className="row g-4 portfolio-container wow fadeInUp" data-wow-delay="0.1s">
    <div className="col-lg-4 col-md-6 portfolio-item first">
        <div className="portfolio-img rounded overflow-hidden">
            <img className="img-fluid" src="img/targetclothe-preview.jpg" alt="Target Clothe" />
            <div className="portfolio-btn">
                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/targetclothe-preview.jpg" data-lightbox="portfolio"><i className="fa fa-eye" /></a>
                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="https://www.targetclothe.com/"><i className="fa fa-link" /></a>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-md-6 portfolio-item second">
        <div className="portfolio-img rounded overflow-hidden">
            <img className="img-fluid" src="img/pwa-preview.jpg" alt="My PWA" />
            <div className="portfolio-btn">
                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/pwa-preview.jpg" data-lightbox="portfolio"><i className="fa fa-eye" /></a>
                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="https://my-pwa-flame.vercel.app/"><i className="fa fa-link" /></a>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-md-6 portfolio-item first">
        <div className="portfolio-img rounded overflow-hidden">
            <img className="img-fluid" src="img/chatapp-preview.jpg" alt="Chat App" />
            <div className="portfolio-btn">
                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/chatapp-preview.jpg" data-lightbox="portfolio"><i className="fa fa-eye" /></a>
                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="https://chat-app-lf6y.vercel.app/"><i className="fa fa-link" /></a>
            </div>
        </div>
    </div>
    <div className="col-lg-4 col-md-6 portfolio-item second">
        <div className="portfolio-img rounded overflow-hidden">
            <img className="img-fluid" src="img/stylish-preview.jpg" alt="Stylish" />
            <div className="portfolio-btn">
                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/stylish-preview.jpg" data-lightbox="portfolio"><i className="fa fa-eye" /></a>
                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="https://stylish-indol.vercel.app/"><i className="fa fa-link" /></a>
            </div>
        </div>
    </div>
</div>
    </div>
  </div>
</div>

  )
}
