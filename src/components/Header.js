import React, { useState } from "react";
import profilePic from '../assets/images/profilePic.jpg';
import logo from '../assets/images/logo.png'
import '../App.css'; 

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <div className="logo"><img 
          src={logo}
          alt="logo" 
          className="logo" 
        /></div>
      <div className="title">OSCE App</div>
      <div className="profile" onClick={toggleDropdown}>
        <img 
          src={profilePic}
          alt="Profile" 
          className="profile-pic" 
        />
        {isDropdownOpen && (
          <div className="dropdown">
            <a href="#profile">Profile</a>
            <a href="#settings">Settings</a>
            <a href="#logout">Logout</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
