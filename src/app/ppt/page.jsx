'use client';

import React from 'react';

// Helper component for modern, stylized SVG icons.
const Icons = {
  Rocket: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6.2 20.8L3 17.6l4.2-4.2 2.8 2.8L5.8 21H3v-2.8zM17.6 3L20.8 6.2l-4.2 4.2-2.8-2.8L18.2 3h2.8v2.8zM8.4 15.6L3 21m18-18l-5.4 5.4M7 17l-4-4" />
    </svg>
  ),
  Target: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  Zap: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  Users: ({ className }) => (
     <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  Check: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
   Cross: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  Brain: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0112 4.5v0A2.5 2.5 0 019.5 7h0A2.5 2.5 0 017 4.5v0A2.5 2.5 0 019.5 2zM14.5 2A2.5 2.5 0 0117 4.5v0A2.5 2.5 0 0114.5 7h0A2.5 2.5 0 0112 4.5v0A2.5 2.5 0 0114.5 2zM4.5 7A2.5 2.5 0 017 9.5v0A2.5 2.5 0 014.5 12h0A2.5 2.5 0 012 9.5v0A2.5 2.5 0 014.5 7zM19.5 7A2.5 2.5 0 0122 9.5v0A2.5 2.5 0 0119.5 12h0A2.5 2.5 0 0117 9.5v0A2.5 2.5 0 0119.5 7zM9.5 12A2.5 2.5 0 0112 14.5v0A2.5 2.5 0 019.5 17h0A2.5 2.5 0 017 14.5v0A2.5 2.5 0 019.5 12zM14.5 12A2.5 2.5 0 0117 14.5v0A2.5 2.5 0 0114.5 17h0A2.5 2.5 0 0112 14.5v0A2.5 2.5 0 0114.5 12zM4.5 17A2.5 2.5 0 017 19.5v0A2.5 2.5 0 014.5 22h0A2.5 2.5 0 012 19.5v0A2.5 2.5 0 014.5 17zM19.5 17A2.5 2.5 0 0122 19.5v0A2.5 2.5 0 0119.5 22h0A2.5 2.5 0 0117 19.5v0A2.5 2.5 0 0119.5 17z"/>
    </svg>
  ),
  ShieldCheck: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>
    </svg>
  ),
};


