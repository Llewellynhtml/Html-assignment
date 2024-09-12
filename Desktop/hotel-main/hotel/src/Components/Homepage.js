import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import logo from "../One&Only 1.png";
import { FaPhone, FaEnvelope, FaLanguage } from "react-icons/fa";
import "./nav.css";
import BookingSection from "./BookingSection";
import Mothercity from "./mothercity";



function HomePage() {
  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="nav-left">
          <FaLanguage className="nav-icon" title="English" />
          <FaPhone className="nav-icon" title="Call Us" />
          <FaEnvelope className="nav-icon" title="Email Us" />
          <button className="newsletter-btn">Newsletter</button>
          <button className="newsletter-btn">Resort</button>
        </div>

        <div className="nav-center">
          <img src={logo} alt="Hotel Logo" className="logo" />
        </div>

        <div className="nav-right">
          <button className="book-now">Book Now</button>
        </div>
      </nav>

      <hr className="divider" />

      <div className="secondary-nav">
        <Link to="/experience" className="secondary-link">
          Experience
        </Link>
        <Link to="/offers" className="secondary-link">
          Offers
        </Link>
        <Link to="/accommodation" className="secondary-link">
          Accommodation
        </Link>
        <Link to="/dining" className="secondary-link">
          Dining
        </Link>
        <Link to="/events" className="secondary-link">
          Events
        </Link>
        <Link to="/about" className="secondary-link">
          About
        </Link>
      </div>

      <div className="hero-image">
        <div className="hero-text">
          <h1>One&Only Cape Town, Luxury Waterfront Resort</h1>
          <p>Cape Town's most spectacular waterfront resort</p>
        </div>
      </div>
      <BookingSection/>
      <Mothercity/>
      
    </div>
  );
}

export default HomePage;
