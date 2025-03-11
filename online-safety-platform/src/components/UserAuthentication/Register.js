import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import Login from "./Login";
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Store additional user information in Firestore
      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
        phoneNumber,
        age,
        emergencyContact,
      });

      alert("Registration successful");
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="register-container">
      {showLogin ? (
        <Login />
      ) : (
        <>
          <h2 className="register-title">Register</h2>
          <form onSubmit={handleRegister} className="register-form">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="register-input"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="register-input"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="register-input"
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="register-input"
            />
            <input
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="register-input"
            />
            <input
              type="text"
              placeholder="Emergency Contact Number"
              value={emergencyContact}
              onChange={(e) => setEmergencyContact(e.target.value)}
              className="register-input"
            />
            <button type="submit" className="register-button">
              Register
            </button>
          </form>
          <p className="switch-form">
            Already have an account?{" "}
            <button
              onClick={() => setShowLogin(true)}
              className="switch-button"
            >
              Login
            </button>
          </p>
        </>
      )}
    </div>
  );
};

export default Register;
