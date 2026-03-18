import React from "react";
// import {Link} from "react-router-dom"
import "./About.css";
import { Link } from "react-router-dom";

export const About: React.FC = () => {
  return (
    <div className="about">
        <header>
    <div className="logo">
      Code<span>Shift</span>
    </div>
    <nav>
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="https://oussamah-kabalan.netlify.app/" target="_blank" className="nav-link">Contact</Link>
    </nav>
  </header>
      <div className="about-container">
        <div className="about-hero">
          <h1>About <span>CodeShift</span></h1>
          <p>A developer tool that converts code between programming languages using AI — instantly.</p>
        </div>

        <div className="about-section">
          <h2>What it does</h2>
          <p>
            CodeShift takes any code snippet you paste, and converts it to a target
            programming language of your choice. Whether you're migrating a codebase,
            learning a new language, or just curious how something looks in Python vs Go —
            CodeShift does it in seconds.
          </p>
        </div>

        <div className="about-section">
          <h2>How it works</h2>
          <div className="flow">
            <div className="flow-step">
              <span className="step-num">01</span>
              <span className="step-text">You paste your code and pick source and target languages</span>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <span className="step-num">02</span>
              <span className="step-text">Your request goes to a Node.js backend via REST API</span>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <span className="step-num">03</span>
              <span className="step-text">The backend sends a prompt to Cohere's LLM</span>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <span className="step-num">04</span>
              <span className="step-text">The converted code is returned and displayed</span>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Tech stack</h2>
          <div className="stack">
            <div className="stack-item">
              <span className="stack-label">Frontend</span>
              <span className="stack-value">React + TypeScript</span>
            </div>
            <div className="stack-item">
              <span className="stack-label">Backend</span>
              <span className="stack-value">Node.js + Express</span>
            </div>
            <div className="stack-item">
              <span className="stack-label">AI</span>
              <span className="stack-value">Cohere API — command-r-plus</span>
            </div>
            <div className="stack-item">
              <span className="stack-label">Architecture</span>
              <span className="stack-value">Route → Controller → Service</span>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Why I built it</h2>
          <p>
            CodeShift is a personal project built as part of my journey toward
            becoming an AI-augmented software engineer. It was designed to practice
            integrating LLM APIs into a real full-stack application — covering
            prompt engineering, backend architecture, and frontend state management.
          </p>
        </div>

      </div>
    </div>
  );
};