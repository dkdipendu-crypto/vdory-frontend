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

<div className="max-w-7xl mx-auto px-6 pt-8 pb-8">

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
<div className="mt-10 flex flex-col sm:flex-row gap-4">

  <button className="bg-[#122317] text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all">
    Design My Home →
  </button>

  <button className="border border-gray-300 bg-white px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all">
    See How It Works ⓘ
  </button>

</div>
{/* ===================== STATS ===================== */}

<div className="mt-8 max-w-[540px]">
<div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3">

<div className="flex items-center gap-2 lg:gap-1">
<div className="text-x1 lg:text-lg">⏰</div>
<div>
<p className="font-semibold text-sm lg:text-sm text-[#0E1B16]">15 Min</p>
<p className="text-xs lg:text-xs text-gray-500">To Your Design</p>
</div>
</div>

<div className="flex items-center gap-2 lg:gap-1">
<div className="text-x1 lg:text-lg">📋</div>
<div>
<p className="font-semibold text-sm lg:text-sm text-[#0E1B16]">Accurate</p>
<p className="text-xs lg:text-xs text-gray-500">Cost Estimation</p>
</div>
</div>

<div className="flex items-center gap-2 lg:gap-1">
<div className="text-x1 lg:text-lg">🏠</div>
<div>
<p className="font-semibold text-sm lg:text-sm text-[#0E1B16]">100K+</p>
<p className="text-xs lg:text-xs text-gray-500">Homes Designed</p>
</div>
</div>

<div className="flex items-center gap-2 lg:gap-1">
<div className="text-x1 lg:text-lg">👥</div>
<div>
<p className="font-semibold text-sm lg:text-sm text-[#0E1B16]">Trusted by</p>
<p className="text-xs lg:text-xs text-gray-500">Homeowners</p>
</div>
</div>

</div>

</div>
</div>
</div>

{/* RIGHT */}

<div className="relative order-2 lg:order-none">
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
{/* ================= HOW IT WORKS ================= */}

<section className="mt-6 max-w-7xl mx-auto px-6">

<div className="text-center">

<p className="text-[#B7832F] uppercase tracking-[0.18em] text-sm font-semibold">
HOW IT WORKS
</p>

<h2 className="mt-3 text-4xl font-bold text-[#121212]">
Designing your dream home is simple
</h2>

</div>
<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">

{/* Card 1 */}

<div className="text-center">
<div className="relative">
<div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#C79A43] text-white font-bold flex items-center justify-center">
1
</div>

<Image
src="/images/how-step-1.jpg"
alt="Tell us about your home"
width={380}
height={230}
className="rounded-2xl shadow-md"
/>
</div>

<h3 className="mt-6 text-xl font-semibold">
Tell us about your home
</h3>

<p className="mt-2 text-sm text-gray-600 leading-6">
Share your requirements, lifestyle,
budget, and style preferences.
</p>

</div>
{/* Card 2 */}

<div className="text-center">
<div className="relative">
<div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#C79A43] text-white font-bold flex items-center justify-center">
2
</div>

<Image
src="/images/how-step-2.jpg"
alt="AI creates your complete design"
width={380}
height={230}
className="rounded-2xl shadow-md"
/>
</div>

<h3 className="mt-6 text-xl font-semibold">
AI creates your complete design
</h3>

<p className="mt-2 text-sm text-gray-600 leading-6">
Our AI designs every room, exterior,
and suggests the best materials.
</p>
</div>

{/* Card 3 */}

<div className="text-center">
<div className="relative">
<div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#C79A43] text-white font-bold flex items-center justify-center">
3
</div>

<Image
src="/images/how-step-3.jpg"
alt="Explore & customize in 3D"
width={380}
height={230}
className="rounded-2xl shadow-md"
/>
</div>

<h3 className="mt-6 text-xl font-semibold">
Explore & customize in 3D
</h3>

<p className="mt-2 text-sm text-gray-600 leading-6">
Walk through your home, customize
rooms, and see full cost estimation.
</p>
</div>
</div>
</section>
<section className="mt-10 bg-[#23332D] px-0 lg:px-0 py-16">

<div className="max-w-7xl mx-auto px-8 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">

<div>

<p className="text-[#B7832F] uppercase tracking-[0.18em] text-sm font-semibold">
EXPLORE YOUR FUTURE HOME
</p>

<h2 className="mt-4 text-white text-5xl font-bold leading-tight">
Everything you need,
<br />
all in one place
</h2>
<div className="mt-10 flex gap-2">
{/* Card 1 */}
<div className="w-[82px] h-[92px] border border-[#31453F] rounded-xl flex flex-col items-center justify-center text-center hover:border-[#B7832F] transition">
<img
src="/images/icons/3d-walkthrough.png"
alt="3D Walkthrough"
className="w-14 h-14 mb-0 object-contain"
/>
<h4 className="text-white text-[9px] leading-[11px] font-medium px-1">
3D Walkthrough
</h4>
</div>

{/* Card 2 */}
<div className="w-[82px] h-[92px] border border-[#31453F] rounded-xl flex flex-col items-center justify-center text-center hover:border-[#B7832F] transition">
<img
src="images/icons/interior-design.png"
alt="Interior Design"
className="w-14 h-14 mb-0 object-contain"
/>
<h4 className="text-white text-[9px] leading-[11px] font-medium px-1">
Interior & Exterior Design
</h4>
</div>

{/* Card 3 */}
<div className="w-[82px] h-[92px] border border-[#31453F] rounded-xl flex flex-col items-center justify-center text-center hover:border-[#B7832F] transition">
<img
src="images/icons/material-finish.png"
alt="Material & Finish"
className="w-14 h-14 mb-0 object-contain"
/>
<h4 className="text-white text-[9px] leading-[11px] font-medium px-1">
Material & Finish Selection
</h4>
</div>

{/* Card 4 */}
<div className="w-[82px] h-[92px] border border-[#31453F] rounded-xl flex flex-col items-center justify-center text-center hover:border-[#B7832F] transition">
<img
src="images/icons/cost-estimation.png"
alt="Cost Estimation"
className="w-14 h-14 mb-0 object-contain"
/>
<h4 className="text-white text-[9px] leading-[11px] font-medium px-1">
Accurate Cost Estimation
</h4>
</div>

{/* Card 5 */}
<div className="w-[82px] h-[92px] border border-[#31453F] rounded-xl flex flex-col items-center justify-center text-center hover:border-[#B7832F] transition">
<img
src="images/icons/room-customization.png"
alt="Room Customization"
className="w-14 h-14 mb-0 object-contain"
/>
<h4 className="text-white text-[9px] leading-[11px] font-medium px-1">
Room-by-Room Customization
</h4>
</div>

{/* Card 6 */}
<div className="w-[82px] h-[92px] border border-[#31453F] rounded-xl flex flex-col items-center justify-center text-center hover:border-[#B7832F] transition">
<img
src="images/icons/save-share.png"
alt="Save & Share"
className="w-14 h-14 mb-0 object-contain"
/>
<h4 className="text-white text-[9px] leading-[11px] font-medium px-1">
Save & Share Your Project
</h4>
</div>
</div>
</div>
<div>
<div className="flex justify-center items-center">
<img
src="/images/dashboard-showcase.png"
alt="Vdory Dashboard"
className="w-full max-w-[720px] object-contain"
/>
</div>
</div>

</div>

</section>

</section>
);
}