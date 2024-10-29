// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import StudentHome from "./components/StudentHome";
import PatientHome from "./components/PatientHome";
import InstructorHome from "./components/InstructorHome";
import InstructorGrading from "./components/InstructorGrading";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <Router>
      <Header /> 
      <div className="app">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<StudentHome />} />
            <Route path="/student" element={<StudentHome />} />
            <Route path="/patient" element={<PatientHome />} />
            <Route path="/instructor/assign" element={<InstructorHome />} />
            <Route path="/instructor/grading" element={<InstructorGrading />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

