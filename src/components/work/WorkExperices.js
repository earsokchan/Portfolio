import React from "react";

export default function WorkExperiences() {
  return (
    <div style={{
      background: "#f8fafc",
      minHeight: "100vh",
      padding: "3rem 0"
    }} id="work-experience">
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 1.5rem"
      }}>
        <h2 style={{
          color: "#3b82f6",
          fontSize: "2rem",
          fontWeight: "700",
          marginBottom: "2.5rem",
          position: "relative",
          display: "inline-block"
        }}>
          Work Experience
          <span style={{
            position: "absolute",
            bottom: "-8px",
            left: 0,
            width: "50%",
            height: "4px",
            background: "#3b82f6",
            borderRadius: "2px"
          }}></span>
        </h2>

        {/* Experience Cards */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem"
        }}>
          {/* Target Store Online Shop */}
          <div style={{
            background: "#ffffff",
            borderRadius: "12px",
            padding: "1.75rem",
            boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
            borderLeft: "4px solid #3b82f6",
            transition: "transform 0.2s, box-shadow 0.2s",
            ":hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 6px 12px rgba(0,0,0,0.1)"
            }
          }}>
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1rem"
            }}>
              <h3 style={{
                fontSize: "1.25rem",
                fontWeight: "700",
                color: "#1e293b",
                margin: 0
              }}>Target Store Online Shop</h3>
              
              <span style={{
                background: "#3b82f6",
                color: "white",
                padding: "0.25rem 0.75rem",
                borderRadius: "9999px",
                fontSize: "0.875rem",
                fontWeight: "500"
              }}>Web Developer</span>
              
              <span style={{
                color: "#64748b",
                fontSize: "0.875rem",
                marginLeft: "auto"
              }}>2025 - PRESENT</span>
            </div>
            
            <ul style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem"
            }}>
              {[
                "Developed full-stack e-commerce web app with PayPal, KHQR, and Phillip Bank API integration.",
                "Built responsive admin dashboards to manage products, orders, and users.",
                "Created mobile-friendly interfaces to enhance customer shopping experience.",
                "Designed RESTful APIs for smooth frontend-backend interaction.",
                "Used React (frontend) and Node.js/Express (backend); integrated MongoDB for scalability.",
                "Optimized site performance and ensured cross-browser/device compatibility."
              ].map((item, index) => (
                <li key={index} style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.5rem"
                }}>
                  <div style={{
                    color: "#3b82f6",
                    marginTop: "0.25rem",
                    flexShrink: 0
                  }}>•</div>
                  <span style={{ color: "#334155" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Global Security Solutions of Cambodia */}
          <div style={{
            background: "#ffffff",
            borderRadius: "12px",
            padding: "1.75rem",
            boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
            borderLeft: "4px solid #3b82f6",
            transition: "transform 0.2s, box-shadow 0.2s",
            ":hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 6px 12px rgba(0,0,0,0.1)"
            }
          }}>
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1rem"
            }}>
              <h3 style={{
                fontSize: "1.25rem",
                fontWeight: "700",
                color: "#1e293b",
                margin: 0
              }}>Global Security Solutions of Cambodia</h3>
              
              <span style={{
                background: "#3b82f6",
                color: "white",
                padding: "0.25rem 0.75rem",
                borderRadius: "9999px",
                fontSize: "0.875rem",
                fontWeight: "500"
              }}>Security Guard</span>
              
              <span style={{
                color: "#64748b",
                fontSize: "0.875rem",
                marginLeft: "auto"
              }}>2022 - 2024</span>
            </div>
            
            <ul style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem"
            }}>
              {[
                "Monitored building entrances and exits to prevent unauthorized access.",
                "Performed routine patrols of premises to deter criminal activity.",
                "Responded to alarms, emergencies, and reported incidents.",
                "Logged daily activity reports, incident reports, and maintenance issues."
              ].map((item, index) => (
                <li key={index} style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.5rem"
                }}>
                  <div style={{
                    color: "#3b82f6",
                    marginTop: "0.25rem",
                    flexShrink: 0
                  }}>•</div>
                  <span style={{ color: "#334155" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Personal/School Project */}
          <div style={{
            background: "#ffffff",
            borderRadius: "12px",
            padding: "1.75rem",
            boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
            borderLeft: "4px solid #3b82f6",
            transition: "transform 0.2s, box-shadow 0.2s",
            ":hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 6px 12px rgba(0,0,0,0.1)"
            }
          }}>
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1rem"
            }}>
              <h3 style={{
                fontSize: "1.25rem",
                fontWeight: "700",
                color: "#1e293b",
                margin: 0
              }}>Personal/School Projects</h3>
              
              <span style={{
                background: "#64748b",
                color: "white",
                padding: "0.25rem 0.75rem",
                borderRadius: "9999px",
                fontSize: "0.875rem",
                fontWeight: "500"
              }}>E-commerce Website & App Development</span>
            </div>
            
            <ul style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem"
            }}>
              {[
                "Developed full-stack e-commerce websites with secure checkout functionality using PayPal and KHQR QR payment systems.",
                "Built mobile-friendly e-commerce apps enabling customers to browse, shop, and pay with ease.",
                "Created admin dashboards for web and mobile platforms to manage products, orders, users, and analytics.",
                "Designed and implemented RESTful APIs for seamless frontend-backend integration.",
                "Built additional dashboards using Laravel (PHP) for backend management and React.js for dynamic frontend interfaces.",
                "Used MySQL and MongoDB to handle structured and unstructured data efficiently.",
                "Focused on responsive design, data validation, role-based access, and real-time data updates."
              ].map((item, index) => (
                <li key={index} style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.5rem"
                }}>
                  <div style={{
                    color: "#3b82f6",
                    marginTop: "0.25rem",
                    flexShrink: 0
                  }}>•</div>
                  <span style={{ color: "#334155" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}