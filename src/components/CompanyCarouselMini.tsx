'use client';

import React from 'react';

const CompanyCarouselMini: React.FC = () => {
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
    <div className="company-flash-container-mini">
      <div className="company-flash-track-mini">
        {/* First set */}
        <div className="company-flash-set-mini">
          {companyLogos.map((logo, index) => (
            <div key={`first-${index}`} className="company-flash-item-mini">
              <img 
                src={logo.src} 
                alt={logo.name}
                className="company-logo-mini"
              />
            </div>
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="company-flash-set-mini">
          {companyLogos.map((logo, index) => (
            <div key={`second-${index}`} className="company-flash-item-mini">
              <img 
                src={logo.src} 
                alt={logo.name}
                className="company-logo-mini"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyCarouselMini; 