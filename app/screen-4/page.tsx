"use client";

import { useEffect, useState } from "react";

const desktopSteps = [
"Project & Plot",
"Spaces & Requirements",
"Design Preferences",
"Materials & Quality",
"Layout Preview",
];

const mobileSteps = [
"Project & Plot",
"Spaces",
"Design",
"Materials",
"Layout",
];

type MaterialQuality = "Standard" | "Premium" | "Luxury";

const materialOptions = [
"Marble / Granite",
"Wood",
"Tiles",
"Glass",
"Metal",
"Stone",
"Concrete",
];

type SmartHomeOption = "yes" | "partial" | "no";

export default function Screen4() {
const [materialQuality, setMaterialQuality] =
useState<MaterialQuality>("Standard");

const [selectedMaterials, setSelectedMaterials] = useState<string[]>([
"Marble / Granite",
"Wood",
"Tiles",
"Stone",
]);

const [smartHome, setSmartHome] =
useState<SmartHomeOption>("yes");

const [showProfile, setShowProfile] = useState(false);
const [showAccountSettings, setShowAccountSettings] = useState(false);

useEffect(() => {
try {
const saved = localStorage.getItem("solvingWalls_screen4");

if (saved) {
const parsed = JSON.parse(saved);

if (parsed.materialQuality) {
setMaterialQuality(parsed.materialQuality);
}

if (Array.isArray(parsed.selectedMaterials)) {
setSelectedMaterials(parsed.selectedMaterials);
}

if (parsed.smartHome) {
setSmartHome(parsed.smartHome);
}
}
} catch (error) {
console.error("Unable to load Screen 4 data:", error);
}
}, []);

const toggleMaterial = (material: string) => {
setSelectedMaterials((previous) => {
if (previous.includes(material)) {
return previous.filter((item) => item !== material);
}

return [...previous, material];
});
};

const saveScreen4 = () => {
const screen4Data = {
materialQuality,
selectedMaterials,
smartHome,
};

localStorage.setItem(
"solvingWalls_screen4",
JSON.stringify(screen4Data)
);
};

const goBack = () => {
window.location.href = "/screen-3";
};

const continueToNextStep = () => {
saveScreen4();

// Screen 5 / Layout Preview
window.location.href = "/Screen5";
};

return (
<main className="min-h-screen bg-[#f8fafc] text-[#10284c]">
{/* =========================================================
PROFILE POPUP
========================================================= */}
{showProfile && (
<div
className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 px-4 backdrop-blur-[2px]"
onClick={() => {
setShowProfile(false);
setShowAccountSettings(false);
}}
>
<div
className="w-full max-w-[390px] overflow-hidden rounded-[24px] border border-[#e5e7eb] bg-white shadow-[0_20px_60px_rgba(16,40,76,0.18)]"
onClick={(event) => event.stopPropagation()}
>
{!showAccountSettings ? (
<>
{/* PROFILE HEADER */}
<div className="border-b border-[#edf0f4] px-6 pb-5 pt-6">
<div className="flex items-start justify-between">
<div>
<p className="text-[11px] font-semibold uppercase tracking-[1.2px] text-[#b4872c]">
Account
</p>

<h2 className="mt-1 text-[22px] font-bold tracking-[-0.3px] text-[#10284c]">
Profile
</h2>
</div>

<button
type="button"
aria-label="Close profile"
onClick={() => {
setShowProfile(false);
setShowAccountSettings(false);
}}
className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f6f8fa] text-[20px] leading-none text-[#64748b] transition hover:bg-[#eef1f5] hover:text-[#10284c]"
>
×
</button>
</div>

<div className="mt-5 flex items-center gap-4">
<div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#fff5e3] text-[25px]">
👤
</div>

<div>
<p className="text-[14px] font-semibold text-[#10284c]">
Your Profile
</p>

<p className="mt-1 text-[12px] text-[#7b8798]">
Solving Walls account
</p>
</div>
</div>
</div>

{/* PROFILE OPTIONS */}
<div className="px-4 py-4">
<button
type="button"
onClick={() => setShowAccountSettings(true)}
className="group flex w-full items-center gap-3 rounded-[16px] px-3 py-3.5 text-left transition hover:bg-[#f8fafc]"
>
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f4f6f9] text-[#10284c]">
<svg
viewBox="0 0 24 24"
className="h-[19px] w-[19px]"
fill="none"
stroke="currentColor"
strokeWidth="1.7"
strokeLinecap="round"
strokeLinejoin="round"
>
<path d="M4 20h4l10.5-10.5a2.12 2.12 0 0 0-3-3L5 17v3Z" />
<path d="m13.5 7.5 3 3" />
</svg>
</div>

<div className="flex-1">
<p className="text-[13px] font-semibold text-[#10284c]">
Account Settings
</p>

<p className="mt-0.5 text-[11px] text-[#7b8798]">
Manage your account details
</p>
</div>

<svg
viewBox="0 0 24 24"
className="h-4 w-4 text-[#94a3b8]"
fill="none"
stroke="currentColor"
strokeWidth="1.8"
strokeLinecap="round"
strokeLinejoin="round"
>
<path d="m9 18 6-6-6-6" />
</svg>
</button>
</div>
</>
) : (
<>
{/* ACCOUNT SETTINGS HEADER */}
<div className="border-b border-[#edf0f4] px-5 pb-5 pt-5">
<div className="flex items-center gap-3">
<button
type="button"
aria-label="Back to profile"
onClick={() => setShowAccountSettings(false)}
className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f6f8fa] text-[#10284c]"
>
<svg
viewBox="0 0 24 24"
className="h-4 w-4"
fill="none"
stroke="currentColor"
strokeWidth="1.8"
strokeLinecap="round"
strokeLinejoin="round"
>
<path d="m15 18-6-6 6-6" />
</svg>
</button>

<div>
<p className="text-[11px] font-semibold uppercase tracking-[1.2px] text-[#b4872c]">
Account
</p>

<h2 className="mt-1 text-[20px] font-bold text-[#10284c]">
Account Settings
</h2>
</div>
</div>
</div>

<div className="px-4 py-4">
<div className="rounded-[16px] bg-[#f8fafc] px-4 py-4">
<p className="text-[12px] font-medium text-[#64748b]">
Account settings
</p>

<p className="mt-1 text-[13px] text-[#334155]">
Your account preferences can be managed here.
</p>
</div>
</div>
</>
)}
</div>
</div>
)}

{/* =========================================================
HEADER
========================================================= */}
<header className="border-b border-[#e5e7eb] bg-white">
{/* ================= DESKTOP HEADER ================= */}
<div className="mx-auto hidden min-h-[108px] max-w-[1540px] items-center gap-8 px-6 lg:flex lg:px-10">
{/* Logo */}
<div className="flex w-[300px] shrink-0 items-center">
<img
src="/images/s-walls.png"
alt="Solving Walls"
className="h-13 w-auto object-contain"
/>
</div>

{/* Desktop Progress */}
<div className="flex min-w-0 flex-1 items-start justify-center">
<div className="flex w-full max-w-[760px] items-start">
{desktopSteps.map((step, index) => {
const active = index === 3;
const completed = index < 3;

return (
<div
key={step}
className={`flex min-w-0 flex-1 items-start ${
index === 4 ? "-translate-x-[35px]" : ""
}`}
>
<div className="flex min-w-0 flex-1 flex-col items-center">
<div
className={`flex h-8 w-8 items-center justify-center rounded-full border text-[13px] font-semibold ${
active || completed
? "border-[#10284c] bg-[#10284c] text-white"
: "border-[#cbd3df] bg-white text-[#26344b]"
}`}
>
{completed ? "✓" : index + 1}
</div>

<span
className={`mt-2 whitespace-nowrap text-center text-[11px] font-medium leading-tight ${
active
? "text-[#10284c]"
: "text-[#26344b]"
}`}
>
{step}
</span>
</div>

{index < 4 && (
<div
className={`mt-[15px] w-[80px] flex-none h-[2px] ${
index < 3
? "bg-[#d9a52b]"
: "bg-[#dfe3e8]"
}`}
/>
)}
</div>
);
})}
</div>
</div>

{/* Profile */}
<button
type="button"
onClick={() => setShowProfile(true)}
aria-label="Profile"
className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#d8dde5] bg-white text-[#10284c] shadow-sm transition hover:bg-[#f8fafc]"
>
<span className="text-lg">👤</span>
</button>
</div>

{/* ================= MOBILE HEADER ================= */}
<div className="relative block bg-white px-4 pb-5 pt-5 lg:hidden">
{/* Top row */}
<div className="relative flex h-12 items-center justify-between">
{/* Back */}
<button
type="button"
aria-label="Go back"
onClick={goBack}
className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#e1e5eb] bg-white text-[#10284c] shadow-sm"
>
<span className="relative -left-[1px] -top-[2px] text-[27px] leading-none">
‹
</span>
</button>

{/* Centered Brand */}
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
<img
src="/images/s-walls.png"
alt="Solving Walls"
className="h-14 w-auto object-contain"
/>
</div>

{/* Profile */}
<button
type="button"
aria-label="Profile"
onClick={() => setShowProfile(true)}
className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e1e5eb] bg-white text-[20px] shadow-sm"
>
👤
</button>
</div>

{/* Mobile Progress */}
<div className="relative mt-6 flex w-full items-start justify-center">
{mobileSteps.map((step, index) => {
const active = index === 3;
const completed = index < 3;

return (
<div
key={step}
className="relative flex min-w-0 flex-1 flex-col items-center"
>
{/* Connector */}
{index < mobileSteps.length - 1 && (
<div
className={`absolute left-1/2 top-[17px] h-[2px] w-full ${
index < 3
? "bg-[#d9a441]"
: "bg-[#d7dce3]"
}`}
/>
)}

{/* Circle */}
<div
className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-full border text-[13px] font-semibold ${
active || completed
? "border-[#10284c] bg-[#10284c] text-white"
: "border-[#d7dce3] bg-white text-[#26344b]"
}`}
>
{completed ? "✓" : index + 1}
</div>

{/* Label */}
<div
className={`mt-2 w-[58px] text-center text-[9px] font-medium leading-[11px] ${
active
? "font-semibold text-[#10284c]"
: "text-[#26344b]"
}`}
>
{step}
</div>
</div>
);
})}
</div>
</div>
</header>

{/* =========================================================
PAGE INTRO
========================================================= */}
<section className="mx-auto max-w-[1540px] px-5 pb-5 pt-6 sm:px-8 lg:px-10 lg:pb-5 lg:pt-6">
<p className="text-[11px] font-semibold tracking-[0.8px] text-[#9a7734] sm:text-[12px]">
STEP 4 OF 5
</p>

<h1 className="mt-1 text-[28px] font-bold leading-tight tracking-[-0.7px] text-[#10284c] sm:text-[32px] lg:text-[34px]">
Materials &amp; Quality
</h1>

<p className="mt-1 max-w-[700px] text-[13px] leading-5 text-[#596579] sm:text-[14px]">
Choose your preferred materials and quality level to bring your home to life.
</p>
</section>

{/* =========================================================
MAIN CONTENT
========================================================= */}
<section className="mx-auto max-w-[1450px] px-5 pb-8 sm:px-8 lg:px-10">
<div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_315px]">
{/* =====================================================
LEFT CONTENT
===================================================== */}
<div className="space-y-5">
{/* =================================================
1. MATERIAL QUALITY
================================================= */}
<section className="rounded-2xl border border-[#e1e5eb] bg-white px-4 py-5 shadow-[0_2px_10px_rgba(16,40,76,0.05)] sm:px-6 sm:py-6">
<div className="flex items-start gap-3">
<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fff5e3] text-[#b4872c]">
<svg
viewBox="0 0 24 24"
className="h-6 w-6"
fill="none"
stroke="currentColor"
strokeWidth="1.7"
strokeLinecap="round"
strokeLinejoin="round"
>
<path d="m12 3 8 5-8 5-8-5 8-5Z" />
<path d="m4 12 8 5 8-5" />
<path d="m4 16 8 5 8-5" />
</svg>
</div>

<div>
<h2 className="text-[17px] font-semibold text-[#10284c]">
Material Quality
<span className="ml-1 text-red-500">*</span>
</h2>

<p className="mt-1 text-[12px] text-[#64748b]">
Choose the overall quality level for your materials and finishes.
</p>
</div>
</div>

<div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
{[
{
value: "Standard" as MaterialQuality,
title: "Standard",
description: "Good quality, long lasting",
},
{
value: "Premium" as MaterialQuality,
title: "Premium",
description: "High-end finishes",
},
{
value: "Luxury" as MaterialQuality,
title: "Luxury",
description: "Designer materials",
},
].map((option) => {
const selected = materialQuality === option.value;

return (
<button
key={option.value}
type="button"
onClick={() => setMaterialQuality(option.value)}
className={`relative rounded-2xl border px-4 py-4 text-left transition ${
selected
? "border-[#d9a441] bg-[#fffaf0] shadow-[0_2px_8px_rgba(180,135,44,0.08)]"
: "border-[#e1e5eb] bg-white hover:border-[#cfd7e3]"
}`}
>
<div className="flex items-start gap-3">
<div
className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
selected
? "border-[#d9a441] bg-[#d9a441] text-white"
: "border-[#8b98aa] bg-white"
}`}
>
{selected && (
<svg
viewBox="0 0 24 24"
className="h-3.5 w-3.5"
fill="none"
stroke="currentColor"
strokeWidth="3"
strokeLinecap="round"
strokeLinejoin="round"
>
<path d="m5 12 4 4L19 6" />
</svg>
)}
</div>

<div>
<p className="text-[14px] font-semibold text-[#10284c]">
{option.title}
</p>

<p className="mt-1 text-[12px] leading-5 text-[#64748b]">
{option.description}
</p>
</div>
</div>
</button>
);
})}
</div>
</section>

