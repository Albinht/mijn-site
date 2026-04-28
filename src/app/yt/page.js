import Link from 'next/link';

export const metadata = {
  title: 'Welcome | Niblah YouTube',
  description: 'Watch free content from Niblah or work directly with me on growth systems.',
};

export default function YouTubeHomePage() {
  return (
    <main className="min-h-screen bg-white text-[#0A0A0A]">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pb-10 pt-28">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F7F7_58%,#FFFFFF_100%)]" />
        <div className="absolute inset-x-0 top-0 h-72 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(255,255,255,0))]" />
        <div className="absolute -left-24 top-0 h-[70%] w-1/2 rounded-full bg-black/[0.035] blur-3xl" />
        <div className="absolute -right-28 top-10 h-[66%] w-1/2 rounded-full bg-black/[0.028] blur-3xl" />

        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-[3px] border border-black/10 bg-white/80 px-4 py-2 text-xs font-medium text-black/55 shadow-[0_18px_60px_rgba(0,0,0,0.08)] backdrop-blur">
            <span className="h-1.5 w-1.5 rotate-45 bg-black/70" aria-hidden="true" />
            Welcome
          </div>

          <h1 className="max-w-5xl !font-sans text-[48px] font-medium leading-[0.98] tracking-[-0.025em] text-[#0A0A0A] sm:text-[72px] md:text-[96px] lg:text-[112px]">
            Watch. Learn. Build.
            <span className="block font-light text-[#0A0A0A]">
              All in one <em className="font-serif italic text-black">place.</em>
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-sm leading-6 text-black/58 md:text-base md:leading-7">
            Watch my free content, learn alongside me, and build smarter systems for your own growth.
            <br />
            And when you&apos;re ready to move faster, you can work with me directly.
          </p>

          <div className="mt-9 grid w-full max-w-[360px] grid-cols-2 gap-3">
            <Link
              href="/yt/videos"
              className="inline-flex h-12 w-full items-center justify-center rounded-[3px] border border-black bg-black px-3 text-sm font-semibold text-white transition-colors hover:bg-black/90"
            >
              Learn for Free
            </Link>

            <Link
              href="/yt/work-with-me"
              className="inline-flex h-12 w-full items-center justify-center rounded-[3px] border border-black bg-transparent px-3 text-sm font-semibold text-black transition-colors hover:bg-black hover:text-white"
            >
              Work with me
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
