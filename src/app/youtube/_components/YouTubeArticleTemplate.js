import Image from 'next/image';
import Link from 'next/link';
import avatarImage from '@/assets/avatar.png';

function formatDate(value) {
  if (!value) return null;

  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(value));
}

export default function YouTubeArticleTemplate({
  title,
  description,
  videoId,
  publishDate,
  readTime,
  category = 'Video',
  tags = [],
  tocItems = [],
  children,
}) {
  const formattedDate = formatDate(publishDate);

  return (
    <main className="min-h-screen bg-white text-[#0A0A0A]">
      <section className="relative overflow-hidden px-4 pb-12 pt-28 md:pb-16 md:pt-32">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F7F7_58%,#FFFFFF_100%)]" />
        <div className="absolute inset-x-0 top-0 h-72 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(255,255,255,0))]" />
        <div className="absolute -left-24 top-0 h-[70%] w-1/2 rounded-full bg-black/[0.035] blur-3xl" />
        <div className="absolute -right-28 top-10 h-[66%] w-1/2 rounded-full bg-black/[0.028] blur-3xl" />

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-[3px] border border-black/10 bg-white/80 px-4 py-2 text-xs font-medium text-black/55 shadow-[0_18px_60px_rgba(0,0,0,0.08)] backdrop-blur">
            <span className="h-1.5 w-1.5 rotate-45 bg-black/70" aria-hidden="true" />
            {category}
          </div>

          <h1 className="max-w-5xl !font-sans text-[42px] font-medium leading-[0.98] tracking-[-0.025em] text-[#0A0A0A] sm:text-[60px] md:text-[78px] lg:text-[88px]">
            {title}
          </h1>

          {description && (
            <p className="mt-7 max-w-2xl text-sm leading-6 text-black/55 md:text-base md:leading-7">
              {description}
            </p>
          )}

          <div className="mt-10 w-full max-w-5xl overflow-hidden rounded-[3px] border border-black/12 bg-black shadow-[0_28px_80px_rgba(0,0,0,0.16)]">
            <div className="relative aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-white px-4 py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-12">
          <aside className="hidden lg:col-span-2 lg:block">
            {tocItems.length > 0 && (
              <div className="sticky top-28">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-black/45">
                  Contents
                </p>
                <nav className="space-y-2" aria-label="Page contents">
                  {tocItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block text-sm leading-5 text-black/58 transition-colors hover:text-black ${
                        item.level === 3 ? 'pl-4' : ''
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            )}
          </aside>

          <article className="lg:col-span-7">
            <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-black/50">
              {formattedDate && <time dateTime={publishDate}>{formattedDate}</time>}
              {formattedDate && readTime && <span aria-hidden="true">/</span>}
              {readTime && <span>{readTime}</span>}
            </div>

            <div className="text-[17px] leading-[1.75] text-black/72 [&_code]:font-mono [&_h2]:mb-4 [&_h2]:mt-11 [&_h2]:scroll-mt-28 [&_h2]:!font-sans [&_h2]:text-[32px] [&_h2]:font-semibold [&_h2]:leading-[1.12] [&_h2]:tracking-normal [&_h2]:text-black [&_h2:first-child]:mt-0 [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:scroll-mt-28 [&_h3]:!font-sans [&_h3]:text-[22px] [&_h3]:font-semibold [&_h3]:leading-tight [&_h3]:tracking-normal [&_h3]:text-black [&_li]:my-[7px] [&_ol]:mb-[22px] [&_ol]:pl-[22px] [&_p]:mb-[18px] [&_pre]:my-6 [&_pre]:overflow-x-auto [&_pre]:rounded-[3px] [&_pre]:border [&_pre]:border-white/10 [&_pre]:bg-black [&_pre]:p-[18px] [&_pre]:text-sm [&_pre]:leading-relaxed [&_pre]:text-white [&_strong]:font-semibold [&_strong]:text-black [&_ul]:mb-[22px] [&_ul]:pl-[22px]">
              {children}
            </div>

            <div className="mt-14 border-t border-black/10 pt-8">
              <div className="flex flex-col gap-5 rounded-[3px] border border-black/10 bg-white p-5 sm:flex-row sm:items-center">
                <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-full bg-black/8">
                  <Image
                    src={avatarImage}
                    alt="Albin Hot"
                    width={64}
                    height={64}
                    className="h-full w-full object-cover grayscale"
                  />
                </div>
                <div>
                  <h2 className="!font-sans text-lg font-semibold text-black">Albin Hot</h2>
                  <p className="mt-1 text-sm leading-6 text-black/58">
                    SEO and automation operator behind Niblah. I build pages, systems and workflows that turn video ideas into useful execution assets.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <aside className="lg:col-span-3">
            <div className="sticky top-28 space-y-4">
              <div className="rounded-[3px] border border-black/10 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/45">
                  Video
                </p>
                <h2 className="mt-4 !font-sans text-xl font-semibold leading-tight text-black">
                  {title}
                </h2>
                {tags.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-[3px] border border-black/10 px-3 py-1.5 text-xs text-black/58"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/yt/videos"
                className="inline-flex h-12 w-full items-center justify-center rounded-[3px] border border-black bg-black px-5 text-sm font-semibold text-white transition-colors hover:bg-black/90"
              >
                All videos
              </Link>
            </div>
          </aside>
        </div>
      </section>

    </main>
  );
}
