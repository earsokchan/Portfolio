import React from 'react'

export default function Projects() {
  // Add custom style objects
  const cardStyle = {
    boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
    background: '#fff',
    borderRadius: '18px',
    transition: 'transform 0.2s, box-shadow 0.2s',
    border: 'none',
    overflow: 'hidden',
    marginBottom: '24px',
  };
  const imgStyle = {
    objectFit: 'cover',
    width: '100%',
    height: '220px',
    borderTopLeftRadius: '18px',
    borderTopRightRadius: '18px',
    borderBottom: '1px solid #f0f0f0',
  };
  const btnGroupStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    padding: '16px 0',
    background: '#fafbfc',
    borderBottomLeftRadius: '18px',
    borderBottomRightRadius: '18px',
  };

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



    <div className="col-lg-4 col-md-6 portfolio-item first">
        <div className="portfolio-img rounded overflow-hidden">
            <img className="img-fluid" src="img/image copy 2.png" alt="Laravel + Flutter" />
            <div className="portfolio-btn">
                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/image copy 2.png" data-lightbox="portfolio"><i className="fa fa-eye" /></a>
                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="https://youtu.be/niyT61JHwM8?si=U09U_OUvCXloy37n"><i className="fa fa-link" /></a>
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

              {/* Amdmin Laravel */}
    <div className="col-lg-4 col-md-6 portfolio-item second">
        <div className="portfolio-img rounded overflow-hidden">
            <img className="img-fluid" src="img/image.png" alt="Admin React+Node Project" />
            <div className="portfolio-btn">
                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/image.png" data-lightbox="portfolio"><i className="fa fa-eye" /></a>
                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="https://earsokchan-portfolio.vercel.app"><i className="fa fa-link" /></a>
            </div>
        </div>
    </div>


    {/* react Ecommerce online store */}

    <div className="col-lg-4 col-md-6 portfolio-item second">
        <div className="portfolio-img rounded overflow-hidden">
            <img className="img-fluid" src="img/image copy.png" alt="Admin PHP" />
            <div className="portfolio-btn">
                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/image copy.png" data-lightbox="portfolio"><i className="fa fa-eye" /></a>
                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="https://github.com/Sokchan3434456677/ecom-php.git"><i className="fa fa-link" /></a>
            </div>
        </div>
    </div>




     <div className="col-lg-4 col-md-6 portfolio-item second">
        <div className="portfolio-img rounded overflow-hidden">
            <img className="img-fluid" src="img/image copy 3.png" alt="React + Laravel" />
            <div className="portfolio-btn">
                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/image copy 3.png" data-lightbox="portfolio"><i className="fa fa-eye" /></a>
                <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="https://youtu.be/KAowhxraZ2A?si=C-GvEmB2kRSoQ4UK"><i className="fa fa-link" /></a>
            </div>
        </div>
    </div>

</div>
    </div>
  </div>
</div>

  )
}
