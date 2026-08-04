"use client";

import { useState } from "react";
import Image from "next/image";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
subsets: ["latin"],
weight: "400",
});

export default function Hero() {
const [menuOpen, setMenuOpen] = useState(false);
return (
<section className="bg-[#F8F6F2]">

{/* Navbar */}

<nav className="max-w-7xl mx-auto h-20 px-6 lg:px-8 flex items-center justify-between">

<Image
src="/logo-vdory.png"
alt="Vdory"
width={118}
height={31}
priority
/>

<div className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-gray-700 ml-auto mr-6">

<a href="#">How It Works</a>
<a href="#">Features</a>
<a href="#">Pricing</a>
<a href="#">Gallery</a>
<a href="#">About Us</a>

</div>

<button className="hidden lg:block bg-[#122317] text-white px-4 py-2 text-sm rounded-full font-medium hover:scale-105 transition-all">
Get Started
</button>
<div className="flex lg:hidden items-center">
<button
onClick={() => setMenuOpen(!menuOpen)}
className="text-[28px] text-[#121212]"
>
{menuOpen ? "✕" : "☰"}
</button>
</div>
</nav>
{menuOpen && (
<div className="lg:hidden bg-white border-t border-gray-200 px-6 py-5 space-y-4">
<a href="#" className="block">How It Works</a>
<a href="#" className="block">Features</a>
<a href="#" className="block">Pricing</a>
<a href="#" className="block">Gallery</a>
<a href="#" className="block">About Us</a>

<button className="w-full mt-2 bg-[#122317] text-white py-3 rounded-full">
Get Started
</button>
</div>
)}

{/* Hero */}

<div className="max-w-7xl mx-auto px-6 pt-8 pb-16">

<div className="grid lg:grid-cols-2 gap-16 items-center">

{/* LEFT */}

<div>

<div className="inline-block bg-[#EFE2C2] text-[#9B6B25] px-4 py-2 rounded-full text-xs tracking-[2px] font-semibold uppercase">

AI Powered Home Design Platform

</div>

<h1 className="mt-8 text-[52px] sm:text-6x1 font-black leading-[0.95] text-[#121212]">

Design Your
<br />
Dream Home

</h1>

<h2
className={`${greatVibes.className} mt-4 text-5xl text-[#B7832F]`}
>
Before You Build

</h2>

<p className="mt-8 text-xl leading-9 text-gray-600 max-w-xl">

Create stunning 3D home designs, explore every detail,
and get accurate construction cost estimates before
you build.

</p>

</div>

{/* RIGHT */}

<div className="relative">
<div
className="absolute inset-0 pointer-events-none"
style={{
WebkitMaskImage:
"radial-gradient(circle at 90% 90%, black 55%, transparent 100%)",
maskImage:
"radial-gradient(circle at 90% 90%, black 55%, transparent 100%)",
}}
>
    </div>
<div className="relative overflow-hidden rounded-x1">

<Image
src="/images/hero-house-1.JPEG"
alt="Luxury Home"
width={900}
height={900}
priority
className="w-full h-auto object-cover"
/>
<div
className="absolute inset-y-0 left-0 w-28 md:w-72 pointer-events-none"
style={{
background:
"linear-gradient(to right, #F8F6F2 0%, rgba(248,246,242,0.95) 20%, rgba(248,246,242,0.65) 45%, rgba(248,246,242,0) 100%)",
}}
></div>
<div
className="absolute inset-x-0 top-0 h-32 pointer-events-none"
style={{
background:
"linear-gradient(to bottom, #F8F6F2 0%, rgba(248,246,242,0.92) 18%, rgba(248,246,242,0.55) 45%, rgba(248,246,242,0) 100%)",
}}
></div>
</div>

</div>

</div>

</div>

</section>
);
}