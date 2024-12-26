import { useState } from 'react'
import { LayoutDashboard, SquareChartGantt, ChartPie, ClipboardPlus, Settings, Circle, Globe } from 'lucide-react';
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar, { SidebarItem } from './components/Sidebar';
import Login from './pages/Login';
function App() {
  const [expanded, setExpanded] = useState(true);
  const [language, setLanguage] = useState('EN');
  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setLanguage(newLang);
  };
  return (
    <>
       <div className="flex">
        <Sidebar expanded={expanded} setExpaned={setExpanded}>
          <SidebarItem icon={<SquareChartGantt size={20} />} text="Management" to="/Management"
          submenu = {[
              { text: "Department", to: "/Department", icon: <Circle size={10} /> },
              { text: "Category", to: "/Category", icon: <Circle size={10} /> },
              { text: "Sub-Caegory", to: "/SubCategory", icon: <Circle size={10} /> },
          ]} />
          <SidebarItem
            icon={<ChartPie size={20} />}
            text="KPI Management"
            to="/KPIManagement"
            submenu={[
              { text: "Track KPIs", to: "/Track", icon: <Circle size={10} /> },
            ]}
          />
          <SidebarItem icon={<ClipboardPlus size={20} />} text="Report" to="/Report" />
          <SidebarItem icon={<Settings size={20} />} text="Settings" to="/Settings" />
          <SidebarItem icon={<Globe size={20} />} text="Language" to="#" 
          submenu={[
            {
              text: (
                <div onClick={(e) => e.stopPropagation()} style={{ pointerEvents: 'auto' }}>
                <select value={language} onChange={handleLanguageChange} style={{ pointerEvents: 'auto' }}>
                  <option value="EN">English</option>
                  <option value="TH">Thai</option>
                </select>
              </div>
              ),
            },
          ]} />
        </Sidebar>
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Login />} />
            
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
