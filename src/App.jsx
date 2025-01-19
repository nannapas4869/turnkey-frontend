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
import AssignEmployee from "./pages/AssignEmployee";
import AssignedEmployee from "./pages/AssignedEmployee";
import Deadline from "./pages/Deadline";
import Summary from "./pages/Summary";
import CategoryDetail from './pages/CategoryDetail';
import EmployeeDetail from "./pages/EmployeeDetail";
import Measurement_2 from "./pages/Measurement_2";
function AppContent() {
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  // Check if the current path is "/login"
  const isLoginRoute = location.pathname === "/login";
  const isLoginPage = location.pathname === "/login";
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
      <div className={`${isLoginPage ? "w-full" : "px-4 w-full"}`}>
        <Routes>
          {/* Unprotected Route for Login */}
          <Route path="/login" element={<Login />} />

          {/* Other (potentially protected) Routes */}
          <Route path="/individual" element={<Individual />} />
          <Route path="/TeamKpi" element={<TeamKPI />} />
          <Route path="/Measurement" element={<Measurement />} />
          <Route path="/AssignKpi" element={<AssignKpi />} />
          <Route path="/selectEmployee" element={<SelectEmployee/>} />
          <Route path="/AssignEmployee" element={<AssignEmployee/>} />
          <Route path="/AssignedEmployee" element={<AssignedEmployee/>} />
          <Route path="/CategoryDetail" element={<CategoryDetail/>} />
          <Route path="/Deadline" element={<Deadline />} />
          <Route path="/EmployeeDetail" element={<EmployeeDetail />} />
          <Route path="/Measurement_2" element={<Measurement_2 />} />
          <Route path="/Summary" element={<Summary />} />
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
