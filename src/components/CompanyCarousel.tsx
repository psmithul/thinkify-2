'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CompanyCarouselProps {
  title?: string;
  subtitle?: string;
}

const CompanyCarousel: React.FC<CompanyCarouselProps> = () => {
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

  // Duplicate the logos array for seamless infinite loop
  const duplicatedLogos = [...companyLogos, ...companyLogos];

  return (
    <section className="py-8 relative theme-bg-surface overflow-hidden"> {/* Reduced vertical padding */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Infinite Loop Company Carousel */}
        <div className="company-infinite-container">
          <div className="company-infinite-track">
            <div className="company-infinite-set">
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={index}
                  className="company-infinite-item"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.name}
                    className="company-logo-infinite"
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