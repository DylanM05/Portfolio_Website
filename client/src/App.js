import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from './Components/Theme/ThemeProvider';
import { ThemeSwitch } from './Components/Theme/ThemeSwitch';
import './App.css';
import BusinessCard from './Components/BusinessCard';
import Projects from './Components/Projects';
import Resume from "./Components/Resume";
import ContactPage from "./Components/Contact";
import Loading from "./Components/Loading";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ThemeSwitch />
        <Routes>
          <Route path="/" element={<BusinessCard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/loading" element={<Loading />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;