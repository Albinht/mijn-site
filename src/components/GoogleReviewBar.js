'use client';

const reviewsRow1 = [
  { name: 'Marcel B.', text: 'Uitstekende SEO resultaten! Binnen 3 maanden #1 positie bereikt.', rating: 5 },
  { name: 'Marlon V.', text: 'Professionele Google Ads aanpak, omzet 180% gestegen!', rating: 5 },
  { name: 'Gerlinde K.', text: 'Zeer tevreden met de persoonlijke begeleiding en resultaten.', rating: 5 },
  { name: 'Patrick S.', text: 'Website optimalisatie heeft wonderen gedaan voor conversie.', rating: 5 },
  { name: 'Linda M.', text: 'Rankings verbeterd en hele marketing proces geoptimaliseerd.', rating: 5 },
  { name: 'Sophie D.', text: 'Van pagina 3 naar top 3 voor al onze hoofdtermen!', rating: 5 },
];

const reviewsRow2 = [
  { name: 'Tom W.', text: 'Elke nieuwe blog post rankt perfect dankzij hun strategie.', rating: 5 },
  { name: 'Emma R.', text: 'Na 2 maanden al duidelijk meer bezoekers en aanvragen.', rating: 5 },
  { name: 'David E.', text: 'Technische SEO audit bracht cruciale verbeteringen aan het licht.', rating: 5 },
  { name: 'Sarah M.', text: '2 jaar samenwerking, proactief en deskundig. Top service!', rating: 5 },
  { name: 'Mike O.', text: 'SEO en Google Ads combinatie bracht ons naar een hoger niveau.', rating: 5 },
  { name: 'Anna K.', text: 'Content strategie werkt perfect. Meer traffic en conversies!', rating: 5 },
];

const GoogleReviewCard = ({ review }) => (
  <div className="flex-shrink-0 bg-white rounded-lg border border-gray-200 p-3 mx-2 w-80">
    <div className="flex items-center gap-2 mb-2">
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
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
        ))}
      </div>
    </div>
    <p className="text-sm text-gray-700 mb-2">{review.text}</p>
    <p className="text-xs text-gray-500 font-medium">{review.name}</p>
  </div>
);

export default function GoogleReviewBar() {
  const duplicatedReviewsRow1 = [...reviewsRow1, ...reviewsRow1, ...reviewsRow1];
  const duplicatedReviewsRow2 = [...reviewsRow2, ...reviewsRow2, ...reviewsRow2];

  return (
    <section className="bg-white py-12">
      {/* First slider - scrolling left */}
      <div className="w-full overflow-hidden mb-6">
        <div 
          className="flex"
          style={{
            animation: 'scroll 40s linear infinite',
            width: 'fit-content'
          }}
        >
          {duplicatedReviewsRow1.map((review, index) => (
            <GoogleReviewCard key={index} review={review} />
          ))}
        </div>
      </div>

      {/* Second slider - scrolling right */}
      <div className="w-full overflow-hidden">
        <div 
          className="flex"
          style={{
            animation: 'scrollReverse 40s linear infinite',
            width: 'fit-content'
          }}
        >
          {duplicatedReviewsRow2.map((review, index) => (
            <GoogleReviewCard key={`row2-${index}`} review={review} />
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        @keyframes scrollReverse {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
