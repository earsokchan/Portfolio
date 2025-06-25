import React from 'react'

export default function Header() {
  return (
    <header
      id="home"
      style={{
        minHeight: '100vh',
        width: '100vw',
        background: 'linear-gradient(120deg, #ff9466 0%, #ff7e5f 100%)',
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
        <div
          style={{
            borderRadius: '50%',
            border: '6px solid #fff',
            padding: '10px',
            background: 'rgba(255,255,255,0.08)',
            boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10)',
            marginBottom: 0
          }}
        >
          <img
            src="img/about-2.png"
            alt="Ear Sokchan"
            style={{
              width: '200px',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '50%',
              boxShadow: '0 2px 12px 0 rgba(0,0,0,0.08)'
            }}
          />
        </div>
        <h3 style={{
          fontWeight: 400,
          fontSize: '1.25rem',
          letterSpacing: '0.04em',
          margin: 0,
          color: '#fff'
        }}>
          I'm
        </h3>
        <h1 style={{
          fontWeight: 700,
          fontSize: '2.6rem',
          margin: 0,
          color: '#fff',
          lineHeight: 1.1
        }}>
          Ear Sokchan
        </h1>
        <div style={{
          fontSize: '1.15rem',
          color: '#fff',
          fontWeight: 500,
          margin: 0,
          letterSpacing: '0.01em'
        }}>
          Web Developer
        </div>
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