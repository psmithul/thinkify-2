'use client';

import React from 'react';

export default function PresentationPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Print-specific styles */}
      <style jsx global>{`
        @media print {
          * {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          .page {
            width: 210mm;
            height: 297mm;
            padding: 30mm 25mm;
            margin: 0;
            page-break-after: always;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .page:last-child {
            page-break-after: auto;
          }
          body {
            font-size: 14pt;
            line-height: 1.5;
            margin: 0;
            padding: 0;
          }
          .page-title {
            font-size: 42pt;
            font-weight: 300;
            line-height: 1.1;
            margin-bottom: 20pt;
            text-align: center;
          }
          .page-subtitle {
            font-size: 18pt;
            font-weight: 400;
            margin-bottom: 25pt;
            text-align: center;
          }
          .metric-large {
            font-size: 72pt;
            font-weight: 200;
          }
          .metric-medium {
            font-size: 48pt;
            font-weight: 300;
          }
        }
        
        @media screen {
          .page {
            width: 100vw;
            height: 100vh;
            padding: 6vh 8vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
          }
          .page-title {
            font-size: 3.5rem;
            font-weight: 300;
            line-height: 1.1;
            margin-bottom: 2rem;
            text-align: center;
          }
          .page-subtitle {
            font-size: 1.25rem;
            font-weight: 400;
            margin-bottom: 3rem;
            text-align: center;
          }
          .metric-large {
            font-size: 5rem;
            font-weight: 200;
          }
          .metric-medium {
            font-size: 3rem;
            font-weight: 300;
          }
        }
        
        .airbnb-red { color: #FFC300; } /* gold for highlights */
        .airbnb-gray { color: #000; } /* black for main text */
        .airbnb-light-gray { color: #000; } /* black for main text */
        .center-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }
      `}</style>

      {/* Page 1: Hook - The Problem */}
      <div className="page bg-white">
        <div className="center-content">
          <div className="metric-large airbnb-red mb-8">127 days</div>
          <h1 className="page-title airbnb-gray mb-6">
            The time it takes to hire<br />
            one senior engineer
          </h1>
          <p className="page-subtitle airbnb-light-gray max-w-3xl">
            While your competitors ship products, you're still interviewing candidates.
            There's a better way.
          </p>
          
          {/* Clock SVG */}
          <div className="mt-8">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" className="text-yellow-400">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Page 2: Amplify the Pain */}
      <div className="page bg-yellow-50">
        <div className="center-content">
          <h1 className="page-title airbnb-gray mb-12">
            The hidden cost of slow hiring
          </h1>
          
          <div className="grid grid-cols-3 gap-12 text-center max-w-5xl w-full mb-12">
            <div>
              <div className="metric-medium airbnb-red mb-4">$2.3M</div>
              <div className="text-xl airbnb-gray font-medium mb-2">Lost Revenue</div>
              <div className="airbnb-light-gray">Per unfilled senior role</div>
              <div className="mt-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-yellow-400 mx-auto">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
            </div>
            
            <div>
              <div className="metric-medium airbnb-red mb-4">47%</div>
              <div className="text-xl airbnb-gray font-medium mb-2">Wrong Hires</div>
              <div className="airbnb-light-gray">Fail within 18 months</div>
              <div className="mt-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-yellow-400 mx-auto">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                  <line x1="17" y1="8" x2="22" y2="13" stroke="currentColor" strokeWidth="2"/>
                  <line x1="22" y1="8" x2="17" y2="13" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
            </div>
            
            <div>
              <div className="metric-medium airbnb-red mb-4">3.2x</div>
              <div className="text-xl airbnb-gray font-medium mb-2">Overspend</div>
              <div className="airbnb-light-gray">vs. optimal hiring cost</div>
              <div className="mt-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-yellow-400 mx-auto">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-2xl airbnb-gray max-w-2xl">
              Your best engineers are burning out covering for vacant roles.
            </p>
          </div>
        </div>
      </div>

      {/* Page 3: Market Opportunity */}
      <div className="page bg-white">
        <div className="center-content">
          <h1 className="page-title airbnb-gray mb-8">
            The $127B opportunity
          </h1>
          <p className="page-subtitle airbnb-light-gray mb-16 max-w-3xl">
            Smart companies are moving to contingent workforce models.<br />
            The question isn't if, but when.
          </p>
          
          <div className="grid grid-cols-2 gap-16 max-w-4xl w-full">
            <div className="text-center">
              <div className="text-6xl font-light airbnb-red mb-4">84%</div>
              <div className="text-xl airbnb-gray mb-2">of enterprises</div>
              <div className="airbnb-light-gray">accelerating digital transformation</div>
              <div className="mt-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-green-400 mx-auto">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-6xl font-light airbnb-red mb-4">42%</div>
              <div className="text-xl airbnb-gray mb-2">of teams</div>
              <div className="airbnb-light-gray">now permanently remote</div>
              <div className="mt-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-green-400 mx-auto">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="2"/>
                  <polyline points="9,22 9,12 15,12 15,22" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-6xl font-light airbnb-red mb-4">10M</div>
              <div className="text-xl airbnb-gray mb-2">unfilled roles</div>
              <div className="airbnb-light-gray">in tech globally</div>
              <div className="mt-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-blue-400 mx-auto">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2"/>
                  <polyline points="3.27,6.96 12,12.01 20.73,6.96" stroke="currentColor" strokeWidth="2"/>
                  <line x1="12" y1="22.08" x2="12" y2="12" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-6xl font-light airbnb-red mb-4">+45%</div>
              <div className="text-xl airbnb-gray mb-2">CAGR growth</div>
              <div className="airbnb-light-gray">in elite talent segment</div>
              <div className="mt-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-blue-400 mx-auto">
                  <polyline points="22,7 13.5,15.5 8.5,10.5 2,17" stroke="currentColor" strokeWidth="2"/>
                  <polyline points="16,7 22,7 22,13" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page 4: The Solution */}
      <div className="page bg-yellow-50">
        <div className="center-content">
          <h1 className="page-title airbnb-gray mb-8">
            What if you could hire<br />
            in 72 hours?
          </h1>
          <p className="page-subtitle airbnb-light-gray mb-16 max-w-3xl">
            Thinkify connects you with pre-vetted, elite engineers ready to start immediately.
          </p>
          
          <div className="grid grid-cols-3 gap-12 max-w-5xl w-full">
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="mb-6">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" className="text-blue-500 mx-auto">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div className="text-xl airbnb-gray font-medium mb-4">Elite Network</div>
              <div className="airbnb-light-gray text-left">
                Top 1% engineers, pre-screened for technical excellence and cultural fit.
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="mb-6">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" className="text-purple-500 mx-auto">
                  <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div className="text-xl airbnb-gray font-medium mb-4">AI Matching</div>
              <div className="airbnb-light-gray text-left">
                Intelligent algorithms ensure perfect skill-role alignment every time.
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="mb-6">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" className="text-green-500 mx-auto">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2"/>
                  <polyline points="22,4 12,14.01 9,11.01" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div className="text-xl airbnb-gray font-medium mb-4">Fast Deploy</div>
              <div className="airbnb-light-gray text-left">
                Seamless onboarding gets engineers productive from day one.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page 5: Proof Points */}
      <div className="page bg-white">
        <div className="center-content">
          <h1 className="page-title airbnb-gray mb-12">
            Real results from real clients
          </h1>
          
          <div className="grid grid-cols-2 gap-16 max-w-5xl w-full mb-16">
            <div className="text-left bg-yellow-50 rounded-2xl p-8">
              <div className="metric-medium airbnb-red mb-4">95%</div>
              <div className="text-xl airbnb-gray font-medium mb-4">Success Rate</div>
              <div className="airbnb-light-gray mb-6">
                "Thinkify engineers consistently exceed expectations. Best hiring decision we've made."
              </div>
              <div className="text-sm airbnb-gray font-medium">— CTO, Fortune 500 Fintech</div>
            </div>
            
            <div className="text-left bg-yellow-50 rounded-2xl p-8">
              <div className="metric-medium airbnb-red mb-4">40%</div>
              <div className="text-xl airbnb-gray font-medium mb-4">Cost Reduction</div>
              <div className="airbnb-light-gray mb-6">
                "We're shipping faster than ever while spending less on talent acquisition."
              </div>
              <div className="text-sm airbnb-gray font-medium">— VP Engineering, Unicorn Startup</div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-6xl font-light airbnb-red mb-4">500+</div>
            <div className="text-xl airbnb-gray">Elite engineers in our network</div>
            <div className="mt-6">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" className="text-blue-400 mx-auto">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
                <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Page 6: How It Works */}
      <div className="page bg-yellow-50">
        <div className="center-content max-w-5xl">
          <h1 className="page-title airbnb-gray mb-16">
            From brief to brilliant engineer
          </h1>
          
          <div className="space-y-12 w-full">
            <div className="flex items-center gap-12">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-2xl font-bold airbnb-red flex-shrink-0">1</div>
              <div className="flex-1">
                <div className="text-2xl airbnb-gray font-medium mb-2">Share Your Needs</div>
                <div className="airbnb-light-gray text-lg">Tell us about your project, tech stack, and timeline in a 15-minute call.</div>
              </div>
              <div className="flex-shrink-0">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" className="text-blue-400">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
            </div>
            
            <div className="flex items-center gap-12">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-2xl font-bold airbnb-red flex-shrink-0">2</div>
              <div className="flex-1">
                <div className="text-2xl airbnb-gray font-medium mb-2">Get Matched</div>
                <div className="airbnb-light-gray text-lg">Our AI identifies 3-5 perfect candidates from our pre-vetted network within 24 hours.</div>
              </div>
              <div className="flex-shrink-0">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" className="text-purple-400">
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
            </div>
            
            <div className="flex items-center gap-12">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-2xl font-bold airbnb-red flex-shrink-0">3</div>
              <div className="flex-1">
                <div className="text-2xl airbnb-gray font-medium mb-2">Start Building</div>
                <div className="airbnb-light-gray text-lg">Your chosen engineer starts within 72 hours, fully onboarded and ready to contribute.</div>
              </div>
              <div className="flex-shrink-0">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" className="text-green-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-sm inline-block">
              <div className="text-3xl airbnb-red font-light mb-2">72 hours</div>
              <div className="airbnb-gray">Average time to deployment</div>
            </div>
          </div>
        </div>
      </div>

      {/* Page 7: Value Proposition */}
      <div className="page bg-white">
        <div className="center-content">
          <h1 className="page-title airbnb-gray mb-12">
            Why choose Thinkify?
          </h1>
          
          <div className="grid grid-cols-2 gap-16 max-w-5xl w-full">
            <div className="text-left">
              <h3 className="text-2xl airbnb-gray font-medium mb-8 text-center">Traditional Hiring</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-red-500 text-xl">×</span>
                  <span className="airbnb-light-gray">4+ month hiring cycles</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-red-500 text-xl">×</span>
                  <span className="airbnb-light-gray">47% failure rate</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-red-500 text-xl">×</span>
                  <span className="airbnb-light-gray">20-30% recruiter fees</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-red-500 text-xl">×</span>
                  <span className="airbnb-light-gray">Unknown quality risk</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-red-500 text-xl">×</span>
                  <span className="airbnb-light-gray">Limited talent pool</span>
                </div>
              </div>
            </div>
            
            <div className="text-left">
              <h3 className="text-2xl airbnb-gray font-medium mb-8 text-center">The Thinkify Way</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-yellow-600 text-xl">✓</span>
                  <span className="airbnb-gray">72-hour deployment</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-yellow-600 text-xl">✓</span>
                  <span className="airbnb-gray">95% success rate</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-yellow-600 text-xl">✓</span>
                  <span className="airbnb-gray">Transparent, fair pricing</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-yellow-600 text-xl">✓</span>
                  <span className="airbnb-gray">Pre-vetted elite talent</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-yellow-600 text-xl">✓</span>
                  <span className="airbnb-gray">Global network access</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-2xl airbnb-gray max-w-3xl">
              Stop losing to competitors who ship faster.<br />
              Start winning with Thinkify.
            </p>
            <div className="mt-8">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" className="text-green-400 mx-auto">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Page 9: Call to Action */}
      <div className="page bg-white">
        <div className="center-content">
          <h1 className="page-title airbnb-gray mb-8">
            Ready to transform<br />
            your hiring?
          </h1>
          
          <p className="page-subtitle airbnb-light-gray mb-16 max-w-3xl">
            Join 500+ companies already building with Thinkify engineers.
          </p>
          
          <div className="max-w-4xl w-full">
            <div className="bg-yellow-50 rounded-3xl p-12 mb-12">
              <div className="text-3xl airbnb-gray font-medium mb-8 text-center">Start your pilot today</div>
              
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="mb-4">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" className="text-blue-500 mx-auto">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="text-lg airbnb-gray font-medium mb-2">Book a Call</div>
                  <div className="airbnb-light-gray">15-min consultation</div>
                </div>
                
                <div className="text-center">
                  <div className="mb-4">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" className="text-purple-500 mx-auto">
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="text-lg airbnb-gray font-medium mb-2">Get Matched</div>
                  <div className="airbnb-light-gray">3-5 perfect candidates</div>
                </div>
                
                <div className="text-center">
                  <div className="mb-4">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" className="text-green-500 mx-auto">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="text-lg airbnb-gray font-medium mb-2">Start Building</div>
                  <div className="airbnb-light-gray">Within 72 hours</div>
                </div>
              </div>
              
              <div className="text-xl airbnb-red font-medium text-center">
                No upfront costs. No long-term contracts.
              </div>
            </div>
            
                         <div className="space-y-4 text-center">
               <div className="text-lg airbnb-gray">Contact us:</div>
               <div className="airbnb-light-gray">kulkarni.karthik@thinkify.io</div>
               <div className="airbnb-light-gray">+91 98765 43210</div>
               <div className="airbnb-light-gray">www.thinkify.ai</div>
             </div>
          </div>
        </div>
      </div>

      {/* Page 10: Thank You */}
      <div className="page bg-yellow-50">
        <div className="center-content">
          <h1 className="page-title airbnb-gray mb-12">
            Thank you
          </h1>
          
          <div className="mb-12">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" className="text-blue-500 mx-auto">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          
          <p className="text-3xl airbnb-gray mb-16 max-w-3xl">
            Let's build the future together
          </p>
          
          <div className="space-y-6">
            <div className="text-xl airbnb-gray font-medium">Thinkify</div>
            <div className="airbnb-light-gray">Elite Tech Talent, Delivered Fast</div>
            
                         <div className="mt-12 space-y-2">
               <div className="airbnb-light-gray">kulkarni.karthik@thinkify.io</div>
               <div className="airbnb-light-gray">www.thinkify.ai</div>
             </div>
            
            <div className="mt-12 text-sm airbnb-light-gray">
              © 2024 Thinkify Technologies Pvt Ltd. Confidential & Proprietary.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 