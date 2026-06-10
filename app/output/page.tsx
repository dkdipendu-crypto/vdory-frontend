"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function OutputPage() {
const router = useRouter();
const [isGenerating, setIsGenerating] = useState(true);
const [progress, setProgress] = useState(0);

useEffect(() => {
const interval = setInterval(() => {
setProgress((prev) => {
if (prev >= 99) {
clearInterval(interval);

setTimeout(() => {
setIsGenerating(false);
}, 1000);

return 100;
}

return prev + 1;
});
}, 90);

return () => clearInterval(interval);
}, []);

return (
<main
className="min-h-screen bg-zinc-50"
>
{isGenerating && (
<div className="fixed inset-0 z-[100] bg-zinc-900 flex items-center justify-center">
<div className="flex flex-col items-center">

<div className="relative h-36 w-36">
<div className="absolute inset-0 rounded-full border-4 border-blue-500/20"></div>

<div
className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"
></div>

<div className="absolute inset-0 flex items-center justify-center">
<span className="text-3xl font-bold text-white">
{progress}%
</span>
</div>
</div>

<h2 className="mt-8 text-3xl font-bold text-white">
Creating Your Video
</h2>

<p className="mt-3 text-center text-zinc-300 text-base max-w-sm px-6">
Rendering your content. Please keep this page open.
</p>

</div>
</div>
)}
<div
className={isGenerating ? "opacity-0 pointer-events-none" : ""}
>

{/* Header */}
<header className="sticky top-0 z-50 bg-white border-b border-zinc-200">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<Image
src="/logo-vdory.png"
alt="VDORY AI"
width={110}
height={20}
/>

<button
onClick={() => router.push("/dashboard")}
className="text-sm font-medium text-zinc-600 hover:text-zinc-900"
>
Dashboard
</button>
</div>
</header>

{/* Content */}
<section className="max-w-5xl mx-auto px-6 md:px-4 py-6">
<div className="text-center">
<h1 className="text-3xl font-bold text-zinc-900">
Your Video Is Ready
</h1>

<p className="mt-2 text-sm text-zinc-600">
Review, download and publish your content.
</p>
</div>

<div className="mt-6 grid lg:grid-cols-2 gap-10">
{/* Video Preview */}
<div>
<div className="bg-black rounded-2xl overflow-hidden aspect-[9/16] w-full max-w-[280px] mx-auto">
<video
src={`/renders/output.mp4?v=${Date.now()}`}
controls
className="w-full h-full object-cover"
/>
</div>
</div>

{/* Details */}
<div className="space-y-4">
<div className="rounded-2xl border border-zinc-200 bg-white p-4">
<p className="text-xs text-zinc-500">
Credits Remaining
</p>

<h2 className="mt-1 text-2xl font-bold text-zinc-900">
47
</h2>
</div>

<div className="rounded-2xl border border-zinc-200 bg-white p-4">
<div className="flex items-center justify-between">
<h3 className="text-sm font-semibold text-zinc-900">
Caption
</h3>

<button className="text-xs text-zinc-500 hover:text-zinc-900">
Copy
</button>
</div>

<p className="mt-2 text-sm text-zinc-600">
Your generated caption will appear here.
</p>
</div>

<div className="rounded-2xl border border-zinc-200 bg-white p-4">
<h3 className="text-sm font-semibold text-zinc-900">
Download Video
</h3>

<div className="mt-3 flex flex-col gap-2">
<button className="rounded-xl bg-black px-4 py-2 text-white font-medium hover:opacity-90">
Download Vertical (9:16)
</button>

<button className="rounded-xl border border-zinc-300 px-4 py-2 font-medium text-zinc-900 hover:bg-zinc-100">
Download Landscape (16:9)
</button>
</div>
</div>

<button
onClick={() => router.push("/studio")}
className="w-full rounded-2xl bg-amber-500 py-3 text-white font-semibold hover:bg-amber-600"
>
Create New Project
</button>
</div>
</div>
</section>
</div>
</main>
);
}