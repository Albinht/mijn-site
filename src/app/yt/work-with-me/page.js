import WorkWithMeClient from './WorkWithMeClient';

export const metadata = {
  title: 'Work with me | Niblah YouTube',
  description: 'Work with Niblah on practical SEO, automation, Shopify and growth systems.',
};

export default function YouTubeWorkWithMePage() {
  return (
    <main className="min-h-screen bg-white text-[#0A0A0A]">
      <section className="relative min-h-screen overflow-hidden px-4 pb-16 pt-28 md:pb-24 md:pt-32">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F7F7_58%,#FFFFFF_100%)]" />
        <div className="absolute inset-x-0 top-0 h-72 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(255,255,255,0))]" />
        <div className="absolute -left-24 top-0 h-[70%] w-1/2 rounded-full bg-black/[0.035] blur-3xl" />
        <div className="absolute -right-28 top-10 h-[66%] w-1/2 rounded-full bg-black/[0.028] blur-3xl" />

        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-[3px] border border-black/10 bg-white/80 px-4 py-2 text-xs font-medium text-black/55 shadow-[0_18px_60px_rgba(0,0,0,0.08)] backdrop-blur">
            <span className="h-1.5 w-1.5 rotate-45 bg-black/70" aria-hidden="true" />
            Work with me
          </div>

          <h1 className="max-w-5xl !font-sans text-[44px] font-medium leading-[0.98] tracking-[-0.025em] text-[#0A0A0A] sm:text-[64px] md:text-[86px] lg:text-[96px]">
            Build the system
            <span className="block font-light text-[#0A0A0A]">
              behind the <em className="font-serif italic text-black">video.</em>
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-sm leading-6 text-black/55 md:text-base md:leading-7">
            If one of the YouTube workflows is close to what you need, this is the page for turning it into a working implementation for your business.
          </p>

          <WorkWithMeClient />
        </div>
      </section>
    </main>
  );
}
