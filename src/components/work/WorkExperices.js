import React from "react";

export default function WorkExperices() {
  return (
    <div className="container-xxl py-6" id="work-experience" style={{ background: "#f4f6fb", minHeight: "100vh" }}>
      <div className="container">
        <h2 className="fw-bold mb-5" style={{ color: "#4f8cff" }}>Work Experience</h2>
        {/* Target Store Online Shop */}
        <div className="bg-white rounded shadow p-4 mb-4" style={{ borderRadius: "18px" }}>
          <div className="d-flex align-items-center mb-2">
            <h4 className="mb-0 fw-bold" style={{ color: "#222" }}>Target Store Online Shop</h4>
            <span className="badge bg-primary ms-3" style={{ background: "#4f8cff" }}>Web Developer</span>
            <span className="ms-auto text-muted" style={{ fontSize: 15 }}>2025 - PRESENT</span>
          </div>
          <ul className="mb-2">
            <li>Developed full-stack e-commerce web app with PayPal, KHQR, and Phillip Bank API integration.</li>
            <li>Built responsive admin dashboards to manage products, orders, and users.</li>
            <li>Created mobile-friendly interfaces to enhance customer shopping experience.</li>
            <li>Designed RESTful APIs for smooth frontend-backend interaction.</li>
            <li>Used React (frontend) and Node.js/Express (backend); integrated MongoDB for scalability.</li>
            <li>Optimized site performance and ensured cross-browser/device compatibility.</li>
          </ul>
        </div>
        {/* Golobal Security Solutions of Cambodia */}
        <div className="bg-white rounded shadow p-4 mb-4" style={{ borderRadius: "18px" }}>
          <div className="d-flex align-items-center mb-2">
            <h4 className="mb-0 fw-bold" style={{ color: "#222" }}>Golobal Security Solutions of Cambodia</h4>
            <span className="badge bg-primary ms-3" style={{ background: "#4f8cff" }}>Security Guard</span>
            <span className="ms-auto text-muted" style={{ fontSize: 15 }}>2022 - 2024</span>
          </div>
          <ul className="mb-2">
            <li>Monitored building entrances and exits to prevent unauthorized access.</li>
            <li>Performed routine patrols of premises to deter criminal activity.</li>
            <li>Responded to alarms, emergencies, and reported incidents.</li>
            <li>Logged daily activity reports, incident reports, and maintenance issues.</li>
          </ul>
        </div>
        {/* Personal/School Project */}
        <div className="bg-white rounded shadow p-4 mb-4" style={{ borderRadius: "18px" }}>
          <div className="d-flex align-items-center mb-2">
            <h4 className="mb-0 fw-bold" style={{ color: "#222" }}>Personal/School Project</h4>
            <span className="badge bg-secondary ms-3" style={{ background: "#6c757d" }}>E-commerce Website & App Development</span>
          </div>
          <ul className="mb-2">
            <li>Developed full-stack e-commerce websites with secure checkout functionality using PayPal and KHQR QR payment systems.</li>
            <li>Built mobile-friendly e-commerce apps enabling customers to browse, shop, and pay with ease.</li>
            <li>Created admin dashboards for web and mobile platforms to manage products, orders, users, and analytics.</li>
            <li>Designed and implemented RESTful APIs for seamless frontend-backend integration.</li>
            <li>Built additional dashboards using Laravel (PHP) for backend management and React.js for dynamic frontend interfaces.</li>
            <li>Used MySQL and MongoDB to handle structured and unstructured data efficiently.</li>
            <li>Focused on responsive design, data validation, role-based access, and real-time data updates.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
