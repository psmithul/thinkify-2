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
            className="text-5xl md:text-7xl font-bold mb-8 text-gray-900"
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
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How We <span className="theme-gradient-text">Deliver</span>
            </h2>
                          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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

      {/* Elite Tech Talent Section - Perfect Symmetry */}
      <section id="talent" className="py-20 relative bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Elite <span className="theme-gradient-text">Tech Talent</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Scale your team dynamically with elastic hiring - add or reduce engineers as needed
            </p>
          </div>

          {/* Revolutionary Talent Showcase */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Featured Talent Cards */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-6">
                {profiles.map((profile, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                  >
                    {/* Background Gradient */}
                    <div className="absolute inset-0 theme-bg-surface opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Profile Content */}
                    <div className="relative z-10">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-16 h-16 rounded-2xl overflow-hidden ring-4 ring-purple-100 group-hover:ring-purple-200 transition-all duration-300">
                      <img
                        src={profile.image}
                        alt={profile.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 group-hover:theme-text-primary transition-colors">{profile.name}</h3>
                          <p className="text-gray-600 font-medium">{profile.role}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-500">Experience</span>
                          <span className="text-sm font-semibold text-gray-900">{profile.experience}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-500">Company</span>
                          <span className="text-sm font-semibold theme-gradient-text">{profile.company}</span>
                        </div>
                      </div>
                      
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <button className="w-full btn-cosmic-primary py-3 px-6 rounded-xl font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          View Profile
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Key Features Sidebar */}
            <div className="space-y-6">
              {[
                {
                  icon: '🚀',
                  title: 'Fast Placement',
                  description: '15-day average delivery vs 45+ days industry standard'
                },
                {
                  icon: '📈',
                  title: 'Elastic Scaling',
                  description: 'Scale your team up or down instantly based on project needs'
                },
                {
                  icon: '⚡',
                  title: 'Elastic Hiring',
                  description: 'Pay only for what you need - flexible team sizing with zero contracts'
                },
                {
                  icon: '💎',
                  title: 'Zero Risk',
                  description: 'No payment until successful placement'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="pt-4"
              >
                <a href="#contact" className="block w-full btn-cosmic-primary px-6 py-4 rounded-xl font-semibold text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Hire Elite Talent Now
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section - Symmetric grid */}
      <section id="success" className="py-20 relative bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Success <span className="theme-gradient-text">Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from companies who chose Thinkify for their critical engineering hires
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                company: "Swiggy",
                result: "15 Engineers in 20 Days",
                description: "Scaled their ML platform team to handle 10M+ daily orders during peak season",
                metric: "3x faster than traditional hiring"
              },
              {
                company: "Flipkart", 
                result: "Critical DevOps Role Filled",
                description: "Senior infrastructure engineer onboarded in 10 days for marketplace scaling",
                metric: "Zero deployment issues since hire"
              },
              {
                company: "Meesho",
                result: "Backend Team Expansion",
                description: "Added 5 senior engineers to optimize their social commerce platform",
                metric: "40% improvement in API response times"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-bold theme-gradient-text mb-2">{story.company}</h3>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{story.result}</h4>
                <p className="text-gray-600 mb-3 text-sm">{story.description}</p>
                <div className="text-xs font-medium text-white theme-bg-primary rounded-full px-3 py-1 inline-block">
                  {story.metric}
                </div>
              </motion.div>
            ))}
          </div>
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
            <a href="tel:+1-555-THINKIFY" className="bg-white text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-purple-300">
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
                  <li><a href="#" className="hover:text-purple-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>DevOps Specialists</a></li>
                  <li><a href="#" className="hover:text-purple-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>Backend Engineers</a></li>
                  <li><a href="#" className="hover:text-purple-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>Frontend Engineers</a></li>
                  <li><a href="#" className="hover:text-purple-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>Data Scientists</a></li>
                  <li><a href="#" className="hover:text-purple-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>Mobile Engineers</a></li>
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
                  <li><a href="/developers" className="hover:text-purple-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>Join Our Network</a></li>
                  <li><a href="#" className="hover:text-purple-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>Remote Opportunities</a></li>
                  <li><a href="#" className="hover:text-purple-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>Career Growth</a></li>
                  <li><a href="#" className="hover:text-purple-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>Skill Assessment</a></li>
                  <li><a href="#" className="hover:text-purple-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>Interview Prep</a></li>
                  <li><a href="#" className="hover:text-purple-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>Success Stories</a></li>
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
                  <li><a href="#" className="hover:text-purple-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>Tech Salary Guide</a></li>
                  <li><a href="#" className="hover:text-purple-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>Hiring Playbook</a></li>
                  <li><a href="#" className="hover:text-purple-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>Engineering Blog</a></li>
                  <li><a href="#" className="hover:text-purple-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>Industry Reports</a></li>
                  <li><a href="#" className="hover:text-purple-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>Case Studies</a></li>
                  <li><a href="#" className="hover:text-purple-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>Webinars</a></li>
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
                  <li><a href="#" className="hover:text-purple-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></span>About Thinkify</a></li>
                  <li><a href="#" className="hover:text-purple-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></span>How It Works</a></li>
                  <li><a href="#" className="hover:text-purple-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></span>Pricing</a></li>
                  <li><a href="#" className="hover:text-purple-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></span>Contact Us</a></li>
                  <li><a href="#" className="hover:text-purple-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></span>Careers</a></li>
                  <li><a href="#" className="hover:text-purple-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></span>Press Kit</a></li>
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
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3">
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
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3">
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
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3">
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
                <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-purple-400 transition-colors">Cookie Policy</a>
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
