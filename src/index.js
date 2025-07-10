import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import HomePage from './Components/Home/HomePage';
import AboutPage from './Components/About/AboutPage';
import ExperiencePage from './Components/Experience/ExperiencePage';
import ContactPage from './Components/Contact/ContactPage';
import ProjectPage from './Components/Projects/ProjectPage';
import ResumePage from './Components/Resume/ResumePage';
import SkillsPage from './Components/Skills/SkillsPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
    <HomePage />
    <AboutPage />
    <ContactPage />
    <ExperiencePage/>
    <ProjectPage />
    <ResumePage/>
    <SkillsPage/>
    </div>
  </React.StrictMode>
);