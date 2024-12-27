// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import DashboardLayout from './pages/DashboardLayout';
import AssignKpi from './pages/AssignKpi';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
     
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />

          {/* Protected (Dashboard) Routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<AssignKpi />} />
          </Route>

          {/* Fallback Route (if someone goes to root, for example) */}
          <Route path="*" element={<Login />} />
        </Routes>
    </AuthProvider>
  );
}

export default App;
