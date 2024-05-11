import React from "react";
//drop-shadow(0 0 2em #646cffaa);
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import ExperiencePage from "./pages/ExperiencePage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import NotesPage from "./pages/NotesPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import Navbar from "./components/Navbar.jsx";
const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        
        position: "relative",
      }}
    >
      

      <div style={{ flex: 1, zIndex: 1 }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/experiences" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/notes" element={<NotesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
