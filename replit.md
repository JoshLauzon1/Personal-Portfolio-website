# Josh Lauzon's Portfolio Website

## Overview
This is a personal portfolio website for Josh Lauzon, a Computer Engineering student at Michigan State University. The website showcases his experience, education, projects, and contact information using HTML, CSS, and JavaScript.

## Project Structure
- **index.html** - Main portfolio page with complete layout
- **website.html** - Alternative version of the portfolio page  
- **style.css** - Main stylesheet for the website
- **mediaqueries.css** - Responsive design styles for different screen sizes
- **script.js** - JavaScript for interactive features (hamburger menu, scroll effects, contact form)
- **server.py** - Python HTTP server to serve the static files
- **assets/** - Directory containing images and resume files

## Technology Stack
- **Frontend**: Pure HTML5, CSS3, JavaScript (no frameworks)
- **Server**: Python 3.11 with built-in HTTP server module
- **Deployment**: Configured for Replit autoscale deployment

## Development Setup
The project is configured to run in the Replit environment:
- Server runs on port 5000 with host binding to 0.0.0.0
- Cache control headers prevent caching issues during development
- Workflow named "Portfolio Server" automatically starts the Python server

## Features
- Responsive design that works on desktop and mobile devices
- Interactive hamburger menu for mobile navigation
- Smooth scrolling between sections
- Progress bars for skills section
- Contact form (frontend only - form submission shows alert)
- Scroll-to-top button
- Social media links (LinkedIn, GitHub)
- Resume download functionality

## Recent Changes (September 14, 2025)
- Set up Python HTTP server for serving static files
- Configured Replit workflow to run on port 5000
- Fixed HTML syntax issues (missing quotes, broken links)
- Configured deployment settings for production
- Added cache control headers to prevent browser caching issues

## Architecture Notes
- This is a purely static website with client-side JavaScript only
- No backend API or database required
- Server.py simply serves static files - no server-side processing
- Designed to be easily deployable to any static hosting platform

## Contact Information
- Email: lauzonj1@msu.edu
- LinkedIn: https://linkedin.com/in/josh-lauzon-869884232/
- GitHub: https://github.com/JoshLauzon1