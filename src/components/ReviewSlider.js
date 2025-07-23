import React from 'react';

const reviews = [
  {
    name: 'Watzalikken',
    rating: 5,
    text: 'This course gave me exactly what I needed — no fluff, no fake promises. Just real, actionable steps that helped me get results within weeks. Highly recommended.',
  },
  {
    name: 'Buurman & Buurman',
    rating: 5,
    text: 'I had issues understanding how to fix my site’s Core Web Vitals, but the course broke it all down in a super simple way. I finally feel in control of my SEO.',
  },
  {
    name: 'Rijschool Campus',
    rating: 5,
    text: 'After watching the first module, I had a call with Albin. One week later I published my first optimized page. Seven months later, I’m #1 for my main keyword.',
  },
  {
    name: 'Herbalife',
    rating: 5,
    text: 'Hands down the best SEO course I’ve taken. Clear videos, fast support, and actual strategies that work — not theory. I even got help on a Sunday.',
  },
  {
    name: 'ShoeSupply',
    rating: 5,
    text: 'Since applying what I learned in the course, our traffic and revenue have both grown massively. This is the SEO knowledge I wish I had years ago.',
  },
  {
    name: 'Plasticz',
    rating: 4.5,
    text: 'I’m really happy with the way this course was structured. Stefan lays out a clear roadmap and keeps it simple. It’s not just info — it’s action.',
  },
];

const moreReviews = [
  {
    name: 'TechStart',
    rating: 5,
    text: 'Amazing course! I went from page 2 to position #1 in 3 months. The SEO techniques are clear and actually work — even in a competitive niche.',
  },
  {
    name: 'WebWinkel Pro',
    rating: 5,
    text: 'This course tripled our online sales. Straightforward explanations, no filler content, and a system that delivers fast.',
  },
  {
    name: 'LocalBusiness',
    rating: 4.5,
    text: 'Thanks to the local SEO strategy in the course, we now get way more walk-in clients. Paid for itself in just two months.',
  },
  {
    name: 'E-commerce Expert',
    rating: 5,
    text: 'The technical SEO tips in this course were game-changing. Our site loads faster, ranks higher, and we’re getting more conversions.',
  },
  {
    name: 'Marketing Agency',
    rating: 5,
    text: 'We use this course to train our new team members. It’s clear, practical, and aligned with what actually works in 2025.',
  },
  {
    name: 'Online Shop',
    rating: 4.5,
    text: 'Our visibility improved, traffic grew, and we finally see consistent conversions. This isn’t just a course — it’s a blueprint.',
  },
];


const StarIcon = ({ filled }) => (
  <svg
    className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const ReviewCard = ({ review }) => (
  <div className="bg-white rounded-lg border border-gray-200 p-6 flex-shrink-0 w-96 mx-3">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} filled={i < review.rating} />
        ))}
      </div>
      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
    </div>
    <h3 className="font-bold text-lg mb-2">{review.name}</h3>
    <p className="text-gray-600 text-sm">{review.text}</p>
  </div>
);

const ReviewSlider = () => {
  const duplicatedReviews = [...reviews, ...reviews];
  const duplicatedMoreReviews = [...moreReviews, ...moreReviews];

  return (
    <section className="bg-white py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">The <span className="bg-[#F7D8FA] px-2 rounded italic">reviews</span> don&apos;t lie</h2>
        
        {/* First slider - scrolling left */}
        <div className="relative w-full overflow-hidden mb-8">
            <div 
              className="flex"
              style={{
                animation: 'scroll 25s linear infinite',
                width: 'calc(200%)'
              }}
            >
                {duplicatedReviews.map((review, index) => (
                    <ReviewCard key={index} review={review} />
                ))}
            </div>
        </div>
        
        {/* Second slider - scrolling right */}
        <div className="relative w-full overflow-hidden">
            <div 
              className="flex"
              style={{
                animation: 'scrollReverse 25s linear infinite',
                width: 'calc(200%)'
              }}
            >
                {duplicatedMoreReviews.map((review, index) => (
                    <ReviewCard key={`more-${index}`} review={review} />
                ))}
            </div>
        </div>
    </section>
  );
};

export default ReviewSlider;
