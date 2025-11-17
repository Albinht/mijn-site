'use client'

const DevelopmentReviewSlider = () => {
  const developmentReviews = [
    {
      name: 'Mark van der Berg',
      company: 'CEO FashionHub',
      rating: 5,
      text: 'Niblah heeft onze Shopify webshop van A tot Z gebouwd. De resultaten zijn fenomenaal - 185% meer conversie in het eerste jaar!'
    },
    {
      name: 'Sarah Jansen',
      company: 'Founder BioBoutique',
      rating: 5,
      text: 'De expertise van Niblah in custom development is ongeëvenaard. Ze denken mee, komen met creatieve oplossingen en leveren altijd op tijd.'
    },
    {
      name: 'Lisa Bakker',
      company: 'E-commerce Manager',
      rating: 5,
      text: 'Van concept tot lancering in 6 weken. Niblah heeft onze visie perfect vertaald naar een converterende website. Absolute aanrader!'
    },
    {
      name: 'Thomas de Vries',
      company: 'Tech Startup',
      rating: 5,
      text: 'De custom app integraties die Niblah heeft gebouwd hebben onze workflow volledig getransformeerd. Perfect werk!'
    },
    {
      name: 'Emma Verhoeven',
      company: 'Fashion Retailer',
      rating: 5,
      text: 'Conversieratio van 1.8% naar 5.2% na de website optimalisatie door Niblah. Hun focus op UX maakt echt het verschil.'
    },
    {
      name: 'Jan Willem Peters',
      company: 'B2B Wholesale',
      rating: 5,
      text: 'De WordPress website die Niblah heeft gebouwd presteert perfect. Snel, veilig en makkelijk te beheren. Topservice!'
    }
  ];

  const moreDevelopmentReviews = [
    {
      name: 'Rachel de Groot',
      company: 'Beauty Brand',
      rating: 5,
      text: 'Onze nieuwe Shopify store draait als een zonnetje. Niblah heeft alles perfect geoptimaliseerd voor snelheid en conversie.'
    },
    {
      name: 'Tom Hendricks',
      company: 'Sports Equipment',
      rating: 5,
      text: 'De migratie van Magento naar Shopify was naadloos. Niblah heeft alle data perfect overgezet en de nieuwe shop presteert veel beter.'
    },
    {
      name: 'Sophie van Dam',
      company: 'Home Decor Shop',
      rating: 5,
      text: 'Custom WordPress theme die perfect aansluit bij ons merk. De checkout flow is zo geoptimaliseerd dat abandonment met 40% is gedaald.'
    },
    {
      name: 'Alex Koning',
      company: 'Electronics Store',
      rating: 5,
      text: 'Van 10K naar 150K maandomzet in 8 maanden. Niblah\'s development expertise en groeistrategie hebben onze business getransformeerd.'
    },
    {
      name: 'Maria van Leeuwen',
      company: 'Jewelry Business',
      rating: 5,
      text: 'De custom Shopify apps die Niblah heeft gebouwd voor onze personalisatie opties zijn geweldig. Klanten zijn enthousiast!'
    },
    {
      name: 'Chris Mulder',
      company: 'Food & Beverage',
      rating: 5,
      text: 'WordPress website met WooCommerce integratie werkt perfect. Niblah heeft alles naadloos gekoppeld. Inventory management is nu een makkie.'
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

  const duplicatedReviews = [...developmentReviews, ...developmentReviews];
  const duplicatedMoreReviews = [...moreDevelopmentReviews, ...moreDevelopmentReviews];

  return (
    <section className="bg-white py-16">
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

export default DevelopmentReviewSlider;