{/* =================================================
2. KEY MATERIALS
================================================= */}
<section className="rounded-2xl border border-[#e1e5eb] bg-white px-4 py-5 shadow-[0_2px_10px_rgba(16,40,76,0.05)] sm:px-6 sm:py-6">
<div className="flex items-start gap-3">
<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fff5e3] text-[#b4872c]">
<svg
viewBox="0 0 24 24"
className="h-6 w-6"
fill="none"
stroke="currentColor"
strokeWidth="1.7"
strokeLinecap="round"
strokeLinejoin="round"
>
<path d="m12 3 8 4-8 4-8-4 8-4Z" />
<path d="m4 11 8 4 8-4" />
<path d="m4 15 8 4 8-4" />
</svg>
</div>

<div>
<h2 className="text-[17px] font-semibold text-[#10284c]">
Key Materials
<span className="ml-2 text-[11px] font-normal text-[#7b8798]">
(Select preferred options)
</span>
</h2>

<p className="mt-1 text-[12px] text-[#64748b]">
Select the materials you would like the design to prioritize.
</p>
</div>
</div>

<div className="mt-5 flex flex-wrap gap-2.5">
{materialOptions.map((material) => {
const selected = selectedMaterials.includes(material);

return (
<button
key={material}
type="button"
onClick={() => toggleMaterial(material)}
className={`inline-flex items-center gap-2 rounded-xl border px-3.5 py-2.5 text-[12px] font-medium transition sm:px-4 ${
selected
? "border-[#cfd8e6] bg-[#f8fafc] text-[#10284c]"
: "border-[#e1e5eb] bg-white text-[#475569] hover:border-[#cfd7e3] hover:bg-[#fafbfc]"
}`}
>
<span
className={`flex h-[18px] w-[18px] items-center justify-center rounded-[4px] border ${
selected
? "border-[#10284c] bg-[#10284c] text-white"
: "border-[#8996a8] bg-white"
}`}
>
{selected && (
<svg
viewBox="0 0 24 24"
className="h-3 w-3"
fill="none"
stroke="currentColor"
strokeWidth="3"
strokeLinecap="round"
strokeLinejoin="round"
>
<path d="m5 12 4 4L19 6" />
</svg>
)}
</span>

{material}
</button>
);
})}
</div>

<div className="mt-4 rounded-xl bg-[#f8fafc] px-4 py-3">
<p className="text-[11px] leading-5 text-[#64748b]">
Select multiple materials. Solving Walls will determine the
appropriate combination and proportion based on your overall
design requirements, quality level and budget.
</p>
</div>
</section>

{/* =================================================
3. SMART HOME & MODERN FEATURES
================================================= */}
<section className="rounded-2xl border border-[#e1e5eb] bg-white px-4 py-5 shadow-[0_2px_10px_rgba(16,40,76,0.05)] sm:px-6 sm:py-6">
<div className="flex items-start gap-3">
<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fff5e3] text-[#b4872c]">
<svg
viewBox="0 0 24 24"
className="h-6 w-6"
fill="none"
stroke="currentColor"
strokeWidth="1.7"
strokeLinecap="round"
strokeLinejoin="round"
>
<path d="M9 18h6" />
<path d="M10 22h4" />
<path d="M8.5 14.5A6 6 0 1 1 15.5 14.5c-.9.7-1.5 1.5-1.5 2.5h-4c0-1-.6-1.8-1.5-2.5Z" />
<path d="M12 3V1" />
<path d="m4.9 4.9-1.4-1.4" />
<path d="M20.5 3.5 19.1 4.9" />
</svg>
</div>

<div>
<h2 className="text-[17px] font-semibold text-[#10284c]">
Smart Home &amp; Modern Features
</h2>

<p className="mt-1 text-[12px] text-[#64748b]">
Tell us how much smart-home technology you want.
</p>
</div>
</div>

<div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-3">
{[
{
value: "yes" as SmartHomeOption,
title: "Yes — Smart Home",
description:
"Smart lighting, automation, security, etc.",
},
{
value: "partial" as SmartHomeOption,
title: "Partial (Key Areas)",
description:
"Only in selected areas",
},
{
value: "no" as SmartHomeOption,
title: "No",
description:
"I don't need smart features",
},
].map((option) => {
const selected = smartHome === option.value;

return (
<button
key={option.value}
type="button"
onClick={() => setSmartHome(option.value)}
className={`relative rounded-2xl border px-4 py-4 text-left transition ${
selected
? "border-[#d9a441] bg-[#fffaf0] shadow-[0_2px_8px_rgba(180,135,44,0.08)]"
: "border-[#e1e5eb] bg-white hover:border-[#cfd7e3]"
}`}
>
<div className="flex items-start gap-3">
<div
className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
selected
? "border-[#d9a441] bg-[#d9a441] text-white"
: "border-[#8b98aa] bg-white"
}`}
>
{selected && (
<svg
viewBox="0 0 24 24"
className="h-3.5 w-3.5"
fill="none"
stroke="currentColor"
strokeWidth="3"
strokeLinecap="round"
strokeLinejoin="round"
>
<path d="m5 12 4 4L19 6" />
</svg>
)}
</div>

<div>
<p className="text-[13px] font-semibold text-[#10284c]">
{option.title}
</p>

<p className="mt-1 text-[11px] leading-5 text-[#64748b]">
{option.description}
</p>
</div>
</div>
</button>
);
})}
</div>
</section>

{/* =================================================
BOTTOM ACTIONS
================================================= */}
<div className="mt-6 flex flex-col-reverse gap-3 border-t border-[#e5e7eb] pt-5 sm:flex-row sm:items-center sm:justify-between">
{/* Desktop Back */}
<button
type="button"
onClick={goBack}
className="hidden items-center justify-center gap-2 rounded-xl border border-[#d9dee7] bg-white px-5 py-3 text-[13px] font-medium text-[#334155] transition hover:bg-[#f8fafc] lg:inline-flex"
>
<svg
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
strokeWidth="1.8"
className="h-4 w-4"
>
<path
strokeLinecap="round"
strokeLinejoin="round"
d="M19 12H5"
/>
<path
strokeLinecap="round"
strokeLinejoin="round"
d="m11 18-6-6 6-6"
/>
</svg>

Back
</button>

{/* Continue */}
<button
type="button"
onClick={continueToNextStep}
className="ml-auto inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#10284c] px-6 py-3 text-[14px] font-semibold text-white shadow-sm transition hover:bg-[#0c203d] sm:min-w-[220px] sm:w-auto"
>
Continue to Next Step

<svg
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
strokeWidth="2"
className="h-5 w-5"
>
<path
strokeLinecap="round"
strokeLinejoin="round"
d="M5 12h13"
/>
<path
strokeLinecap="round"
strokeLinejoin="round"
d="m13 6 6 6-6 6"
/>
</svg>
</button>
</div>
</div>

{/* =====================================================
RIGHT SIDEBAR — DESKTOP ONLY
===================================================== */}
<aside className="hidden space-y-5 lg:block">
{/* Why this matters */}
<div className="rounded-2xl border border-[#e1e5eb] bg-white px-7 py-6 shadow-[0_2px_10px_rgba(16,40,76,0.04)]">
<h2 className="text-[17px] font-bold text-[#10284c]">
Why this matters?
</h2>

<div className="mt-5 space-y-5">
<div className="flex items-start gap-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff5e3] text-[#b4872c]">
<svg
viewBox="0 0 24 24"
className="h-5 w-5"
fill="none"
stroke="currentColor"
strokeWidth="1.7"
strokeLinecap="round"
strokeLinejoin="round"
>
<path d="M12 3 4 7v5c0 5 3.4 8 8 9 4.6-1 8-4 8-9V7l-8-4Z" />
<path d="m8.5 12 2.2 2.2 4.8-5" />
</svg>
</div>

<p className="pt-1 text-[12px] leading-5 text-[#334155]">
The right quality level helps balance appearance,
durability and overall project cost.
</p>
</div>

<div className="flex items-start gap-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff5e3] text-[#b4872c]">
<svg
viewBox="0 0 24 24"
className="h-5 w-5"
fill="none"
stroke="currentColor"
strokeWidth="1.7"
strokeLinecap="round"
strokeLinejoin="round"
>
<path d="M4 20h16" />
<path d="M6 17V8h12v9" />
<path d="M9 8V5h6v3" />
</svg>
</div>

<p className="pt-1 text-[12px] leading-5 text-[#334155]">
Your material choices help the design engine select
suitable finishes for your home.
</p>
</div>

<div className="flex items-start gap-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff5e3] text-[#b4872c]">
<svg
viewBox="0 0 24 24"
className="h-5 w-5"
fill="none"
stroke="currentColor"
strokeWidth="1.7"
strokeLinecap="round"
strokeLinejoin="round"
>
<path d="M3 11.5 12 4l9 7.5" />
<path d="M5 10.5V20h14v-9.5" />
<path d="M9 20v-5h6v5" />
</svg>
</div>

<p className="pt-1 text-[12px] leading-5 text-[#334155]">
Smart-home preferences help us plan modern features
where they make sense.
</p>
</div>
</div>
</div>

{/* Material Guide */}
<div className="rounded-2xl border border-[#dbe4f2] bg-[#f3f6fc] px-6 py-5">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#2455b2]">
<svg
viewBox="0 0 24 24"
className="h-5 w-5"
fill="none"
stroke="currentColor"
strokeWidth="1.8"
strokeLinecap="round"
strokeLinejoin="round"
>
<circle cx="12" cy="12" r="9" />
<path d="M12 10v6" />
<path d="M12 7h.01" />
</svg>
</div>

<h2 className="text-[16px] font-bold text-[#10284c]">
Material Guide
</h2>
</div>

<ul className="mt-4 space-y-2 text-[11px] leading-5 text-[#334155]">
<li>
<span className="mr-2 text-[#d39a1e]">•</span>
<strong>Marble / Granite</strong> – Durable &amp; premium
</li>

<li>
<span className="mr-2 text-[#d39a1e]">•</span>
<strong>Wood</strong> – Warm &amp; natural
</li>

<li>
<span className="mr-2 text-[#d39a1e]">•</span>
<strong>Tiles</strong> – Stylish &amp; easy to maintain
</li>

<li>
<span className="mr-2 text-[#d39a1e]">•</span>
<strong>Glass</strong> – Modern &amp; elegant
</li>

<li>
<span className="mr-2 text-[#d39a1e]">•</span>
<strong>Metal</strong> – Strong &amp; long lasting
</li>

<li>
<span className="mr-2 text-[#d39a1e]">•</span>
<strong>Stone</strong> – Natural &amp; timeless
</li>

<li>
<span className="mr-2 text-[#d39a1e]">•</span>
<strong>Concrete</strong> – Modern &amp; sturdy
</li>
</ul>
</div>

{/* Tip */}
<div className="rounded-2xl border border-[#a8d7c5] bg-[#f1fbf7] px-5 py-2.5">
<div className="flex items-start gap-2">
<div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#43a982] text-white">
<svg
viewBox="0 0 24 24"
className="h-3.5 w-3.5"
fill="none"
stroke="currentColor"
strokeWidth="2"
strokeLinecap="round"
strokeLinejoin="round"
>
<path d="m5 12 4 4L19 6" />
</svg>
</div>

<div>
<h2 className="text-[15px] font-bold text-[#10284c]">
Tip
</h2>

<p className="mt-1 text-[11px] leading-[18px] text-[#334155]">
A balanced mix of premium and practical materials can give you a
home that looks great and lasts longer.
</p>
</div>
</div>
</div>
</aside>
</div>
</section>
</main>
);
}
