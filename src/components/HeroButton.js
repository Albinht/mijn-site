"use client";
import Link from 'next/link';

export default function HeroButton({ href, children }) {
  return (
    <Link 
      href={href}
      className="inline-flex items-center justify-center gap-2 font-semibold text-white text-base px-8 py-4 rounded-full bg-[#1795FF] hover:bg-[#0f7dd4] transition-all duration-200 border-2 border-black hover:translate-y-1 hover:shadow-[0_3px_0_0_#000] shadow-[0_6px_0_0_#000]"
    >
      {children}
    </Link>
  );
}
