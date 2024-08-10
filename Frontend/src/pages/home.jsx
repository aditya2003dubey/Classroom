import React from 'react'
import './home.css'

function home() {
  return (
    <div>
    <header>
        <nav>
            <div class="logo">
                <h1>Classroom</h1>
            </div>
            <ul className="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#courses">Courses</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="/loginpage">Login</a></li>
            </ul>
        </nav>
    </header>

    <section id="hero">
        <div class="hero-content">
            <h2>Welcome to Our Classroom</h2>
            <p>Where learning never stops!</p>
            <a href="#about" class="btn">Learn More</a>
        </div>
    </section>

    <section id="about">
        <h2>About Us</h2>
        <p>Our classroom is dedicated to providing quality education to students. We focus on interactive and engaging learning experiences.</p>
    </section>

    <section id="courses">
        <h2>Our Courses</h2>
        <div class="course-list">
            <div class="course">
                <h3>Mathematics</h3>
                <p>Explore the world of numbers and equations.</p>
            </div>
            <div class="course">
                <h3>Science</h3>
                <p>Dive into the fascinating world of experiments and discoveries.</p>
            </div>
            <div class="course">
                <h3>History</h3>
                <p>Learn about the events that shaped our world.</p>
            </div>
        </div>
    </section>

    <section id="contact">
        <h2>Contact Us</h2>
        <p>For inquiries, please email us at <a href="mailto:info@classroom.com">info@classroom.com</a>.</p>
    </section>

    <footer>
        <p>&copy; 2024 Classroom. All rights reserved.</p>
    </footer>

    </div>
  )
}

export default home