export default function App() {
  const totalPages = 11;

  return (
    <div className="presentation-container">
      {/* Global styles, fonts, and theme variables */}
      <style jsx="true" global="true">{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap');

        :root {
          --bg-main: #FFFFFF; /* White */
          --text-main: #000000; /* Black */
          --primary-accent: #FF7A00; /* Orange Accent */
          --secondary-accent: #A259FF; /* Purple Accent */
          --text-light: #FFFFFF; /* White text for buttons */
          --danger: #EF4444;
          --border-color: #E5E7EB;
          --gradient-bg: linear-gradient(135deg, #FF7A00 0%, #A259FF 100%);
          --card-bg-1: linear-gradient(135deg, #FFF7ED 0%, #FED7AA 100%);
          --card-bg-2: linear-gradient(135deg, #F3E8FF 0%, #DDD6FE 100%);
          --card-bg-3: linear-gradient(135deg, #ECFDF5 0%, #BBF7D0 100%);
        }

        body {
          font-family: 'Inter', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: var(--text-main);
        }

        .presentation-container {
            background-color: var(--bg-main);
            color: var(--text-main);
            overflow: hidden;
        }
        .page-scroller {
            height: 100vh;
            overflow-y: scroll;
            scroll-snap-type: y mandatory;
        }
        .page {
            width: 100vw;
            height: 100vh;
            padding: 8vh 8vw 12vh 8vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
            scroll-snap-align: start;
            position: relative;
        }
        
        .page-title, .page-title-small {
            color: var(--text-main);
            font-weight: 800;
        }

        .page-title {
          font-size: clamp(3rem, 6vw, 5rem);
          line-height: 1.1;
          text-align: center;
          letter-spacing: -0.03em;
          margin-bottom: 2rem;
        }
        .page-title-small {
            font-size: clamp(2.25rem, 4vw, 3.5rem);
            line-height: 1.2;
            text-align: center;
            letter-spacing: -0.02em;
            margin-bottom: 1.5rem;
        }

        .page-subtitle {
          font-size: clamp(1.1rem, 1.5vw, 1.25rem);
          font-weight: 400;
          line-height: 1.6;
          text-align: justify;
          color: var(--text-main);
          opacity: 0.7;
          max-width: 60ch;
          margin-bottom: 3rem;
        }
        
        .metric-large {
            font-size: clamp(3.5rem, 8vw, 6rem);
            font-weight: 800;
            line-height: 1;
            margin-bottom: 0.5rem;
            white-space: nowrap;
        }
        
        .text-primary-accent { color: var(--primary-accent); }
        .text-secondary-accent { color: var(--secondary-accent); }
        .card { 
            background-color: var(--bg-main);
            border: 1px solid var(--border-color);
            padding: 2rem;
            border-radius: 1rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            transition: transform 0.2s ease-in-out;
            text-align: justify;
        }
        .card:hover {
            transform: translateY(-2px);
        }
        .card-colored-1 {
            background: var(--card-bg-1);
            border: 2px solid #FB923C;
        }
        .card-colored-2 {
            background: var(--card-bg-2);
            border: 2px solid #A855F7;
        }
        .card-colored-3 {
            background: var(--card-bg-3);
            border: 2px solid #10B981;
        }
        
        .page-counter {
            position: absolute;
            bottom: 4vh;
            right: 8vw;
            font-size: 0.875rem;
            color: var(--text-main);
            opacity: 0.5;
            font-weight: 500;
        }

        .footer {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(135deg, rgba(255, 122, 0, 0.05) 0%, rgba(162, 89, 255, 0.05) 100%);
            padding: 2vh 8vw;
            border-top: 1px solid var(--border-color);
        }

        .footer-title {
            font-size: 0.875rem;
            font-weight: 600;
            color: var(--text-main);
            opacity: 0.7;
            text-align: center;
            margin-bottom: 1.5vh;
        }

        .client-logos {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 3vw;
            flex-wrap: wrap;
        }

        .client-logo {
            width: 120px;
            height: 60px;
            object-fit: contain;
            transition: all 0.3s ease;
            opacity: 0.9;
            margin: 0 12px;
        }
        
        .client-logo:hover {
            transform: scale(1.1);
            opacity: 1;
        }

        .cta-button {
            background: var(--gradient-bg);
            color: var(--text-light);
            font-weight: 700;
            padding: 1rem 2.5rem;
            border-radius: 9999px;
            font-size: 1.25rem;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(255, 122, 0, 0.3);
            margin-top: 2rem;
        }
        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(255, 122, 0, 0.4);
        }

        .tagline {
            font-size: clamp(1.5rem, 2.5vw, 2rem);
            font-weight: 600;
            color: var(--primary-accent);
            margin-bottom: 3rem;
            font-style: italic;
            text-align: center;
        }

        .text-center {
            text-align: center;
        }
        
        .text-left {
            text-align: left;
        }
        
        .text-justify {
            text-align: justify;
        }
        
        .text-main {
            color: var(--text-main);
        }
        
        .opacity-70 {
            opacity: 0.7;
        }
        
        .opacity-80 {
            opacity: 0.8;
        }
        
        .opacity-60 {
            opacity: 0.6;
        }
        
        .mt-1 { margin-top: 0.25rem; }
        .mt-2 { margin-top: 0.5rem; }
        .mt-3 { margin-top: 0.75rem; }
        .mt-4 { margin-top: 1rem; }
        .mt-6 { margin-top: 1.5rem; }
        .mt-8 { margin-top: 2rem; }
        .mt-12 { margin-top: 3rem; }
        
        .mb-2 { margin-bottom: 0.5rem; }
        .mb-3 { margin-bottom: 0.75rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-8 { margin-bottom: 2rem; }
        .mb-16 { margin-bottom: 4rem; }
        .mb-20 { margin-bottom: 5rem; }
        
        .gap-4 { gap: 1rem; }
        .gap-6 { gap: 1.5rem; }
        .gap-8 { gap: 2rem; }
        .gap-10 { gap: 2.5rem; }
        .gap-12 { gap: 3rem; }
        
        .p-8 { padding: 2rem; }
        .p-10 { padding: 2.5rem; }
        .p-12 { padding: 3rem; }
        
        .space-y-4 > * + * { margin-top: 1rem; }
        .space-y-6 > * + * { margin-top: 1.5rem; }
        .space-y-8 > * + * { margin-top: 2rem; }
        
        .flex { display: flex; }
        .flex-col { flex-direction: column; }
        .items-center { align-items: center; }
        .items-start { align-items: flex-start; }
        .justify-center { justify-content: center; }
        .justify-between { justify-content: space-between; }
        
        .grid { display: grid; }
        .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .md\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        
        .w-full { width: 100%; }
        .max-w-2xl { max-width: 42rem; }
        .max-w-3xl { max-width: 48rem; }
        .max-w-4xl { max-width: 56rem; }
        .max-w-5xl { max-width: 64rem; }
        .max-w-6xl { max-width: 72rem; }
        
        .mx-auto { margin-left: auto; margin-right: auto; }
        
        .relative { position: relative; }
        .absolute { position: absolute; }
        
        .z-10 { z-index: 10; }
        
        .text-5xl { font-size: 3rem; }
        .text-6xl { font-size: 3.75rem; }
        .text-8xl { font-size: 6rem; }
        
        .font-extrabold { font-weight: 800; }
        .font-bold { font-weight: 700; }
        .font-semibold { font-weight: 600; }
        
        .text-lg { font-size: 1.125rem; }
        .text-xl { font-size: 1.25rem; }
        .text-2xl { font-size: 1.5rem; }
        .text-3xl { font-size: 1.875rem; }
        
        .text-sm { font-size: 0.875rem; }
        
        .leading-snug { line-height: 1.375; }
        
        .rounded-lg { border-radius: 0.5rem; }
        
        .bg-gradient-to-r { background-image: linear-gradient(to right, var(--tw-gradient-stops)); }
        .from-blue-500 { --tw-gradient-from: #3b82f6; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(59, 130, 246, 0)); }
        .to-blue-600 { --tw-gradient-to: #2563eb; }
        .from-green-500 { --tw-gradient-from: #10b981; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(16, 185, 129, 0)); }
        .to-green-600 { --tw-gradient-to: #059669; }
        .from-purple-500 { --tw-gradient-from: #8b5cf6; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(139, 92, 246, 0)); }
        .to-purple-600 { --tw-gradient-to: #7c3aed; }
        
        .text-white { color: #ffffff; }
        
        .flex-wrap { flex-wrap: wrap; }
        
        .flex-shrink-0 { flex-shrink: 0; }
        
        .pt-1 { padding-top: 0.25rem; }
        
        .border-2 { border-width: 2px; }
        .border-primary-accent { border-color: var(--primary-accent); }
        
        .text-danger { color: var(--danger); }
        .text-orange-600 { color: #ea580c; }
        .text-orange-700 { color: #c2410c; }
        .text-orange-800 { color: #9a3412; }
        .text-purple-600 { color: #9333ea; }
        .text-purple-700 { color: #7c3aed; }
        .text-purple-800 { color: #6b21a8; }
        .text-green-600 { color: #16a34a; }
        .text-green-700 { color: #15803d; }
        .text-green-800 { color: #166534; }
        
        @media (min-width: 768px) {
          .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .md\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          .md\\:gap-10 { gap: 2.5rem; }
          .md\\:text-3xl { font-size: 1.875rem; }
          .md\\:text-6xl { font-size: 3.75rem; }
        }
      `}</style>

    <div className="page-scroller">
      {/* Page 1: Thinkify Labs Intro with Clients */}
      <div className="page">
        <div className="text-center mx-auto max-w-4xl">
          <h1 className="page-title">
            <span className="text-primary-accent">Thinkify Labs</span><br />
            Building Tomorrow's Tech Teams
          </h1>
          <p className="tagline">
            "Where Elite Talent Meets Visionary Companies"
          </p>
          <p className="page-subtitle text-justify">
            Connecting world-class engineering talent with ambitious companies through strategic contingent staffing solutions. Your success is our mission.
          </p>
        </div>
        <div className="page-counter">1 / {totalPages}</div>
        <div className="footer">
          <div className="footer-title">Trusted by Industry Leaders</div>
          <div className="client-logos">
            <img src="/companies/Flipkart_Symbol_0.svg" alt="Flipkart" className="client-logo" />
            <img src="/companies/swiggy.svg" alt="Swiggy" className="client-logo" />
            <img src="/companies/ThoughtSpot_idEiE5Z1Gr_0.svg" alt="ThoughtSpot" className="client-logo" />
            <img src="/companies/Whatfix_idc18D79RQ_0.svg" alt="Whatfix" className="client-logo" />
            <img src="/companies/meesho.png" alt="Meesho" className="client-logo" />
          </div>
        </div>
      </div>

      {/* Page 2: Start Building - Enhanced with Contingent Hiring */}
      <div className="page">
        <div className="text-center mx-auto max-w-4xl flex flex-col items-center">
          <h1 className="page-title mb-8">
            Start <span className="text-primary-accent">Building</span>.<br />
            Start <span className="text-secondary-accent">Winning</span>.
          </h1>
          <p className="page-subtitle text-left mb-12 max-w-3xl">
            Unlock your potential with strategic contingent hiring. Thinkify delivers the world's most elite engineering teams on-demand, empowering you to build and innovate faster than ever before.
          </p>
          <div className="grid md:grid-cols-3 gap-24 mt-12 mb-16 w-full max-w-6xl">
            <div className="text-center flex flex-col items-center">
              <div className="text-5xl md:text-6xl font-extrabold text-primary-accent mb-6">72hrs</div>
              <div className="text-xl font-bold text-main">Rapid Deployment</div>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="text-5xl md:text-6xl font-extrabold text-secondary-accent mb-6">Top 1%</div>
              <div className="text-xl font-bold text-main">Elite Talent</div>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="text-5xl md:text-6xl font-extrabold text-primary-accent mb-6">Zero</div>
              <div className="text-xl font-bold text-main">Risk Hiring</div>
            </div>
          </div>
          <button className="cta-button mt-8">
            Unlock Your A-Team
          </button>
        </div>
        <div className="page-counter">2 / {totalPages}</div>
        <div className="footer">
          <div className="footer-title">Trusted by Industry Leaders</div>
          <div className="client-logos">
            <img src="/companies/Flipkart_Symbol_0.svg" alt="Flipkart" className="client-logo" />
            <img src="/companies/swiggy.svg" alt="Swiggy" className="client-logo" />
            <img src="/companies/ThoughtSpot_idEiE5Z1Gr_0.svg" alt="ThoughtSpot" className="client-logo" />
            <img src="/companies/Whatfix_idc18D79RQ_0.svg" alt="Whatfix" className="client-logo" />
            <img src="/companies/meesho.png" alt="Meesho" className="client-logo" />
          </div>
        </div>
      </div>

      {/* Page 3: Unlock Rapid Growth */}
      <div className="page flex flex-col justify-center items-center">
        <div className="text-center mx-auto w-full max-w-4xl flex flex-col items-center">
          <h2 className="page-title-small">Unlock Rapid Growth</h2>
          <p className="page-subtitle mb-16 text-justify">With Thinkify, you move at the speed of innovation. Build your dream team and seize every opportunity—no waiting, no bottlenecks.</p>
          <div className="grid md:grid-cols-3 gap-10 w-full max-w-4xl">
            <div className="text-center flex flex-col items-center">
              <div className="metric-large text-primary-accent">4x</div>
              <div className="text-2xl font-bold mt-2 text-main">Faster Delivery</div>
              <p className="text-lg text-main opacity-70 mt-2 text-justify">Accelerate your projects and outpace the competition with rapid team assembly.</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="metric-large text-secondary-accent">95%</div>
              <div className="text-2xl font-bold mt-2 text-main">Success Rate</div>
              <p className="text-lg text-main opacity-70 mt-2 text-justify">Our clients achieve their goals with top-tier talent and seamless integration.</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="metric-large text-primary-accent">2x</div>
              <div className="text-2xl font-bold mt-2 text-main">The Impact</div>
              <p className="text-lg text-main opacity-70 mt-2 text-justify">Double your productivity and innovation with the right team, right now.</p>
            </div>
          </div>
        </div>
        <div className="page-counter">3 / {totalPages}</div>
        <div className="footer">
          <div className="footer-title">Trusted by Industry Leaders</div>
          <div className="client-logos">
            <img src="/companies/Flipkart_Symbol_0.svg" alt="Flipkart" className="client-logo" />
            <img src="/companies/swiggy.svg" alt="Swiggy" className="client-logo" />
            <img src="/companies/ThoughtSpot_idEiE5Z1Gr_0.svg" alt="ThoughtSpot" className="client-logo" />
            <img src="/companies/Whatfix_idc18D79RQ_0.svg" alt="Whatfix" className="client-logo" />
            <img src="/companies/meesho.png" alt="Meesho" className="client-logo" />
          </div>
        </div>
      </div>

      {/* Page 4: NEW - Advantages of Contingent Staffing */}
      <div className="page flex flex-col justify-center items-center">
        <div className="text-center mx-auto w-full max-w-5xl flex flex-col items-center">
          <h2 className="page-title-small">Why <span className="text-primary-accent">Contingent Staffing</span> Wins</h2>
          <p className="page-subtitle mb-16 text-justify">Smart companies are shifting to contingent models. Access world-class talent without the overhead, risk, and time constraints of traditional hiring.</p>
          <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl">
            <div className="card card-colored-1 flex flex-col items-center">
              <Icons.Zap className="w-16 h-16 mx-auto mb-6 text-orange-600" />
              <h3 className="text-xl font-bold mb-2 text-orange-800 text-center">Speed & Agility</h3>
              <p className="text-orange-700 text-justify">Deploy teams in days, not months. Scale up or down instantly based on project needs and market demands.</p>
            </div>
            <div className="card card-colored-2 flex flex-col items-center">
              <Icons.Target className="w-16 h-16 mx-auto mb-6 text-purple-600" />
              <h3 className="text-xl font-bold mb-2 text-purple-800 text-center">Cost Efficiency</h3>
              <p className="text-purple-700 text-justify">Eliminate recruitment costs, benefits overhead, and long-term commitments. Pay only for active contribution.</p>
            </div>
            <div className="card card-colored-3 flex flex-col items-center">
              <Icons.Brain className="w-16 h-16 mx-auto mb-6 text-green-600" />
              <h3 className="text-xl font-bold mb-2 text-green-800 text-center">Specialized Expertise</h3>
              <p className="text-green-700 text-justify">Access niche skills and cutting-edge expertise that would be impossible to maintain full-time internally.</p>
            </div>
          </div>
        </div>
        <div className="page-counter">4 / {totalPages}</div>
        <div className="footer">
          <div className="footer-title">Trusted by Industry Leaders</div>
          <div className="client-logos">
            <img src="/companies/Flipkart_Symbol_0.svg" alt="Flipkart" className="client-logo" />
            <img src="/companies/swiggy.svg" alt="Swiggy" className="client-logo" />
            <img src="/companies/ThoughtSpot_idEiE5Z1Gr_0.svg" alt="ThoughtSpot" className="client-logo" />
            <img src="/companies/Whatfix_idc18D79RQ_0.svg" alt="Whatfix" className="client-logo" />
            <img src="/companies/meesho.png" alt="Meesho" className="client-logo" />
          </div>
        </div>
      </div>

      {/* Page 5: The Solution */}
      <div className="page flex flex-col justify-center items-center">
        <div className="text-center mx-auto w-full max-w-5xl flex flex-col items-center">
          <h2 className="page-title-small">Your On-Demand <br/> <span className="text-primary-accent">Growth Engine</span></h2>
          <p className="page-subtitle mb-16 text-justify">Thinkify is your growth partner—instantly connect with the top 1% of tech talent, ready to deliver results and drive your vision forward.</p>
          <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl">
            <div className="card flex flex-col items-center">
              <Icons.Target className="w-16 h-16 mx-auto mb-6 text-primary-accent" />
              <h3 className="text-xl font-bold mb-2 text-main text-center">Precision-Matched Teams</h3>
              <p className="text-main opacity-70 text-justify">Our AI matches your exact needs with curated teams of specialists, from product pods to platform engineers.</p>
            </div>
            <div className="card flex flex-col items-center">
              <Icons.Zap className="w-16 h-16 mx-auto mb-6 text-secondary-accent" />
              <h3 className="text-xl font-bold mb-2 text-main text-center">Deploy at Lightning Speed</h3>
              <p className="text-main opacity-70 text-justify">Go from project brief to a full team coding in your repo in as little as 72 hours. Your next breakthrough starts now.</p>
            </div>
            <div className="card flex flex-col items-center">
              <Icons.Users className="w-16 h-16 mx-auto mb-6 text-primary-accent" />
              <h3 className="text-xl font-bold mb-2 text-main text-center">Elite Talent, Guaranteed</h3>
              <p className="text-main opacity-70 text-justify">Every engineer is rigorously vetted for technical mastery and collaborative fit. Excellence is our standard.</p>
            </div>
          </div>
        </div>
        <div className="page-counter">5 / {totalPages}</div>
        <div className="footer">
          <div className="footer-title">Trusted by Industry Leaders</div>
          <div className="client-logos">
            <img src="/companies/Flipkart_Symbol_0.svg" alt="Flipkart" className="client-logo" />
            <img src="/companies/swiggy.svg" alt="Swiggy" className="client-logo" />
            <img src="/companies/ThoughtSpot_idEiE5Z1Gr_0.svg" alt="ThoughtSpot" className="client-logo" />
            <img src="/companies/Whatfix_idc18D79RQ_0.svg" alt="Whatfix" className="client-logo" />
            <img src="/companies/meesho.png" alt="Meesho" className="client-logo" />
          </div>
        </div>
      </div>

      {/* Page 6: How It Works */}
      <div className="page">
        <div className="mx-auto w-full max-w-4xl">
            <h2 className="page-title-small mb-20 text-center">Brief. Match. Build.</h2>
            <div className="flex flex-col gap-10 items-center">
                <div className="flex items-start gap-6 md:gap-10 w-full">
                    <div className="text-5xl md:text-6xl font-extrabold text-primary-accent flex-shrink-0">1</div>
                    <div className="pt-1">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2 text-main">Define Your Mission</h3>
                        <p className="text-lg md:text-xl text-main opacity-70 text-justify">A quick 15-minute call is all we need to understand your goals, your stack, and what success looks like.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-6 md:gap-10 w-full">
                    <div className="text-5xl md:text-6xl font-extrabold text-secondary-accent flex-shrink-0">2</div>
                    <div className="pt-1">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2 text-main">Meet Your A-Team</h3>
                        <p className="text-lg md:text-xl text-main opacity-70 text-justify">Within 24 hours, review a shortlist of perfectly matched, pre-vetted teams ready to tackle your challenge.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-6 md:gap-10 w-full">
                    <div className="text-5xl md:text-6xl font-extrabold text-primary-accent flex-shrink-0">3</div>
                    <div className="pt-1">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2 text-main">Launch & Succeed</h3>
                        <p className="text-lg md:text-xl text-main opacity-70 text-justify">Your new team integrates seamlessly and starts shipping. The average deployment time is 72 hours.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="page-counter">6 / {totalPages}</div>
        <div className="footer">
          <div className="footer-title">Trusted by Industry Leaders</div>
          <div className="client-logos">
            <img src="/companies/Flipkart_Symbol_0.svg" alt="Flipkart" className="client-logo" />
            <img src="/companies/swiggy.svg" alt="Swiggy" className="client-logo" />
            <img src="/companies/ThoughtSpot_idEiE5Z1Gr_0.svg" alt="ThoughtSpot" className="client-logo" />
            <img src="/companies/Whatfix_idc18D79RQ_0.svg" alt="Whatfix" className="client-logo" />
            <img src="/companies/meesho.png" alt="Meesho" className="client-logo" />
          </div>
        </div>
      </div>

      {/* Page 7: The Modern Way */}
      <div className="page">
        <div className="mx-auto w-full max-w-6xl">
            <h2 className="page-title-small mb-16 text-center">The Modern Way to Build Teams</h2>
            <div className="grid md:grid-cols-2 gap-8 justify-center items-stretch">
                <div className="card p-8">
                    <h3 className="text-2xl font-bold mb-6 text-center text-main">The Old Way</h3>
                    <ul className="space-y-4 text-lg text-main opacity-70">
                        <li className="flex items-center gap-4"><Icons.Cross className="w-6 h-6 text-danger flex-shrink-0" /><span className="text-justify">Endless cycles of sourcing and interviewing</span></li>
                        <li className="flex items-center gap-4"><Icons.Cross className="w-6 h-6 text-danger flex-shrink-0" /><span className="text-justify">Massive recruiter fees and fixed overhead</span></li>
                        <li className="flex items-center gap-4"><Icons.Cross className="w-6 h-6 text-danger flex-shrink-0" /><span className="text-justify">Uncertain culture and skill fit</span></li>
                    </ul>
                </div>
                <div className="card p-8 border-2 border-primary-accent">
                    <h3 className="text-2xl font-bold mb-6 text-center text-primary-accent">The Thinkify Way</h3>
                    <ul className="space-y-4 text-lg text-text-main">
                        <li className="flex items-center gap-4"><Icons.Check className="w-6 h-6 text-primary-accent flex-shrink-0" /><span className="text-justify">Deploy elite teams in under 72 hours</span></li>
                        <li className="flex items-center gap-4"><Icons.Check className="w-6 h-6 text-secondary-accent flex-shrink-0" /><span className="text-justify">Flexible, transparent pricing with clear ROI</span></li>
                        <li className="flex items-center gap-4"><Icons.Check className="w-6 h-6 text-primary-accent flex-shrink-0" /><span className="text-justify">95% match success rate, guaranteed</span></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="page-counter">7 / {totalPages}</div>
        <div className="footer">
          <div className="footer-title">Trusted by Industry Leaders</div>
          <div className="client-logos">
            <img src="/companies/Flipkart_Symbol_0.svg" alt="Flipkart" className="client-logo" />
            <img src="/companies/swiggy.svg" alt="Swiggy" className="client-logo" />
            <img src="/companies/ThoughtSpot_idEiE5Z1Gr_0.svg" alt="ThoughtSpot" className="client-logo" />
            <img src="/companies/Whatfix_idc18D79RQ_0.svg" alt="Whatfix" className="client-logo" />
            <img src="/companies/meesho.png" alt="Meesho" className="client-logo" />
          </div>
        </div>
      </div>

      {/* Page 8: Social Proof */}
      <div className="page">
        <div className="text-center mx-auto w-full max-w-4xl">
            <h2 className="page-title-small mb-16">Built for Builders, by Builders.</h2>
            <div className="card p-12 text-left relative mx-auto">
                <span className="absolute top-4 left-6 text-8xl font-extrabold text-primary-accent opacity-10">"</span>
                <p className="text-2xl md:text-3xl leading-snug mb-8 relative z-10 text-main text-justify">"Thinkify is our secret weapon. We scaled our core platform team by 40% in two months, a feat that would have taken us over a year. We're now leading our market!"</p>
                <div className="font-semibold text-xl text-primary-accent text-right">— CTO, Fortune 500 Fintech</div>
            </div>
        </div>
        <div className="page-counter">8 / {totalPages}</div>
        <div className="footer">
          <div className="footer-title">Trusted by Industry Leaders</div>
          <div className="client-logos">
            <img src="/companies/Flipkart_Symbol_0.svg" alt="Flipkart" className="client-logo" />
            <img src="/companies/swiggy.svg" alt="Swiggy" className="client-logo" />
            <img src="/companies/ThoughtSpot_idEiE5Z1Gr_0.svg" alt="ThoughtSpot" className="client-logo" />
            <img src="/companies/Whatfix_idc18D79RQ_0.svg" alt="Whatfix" className="client-logo" />
            <img src="/companies/meesho.png" alt="Meesho" className="client-logo" />
          </div>
        </div>
      </div>

      {/* Page 9: Use Cases - Enhanced with Color and Rule of 3 */}
      <div className="page">
        <div className="text-center mx-auto w-full max-w-6xl">
          <h2 className="page-title-small">How Leading Teams Use Thinkify</h2>
          <p className="page-subtitle mb-16 text-justify">From startups to enterprise, our model provides the flexibility to solve any challenge and unlock new opportunities.</p>
          <div className="grid md:grid-cols-3 gap-8 justify-center items-stretch">
            <div className="card card-colored-1 p-8 text-left">
              <Icons.Rocket className="w-12 h-12 mb-4 text-orange-600" />
              <h3 className="text-xl font-bold mb-3 text-orange-800 text-center">Build New Products</h3>
              <p className="text-orange-700 text-justify">Assemble complete, world-class product teams from scratch to launch new ventures and breakthrough innovations.</p>
            </div>
            <div className="card card-colored-2 p-8 text-left">
              <Icons.Zap className="w-12 h-12 mb-4 text-purple-600" />
              <h3 className="text-xl font-bold mb-3 text-purple-800 text-center">Accelerate Roadmaps</h3>
              <p className="text-purple-700 text-justify">Add senior firepower to existing teams to hit critical deadlines and outpace the competition with rapid delivery.</p>
            </div>
            <div className="card card-colored-3 p-8 text-left">
              <Icons.Brain className="w-12 h-12 mb-4 text-green-600" />
              <h3 className="text-xl font-bold mb-3 text-green-800 text-center">Modernize Tech Stacks</h3>
              <p className="text-green-700 text-justify">Bring in specialized experts for complex migrations, refactors, and platform overhauls with cutting-edge expertise.</p>
            </div>
          </div>
        </div>
        <div className="page-counter">9 / {totalPages}</div>
        <div className="footer">
          <div className="footer-title">Trusted by Industry Leaders</div>
          <div className="client-logos">
            <img src="/companies/Flipkart_Symbol_0.svg" alt="Flipkart" className="client-logo" />
            <img src="/companies/swiggy.svg" alt="Swiggy" className="client-logo" />
            <img src="/companies/ThoughtSpot_idEiE5Z1Gr_0.svg" alt="ThoughtSpot" className="client-logo" />
            <img src="/companies/Whatfix_idc18D79RQ_0.svg" alt="Whatfix" className="client-logo" />
            <img src="/companies/meesho.png" alt="Meesho" className="client-logo" />
          </div>
        </div>
      </div>

      {/* Page 10: Our Model - Rule of 3 Applied */}
      <div className="page">
        <div className="text-center mx-auto w-full max-w-5xl">
          <h2 className="page-title-small">Simple, Transparent, & Flexible</h2>
          <p className="page-subtitle mb-16 text-justify">Our model is designed to empower your growth and align with your goals—no risk, just results.</p>
          <div className="card p-10 text-left w-full space-y-8 mx-auto">
            <div className="flex items-start gap-4">
              <Icons.Check className="w-8 h-8 text-primary-accent flex-shrink-0 mt-1" />
              <p className="text-lg text-main text-justify"><strong className="font-bold">No Upfront Costs:</strong> You only pay for the talent you engage. No recruitment fees, ever.</p>
            </div>
            <div className="flex items-start gap-4">
              <Icons.Check className="w-8 h-8 text-secondary-accent flex-shrink-0 mt-1" />
              <p className="text-lg text-main text-justify"><strong className="font-bold">Flexible Contracts:</strong> Scale your team up or down as your needs change. No long-term lock-in.</p>
            </div>
            <div className="flex items-start gap-4">
              <Icons.Check className="w-8 h-8 text-primary-accent flex-shrink-0 mt-1" />
              <p className="text-lg text-main text-justify"><strong className="font-bold">2-Week Trial Period:</strong> We guarantee the perfect fit. If you're not 100% satisfied, you pay nothing.</p>
            </div>
          </div>
        </div>
        <div className="page-counter">10 / {totalPages}</div>
        <div className="footer">
          <div className="footer-title">Trusted by Industry Leaders</div>
          <div className="client-logos">
            <img src="/companies/Flipkart_Symbol_0.svg" alt="Flipkart" className="client-logo" />
            <img src="/companies/swiggy.svg" alt="Swiggy" className="client-logo" />
            <img src="/companies/ThoughtSpot_idEiE5Z1Gr_0.svg" alt="ThoughtSpot" className="client-logo" />
            <img src="/companies/Whatfix_idc18D79RQ_0.svg" alt="Whatfix" className="client-logo" />
            <img src="/companies/meesho.png" alt="Meesho" className="client-logo" />
          </div>
        </div>
      </div>
      
      {/* Page 11: Call to Action */}
      <div className="page">
        <div className="text-center mx-auto max-w-2xl">
          <Icons.Rocket className="w-24 h-24 mx-auto mb-8 text-primary-accent" />
          <h2 className="page-title-small mb-6">Ready to Build Your Future?</h2>
          <p className="page-subtitle mb-6 text-justify">
            Your next great product is just a conversation away. Let's build it together—now.
          </p>
          <button className="cta-button">
            Book Your Strategy Call
          </button>
        </div>
        <div className="page-counter">11 / {totalPages}</div>
        <div className="footer">
          <div className="footer-title">Trusted by Industry Leaders</div>
          <div className="client-logos">
            <img src="/companies/Flipkart_Symbol_0.svg" alt="Flipkart" className="client-logo" />
            <img src="/companies/swiggy.svg" alt="Swiggy" className="client-logo" />
            <img src="/companies/ThoughtSpot_idEiE5Z1Gr_0.svg" alt="ThoughtSpot" className="client-logo" />
            <img src="/companies/Whatfix_idc18D79RQ_0.svg" alt="Whatfix" className="client-logo" />
            <img src="/companies/meesho.png" alt="Meesho" className="client-logo" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
