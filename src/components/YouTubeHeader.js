import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '/yt', active: true },
  { label: 'About me', href: '/yt#about-me' },
  { label: 'Work with me', href: '/yt/work-with-me' },
];

export default function YouTubeHeader() {
  return (
    <header className="fixed inset-x-0 top-3 z-[80] px-3 md:top-8 md:px-6">
      <div className="mx-auto flex h-12 max-w-[620px] items-center justify-between rounded-[3px] border border-white/18 bg-black/92 px-4 text-white shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-md md:px-5">
        <Link
          href="/yt"
          className="text-[22px] font-normal leading-none tracking-normal text-white"
          aria-label="Niblah YouTube home"
        >
          Niblah
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex items-center gap-2 text-[18px] font-normal leading-none text-white/86 transition-colors hover:text-white"
            >
              {item.active && (
                <span className="h-2 w-2 rotate-45 bg-white" aria-hidden="true" />
              )}
              {item.label}
            </Link>
          ))}
        </nav>

        <details className="group md:hidden">
          <summary
            className="inline-flex h-8 w-8 cursor-pointer list-none items-center justify-center rounded-[3px] border border-white/22 bg-white/10 text-white [&::-webkit-details-marker]:hidden"
            aria-label="Toggle menu"
          >
            <span className="sr-only">Toggle menu</span>
            <span className="relative h-[14px] w-[14px]" aria-hidden="true">
              <span className="absolute left-0 top-0 h-px w-[14px] bg-current transition-transform group-open:translate-y-[6.5px] group-open:rotate-45" />
              <span className="absolute left-0 top-[6.5px] h-px w-[14px] bg-current transition-opacity group-open:opacity-0" />
              <span className="absolute left-0 top-[13px] h-px w-[14px] bg-current transition-transform group-open:-translate-y-[6.5px] group-open:-rotate-45" />
            </span>
          </summary>

          <nav
            className="fixed inset-x-3 top-[68px] z-[90] flex flex-col rounded-[3px] border border-white/18 bg-black p-2 text-white shadow-[0_18px_60px_rgba(0,0,0,0.32)]"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 rounded-[3px] px-3 py-3 text-base text-white/86 transition-colors hover:bg-white/8 hover:text-white"
              >
                {item.active && (
                  <span className="h-2 w-2 rotate-45 bg-white" aria-hidden="true" />
                )}
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
