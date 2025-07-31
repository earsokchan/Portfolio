import React, { useState } from 'react';
import WorkExperiences from '../components/work/WorkExperices';

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
    <div style={{
      background: "#f8fafc",
      minHeight: "100vh",
      paddingBottom: "3rem"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 1rem",
        paddingTop: "2rem",
        paddingBottom: "3rem"
      }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem"
        }}>
          {/* Left Column */}
          <div style={{
            width: "100%"
          }}>
            {/* Cybersecurity Experience */}
            <div style={{
              background: "#ffffff",
              borderRadius: "12px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              padding: "1.5rem",
              transition: "box-shadow 0.2s ease",
              marginBottom: "1.5rem",
              border: "1px solid #e2e8f0"
            }}>
              <div style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
                marginBottom: "1rem"
              }}>
                <div style={{
                  flexShrink: 0,
                  background: "#eff6ff",
                  border: "2px solid #3b82f6",
                  borderRadius: "12px",
                  padding: "1.25rem",
                  textAlign: "center"
                }}>
                  <span style={{
                    fontSize: "2.25rem",
                    fontWeight: "bold",
                    color: "#3b82f6",
                    display: "block"
                  }}>1</span>
                  <span style={{
                    color: "#64748b",
                    fontSize: "0.875rem",
                    marginTop: "0.25rem",
                    display: "block"
                  }}>Month</span>
                </div>
                <div>
                  <h3 style={{
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    color: "#1e293b",
                    margin: 0
                  }}>
                    CyberSecurity Specialist
                  </h3>
                  <p style={{
                    color: "#64748b",
                    marginTop: "0.5rem",
                    marginBottom: 0
                  }}>
                    Volunteer position at Angkor Social Media | CyberSecurity
                  </p>
                </div>
              </div>
              <p style={{
                color: "#334155",
                marginBottom: "1rem"
              }}>
                I completed a 1-month volunteer position as a CyberSecurity Specialist, contributing to key cybersecurity initiatives to safeguard the organization's digital presence.
              </p>
              <ul style={{
                listStyle: "none",
                padding: 0,
                margin: 0
              }}>
                {[
                  "Vulnerability Scanning and Reporting",
                  "Security Awareness Training",
                  "Incident Response and Monitoring",
                  "Knowledge Sharing"
                ].map((item, index) => (
                  <li key={index} style={{
                    display: "flex",
                    alignItems: "flex-start",
                    marginBottom: "0.5rem"
                  }}>
                    <svg style={{
                      width: "1.25rem",
                      height: "1.25rem",
                      color: "#3b82f6",
                      marginRight: "0.75rem",
                      flexShrink: 0,
                      marginTop: "0.125rem"
                    }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span style={{ color: "#334155" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Web Developer Experience */}
            <div style={{
              background: "#ffffff",
              borderRadius: "12px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              padding: "1.5rem",
              transition: "box-shadow 0.2s ease",
              marginBottom: "1.5rem",
              border: "1px solid #e2e8f0"
            }}>
              <div style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
                marginBottom: "1rem"
              }}>
                <div style={{
                  flexShrink: 0,
                  background: "#eff6ff",
                  border: "2px solid #3b82f6",
                  borderRadius: "12px",
                  padding: "1.25rem",
                  textAlign: "center"
                }}>
                  <span style={{
                    fontSize: "2.25rem",
                    fontWeight: "bold",
                    color: "#3b82f6",
                    display: "block"
                  }}>6</span>
                  <span style={{
                    color: "#64748b",
                    fontSize: "0.875rem",
                    marginTop: "0.25rem",
                    display: "block"
                  }}>Months</span>
                </div>
                <div>
                  <h3 style={{
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    color: "#1e293b",
                    margin: 0
                  }}>
                    Web Developer (Freelance)
                  </h3>
                </div>
              </div>
              <ul style={{
                listStyle: "none",
                padding: 0,
                margin: 0
              }}>
                {[
                  "Developed full-stack e-commerce websites with secure payment gateways (PayPal/KHQR)",
                  "Built responsive admin dashboards for managing products, orders, and user data",
                  "Created mobile-friendly apps to enhance customer shopping experiences",
                  "Designed and implemented RESTful APIs for seamless frontend-backend communication",
                  "Used React for dynamic frontend interfaces and Node.js/Express for backend logic",
                  "Integrated MongoDB for efficient database management and scalability",
                  "Debugged and optimized performance for faster load times and smoother UX",
                  "Collaborated with clients to refine features and meet project requirements",
                  "Ensured cross-browser and device compatibility for all applications",
                  "Delivered projects on time while maintaining clean, documented code",
                  "Team collaboration with Phillip Bank Plc on API integration for payment systems"
                ].map((item, index) => (
                  <li key={index} style={{
                    display: "flex",
                    alignItems: "flex-start",
                    marginBottom: "0.75rem"
                  }}>
                    <svg style={{
                      width: "1.25rem",
                      height: "1.25rem",
                      color: "#3b82f6",
                      marginRight: "0.75rem",
                      flexShrink: 0,
                      marginTop: "0.125rem"
                    }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span style={{ color: "#334155" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Education */}
            <div style={{
              background: "#ffffff",
              borderRadius: "12px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              padding: "1.5rem",
              transition: "box-shadow 0.2s ease",
              marginBottom: "1.5rem",
              border: "1px solid #e2e8f0"
            }}>
              <h3 style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                color: "#3b82f6",
                marginBottom: "1rem"
              }}>
                Education
              </h3>
              <div style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
                marginBottom: "1rem"
              }}>
                <img 
                  src="http://www.rupp.edu.kh/logo/rupp_logo.png" 
                  alt="RUPP Logo" 
                  style={{
                    width: "3rem",
                    height: "3rem",
                    borderRadius: "0.75rem",
                    border: "1px solid #e2e8f0"
                  }}
                />
                <div>
                  <h4 style={{
                    fontWeight: "bold",
                    color: "#1e293b",
                    margin: 0
                  }}>
                    Royal University of Phnom Penh (RUPP)
                  </h4>
                  <p style={{
                    color: "#64748b",
                    margin: "0.25rem 0"
                  }}>
                    Bachelor's Degree
                  </p>
                  <p style={{
                    color: "#64748b",
                    fontSize: "0.875rem",
                    margin: 0
                  }}>
                    2022 - 2025
                  </p>
                </div>
              </div>
              <p style={{
                color: "#334155",
                marginBottom: "1rem"
              }}>
                I studied at the Royal University of Phnom Penh, Cambodia's oldest and largest university, known for its excellence in science, technology, and humanities.
              </p>
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem"
              }}>
                <a
                  href="https://www.rupp.edu.kh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "0.5rem 1rem",
                    border: "1px solid #3b82f6",
                    color: "#3b82f6",
                    borderRadius: "0.5rem",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    textDecoration: "none",
                    transition: "background-color 0.2s ease"
                  }}
                >
                  Visit RUPP Website
                </a>
                <button
                  onClick={() => { setShowCert(true); setCertIndex(0); }}
                  style={{
                    padding: "0.5rem 1rem",
                    background: "#3b82f6",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: "0.5rem",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "background-color 0.2s ease"
                  }}
                >
                  View Certificates
                </button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div style={{
            width: "100%"
          }}>
            <div style={{
              background: "#ffffff",
              borderRadius: "12px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              padding: "1.5rem",
              height: "100%",
              border: "1px solid #e2e8f0"
            }}>
              <h3 style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                color: "#3b82f6",
                marginBottom: "1rem"
              }}>
                Certificates & Achievements
              </h3>
              {certificates.length > 0 ? (
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem"
                }}>
                  {certificates.map((cert, index) => (
                    <div 
                      key={index} 
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "1rem",
                        background: "#f8fafc",
                        borderRadius: "0.5rem",
                        border: "1px solid #e2e8f0",
                        transition: "border-color 0.2s ease"
                      }}
                    >
                      <span style={{
                        fontWeight: "500",
                        color: "#1e293b"
                      }}>
                        {cert.title}
                      </span>
                      <a
                        href={cert.src}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          padding: "0.375rem 0.75rem",
                          border: "1px solid #cbd5e1",
                          color: "#334155",
                          borderRadius: "0.375rem",
                          fontSize: "0.875rem",
                          textDecoration: "none",
                          transition: "background-color 0.2s ease"
                        }}
                      >
                        View PDF
                      </a>
                    </div>
                  ))}
                </div>
              ) : (
                <p style={{ color: "#64748b" }}>No certificates to display yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {showCert && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0,0,0,0.5)",
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem"
        }} onClick={() => setShowCert(false)}>
          <div 
            style={{
              background: "#ffffff",
              borderRadius: "12px",
              maxWidth: "900px",
              width: "100%",
              maxHeight: "90vh",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden"
            }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "1rem",
              borderBottom: "1px solid #e2e8f0"
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem"
              }}>
                <button
                  onClick={() => setCertIndex(i => Math.max(0, i - 1))}
                  disabled={certIndex === 0}
                  style={{
                    padding: "0.5rem",
                    borderRadius: "50%",
                    color: certIndex === 0 ? "#94a3b8" : "#3b82f6",
                    border: "none",
                    background: "none",
                    cursor: certIndex === 0 ? "default" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <svg style={{
                    width: "1.25rem",
                    height: "1.25rem"
                  }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <span style={{
                  fontWeight: "500",
                  color: "#3b82f6"
                }}>
                  {certificates[certIndex].title} ({certIndex + 1}/{certificates.length})
                </span>
                <button
                  onClick={() => setCertIndex(i => Math.min(certificates.length - 1, i + 1))}
                  disabled={certIndex === certificates.length - 1}
                  style={{
                    padding: "0.5rem",
                    borderRadius: "50%",
                    color: certIndex === certificates.length - 1 ? "#94a3b8" : "#3b82f6",
                    border: "none",
                    background: "none",
                    cursor: certIndex === certificates.length - 1 ? "default" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <svg style={{
                    width: "1.25rem",
                    height: "1.25rem"
                  }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <button
                onClick={() => setShowCert(false)}
                style={{
                  padding: "0.5rem",
                  borderRadius: "50%",
                  color: "#64748b",
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <svg style={{
                  width: "1.25rem",
                  height: "1.25rem"
                }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div style={{
              flexGrow: 1,
              overflow: "hidden"
            }}>
              <iframe
                src={certificates[certIndex].src}
                title={certificates[certIndex].title}
                style={{
                  width: "100%",
                  height: "100%",
                  minHeight: "70vh",
                  border: "none"
                }}
              />
            </div>
          </div>
        </div>
      )}
      
      <WorkExperiences />
    </div>
  );
}