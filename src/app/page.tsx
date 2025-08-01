'use client';
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';

import CompanyCarousel from '@/components/CompanyCarousel';
import { useTheme } from '@/contexts/ThemeContext';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  isInView: boolean;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration = 2000, suffix = '', isInView }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration, isInView]);
  return <span>{count}{suffix}</span>;
};

export default function HomePage() {
  const { currentTheme } = useTheme();
  const [expandedSection, setExpandedSection] = useState<string | null>('fast');
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });
  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };
  const profiles = [
    {
      name: 'Sagar Giri',
      role: 'Software Development Engineer',
      experience: '8 Years Experience',
      image: '/Sagargiri.jpeg',
      company: 'Uber',
      companyLogo: '/companies/uber-logo.svg'
    },
    {
      name: 'Sulabh Biswas',
      role: 'Software Development Engineer',
      experience: '7 Years Experience',
      image: '/SulabhBiswas.jpeg',
      company: 'Flipkart',
      companyLogo: '/companies/flipkart-logo.svg'
    },
    {
      name: 'Purvaja Khatod',
      role: 'Quality Assurance Engineer',
      experience: '6 Years Experience',
      image: '/Purvajakhatod.jpeg',
      company: 'Amazon',
      companyLogo: '/companies/amazon-logo.svg'
    },
    {
      name: 'Asharani M.R.',
      role: 'Software Development Engineer in Test',
      experience: '5 Years Experience',
      image: '/AsharaniMR.jpeg',
      company: 'ThoughtSpot',
      companyLogo: '/companies/thoughtspot-logo.svg'
    }
  ];
  return (
    <div className="min-h-screen bg-white transition-all duration-300 overflow-x-hidden">
      {/* Navigation */}
              <Navigation />      
      {/* Hero Section - Airbnb Style */}
      <section className="pt-28 pb-16 relative bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border theme-border-primary shadow-lg mb-8">
              <div className="w-2 h-2 theme-bg-primary rounded-full animate-pulse"></div>
              <span className="font-semibold theme-text-primary">The Future of Work is Here</span>
            </div>
          </motion.div>
          <motion.h1 
            className="font-display text-5xl md:text-7xl mb-8 pb-8 theme-text-body text-balance leading-[1.2]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hire {' '}
            <span className="inline-block ">
              Thoughtfully
            </span>
            <br />
            <span className="theme-text-body">Scale </span>{' '}
            <span className="theme-text-body">Instantly</span>
          </motion.h1>
          
          <motion.p 
            className="font-body text-xl theme-text-muted mb-12 max-w-4xl mx-auto text-balance leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            With Thinkify, get vetted Engineering talent on-demand. Experience the 
            <strong className="theme-text-primary"> freedom and flexibility of modern contingent hiring.</strong>
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="https://connect.thinkify.io" className="btn-cosmic-primary px-8 py-4 text-lg">
              Get Your Dream Team
            </Link>
            <Link 
              href="/developers" 
              className="bg-white theme-border-primary theme-text-primary px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2"
            >
              Join the Future
            </Link>
          </motion.div>
          {/* Logo Ticker (CompanyCarousel) inside hero */}
          <div className="mt-12">
            <CompanyCarousel />
          </div>
        </div>
      </section>
      {/* Story Section 1: The Challenge - Airbnb Style */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 backdrop-blur-md border theme-border-primary shadow-lg mb-8">
                <span className="font-semibold theme-text-primary">Transform How You Build Teams</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold theme-text-body mb-8 leading-tight">
                Unlock <span className="text-orange-600">Profitable Growth</span>
                <br />
                <span className="text-2xl theme-text-muted">Accelerate your IPO journey with elite, flexible engineering teams</span>
              </h2>
              
              <div className="space-y-6 text-lg theme-text-muted leading-relaxed">
                <p>
                  <strong>Business momentum matters.</strong> Thinkify delivers pre-vetted, high-performing engineers on demand, so you can execute every project, hit every milestone, and drive faster returns.
                </p>
                <p>
                  <strong>Our promise:</strong> We handle sourcing, vetting, and onboarding. You get flexible staffing, seamless integration, and a direct path to profitability and IPO readiness.
                </p>
                <p className="text-xl font-semibold theme-text-primary">
                  Every project. Every quarter. Delivered.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2"></div>
                  <div className="font-bold text-xl theme-text-body">Thinkify Hiring Reality</div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-orange-50 rounded-xl border border-orange-200">
                    <div>
                      <div className="font-semibold text-orange-700">Day 1: Strategic Alignment</div>
                      <div className="text-sm text-orange-600">"We understand your business goals and project priorities."</div>
                    </div>
                    <div className="text-2xl">🗂️</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl border border-purple-200">
                    <div>
                      <div className="font-semibold text-purple-700">Day 3: Talent Delivered</div>
                      <div className="text-sm text-purple-600">"Vetted engineers, ready to contribute from day one."</div>
                    </div>
                    <div className="text-2xl">🚀</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-orange-50 rounded-xl border border-orange-200">
                    <div>
                      <div className="font-semibold text-orange-700">Week 1: Projects in Motion</div>
                      <div className="text-sm text-orange-600">"Your initiatives move forward without delay."</div>
                    </div>
                    <div className="text-2xl">📈</div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl border border-purple-200">
                    <div>
                      <div className="font-semibold text-purple-700">Month 1: Measurable Impact</div>
                      <div className="text-sm text-purple-600">"Accelerated delivery, improved profitability, IPO readiness."</div>
                    </div>
                    <div className="text-2xl">🏆</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Story Section 2: The Solution - Airbnb Style */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="bg-gradient-to-br from-orange-50 to-purple-50 rounded-3xl p-8 shadow-2xl border border-orange-100">
                <div className="text-center mb-6">
  
                  <div className="font-bold text-xl theme-text-body">The Thinkify Way</div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-orange-50 rounded-xl border border-orange-200">
                    <div>
                      <div className="font-semibold text-orange-700">Monday: Share Your Roadmap</div>
                      <div className="text-sm text-orange-600">"We align on your business and technical objectives."</div>
                    </div>
                    <div className="text-2xl">💬</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl border border-purple-200">
                    <div>
                      <div className="font-semibold text-purple-700">Tuesday: Team Assembled</div>
                      <div className="text-sm text-purple-600">"Specialists matched to your requirements."</div>
                    </div>
  
                  </div>
                  
                  <div className="flex items-center justify-between p-4 theme-bg-primary-10 rounded-xl border theme-border-primary">
                    <div>
                      <div className="font-semibold theme-text-primary">Wednesday: Execution Begins</div>
                      <div className="text-sm theme-text-primary">"Teams start delivering value immediately."</div>
                    </div>
  
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-xl border border-orange-200">
                    <div className="font-bold text-orange-700 text-lg">Result: Faster Profitability</div>
                    <div className="text-sm text-orange-600">"IPO pathway accelerated, every project delivered."</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 backdrop-blur-md border theme-border-primary shadow-lg mb-8">
                <div className="text-xl">🧠</div>
                <span className="font-semibold theme-text-primary">The Thinkify Revolution</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold theme-text-body mb-8 leading-tight">
                What if your next project <span className="theme-text-body">drove your IPO?</span>
              </h2>
              
              <div className="space-y-6 text-lg theme-text-muted leading-relaxed">
                <p>
                  <strong>Imagine:</strong> Every initiative staffed with the right expertise, on time, every time.
                </p>
                <p>
                  Thinkify's flexible staffing model means you scale up or down as business demands shift—without missing a beat.
                </p>
                <p>
                  <strong>Outcome:</strong> Faster delivery, lower risk, and a clear path to profitability and IPO.
                </p>
                <p className="text-xl font-bold theme-text-primary">
                  Build for growth. Deliver for results.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Revolutionary How We Deliver Section */}
      <section id="how-it-works" className="py-32 bg-white relative">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-30 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-600/10 via-purple-600/10 to-pink-600/10"></div>
          <div className="absolute top-20 right-20 w-80 h-80 theme-bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 theme-bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 theme-bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white backdrop-blur-md border theme-border-primary shadow-lg mb-8">
              <div className="w-2 h-2 theme-bg-secondary rounded-full animate-pulse"></div>
              <span className="font-semibold theme-text-primary">Our Process</span>
              <div className="text-2xl">⚙️</div>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold theme-text-body mb-8 leading-tight">
              How We{' '}
              <span className="theme-gradient-text">Deliver</span>
              <br />
              <span className="theme-text-body">Excellence</span>
            </h2>
            
            <p className="text-xl theme-text-muted max-w-4xl mx-auto leading-relaxed">
              Experience the future of engineering recruitment with our revolutionary, AI-driven process 
              that combines cutting-edge technology with human expertise.
            </p>
          </motion.div>
          {/* Enhanced Process Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: "01",
                title: "AI-Powered Discovery",
                subtitle: "Intelligent talent matching",
                description: "Our proprietary AI engine analyzes 500K+ engineer profiles using advanced algorithms that evaluate technical skills, experience depth, and cultural alignment with surgical precision.",
                features: ['500K+ developer database', 'ML-powered matching', 'Cultural fit analysis', 'Technical skill mapping'],
                icon: (
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-500">
                    <circle cx="11" cy="11" r="7" strokeWidth="2"/>
                    <line x1="16.5" y1="16.5" x2="22" y2="22" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ),
                gradient: 'from-blue-500 to-cyan-500',
                stats: { value: '95%', label: 'Match Accuracy' }
              },
              {
                step: "02",
                title: "Expert Human Vetting",
                subtitle: "Senior engineer validation",
                description: "Industry veterans with 15+ years of experience conduct rigorous technical assessments, system design challenges, and comprehensive code reviews to ensure only elite talent passes through.",
                features: ['15+ years experience', 'Technical deep-dives', 'System design tests', 'Code review process'],
                icon: (
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-orange-500">
                    <path d="M5 13l4 4L19 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                gradient: 'from-purple-600 to-orange-500',
                stats: { value: '15%', label: 'Pass Rate' }
              },
              {
                step: "03",
                title: "Quality Guarantee",
                subtitle: "Risk-free delivery promise",
                description: "Zero payment until successful placement with our iron-clad guarantee. We deliver in 15 days average vs industry standard of 45+ days, with 30-day replacement warranty.",
                features: ['Zero upfront payment', '15-day average delivery', '30-day replacement', '99% success rate'],
                icon: (
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-emerald-500">
                    <path d="M12 4v16m8-8H4" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ),
                gradient: 'from-emerald-500 to-teal-500',
                stats: { value: '0%', label: 'Risk to You' }
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden hover:scale-105"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-500" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-6 left-6 w-8 h-8 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-500" style={{ animationDelay: '1s' }}></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                        {item.icon}
                      </div>
                      <div className="text-4xl font-bold text-gray-200 group-hover:text-gray-300 transition-colors duration-300">
                        {item.step}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-800">{item.stats.value}</div>
                      <div className="text-xs text-gray-500">{item.stats.label}</div>
                    </div>
                  </div>
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm font-medium text-gray-600 mb-4">{item.subtitle}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    {item.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.2 + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${item.gradient} rounded-full`}></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  {/* Progress Indicator */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">Step {item.step}</span>
                      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div 
                          className={`h-full bg-gradient-to-r ${item.gradient}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          transition={{ duration: 1, delay: index * 0.3 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Process Flow Visualization */}
          {/* The Thinkify Advantage section removed as per user request */}
        </div>
      </section>
            {/* Revolutionary Elite Tech Talent Section */}
      <section id="talent" className="py-32 relative bg-gradient-to-br from-slate-50 via-white to-gray-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-60 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 theme-bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 theme-bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 theme-bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 backdrop-blur-md border theme-border-primary shadow-lg mb-8">
              <div className="w-2 h-2 theme-bg-secondary rounded-full animate-pulse"></div>
              <span className="font-semibold theme-text-primary">Elite Network Active</span>
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-blue-500"></div>
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
              </div>
            </div>
            
            <h2 className="font-display text-5xl md:text-7xl theme-text-body mb-8 leading-tight">
              <span className="theme-gradient-text">Elite Tech Talent</span>
              <br />
              <span className="theme-text-body">Ready in</span>{' '}
              <span className="theme-gradient-text">72 Hours</span>
            </h2>
            
            <p className="font-body text-xl theme-text-muted max-w-4xl mx-auto mb-8 leading-relaxed">
              Access our curated network of 50,000+ pre-vetted engineers. From AI/ML specialists to DevOps architects, 
              scale your team instantly with guaranteed quality.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              {['QA Specialists', 'DevOps Specialists', 'Full-Stack Developers', 'Data Analysts', 'Mobile Engineers'].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border theme-border-primary font-medium theme-text-primary"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
          {/* Interactive Talent Showcase Grid */}
          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            {/* Featured Talent Cards - Enhanced */}
            <div className="lg:col-span-8">
              <div className="grid md:grid-cols-2 gap-8">
                {profiles.map((profile, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className="group relative bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden border border-white/50"
                  >
                    {/* Dynamic Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    {/* Floating Animation Elements */}
                    <div className="absolute top-4 right-4 w-8 h-8 theme-bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-500" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute bottom-4 left-4 w-6 h-6 theme-bg-secondary/10 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-500" style={{ animationDelay: '1s' }}></div>
                    
                    {/* Profile Content */}
                    <div className="relative z-10">
                      <div className="flex items-center space-x-5 mb-8">
                        <div className="relative">
                          <div className="w-20 h-20 rounded-2xl overflow-hidden ring-4 ring-white shadow-xl group-hover:ring-theme-primary/20 transition-all duration-500">
                            <img
                              src={profile.image}
                              alt={profile.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                          </div>
                          <div className="absolute -bottom-2 -right-2 w-8 h-8 theme-bg-secondary rounded-full border-4 border-white flex items-center justify-center">
                            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold theme-text-body group-hover:theme-text-primary transition-colors duration-300">{profile.name}</h3>
                          <p className="theme-text-muted font-semibold text-lg">{profile.role}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-sm font-medium theme-text-muted">Currently at</span>
                            <span className="text-sm font-bold theme-gradient-text">{profile.company}</span>
                          </div>
                        </div>
                      </div>
                      

                      

                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            {/* Enhanced Feature Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {[
                {
                  title: 'Lightning Fast',
                  description: '72-hour delivery guarantee vs 45+ days industry standard',
                  color: 'from-yellow-500 to-orange-500',
                  metric: '15x'
                },
                {
                  title: 'Perfect Match',
                  description: 'AI-powered matching with 95% technical assessment pass rate',
                  color: 'from-blue-500 to-purple-500',
                  metric: '95%'
                },
                {
                  title: 'Zero Risk',
                  description: 'No payment until successful placement and 30-day guarantee',
                  color: 'from-green-500 to-teal-500',
                  metric: '0%'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="group relative bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 overflow-hidden"
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-2xl shadow-lg`}>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold theme-gradient-text">{feature.metric}</div>
                        <div className="text-xs theme-text-muted font-medium">Success Rate</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold theme-text-body mb-3 group-hover:theme-text-primary transition-colors">{feature.title}</h3>
                    <p className="theme-text-muted text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
              
              {/* Enhanced CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="relative pt-4"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20"></div>
                <Link href="https://connect.thinkify.io" className="relative block w-full btn-cosmic-primary px-8 py-5 rounded-2xl font-bold text-lg text-center shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 bg-gradient-to-r from-blue-600 to-purple-600">
                  <span className="flex items-center justify-center gap-2">
                    Start Hiring Elite Talent
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* Revolutionary Success Stories Section */}
      <section id="success" className="py-32 relative bg-white">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 theme-bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 theme-bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-64 h-64 theme-bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white backdrop-blur-md border theme-border-primary shadow-lg mb-8">
              <div className="w-2 h-2 theme-bg-secondary rounded-full animate-pulse"></div>
              <span className="font-semibold theme-text-primary">Proven Track Record</span>
            </div>
            
            <h2 className="font-display text-5xl md:text-7xl theme-text-body mb-8 leading-tight">
              <span className="theme-text-body">Success</span>{' '}
              <span className="theme-gradient-text">Stories</span>
              <br />
              <span className="theme-text-muted text-4xl md:text-5xl">that Speak Volumes</span>
            </h2>
            
            <p className="font-body text-xl theme-text-muted max-w-4xl mx-auto leading-relaxed">
              Real results from unicorn startups and industry leaders who transformed their engineering teams with Thinkify's elite talent.
            </p>
          </motion.div>
          {/* Interactive Success Stories Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                company: "Swiggy",
                logo: "/companies/swiggy.svg",
                result: "15 Engineers in 20 Days",
                description: "Scaled their ML platform team to handle 10M+ daily orders during peak season rush",
                metric: "3x Faster",
                metricDesc: "than traditional hiring",
                challenge: "Peak season scaling crisis",
                solution: "ML Platform Team",
                impact: "10M+ daily orders handled",
                timeline: "20 days",
                gradient: "from-orange-500 to-red-500",
                testimonial: "Thinkify delivered exactly what we needed when we needed it most. Their engineers are exceptional.",
                role: "Head of Engineering"
              },
              {
                company: "Flipkart", 
                logo: "/companies/Flipkart_Symbol_0.svg",
                result: "Critical DevOps Role Filled",
                description: "Senior infrastructure engineer onboarded in 10 days for marketplace platform scaling",
                metric: "Zero Issues",
                metricDesc: "since deployment",
                challenge: "Infrastructure bottlenecks",
                solution: "DevOps Architecture",
                impact: "99.9% uptime achieved",
                timeline: "10 days",
                gradient: "from-blue-500 to-purple-500",
                testimonial: "The level of expertise and speed was unprecedented. Our systems have never been more stable.",
                role: "CTO"
              },
              {
                company: "ThoughtSpot",
                logo: "/companies/ThoughtSpot_idEiE5Z1Gr_0.svg",
                result: "AI Analytics Team Built",
                description: "Assembled 3 senior engineers to develop their next-generation AI-powered analytics platform",
                metric: "50% Faster",
                metricDesc: "query performance",
                challenge: "AI platform scaling",
                solution: "AI Analytics Platform",
                impact: "10x faster insights",
                timeline: "12 days",
                gradient: "from-purple-500 to-pink-500",
                testimonial: "Thinkify's engineers brought deep AI expertise that accelerated our platform development significantly.",
                role: "VP of Engineering"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative bg-white backdrop-blur-lg rounded-3xl p-8 border theme-border-surface shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 theme-bg-surface/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-12 h-12 theme-bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-500" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-6 left-6 w-8 h-8 theme-bg-secondary/20 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-500" style={{ animationDelay: '1s' }}></div>
                
                <div className="relative z-10">
                  {/* Company Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 theme-bg-surface rounded-xl flex items-center justify-center">
                        <img src={story.logo} alt={story.company} className="h-8 w-auto" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold theme-text-body group-hover:theme-text-primary transition-all duration-300">{story.company}</h3>
                        <p className="theme-text-muted text-sm">{story.challenge}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold theme-gradient-text">{story.metric}</div>
                      <div className="text-xs theme-text-muted">{story.metricDesc}</div>
                    </div>
                  </div>
                  
                  {/* Result */}
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold theme-text-body mb-3">{story.result}</h4>
                    <p className="theme-text-muted leading-relaxed text-sm">{story.description}</p>
                  </div>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="theme-bg-surface rounded-xl p-4 text-center border theme-border-surface">
                      <div className="text-lg font-bold theme-text-primary mb-1">{story.timeline}</div>
                      <div className="text-xs theme-text-muted">Delivery Time</div>
                    </div>
                    <div className="theme-bg-surface rounded-xl p-4 text-center border theme-border-surface">
                      <div className="text-lg font-bold theme-text-secondary mb-1">{story.impact.split(' ')[0]}</div>
                      <div className="text-xs theme-text-muted">{story.impact.split(' ').slice(1).join(' ')}</div>
                    </div>
                  </div>
                  
                  {/* Testimonial */}
                  <div className="theme-bg-surface rounded-xl p-4 border theme-border-surface mb-6">
                    <p className="theme-text-body text-sm italic mb-3">"{story.testimonial}"</p>
                    <div className="text-xs theme-text-muted">— {story.role}, {story.company}</div>
                  </div>
                  
                  {/* Solution Badge */}
                  <div className="flex items-center justify-between">
                    <div className="px-4 py-2 theme-gradient-primary rounded-full text-black text-xs font-semibold">
                      {story.solution}
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-6 h-6 theme-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-white backdrop-blur-lg rounded-3xl p-12 border theme-border-surface max-w-4xl mx-auto shadow-2xl">
              <h3 className="text-3xl font-bold theme-text-body mb-6">Ready to Write Your Success Story?</h3>
              <p className="theme-text-muted mb-8 text-lg">Join 500+ companies who've scaled their teams with Thinkify's elite engineering talent.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="https://connect.thinkify.io" className="btn-cosmic-primary px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  Start Your Transformation
                </Link>
                <Link href="https://connect.thinkify.io/case-studies" className="bg-white theme-text-primary border-2 theme-border-primary px-8 py-4 rounded-xl font-semibold text-lg hover:theme-bg-primary hover:theme-text-body transition-all duration-300">
                  View All Case Studies
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Revolutionary Proven Results Section */}
      <section ref={statsRef} className="py-32 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-40 overflow-hidden">
          <div className="absolute top-20 left-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 theme-bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 backdrop-blur-md border border-emerald-200 shadow-lg mb-8">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="font-semibold text-emerald-700">Performance Metrics</span>
              <div className="text-2xl">📊</div>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold theme-text-body mb-8 leading-tight">
              <span className="theme-text-body">Proven Results</span>
              <br />
              <span className="theme-text-primary">That Speak</span>
            </h2>
            
            <p className="text-xl theme-text-muted max-w-4xl mx-auto leading-relaxed">
              Our track record isn't just impressive—it's revolutionary. We've redefined what's possible 
              in engineering recruitment with results that consistently outperform industry standards.
            </p>
          </motion.div>
          {/* Enhanced Stats Grid */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-16">
            {[
              { 
                number: 15, 
                label: "Days Average Placement", 
                suffix: "", 
                gradient: 'from-yellow-500 to-orange-500',
                comparison: 'vs 45+ industry standard',
                improvement: '3x faster'
              },
              { 
                number: 95, 
                label: "Technical Assessment Pass Rate", 
                suffix: "%", 
                gradient: 'from-emerald-500 to-teal-500',
                comparison: 'vs 60% industry average',
                improvement: '35% higher'
              },
              { 
                number: 100, 
                label: "Zero Payment Until Delivery", 
                suffix: "%", 
                gradient: 'from-blue-500 to-purple-500',
                comparison: 'risk-free guarantee',
                improvement: 'Industry first'
              },
              { 
                number: 15, 
                label: "Years Senior Engineering Experience", 
                suffix: "+", 
                gradient: 'from-purple-500 to-pink-500',
                comparison: 'of our vetting team',
                improvement: 'Elite expertise'
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group relative bg-white/80 backdrop-blur-lg rounded-3xl p-8 border border-white/50 shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-500" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-6 left-6 w-8 h-8 bg-emerald-400/20 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-500" style={{ animationDelay: '1s' }}></div>
                
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${stat.gradient} rounded-2xl mx-auto mb-6 flex items-center justify-center text-3xl shadow-lg`}>
                  </div>
                  {/* Main Metric */}
                  <div className="text-4xl md:text-5xl font-bold theme-text-primary mb-3">
                    <AnimatedCounter 
                      end={stat.number} 
                      suffix={stat.suffix}
                      isInView={isInView}
                    />
                  </div>
                  {/* Label */}
                  <p className="theme-text-muted font-semibold text-sm mb-4 leading-tight">{stat.label}</p>
                  {/* Comparison */}
                  <div className="space-y-2">
                    <div className="text-xs theme-text-muted">{stat.comparison}</div>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${stat.gradient} text-black`}>
                      {stat.improvement}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Performance Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-12 border border-white/40 shadow-2xl max-w-5xl mx-auto">
              <h3 className="text-3xl font-bold theme-text-body mb-8">Thinkify vs Industry Standard</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Industry Standard */}
                <div className="bg-red-50 rounded-2xl p-6 border-2 border-red-200">
                  <h4 className="text-lg font-bold text-red-800 mb-4">Industry Standard</h4>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center justify-between">
                      <span className="theme-text-muted">Avg. Placement Time</span>
                      <span className="font-bold text-red-600">45+ days</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="theme-text-muted">Success Rate</span>
                      <span className="font-bold text-red-600">60%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="theme-text-muted">Upfront Cost</span>
                      <span className="font-bold text-red-600">20-30%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="theme-text-muted">Replacement Guarantee</span>
                      <span className="font-bold text-red-600">Limited</span>
                    </div>
                  </div>
                </div>
                {/* Thinkify */}
                <div className="bg-emerald-50 rounded-2xl p-6 border-2 border-emerald-200 relative overflow-hidden">
                  <div className="absolute top-2 right-2 bg-emerald-500 text-black px-2 py-1 rounded-full text-xs font-bold">WINNER</div>
                  <h4 className="text-lg font-bold text-emerald-800 mb-4">Thinkify</h4>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center justify-between">
                      <span className="theme-text-muted">Avg. Placement Time</span>
                      <span className="font-bold text-emerald-600">15 days</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="theme-text-muted">Success Rate</span>
                      <span className="font-bold text-emerald-600">95%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="theme-text-muted">Upfront Cost</span>
                      <span className="font-bold text-emerald-600">0%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="theme-text-muted">Replacement Guarantee</span>
                      <span className="font-bold text-emerald-600">30 days</span>
                    </div>
                  </div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <p className="theme-text-muted mb-6">
                  <strong>The choice is clear:</strong> While others struggle with outdated processes, 
                  we deliver revolutionary results that transform how companies build their engineering teams.
                </p>
                <Link href="https://connect.thinkify.io" className="btn-cosmic-primary px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                  Experience the Difference →
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Revolutionary Final CTA Section - "Ready to Scale Your Engineering Team?" */}
      <section id="contact" className="py-32 bg-white relative">
        {/* Advanced Background Effects */}
        <div className="absolute inset-0 opacity-40 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20"></div>
          <div className="absolute top-20 left-20 w-96 h-96 theme-bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 theme-bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 theme-bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {/* Epic Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl mb-8"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 theme-bg-secondary rounded-full animate-pulse"></div>
                <div className="w-3 h-3 theme-bg-primary rounded-full animate-pulse delay-200"></div>
                <div className="w-3 h-3 theme-bg-accent rounded-full animate-pulse delay-400"></div>
              </div>
              <span className="font-bold theme-text-primary">Transform Your Team Today</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold theme-text-body mb-8 leading-tight"
            >
              Ready to{' '}
              <span className="theme-gradient-text">Scale</span>
              <br />
              Your{' '}
              <span className="theme-text-body">Engineering</span>
              <br />
              <span className="theme-text-body">Team?</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-xl theme-text-muted mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Join the ranks of <strong>Swiggy, Flipkart, and Meesho</strong> who trust Thinkify for their most critical engineering hires. 
              Experience zero-risk recruitment with guaranteed results that will transform your entire organization.
            </motion.p>
            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
            >
              {[
                { label: 'Zero Risk Guarantee', desc: '100% money-back promise' },
                { label: '72-Hour Delivery', desc: 'First candidates within 3 days' },
                { label: '95% Success Rate', desc: 'Industry-leading accuracy' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white backdrop-blur-sm rounded-2xl p-6 border theme-border-surface shadow-lg"
                >
                  <div className="font-bold theme-text-body mb-1">{item.label}</div>
                  <div className="text-sm theme-text-muted">{item.desc}</div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Epic CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-6 justify-center mb-12"
            >
                              <Link href="https://connect.thinkify.io" className="group relative">
                <motion.button 
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-cosmic-primary px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden"
                >
                  <span className="relative z-10">Start Your Transformation</span>
                  <div className="absolute inset-0 theme-gradient-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </Link>
              <Link href="tel:+919876543210" className="group relative">
                <motion.button 
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white border-2 theme-border-primary theme-text-primary px-12 py-6 rounded-2xl font-bold text-xl hover:theme-bg-primary hover:theme-text-body transition-all duration-300 backdrop-blur-sm"
                >
                  Schedule Strategy Call
                </motion.button>
              </Link>
            </motion.div>
            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-sm theme-text-muted mb-4">Trusted by 500+ companies worldwide</p>
              <div className="flex items-center justify-center gap-2">
                {[1,2,3,4,5].map((star) => (
                  <motion.div
                    key={star}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.2 + star * 0.1 }}
                    viewport={{ once: true }}
                    className="theme-text-warning text-xl"
                  >
                    ★
                  </motion.div>
                ))}
                <span className="theme-text-muted ml-2">4.9/5 from 2,500+ reviews</span>
              </div>
            </motion.div>
          </motion.div>
          {/* Bottom Stats Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="bg-white backdrop-blur-lg rounded-3xl p-8 border theme-border-surface shadow-2xl">
              <div className="grid md:grid-cols-4 gap-6 text-center">
                {[
                  { metric: '500+', label: 'Companies Scaled' },
                  { metric: '15K+', label: 'Engineers Placed' },
                  { metric: '72hrs', label: 'Average Response' },
                  { metric: '95%', label: 'Success Rate' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-3xl font-bold theme-gradient-text mb-2">
                      {stat.metric}
                    </div>
                    <div className="text-sm theme-text-muted">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
            {/* Floating Call-to-Action Bubbles */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              viewport={{ once: true }}
              className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/40 hidden lg:block"
            >
              <div className="text-xs font-bold text-indigo-700">Time to First Hire</div>
              <div className="text-2xl font-bold theme-text-primary">3 Days</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.7 }}
              viewport={{ once: true }}
              className="absolute -right-8 bottom-1/4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/40 hidden lg:block"
            >
              <div className="text-xs font-bold text-green-700">Client Satisfaction</div>
              <div className="text-2xl font-bold theme-text-secondary">98%</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Comprehensive FAQ Section */}
      <section className="py-32 bg-gradient-to-br from-white via-gray-50 to-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold theme-text-body mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl theme-text-muted max-w-3xl mx-auto">
              Everything you need to know about Thinkify's contingent staffing solutions and elite engineering talent deployment.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                question: "How quickly can Thinkify deploy engineering teams?",
                answer: "Thinkify specializes in rapid deployment, typically delivering pre-vetted engineering teams within 72 hours of project initiation. Our streamlined process includes immediate strategic alignment, same-day talent matching, and seamless onboarding to ensure your project starts without delays. This rapid deployment capability is made possible by our extensive network of pre-vetted elite engineers and our proprietary matching algorithm."
              },
              {
                question: "What makes Thinkify's engineering talent elite?",
                answer: "Our elite talent network consists of engineers with proven track records from top-tier companies including FAANG (Facebook, Amazon, Apple, Netflix, Google) and leading unicorn startups. Each engineer undergoes a rigorous 5-stage vetting process that evaluates technical expertise, cultural fit, communication skills, and delivery capability. We maintain a 15% acceptance rate to ensure only the top 1% of engineering talent joins our network."
              },
              {
                question: "How does Thinkify's contingent staffing model work?",
                answer: "Thinkify's contingent staffing model provides maximum flexibility and cost efficiency. Companies pay only for active contribution with no upfront recruitment costs, long-term commitments, or hidden fees. Our model includes flexible contracts that allow scaling up or down based on project needs, 2-week trial periods to ensure perfect fit, and transparent pricing with clear ROI. This approach eliminates traditional hiring risks while providing access to world-class engineering talent."
              },
              {
                question: "What industries and project types does Thinkify serve?",
                answer: "Thinkify serves a diverse range of industries including fintech, e-commerce, healthcare technology, artificial intelligence, and enterprise software. Our engineering teams excel in building new products, accelerating development roadmaps, modernizing legacy tech stacks, and implementing cutting-edge technologies. We've successfully supported startups, scale-ups, and enterprise companies across various technical domains and project complexities."
              },
              {
                question: "How does Thinkify ensure quality and project success?",
                answer: "Thinkify maintains a 95% success rate through our comprehensive quality assurance process. This includes rigorous pre-vetting of all engineers, continuous performance monitoring, regular client feedback loops, and dedicated project success managers. Our engineers are backed by Thinkify's guarantee, and we provide ongoing support throughout the engagement to ensure optimal project outcomes and client satisfaction."
              },
              {
                question: "What are the cost benefits of Thinkify's model?",
                answer: "Thinkify's contingent staffing model delivers significant cost advantages compared to traditional hiring. Companies save 40-60% on total talent costs by eliminating recruitment fees, reducing overhead, and paying only for active work. Additional benefits include faster time-to-market, reduced risk through trial periods, and the ability to scale resources based on actual project needs rather than maintaining full-time staff for variable workloads."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold theme-text-body mb-4">{faq.question}</h3>
                <p className="theme-text-muted leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold theme-text-body mb-4">
                Ready to Transform Your Engineering Strategy?
              </h3>
              <p className="text-lg theme-text-muted mb-6 max-w-2xl mx-auto">
                Join hundreds of companies that have accelerated their growth with Thinkify's elite engineering talent. 
                Experience the future of contingent staffing today.
              </p>
              <Link href="https://connect.thinkify.io" className="btn-cosmic-primary px-8 py-4 text-lg">
                Start Your Journey
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Revolutionary Modern Footer */}
      <footer className="relative bg-gradient-to-br from-slate-50 via-white to-gray-50 py-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <div className="theme-text-muted text-sm mb-1">
              © 2024 Thinkify Technologies Pvt Ltd. All rights reserved.
            </div>
            <div className="theme-text-muted font-semibold text-sm">
              Elite Tech Talent, Delivered.
            </div>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            <a href="#" className="theme-text-muted hover:theme-text-primary text-sm font-medium transition-colors duration-300 px-3 py-2 rounded-lg">Privacy Policy</a>
            <a href="#" className="theme-text-muted hover:theme-text-primary text-sm font-medium transition-colors duration-300 px-3 py-2 rounded-lg">Terms</a>
            <a href="#" className="theme-text-muted hover:theme-text-primary text-sm font-medium transition-colors duration-300 px-3 py-2 rounded-lg">Contact</a>
          </div>
        </div>
      </footer>
      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}