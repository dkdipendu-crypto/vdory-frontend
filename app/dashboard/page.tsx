"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { BellDot } from "lucide-react";
export default function DashboardPage() {
const router = useRouter();
const [profileOpen, setProfileOpen] = useState(false);
const [notificationOpen, setNotificationOpen] = useState(false);
return (
<main className="min-h-screen bg-zinc-50">
{/* Sticky Header */}
<header className="sticky top-0 z-50 bg-white border-b border-zinc-200">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<Image
src="/logo-vdory.png"
alt="VDORY AI"
width={110}
height={20}
/>

<div className="flex items-center gap-6">

<div className="relative">

<button
onClick={() => setNotificationOpen(!notificationOpen)}
className="relative flex items-center justify-center h-9 w-9"
>
<BellDot size={20} className="text-zinc-700"/>

<span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500 -translate-x-1 translate-y-1"></span>

</button>

</div>

<button
onClick={() => setProfileOpen(!profileOpen)}
className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center"
>
D
</button>

</div>
</div>
{notificationOpen && (
<div className="absolute right-24 top-16 w-80 rounded-2xl border border-zinc-200 bg-white p-4 shadow-lg">

<h3 className="font-semibold">
Notifications
</h3>

<div className="mt-4 space-y-3 text-sm">

<div className="rounded-xl bg-zinc-50 p-3">
🎉 Welcome to Vdory AI
</div>

<div className="rounded-xl bg-zinc-50 p-3">
📹 Video export completed
</div>

<div className="rounded-xl bg-zinc-50 p-3">
⚡ Credits refreshed
</div>

<div className="rounded-xl bg-zinc-50 p-3">
🚀 Your first project was created
</div>

</div>
</div>
)}

{profileOpen && (
<div className="absolute right-6 top-16 w-72 rounded-2xl border border-zinc-200 bg-white shadow-xl p-4">
<div className="border-b border-zinc-100 pb-3">
<p className="font-semibold text-zinc-900">Dependu Das</p>
<p className="text-sm text-zinc-500">dependu@example.com</p>
</div>

<div className="py-3 space-y-2">
<button
onClick={() => router.push("/account")}
className="block w-full text-left text-sm hover:text-amber-600"
>
My Account
</button>

<button
onClick={() => router.push("/settings")}
className="block w-full text-left text-sm hover:text-amber-600"
>
Settings
</button>

<button
onClick={() => router.push("/billing")}
className="block w-full text-left text-sm hover:text-amber-600"
>
Billing & Plans
</button>

<button
onClick={() => router.push("/usage")}
className="block w-full text-left text-sm hover:text-amber-600"
>
Usage & Credits
</button>

<button
onClick={() => router.push("/support")}
className="block w-full text-left text-sm hover:text-amber-600"
>
Help & Support
</button>
</div>

<div className="border-t border-zinc-100 pt-3">
<button className="text-sm text-red-500">
Sign Out
</button>
</div>
</div>
)}

</header>

{/* Welcome Section */}
<section className="max-w-7xl mx-auto px-6 pt-8 pb-6">

<h1 className="text-3xl md:text-4xl font-bold text-zinc-900">
Welcome, Dependu
</h1>

<p className="mt-2 text-zinc-600">
Create social-ready content from raw footage in minutes.
</p>
<div className="mt-10 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

<div>
<p className="text-sm uppercase tracking-wider text-zinc-500">
Available Credits
</p>

<h2 className="mt-2 text-5xl font-bold">
10
</h2>

<p className="mt-2 text-zinc-600">
Ready to create AI-powered content.
</p>
</div>

</div>
</div>
</section>
{/* AI Studio Section */}
<section className="max-w-7xl mx-auto px-6 pb-12">
<div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">

<div className="flex items-center justify-between mb-6">
<div>
<h2 className="text-2xl font-bold text-zinc-900">
VDORY AI Studio
</h2>

<p className="mt-2 text-zinc-600">
Upload footage and generate AI-powered content.
</p>
</div>
</div>

<div className="rounded-2xl border border-dashed border-zinc-300 p-8 text-center">

<h3 className="text-xl font-semibold text-zinc-900">
Start New Project
</h3>

<p className="mt-3 text-zinc-600">
Upload clips, choose your style, and create social-ready content in minutes.
</p>
<button
onClick={() => router.push("/studio")}
className="mt-6 rounded-2xl bg-black px-8 py-4 text-white font-medium hover:opacity-90 transition"
>
+ New Project
</button>

</div>

</div>
</section>
{/* Recent Projects Section */}
<section className="max-w-7xl mx-auto px-6 pb-12">
<div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">

<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl font-bold text-zinc-900">
Recent Projects
</h2>

<button className="text-sm font-medium text-zinc-500 hover:text-zinc-900">
View All
</button>
</div>

<div className="rounded-2xl border border-dashed border-zinc-300 p-8 text-center">

<h3 className="text-lg font-semibold text-zinc-900">
No projects yet
</h3>

<p className="mt-3 text-zinc-600">
Your generated projects will appear here.
</p>

<p className="mt-4 text-sm text-amber-600">
Projects are automatically removed after 48 hours.
</p>

</div>

</div>
</section>
{/* Usage Analytics Section */}
<section className="max-w-7xl mx-auto px-6 pb-12">
<div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">

<h2 className="text-2xl font-bold text-zinc-900 mb-6">
Usage Analytics
</h2>

<div className="grid gap-4 md:grid-cols-3">

<div className="rounded-2xl border border-zinc-200 p-6">
<p className="text-sm uppercase tracking-wide text-zinc-500">
Projects Generated
</p>

<h3 className="mt-3 text-4xl font-bold">
0
</h3>
</div>

<div className="rounded-2xl border border-zinc-200 p-6">
<p className="text-sm uppercase tracking-wide text-zinc-500">
Credits Used
</p>

<h3 className="mt-3 text-4xl font-bold">
0
</h3>
</div>

<div className="rounded-2xl border border-zinc-200 p-6">
<p className="text-sm uppercase tracking-wide text-zinc-500">
Credits Remaining
</p>

<h3 className="mt-3 text-4xl font-bold">
10
</h3>
</div>

</div>

</div>
</section>

</main>
);
}