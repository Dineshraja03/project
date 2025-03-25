import React from "react";
import "./Auth.css";

const ProfileManagement = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Manage Your Profile</h1>
        <p>Update your personal information</p>
        <form>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Update your full name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Update your email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Update your password" />
          </div>
          <button type="submit" className="auth-button">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default ProfileManagement;