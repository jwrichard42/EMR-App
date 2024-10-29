import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import '../App.css';

const Sidebar = () => {
  const [isInstructorOpen, setIsInstructorOpen] = useState(false);
  const location = useLocation();

  // Automatically expand the instructor section when navigating to "/instructor"
  React.useEffect(() => {
    if (location.pathname.includes("/instructor")) {
      setIsInstructorOpen(true);
    }
  }, [location.pathname]);

  const toggleInstructorSection = () => {
    setIsInstructorOpen(!isInstructorOpen);
  };

  return (
    <div className="sidebar">
      <Link to="/student">Student</Link>
      <Link to="/patient">Patient</Link>
        <button className="instructor-button" onClick={toggleInstructorSection}>
            Instructor
        </button>
        {isInstructorOpen && (
            <div className="instructor-submenu">
            <Link to="/instructor/assign">Assign</Link>
            <Link to="/instructor/grading">Grading</Link>
            </div>
        )}
    </div>
  );
};

export default Sidebar;
