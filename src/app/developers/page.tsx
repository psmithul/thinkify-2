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
        className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-20 pb-16"
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
              <div className="text-center mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Work with <span className="theme-gradient-text">Top Companies</span>
                </h3>
                <p className="text-sm text-gray-600 max-w-2xl mx-auto">
                  Join a platform that connects you with leading companies actively hiring remote developers
                </p>
              </div>
              <CompanyCarouselMini />
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
        className="py-32 bg-gradient-to-br from-slate-50 via-white to-purple-50 relative overflow-hidden"
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
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 backdrop-blur-md border border-purple-200 shadow-lg mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="dm-serif-text-regular text-purple-800 font-medium">Success Stories</span>
              <TrophyIcon className="w-5 h-5 text-purple-600" />
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

          {/* Interactive Stats Dashboard */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={alumnisInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-20"
          >
            <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/40 shadow-2xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { metric: '847', label: 'Lives Transformed', icon: '🚀', color: 'from-blue-500 to-purple-500' },
                  { metric: '$168K', label: 'Average Salary', icon: '💎', color: 'from-green-500 to-teal-500' },
                  { metric: '98.5%', label: 'Success Rate', icon: '⭐', color: 'from-orange-500 to-red-500' },
                  { metric: '72hrs', label: 'Avg. Job Offer', icon: '⚡', color: 'from-purple-500 to-pink-500' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={alumnisInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="text-center group cursor-pointer"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <span className="text-2xl">{stat.icon}</span>
                    </div>
                    <div className="dm-serif-text-regular text-4xl text-gray-900 mb-2 group-hover:scale-105 transition-transform duration-300">{stat.metric}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
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
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 text-white relative overflow-hidden h-full">
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
                    <button className="bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors">
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
                    <div className="w-14 h-14 rounded-xl overflow-hidden ring-2 ring-purple-100 group-hover:ring-purple-200 transition-all">
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
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white relative overflow-hidden max-w-4xl mx-auto">
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
                    className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Start Your Journey Today
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
                  >
                    Schedule a Call
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>



      {/* Problem Section */}
      <motion.section
        ref={problemRef}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={problemInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Finding it impossible to stand out to recruiters for top remote jobs?
              </h2>
              
              <p className="text-xl text-gray-600 mb-8">
                What if a platform could get you:
              </p>

              <div className="space-y-6">
                {[
                  'Global opportunities, excellent pay',
                  'The flexibility of remote work',
                  'Exciting problems to work on, with interesting people.'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={problemInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-6 h-6 theme-bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckIcon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg text-gray-700">{item}</span>
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
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                    <div className="text-red-600 mb-2">👑</div>
                    <div className="text-sm font-medium text-red-800">No autonomy</div>
                  </div>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center">
                    <div className="text-orange-600 mb-2">🔄</div>
                    <div className="text-sm font-medium text-orange-800">No flexibility</div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
                    <div className="text-yellow-600 mb-2">⚠️</div>
                    <div className="text-sm font-medium text-yellow-800">Limited infrastructure and resources</div>
                  </div>
                  <div className="theme-bg-surface border theme-border-primary rounded-lg p-4 text-center">
                    <div className="theme-text-primary mb-2">📈</div>
                    <div className="text-sm font-medium theme-text-primary">Stagnating career growth</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gray-100 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=200&h=200&fit=crop&crop=face" 
                  alt="Frustrated developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Solution Section */}
      <motion.section
        ref={solutionRef}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={solutionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What if such a platform exists?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We find you jobs. You get hired. We coach you in everything, from interview preparation to negotiations. Plus, we are free.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Find your perfect job match',
                description: 'We match you with companies that align with your skills, values, and career goals.',
                color: 'bg-blue-50 border-blue-200'
              },
              {
                icon: '🚀',
                title: 'Get hired faster',
                description: 'Our proven process helps you land offers 3x faster than traditional job searching.',
                color: 'theme-bg-surface theme-border-primary'
              },
              {
                icon: '💰',
                title: 'Negotiate better packages',
                description: 'We help you negotiate salaries and benefits that reflect your true market value.',
                color: 'bg-green-50 border-green-200'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={solutionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`${item.color} border rounded-2xl p-8 text-center`}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Target Audience Section */}
      <motion.section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Thinkify is for developers who:
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: '⭐',
                title: 'Have a minimum of 4 years of experience working on full-stack, MERN stack, frontend, or backend.',
                gradient: 'theme-bg-primary'
              },
              {
                icon: '🔍',
                title: 'Are in search of a 100% free platform that charges hiring partners, not developers.',
                gradient: 'theme-bg-secondary'
              },
              {
                icon: '⏰',
                title: 'Don\'t want to waste time negotiating the salary you deserve with recruiters.',
                gradient: 'bg-gradient-to-r from-green-600 to-blue-600'
              },
              {
                icon: '🤝',
                title: 'Want a lifelong career partner invested in making you a top marketable talent.',
                gradient: 'bg-gradient-to-r from-orange-600 to-red-600'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 h-full hover:bg-gray-800 transition-colors duration-300">
                  <div className={`w-16 h-16 ${item.gradient} rounded-2xl flex items-center justify-center text-2xl mb-6`}>
                    {item.icon}
                  </div>
                  <p className="text-lg text-gray-200">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why developers love Thinkify */}
      <motion.section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Top developers love Thinkify. Here's why:
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              We get the recruiters to you. We help you thrive. We only work with the best in the business.
            </p>
            <p className="text-xl font-semibold text-gray-900">
              But that's not all.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Guarantee job security with a platform that looks out for you.',
                description: 'Thinkify offers full term health insurance and assists you with all contractual paperwork during hiring. We keep your employers accountable every step of the way.',
                image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop',
                color: 'theme-bg-surface'
              },
              {
                title: 'Join a global dev aggregate.',
                description: 'Local recognition does not cut it anymore. Get vetted and join a curated list of top developers from around the world.',
                image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop',
                color: 'bg-yellow-100'
              },
              {
                title: 'Find a lifelong career partner.',
                description: 'Your journey with Thinkify doesn\'t end when you land a job. Use our platform to find exciting career growth opportunities.',
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
                color: 'bg-blue-100'
              },
              {
                title: 'Attend events with speakers you look up to.',
                description: 'Access live community events, monthly town-halls, workshops and more with Thinkify Alums and guest speakers throughout the year.',
                image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop',
                color: 'bg-pink-100'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${feature.color} rounded-2xl p-8 h-full ${index === 1 || index === 3 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="mb-6">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section className="py-20 theme-bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 40% 40%, rgba(120, 200, 255, 0.3) 0%, transparent 50%)`
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Join the most sought-out{' '}
              <span className="theme-gradient-text">
                developer collective.
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              We'll take care of the boring hiring bits, so you can enjoy the flexibility and freedom you deserve as a top developer.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link href="#contact">
                <motion.button
                  className="btn-cosmic-primary px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Build your profile
                  <ArrowRightIcon className="w-6 h-6 ml-3 inline-block" />
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-16 relative max-w-4xl mx-auto"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="bg-gray-900 rounded-xl p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 theme-bg-primary rounded-full"></div>
                      <div>
                        <div className="text-white font-medium">All Jobs</div>
                        <div className="text-gray-400 text-sm">Remote opportunities</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {['Technical Lead Developer', 'Senior Software Developer', 'PHP Developer'].map((job, i) => (
                        <div key={i} className="bg-gray-800 rounded-lg p-4">
                          <div className="text-white font-medium text-sm mb-2">{job}</div>
                          <div className="text-green-400 font-bold">$80-110k</div>
                          <div className="text-gray-400 text-xs">Remote</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
} 