

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Register from './components/Register';
import Expenses from './components/Expenses';
import UserHomePage from './components/UserHomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Expenses />} />
        <Route path="/user-home" element={<UserHomePage />} />
      </Routes>
    </Router>
  );
}

export default App;

