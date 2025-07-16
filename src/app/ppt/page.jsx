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
  const totalPages = 10;

  return (
    <div className="presentation-container">
      {/* Global styles, fonts, and theme variables */}
      <style jsx="true" global="true">{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap');

        :root {
          --bg-main: #FFFFFF; /* White */
          --text-main: #000000; /* Black */
          --primary-accent: #00D09C; /* Green Accent */
          --text-light: #FFFFFF; /* White text for buttons */
          --danger: #EF4444;
          --border-color: #E5E7EB;
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
            padding: 6vh 8vw;
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
          margin-bottom: 1.5rem;
        }
        .page-title-small {
            font-size: clamp(2.25rem, 4vw, 3.5rem);
            line-height: 1.2;
            text-align: center;
            letter-spacing: -0.02em;
            margin-bottom: 1rem;
        }

        .page-subtitle {
          font-size: clamp(1.1rem, 1.5vw, 1.25rem);
          font-weight: 400;
          line-height: 1.6;
          text-align: center;
          color: var(--text-main);
          opacity: 0.7;
          max-width: 55ch;
          margin-bottom: 2.5rem;
        }
        
        .metric-large {
            font-size: clamp(4rem, 10vw, 8rem);
            font-weight: 800;
            line-height: 1;
        }
        
        .text-primary-accent { color: var(--primary-accent); }
        .card { 
            background-color: var(--bg-main);
            border: 1px solid var(--border-color);
            padding: 2rem;
            border-radius: 0.5rem;
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

        .cta-button {
            background-color: var(--primary-accent);
            color: var(--text-light);
            font-weight: 700;
            padding: 1rem 2.5rem;
            border-radius: 9999px;
            font-size: 1.25rem;
            transition: opacity 0.3s;
            border: none;
            cursor: pointer;
        }
        .cta-button:hover {
            opacity: 0.9;
        }
      `}</style>

    <div className="page-scroller">
      {/* Page 1: Title Slide */}
      <div className="page">
        <div className="text-center">
          <h1 className="page-title">
            Stop Interviewing. <br />
            Start <span className="text-primary-accent">Shipping</span>.
          </h1>
          <p className="page-subtitle">
            Your roadmap won't wait. Thinkify delivers the world's most elite engineering teams on-demand, so you can build faster than your competition.
          </p>
          <button className="cta-button">
            Unlock Your A-Team
          </button>
        </div>
        <div className="page-counter">1 / {totalPages}</div>
      </div>

      {/* Page 2: The Problem */}
      <div className="page">
        <div className="text-center w-full max-w-6xl">
          <h2 className="page-title-small">The High Cost of Waiting.</h2>
          <p className="page-subtitle mb-16">Traditional hiring is a bottleneck. It's slow, expensive, and risky. While you're waiting, the market is moving.</p>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="metric-large text-primary-accent">4+</div>
              <div className="text-2xl font-bold mt-2 text-main">Months of Delay</div>
              <p className="text-lg text-main opacity-70 mt-2">Lost momentum on critical projects for every single hire.</p>
            </div>
            <div className="text-center">
              <div className="metric-large text-primary-accent">47%</div>
              <div className="text-2xl font-bold mt-2 text-main">Mishire Rate</div>
              <p className="text-lg text-main opacity-70 mt-2">Nearly half of all hires fail, costing you time, money, and morale.</p>
            </div>
            <div className="text-center">
              <div className="metric-large text-primary-accent">2x</div>
              <div className="text-2xl font-bold mt-2 text-main">The Salary</div>
              <p className="text-lg text-main opacity-70 mt-2">The true cost of a bad hire, factoring in recruitment and lost productivity.</p>
            </div>
          </div>
        </div>
        <div className="page-counter">2 / {totalPages}</div>
      </div>

      {/* Page 3: The Solution */}
      <div className="page">
        <div className="text-center w-full max-w-6xl">
          <h2 className="page-title-small">Your On-Demand <br/> <span className="text-primary-accent">Growth Engine.</span></h2>
          <p className="page-subtitle mb-16">Thinkify isn't a hiring platform; it's a strategic weapon. We give you instant access to the top 1% of tech talent, fully integrated and ready to execute.</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <Icons.Target className="w-16 h-16 mx-auto mb-6 text-primary-accent" />
              <h3 className="text-xl font-bold mb-2 text-main">Precision-Matched Teams</h3>
              <p className="text-main opacity-70">Our AI matches your exact needs with curated teams of specialists, from product pods to platform engineers.</p>
            </div>
            <div className="card">
              <Icons.Zap className="w-16 h-16 mx-auto mb-6 text-primary-accent" />
              <h3 className="text-xl font-bold mb-2 text-main">Deploy at Ludicrous Speed</h3>
              <p className="text-main opacity-70">Go from project brief to a full team coding in your repo in as little as 72 hours. This is your new unfair advantage.</p>
            </div>
            <div className="card">
              <Icons.Users className="w-16 h-16 mx-auto mb-6 text-primary-accent" />
              <h3 className="text-xl font-bold mb-2 text-main">Only the Top 1%</h3>
              <p className="text-main opacity-70">Every engineer is rigorously vetted for technical mastery and collaborative fit. We've done the hard work so you don't have to.</p>
            </div>
          </div>
        </div>
        <div className="page-counter">3 / {totalPages}</div>
      </div>

      {/* Page 4: Our Network */}
      <div className="page">
        <div className="text-center w-full max-w-6xl">
          <h2 className="page-title-small">Your Team is Comprised of the World's Best.</h2>
          <p className="page-subtitle mb-16">We've built a private network of senior talent you can't find anywhere else. </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <Icons.Rocket className="w-16 h-16 mx-auto mb-6 text-primary-accent" />
              <h3 className="text-xl font-bold mb-2 text-main">Ex-FAANG & Unicorns</h3>
              <p className="text-main opacity-70">Engineers with proven track records at the world's leading technology companies.</p>
            </div>
            <div className="card">
              <Icons.Brain className="w-16 h-16 mx-auto mb-6 text-primary-accent" />
              <h3 className="text-xl font-bold mb-2 text-main">Deep Specializations</h3>
              <p className="text-main opacity-70">Experts in today's most in-demand fields: AI/ML, Platform Engineering, Blockchain, and more.</p>
            </div>
            <div className="card">
              <Icons.ShieldCheck className="w-16 h-16 mx-auto mb-6 text-primary-accent" />
              <h3 className="text-xl font-bold mb-2 text-main">Rigorously Vetted</h3>
              <p className="text-main opacity-70">A 5-stage vetting process with a 98% rejection rate ensures you only work with the absolute best.</p>
            </div>
          </div>
        </div>
        <div className="page-counter">4 / {totalPages}</div>
      </div>

      {/* Page 5: How It Works */}
      <div className="page">
        <div className="w-full max-w-4xl">
            <h2 className="page-title-small mb-20">Brief. Match. Build.</h2>
            <div className="flex flex-col gap-10">
                <div className="flex items-start gap-6 md:gap-10">
                    <div className="text-5xl md:text-6xl font-extrabold text-primary-accent flex-shrink-0">1</div>
                    <div className="pt-1">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2 text-main">Define Your Mission</h3>
                        <p className="text-lg md:text-xl text-main opacity-70">A quick 15-minute call is all we need to understand your goals, your stack, and what success looks like.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-6 md:gap-10">
                    <div className="text-5xl md:text-6xl font-extrabold text-primary-accent flex-shrink-0">2</div>
                    <div className="pt-1">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2 text-main">Meet Your A-Team</h3>
                        <p className="text-lg md:text-xl text-main opacity-70">Within 24 hours, review a shortlist of perfectly matched, pre-vetted teams ready to tackle your challenge.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-6 md:gap-10">
                    <div className="text-5xl md:text-6xl font-extrabold text-primary-accent flex-shrink-0">3</div>
                    <div className="pt-1">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2 text-main">Launch & Dominate</h3>
                        <p className="text-lg md:text-xl text-main opacity-70">Your new team integrates seamlessly and starts shipping. The average deployment time is 72 hours.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="page-counter">5 / {totalPages}</div>
      </div>
      
      {/* Page 6: The Advantage */}
      <div className="page">
        <div className="w-full max-w-6xl">
            <h2 className="page-title-small mb-16">The Old Way is Obsolete.</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="card p-8">
                    <h3 className="text-2xl font-bold mb-6 text-center text-main">The Hiring Trap</h3>
                    <ul className="space-y-4 text-lg text-main opacity-70">
                        <li className="flex items-center gap-4"><Icons.Cross className="w-6 h-6 text-danger flex-shrink-0" /><span>Endless cycles of sourcing and interviewing</span></li>
                        <li className="flex items-center gap-4"><Icons.Cross className="w-6 h-6 text-danger flex-shrink-0" /><span>Massive recruiter fees and fixed overhead</span></li>
                        <li className="flex items-center gap-4"><Icons.Cross className="w-6 h-6 text-danger flex-shrink-0" /><span>A 50/50 gamble on culture and skill fit</span></li>
                        <li className="flex items-center gap-4"><Icons.Cross className="w-6 h-6 text-danger flex-shrink-0" /><span>Roadmap hostage to hiring speed</span></li>
                    </ul>
                </div>
                <div className="card p-8 border-2 border-primary-accent">
                    <h3 className="text-2xl font-bold mb-6 text-center text-primary-accent">The Thinkify Engine</h3>
                    <ul className="space-y-4 text-lg text-text-main">
                        <li className="flex items-center gap-4"><Icons.Check className="w-6 h-6 text-primary-accent flex-shrink-0" /><span>Deploy elite teams in under 72 hours</span></li>
                        <li className="flex items-center gap-4"><Icons.Check className="w-6 h-6 text-primary-accent flex-shrink-0" /><span>Flexible, transparent pricing with clear ROI</span></li>
                        <li className="flex items-center gap-4"><Icons.Check className="w-6 h-6 text-primary-accent flex-shrink-0" /><span>95% match success rate, guaranteed</span></li>
                        <li className="flex items-center gap-4"><Icons.Check className="w-6 h-6 text-primary-accent flex-shrink-0" /><span>Build on your terms, at your speed</span></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="page-counter">6 / {totalPages}</div>
      </div>

      {/* Page 7: Social Proof */}
      <div className="page">
        <div className="text-center w-full max-w-4xl">
            <h2 className="page-title-small mb-16">Built for Builders, by Builders.</h2>
            <div className="card p-12 text-left relative">
                <span className="absolute top-4 left-6 text-8xl font-extrabold text-primary-accent opacity-10">“</span>
                <p className="text-2xl md:text-3xl leading-snug mb-8 relative z-10 text-main">"Thinkify is our secret weapon. We scaled our core platform team by 40% in two months, a feat that would have taken us over a year and saved us from a critical competitive threat."</p>
                <div className="font-semibold text-xl text-primary-accent text-right">— CTO, Fortune 500 Fintech</div>
            </div>
        </div>
        <div className="page-counter">7 / {totalPages}</div>
      </div>

      {/* Page 8: Use Cases */}
      <div className="page">
        <div className="text-center w-full max-w-6xl">
          <h2 className="page-title-small">How Leading Teams Use Thinkify</h2>
          <p className="page-subtitle mb-16">From startups to the enterprise, our model provides the flexibility to solve any challenge.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-8 text-left">
              <h3 className="text-xl font-bold mb-2 text-main">Augment Your Team</h3>
              <p className="text-main opacity-70">Fill critical skill gaps for a specific project without the overhead of a full-time hire.</p>
            </div>
            <div className="card p-8 text-left">
              <h3 className="text-xl font-bold mb-2 text-main">Build a New Product</h3>
              <p className="text-main opacity-70">Assemble a complete, world-class product pod from scratch to launch a new venture.</p>
            </div>
            <div className="card p-8 text-left">
              <h3 className="text-xl font-bold mb-2 text-main">Accelerate Your Roadmap</h3>
              <p className="text-main opacity-70">Add senior firepower to your existing teams to hit critical deadlines and outpace the competition.</p>
            </div>
            <div className="card p-8 text-left">
              <h3 className="text-xl font-bold mb-2 text-main">Modernize Your Stack</h3>
              <p className="text-main opacity-70">Bring in specialized experts for a complex migration, refactor, or platform overhaul.</p>
            </div>
          </div>
        </div>
        <div className="page-counter">8 / {totalPages}</div>
      </div>

      {/* Page 9: Our Model */}
      <div className="page">
        <div className="text-center w-full max-w-5xl">
          <h2 className="page-title-small">Simple, Transparent, & Flexible</h2>
          <p className="page-subtitle mb-16">Our model is designed to de-risk talent acquisition and align with your goals.</p>
          <div className="card p-10 text-left w-full space-y-6">
            <div className="flex items-start gap-4">
              <Icons.Check className="w-8 h-8 text-primary-accent flex-shrink-0 mt-1" />
              <p className="text-lg text-main"><strong className="font-bold">No Upfront Costs:</strong> You only pay for the talent you engage. No recruitment fees, ever.</p>
            </div>
            <div className="flex items-start gap-4">
              <Icons.Check className="w-8 h-8 text-primary-accent flex-shrink-0 mt-1" />
              <p className="text-lg text-main"><strong className="font-bold">Flexible Contracts:</strong> Scale your team up or down as your needs change. No long-term lock-in.</p>
            </div>
            <div className="flex items-start gap-4">
              <Icons.Check className="w-8 h-8 text-primary-accent flex-shrink-0 mt-1" />
              <p className="text-lg text-main"><strong className="font-bold">2-Week Trial Period:</strong> We guarantee the perfect fit. If you're not 100% satisfied, you pay nothing.</p>
            </div>
             <div className="flex items-start gap-4">
              <Icons.Check className="w-8 h-8 text-primary-accent flex-shrink-0 mt-1" />
              <p className="text-lg text-main"><strong className="font-bold">Dedicated Talent Partner:</strong> Your success is our success. You'll have a dedicated partner to ensure seamless integration.</p>
            </div>
          </div>
        </div>
        <div className="page-counter">9 / {totalPages}</div>
      </div>
      
      {/* Page 10: Call to Action */}
      <div className="page">
        <div className="text-center">
          <Icons.Rocket className="w-24 h-24 mx-auto mb-8 text-primary-accent" />
          <h2 className="page-title-small" style={{marginBottom: '1.5rem'}}>Ready to Build Your Future?</h2>
          <p className="page-subtitle">
            Your next great product shouldn't be stuck in a hiring queue. Schedule a free, no-bs strategy call and let's talk about how we can help you build it, now.
          </p>
          <button className="cta-button">
            Book Your Strategy Call
          </button>
        </div>
        <div className="page-counter">10 / {totalPages}</div>
      </div>
    </div>
    </div>
  );
}
