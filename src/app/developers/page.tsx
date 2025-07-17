'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import CompanyCarousel from '@/components/CompanyCarousel';
import CompanyCarouselMini from '@/components/CompanyCarouselMini';
import { useTheme } from '@/contexts/ThemeContext';
import { CheckIcon, StarIcon, ArrowRightIcon, PlayIcon, SparklesIcon, RocketLaunchIcon, BoltIcon, TrophyIcon, UserGroupIcon, CurrencyDollarIcon, ChartBarIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export default function DevelopersPage() {
  const heroRef = useRef<HTMLElement>(null);
  const alumnisRef = useRef<HTMLElement>(null);
  const problemRef = useRef<HTMLElement>(null);
  const solutionRef = useRef<HTMLElement>(null);
  const workRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  const heroInView = useInView(heroRef, { once: true });
  const alumnisInView = useInView(alumnisRef, { once: true });
  const problemInView = useInView(problemRef, { once: true });
  const solutionInView = useInView(solutionRef, { once: true });
  const workInView = useInView(workRef, { once: true });
  const testimonialsInView = useInView(testimonialsRef, { once: true });

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ThemeSwitcher />
      
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative flex items-center justify-center bg-white overflow-hidden pt-20 pb-8"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border theme-border-primary shadow-lg mb-8">
                <span className="font-semibold theme-text-primary">Your Career, But Actually Good</span>
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-display text-5xl md:text-7xl text-black leading-tight mb-8 text-balance"
            >
              Stop applying to{' '}
              <span className="theme-gradient-text">
                300 jobs
              </span>
              <br />
              Start getting{' '}
              <span className="theme-gradient-text">
                offers
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="font-body text-xl theme-text-muted max-w-3xl mx-auto mb-8 text-balance"
            >
              Remember when dating apps changed everything? <strong className="theme-text-primary">We're doing that for tech careers.</strong> 
              Skip the soul-crushing job hunt. Companies compete for YOU. Work on your terms. 
              Get paid what you're actually worth.
            </motion.p>

            {/* Work with Top Companies */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="mb-12"
            >
              <CompanyCarousel 
                title="These Companies Want to Hire You"
                subtitle="They're all on Thinkify, actively looking for talent like yours"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <Link href="#contact">
                <motion.button
                  className="btn-cosmic-primary px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('https://connect.thinkify.io', '_blank', 'noopener,noreferrer')}
                >
                  Join the Elite Squad
                  <ArrowRightIcon className="w-5 h-5 ml-2 inline-block" />
                </motion.button>
              </Link>
            </motion.div>
          </div>


        </div>
      </motion.section>

      {/* Revolutionary Alumni Showcase */}
      <motion.section
        ref={alumnisRef}
        className="py-32 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden"
      >
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 theme-bg-primary opacity-5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 theme-bg-secondary opacity-5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 theme-bg-accent opacity-3 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={alumnisInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
                         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border theme-border-primary shadow-lg mb-8">
               <span className="dm-serif-text-regular theme-text-primary font-medium">Plot Twist Stories</span>
             </div>
            
            <h2 className="dm-serif-text-regular text-5xl md:text-7xl theme-text-body mb-8 leading-tight">
              From{' '}
              <span className="text-red-600">rejected</span>
              {' '}to{' '}
              <span className="theme-gradient-text">recruited</span>
            </h2>
            
            <p className="font-body text-xl theme-text-muted max-w-4xl mx-auto text-balance leading-relaxed">
              These developers were getting ghosted by HR departments and failing whiteboard interviews. 
              <strong className="theme-text-primary"> Now they're the ones saying no to job offers.</strong> 
              Here's how they flipped the script.
            </p>
          </motion.div>



          {/* Alumni Spotlight Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {/* Featured Story */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={alumnisInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="lg:col-span-2"
            >
                             <div className="bg-white rounded-3xl p-8 relative overflow-hidden h-full border theme-border-surface shadow-xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 rounded-2xl overflow-hidden ring-4 ring-white/30">
                        <img 
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" 
                          alt="Yash Pandit"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="dm-serif-text-regular text-2xl mb-1">Yash Pandit</h3>
                        <p className="theme-text-muted">Senior Research Engineer</p>
                        <p className="theme-text-primary font-semibold">@ Google</p>
                      </div>
                    </div>
                    
                  </div>
                  
                  <blockquote className="dm-serif-text-regular-italic text-xl mb-6 leading-relaxed theme-text-body">
                    "I was getting rejected by startups for 'lack of experience.' Six months later, 
                    Google was sliding into my DMs. Thinkify didn't just change my career—it gave me superpowers."
                  </blockquote>
                  
                                      <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                      
                      <div className="bg-blue-50 rounded-xl px-4 py-2 border border-blue-200">
                        <div className="text-sm text-blue-600">Time to Big Tech</div>
                        <div className="font-bold text-blue-700">4 months</div>
                      </div>
                    </div>
                    <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                      Read Epic Journey
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Success Metrics */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={alumnisInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              {[
                { name: 'Jyotendra S.', company: 'Microsoft', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face' },
                { name: 'Rushikesh A.', company: 'Stripe', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face' },
                { name: 'Sumit D.', company: 'Netflix', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop&crop=face' }
              ].map((alumni, index) => (
                <motion.div
                  key={alumni.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={alumnisInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-white/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                                         <div className="w-14 h-14 rounded-xl overflow-hidden ring-2 ring-gray-100 group-hover:ring-gray-200 transition-all">
                      <img src={alumni.image} alt={alumni.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="flex-1">
                      <h4 className="dm-serif-text-regular text-lg theme-text-body mb-1">{alumni.name}</h4>
                      <p className="text-sm theme-text-muted">@ {alumni.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={alumnisInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                className="w-full bg-white border-2 theme-border-primary theme-text-primary py-4 px-6 rounded-2xl font-semibold hover:theme-bg-primary hover:theme-text-body transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                onClick={() => window.open('https://connect.thinkify.io', '_blank', 'noopener,noreferrer')}
              >
                View All Success Stories
                <ArrowRightIcon className="w-5 h-5 ml-2 inline-block" />
              </motion.button>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={alumnisInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
                         <div className="bg-white rounded-3xl p-12 border theme-border-surface shadow-xl relative overflow-hidden max-w-4xl mx-auto">
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-8 left-8 w-24 h-24 border-2 border-white rounded-full"></div>
                <div className="absolute bottom-8 right-8 w-32 h-32 border-2 border-white rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="dm-serif-text-regular text-4xl mb-6 theme-text-body">Ready to Flip the Script?</h3>
                <p className="text-xl theme-text-muted mb-8 max-w-2xl mx-auto">
                  <strong>800+ developers</strong> have already escaped the traditional job hunt. 
                  They're getting multiple offers, working remotely, and actually enjoying their careers. 
                  <strong className="theme-text-primary">Your turn.</strong>
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-cosmic-primary px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => window.open('https://connect.thinkify.io', '_blank', 'noopener,noreferrer')}
                  >
                    Join the Revolution
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 theme-border-primary theme-text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:theme-bg-primary hover:theme-text-body transition-all duration-300"
                    onClick={() => window.open('https://connect.thinkify.io', '_blank', 'noopener,noreferrer')}
                  >
                    See If You Qualify
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>



      {/* Revolutionary Problem Section - "Finding it impossible to stand out" */}
      <motion.section
        ref={problemRef}
        className="py-32 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 left-20 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={problemInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-red-200 shadow-lg mb-8">
              <span className="font-semibold text-red-700">The Job Hunt Reality Check</span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={problemInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-7xl font-bold theme-text-body mb-8 leading-tight">
                Tired of being{' '}
                <span className="text-red-600 font-extrabold">ghost</span>
                <span className="text-red-600 font-extrabold">ed</span>
                <br />
                <span className="theme-text-body">by recruiters?</span>
                <br />
                <span className="text-2xl theme-text-muted">
                  Join the club.
                </span>
              </h2>
              
              <p className="text-xl theme-text-muted mb-8 leading-relaxed">
                <strong>Plot twist:</strong> What if instead of chasing jobs, they chased YOU? 
                What if you could pick and choose from offers that actually matter?
              </p>

              <div className="space-y-6">
                {[
                  { text: 'Companies fighting over YOU (not the other way around)', color: 'from-blue-500 to-purple-500' },
                  { text: 'Work from your couch, a beach, or Mars (we don\'t judge)', color: 'from-green-500 to-teal-500' },
                  { text: 'Actually challenging problems (not just "make the logo bigger")', color: 'from-purple-500 to-pink-500' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={problemInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                    className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-lg hover:shadow-xl transition-all duration-500"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                    <div className="relative z-10 flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center text-2xl shadow-lg`}>
                      </div>
                      <span className="text-lg theme-text-body font-semibold">{item.text}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={problemInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Pain Points Grid */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={problemInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="bg-red-100 border-2 border-red-300 rounded-2xl p-6 text-center relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-red-200/50 to-red-300/30"></div>
                      <div className="relative z-10">
                        <div className="text-3xl mb-3">🔒</div>
                        <div className="text-sm font-bold text-red-800">No Autonomy</div>
                        <div className="text-xs text-red-600 mt-2">Micromanaged daily</div>
                      </div>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={problemInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className="bg-orange-100 border-2 border-orange-300 rounded-2xl p-6 text-center relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-200/50 to-orange-300/30"></div>
                      <div className="relative z-10">
                        <div className="text-3xl mb-3">⏰</div>
                        <div className="text-sm font-bold text-orange-800">No Flexibility</div>
                        <div className="text-xs text-orange-600 mt-2">9-5 prison</div>
                      </div>
                    </motion.div>
                  </div>
                  <div className="space-y-6 mt-8">
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={problemInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.9 }}
                      className="bg-yellow-100 border-2 border-yellow-300 rounded-2xl p-6 text-center relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/50 to-yellow-300/30"></div>
                      <div className="relative z-10">
                        <div className="text-3xl mb-3">🏗️</div>
                        <div className="text-sm font-bold text-yellow-800">Limited Resources</div>
                        <div className="text-xs text-yellow-600 mt-2">Outdated tech stack</div>
                      </div>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={problemInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: 1.1 }}
                      className="theme-bg-surface border-2 theme-border-surface rounded-2xl p-6 text-center relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-200/50 to-gray-300/30"></div>
                      <div className="relative z-10">
                        <div className="text-3xl mb-3">📉</div>
                        <div className="text-sm font-bold theme-text-body">Career Stagnation</div>
                        <div className="text-xs theme-text-muted mt-2">No growth path</div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Frustrated Developer Image */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={problemInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="absolute -top-8 -right-8 w-40 h-40 rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=200&h=200&fit=crop&crop=face" 
                    alt="Frustrated developer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </motion.div>

                {/* Floating Pain Indicators */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={problemInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.3 }}
                  className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-red-200"
                >
                  <div className="text-xs font-bold text-red-700">Rejection Rate</div>
                  <div className="text-2xl font-bold text-red-600">89%</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Revolutionary Solution Section - "What if such a platform exists?" */}
      <motion.section
        ref={solutionRef}
        className="py-32 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-20 right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={solutionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-emerald-200 shadow-lg mb-8">
              <span className="font-semibold text-emerald-700">Plot Twist: It Does!</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold theme-text-body mb-8 leading-tight">
              Meet your{' '}
              <span className="theme-text-primary font-bold">career</span>
              <br />
              <span className="theme-text-primary font-bold">wingman</span>
              <span className="text-2xl theme-text-muted">
                <br />(But for jobs, not dating)
              </span>
            </h2>
            
            <p className="text-xl theme-text-muted max-w-4xl mx-auto leading-relaxed mb-8">
              <strong>Here's the deal:</strong> We don't just find you jobs—we turn you into the developer 
              companies fight over. Interview coaching? ✓ Salary negotiation? ✓ Making you look like a rockstar? ✓ 
              <strong className="theme-text-primary">All completely free.</strong> (Yes, really.)
            </p>

            <div className="flex flex-wrap justify-center gap-3 text-sm">
              {['100% Free Platform', 'Career Coaching', 'Salary Negotiation', 'Interview Mastery', 'Perfect Job Matching'].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={solutionInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-emerald-200 font-medium text-emerald-700"
                >
                  {feature}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Solution Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'Perfect Job Matching',
                subtitle: 'AI-powered precision',
                description: 'Our advanced algorithms analyze 500+ data points to match you with companies that align perfectly with your skills, values, and career aspirations.',
                color: 'from-blue-500 to-purple-500',
                features: ['Skills alignment', 'Culture fit analysis', 'Career path mapping', 'Salary benchmarking'],
                stats: { value: '95%', label: 'Match Accuracy' }
              },
              {
                title: 'Accelerated Hiring',
                subtitle: '3x faster than traditional methods',
                description: 'Skip the endless applications and waiting. Our proven process connects you directly with hiring managers actively seeking your expertise.',
                color: 'from-emerald-500 to-teal-500',
                features: ['Direct hiring manager access', 'Fast-track interviews', 'Skip initial screenings', 'Priority consideration'],
                stats: { value: '21', label: 'Days Average' }
              },
              {
                title: 'Elite Negotiation Support',
                subtitle: 'Maximize your opportunity impact',
                description: 'Our expert negotiators secure roles with strategic alignment to your goals. We advocate for your next big leap — not just a job, but your ideal opportunity.',
                color: 'from-green-500 to-emerald-500',
                features: ['Role benchmarking', 'Offer optimization', 'Expert negotiators', 'Oppurtunity fit analysis'],
                stats: { value: 'Career Acceleration', label: 'Unlocked' }
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={solutionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative bg-white/80 backdrop-blur-lg rounded-3xl p-8 border border-white/50 shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-3 transition-opacity duration-700`}></div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-500" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-6 left-6 w-8 h-8 bg-emerald-400/20 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-500" style={{ animationDelay: '1s' }}></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg`}>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold theme-text-primary">{item.stats.value}</div>
                      <div className="text-xs theme-text-muted">{item.stats.label}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold theme-text-body mb-2">{item.title}</h3>
                  <p className="text-sm font-medium text-emerald-600 mb-4">{item.subtitle}</p>
                  <p className="theme-text-muted mb-6 leading-relaxed">{item.description}</p>

                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    {item.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={solutionInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.2 + featureIndex * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${item.color} rounded-full`}></div>
                        <span className="text-sm theme-text-muted">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="w-full py-3 px-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl font-semibold theme-text-muted opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:from-emerald-100 hover:to-teal-100 hover:text-emerald-700">
                    Learn More →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={solutionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-12 border border-white/40 shadow-2xl max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold theme-text-body mb-6">Stop Reading. Start Doing.</h3>
              <p className="theme-text-muted mb-8 text-lg">
                <strong>10,000+ developers</strong> have already ditched the traditional job hunt. 
                They're working remotely, earning more, and actually excited about Monday mornings. 
                <strong className="theme-text-primary">Seriously, what are you waiting for?</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-cosmic-primary px-8 py-4 rounded-xl font-semibold text-lg shadow-xl"
                  onClick={() => window.open('https://connect.thinkify.io', '_blank', 'noopener,noreferrer')}
                >
                  Let's Do This!
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/80 theme-text-muted border-2 theme-border-surface px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white transition-all duration-300"
                  onClick={() => window.open('https://connect.thinkify.io', '_blank', 'noopener,noreferrer')}
                >
                  Just Show Me How
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Revolutionary Target Audience Section - "Thinkify is for developers who:" */}
      <motion.section className="py-32 bg-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
          <div className="absolute top-20 right-20 w-72 h-72 theme-bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 theme-bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 theme-bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border theme-border-primary shadow-lg mb-8">
              <div className="w-2 h-2 theme-bg-primary rounded-full animate-pulse"></div>
              <span className="font-semibold theme-text-primary">Elite Developer Criteria</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold theme-text-body mb-8 leading-tight">
              <span className="theme-text-primary">Thinkify</span>
              <span className="theme-text-body"> is for </span>
              <br />
              <span className="relative inline-block">
                <span className="theme-text-body">elite developers</span>
                <motion.div 
                  className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                />
              </span>
              <span className="theme-text-body"> who:</span>
            </h2>
            
            <p className="text-xl theme-text-muted max-w-4xl mx-auto leading-relaxed">
              We're extremely selective. Only the top-tier developers who meet our rigorous standards 
              gain access to our exclusive network of premium opportunities.
            </p>
          </motion.div>

          {/* Enhanced Criteria Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: 'Proven Technical Excellence',
                subtitle: 'Minimum 4+ years of hands-on experience',
                description: 'You have deep expertise in full-stack development, MERN stack, frontend, or backend technologies. Your code speaks for itself.',
                requirements: ['4+ years experience', 'Full-stack or specialized expertise', 'Strong portfolio/GitHub', 'Production-level projects'],
                gradient: 'from-yellow-500 to-orange-500',
                stats: { value: '4+', label: 'Years Required' }
              },
              {
                title: 'Value-Driven Partnership',
                subtitle: '100% free platform for developers',
                description: 'You understand that the best platforms invest in talent, not exploit it. We charge hiring partners, never developers.',
                requirements: ['Zero platform fees', 'No hidden costs', 'Revenue from companies', 'Developer-first approach'],
                gradient: 'from-emerald-500 to-teal-500',
                stats: { value: '0%', label: 'Developer Fees' }
              },
              {
                title: 'Time-Conscious Professional',
                subtitle: 'Skip the negotiation hassles',
                description: 'You value your time and want expert negotiators fighting for your worth, not wasting months in back-and-forth discussions.',
                requirements: ['Expert negotiation support', 'Market-rate salaries', 'Time-efficient process', 'Professional representation'],
                gradient: 'from-blue-500 to-purple-500',
                stats: { value: 'Fast-Tracked', label: 'Career Moves' }
              },
              {
                title: 'Career-Focused Mindset',
                subtitle: 'Lifelong growth partner',
                description: 'You\'re not just looking for a job - you want a career transformation partner invested in making you a top-tier, marketable talent.',
                requirements: ['Long-term career planning', 'Skill development support', 'Market positioning', 'Growth mentorship'],
                gradient: 'from-purple-500 to-pink-500',
                stats: { value: '5x', label: 'Career Growth' }
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative bg-white/90 backdrop-blur-lg rounded-3xl p-8 border theme-border-surface shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden hover:bg-white"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-3 transition-opacity duration-700`}></div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 theme-bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-500" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-6 left-6 w-6 h-6 theme-bg-secondary/10 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-500" style={{ animationDelay: '1s' }}></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center text-3xl shadow-lg`}>
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

                  {/* Requirements List */}
                  <div className="space-y-3">
                    {item.requirements.map((req, reqIndex) => (
                      <motion.div
                        key={req}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.2 + reqIndex * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${item.gradient} rounded-full`}></div>
                        <span className="text-sm theme-text-muted">{req}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-12 border theme-border-surface shadow-2xl max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold theme-text-body mb-6">Think You're Elite Material?</h3>
              <p className="theme-text-muted mb-8 text-lg">
              Only 15% of applicants make it through our vetting process. Join the exclusive network of top-tier developers working on industry-defining projects and accelerating their careers…
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                  onClick={() => window.open('https://connect.thinkify.io', '_blank', 'noopener,noreferrer')}
                >
                  Apply for Elite Status
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white theme-text-body border-2 theme-border-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/90 transition-all duration-300"
                  onClick={() => window.open('https://connect.thinkify.io', '_blank', 'noopener,noreferrer')}
                >
                  Learn About Vetting
                </motion.button>
              </div>
              
              {/* Stats Footer */}
              <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t theme-border-surface">
                {[
                  { stat: '15%', label: 'Acceptance Rate' },
                  { stat: '10x', label: 'Oppurtunity Access' },
                  { stat: '95%', label: 'Satisfaction Rate' }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold theme-text-primary">{item.stat}</div>
                    <div className="text-xs theme-text-muted">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Why developers love Thinkify - Completely Reimagined */}
      <motion.section className="py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 theme-bg-primary opacity-5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 theme-bg-secondary opacity-5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 theme-bg-accent opacity-3 rounded-full blur-3xl animate-pulse delay-2000"></div>
          
          {/* Floating Code Snippets */}
          <div className="absolute top-20 right-20 opacity-10 text-xs theme-text-muted font-mono transform rotate-12">
            <div className="bg-slate-900 rounded-lg p-3">
              <div className="text-green-400">const career = await thinkify.transform();</div>
            </div>
          </div>
          <div className="absolute bottom-32 left-20 opacity-10 text-xs theme-text-muted font-mono transform -rotate-12">
            <div className="bg-slate-900 rounded-lg p-3">
              <div className="theme-text-primary-80">{"{ success: true, salary: '2x' }"}</div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Revolutionary Header */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-white to-gray-50 border theme-border-surface shadow-xl mb-8 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 theme-bg-secondary rounded-full animate-pulse"></div>
                <div className="w-2 h-2 theme-bg-primary rounded-full animate-pulse delay-200"></div>
                <div className="w-2 h-2 theme-bg-primary rounded-full animate-pulse delay-400"></div>
              </div>
              <span className="font-bold theme-text-primary">Why 10K+ Developers Choose Us</span>
              <SparklesIcon className="w-6 h-6 theme-text-primary animate-pulse" />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold theme-text-body mb-8 leading-tight"
            >
              <span className="theme-gradient-text">Elite developers</span> don't just{' '}
              work here
              <br />
              <span className="theme-text-body">They</span>{' '}
              <span className="theme-gradient-text">thrive here</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl theme-text-muted max-w-4xl mx-auto mb-4 leading-relaxed"
            >
              We don't just find you jobs. We architect careers, build futures, and create legends. 
              Here's how we're revolutionizing the developer experience.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center justify-center gap-4 text-lg"
            >
              <div className="flex items-center gap-2 theme-text-primary font-semibold">
                <BoltIcon className="w-5 h-5" />
                <span>Game-changing</span>
              </div>
              <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
              <div className="flex items-center gap-2 theme-text-primary font-semibold">
                <RocketLaunchIcon className="w-5 h-5" />
                <span>Career-defining</span>
              </div>
              <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
              <div className="flex items-center gap-2 theme-text-primary font-semibold">
                <TrophyIcon className="w-5 h-5" />
                <span>Life-changing</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Interactive Feature Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {[
              {
                id: 'security',
                title: 'Total Career Protection',
                subtitle: 'Your success is our guarantee',
                description: 'Full-spectrum career insurance including health benefits, legal support, and contract negotiation. We fight for your rights every step of the way.',
                features: ['Comprehensive health insurance', 'Legal contract review', 'Salary negotiation support', '24/7 career guidance'],
                image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop',
                gradient: 'from-emerald-500 to-teal-600',
                stats: { value: '100%', label: 'Protection Rate' }
              },
              {
                id: 'global',
                title: 'Global Elite Network',
                subtitle: 'Join the world\'s top 1%',
                description: 'Exclusive access to a curated community of world-class developers. Network with industry leaders, share knowledge, and grow together.',
                features: ['Vetted global developer pool', 'Exclusive networking events', 'Mentorship programs', 'Industry insider access'],
                image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop',
                gradient: 'from-blue-500 to-purple-600',
                stats: { value: '50K+', label: 'Elite Developers' }
              },
              {
                id: 'growth',
                title: 'Exponential Growth Engine',
                subtitle: 'Your career, supercharged',
                description: 'Personalized career acceleration with AI-powered matching, skill development, and strategic positioning for maximum growth potential.',
                features: ['AI-powered career matching', 'Skill gap analysis', 'Growth trajectory planning', 'Performance optimization'],
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
                gradient: 'from-orange-500 to-red-500',
                stats: { value: '3.2x', label: 'Avg Salary Increase' }
              },
              {
                id: 'events',
                title: 'Exclusive Access Hub',
                subtitle: 'Learn from the legends',
                description: 'Private events with tech titans, exclusive workshops, and insider sessions. Get direct access to the minds shaping the future of technology.',
                features: ['Monthly tech titan talks', 'Exclusive workshops', 'Beta product access', 'Industry trend insights'],
                image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
                gradient: 'from-pink-500 to-rose-500',
                stats: { value: '200+', label: 'Annual Events' }
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                  {/* Gradient Header */}
                  <div className={`h-2 bg-gradient-to-r ${feature.gradient}`}></div>
                  
                  {/* Main Content */}
                  <div className="p-8">
                    {/* Header Section */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold theme-text-body mb-1">{feature.title}</h3>
                          <p className="text-sm theme-text-primary font-medium">{feature.subtitle}</p>
                        </div>
                      </div>
                      
                      {/* Stats Badge */}
                      <div className="text-right">
                        <div className="text-2xl font-bold theme-text-primary">
                          {feature.stats.value}
                        </div>
                        <div className="text-xs theme-text-muted">{feature.stats.label}</div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="theme-text-muted mb-6 leading-relaxed">{feature.description}</p>

                    {/* Feature List */}
                    <div className="space-y-3 mb-6">
                      {feature.features.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.2 + idx * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className={`w-2 h-2 bg-gradient-to-r ${feature.gradient} rounded-full`}></div>
                          <span className="text-sm theme-text-muted">{item}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Image with Overlay */}
                    <div className="relative rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${feature.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                      
                      {/* Floating Action Button */}
                      <motion.div 
                        className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <ArrowRightIcon className="w-5 h-5 theme-text-muted" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Success Metrics Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 md:p-12 theme-text-body border theme-border-surface shadow-xl relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-3">
              <div className="absolute top-0 left-0 w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, rgba(0,0,0,0.05) 0%, transparent 50%),
                                 radial-gradient(circle at 75% 75%, rgba(0,0,0,0.05) 0%, transparent 50%)`
              }}></div>
            </div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 theme-text-body">
                  The Numbers Don't Lie
                </h3>
                <p className="theme-text-muted text-lg max-w-2xl mx-auto">
                  Real results from real developers who chose to level up with Thinkify
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { value: '98.7%', label: 'Success Rate' },
                  { value: '15 days', label: 'Avg. Hire Time' },
                  { value: 'Strategic', label: 'Role Matching' },
                  { value: '10K+', label: 'Happy Developers' }
                ].map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center group"
                  >
                    <div className="mb-2">
                    </div>
                    <div className="text-3xl md:text-4xl font-bold theme-text-primary mb-2">
                      {metric.value}
                    </div>
                    <div className="theme-text-muted text-sm">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      {/* Revolutionary "Join the most sought-out developer collective" Section */}
              <motion.section className="py-32 bg-white relative overflow-hidden">
        {/* Advanced Background Effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 theme-bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 theme-bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 theme-bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Floating Code Elements */}
        <div className="absolute inset-0 opacity-10 overflow-hidden">
          {[
            { text: 'const elite = await findDevelopers()', top: '10%', left: '10%', delay: 0 },
            { text: '{ skill: "exceptional" }', top: '20%', right: '15%', delay: 1 },
            { text: 'if (developer.isElite())', top: '60%', left: '8%', delay: 2 },
            { text: 'return premium.opportunities', bottom: '20%', right: '10%', delay: 3 },
            { text: '// Join the collective', top: '40%', right: '20%', delay: 4 }
          ].map((code, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: code.delay, repeat: Infinity, repeatType: 'reverse' }}
              className="absolute theme-text-muted font-mono text-sm opacity-30"
              style={{
                top: code.top,
                bottom: code.bottom,
                left: code.left,
                right: code.right
              }}
            >
              {code.text}
            </motion.div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Elite Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white backdrop-blur-md border theme-border-primary shadow-xl mb-8"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 theme-bg-primary rounded-full animate-pulse"></div>
                <div className="w-3 h-3 theme-bg-primary rounded-full animate-pulse delay-200"></div>
                <div className="w-3 h-3 theme-bg-accent rounded-full animate-pulse delay-400"></div>
              </div>
              <span className="font-bold theme-text-primary">Elite Developer Collective</span>
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight theme-text-body">
              Join the most{' '}
              <span className="theme-gradient-text">sought-out</span>
              <br />
              <span className="theme-text-body">developer</span>{' '}
              <span className="theme-gradient-text">collective.</span>
            </h2>
            
            <p className="text-xl theme-text-muted max-w-4xl mx-auto mb-12 leading-relaxed">
              We handle the tedious recruitment process, negotiations, and career logistics. 
              You focus on what you do best - creating exceptional software that changes the world.
            </p>

            {/* Enhanced CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-16"
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="#contact">
                  <motion.button
                    className="btn-cosmic-primary px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open('https://connect.thinkify.io', '_blank', 'noopener,noreferrer')}
                  >
                    Join Elite Collective
                    <ArrowRightIcon className="w-6 h-6 ml-3 inline-block" />
                  </motion.button>
                </Link>
                <motion.button
                  className="bg-white border-2 theme-border-primary theme-text-primary px-12 py-6 rounded-2xl font-bold text-xl hover:theme-bg-primary hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('https://connect.thinkify.io', '_blank', 'noopener,noreferrer')}
                >
                  View Member Benefits
                </motion.button>
              </div>

              {/* Member Benefits Preview */}
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {[
                  { text: 'Premium Job Access', desc: 'Exclusive opportunities' },
                  { text: 'Career Acceleration', desc: '3x faster growth' },
                  { text: 'Salary Optimization', desc: '40% higher packages' }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white backdrop-blur-sm rounded-xl p-4 border theme-border-surface shadow-lg"
                  >
                    <div className="mb-2"></div>
                    <div className="font-semibold theme-text-body">{benefit.text}</div>
                    <div className="text-xs theme-text-muted">{benefit.desc}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
} 