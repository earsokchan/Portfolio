import React, { useState } from 'react';
import WorkExperiences from '../components/work/WorkExperices'; // Corrected typo in component name

export default function About() {
  const [showCert, setShowCert] = useState(false);
  const [certIndex, setCertIndex] = useState(0);

  const certificates = [
    {
      src: "/aws/AWS_Academy_Graduate___AWS_Academy_Data_Engineering_Badge20250614-29-3dbqvc.pdf",
      title: "AWS Academy Data Engineering"
    },
    {
      src: "/aws/AWS_Academy_Graduate___AWS_Academy_Cloud_Foundations_Badge20250614-25-xhb8kv.pdf",
      title: "AWS Academy Cloud Foundations"
    },
    {
      src: "/aws/AWS_Academy_Graduate___AWS_Academy_Machine_Learning_Foundations_Badge20250614-28-k474te.pdf",
      title: "AWS Academy Machine Learning Foundations"
    }
  ];

  return (
    <div style={{ background: "#f4f6fb", minHeight: "100vh", paddingBottom: "3rem" }}>
      <div className="container-xxl py-6" id="about">
        <div className="container">
          <div className="row g-5 align-items-start"> {/* Changed align-items-stretch to align-items-start for better control */}

            {/* Left Column: Experience and Education */}
            <div className="col-lg-6 wow fadeInUp d-flex flex-column" data-wow-delay="0.1s">

              {/* Cybersecurity Experience Card */}
              <div className="d-flex align-items-center mb-4">
                <div
                  className="years flex-shrink-0 text-center me-4 shadow rounded"
                  style={{
                    background: "#fff",
                    padding: "28px 22px",
                    border: "2.5px solid #4f8cff",
                    boxShadow: "0 4px 24px rgba(79,140,255,0.08)",
                    borderRadius: "18px"
                  }}
                >
                  <h1 className="display-1 mb-0" style={{ color: "#4f8cff" }}>1</h1>
                  <h5 className="mb-0" style={{ color: "#6c757d" }}>Month</h5>
                </div>
                <h3 className="lh-base mb-0 ms-2 fw-bold" style={{ color: "#222", fontSize: "1.45rem" }}>
                  of working experience as a CyberSecurity
                </h3>
              </div>
              <div className="bg-white rounded shadow p-4 mb-4" style={{ borderRadius: "18px", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                <p className="mb-4" style={{ color: "#5a5a5a", fontSize: "1.08rem" }}>
                  I completed a 1-month volunteer position as a CyberSecurity Specialist at Angkor Social Media | CyberSecurity, where I contributed to key cybersecurity initiatives to help safeguard the organization’s digital presence.
                </p>
                <ul className="list-unstyled mb-0">
                  <li className="mb-3 d-flex align-items-center">
                    <i className="far fa-check-circle text-primary me-3 fs-5" />
                    <span className="text-dark">Vulnerability Scanning and Reporting</span>
                  </li>
                  <li className="mb-3 d-flex align-items-center">
                    <i className="far fa-check-circle text-primary me-3 fs-5" />
                    <span className="text-dark">Security Awareness Training</span>
                  </li>
                  <li className="mb-3 d-flex align-items-center">
                    <i className="far fa-check-circle text-primary me-3 fs-5" />
                    <span className="text-dark">Incident Response and Monitoring</span>
                  </li>
                  <li className="mb-3 d-flex align-items-center">
                    <i className="far fa-check-circle text-primary me-3 fs-5" />
                    <span className="text-dark">Knowledge Sharing</span>
                  </li>
                </ul>
              </div>

              {/* Web Developer Section */}
              <div className="bg-white rounded shadow p-4 mb-4" style={{ borderRadius: "18px", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                <div className="d-flex align-items-center mb-3">
                  <div
                    className="years flex-shrink-0 text-center me-4 shadow rounded"
                    style={{
                      background: "#fff",
                      padding: "28px 22px",
                      border: "2.5px solid #4f8cff",
                      boxShadow: "0 4px 24px rgba(79,140,255,0.08)",
                      borderRadius: "18px"
                    }}
                  >
                    <h1 className="display-1 mb-0" style={{ color: "#4f8cff", fontSize: 170 }}>6</h1>
                    <h5 className="mb-0" style={{ color: "#6c757d" }}>Months</h5>
                  </div>
                  <h4 className="lh-base mb-0 ms-2 fw-bold" style={{ color: "#222", fontSize: "1.25rem" }}>
                    Web Developer (Freelance)
                  </h4>
                </div>
                <ul className="list-unstyled mb-0">
                  <li className="mb-3 d-flex align-items-start">
                    <i className="far fa-check-circle text-primary me-3 fs-5 mt-1" />
                    <span className="text-dark">
                      Developed full-stack e-commerce websites with secure payment gateways (PayPal/KHQR).
                    </span>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <i className="far fa-check-circle text-primary me-3 fs-5 mt-1" />
                    <span className="text-dark">
                      Built responsive admin dashboards for managing products, orders, and user data.
                    </span>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <i className="far fa-check-circle text-primary me-3 fs-5 mt-1" />
                    <span className="text-dark">
                      Created mobile-friendly apps to enhance customer shopping experiences.
                    </span>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <i className="far fa-check-circle text-primary me-3 fs-5 mt-1" />
                    <span className="text-dark">
                      Designed and implemented RESTful APIs for seamless frontend-backend communication.
                    </span>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <i className="far fa-check-circle text-primary me-3 fs-5 mt-1" />
                    <span className="text-dark">
                      Used React for dynamic frontend interfaces and Node.js/Express for backend logic.
                    </span>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <i className="far fa-check-circle text-primary me-3 fs-5 mt-1" />
                    <span className="text-dark">
                      Integrated MongoDB for efficient database management and scalability.
                    </span>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <i className="far fa-check-circle text-primary me-3 fs-5 mt-1" />
                    <span className="text-dark">
                      Debugged and optimized performance for faster load times and smoother UX.
                    </span>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <i className="far fa-check-circle text-primary me-3 fs-5 mt-1" />
                    <span className="text-dark">
                      Collaborated with clients to refine features and meet project requirements.
                    </span>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <i className="far fa-check-circle text-primary me-3 fs-5 mt-1" />
                    <span className="text-dark">
                      Ensured cross-browser and device compatibility for all applications.
                    </span>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <i className="far fa-check-circle text-primary me-3 fs-5 mt-1" />
                    <span className="text-dark">
                      Delivered projects on time while maintaining clean, documented code.
                    </span>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <i className="far fa-check-circle text-primary me-3 fs-5 mt-1" />
                    <span className="text-dark">
                      Team collaboration (worked effectively with supervisors, managers, product owner at Phillip Bank Plc) on API integration for Phillip Bank Payment in e-commerce websites.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Education Section */}
              <div className="bg-white rounded shadow p-4 mb-4" style={{ borderRadius: "18px", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                <h4 className="mb-3" style={{ color: "#4f8cff" }}>Education</h4>
                <div className="d-flex align-items-center mb-2">
                  <img
                    src="http://www.rupp.edu.kh/logo/rupp_logo.png"
                    alt="RUPP Logo"
                    style={{ width: 52, height: 52, marginRight: 18, borderRadius: "12px", border: "1.5px solid #e3e6ee" }}
                  />
                  <div>
                    <h5 className="mb-1 fw-bold" style={{ color: "#222" }}>Royal University of Phnom Penh (RUPP)</h5>
                    <span style={{ color: "#6c757d" }}>Bachelor's Degree</span>
                    <div className="text-muted" style={{ fontSize: 14 }}>
                      2022 - 2025
                    </div>
                  </div>
                </div>
                <p className="mb-2" style={{ color: "#5a5a5a" }}>
                  I studied at the Royal University of Phnom Penh, Cambodia's oldest and largest university, known for its excellence in science, technology, and humanities.
                </p>
                <a
                  href="https://www.rupp.edu.kh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary btn-sm"
                  style={{ borderColor: "#4f8cff", color: "#4f8cff", marginRight: 10 }}
                >
                  Visit RUPP Website
                </a>
                <button
                  className="btn btn-primary btn-sm"
                  style={{ background: "#4f8cff", borderColor: "#4f8cff" }}
                  onClick={() => { setShowCert(true); setCertIndex(0); }}
                >
                  View Certificates
                </button>
              </div>
            </div>

            {/* Right Column: Certificates Display (Now occupies the right side) */}
            <div className="col-lg-6 wow fadeInUp d-flex flex-column" data-wow-delay="0.5s">
              <div className="bg-white rounded shadow p-4" style={{ borderRadius: "18px", boxShadow: "0 2px 12px rgba(0,0,0,0.04)", flexGrow: 1 }}>
                <h4 className="mb-3" style={{ color: "#4f8cff" }}>Certificates & Achievements</h4>
                {certificates.length > 0 ? (
                  <div className="d-flex flex-column gap-3">
                    {certificates.map((cert, index) => (
                      <div key={index} className="d-flex align-items-center justify-content-between p-3 rounded" style={{ border: "1px solid #e3e6ee", background: "#f8f9fa" }}>
                        <span className="text-dark fw-medium">{cert.title}</span>
                        <a
                          href={cert.src}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-secondary btn-sm"
                          style={{ borderColor: "#6c757d", color: "#6c757d" }}
                        >
                          View PDF
                        </a>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted">No certificates to display yet.</p>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Certificate Modal (if still needed, though the right column now lists them) */}
      {showCert && (
        <div
          style={{
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          onClick={() => setShowCert(false)}
        >
          <div
            style={{
              background: "#fff",
              padding: 0,
              borderRadius: 12,
              maxWidth: "90vw",
              maxHeight: "90vh",
              boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
              position: "relative",
              display: "flex",
              flexDirection: "column"
            }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setShowCert(false)}
              style={{
                position: "absolute",
                top: 8,
                right: 8,
                background: "#4f8cff",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: 32,
                height: 32,
                fontSize: 18,
                cursor: "pointer"
              }}
              aria-label="Close"
            >×</button>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "12px 0 12px 0", borderBottom: "1px solid #eee" }}>
              <button
                className="btn btn-outline-primary btn-sm"
                style={{ marginRight: 12, visibility: certIndex === 0 ? "hidden" : "visible" }}
                onClick={() => setCertIndex(i => Math.max(0, i - 1))}
                disabled={certIndex === 0}
              >
                Previous
              </button>
              <span style={{ fontWeight: 600, color: "#4f8cff" }}>
                {certificates[certIndex].title} ({certIndex + 1}/{certificates.length})
              </span>
              <button
                className="btn btn-outline-primary btn-sm"
                style={{ marginLeft: 12, visibility: certIndex === certificates.length - 1 ? "hidden" : "visible" }}
                onClick={() => setCertIndex(i => Math.min(certificates.length - 1, i + 1))}
                disabled={certIndex === certificates.length - 1}
              >
                Next
              </button>
            </div>
            <iframe
              src={certificates[certIndex].src}
              title={certificates[certIndex].title}
              style={{
                width: "70vw",
                height: "80vh",
                border: "none",
                borderRadius: "0 0 12px 12px"
              }}
            />
          </div>
        </div>
      )}
      <WorkExperiences />
    </div>
  );
}