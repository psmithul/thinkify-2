'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
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
              className="text-5xl md:text-7xl font-bold text-black leading-tight mb-8"
            >
              Find remote jobs with companies{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                that care
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                about your work
              </span>
              {' '}more than your resume.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
            >
              Break into a successful remote tech career with Thinkify. Get flexible jobs with direct access to top companies.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-8 mb-12"
            >
              <div className="flex items-center space-x-3">
                <CurrencyDollarIcon className="w-6 h-6 text-purple-600" />
                <span className="text-lg font-medium text-gray-700">Average salaries of $80k+</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <UserGroupIcon className="w-6 h-6 text-purple-600" />
                <span className="text-lg font-medium text-gray-700">For developers in</span>
                <div className="flex space-x-1">
                  <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-5 h-3 rounded" />
                  <img src="https://flagcdn.com/w20/us.png" alt="USA" className="w-5 h-3 rounded" />
                  <img src="https://flagcdn.com/w20/gb.png" alt="UK" className="w-5 h-3 rounded" />
                  <span className="text-sm text-gray-500">and more</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <Link href="#contact">
                <motion.button
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join Thinkify today
                  <ArrowRightIcon className="w-5 h-5 ml-2 inline-block" />
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 relative max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 relative z-10">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">L</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Frontend Developer</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Senior Software Developer</h3>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Full time</span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Senior level</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">$80-120k</div>
                  <div className="flex items-center text-gray-500">
                    <GlobeAltIcon className="w-4 h-4 mr-1" />
                    <span className="text-sm">Remote</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-4 right-4 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 transform rotate-3 z-0 opacity-60">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg mb-4"></div>
              <div className="text-lg font-bold text-gray-900">Technical Lead Developer</div>
              <div className="text-2xl font-bold text-gray-900 mt-2">$90-130k</div>
            </div>

            <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 transform -rotate-2 z-0 opacity-40">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-lg mb-4"></div>
              <div className="text-lg font-bold text-gray-900">Fullstack Developer</div>
              <div className="text-2xl font-bold text-gray-900 mt-2">$70-100k</div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 1.4 }}
              className="absolute -top-8 right-0 bg-gradient-to-r from-orange-400 to-orange-600 text-white px-4 py-2 rounded-lg shadow-lg"
            >
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                <span className="text-sm font-medium">You've got 3 Job offers</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Alumni Section */}
      <motion.section
        ref={alumnisRef}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={alumnisInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Check out{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                our Thinkify alumni.
              </span>
            </h2>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: 'Yash Pandit', role: 'Senior Research Engineer', company: 'Google', salary: '$160k', location: 'Remote', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face', bg: 'from-pink-400 to-purple-600' },
                { name: 'Jyotendra Sharma', role: 'Senior Software Engineer', company: 'Microsoft', salary: '$155k', location: 'Seattle', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face', bg: 'from-purple-400 to-blue-600' },
                { name: 'Rushikesh Akhare', role: 'Solutions Engineer', company: 'Stripe', salary: '$145k', location: 'San Francisco', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face', bg: 'from-orange-400 to-red-600' },
                { name: 'Sumit Dhanania', role: 'Fullstack Product Engineer', company: 'Netflix', salary: '$170k', location: 'Remote', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=face', bg: 'from-orange-400 to-yellow-600' },
                { name: 'Vikalp P.', role: 'Solutions Engineer', company: 'Salesforce', salary: '$140k', location: 'New York', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face', bg: 'from-blue-400 to-purple-600' },
                { name: 'Sourabh Modi', role: 'CTO Thinkify', company: 'Thinkify', salary: '$200k', location: 'Remote', image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=400&h=400&fit=crop&crop=face', bg: 'from-red-400 to-pink-600' }
              ].map((alumni, index) => (
                <motion.div
                  key={alumni.name}
                  initial={{ opacity: 0, y: 50, rotateY: -20 }}
                  animate={alumnisInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  className="group cursor-pointer perspective-1000"
                  whileHover={{ y: -15, rotateY: 8, rotateX: 5, scale: 1.02 }}
                >
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${alumni.bg} rounded-3xl transform rotate-2 translate-x-2 translate-y-2 opacity-20`}></div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${alumni.bg} rounded-3xl transform rotate-1 translate-x-1 translate-y-1 opacity-40`}></div>
                    
                    <div className={`relative bg-gradient-to-br ${alumni.bg} rounded-3xl p-8 h-96 text-white overflow-hidden transform transition-all duration-500 group-hover:shadow-2xl`}>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                      <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm"></div>
                      <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-white/5 backdrop-blur-sm"></div>
                      
                      <div className="relative z-10 h-full flex flex-col">
                        <div className="flex items-center justify-between mb-6">
                          <div className="w-16 h-16 rounded-2xl overflow-hidden ring-4 ring-white/30">
                            <img 
                              src={alumni.image} 
                              alt={alumni.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold opacity-90">{alumni.salary}</div>
                            <div className="text-sm opacity-70">{alumni.location}</div>
                          </div>
                        </div>
                        
                        <div className="flex-grow">
                          <div className="text-2xl font-bold mb-2">{alumni.name}</div>
                          <div className="text-lg opacity-90 mb-4">{alumni.role}</div>
                          <div className="text-base opacity-80 mb-6">at {alumni.company}</div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-center">
                            <div className="text-lg font-bold">2.5x</div>
                            <div className="text-xs opacity-80">Salary Increase</div>
                          </div>
                          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-center">
                            <div className="text-lg font-bold">12</div>
                            <div className="text-xs opacity-80">Weeks Training</div>
                          </div>
                        </div>
                        
                        <button className="w-full bg-white/20 backdrop-blur-sm text-white py-3 px-6 rounded-xl font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-white/30">
                          Read Success Story
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={alumnisInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mt-12"
            >
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                View All 500+ Success Stories
              </button>
            </motion.div>
          </div>
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
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
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
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
                    <div className="text-purple-600 mb-2">📈</div>
                    <div className="text-sm font-medium text-purple-800">Stagnating career growth</div>
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
                color: 'bg-purple-50 border-purple-200'
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
                gradient: 'from-purple-600 to-pink-600'
              },
              {
                icon: '🔍',
                title: 'Are in search of a 100% free platform that charges hiring partners, not developers.',
                gradient: 'from-blue-600 to-purple-600'
              },
              {
                icon: '⏰',
                title: 'Don\'t want to waste time negotiating the salary you deserve with recruiters.',
                gradient: 'from-green-600 to-blue-600'
              },
              {
                icon: '🤝',
                title: 'Want a lifelong career partner invested in making you a top marketable talent.',
                gradient: 'from-orange-600 to-red-600'
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
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center text-2xl mb-6`}>
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
                color: 'bg-purple-100'
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
      <motion.section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
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
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
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
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-pink-500/25 transition-all duration-300"
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
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
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