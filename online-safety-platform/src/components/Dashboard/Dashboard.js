import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import Chatbot from "../Chatbot/Chatbot";
import "./Dashboard.css";

const VirtualCounseling = () => (
  <div>
    <h2>Virtual Counseling & Mental Health Support</h2>
    <p>
      Provides real-time chat or video counseling with certified mental health
      professionals.
    </p>
  </div>
);

const GamifiedLearning = () => (
  <div>
    <h2>Gamified Learning & Awareness Modules</h2>
    <p>
      Interactive games and quizzes to educate users on cyber safety and mental
      well-being.
    </p>
  </div>
);

const LegalRights = () => (
  <div>
    <h2>Legal Rights & Cyber Awareness</h2>
    <p>
      Educational content on cyber laws, online safety regulations, and user
      rights.
    </p>
  </div>
);

const AIPoweredSupport = () => (
  <div>
    <h2>AI-Powered Personalized Support</h2>
    <p>
      Uses AI to analyze user interactions and provide tailored safety and
      mental health tips.
    </p>
  </div>
);

const SafetyResource = () => (
  <div>
    <h2>Safety Resource Hub</h2>
    <p>
      Centralized access to emergency contacts, helplines, and self-help guides.
    </p>
  </div>
);

const IncidentReporting = () => (
  <div>
    <h2>Incident Reporting & Crisis Assistance</h2>
    <p>
      Allows users to report cyber threats, harassment, or distressing
      experiences.
    </p>
  </div>
);

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Navbar */}
      <nav className="dashboard-navbar">
        <div className="navbar-logo">SafetyFirst</div>
        <ul className="navbar-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#counseling">Counseling</a>
          </li>
          <li>
            <a href="#learning">Learning</a>
          </li>
          <li>
            <a href="#legal">Legal Rights</a>
          </li>
          <li>
            <a href="#resources">Resources</a>
          </li>
          <li>
            <a href="#reporting">Reporting</a>
          </li>
        </ul>
        <button className="navbar-button">Logout</button>
      </nav>

      {/* Hero Section */}
      <header className="dashboard-hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
 
          <p>
            Empowering women and children with tools for mental health, online
            safety, and awareness.
          </p>
          <button className="hero-button">Explore Features</button>
        </motion.div>
        <motion.div
          className="hero-illustration"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          {/* Replace the image with an SVG illustration */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 600"
            className="hero-svg"
          >
            <circle cx="400" cy="300" r="200" fill="#0078d7" opacity="0.1" />
            <circle cx="400" cy="300" r="150" fill="#0078d7" opacity="0.2" />
            <circle cx="400" cy="300" r="100" fill="#0078d7" opacity="0.3" />
            <circle cx="400" cy="300" r="50" fill="#0078d7" opacity="0.4" />
          </svg>
        </motion.div>
      </header>

      {/* Features Section */}
      <section className="dashboard-features">
        <h2>Our Features</h2>
        <div className="features-grid">
          <motion.div
            className="feature-card"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Counseling"
            />
            <h3>Virtual Counseling</h3>
            <p>Connect with experts to discuss mental health and well-being.</p>
          </motion.div>
          <motion.div
            className="feature-card"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1048/1048953.png"
              alt="Learning"
            />
            <h3>Gamified Learning</h3>
            <p>
              Interactive games to educate about online safety and awareness.
            </p>
          </motion.div>
          <motion.div
            className="feature-card"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
              alt="Legal Rights"
            />
            <h3>Legal Rights</h3>
            <p>Learn about your rights and how to protect yourself legally.</p>
          </motion.div>
          <motion.div
            className="feature-card"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2910/2910768.png"
              alt="Reporting"
            />
            <h3>Incident Reporting</h3>
            <p>Report incidents securely and get the help you need.</p>
          </motion.div>
        </div>
      </section>

      {/* Emergency Support Section */}
      <section className="emergency-support">
        <h2>Emergency Support</h2>
        <div className="support-grid">
          <a
            href="https://www.suicidepreventionlifeline.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="support-card"
          >
            <h3>Suicide Prevention</h3>
            <p>Get immediate help for yourself or someone in crisis.</p>
          </a>
          <a
            href="https://www.who.int/mental_health/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="support-card"
          >
            <h3>Mental Health Counselors</h3>
            <p>Connect with professionals for mental health support.</p>
          </a>
          <a
            href="https://cybercrime.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="support-card"
          >
            <h3>Cyber Crime Helpline</h3>
            <p>Report online crimes and seek assistance.</p>
          </a>
          <a
            href="https://www.police.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="support-card"
          >
            <h3>Police Helpline</h3>
            <p>Contact your local police for emergencies.</p>
          </a>
        </div>
      </section>

      <div className="dashboard-content">
        <Routes>
          <Route path="virtual-counseling" element={<VirtualCounseling />} />
          <Route path="gamified-learning" element={<GamifiedLearning />} />
          <Route path="legal-rights" element={<LegalRights />} />
          <Route path="ai-support" element={<AIPoweredSupport />} />
          <Route path="safety-resource" element={<SafetyResource />} />
          <Route path="incident-reporting" element={<IncidentReporting />} />
        </Routes>
      </div>
      <footer className="footer">
        <p>&copy; 2025 Online Safety Platform. All rights reserved.</p>
      </footer>
      <Chatbot />
    </div>
  );
};

export default Dashboard;
