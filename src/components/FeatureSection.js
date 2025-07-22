import React from 'react';
import Image from 'next/image';

const FeatureSection = ({ 
  title, 
  subtitle,
  features = [] 
}) => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#F7D8FA] text-gray-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
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
                <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {feature.badge}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Image/Visual */}
              <div className={`${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                <div className="relative w-full">
                  {/* Gradient aura behind image */}
                  <div
                    className="absolute inset-0 z-0 blur-[22px] opacity-80"
                    style={{
                      background: 'linear-gradient(90deg, rgba(0, 89, 255, 0.5) 0%, rgba(0, 255, 233, 0.5) 30%, rgba(174, 0, 255, 0.5) 63%, rgba(255, 0, 153, 0.5) 100%)',
                      borderRadius: '5px'
                    }}
                  ></div>

                  {/* Image */}
                  {feature.image && (
                    <div className="relative z-10 h-64 w-full" style={{ borderRadius: '5px', overflow: 'hidden' }}>
                      <Image
                        src={feature.image}
                        alt={feature.visualTitle}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  
                  {/* Floating elements for visual interest */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-80 z-20"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-400 rounded-full opacity-60 z-20"></div>
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
