// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Add your styles here

function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Welcome to Personal Expense Tracker</h1>
      <p>Manage your expenses efficiently</p>
      <div className="button-container">
        <Link to="/login" className="button">Login</Link>
        <Link to="/register" className="button">Register</Link>
      </div>
    </div>
  );
}

export default LandingPage;
