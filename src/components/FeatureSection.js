'use client'

import React from 'react';
import Image from 'next/image';

const FeatureSection = ({ 
  title, 
  subtitle,
  features = [],
  backgroundClass = 'bg-white',
  sectionClassName = ''
}) => {
  return (
    <section className={`${backgroundClass} py-16 ${sectionClassName}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#D9EDFF] text-gray-800 px-4 py-2 rounded-[5px] text-sm font-medium mb-4">
            {subtitle}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {title}
          </h2>
        </div>

        {/* Features Grid */}
        <div className="space-y-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
              }`}
            >
              {/* Text Content */}
              <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-[5px] text-sm font-medium mb-4">
                  {feature.badge}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {feature.description}
                </p>
                <a 
                  href="#contact-form"
                  className="inline-flex items-center gap-2 px-4 bg-white border-2 border-gray-300 rounded-lg text-gray-700 font-medium hover:border-gray-400 hover:bg-gray-50 transition-all"
                  style={{ boxShadow: 'inset 0 -3px 0 0 #C7C8C8', paddingTop: '6px', paddingBottom: '10px' }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact-form')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                >
                  Kom in contact
                  <svg width="20" height="20" role="img"><use href="#ArrowRightMedium"></use></svg>
                </a>
              </div>

              {/* Image/Visual */}
              <div className={`${index % 2 === 1 ? 'md:col-start-1' : ''} flex justify-center`}>
                <div className="relative inline-block">
                  {/* Gradient aura behind image */}
                  <div
                    className="absolute inset-0 blur-[22px] opacity-80"
                    style={{
                      background: 'linear-gradient(90deg, rgba(0, 89, 255, 0.5) 0%, rgba(0, 255, 233, 0.5) 30%, rgba(174, 0, 255, 0.5) 63%, rgba(255, 0, 153, 0.5) 100%)',
                      borderRadius: '5px'
                    }}
                  ></div>
                  
                  {/* Image */}
                  {feature.image && (
                    <div className="relative z-10" style={{ borderRadius: '5px', overflow: 'hidden' }}>
                      <Image
                        src={feature.image}
                        alt={feature.visualTitle}
                        width={500}
                        height={330}
                        className="object-contain"
                        style={{ maxWidth: '100%', height: 'auto' }}
                      />
                      
                      {/* Floating elements for visual interest */}
                      <div className="absolute top-2 right-2 w-8 h-8 bg-yellow-400 rounded-[5px] opacity-80"></div>
                      <div className="absolute bottom-2 left-2 w-6 h-6 bg-blue-400 rounded-[5px] opacity-60"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
