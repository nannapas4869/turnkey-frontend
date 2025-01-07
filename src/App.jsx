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
import AssignKpi from "./pages/AssignKpi";
import Individual from "./pages/Individual";
import { SquareChartGantt, User, ChartPie, PencilRuler } from "lucide-react";
import TeamKPI from "./pages/TeamKPI";
import Measurement from "./pages/Measurement";
import SelectEmployee from "./pages/SelectEmployee";
function AppContent() {
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  // Check if the current path is "/login"
  const isLoginRoute = location.pathname === "/login";

  return (
    <div className="app-container flex">

      {/* Only render Sidebar if NOT on the login page */}
      {!isLoginRoute && (
        <Sidebar expanded={true}>
          <SidebarItem
            icon={<User size={20} />}
            text="Individual KPIs Report"
            to="/individual"
          />
          <SidebarItem
            icon={<ChartPie size={20} />}
            text="Team KPIs Report"
            to="/TeamKpi"
          />
          <SidebarItem
            icon={<PencilRuler size={20} />}
            text="Measurement"
            to="/Measurement"
          />
          <SidebarItem
            icon={<SquareChartGantt size={20} />}
            text="Assign KPI"
            to="/AssignKpi"
          />
        </Sidebar>
      )}

      {/* Main Content Area */}
      <div className="flex-1 px-4">
        <Routes>
          {/* Unprotected Route for Login */}
          <Route path="/login" element={<Login />} />

          {/* Other (potentially protected) Routes */}
          <Route path="/individual" element={<Individual />} />
          <Route path="/TeamKpi" element={<TeamKPI />} />
          <Route path="/Measurement" element={<Measurement />} />
          <Route path="/AssignKpi" element={<AssignKpi />} />
          <Route path="/selectEmployee" element={<SelectEmployee/>} />
          {/* Catch-all: redirect unknown routes to /login */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </div>
  );
}

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
