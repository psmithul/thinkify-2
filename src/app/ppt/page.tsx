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
            padding: 40mm 30mm;
            margin: 0;
            page-break-after: always;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: center;
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
            font-size: 48pt;
            font-weight: 300;
            line-height: 1.1;
            margin-bottom: 20pt;
          }
          .page-subtitle {
            font-size: 24pt;
            font-weight: 400;
            margin-bottom: 30pt;
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
            padding: 8vh 10vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
            box-sizing: border-box;
          }
          .page-title {
            font-size: 4rem;
            font-weight: 300;
            line-height: 1.1;
            margin-bottom: 2rem;
          }
          .page-subtitle {
            font-size: 1.5rem;
            font-weight: 400;
            margin-bottom: 3rem;
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
        
        .airbnb-red { color: #FF5A5F; }
        .airbnb-gray { color: #484848; }
        .airbnb-light-gray { color: #767676; }
      `}</style>

      {/* Page 1: Hook - The Problem */}
      <div className="page bg-white">
        <div className="text-center">
          <div className="metric-large airbnb-red mb-8">127 days</div>
          <h1 className="page-title airbnb-gray mb-6">
            The time it takes to hire<br />
            one senior engineer
          </h1>
          <p className="page-subtitle airbnb-light-gray max-w-3xl mx-auto">
            While your competitors ship products, you're still interviewing candidates.
            There's a better way.
          </p>
        </div>
      </div>

      {/* Page 2: Amplify the Pain */}
      <div className="page bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="page-title airbnb-gray mb-12 text-center">
            The hidden cost of slow hiring
          </h1>
          
          <div className="grid grid-cols-3 gap-12 text-center">
            <div>
              <div className="metric-medium airbnb-red mb-4">$2.3M</div>
              <div className="text-xl airbnb-gray font-medium mb-2">Lost Revenue</div>
              <div className="airbnb-light-gray">Per unfilled senior role</div>
            </div>
            
            <div>
              <div className="metric-medium airbnb-red mb-4">47%</div>
              <div className="text-xl airbnb-gray font-medium mb-2">Wrong Hires</div>
              <div className="airbnb-light-gray">Fail within 18 months</div>
            </div>
            
            <div>
              <div className="metric-medium airbnb-red mb-4">3.2x</div>
              <div className="text-xl airbnb-gray font-medium mb-2">Overspend</div>
              <div className="airbnb-light-gray">vs. optimal hiring cost</div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-2xl airbnb-gray">
              Your best engineers are burning out covering for vacant roles.
            </p>
          </div>
        </div>
      </div>

      {/* Page 3: Market Opportunity */}
      <div className="page bg-white">
        <div className="text-center">
          <h1 className="page-title airbnb-gray mb-8">
            The $127B opportunity
          </h1>
          <p className="page-subtitle airbnb-light-gray mb-16 max-w-3xl mx-auto">
            Smart companies are moving to contingent workforce models.<br />
            The question isn't if, but when.
          </p>
          
          <div className="grid grid-cols-2 gap-16 max-w-4xl mx-auto">
            <div className="text-left">
              <div className="text-6xl font-light airbnb-red mb-4">84%</div>
              <div className="text-xl airbnb-gray mb-2">of enterprises</div>
              <div className="airbnb-light-gray">accelerating digital transformation</div>
            </div>
            
            <div className="text-left">
              <div className="text-6xl font-light airbnb-red mb-4">42%</div>
              <div className="text-xl airbnb-gray mb-2">of teams</div>
              <div className="airbnb-light-gray">now permanently remote</div>
            </div>
            
            <div className="text-left">
              <div className="text-6xl font-light airbnb-red mb-4">10M</div>
              <div className="text-xl airbnb-gray mb-2">unfilled roles</div>
              <div className="airbnb-light-gray">in tech globally</div>
            </div>
            
            <div className="text-left">
              <div className="text-6xl font-light airbnb-red mb-4">+45%</div>
              <div className="text-xl airbnb-gray mb-2">CAGR growth</div>
              <div className="airbnb-light-gray">in elite talent segment</div>
            </div>
          </div>
        </div>
      </div>

      {/* Page 4: The Solution */}
      <div className="page bg-gray-50">
        <div className="text-center">
          <h1 className="page-title airbnb-gray mb-8">
            What if you could hire<br />
            in 72 hours?
          </h1>
          <p className="page-subtitle airbnb-light-gray mb-16 max-w-3xl mx-auto">
            Thinkify connects you with pre-vetted, elite engineers ready to start immediately.
          </p>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-3 gap-12">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="text-4xl mb-6">🎯</div>
                <div className="text-xl airbnb-gray font-medium mb-4">Elite Network</div>
                <div className="airbnb-light-gray text-left">
                  Top 1% engineers, pre-screened for technical excellence and cultural fit.
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="text-4xl mb-6">⚡</div>
                <div className="text-xl airbnb-gray font-medium mb-4">AI Matching</div>
                <div className="airbnb-light-gray text-left">
                  Intelligent algorithms ensure perfect skill-role alignment every time.
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="text-4xl mb-6">🚀</div>
                <div className="text-xl airbnb-gray font-medium mb-4">Fast Deploy</div>
                <div className="airbnb-light-gray text-left">
                  Seamless onboarding gets engineers productive from day one.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page 5: Proof Points */}
      <div className="page bg-white">
        <div className="text-center">
          <h1 className="page-title airbnb-gray mb-12">
            Real results from real clients
          </h1>
          
          <div className="grid grid-cols-2 gap-16 max-w-5xl mx-auto mb-16">
            <div className="text-left bg-gray-50 rounded-2xl p-8">
              <div className="metric-medium airbnb-red mb-4">95%</div>
              <div className="text-xl airbnb-gray font-medium mb-4">Success Rate</div>
              <div className="airbnb-light-gray mb-6">
                "Thinkify engineers consistently exceed expectations. Best hiring decision we've made."
              </div>
              <div className="text-sm airbnb-gray font-medium">— CTO, Fortune 500 Fintech</div>
            </div>
            
            <div className="text-left bg-gray-50 rounded-2xl p-8">
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
          </div>
        </div>
      </div>

      {/* Page 6: How It Works */}
      <div className="page bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h1 className="page-title airbnb-gray mb-16 text-center">
            From brief to brilliant engineer
          </h1>
          
          <div className="space-y-12">
            <div className="flex items-center gap-12">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-2xl font-bold airbnb-red flex-shrink-0">1</div>
              <div>
                <div className="text-2xl airbnb-gray font-medium mb-2">Share Your Needs</div>
                <div className="airbnb-light-gray text-lg">Tell us about your project, tech stack, and timeline in a 15-minute call.</div>
              </div>
            </div>
            
            <div className="flex items-center gap-12">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-2xl font-bold airbnb-red flex-shrink-0">2</div>
              <div>
                <div className="text-2xl airbnb-gray font-medium mb-2">Get Matched</div>
                <div className="airbnb-light-gray text-lg">Our AI identifies 3-5 perfect candidates from our pre-vetted network within 24 hours.</div>
              </div>
            </div>
            
            <div className="flex items-center gap-12">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-2xl font-bold airbnb-red flex-shrink-0">3</div>
              <div>
                <div className="text-2xl airbnb-gray font-medium mb-2">Start Building</div>
                <div className="airbnb-light-gray text-lg">Your chosen engineer starts within 72 hours, fully onboarded and ready to contribute.</div>
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
        <div className="text-center">
          <h1 className="page-title airbnb-gray mb-12">
            Why choose Thinkify?
          </h1>
          
          <div className="grid grid-cols-2 gap-16 max-w-5xl mx-auto">
            <div className="text-left">
              <h3 className="text-2xl airbnb-gray font-medium mb-8">Traditional Hiring</h3>
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
              <h3 className="text-2xl airbnb-gray font-medium mb-8">The Thinkify Way</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="airbnb-gray">72-hour deployment</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="airbnb-gray">95% success rate</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="airbnb-gray">Transparent, fair pricing</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="airbnb-gray">Pre-vetted elite talent</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="airbnb-gray">Global network access</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <p className="text-2xl airbnb-gray max-w-3xl mx-auto">
              Stop losing to competitors who ship faster.<br />
              Start winning with Thinkify.
            </p>
          </div>
        </div>
      </div>

      {/* Page 8: Pricing */}
      <div className="page bg-gray-50">
        <div className="text-center">
          <h1 className="page-title airbnb-gray mb-12">
            Simple, transparent pricing
          </h1>
          
          <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-xl airbnb-gray font-medium mb-4">Starter</div>
              <div className="text-4xl airbnb-red font-light mb-6">15%</div>
              <div className="airbnb-light-gray mb-8">placement fee</div>
              <div className="text-left space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="airbnb-gray text-sm">1-3 engineers</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="airbnb-gray text-sm">72hr deployment</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="airbnb-gray text-sm">Basic support</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-red-200">
              <div className="text-xl airbnb-gray font-medium mb-4">Growth</div>
              <div className="text-4xl airbnb-red font-light mb-6">12%</div>
              <div className="airbnb-light-gray mb-8">placement fee</div>
              <div className="text-left space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="airbnb-gray text-sm">4-10 engineers</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="airbnb-gray text-sm">48hr deployment</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="airbnb-gray text-sm">Priority support</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="airbnb-gray text-sm">Account manager</span>
                </div>
              </div>
              <div className="mt-6 text-center">
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-xl airbnb-gray font-medium mb-4">Enterprise</div>
              <div className="text-4xl airbnb-red font-light mb-6">10%</div>
              <div className="airbnb-light-gray mb-8">placement fee</div>
              <div className="text-left space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="airbnb-gray text-sm">10+ engineers</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="airbnb-gray text-sm">24hr deployment</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="airbnb-gray text-sm">White-glove service</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span className="airbnb-gray text-sm">Custom integration</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <p className="text-lg airbnb-light-gray">
              Compare to 20-30% traditional recruiter fees + 4-month delays
            </p>
          </div>
        </div>
      </div>

      {/* Page 9: Call to Action */}
      <div className="page bg-white">
        <div className="text-center">
          <h1 className="page-title airbnb-gray mb-8">
            Ready to transform<br />
            your hiring?
          </h1>
          
          <p className="page-subtitle airbnb-light-gray mb-16 max-w-3xl mx-auto">
            Join 500+ companies already building with Thinkify engineers.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-3xl p-12 mb-12">
              <div className="text-3xl airbnb-gray font-medium mb-8">Start your pilot today</div>
              
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-4xl mb-4">📞</div>
                  <div className="text-lg airbnb-gray font-medium mb-2">Book a Call</div>
                  <div className="airbnb-light-gray">15-min consultation</div>
                </div>
                
                <div>
                  <div className="text-4xl mb-4">🎯</div>
                  <div className="text-lg airbnb-gray font-medium mb-2">Get Matched</div>
                  <div className="airbnb-light-gray">3-5 perfect candidates</div>
                </div>
                
                <div>
                  <div className="text-4xl mb-4">🚀</div>
                  <div className="text-lg airbnb-gray font-medium mb-2">Start Building</div>
                  <div className="airbnb-light-gray">Within 72 hours</div>
                </div>
              </div>
              
              <div className="text-xl airbnb-red font-medium">
                No upfront costs. No long-term contracts.
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="text-lg airbnb-gray">Contact us:</div>
              <div className="airbnb-light-gray">hello@thinkify.ai</div>
              <div className="airbnb-light-gray">+1 (555) 123-4567</div>
              <div className="airbnb-light-gray">www.thinkify.ai</div>
            </div>
          </div>
        </div>
      </div>

      {/* Page 10: Thank You */}
      <div className="page bg-gray-50">
        <div className="text-center">
          <h1 className="page-title airbnb-gray mb-12">
            Thank you
          </h1>
          
          <div className="text-6xl mb-12">🚀</div>
          
          <p className="text-3xl airbnb-gray mb-16 max-w-3xl mx-auto">
            Let's build the future together
          </p>
          
          <div className="space-y-6">
            <div className="text-xl airbnb-gray font-medium">Thinkify</div>
            <div className="airbnb-light-gray">Elite Tech Talent, Delivered Fast</div>
            
            <div className="mt-12 space-y-2">
              <div className="airbnb-light-gray">hello@thinkify.ai</div>
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