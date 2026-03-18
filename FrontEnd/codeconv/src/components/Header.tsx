import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => (
  <header>
    <div className="logo">
      Code<span>Shift</span>
    </div>
    <nav>
      <Link to="/about" className="nav-link">
        About
      </Link>
      <Link to="https://oussamah-kabalan.netlify.app/" target="_blank" className="nav-link">Contact</Link>
    </nav>
  </header>
);
