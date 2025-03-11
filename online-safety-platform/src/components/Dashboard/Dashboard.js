import React from "react";
import { Link, Route, Routes } from "react-router-dom";
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
      <nav className="navbar">
        <h1>Online Safety Platform</h1>
        <ul>
          <li>
            <Link to="/dashboard/virtual-counseling">Virtual Counseling</Link>
          </li>
          <li>
            <Link to="/dashboard/gamified-learning">Gamified Learning</Link>
          </li>
          <li>
            <Link to="/dashboard/legal-rights">Legal Rights</Link>
          </li>
          <li>
            <Link to="/dashboard/ai-support">AI Support</Link>
          </li>
          <li>
            <Link to="/dashboard/safety-resource">Safety Resource</Link>
          </li>
          <li>
            <Link to="/dashboard/incident-reporting">Incident Reporting</Link>
          </li>
        </ul>
      </nav>
      <main className="main-content">
        <Routes>
          <Route path="virtual-counseling" element={<VirtualCounseling />} />
          <Route path="gamified-learning" element={<GamifiedLearning />} />
          <Route path="legal-rights" element={<LegalRights />} />
          <Route path="ai-support" element={<AIPoweredSupport />} />
          <Route path="safety-resource" element={<SafetyResource />} />
          <Route path="incident-reporting" element={<IncidentReporting />} />
          <Route path="/" element={<h2>Welcome to your Dashboard</h2>} />
        </Routes>
      </main>
      <footer className="footer">
        <p>&copy; 2025 Online Safety Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
