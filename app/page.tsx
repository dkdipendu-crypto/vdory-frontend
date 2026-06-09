import Image from "next/image";
import Link from "next/link";

export default function Home() {

return (
<main className="min-h-screen bg-gradient-to-b from-white via-zinc-50 to-white text-zinc-900">
{/* Header */}
<header className="sticky top-0 z-50 bg-white flex items-center justify-between px-6 py-4 md:px-12">
<div>
<Image
src="/logo-vdory.png"
alt="Vidori AI"
width={121}
height={20}
priority
/>

</div>

<Link
href="/login"
className="rounded-full border border-zinc-300 px-6 py-2 hover:bg-zinc-100 transition"
>
Login
</Link>
</header>

{/* Hero */}
<section className="mx-auto max-w-6xl px-6 pt-10 pb-16 text-center">
<p className="tracking-[0.3em] text-xs uppercase text-zinc-500 mb-8">
AI-Powered Content Production Platform
</p>

<h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
Transform Raw Footage
<br />
Into Publish-Ready
<br />
Social Content
</h1>

<p className="mx-auto mt-8 max-w-2xl text-lg text-zinc-600">
Upload clips, choose your style, generate professional social media
videos, and scale content production in minutes.
</p>

<div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4">
<Link
href="/signup"
className="rounded-full bg-black text-white px-8 py-4 hover:opacity-90 transition"
>
Get Started
</Link>

<Link
href="/login"
className="rounded-full border border-zinc-300 px-8 py-4 hover:bg-zinc-100 transition"
>
Login
</Link>

</div>
</section>

{/* Footer */}
<footer className="border-t border-zinc-200 mt-2">
<div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-8">

<div className="flex gap-8 text-zinc-600 text-sm">
<Link href="/about">About</Link>

<Link href="/support">Contact</Link>

<Link href="/privacy">Privacy Policy</Link>

<Link href="/faq">FAQs</Link>
</div>
</div>

<div className="pb-8 text-center text-sm text-zinc-500">
<p className="mb-1">
Shaping Digital Reality
</p>

<p>
© 2026 Vdory. All rights reserved.
</p>
</div>
</footer>
</main>
);
}
