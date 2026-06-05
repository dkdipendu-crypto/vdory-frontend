"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function StudioPage() {
const router = useRouter();
const fileInputRef = useRef<HTMLInputElement>(null);

const [clips, setClips] = useState<File[]>([]);
const [category, setCategory] = useState("");
const [style, setStyle] = useState("");
const [duration, setDuration] = useState("");
const [slowMotion, setSlowMotion] = useState(false);

const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
const files = Array.from(e.target.files || []);

if (files.length > 10) {
alert("Maximum 10 clips allowed.");
return;
}

setClips(files);
};

const clearClips = () => {
setClips([]);
if (fileInputRef.current) {
fileInputRef.current.value = "";
}
};

const canGenerate =
clips.length > 0 &&
category !== "" &&
style !== "" &&
duration !== "";

return (
<main className="min-h-screen bg-zinc-50">
{/* Header */}
<header className="sticky top-0 z-50 bg-white border-b border-zinc-200">
<div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
<Image
src="/logo-vdory.png"
alt="VDORY AI"
width={110}
height={20}
priority
/>

<div className="flex items-center gap-4">
<button className="text-xl">🔔</button>

<div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center">
D
</div>
</div>
</div>
</header>

{/* Content */}
<section className="max-w-4xl mx-auto px-6 md:px-6 pt-10 pb-10">
{/* Title */}
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 min-w-12 rounded-xl bg-black text-white flex items-center justify-center">
+
</div>

<div>
<h1 className="text-3xl font-bold text-zinc-900">
Create New Project
</h1>

<p className="text-zinc-600 mt-1">
Upload your clips and let VDORY AI create social-ready content.
</p>
</div>
</div>

{/* Upload Section */}
<div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
<h2 className="text-lg font-semibold text-zinc-900 mb-4">
Upload Clips <span className="text-red-500">*</span>
</h2>

<div className="rounded-2xl border border-dashed border-zinc-300 p-5 bg-zinc-50">
<p className="text-sm text-zinc-600 text-center">
Up to 10 clips (5–10s each, ~60s total) for best results.
</p>

<p className="text-sm text-zinc-500 text-center mt-1">
Review your selections before creating the video.
</p>

<div className="flex justify-center mt-5">
<button
onClick={() => fileInputRef.current?.click()}
className="bg-black text-white px-6 py-3 rounded-xl font-medium hover:opacity-90"
>
Upload Clips
</button>

<input
ref={fileInputRef}
type="file"
multiple
accept="video/*"
className="hidden"
onChange={handleUpload}
/>
</div>

{clips.length === 0 ? (

<div className="mt-6">
<div className="flex items-center justify-between rounded-xl border border-zinc-200 bg-white px-4 py-3">

<div className="flex items-center gap-3">

<div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center">
🎬
</div>

<div>
<p className="text-base font-medium text-zinc-900">
sample-video-01.mov
</p>

<p className="text-sm text-zinc-700">
8.4 MB • 7 sec
</p>
</div>

</div>

</div>
</div>

) : (

<>

<div className="mt-6 space-y-3">
{clips.map((clip, index) => (
<div
key={index}
className="flex items-center justify-between rounded-xl border border-zinc-200 bg-white px-4 py-3"
>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center">
🎬
</div>

<div>
<p className="text-base font-medium text-zinc-900">
{clip.name}
</p>

<p className="text-sm text-zinc-700">
{(clip.size / 1024 / 1024).toFixed(2)} MB
</p>
</div>
</div>
</div>
))}
</div>

<div className="mt-4">
<button
onClick={clearClips}
className="text-sm bg-red-600 text-white px-4 py-2 rounded-lg"
>
Clear All Clips
</button>
</div>
</>
)}
</div>
</div>

{/* Category */}
<div className="mt-8">
<label className="block text-sm font-semibold text-zinc-900 mb-2">
Category <span className="text-red-500">*</span>
</label>

<select
value={category}
onChange={(e) => setCategory(e.target.value)}
className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 text-sm"
>
<option value="">Select Category</option>
<option>Talking / Commentary</option>
<option>Product / Showcase</option>
<option>Food & Cooking</option>
<option>Travel & Lifestyle</option>
<option>Fitness & Sports</option>
<option>Fashion & Beauty</option>
<option>Entertainment</option>
<option>General</option>
</select>
</div>

{/* Style */}
<div className="mt-6">
<label className="block text-sm font-semibold text-zinc-900 mb-2">
Style & Variation <span className="text-red-500">*</span>
</label>

<select
value={style}
onChange={(e) => setStyle(e.target.value)}
className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 text-sm"
>
<option value="">Select Style</option>
<option>Balanced variation</option>
<option>Engaging variation</option>
<option>Minimal variation</option>
<option>Fast-paced variation</option>
<option>Luxury style</option>
<option>Product-focused style</option>
<option>Fashion style</option>
<option>Lifestyle style</option>
</select>
</div>

{/* Duration */}
<div className="mt-6">
<label className="block text-sm font-semibold text-zinc-900 mb-2">
Duration (seconds) <span className="text-red-500">*</span>
</label>

<select
value={duration}
onChange={(e) => setDuration(e.target.value)}
className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 text-sm"
>
<option value="">Select Duration</option>
<option>10</option>
<option>15</option>
<option>20</option>
<option>30</option>
<option>60</option>
</select>
</div>

{/* Slow Motion */}
<div className="mt-6">
<button
type="button"
onClick={() => setSlowMotion(!slowMotion)}
className="w-full rounded-xl border border-zinc-300 bg-white p-5"
>
<div className="flex items-center justify-between">
<div className="text-left">
<p className="text-lg font-semibold text-zinc-900">
Slow Motion
</p>

<p className="text-sm text-zinc-500 mt-1">
Apply cinematic slow-motion effect
</p>
</div>

<div
className={`relative w-14 h-8 rounded-full transition-all ${
slowMotion
? "bg-black"
: "bg-zinc-300"
}`}
>
<div
className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${
slowMotion
? "left-7"
: "left-1"
}`}
/>
</div>
</div>
</button>

</div>

{/* Actions */}
<div className="mt-8 flex items-center justify-between">
<button
onClick={() => router.push("/dashboard")}
className="text-sm font-medium text-zinc-700 hover:text-black"
>
← Back to Dashboard
</button>

<button
disabled={!canGenerate}
className={`px-6 py-3 rounded-xl text-white transition whitespace-nowrap ${
canGenerate
? "bg-black hover:opacity-90"
: "bg-black opacity-50 cursor-not-allowed"
}`}
>
Generate Video
</button>
</div>
</section>
</main>
);
}