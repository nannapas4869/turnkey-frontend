import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import { AuthProvider, useAuth } from "./context/AuthContext";
import Sidebar, { SidebarItem } from "./components/Sidebar";
import Login from "./pages/Login";
import DashboardLayout from "./pages/DashboardLayout";
import AssignKpi from "./pages/AssignKpi";
import Individual from "./pages/Individual";
import { SquareChartGantt, User, ChartPie, PencilRuler } from "lucide-react";
import TeamKPI from "./pages/TeamKPI";
import Measurement from "./pages/Measurement";
// Component handling layout and routing
function AppContent() {
  const location = useLocation();

  // Get authentication status from AuthContext
  const { isAuthenticated } = useAuth();

  // Determine if the current route is the login page
  const isLoginRoute = location.pathname === "/login";

  return (
    <div className="app-container flex">
      {/* Conditionally render the sidebar only once */}
     
        <Sidebar expanded={true}>
          <SidebarItem 
            icon= {<User size={20} />}
            text = "Individual KPIs Report"
            to="/individual"
          />
          <SidebarItem
            icon={<ChartPie size={20} />}
            text="Team KPIs Report"
            to="/TeamKpi"
          />
           <SidebarItem
            icon={<PencilRuler  size={20} />}
            text="Measurement"
            to="/Measurement"
          />
          <SidebarItem
            icon={<SquareChartGantt size={20} />}
            text="Assign KPI"
            to="/AssignKpi"
          />
           
        </Sidebar>

      {/* Main Content */}
      <div className="flex-1 px-4">
       <Routes>
          {/* Protected Routes */}
          <Route path="/Individual" element={<Individual/>} />
          <Route path="/TeamKPI" element={<TeamKPI/>} />
          <Route path="/Measurement" element={<Measurement/>} />
          <Route
            path="/AssignKpi"
            element={
             <AssignKpi />
            }
          />
  </Routes>
  <Routes>
 {/* Catch-all Route */}
    <Route path="*" element={<Navigate to="/login" />} />
      
  </Routes>
         
      </div>
    </div>
  );
}

// Main App Component
function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
