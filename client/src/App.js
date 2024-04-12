import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from './Components/Theme/ThemeProvider';
import { ThemeSwitch } from './Components/Theme/ThemeSwitch';
import './App.css';
import BusinessCard from './Components/BusinessCard';
import Projects from './Components/Projects';
import DiscordWidget from "./Components/DiscordBot";
import Resume from "./Components/Resume";
import ContactPage from "./Components/Contact";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ThemeSwitch />
        <Routes>
          <Route path="/" element={<BusinessCard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/discbot" element={<DiscordWidget />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;