import Image from 'next/image';
import Link from 'next/link';
import { getSortedYouTubePosts } from '../data';

export const metadata = {
  title: 'Free Videos | Niblah YouTube',
  description: 'Free SEO, automation, Shopify and growth tutorials from Niblah.',
};

function VideoCard({ post }) {
  return (
    <article className="overflow-hidden rounded-[3px] border border-black/10 bg-white transition-shadow duration-300 hover:shadow-[0_22px_70px_rgba(0,0,0,0.08)]">
      <Link href={`/yt/${post.slug}`} className="group block">
        <div className="relative h-48 bg-black/5">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            className="object-cover grayscale transition duration-500 md:group-hover:grayscale-0"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
          <div className="absolute left-4 top-4">
            <span className="rounded-[3px] bg-black px-3 py-1.5 text-xs font-medium text-white">
              {post.category}
            </span>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-3 flex items-center gap-3 text-sm text-black/45">
            <time dateTime={post.publishDate}>
              {new Date(post.publishDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>/</span>
            <span>{post.readTime}</span>
          </div>

          <h2 className="mb-3 !font-sans text-xl font-semibold leading-tight text-black line-clamp-2">
            {post.title}
          </h2>

          <p className="mb-5 text-sm leading-6 text-black/58 line-clamp-3">
            {post.excerpt}
          </p>

          <div className="mb-5 flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-[3px] border border-black/10 px-3 py-1 text-xs text-black/58"
              >
                {tag}
              </span>
            ))}
          </div>

          <span className="inline-flex h-10 items-center justify-center rounded-[3px] bg-black px-4 text-sm font-semibold text-white">
            Watch and read
          </span>
        </div>
      </Link>
    </article>
  );
}

export default function YouTubeVideosPage() {
  const posts = getSortedYouTubePosts();

  return (
    <main className="min-h-screen bg-white text-[#0A0A0A]">
      <section className="relative overflow-hidden px-4 pb-12 pt-28 md:pb-16 md:pt-32">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F7F7_58%,#FFFFFF_100%)]" />
        <div className="absolute inset-x-0 top-0 h-72 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(255,255,255,0))]" />
        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-[3px] border border-black/10 bg-white/80 px-4 py-2 text-xs font-medium text-black/55 shadow-[0_18px_60px_rgba(0,0,0,0.08)] backdrop-blur">
            <span className="h-1.5 w-1.5 rotate-45 bg-black/70" aria-hidden="true" />
            Learn for free
          </div>

          <h1 className="max-w-5xl !font-sans text-[44px] font-medium leading-[0.98] tracking-[-0.025em] text-[#0A0A0A] sm:text-[64px] md:text-[86px] lg:text-[96px]">
            Free videos
            <span className="block font-light">
              and <em className="font-serif italic text-black">tutorials.</em>
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-sm leading-6 text-black/58 md:text-base md:leading-7">
            Practical breakdowns for SEO, automation, Shopify and growth systems.
          </p>
        </div>
      </section>

      <section className="border-t border-black/10 px-4 py-14 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-black/45">
                Latest
              </p>
              <h2 className="!font-sans text-3xl font-semibold text-black md:text-4xl">
                Watch and read
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-black/55">
              Each video has a dedicated page with the embed first and a clean written breakdown underneath.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <VideoCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
