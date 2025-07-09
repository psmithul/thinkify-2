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
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-display text-5xl md:text-7xl text-black leading-tight mb-8 text-balance"
            >
              <span className="theme-gradient-text">
                Elevate
              </span>
              {' '}your career.{' '}
              <span className="theme-gradient-text">
                Transform
              </span>
              {' '}your future.{' '}
              <span className="theme-gradient-text">
                Unlock
              </span>
              {' '}your potential.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="font-body text-xl text-gray-600 max-w-3xl mx-auto mb-8 text-balance"
            >
              Break into a successful remote tech career with Thinkify. Get flexible jobs with direct access to top companies.
            </motion.p>

            {/* Work with Top Companies */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="mb-12"
            >
              <CompanyCarousel 
                title="Work with Top Companies"
                subtitle="Join a platform that connects you with leading companies actively hiring remote developers"
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
                >
                  Join Thinkify today
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
                         <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 backdrop-blur-md border theme-border-primary shadow-lg mb-8">
               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
               <span className="dm-serif-text-regular theme-text-primary font-medium">Success Stories</span>
               <TrophyIcon className="w-5 h-5 theme-text-primary" />
             </div>
            
            <h2 className="dm-serif-text-regular text-5xl md:text-7xl text-gray-900 mb-8 leading-tight">
              Where Dreams Become{' '}
              <span className="theme-gradient-text relative inline-block">
                Reality
                <motion.div 
                  className="absolute -bottom-3 left-0 w-full h-2 theme-bg-primary opacity-20 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={alumnisInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 1, delay: 0.5 }}
                ></motion.div>
              </span>
            </h2>
            
            <p className="font-body text-xl text-gray-600 max-w-4xl mx-auto text-balance leading-relaxed">
              Witness the extraordinary transformation of ambitious individuals into industry leaders. 
              Each story represents not just a career change, but a life transformed.
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
                             <div className="theme-gradient-primary rounded-3xl p-8 text-white relative overflow-hidden h-full">
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
                        <p className="text-white/80">Senior Research Engineer</p>
                        <p className="text-white/60 text-sm">@ Google</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold mb-1">$160K</div>
                      <div className="text-white/80 text-sm">Annual Salary</div>
                    </div>
                  </div>
                  
                  <blockquote className="dm-serif-text-regular-italic text-xl mb-6 leading-relaxed">
                    "Thinkify didn't just change my career—it transformed my entire perspective on what's possible. 
                    From struggling freelancer to Google engineer in 6 months."
                  </blockquote>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                      <div className="bg-white/20 rounded-xl px-4 py-2">
                        <div className="text-sm text-white/80">Salary Increase</div>
                        <div className="font-bold">+350%</div>
                      </div>
                      <div className="bg-white/20 rounded-xl px-4 py-2">
                        <div className="text-sm text-white/80">Time to Hire</div>
                        <div className="font-bold">4 months</div>
                      </div>
                    </div>
                                         <button className="bg-white theme-text-primary px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors">
                       Read Full Story →
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
                { name: 'Jyotendra S.', company: 'Microsoft', salary: '$155K', increase: '+280%', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face' },
                { name: 'Rushikesh A.', company: 'Stripe', salary: '$145K', increase: '+200%', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face' },
                { name: 'Sumit D.', company: 'Netflix', salary: '$170K', increase: '+300%', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop&crop=face' }
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
                      <h4 className="dm-serif-text-regular text-lg text-gray-900 mb-1">{alumni.name}</h4>
                      <p className="text-sm text-gray-600">@ {alumni.company}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-900">{alumni.salary}</div>
                      <div className="text-green-600 text-sm font-medium">{alumni.increase}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={alumnisInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white py-4 px-6 rounded-2xl font-semibold hover:from-gray-700 hover:to-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
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
                         <div className="theme-gradient-primary rounded-3xl p-12 text-white relative overflow-hidden max-w-4xl mx-auto">
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-8 left-8 w-24 h-24 border-2 border-white rounded-full"></div>
                <div className="absolute bottom-8 right-8 w-32 h-32 border-2 border-white rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="dm-serif-text-regular text-4xl mb-6">Your Success Story Starts Here</h3>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Join 800+ professionals who've transformed their careers with Thinkify. 
                  Your dream job is just one application away.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                     <motion.button
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className="bg-white theme-text-primary px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                   >
                     Start Your Journey Today
                   </motion.button>
                   <motion.button
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:theme-text-primary transition-all duration-300"
                   >
                     Schedule a Call
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
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 backdrop-blur-md border border-red-200 shadow-lg mb-8">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="font-semibold text-red-700">Developer Pain Points</span>
              <div className="text-2xl">😤</div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={problemInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Finding it{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">impossible</span>
                  <motion.div 
                    className="absolute -bottom-4 left-0 w-full h-3 bg-red-500/20 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={problemInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </span>
                {' '}to stand out to recruiters for top remote jobs?
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                You're trapped in a cycle of mediocrity. What if a platform could break you free and get you:
              </p>

              <div className="space-y-6">
                {[
                  { text: 'Global opportunities with excellent pay', icon: '🌍', color: 'from-blue-500 to-purple-500' },
                  { text: 'True flexibility of remote work', icon: '🏠', color: 'from-green-500 to-teal-500' },
                  { text: 'Exciting problems with brilliant minds', icon: '🧠', color: 'from-purple-500 to-pink-500' }
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
                        {item.icon}
                      </div>
                      <span className="text-lg text-gray-800 font-semibold">{item.text}</span>
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
                      className="bg-gray-100 border-2 border-gray-300 rounded-2xl p-6 text-center relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-200/50 to-gray-300/30"></div>
                      <div className="relative z-10">
                        <div className="text-3xl mb-3">📉</div>
                        <div className="text-sm font-bold text-gray-800">Career Stagnation</div>
                        <div className="text-xs text-gray-600 mt-2">No growth path</div>
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
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 backdrop-blur-md border border-emerald-200 shadow-lg mb-8">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="font-semibold text-emerald-700">The Solution</span>
              <div className="text-2xl">💡</div>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              What if such a{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">platform</span>
                <motion.div 
                  className="absolute -bottom-4 left-0 w-full h-3 bg-emerald-500/20 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={solutionInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </span>
              {' '}exists?
            </h2>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              We don't just find you jobs. We architect your entire career transformation. From interview mastery to salary negotiations - and it's completely free.
            </p>

            <div className="flex flex-wrap justify-center gap-3 text-sm">
              {['100% Free Platform', 'Career Coaching', 'Salary Negotiation', 'Interview Prep', 'Job Matching'].map((feature, index) => (
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
                icon: '🎯',
                title: 'Perfect Job Matching',
                subtitle: 'AI-powered precision',
                description: 'Our advanced algorithms analyze 500+ data points to match you with companies that align perfectly with your skills, values, and career aspirations.',
                color: 'from-blue-500 to-purple-500',
                features: ['Skills alignment', 'Culture fit analysis', 'Career path mapping', 'Salary benchmarking'],
                stats: { value: '95%', label: 'Match Accuracy' }
              },
              {
                icon: '🚀',
                title: 'Accelerated Hiring',
                subtitle: '3x faster than traditional methods',
                description: 'Skip the endless applications and waiting. Our proven process connects you directly with hiring managers actively seeking your expertise.',
                color: 'from-emerald-500 to-teal-500',
                features: ['Direct hiring manager access', 'Fast-track interviews', 'Skip initial screenings', 'Priority consideration'],
                stats: { value: '21', label: 'Days Average' }
              },
              {
                icon: '💰',
                title: 'Elite Negotiation Support',
                subtitle: 'Maximize your market value',
                description: 'Our expert negotiators have secured millions in additional compensation. We fight for packages that reflect your true worth.',
                color: 'from-green-500 to-emerald-500',
                features: ['Salary benchmarking', 'Package optimization', 'Expert negotiators', 'Market value analysis'],
                stats: { value: '40%', label: 'Salary Increase' }
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
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-500" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-6 left-6 w-8 h-8 bg-emerald-400/20 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-500" style={{ animationDelay: '1s' }}></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg`}>
                      {item.icon}
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>{item.stats.value}</div>
                      <div className="text-xs text-gray-500">{item.stats.label}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm font-medium text-emerald-600 mb-4">{item.subtitle}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>

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
                        <span className="text-sm text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="w-full py-3 px-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl font-semibold text-gray-700 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:from-emerald-100 hover:to-teal-100 hover:text-emerald-700">
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
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready to Experience the Transformation?</h3>
              <p className="text-gray-600 mb-8 text-lg">Join 10,000+ developers who've already unlocked their career potential with Thinkify.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-cosmic-primary px-8 py-4 rounded-xl font-semibold text-lg shadow-xl"
                >
                  Start Your Journey Free
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/80 text-gray-700 border-2 border-gray-200 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white transition-all duration-300"
                >
                  Schedule Demo Call
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Revolutionary Target Audience Section - "Thinkify is for developers who:" */}
      <motion.section className="py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg mb-8">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="font-semibold text-blue-300">Elite Developer Criteria</span>
              <div className="text-2xl">🎯</div>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Thinkify</span>
              {' '}is for{' '}
              <span className="relative inline-block">
                <span className="text-white">developers</span>
                <motion.div 
                  className="absolute -bottom-4 left-0 w-full h-3 bg-gradient-to-r from-blue-500 to-purple-500 opacity-60 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </span>
              {' '}who:
            </h2>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We're extremely selective. Only the top-tier developers who meet our rigorous standards 
              gain access to our exclusive network of premium opportunities.
            </p>
          </motion.div>

          {/* Enhanced Criteria Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: '⭐',
                title: 'Proven Technical Excellence',
                subtitle: 'Minimum 4+ years of hands-on experience',
                description: 'You have deep expertise in full-stack development, MERN stack, frontend, or backend technologies. Your code speaks for itself.',
                requirements: ['4+ years experience', 'Full-stack or specialized expertise', 'Strong portfolio/GitHub', 'Production-level projects'],
                gradient: 'from-yellow-500 to-orange-500',
                stats: { value: '4+', label: 'Years Required' }
              },
              {
                icon: '🎯',
                title: 'Value-Driven Partnership',
                subtitle: '100% free platform for developers',
                description: 'You understand that the best platforms invest in talent, not exploit it. We charge hiring partners, never developers.',
                requirements: ['Zero platform fees', 'No hidden costs', 'Revenue from companies', 'Developer-first approach'],
                gradient: 'from-emerald-500 to-teal-500',
                stats: { value: '0%', label: 'Developer Fees' }
              },
              {
                icon: '⚡',
                title: 'Time-Conscious Professional',
                subtitle: 'Skip the negotiation hassles',
                description: 'You value your time and want expert negotiators fighting for your worth, not wasting months in back-and-forth discussions.',
                requirements: ['Expert negotiation support', 'Market-rate salaries', 'Time-efficient process', 'Professional representation'],
                gradient: 'from-blue-500 to-purple-500',
                stats: { value: '40%', label: 'Avg. Salary Boost' }
              },
              {
                icon: '🚀',
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
                className="group relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden hover:bg-white/10"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-500" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-6 left-6 w-8 h-8 bg-blue-400/20 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-500" style={{ animationDelay: '1s' }}></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center text-3xl shadow-lg`}>
                      {item.icon}
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>{item.stats.value}</div>
                      <div className="text-xs text-gray-400">{item.stats.label}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm font-medium text-blue-300 mb-4">{item.subtitle}</p>
                  <p className="text-gray-300 mb-6 leading-relaxed">{item.description}</p>

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
                        <span className="text-sm text-gray-400">{req}</span>
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
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20 shadow-2xl max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-6">Think You're Elite Material?</h3>
              <p className="text-gray-300 mb-8 text-lg">
                Only 15% of applicants make it through our vetting process. Join the exclusive network of 
                top-tier developers who command premium salaries and work on cutting-edge projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Apply for Elite Status
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300"
                >
                  Learn About Vetting
                </motion.button>
              </div>
              
              {/* Stats Footer */}
              <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/20">
                {[
                  { stat: '15%', label: 'Acceptance Rate' },
                  { stat: '$120K+', label: 'Average Salary' },
                  { stat: '95%', label: 'Satisfaction Rate' }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-blue-400">{item.stat}</div>
                    <div className="text-xs text-gray-400">{item.label}</div>
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
          <div className="absolute top-20 right-20 opacity-10 text-xs text-gray-400 font-mono transform rotate-12">
            <div className="bg-gray-900 rounded-lg p-3">
              <div className="text-green-400">const career = await thinkify.transform();</div>
            </div>
          </div>
          <div className="absolute bottom-32 left-20 opacity-10 text-xs text-gray-400 font-mono transform -rotate-12">
            <div className="bg-gray-900 rounded-lg p-3">
              <div className="text-blue-400">{"{ success: true, salary: '2x' }"}</div>
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
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-white to-gray-50 border border-gray-200 shadow-xl mb-8 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-200"></div>
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-400"></div>
              </div>
              <span className="font-bold theme-text-primary">Why 10K+ Developers Choose Us</span>
              <SparklesIcon className="w-6 h-6 theme-text-primary animate-pulse" />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight"
            >
              <span className="theme-gradient-text">Elite developers</span> don't just{' '}
              <span className="relative inline-block">
                work here
                <motion.div 
                  className="absolute -bottom-4 left-0 w-full h-3 theme-bg-primary opacity-20 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </span>
              <br />
              <span className="text-gray-900">They</span>{' '}
              <span className="theme-gradient-text">thrive here</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl text-gray-600 max-w-4xl mx-auto mb-4 leading-relaxed"
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
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="flex items-center gap-2 theme-text-primary font-semibold">
                <RocketLaunchIcon className="w-5 h-5" />
                <span>Career-defining</span>
              </div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
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
                icon: '🛡️',
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
                icon: '🌍',
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
                icon: '📈',
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
                icon: '🎯',
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
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-1">{feature.title}</h3>
                          <p className="text-sm theme-text-primary font-medium">{feature.subtitle}</p>
                        </div>
                      </div>
                      
                      {/* Stats Badge */}
                      <div className="text-right">
                        <div className={`text-2xl font-bold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                          {feature.stats.value}
                        </div>
                        <div className="text-xs text-gray-500">{feature.stats.label}</div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>

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
                          <span className="text-sm text-gray-700">{item}</span>
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
                        <ArrowRightIcon className="w-5 h-5 text-gray-700" />
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
            className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%),
                                 radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)`
              }}></div>
            </div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  The Numbers Don't Lie
                </h3>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Real results from real developers who chose to level up with Thinkify
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { value: '98.7%', label: 'Success Rate', icon: '🎯' },
                  { value: '15 days', label: 'Avg. Hire Time', icon: '⚡' },
                  { value: '$142K', label: 'Avg. Salary', icon: '💰' },
                  { value: '10K+', label: 'Happy Developers', icon: '🚀' }
                ].map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center group"
                  >
                    <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {metric.icon}
                    </div>
                    <div className="text-3xl md:text-4xl font-bold theme-gradient-text mb-2">
                      {metric.value}
                    </div>
                    <div className="text-gray-400 text-sm">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      {/* Revolutionary "Join the most sought-out developer collective" Section */}
      <motion.section className="py-32 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
        {/* Advanced Background Effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
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
              className="absolute text-white/20 font-mono text-sm"
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
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl mb-8"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-200"></div>
                <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse delay-400"></div>
              </div>
              <span className="font-bold text-white">Elite Developer Collective</span>
              <div className="text-2xl">👑</div>
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Join the most{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">sought-out</span>
                <motion.div 
                  className="absolute -bottom-4 left-0 w-full h-3 bg-gradient-to-r from-blue-500 to-pink-500 opacity-60 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </span>
              <br />
              <span className="text-white">developer</span>{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">collective.</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
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
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Join Elite Collective
                    <ArrowRightIcon className="w-6 h-6 ml-3 inline-block" />
                  </motion.button>
                </Link>
                <motion.button
                  className="bg-white/10 border-2 border-white/30 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Member Benefits
                </motion.button>
              </div>

              {/* Member Benefits Preview */}
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {[
                  { icon: '💼', text: 'Premium Job Access', desc: 'Exclusive opportunities' },
                  { icon: '🚀', text: 'Career Acceleration', desc: '3x faster growth' },
                  { icon: '💰', text: 'Salary Optimization', desc: '40% higher packages' }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                  >
                    <div className="text-2xl mb-2">{benefit.icon}</div>
                    <div className="font-semibold text-white">{benefit.text}</div>
                    <div className="text-xs text-gray-300">{benefit.desc}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Developer Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative max-w-6xl mx-auto"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                {/* Terminal Header */}
                <div className="bg-gray-900/80 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-400 text-sm ml-4">Thinkify Developer Portal</span>
                  </div>
                  
                  {/* Dashboard Content */}
                  <div className="space-y-6">
                    {/* Profile Section */}
                    <div className="flex items-center space-x-4 mb-8">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                      <div>
                        <div className="text-white font-medium">Elite Developer Portal</div>
                        <div className="text-green-400 text-sm">● Active - 847 opportunities available</div>
                      </div>
                      <div className="ml-auto bg-gradient-to-r from-green-500 to-teal-500 px-4 py-2 rounded-lg">
                        <span className="text-white text-sm font-medium">Verified Elite</span>
                      </div>
                    </div>

                    {/* Job Opportunities Grid */}
                    <div className="grid md:grid-cols-3 gap-4">
                      {[
                        { 
                          title: 'Senior Full-Stack Engineer', 
                          company: 'Unicorn Startup', 
                          salary: '$140-180k', 
                          remote: 'Remote',
                          urgency: 'Hot',
                          gradient: 'from-red-500 to-orange-500'
                        },
                        { 
                          title: 'AI/ML Engineering Lead', 
                          company: 'Fortune 500', 
                          salary: '$160-220k', 
                          remote: 'Remote',
                          urgency: 'Featured',
                          gradient: 'from-blue-500 to-purple-500'
                        },
                        { 
                          title: 'DevOps Architect', 
                          company: 'Scale-up', 
                          salary: '$120-160k', 
                          remote: 'Remote',
                          urgency: 'New',
                          gradient: 'from-green-500 to-teal-500'
                        }
                      ].map((job, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                          className="bg-gray-800/80 rounded-xl p-4 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className={`px-2 py-1 rounded text-xs font-medium bg-gradient-to-r ${job.gradient} text-white`}>
                              {job.urgency}
                            </div>
                            <div className="text-gray-400 text-xs">{job.remote}</div>
                          </div>
                          <div className="text-white font-medium text-sm mb-1">{job.title}</div>
                          <div className="text-gray-400 text-xs mb-2">{job.company}</div>
                          <div className="text-green-400 font-bold text-lg">{job.salary}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Stats Bar */}
                    <div className="grid grid-cols-4 gap-4 pt-6 border-t border-gray-700">
                      {[
                        { label: 'Active Applications', value: '12' },
                        { label: 'Interview Requests', value: '5' },
                        { label: 'Offers Received', value: '3' },
                        { label: 'Avg. Response Time', value: '2h' }
                      ].map((stat, index) => (
                        <div key={index} className="text-center">
                          <div className="text-white font-bold text-lg">{stat.value}</div>
                          <div className="text-gray-400 text-xs">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -left-8 top-1/4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/40"
              >
                <div className="text-xs font-bold text-green-700">Success Rate</div>
                <div className="text-2xl font-bold text-green-600">95%</div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -right-8 bottom-1/4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/40"
              >
                <div className="text-xs font-bold text-blue-700">Avg. Salary</div>
                <div className="text-2xl font-bold text-blue-600">$140K+</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
} 