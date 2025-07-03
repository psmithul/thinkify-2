'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';

export default function CompaniesPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Section 1: Hero */}
      <section className="pt-36 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            className="text-6xl md:text-7xl font-bold mb-8 text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Build your dream team.{' '}
            <span className="gradient-text">Today.</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-neutral-600 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Access world-class engineers instantly. Scale your team without the overhead of traditional hiring.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#contact"
                className="bg-gradient-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all inline-flex items-center justify-center"
              >
                Start Hiring
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#services"
                className="border border-neutral-300 text-neutral-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-neutral-400 transition-all inline-flex items-center justify-center"
              >
                View Services →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Problem & Solution */}
      <section className="section-padding px-6 bg-gradient-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-5xl font-bold mb-6">
              Engineering talent shortage is slowing you down
            </h2>
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto">
              While you're spending months on hiring, your competitors are shipping. Get instant access to proven engineers who can start contributing immediately.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-3xl font-bold mb-6 text-red-600">The Problem</h3>
              <ul className="space-y-4 text-neutral-600">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">✗</span>
                  <span>Traditional hiring takes 3-6 months</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">✗</span>
                  <span>High-quality candidates are off the market quickly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">✗</span>
                  <span>Freelancers lack commitment and context</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">✗</span>
                  <span>Internal team is overwhelmed with interviews</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-3xl font-bold mb-6 text-green-600">Our Solution</h3>
              <ul className="space-y-4 text-neutral-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>Engineers available within 48 hours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>Pre-vetted talent from top companies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>Full-time commitment and cultural fit</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>Minimal time investment from your team</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Services */}
      <section id="services" className="section-padding px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-5xl font-bold mb-6">
              Flexible hiring solutions for every need
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Whether you need a single specialist or an entire engineering team, we have the right solution.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white rounded-xl p-8 border border-neutral-200 hover-lift text-center"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-600 text-2xl">👤</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Individual Engineers</h3>
              <p className="text-neutral-600 mb-6">
                Hire specialized engineers for specific roles. Perfect for filling skill gaps quickly.
              </p>
              <ul className="text-sm text-neutral-500 space-y-2 text-left">
                <li>• Senior-level expertise</li>
                <li>• Immediate availability</li>
                <li>• Flexible engagement terms</li>
                <li>• Cultural alignment</li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl p-8 border border-neutral-200 hover-lift text-center border-primary"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-purple-600 text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Complete Teams</h3>
              <p className="text-neutral-600 mb-6">
                Ready-made engineering teams that work together seamlessly from day one.
              </p>
              <ul className="text-sm text-neutral-500 space-y-2 text-left">
                <li>• Pre-integrated teams</li>
                <li>• Proven collaboration</li>
                <li>• Full-stack capabilities</li>
                <li>• Established workflows</li>
              </ul>
              <div className="mt-4 px-3 py-1 bg-primary/10 text-primary text-xs rounded-full inline-block">
                Most Popular
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl p-8 border border-neutral-200 hover-lift text-center"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-green-600 text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Specialized Talent</h3>
              <p className="text-neutral-600 mb-6">
                Niche experts for specific technologies, industries, or complex challenges.
              </p>
              <ul className="text-sm text-neutral-500 space-y-2 text-left">
                <li>• Domain expertise</li>
                <li>• Rare skill sets</li>
                <li>• Industry knowledge</li>
                <li>• Problem-solving focus</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Process */}
      <section className="section-padding px-6 bg-gradient-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-5xl font-bold mb-6">
              From brief to brilliant team in 72 hours
            </h2>
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto">
              Our streamlined process ensures you get the right talent without the typical hiring headaches.
            </p>
          </motion.div>
          
          <motion.div 
            className="relative"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="timeline-line absolute top-1/2 left-0 right-0 transform -translate-y-1/2 hidden md:block"></div>
            
            <div className="grid md:grid-cols-4 gap-8 relative">
              {[
                {
                  step: "01",
                  title: "Tell us your needs",
                  description: "Share your requirements, timeline, and team culture in a 15-minute conversation."
                },
                {
                  step: "02", 
                  title: "Get matched instantly",
                  description: "Our AI matches you with pre-vetted engineers based on your specific needs."
                },
                {
                  step: "03",
                  title: "Interview & select",
                  description: "Meet your shortlisted candidates and select your preferred engineers."
                },
                {
                  step: "04",
                  title: "Start building",
                  description: "Onboard your new team members and start shipping features immediately."
                }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  className="text-center relative"
                  variants={fadeInUp}
                >
                  <div className="bg-white border border-neutral-200 rounded-xl p-6 hover-lift">
                    <div className="w-12 h-12 bg-gradient-primary text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-neutral-600 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Contact & CTA */}
      <section id="contact" className="section-padding px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            {...fadeInUp}
          >
            <h2 className="text-5xl font-bold mb-6">
              Ready to scale your engineering team?
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Tell us about your project and we'll match you with the perfect engineers in 48 hours.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-2xl p-8 border border-neutral-200 hover-lift"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Company name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all" 
                    placeholder="Your company" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Your name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all" 
                    placeholder="Full name" 
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Work email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all" 
                    placeholder="work@company.com" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Team size needed</label>
                  <select className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all">
                    <option>1 engineer</option>
                    <option>2-3 engineers</option>
                    <option>4-6 engineers</option>
                    <option>7+ engineers</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Project details</label>
                <textarea 
                  rows={4} 
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all" 
                  placeholder="Tell us about your project, required skills, timeline, and any specific requirements..."
                ></textarea>
              </div>
              <motion.button 
                type="submit" 
                className="w-full bg-gradient-primary text-white py-4 rounded-lg font-semibold hover:shadow-xl transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Your Team in 48 Hours
              </motion.button>
            </form>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-neutral-500 mb-4 text-sm">Trusted by 500+ companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {['Meta', 'Google', 'Stripe', 'Airbnb', 'Uber'].map((company, index) => (
                <div key={index} className="px-4 py-2 bg-neutral-100 rounded-lg">
                  <span className="text-neutral-600 font-medium text-sm">{company}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 