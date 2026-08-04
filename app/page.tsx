import Image from "next/image";
import Link from "next/link";
import Hero from "../components/Hero";

export default function Home() {

return (
<main className="min-h-screen bg-gradient-to-b from-white via-zinc-50 to-white text-zinc-900">

<Hero />
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
