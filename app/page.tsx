import Image from "next/image";
import Link from "next/link";

export default function Home() {
const steps = [
{
number: "01",
title: "Upload Clips",
description: "Upload your raw video footage.",
},
{
number: "02",
title: "Choose Category",
description: "Select content type and objective.",
},
{
number: "03",
title: "Style & Variation",
description: "Pick the look, tone and format.",
},
{
number: "04",
title: "Duration Settings",
description: "Set duration and slow-motion options.",
},
{
number: "05",
title: "Generate Video",
description: "AI creates publish-ready content.",
},
];

return (
<main className="min-h-screen bg-gradient-to-b from-white via-zinc-50 to-white text-zinc-900">
{/* Header */}
<header className="flex items-center justify-between px-6 py-6 md:px-12">
<div>
<Image
src="/logo-vdory.png"
alt="Vidori AI"
width={121}
height={20}
priority
/>
<p className="text-xs text-zinc-500 mt-1">
Shaping Digital Reality
</p>
</div>

<Link
href="/login"
className="rounded-full border border-zinc-300 px-6 py-2 hover:bg-zinc-100 transition"
>
Login
</Link>
</header>

{/* Hero */}
<section className="mx-auto max-w-6xl px-6 pt-20 pb-24 text-center">
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

{/* How VDORY Works */}
<section className="max-w-7xl mx-auto px-6 py-12">
<h2 className="text-4xl font-bold text-center mb-16">
How VDORY Works
</h2>

<div className="relative">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
{steps.map((step) => (
<div
key={step.number}
className="bg-white border border-zinc-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition"
>
<div className="text-5xl font-light text-zinc-300 mb-6">
{step.number}
</div>

<h3 className="text-xl font-semibold mb-3">
{step.title}
</h3>

<p className="text-zinc-600">
{step.description}
</p>
</div>
))}
</div>
</div>
</section>

{/* Footer */}
<footer className="border-t border-zinc-200 mt-20">
<div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
<div>
<h3 className="font-bold text-xl">VDORY.AI</h3>
<p className="text-zinc-500 text-sm">
Shaping Digital Reality
</p>
</div>

<div className="flex gap-8 text-zinc-600 text-sm">
<a href="#">About</a>
<a href="#">Contact</a>
<a href="#">Privacy Policy</a>
<a href="#">FAQs</a>
</div>
</div>

<div className="pb-8 text-center text-sm text-zinc-500">
© 2026 Vdory. All rights reserved.
</div>
</footer>
</main>
);
}
