import React from "react";
import Headroom from "react-headroom";
import "./Header.css";

import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  achievementSection
} from "../../portfolio";

function Header() {
  
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  

  return (
    <Headroom>
      <header className="dark-menu header">
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className="navicon navicon-dark"></span>
        </label>
        <ul className="dark-menu menu">
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          )}
          
          <li>
            <a href="#education">Education</a>
          </li>
          {viewOpenSource && (
            <li>
              <a href="#opensource">Open Source</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">Blogs</a>
            </li>
          )}
          
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          
          <li>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
