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

      {/* Hero Section - Airbnb Style */}
      <section className="pt-28 pb-16 relative overflow-hidden bg-white">
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
            className="font-display text-5xl md:text-7xl mb-8 pb-8 theme-text-body text-balance leading-[1.15]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hire {' '}
            <span className="theme-gradient-text">
              Thoughtfully
            </span>
            <br />
            <span className="theme-text-body">Scale </span>{' '}
            <span className="theme-gradient-text">Instantly</span>
          </motion.h1>
          
          <motion.p 
            className="font-body text-xl theme-text-muted mb-12 max-w-4xl mx-auto text-balance leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            With Thinkify, get vetted talent on-demand. Experience the 
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
      <section className="py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 backdrop-blur-md border theme-border-primary shadow-lg mb-8">
                <div className="text-xl"></div>
                <span className="font-semibold theme-text-primary">The Old Way is Broken</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold theme-text-body mb-8 leading-tight">
                6 months to hire one{' '}
                <span className="text-red-600">
                  person?
                </span>
                <br />
                <span className="text-2xl theme-text-muted">
                  Are you serious?
                </span>
              </h2>
              
              <div className="space-y-6 text-lg theme-text-muted leading-relaxed">
                <p>
                  <strong>Picture this:</strong> Your competitor just launched a killer feature. Your CEO is breathing down your neck. 
                  Your current team is drowning. What do you do?
                </p>
                <p>
                  <strong>Traditional approach:</strong> Post on LinkedIn, wait for resumes, interview 47 people, negotiate for weeks, 
                  onboard for a month... <strong className="text-red-600">and by then, the opportunity is gone.</strong>
                </p>
                <p className="text-xl font-semibold theme-text-primary">
                  Meanwhile, your competitor? They scaled their team overnight.
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
                  <div className="font-bold text-xl theme-text-body">Traditional Hiring Reality</div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-red-50 rounded-xl border border-red-200">
                    <div>
                      <div className="font-semibold text-red-700">Week 1-8: Job Posting</div>
                      <div className="text-sm text-red-600">"We need 5+ years experience in tech that's 2 years old"</div>
                    </div>
                    <div className="text-2xl">📝</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                    <div>
                      <div className="font-semibold text-yellow-700">Week 9-16: Interview Hell</div>
                      <div className="text-sm text-yellow-600">"Can you invert a binary tree on a whiteboard?"</div>
                    </div>
    
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl border border-purple-200">
                    <div>
                      <div className="font-semibold text-purple-700">Week 17-24: Negotiations</div>
                      <div className="text-sm text-purple-600">"Actually, I want more money and a pony"</div>
                    </div>
                    <div className="text-2xl">💸</div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <div>
                      <div className="font-semibold text-gray-700">Month 6: They Start</div>
                      <div className="text-sm text-gray-600">"So... what was that urgent project again?"</div>
                    </div>
                    <div className="text-2xl">🤷‍♂️</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section 2: The Solution - Airbnb Style */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 shadow-2xl border border-green-100">
                <div className="text-center mb-6">
  
                  <div className="font-bold text-xl theme-text-body">The Thinkify Way</div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-200">
                    <div>
                      <div className="font-semibold text-green-700">Monday: Tell Us What You Need</div>
                      <div className="text-sm text-green-600">"I need a React wizard, ASAP!"</div>
                    </div>
                    <div className="text-2xl">💬</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <div>
                      <div className="font-semibold text-blue-700">Tuesday: Meet Your Perfect Match</div>
                      <div className="text-sm text-blue-600">"This is Sarah, she built Netflix's recommendation engine"</div>
                    </div>
  
                  </div>
                  
                  <div className="flex items-center justify-between p-4 theme-bg-primary-10 rounded-xl border theme-border-primary">
                    <div>
                      <div className="font-semibold theme-text-primary">Wednesday: They're Coding</div>
                      <div className="text-sm theme-text-primary">"Already deployed the MVP, what's next?"</div>
                    </div>
  
                  </div>

                  <div className="text-center p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                    <div className="font-bold text-yellow-700 text-lg">Total Time: 72 Hours</div>
                    <div className="text-sm text-yellow-600">vs. 6 months of traditional hiring</div>
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
                What if hiring was as{' '}
                <span className="theme-gradient-text">
                  easy
                </span>
                {' '}as ordering an Uber?
              </h2>
              
              <div className="space-y-6 text-lg theme-text-muted leading-relaxed">
                <p>
                  <strong>Imagine this:</strong> You open an app, describe what you need, and boom—a vetted, 
                  world-class engineer joins your Slack within 72 hours.
                </p>
                <p>
                  No interviews. No negotiations. No office politics. Just pure, concentrated brilliance 
                  delivered to your door... er, Zoom room.
                </p>
                <p>
                  <strong>Best part?</strong> Project done? Scale down instantly. New urgent feature? 
                  Scale up overnight. It's like having a team of superheroes on speed dial.
                </p>
                <p className="text-xl font-bold theme-text-primary">
                  "But wait, there's more!" 📺 (Sorry, couldn't resist)
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Revolutionary How We Deliver Section */}
      <section id="how-it-works" className="py-32 bg-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-30">
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
                icon: '🧠',
                gradient: 'from-blue-500 to-cyan-500',
                stats: { value: '95%', label: 'Match Accuracy' }
              },
              {
                step: "02",
                title: "Expert Human Vetting",
                subtitle: "Senior engineer validation",
                description: "Industry veterans with 15+ years of experience conduct rigorous technical interviews, system design challenges, and comprehensive code reviews to ensure only elite talent passes through.",
                features: ['15+ years experience', 'Technical deep-dives', 'System design tests', 'Code review process'],
                gradient: 'from-indigo-500 to-purple-500',
                stats: { value: '15%', label: 'Pass Rate' }
              },
              {
                step: "03",
                title: "Quality Guarantee",
                subtitle: "Risk-free delivery promise",
                description: "Zero payment until successful placement with our iron-clad guarantee. We deliver in 15 days average vs industry standard of 45+ days, with 30-day replacement warranty.",
                features: ['Zero upfront payment', '15-day average delivery', '30-day replacement', '99% success rate'],
                gradient: 'from-yellow-500 to-orange-500',
                stats: { value: '0%', label: 'Risk to You' }
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden hover:bg-white/10"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-500" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-6 left-6 w-8 h-8 theme-bg-secondary/20 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-500" style={{ animationDelay: '1s' }}></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center text-3xl shadow-lg`}>
                      </div>
                      <div className="text-6xl font-bold theme-text-muted/20 group-hover:theme-text-muted/30 transition-colors duration-300">
                        {item.step}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold theme-text-primary">{item.stats.value}</div>
                      <div className="text-xs theme-text-muted">{item.stats.label}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold theme-text-body mb-2">{item.title}</h3>
                  <p className="text-sm font-medium theme-text-primary mb-4">{item.subtitle}</p>
                  <p className="theme-text-muted mb-6 leading-relaxed">{item.description}</p>

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
                        <span className="text-sm theme-text-muted">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Progress Indicator */}
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="text-xs theme-text-muted">Step {item.step}</span>
                      <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20 shadow-2xl max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold theme-text-body mb-6">The Thinkify Advantage</h3>
              <p className="theme-text-muted mb-8 text-lg">
                While others take 45+ days with 60% success rates, we deliver in 15 days with 95% accuracy. 
                Experience the difference of true engineering excellence.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { metric: '72hrs', label: 'First Candidates' },
                  { metric: '15 days', label: 'Average Delivery' },
                  { metric: '95%', label: 'Success Rate' },
                  { metric: '0%', label: 'Upfront Cost' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold theme-text-body mb-1">{item.metric}</div>
                    <div className="text-xs theme-text-muted">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

            {/* Revolutionary Elite Tech Talent Section */}
      <section id="talent" className="py-32 relative bg-gradient-to-br from-slate-50 via-white to-gray-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-60">
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
                      
                      {/* Enhanced Stats Grid */}
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="bg-white/60 rounded-xl p-4 text-center border theme-border-surface">
                          <div className="text-2xl font-bold theme-gradient-text mb-1">{profile.experience.split(' ')[0]}+</div>
                          <div className="text-xs theme-text-muted font-medium">Years Experience</div>
                        </div>
                        <div className="bg-white/60 rounded-xl p-4 text-center border theme-border-surface">
                          <div className="text-2xl font-bold theme-text-secondary mb-1">95%</div>
                          <div className="text-xs theme-text-muted font-medium">Success Rate</div>
                        </div>
                      </div>
                      
                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {['React', 'Node.js', 'Python', 'AWS'].map((skill, skillIndex) => (
                          <span 
                            key={skill} 
                            className="px-3 py-1 theme-bg-surface theme-text-muted rounded-lg text-xs font-medium"
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
                  title: 'Lightning Fast',
                  description: '72-hour delivery guarantee vs 45+ days industry standard',
                  color: 'from-yellow-500 to-orange-500',
                  metric: '15x'
                },
                {
                  title: 'Perfect Match',
                  description: 'AI-powered matching with 95% technical interview pass rate',
                  color: 'from-blue-500 to-purple-500',
                  metric: '95%'
                },
                {
                  title: 'Zero Risk',
                  description: 'No payment until successful placement and 30-day guarantee',
                  color: 'from-green-500 to-teal-500',
                  metric: '0%'
                },
                {
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
      <section id="success" className="py-32 relative bg-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
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
                <Link href="#" className="bg-white theme-text-primary border-2 theme-border-primary px-8 py-4 rounded-xl font-semibold text-lg hover:theme-bg-primary hover:theme-text-body transition-all duration-300">
                  View All Case Studies
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Revolutionary Proven Results Section */}
      <section ref={statsRef} className="py-32 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-40">
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
                label: "Technical Interview Pass Rate", 
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
      <section id="contact" className="py-32 bg-white relative overflow-hidden">
        {/* Advanced Background Effects */}
        <div className="absolute inset-0 opacity-40">
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
              <span className="theme-gradient-text">Engineering</span>
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
                  { metric: '$2.5M+', label: 'Total Salaries Negotiated' }
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

      {/* Revolutionary Modern Footer */}
      <footer className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-50">
        {/* Sophisticated Background Pattern */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(56, 189, 248, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.08) 0%, transparent 50%)
            `
          }}></div>
        </div>

        {/* Elegant Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 border border-blue-200/30 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-purple-200/30 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-emerald-200/30 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
                    {/* Elite Engineering Intelligence Hub */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative mb-20"
          >
            <div className="relative bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-emerald-50/50 rounded-3xl"></div>
              
              <div className="relative z-10 text-center max-w-4xl mx-auto">
                {/* Elegant Icon */}
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-xl">
                                              <svg className="w-10 h-10 theme-text-body" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 theme-text-body" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                <h3 className="text-4xl md:text-5xl font-bold theme-text-body mb-6 leading-tight">
                  Join the Elite Engineering 
                  <span className="block theme-text-primary">
                    Intelligence Network
                  </span>
                </h3>
                
                <p className="text-xl theme-text-muted mb-10 leading-relaxed max-w-3xl mx-auto">
                  Get exclusive access to cutting-edge insights, salary benchmarks, and engineering leadership intelligence 
                  from India's top unicorn ecosystem. Join 15,000+ senior engineers and CTOs.
                </p>

                {/* Enhanced Email Form */}
                <div className="bg-gray-50 rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                      <input
                        type="email"
                        placeholder="Enter your professional email"
                        className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl theme-text-body placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                      </div>
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                                              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 theme-text-body rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
                    >
                      Get Elite Access
                    </motion.button>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div className="flex items-center justify-center gap-3 p-4 bg-white rounded-xl border border-gray-100">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold theme-text-body">15,000+ Engineers</div>
                      <div className="theme-text-muted">Active community</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center gap-3 p-4 bg-white rounded-xl border border-gray-100">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold theme-text-body">Weekly Reports</div>
                      <div className="theme-text-muted">Market insights</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center gap-3 p-4 bg-white rounded-xl border border-gray-100">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold theme-text-body">100% Free</div>
                      <div className="theme-text-muted">Always free access</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Revolutionary Footer Navigation Matrix */}
          <div className="grid lg:grid-cols-6 md:grid-cols-4 gap-8 mb-16">
            {/* Elite Brand Portal */}
            <div className="lg:col-span-2 md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Modern Brand Section */}
                <div className="relative mb-8">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg mr-4">
                        <svg className="w-7 h-7 theme-text-body" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="text-3xl font-bold theme-text-body mb-1">
                          Thinkify
                        </div>
                        <div className="text-sm theme-text-primary font-semibold">
                          Elite Engineering Network
                        </div>
                      </div>
                    </div>
                    <p className="theme-text-muted leading-relaxed text-sm">
                      India's premier technology talent ecosystem, connecting exceptional AI/ML engineers and full-stack developers 
                      with unicorn startups and Fortune 500 companies. Transforming careers, scaling teams.
                    </p>
                  </div>
                </div>
                
                {/* Performance Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-100 text-center"
                  >
                    <div className="text-3xl font-bold text-emerald-600 mb-1">72h</div>
                    <div className="text-sm theme-text-muted">Elite Deployment</div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 text-center"
                  >
                    <div className="text-3xl font-bold text-blue-600 mb-1">98%</div>
                    <div className="text-sm theme-text-muted">Success Rate</div>
                  </motion.div>
                </div>

                {/* Elite Social Network */}
                <div className="flex space-x-4">
                  {[
                    { icon: "M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z", gradient: "from-blue-500 to-blue-600" },
                    { icon: "M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84", gradient: "from-cyan-500 to-cyan-600" },
                    { icon: "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z", gradient: "from-purple-500 to-purple-600" },
                    { icon: "M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z", gradient: "from-pink-500 to-pink-600" }
                  ].map((social, index) => (
                    <motion.a 
                      key={index}
                      href="#" 
                      whileHover={{ scale: 1.2, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      className="relative group"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${social.gradient} rounded-lg blur-lg opacity-0 group-hover:opacity-50 transition-all duration-300`}></div>
                      <div className={`relative w-12 h-12 bg-gradient-to-r ${social.gradient} rounded-lg flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300`}>
                        <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d={social.icon} clipRule="evenodd" />
                        </svg>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Elite Corporate Portal */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl blur-lg"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold theme-text-body">For Enterprises</h3>
                    </div>
                    <p className="theme-text-muted text-sm">Elite talent acquisition solutions</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    { name: "Hire AI/ML Engineers" },
                    { name: "DevOps Specialists" },
                    { name: "Backend Engineers" },
                    { name: "Frontend Engineers" },
                    { name: "Data Scientists" },
                    { name: "Mobile Engineers" }
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      whileHover={{ x: 5 }}
                      className="group"
                    >
                      <Link href="https://connect.thinkify.io" className="flex items-center theme-text-muted hover:theme-text-primary transition-all duration-300 group-hover:bg-white/5 rounded-lg p-2">
                        <span className="flex-1">{item.name}</span>
                        <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                        </svg>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Elite Developer Network */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl blur-lg"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 theme-text-body" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold theme-text-primary">For Developers</h3>
                    </div>
                    <p className="theme-text-muted text-sm">Elite engineering collective</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    { name: "Join Elite Network", href: "/developers" },
                    { name: "Remote Opportunities" },
                    { name: "Career Acceleration" },
                    { name: "Skill Assessment" },
                    { name: "Interview Mastery" },
                    { name: "Success Stories" }
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      whileHover={{ x: 5 }}
                      className="group"
                    >
                      <Link href={item.href || "#"} className="flex items-center theme-text-muted hover:theme-text-primary transition-all duration-300 group-hover:bg-white/5 rounded-lg p-2">
                        <span className="flex-1">{item.name}</span>
                        <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                        </svg>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Intelligence Hub */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl blur-lg"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 theme-text-body" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold theme-text-secondary">Intelligence Hub</h3>
                    </div>
                    <p className="theme-text-muted text-sm">Industry insights & resources</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    { name: "Tech Salary Intelligence" },
                    { name: "Elite Hiring Playbook" },
                    { name: "Engineering Intelligence" },
                    { name: "Market Research" },
                    { name: "Success Case Studies" },
                    { name: "Expert Webinars" }
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      whileHover={{ x: 5 }}
                      className="group"
                    >
                      <Link href="https://connect.thinkify.io" className="flex items-center theme-text-muted hover:theme-text-primary transition-all duration-300 group-hover:bg-white/5 rounded-lg p-2">
                        <span className="flex-1">{item.name}</span>
                        <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                        </svg>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
            
            {/* Company Universe */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur-lg"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 theme-text-body" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"/>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold theme-text-accent">Company</h3>
                    </div>
                    <p className="theme-text-muted text-sm">About our mission & values</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    { name: "Our Mission" },
                    { name: "How We Work" },
                    { name: "Investment Plans" },
                    { name: "Contact Elite Team" },
                    { name: "Join Our Team" },
                    { name: "Media Resources" }
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      whileHover={{ x: 5 }}
                      className="group"
                    >
                      <Link href="https://connect.thinkify.io" className="flex items-center theme-text-muted hover:theme-text-primary transition-all duration-300 group-hover:bg-white/5 rounded-lg p-2">
                        <span className="flex-1">{item.name}</span>
                        <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                        </svg>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
          
          {/* Elite Contact Matrix */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                title: "Elite Communication",
                subtitle: "Direct access to our leadership team",
                value: "kulkarni.karthik@thinkify.io",
                gradient: "from-blue-500 to-cyan-500",
                delay: 0.1
              },
              {
                icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                title: "Strategic Consultations",
                subtitle: "Expert guidance for scale-up success",
                value: "+91 98765 43210",
                gradient: "from-purple-500 to-pink-500",
                delay: 0.2
              },
              {
                icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                title: "Innovation Hub",
                subtitle: "India's tech talent epicenter",
                value: "Bangalore, India",
                gradient: "from-green-500 to-emerald-500",
                delay: 0.3
              }
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: contact.delay }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${contact.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all duration-500`}></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center group-hover:border-white/30 transition-all duration-500 group-hover:transform group-hover:scale-105">
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-r ${contact.gradient} rounded-2xl blur-lg animate-pulse opacity-50`}></div>
                    <div className={`relative w-16 h-16 bg-gradient-to-r ${contact.gradient} rounded-2xl flex items-center justify-center mx-auto shadow-2xl`}>
                      <svg className="w-8 h-8 theme-text-body" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={contact.icon}/>
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold mb-2 theme-text-primary">
                    {contact.title}
                  </h4>
                  <p className="theme-text-muted text-sm mb-4 leading-relaxed">{contact.subtitle}</p>
                  <p className="theme-text-primary font-semibold text-lg">{contact.value}</p>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 theme-bg-primary/50 rounded-full animate-ping"></div>
                  <div className="absolute bottom-4 left-4 w-1.5 h-1.5 theme-bg-primary/50 rounded-full animate-pulse"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Elite Foundation */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-t-3xl"></div>
            <div className="relative border-t border-white/20 pt-12">
              <div className="flex flex-col lg:flex-row justify-between items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center lg:text-left mb-8 lg:mb-0"
                >
                  <div className="theme-text-muted text-sm mb-2">
                    © 2024 Thinkify Technologies Pvt Ltd. All rights reserved.
                  </div>
                  <div className="theme-text-muted font-semibold text-sm">
                    Redefining Elite Tech Talent Acquisition | Powered by Innovation
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap justify-center lg:justify-end gap-6"
                >
                  {[
                    { name: "Privacy Policy", gradient: "from-blue-400 to-cyan-400" },
                    { name: "Terms of Service", gradient: "from-purple-400 to-pink-400" },
                    { name: "Security", gradient: "from-green-400 to-emerald-400" },
                    { name: "GDPR Compliance", gradient: "from-orange-400 to-red-400" }
                  ].map((link, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="relative group"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${link.gradient} opacity-0 group-hover:opacity-20 rounded-lg blur-sm transition-all duration-300`}></div>
                      <div className="relative theme-text-muted hover:theme-text-primary text-sm font-medium transition-colors duration-300 px-3 py-2 rounded-lg group-hover:bg-white/5">
                        {link.name}
                      </div>
                    </motion.a>
                  ))}
                </motion.div>
              </div>
              
              {/* Elite Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center mt-12 pt-8 border-t border-white/10"
              >
                <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 theme-text-body" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                    </svg>
                  </div>
                  <span className="theme-text-primary font-bold text-sm">
                    Certified Elite Talent Platform
                  </span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
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

