'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CompanyCarouselProps {
  title?: string;
  subtitle?: string;
}

const CompanyCarousel: React.FC<CompanyCarouselProps> = ({ 
  title = "Trusted by Industry Leaders",
  subtitle = "Join companies like these who've scaled their engineering teams with Thinkify's elite talent"
}) => {
  const companyLogos = [
    { name: 'Flipkart', src: '/companies/Flipkart_Symbol_0.svg' },
    { name: 'Swiggy', src: '/companies/swiggy.svg' },
    { name: 'Meesho', src: '/companies/meesho.png' },
    { name: 'Netomi', src: '/companies/netomi.png' },
    { name: 'Acko', src: '/companies/Acko_id4WtbwSds_0.svg' },
    { name: 'ThoughtSpot', src: '/companies/ThoughtSpot_idEiE5Z1Gr_0.svg' },
    { name: 'Netskope', src: '/companies/Netskope_idPk6JKSHR_0.svg' },
    { name: 'Whatfix', src: '/companies/Whatfix_idc18D79RQ_0.svg' },
    { name: 'Ethos', src: '/companies/Ethos_idILGnoxOt_0.svg' }
  ];

  return (
    <section className="py-16 relative theme-bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title.includes('Industry Leaders') ? (
              <>Trusted by <span className="theme-gradient-text">Industry Leaders</span></>
            ) : title.includes('Top Companies') ? (
              <>Work with <span className="theme-gradient-text">Top Companies</span></>
            ) : (
              title
            )}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>
        
        <div className="company-flash-container">
          <div className="company-flash-track">
            {/* First set */}
            <div className="company-flash-set">
              {companyLogos.map((logo, index) => (
                <div key={`first-${index}`} className="company-flash-item">
                  <img 
                    src={logo.src} 
                    alt={logo.name}
                    className="company-logo-big"
                  />
                </div>
              ))}
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="company-flash-set">
              {companyLogos.map((logo, index) => (
                <div key={`second-${index}`} className="company-flash-item">
                  <img 
                    src={logo.src} 
                    alt={logo.name}
                    className="company-logo-big"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyCarousel; 