import React from 'react'
//drop-shadow(0 0 2em #646cffaa);
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Vbackground from './Vbackground.jsx'
import HomePage from './pages/HomePage.jsx'
import ExperiencePage from './pages/ExperiencePage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import NotesPage from './pages/NotesPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
const App = () => {
  return (
    
    <Router>
      <Routes>
      <Route path="/" element={<Vbackground><HomePage /></Vbackground>} />
      <Route path="/experience" element={<Vbackground><ExperiencePage /></Vbackground>} />
      <Route path="/projects" element={<Vbackground><ProjectsPage /></Vbackground>} />
      <Route path="/notes" element={<Vbackground><NotesPage /></Vbackground>} />
      <Route path="/contact" element={<Vbackground><ContactPage /></Vbackground>} />

      </Routes>
    </Router>
    

  )
}

export default App