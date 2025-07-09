'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import ThemeSwitcher from '@/components/ThemeSwitcher';
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
      name: 'Sarah Chen',
      role: 'Data Scientist',
      experience: '10 Years Experience',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
      company: 'OpenAI',
      companyLogo: '/companies/openai-logo.svg'
    },
    {
      name: 'David Kumar',
      role: 'AI Architect',
      experience: '8 Years Experience',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      company: 'MongoDB',
      companyLogo: '/companies/mongodb-logo.svg'
    },
    {
      name: 'Emily Zhang',
      role: 'AI Engineer',
      experience: '8 Years Experience',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
      company: 'Langfuse',
      companyLogo: '/companies/langfuse-logo.svg'
    },
    {
      name: 'Michael Rodriguez',
      role: 'ML Engineer',
      experience: '9 Years Experience',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      company: 'Hugging Face',
      companyLogo: '/companies/huggingface-logo.svg'
    }
  ];

  return (
    <div className="min-h-screen bg-white transition-all duration-300">

      {/* Navigation */}
      <Navigation />

      {/* Theme Switcher */}
      <ThemeSwitcher />

      {/* Hero Section */}
      <section className="pt-28 pb-20 relative overflow-hidden bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            className="font-display text-5xl md:text-7xl mb-8 text-gray-900 text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Elite{' '}
            <span className="theme-gradient-text">
              Tech Talent
            </span>
            ,{' '}
            <span className="text-gray-900">Delivered Fast</span>
          </motion.h1>
          <motion.p 
            className="font-body text-xl text-gray-600 mb-12 max-w-3xl mx-auto text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We connect innovative companies with pre-vetted AI/ML engineers, DevOps specialists, and full-stack developers. Scale your team in 72 hours, not 72 days.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="#contact" className="btn-cosmic-primary">
              Hire Elite Talent
            </Link>
            <Link 
              href="/developers" 
              className="bg-white border-2 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{ 
                borderColor: `var(--color-primary)`, 
                color: `var(--color-primary)` 
              }}
            >
              Join as Developer →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Company Carousel Section */}
      <CompanyCarousel 
        title="Trusted by Industry Leaders"
        subtitle="Join companies like these who've scaled their engineering teams with Thinkify's elite talent"
      />

      {/* How It Works Section - Symmetric grid */}
      <section id="how-it-works" className="py-20 relative bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-gray-900 mb-4">
              How We <span className="theme-gradient-text">Deliver</span>
            </h2>
            <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto text-balance">
              Experience the future of engineering recruitment with our streamlined, expert-driven process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "AI-Powered Search",
                description: "Our proprietary AI scans 500K+ engineer profiles using intelligent filters for technical skills, experience, and culture fit."
              },
              {
                step: "2", 
                title: "Senior Engineer Vetting",
                description: "15+ years experienced engineers conduct precision technical interviews and system design evaluations."
              },
              {
                step: "3",
                title: "Quality Guarantee",
                description: "Zero payment until successful placement. Average 15-day delivery vs 45+ days industry standard."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 theme-bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">{item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

            {/* Revolutionary Elite Tech Talent Section */}
      <section id="talent" className="py-32 relative bg-gradient-to-br from-slate-50 via-white to-gray-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-60">
          <div className="absolute top-20 left-10 w-72 h-72 theme-bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
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
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-semibold theme-text-primary">Elite Network Active</span>
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-blue-500"></div>
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
              </div>
            </div>
            
            <h2 className="font-display text-5xl md:text-7xl text-gray-900 mb-8 leading-tight">
              <span className="theme-gradient-text">Elite Tech Talent</span>
              <br />
              <span className="text-gray-800">Ready in</span>{' '}
              <span className="relative inline-block">
                <span className="theme-gradient-text">72 Hours</span>
                <motion.div 
                  className="absolute -bottom-4 left-0 w-full h-3 theme-bg-primary/20 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </span>
            </h2>
            
            <p className="font-body text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              Access our curated network of 50,000+ pre-vetted engineers. From AI/ML specialists to DevOps architects, 
              scale your team instantly with guaranteed quality.
            </p>

            <div className="flex flex-wrap justify-center gap-3 text-sm">
              {['AI/ML Engineers', 'DevOps Specialists', 'Full-Stack Developers', 'Data Scientists', 'Mobile Engineers'].map((skill, index) => (
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
                    <div className="absolute bottom-4 left-4 w-6 h-6 bg-green-500/10 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-500" style={{ animationDelay: '1s' }}></div>
                    
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
                          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 group-hover:theme-text-primary transition-colors duration-300">{profile.name}</h3>
                          <p className="text-gray-600 font-semibold text-lg">{profile.role}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-sm font-medium text-gray-500">Currently at</span>
                            <span className="text-sm font-bold theme-gradient-text">{profile.company}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Enhanced Stats Grid */}
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="bg-white/60 rounded-xl p-4 text-center border border-gray-100">
                          <div className="text-2xl font-bold theme-gradient-text mb-1">{profile.experience.split(' ')[0]}+</div>
                          <div className="text-xs text-gray-600 font-medium">Years Experience</div>
                        </div>
                        <div className="bg-white/60 rounded-xl p-4 text-center border border-gray-100">
                          <div className="text-2xl font-bold text-green-600 mb-1">95%</div>
                          <div className="text-xs text-gray-600 font-medium">Success Rate</div>
                        </div>
                      </div>
                      
                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {['React', 'Node.js', 'Python', 'AWS'].map((skill, skillIndex) => (
                          <span 
                            key={skill} 
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      {/* Action Button */}
                      <button className="w-full btn-cosmic-primary py-4 px-6 rounded-xl font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 shadow-lg hover:shadow-xl">
                        View Full Profile & Hire →
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Enhanced Feature Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {[
                {
                  icon: '⚡',
                  title: 'Lightning Fast',
                  description: '72-hour delivery guarantee vs 45+ days industry standard',
                  color: 'from-yellow-500 to-orange-500',
                  metric: '15x'
                },
                {
                  icon: '🎯',
                  title: 'Perfect Match',
                  description: 'AI-powered matching with 95% technical interview pass rate',
                  color: 'from-blue-500 to-purple-500',
                  metric: '95%'
                },
                {
                  icon: '🔒',
                  title: 'Zero Risk',
                  description: 'No payment until successful placement and 30-day guarantee',
                  color: 'from-green-500 to-teal-500',
                  metric: '0%'
                },
                {
                  icon: '🌍',
                  title: 'Global Network',
                  description: 'Access to 50K+ vetted engineers across 40+ countries',
                  color: 'from-purple-500 to-pink-500',
                  metric: '50K+'
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
                        {feature.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold theme-gradient-text">{feature.metric}</div>
                        <div className="text-xs text-gray-500 font-medium">Success Rate</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:theme-text-primary transition-colors">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
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
                <a href="#contact" className="relative block w-full btn-cosmic-primary px-8 py-5 rounded-2xl font-bold text-lg text-center shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 bg-gradient-to-r from-blue-600 to-purple-600">
                  <span className="flex items-center justify-center gap-2">
                    Start Hiring Elite Talent
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Success Stories Section */}
      <section id="success" className="py-32 relative bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
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
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-semibold text-white">Proven Track Record</span>
              <div className="text-2xl">🏆</div>
            </div>
            
            <h2 className="font-display text-5xl md:text-7xl text-white mb-8 leading-tight">
              <span className="text-white">Success</span>{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Stories</span>
              <br />
              <span className="text-gray-300 text-4xl md:text-5xl">that Speak Volumes</span>
            </h2>
            
            <p className="font-body text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
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
                company: "Meesho",
                logo: "/companies/meesho.png",
                result: "Backend Team Expansion",
                description: "Added 5 senior engineers to optimize their social commerce platform architecture",
                metric: "40% Faster",
                metricDesc: "API response times",
                challenge: "Performance optimization",
                solution: "Backend Architecture",
                impact: "2x user engagement",
                timeline: "15 days",
                gradient: "from-green-500 to-teal-500",
                testimonial: "Outstanding talent that understood our tech stack immediately and delivered results fast.",
                role: "Engineering Manager"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden hover:bg-white/10"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${story.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-500" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-6 left-6 w-8 h-8 bg-green-400/20 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-500" style={{ animationDelay: '1s' }}></div>
                
                <div className="relative z-10">
                  {/* Company Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                        <img src={story.logo} alt={story.company} className="h-8 w-auto" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{story.company}</h3>
                        <p className="text-gray-400 text-sm">{story.challenge}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-bold bg-gradient-to-r ${story.gradient} bg-clip-text text-transparent`}>{story.metric}</div>
                      <div className="text-xs text-gray-400">{story.metricDesc}</div>
                    </div>
                  </div>
                  
                  {/* Result */}
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-white mb-3">{story.result}</h4>
                    <p className="text-gray-300 leading-relaxed text-sm">{story.description}</p>
                  </div>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                      <div className="text-lg font-bold text-white mb-1">{story.timeline}</div>
                      <div className="text-xs text-gray-400">Delivery Time</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                      <div className="text-lg font-bold text-green-400 mb-1">{story.impact.split(' ')[0]}</div>
                      <div className="text-xs text-gray-400">{story.impact.split(' ').slice(1).join(' ')}</div>
                    </div>
                  </div>
                  
                  {/* Testimonial */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 mb-6">
                    <p className="text-gray-300 text-sm italic mb-3">"{story.testimonial}"</p>
                    <div className="text-xs text-gray-400">— {story.role}, {story.company}</div>
                  </div>
                  
                  {/* Solution Badge */}
                  <div className="flex items-center justify-between">
                    <div className={`px-4 py-2 bg-gradient-to-r ${story.gradient} rounded-full text-white text-xs font-semibold`}>
                      {story.solution}
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/10 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-6">Ready to Write Your Success Story?</h3>
              <p className="text-gray-300 mb-8 text-lg">Join 500+ companies who've scaled their teams with Thinkify's elite engineering talent.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="btn-cosmic-primary px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  Start Your Transformation
                </a>
                <a href="#" className="bg-white/10 text-white border-2 border-white/20 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300">
                  View All Case Studies
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Symmetric grid */}
      <section ref={statsRef} className="py-16 relative bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven <span className="theme-gradient-text">Results</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our track record speaks for itself - delivering quality engineering talent faster than anyone else
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { number: 15, label: "Days Average Placement", suffix: "" },
              { number: 95, label: "Technical Interview Pass Rate", suffix: "%" },
              { number: 100, label: "Zero Payment Until Delivery", suffix: "%" },
              { number: 15, label: "Years Senior Engineering Experience", suffix: "+" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold theme-gradient-text mb-2">
                  <AnimatedCounter 
                    end={stat.number} 
                    suffix={stat.suffix}
                    isInView={isInView}
                  />
                </div>
                <p className="text-gray-600 font-medium text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-20 relative bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Ready to Scale Your <span className="theme-gradient-text">Engineering Team?</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto"
          >
            Join companies like Swiggy, Flipkart, and Meesho who trust Thinkify for their critical engineering hires. 
            Zero risk, guaranteed results.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <a href="mailto:hello@thinkify.com" className="btn-cosmic-primary px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Start Your Search Today
            </a>
            <a href="tel:+1-555-THINKIFY" className="bg-white text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:theme-border-primary">
              Schedule a Call
            </a>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-50 relative overflow-hidden border-t border-gray-200">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/4 w-64 h-64 theme-bg-surface opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Newsletter Section */}
          <div className="theme-bg-surface backdrop-blur-sm theme-border-primary rounded-2xl p-8 mb-12">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Stay Ahead in Tech Hiring
              </h3>
              <p className="text-gray-600 mb-6">
                Get exclusive insights on engineering talent trends, salary benchmarks, and hiring strategies from India's top startups.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none theme-border-focus transition-colors"
                />
                <button className="btn-cosmic-primary px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-6 md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2 md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 theme-bg-primary rounded-lg flex items-center justify-center mr-3 shadow-xl">
                    <span className="text-white font-bold text-xl">T</span>
                  </div>
                  <div className="text-3xl font-bold theme-gradient-text">Thinkify</div>
                </div>
                <p className="text-gray-600 mb-6 max-w-sm leading-relaxed">
                  India's premier tech talent platform connecting elite engineers with unicorn startups and industry leaders. 
                                      <span className="theme-text-primary font-semibold"> 5000+ successful placements.</span>
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-white rounded-lg border border-gray-200 shadow-sm">
                    <div className="text-2xl font-bold theme-gradient-text">15</div>
                    <div className="text-xs text-gray-600">Avg. Days to Hire</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg border border-gray-200 shadow-sm">
                    <div className="text-2xl font-bold theme-gradient-text">95%</div>
                    <div className="text-xs text-gray-600">Success Rate</div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-3">
                  <a href="#" className="cosmic-social-link hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="cosmic-social-link hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
                    </svg>
                  </a>
                  <a href="#" className="cosmic-social-link hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </a>
                  <a href="#" className="cosmic-social-link hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>

            {/* For Companies */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">For Companies</h3>
                <ul className="space-y-3 text-cosmic-text">
                                      <li><a href="#" className="hover:theme-text-primary transition-colors flex items-center"><span className="w-1.5 h-1.5 theme-bg-primary rounded-full mr-2"></span>Hire AI/ML Engineers</a></li>
                                            <li><a href="#" className="hover:theme-text-primary transition-colors flex items-center"><span className="w-1.5 h-1.5 theme-bg-primary rounded-full mr-2"></span>DevOps Specialists</a></li>
                          <li><a href="#" className="hover:theme-text-primary transition-colors flex items-center"><span className="w-1.5 h-1.5 theme-bg-primary rounded-full mr-2"></span>Backend Engineers</a></li>
                          <li><a href="#" className="hover:theme-text-primary transition-colors flex items-center"><span className="w-1.5 h-1.5 theme-bg-primary rounded-full mr-2"></span>Frontend Engineers</a></li>
                          <li><a href="#" className="hover:theme-text-primary transition-colors flex items-center"><span className="w-1.5 h-1.5 theme-bg-primary rounded-full mr-2"></span>Data Scientists</a></li>
                          <li><a href="#" className="hover:theme-text-primary transition-colors flex items-center"><span className="w-1.5 h-1.5 theme-bg-primary rounded-full mr-2"></span>Mobile Engineers</a></li>
                </ul>
              </motion.div>
            </div>

            {/* For Developers */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-white mb-4 cosmic-glow">For Developers</h3>
                <ul className="space-y-3 text-cosmic-text">
                                            <li><a href="/developers" className="hover:theme-text-primary transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>Join Our Network</a></li>
                          <li><a href="#" className="hover:theme-text-primary transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>Remote Opportunities</a></li>
                          <li><a href="#" className="hover:theme-text-primary transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>Career Growth</a></li>
                          <li><a href="#" className="hover:theme-text-primary transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>Skill Assessment</a></li>
                          <li><a href="#" className="hover:theme-text-primary transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>Interview Prep</a></li>
                          <li><a href="#" className="hover:theme-text-primary transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>Success Stories</a></li>
                </ul>
              </motion.div>
            </div>

            {/* Resources */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-white mb-4 cosmic-glow">Resources</h3>
                <ul className="space-y-3 text-cosmic-text">
                                            <li><a href="#" className="hover:theme-text-primary transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>Tech Salary Guide</a></li>
                          <li><a href="#" className="hover:theme-text-primary transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>Hiring Playbook</a></li>
                          <li><a href="#" className="hover:theme-text-primary transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>Engineering Blog</a></li>
                          <li><a href="#" className="hover:theme-text-primary transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>Industry Reports</a></li>
                          <li><a href="#" className="hover:theme-text-primary transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>Case Studies</a></li>
                          <li><a href="#" className="hover:theme-text-primary transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>Webinars</a></li>
              </ul>
              </motion.div>
            </div>
            
            {/* Company */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-white mb-4 cosmic-glow">Company</h3>
                <ul className="space-y-3 text-cosmic-text">
                                            <li><a href="#" className="hover:theme-text-primary transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></span>About Thinkify</a></li>
                          <li><a href="#" className="hover:theme-text-primary transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></span>How It Works</a></li>
                          <li><a href="#" className="hover:theme-text-primary transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></span>Pricing</a></li>
                          <li><a href="#" className="hover:theme-text-primary transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></span>Contact Us</a></li>
                          <li><a href="#" className="hover:theme-text-primary transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></span>Careers</a></li>
                          <li><a href="#" className="hover:theme-text-primary transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></span>Press Kit</a></li>
              </ul>
              </motion.div>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="cosmic-card text-center"
            >
              <div className="w-12 h-12 theme-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <h4 className="font-semibold text-white mb-1">Email Us</h4>
              <p className="text-cosmic-text text-sm">hello@thinkify.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="cosmic-card text-center"
            >
              <div className="w-12 h-12 theme-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <h4 className="font-semibold text-white mb-1">Call Us</h4>
              <p className="text-cosmic-text text-sm">+91 98765 43210</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="cosmic-card text-center"
            >
              <div className="w-12 h-12 theme-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h4 className="font-semibold text-white mb-1">Visit Us</h4>
              <p className="text-cosmic-text text-sm">Bangalore, India</p>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-cosmic-text-dim text-sm mb-4 md:mb-0"
              >
                © 2024 Thinkify Technologies Pvt Ltd. All rights reserved. | Elite tech hiring redefined.
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex space-x-6 text-sm text-cosmic-text"
              >
                <a href="#" className="hover:theme-text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:theme-text-primary transition-colors">Terms of Service</a>
                <a href="#" className="hover:theme-text-primary transition-colors">Cookie Policy</a>
              </motion.div>
            </div>
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

