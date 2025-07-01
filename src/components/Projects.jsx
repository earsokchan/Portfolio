import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 200px;
    height: 250px;
    border-radius: 14px;
    z-index: 1111;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
    transition: width 0.2s, height 0.2s;
  }

  .bg {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 190px;
    height: 240px;
    z-index: 2;
    background: rgba(255, 255, 255, .95);
    backdrop-filter: blur(24px);
    border-radius: 10px;
    overflow: hidden;
    outline: 2px solid white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: width 0.2s, height 0.2s;
    padding: 0;
  }

  .project-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 0;
    flex: 1 1 auto;
    display: block;
  }

  .portfolio-btn {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100%;
    z-index: 3;
  }

  .blob {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: #ff0000;
    opacity: 1;
    filter: blur(12px);
    animation: blob-bounce 5s infinite ease;
  }

  @keyframes blob-bounce {
    0% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
    25% {
      transform: translate(-100%, -100%) translate3d(100%, 0, 0);
    }
    50% {
      transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
    }
    75% {
      transform: translate(-100%, -100%) translate3d(0, 100%, 0);
    }
    100% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
  }

  /* Responsive styles */
  @media (max-width: 991.98px) {
    .card {
      width: 100%;
      height: 220px;
      min-width: 0;
    }
    .bg {
      width: 98%;
      height: 210px;
      left: 1%;
      top: 5px;
    }
    .project-img {
      height: 110px;
    }
  }

  @media (max-width: 575.98px) {
    .card {
      width: 100%;
      height: 180px;
      min-width: 0;
    }
    .bg {
      width: 98%;
      height: 170px;
      left: 1%;
      top: 5px;
    }
    .project-img {
      height: 80px;
    }
    .blob {
      width: 90px;
      height: 90px;
    }
  }
`;

const projects = [
  {
    img: "img/targetclothe-preview.jpg",
    alt: "Target Clothe",
    view: "img/targetclothe-preview.jpg",
    link: "https://www.targetclothe.com/"
  },
  {
    img: "img/image copy 2.png",
    alt: "Laravel + Flutter",
    view: "img/image copy 2.png",
    link: "https://youtu.be/niyT61JHwM8?si=U09U_OUvCXloy37n"
  },
  {
    img: "img/pwa-preview.jpg",
    alt: "My PWA",
    view: "img/pwa-preview.jpg",
    link: "https://my-pwa-flame.vercel.app/"
  },
  {
    img: "img/chatapp-preview.jpg",
    alt: "Chat App",
    view: "img/chatapp-preview.jpg",
    link: "https://chat-app-lf6y.vercel.app/"
  },
  {
    img: "img/stylish-preview.jpg",
    alt: "Stylish",
    view: "img/stylish-preview.jpg",
    link: "https://stylish-indol.vercel.app/"
  },
  {
    img: "img/image.png",
    alt: "Admin React+Node Project",
    view: "img/image.png",
    link: "https://earsokchan-portfolio.vercel.app"
  },
  {
    img: "img/image copy.png",
    alt: "Admin PHP",
    view: "img/image copy.png",
    link: "https://github.com/Sokchan3434456677/ecom-php.git"
  },
  {
    img: "img/image copy 3.png",
    alt: "React + Laravel",
    view: "img/image copy 3.png",
    link: "https://youtu.be/KAowhxraZ2A?si=C-GvEmB2kRSoQ4UK"
  }
];

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
            {projects.map((project, idx) => (
              <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item" key={idx}>
                <StyledWrapper>
                  <div className="card">
                    <div className="bg">
                      <img className="project-img" src={project.img} alt={project.alt} />
                      <div className="portfolio-btn">
                        <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href={project.view} data-lightbox="portfolio">
                          <i className="fa fa-eye" />
                        </a>
                        <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href={project.link}>
                          <i className="fa fa-link" />
                        </a>
                      </div>
                    </div>
                    <div className="blob" />
                  </div>
                </StyledWrapper>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
