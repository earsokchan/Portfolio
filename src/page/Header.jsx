import React from 'react'
import styled from 'styled-components'

export default function Header() {
  return (
    <header
      id="home"
      style={{
        minHeight: '40vh',
        width: '100vw',
        background: 'linear-gradient(120deg,rgb(255, 252, 252) 0%,rgb(255, 255, 255) 100%)',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 0,
        margin: 0,
        boxSizing: 'border-box'
      }}
    >
      <div style={{
        width: '100%',
        maxWidth: 420,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 24
      }}>
        <StyledWrapper>
          <div className="card">
            <div className="infos">
              <div
                className="image"
                style={{
                  backgroundImage: 'url("img/about-2.png")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <div className="info">
                <div>
                  <p className="name">
                    Ear Sokchan
                  </p>
                  <p className="function">
                    Web Developer
                  </p>
                </div>
                <div className="stats">
                  {/* <p className="flex flex-col">
                    Articles
                    <span className="state-value">
                      34
                    </span>
                  </p> */}
                  {/* <p className="flex">
                    Followers
                    <span className="state-value">
                      455
                    </span>
                  </p> */}
                </div>
              </div>
            </div>
            <a
              className="request"
              href="https://github.com/earsokchan"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}
            >
              GitHub
            </a>
          </div>
        </StyledWrapper>
        {/* CV Buttons */}
        <div className="d-flex align-items-center ms-3" style={{ marginTop: 12 }}>
          <a
            href="/cv/EarSokchan_Cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary btn-sm me-2"
            style={{ borderColor: "#4f8cff", color: "#4f8cff" }}
          >
            View CV
          </a>
          <a
            href="/cv/EarSokchan_Cv.pdf"
            download="EarSokchan_Cv.pdf"
            className="btn btn-primary btn-sm"
            style={{ background: "#4f8cff", borderColor: "#4f8cff" }}
          >
            Download CV
          </a>
        </div>
      </div>
    </header>
  )
}

const StyledWrapper = styled.div`
  .card {
    max-width: 320px;
    border-radius: 1rem;
    background-color: rgba(31, 41, 55, 1);
    padding: 1rem;
  }

  .infos {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    grid-gap: 1rem;
    gap: 1rem;
  }

  .image {
    height: 7rem;
    width: 7rem;
    border-radius: 0.5rem;
    background-color: rgb(118, 36, 194);
    background: linear-gradient(to bottom right, rgb(118, 36, 194), rgb(185, 128, 240));
  }

  .info {
    height: 7rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .name {
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
  }

  .function {
    font-size: 0.75rem;
    line-height: 1rem;
    color: rgba(156, 163, 175, 1);
  }

  .stats {
    width: 100%;
    border-radius: 0.5rem;
    background-color: rgba(255, 255, 255, 1);
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.75rem;
    line-height: 1rem;
    color: rgba(0, 0, 0, 1);
  }

  .flex {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 4px;
  }

  .state-value {
    font-weight: 700;
    color: rgb(118, 36, 194);
  }

  .request {
    margin-top: 1.5rem;
    width: 100%;
    border: 1px solid transparent;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    line-height: 1.5rem;
    transition: all .3s ease;
  }

  .request:hover {
    background-color: rgb(118, 36, 194);
    color: #fff;
  }
`;