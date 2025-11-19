'use client'

const SEOReviewSlider = () => {
  const seoReviews = [
    {
      name: 'Pieter Janssen',
      company: 'E-commerce Manager',
      rating: 5,
      text: 'Na 4 maanden SEO met Niblah staan we eindelijk in de top 3 voor onze belangrijkste zoekwoorden. Traffic is met 186% gestegen!'
    },
    {
      name: 'Linda Bakker',
      company: 'Marketing Director',
      rating: 5,
      text: 'De transparantie en strategische aanpak van Niblah maken echt het verschil. Eindelijk een SEO-partner die resultaat levert.'
    },
    {
      name: 'Mark de Vries',
      company: 'Founder TechStart',
      rating: 5,
      text: 'Van pagina 3 naar positie 1 in 6 maanden. De technische optimalisaties en content strategie zijn onze game-changer geweest.'
    },
    {
      name: 'Sarah Peters',
      company: 'CEO Fashion Online',
      rating: 5,
      text: 'Organisch verkeer gestegen van 5K naar 42K bezoekers per maand. Niblah\'s SEO expertise spreekt voor zich!'
    },
    {
      name: 'Tom Verhoeven',
      company: 'Restaurant Eigenaar',
      rating: 5,
      text: 'Local SEO heeft ons restaurant op de kaart gezet. Dagelijks nieuwe reserveringen via Google. Fantastisch!'
    },
    {
      name: 'Eva van Dam',
      company: 'B2B Services',
      rating: 5,
      text: 'De linkbuilding strategie van Niblah is next level. Onze domain authority is enorm gegroeid en we ranken voor steeds meer keywords.'
    }
  ];

  const moreSeoReviews = [
    {
      name: 'Joris Hendriks',
      company: 'Webshop Eigenaar',
      rating: 5,
      text: 'Content optimalisatie heeft onze conversieratio met 127% verbeterd. Niet alleen meer traffic, maar ook betere traffic.'
    },
    {
      name: 'Melissa de Groot',
      company: 'Marketing Manager',
      rating: 5,
      text: 'De maandelijkse rapportages zijn super duidelijk. Je ziet precies wat je investering oplevert. Niblah denkt écht mee!'
    },
    {
      name: 'David Mulder',
      company: 'SaaS Founder',
      rating: 5,
      text: 'Van 0 naar 15K organische bezoekers in een jaar. De SEO strategie is perfect afgestemd op ons product en doelgroep.'
    },
    {
      name: 'Sophie Koning',
      company: 'E-learning Platform',
      rating: 5,
      text: 'Technical SEO audit en fixes hebben onze site speed verdubbeld. Rankings zijn sindsdien alleen maar omhoog gegaan.'
    },
    {
      name: 'Lars van Leeuwen',
      company: 'Advocatenkantoor',
      rating: 5,
      text: 'Local SEO pakket heeft ons kantoor veel meer zichtbaarheid gegeven. We staan nu nummer 1 in ons gebied!'
    },
    {
      name: 'Anna Smit',
      company: 'Online Marketeer',
      rating: 5,
      text: 'Eindelijk een SEO-partner die niet alleen kijkt naar rankings maar naar daadwerkelijke business groei. Top samenwerking!'
    }
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
    <div className="bg-white rounded-lg border-2 border-black p-6 flex-shrink-0 w-[85vw] max-w-[340px] sm:max-w-none sm:w-96 mx-3 shadow-[4px_4px_0_0_#000]">
      <div className="flex items-center gap-2 mb-4">
        {/* Google G Logo */}
        <div className="w-5 h-5 flex-shrink-0">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        </div>
        {/* Stars */}
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} filled={i < review.rating} />
          ))}
        </div>
      </div>
      <h3 className="font-bold text-lg mb-1">{review.name}</h3>
      <p className="text-sm text-gray-500 mb-3">{review.company}</p>
      <p className="text-gray-600 text-sm">{review.text}</p>
    </div>
  );

  const duplicatedReviews = [...seoReviews, ...seoReviews];
  const duplicatedMoreReviews = [...moreSeoReviews, ...moreSeoReviews];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-900">
          <span>Wij krijgen een</span>
          <span className="font-bold text-lg">4.9</span>
          <span>op Google uit</span>
          <span className="font-bold">143 beoordelingen</span>
        </div>
      </div>

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
            <ReviewCard key={`row2-${index}`} review={review} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollReverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default SEOReviewSlider;
