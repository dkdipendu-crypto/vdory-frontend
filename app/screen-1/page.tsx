"use client";

import { useState } from "react";

const desktopSteps = [
"Project & Plot",
"Spaces & Requirements",
"Design Preferences",
"Materials & Quality",
"Budget & Timeline",
];

const mobileSteps = [
"Project & Plot",
"Spaces",
"Design",
"Materials",
"Budget",
];

const locationData: Record<string, string[]> = {
"Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Tirupati"],
"Assam": ["Guwahati", "Dibrugarh", "Silchar"],
"Bihar": ["Patna", "Gaya", "Muzaffarpur"],
"Chhattisgarh": ["Raipur", "Bhilai", "Bilaspur"],
"Delhi": ["New Delhi"],
"Goa": ["Panaji", "Margao", "Vasco da Gama"],
"Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
"Haryana": ["Gurugram", "Faridabad", "Panipat", "Ambala"],
"Himachal Pradesh": ["Shimla", "Dharamshala", "Solan"],
"Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad"],
"Karnataka": ["Bengaluru", "Mysuru", "Mangaluru", "Hubballi"],
"Kerala": ["Kochi", "Thiruvananthapuram", "Kozhikode", "Thrissur"],
"Madhya Pradesh": ["Bhopal", "Indore", "Jabalpur", "Gwalior"],
"Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Navi Mumbai"],
"Odisha": ["Bhubaneswar", "Cuttack", "Rourkela"],
"Punjab": ["Chandigarh", "Ludhiana", "Amritsar", "Jalandhar"],
"Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota"],
"Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Salem"],
"Telangana": ["Hyderabad", "Warangal", "Nizamabad"],
"Uttar Pradesh": ["Lucknow", "Noida", "Ghaziabad", "Kanpur", "Varanasi"],
"Uttarakhand": ["Dehradun", "Haridwar", "Haldwani"],
"West Bengal": ["Kolkata", "Siliguri", "Durgapur", "Howrah"],
};
const cityStateData: Record<string, string> = {};

Object.entries(locationData).forEach(([state, cities]) => {
cities.forEach((city) => {
cityStateData[city] = state;
});
});

export default function Screen1() {
const [state, setState] = useState("");
const [city, setCity] = useState("");
const [test, setTest] = useState(false);
const [propertyType, setPropertyType] = useState("");
const [plotShape, setPlotShape] = useState("u-shape");

const [plotLength, setPlotLength] = useState("");
const [plotWidth, setPlotWidth] = useState("");
const [plotSide, setPlotSide] = useState("");
const [plotDepth, setPlotDepth] = useState("");
const [plotTopWidth, setPlotTopWidth] = useState("");
const [plotBottomWidth, setPlotBottomWidth] = useState("");
const [plotStemWidth, setPlotStemWidth] = useState("");
const [plotIrregularDescription, setPlotIrregularDescription] = useState("");
const [floorCount, setFloorCount] = useState("");
const [builtUpArea, setBuiltUpArea] = useState("");
const [showProfile, setShowProfile] = useState(false);

const saveScreen1 = () => {
const screen1Data = {
state,
city,
propertyType,
plotShape,
plotLength,
plotWidth,
plotSide,
plotDepth,
plotTopWidth,
plotBottomWidth,
plotStemWidth,
plotIrregularDescription,
};

localStorage.setItem(
"solvingWalls_screen1",
JSON.stringify(screen1Data)
);
};

return (
<main className="min-h-screen bg-[#f8fafc] text-[#10284c]">
    {showProfile && (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4">
<div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl">
<div className="flex items-center justify-between">
<h2 className="text-lg font-semibold text-[#10284c]">
Profile
</h2>

<button
type="button"
onClick={() => setShowProfile(false)}
className="text-xl text-[#64748b] hover:text-[#10284c]"
>
×
</button>
</div>

<div className="mt-5 text-sm text-[#64748b]">
<p>Your profile details will appear here.</p>
</div>
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
<div className="flex items-center gap-3">
<img
src="/images/solving-walls.png"
alt="Solving Walls"
className="h-18 w-auto object-contain"
/>

</div>
</div>

{/* Desktop Progress */}
<div className="flex min-w-0 flex-1 items-start justify-center">
<div className="flex w-full max-w-[760px] items-start">
{desktopSteps.map((step, index) => {
const active = index === 0;

return (
<div
key={step}
className="flex min-w-0 flex-1 items-start"
>
<div className="flex w-full items-start">

<div className="flex min-w-[44px] flex-col items-center">
<div
className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold ${
active
? "border-[#10284c] bg-[#10284c] text-white"
: "border-[#d7dce3] bg-white text-[#26344b]"
}`}
>
{index + 1}
</div>

<div
className={`mt-2 max-w-[110px] text-center text-[12px] font-medium leading-[15px] ${
active
? "text-[#10284c]"
: "text-[#26344b]"
}`}
>
{step}
</div>
</div>

{index < desktopSteps.length - 1 && (
<div
className={`mt-[17px] h-[2px] flex-1 ${
index === 0
? "bg-[#d9a52b]"
: "bg-[#dfe3e8]"
}`}
/>
)}
</div>
</div>
);
})}
</div>
</div>

{/* User Profile */}
<button
type="button"
onClick={() => setShowProfile(true)}
className="flex shrink-0 items-center justify-center w-11 h-11 rounded-full border border-[#d8dde5] bg-white text-[#10284c] shadow-sm transition hover:bg-[#f8fafc]"
>
<span className="text-lg">👤</span>
</button>
</div>

{/* ================= MOBILE HEADER ================= */}
<div className="relative block bg-white px-4 pb-5 pt-4 lg:hidden">

{/* Top row */}
<div className="relative flex h-12 items-center justify-between">

{/* Back */}
<button
type="button"
aria-label="Go back"
className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#e1e5eb] bg-white text-[#10284c] shadow-sm"
>
<span className="relative -left-[1px] text-[27px] leading-none">
‹
</span>
</button>

{/* Centered Brand */}
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
<img
src="/images/solving-walls.png"
alt="Solving Walls"
className="h-14 w-auto object-contain"
/>
</div>

{/* Help */}
<button
type="button"
aria-label="Help"
className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#e1e5eb] bg-white text-[20px] font-semibold text-[#10284c] shadow-sm"
>
?
</button>
</div>

{/* Mobile Progress */}
<div className="relative left-[12px] mt-6 flex w-full items-start justify-center">
{mobileSteps.map((step, index) => {
const active = index === 0;

return (
<div
key={step}
className="flex min-w-0 flex-1 items-start"
>
<div className="flex w-full items-start">

{/* Circle */}
<div className="flex min-w-[32px] flex-col items-center">
<div
className={`flex h-9 w-9 items-center justify-center rounded-full border text-[13px] font-semibold ${
active
? "border-[#10284c] bg-[#10284c] text-white"
: "border-[#d7dce3] bg-white text-[#26344b]"
}`}
>
{index + 1}
</div>

{/* Short mobile label */}
<div
className={`mt-2 w-[58px] text-center text-[9px] font-medium leading-[11px] ${
active
? "text-[#10284c]"
: "text-[#26344b]"
}`}
>
{step}
</div>
</div>

{/* Connector */}
{index < mobileSteps.length - 1 && (
<div
className={`mt-[17px] h-[2px] flex-1 ${
index === 0
? "bg-[#d9a52b]"
: "bg-[#dfe3e8]"
}`}
/>
)}
</div>
</div>
);
})}
</div>
</div>
</header>

{/* =========================================================
SCREEN 1 CONTENT WILL BE ADDED NEXT
========================================================= */}

<section className="mx-auto max-w-[1540px] px-5 pb-5 pt-6 sm:px-8 lg:px-10 lg:pb-5 lg:pt-6">

<p className="text-[11px] font-semibold tracking-[0.8px] text-[#9a7734] sm:text-[12px]">
STEP 1 OF 4
</p>

<h1 className="mt-1 text-[28px] font-bold leading-tight tracking-[-0.7px] text-[#10284c] sm:text-[32px] lg:text-[34px]">
Project &amp; Plot
</h1>

<p className="mt-1 max-w-[600px] text-[13px] leading-5 text-[#596579] sm:text-[14px]">
Tell us about your project and plot so we can create the perfect
design for you.
</p>

</section>

<section className="mx-auto max-w-[1450px] px-5 pb-8 sm:px-8 lg:px-10">

{/* Location Card */}
<div className="w-full rounded-xl border border-[#e1e5eb] bg-white px-3 py-2 sm:px-4 sm:py-3 shadow-[0_1px_6px_rgba(16,40,76,0.05)]">
<div className="flex flex-col gap-3 sm:flex-row sm:items-center">

{/* Location */}
<div className="flex w-full shrink-0 items-center gap-3 sm:w-[125px] sm:gap-3">
<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fff5e3] sm:h-11 sm:w-11">
<span className="flex h-full w-full items-center justify-center -translate-y-1 text-[26px] font-bold text-[#b88924]">
⌖
</span>
</div>

<h2 className="whitespace-nowrap text-[13px] font-semibold text-[#10284c] sm:text-[15px]">
Location
</h2>
</div>

{/* State + City */}
<div className="grid w-full max-w-[720px] grid-cols-2 gap-3 sm:gap-4">

{/* State */}
<div className="min-w-0">
<label className="mb-1 block text-[10px] font-medium text-[#26354d] sm:text-[12px]">
State <span className="text-red-500">*</span>
</label>

<select
value={state}
onChange={(e) => {
setState(e.target.value);
setCity("");
}}
className="h-8 w-full rounded-lg border border-[#d9dee7] bg-white px-2 text-[11px] text-[#26354d] outline-none focus:border-[#10284c] sm:h-10 sm:px-3 sm:text-[13px]"
>
<option value="">Select State</option>

{Object.keys(locationData).map((stateName) => (
<option key={stateName} value={stateName}>
{stateName}
</option>
))}
</select>
</div>

{/* City */}
<div className="min-w-0">
<label className="mb-1 block text-[10px] font-medium text-[#26354d] sm:text-[12px]">
City <span className="text-red-500">*</span>
</label>

<select
value={city}
onChange={(e) => setCity(e.target.value)}
disabled={!state}
className={`h-8 w-full rounded-lg border px-2 text-[11px] outline-none sm:h-10 sm:px-3 sm:text-[13px] ${
state
? "border-[#d9dee7] bg-white text-[#26354d] focus:border-[#10284c]"
: "border-[#d9dee7] bg-[#f5f7fa] text-[#9aa6b8]"
}`}
>
<option value="">Select City</option>

{state &&
locationData[state]?.map((cityName) => (
<option key={cityName} value={cityName}>
{cityName}
</option>
))}
</select>
</div>

</div>
</div>
</div>
<div className="h-3 sm:h-4" />
{/* =========================================================
PROPERTY TYPE
Desktop: existing horizontal layout
Mobile: title row + options underneath
========================================================= */}

<div className="rounded-2xl border border-[#e1e5eb] bg-white px-3 py-4 sm:px-4 sm:py-3 shadow-[0_2px_10px_rgba(16,40,76,0.04)]">

{/* Property Type Header */}
<div className="grid min-w-0 grid-cols-[auto_1fr] gap-4 sm:grid-cols-[210px_1fr] sm:items-center sm:gap-5">

{/* Section Title */}
<div className="flex items-center gap-3">

{/* Section Icon */}
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff5e3] text-[#c99a3d] sm:h-12 sm:w-12">
<svg
viewBox="0 0 24 24"
className="h-5 w-5 sm:h-7 sm:w-7"
fill="none"
stroke="currentColor"
strokeWidth="1.7"
strokeLinecap="round"
strokeLinejoin="round"
>
<path d="M3 10.5 12 3l9 7.5" />
<path d="M5.5 9.5V21h13V9.5" />
<path d="M9 21v-6h6v6" />
</svg>
</div>

<h2 className="whitespace-nowrap text-[13px] font-semibold text-[#10284c] sm:text-[13px]">
Property Type <span className="text-red-500">*</span>
</h2>

</div>
</div>


{/* PROPERTY OPTIONS */}
<div className="mt-5 grid grid-cols-2 gap-3 sm:mt-6 sm:grid-cols-4 sm:gap-3">

{/* 1. INDEPENDENT HOUSE / VILLA */}
<button
type="button"
onClick={() => setPropertyType("Independent House / Villa")}
className={`flex min-w-0 flex-col items-center justify-center rounded-xl border px-2 py-3 sm:py-2 text-center transition ${
propertyType === "Independent House / Villa"
? "border-[#10284c] bg-[#fbfcfe] shadow-[0_0_0_1px_rgba(16,40,76,0.08)]"
: "border-[#e1e5eb] bg-white hover:border-[#cbd3df]"
}`}
>
<svg
viewBox="0 0 24 24"
className="mb-2 h-7 w-7 text-[#10284c] sm:h-8 sm:w-8"
fill="none"
stroke="currentColor"
strokeWidth="1.7"
strokeLinecap="round"
strokeLinejoin="round"
>
<path d="M3 10.5 12 3l9 7.5" />
<path d="M5.5 9.5V21h13V9.5" />
<path d="M9 21v-6h6v6" />
<path d="M8 13h.01M16 13h.01" />
</svg>

<span className="min-h-[40px] text-[11px] font-medium leading-tight text-[#10284c] sm:text-[12px]">
Independent
<br />
House / Villa
</span>

<span
className={`mt-0 sm:mt-0 flex h-4 w-4 items-center justify-center rounded-full border sm:h-4 sm:w-4 ${
propertyType === "Independent House / Villa"
? "border-[#10284c]"
: "border-[#cbd3df]"
}`}
>
{propertyType === "Independent House / Villa" && (
<span className="h-2 w-2 rounded-full bg-[#10284c]" />
)}
</span>
</button>


{/* 2. CAFE / RESTAURANT */}
<button
type="button"
onClick={() => setPropertyType("Cafe / Restaurant")}
className={`flex min-w-0 flex-col items-center justify-center rounded-xl border px-2 py-3 sm:py-2 text-center transition ${
propertyType === "Cafe / Restaurant"
? "border-[#10284c] bg-[#fbfcfe] shadow-[0_0_0_1px_rgba(16,40,76,0.08)]"
: "border-[#e1e5eb] bg-white hover:border-[#cbd3df]"
}`}
>
<svg
viewBox="0 0 24 24"
className="mb-2 h-7 w-7 text-[#10284c] sm:h-8 sm:w-8"
fill="none"
stroke="currentColor"
strokeWidth="1.7"
strokeLinecap="round"
strokeLinejoin="round"
>
<path d="M5 8h12v2a6 6 0 0 1-6 6H9a4 4 0 0 1-4-4V8Z" />
<path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H16" />
<path d="M7 19h11" />
<path d="M9 5c0-1 1-1 1-2" />
<path d="M13 5c0-1 1-1 1-2" />
</svg>

<span className="min-h-[40px] text-[11px] font-medium leading-tight text-[#10284c] sm:text-[12px]">
Cafe /
<br />
Restaurant
</span>

<span
className={`mt-0 sm:mt-0 flex h-4 w-4 items-center justify-center rounded-full border sm:h-4 sm:w-4 ${
propertyType === "Cafe / Restaurant"
? "border-[#10284c]"
: "border-[#cbd3df]"
}`}
>
{propertyType === "Cafe / Restaurant" && (
<span className="h-2 w-2 rounded-full bg-[#10284c]" />
)}
</span>
</button>


{/* 3. RENTAL APARTMENT */}
<button
type="button"
onClick={() => setPropertyType("Rental Apartment")}
className={`flex min-w-0 flex-col items-center justify-center rounded-xl border px-2 py-3 sm:py-2 text-center transition ${
propertyType === "Rental Apartment"
? "border-[#10284c] bg-[#fbfcfe] shadow-[0_0_0_1px_rgba(16,40,76,0.08)]"
: "border-[#e1e5eb] bg-white hover:border-[#cbd3df]"
}`}
>
<svg
viewBox="0 0 24 24"
className="mb-2 h-7 w-7 text-[#10284c] sm:h-8 sm:w-8"
fill="none"
stroke="currentColor"
strokeWidth="1.7"
strokeLinecap="round"
strokeLinejoin="round"
>
<path d="M4 21V5l8-2v18" />
<path d="M12 8h8v13" />
<path d="M7 8h2M7 12h2M7 16h2" />
<path d="M15 12h2M15 16h2" />
<path d="M9 21v-4h2v4" />
</svg>

<span className="min-h-[40px] text-[11px] font-medium leading-tight text-[#10284c] sm:text-[12px]">
Rental
<br />
Apartment
</span>

<span
className={`mt-0 sm:mt-0 flex h-4 w-4 items-center justify-center rounded-full border sm:h-4 sm:w-4 ${
propertyType === "Rental Apartment"
? "border-[#10284c]"
: "border-[#cbd3df]"
}`}
>
{propertyType === "Rental Apartment" && (
<span className="h-2 w-2 rounded-full bg-[#10284c]" />
)}
</span>
</button>


{/* 4. RENTAL + OWN HOME */}
<button
type="button"
onClick={() => setPropertyType("Rental + Own Home")}
className={`flex min-w-0 flex-col items-center justify-center rounded-xl border px-2 py-3 sm:py-2 text-center transition ${
propertyType === "Rental + Own Home"
? "border-[#10284c] bg-[#fbfcfe] shadow-[0_0_0_1px_rgba(16,40,76,0.08)]"
: "border-[#e1e5eb] bg-white hover:border-[#cbd3df]"
}`}
>
<svg
viewBox="0 0 24 24"
className="mb-2 h-7 w-7 text-[#10284c] sm:h-8 sm:w-8"
fill="none"
stroke="currentColor"
strokeWidth="1.7"
strokeLinecap="round"
strokeLinejoin="round"
>
<path d="M3 10.5 9 5l6 5.5" />
<path d="M5 9.5V21h8V9.5" />
<path d="M8 21v-5h3v5" />
<path d="M15 8h6v13h-6" />
<path d="M17 11h2M17 15h2M17 19h2" />
</svg>

<span className="min-h-[40px] text-[11px] font-medium leading-tight text-[#10284c] sm:text-[12px]">
Rental + Own
<br />
Home
</span>

<span
className={`mt-0 sm:mt-0 flex h-4 w-4 items-center justify-center rounded-full border sm:h-4 sm:w-4 ${
propertyType === "Rental + Own Home"
? "border-[#10284c]"
: "border-[#cbd3df]"
}`}
>
{propertyType === "Rental + Own Home" && (
<span className="h-2 w-2 rounded-full bg-[#10284c]" />
)}
</span>
</button>

</div>
</div>

{/* =========================================================
PLOT SHAPE
========================================================= */}

<div className="mt-3 sm:mt-4">
<div className="rounded-2xl border border-[#e1e5eb] bg-white px-3 py-3 shadow-[0_2px_10px_rgba(16,40,76,0.06)] sm:px-4 sm:py-4">

<div className="grid grid-cols-1 gap-3 md:grid-cols-[210px_1fr] md:items-center md:gap-5">

{/* Plot Shape Title */}
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff5e3] text-[#b4872c] sm:h-11 sm:w-11">
<svg
viewBox="0 0 24 24"
className="h-5 w-5 sm:h-6 sm:w-6"
fill="none"
stroke="currentColor"
strokeWidth="1.7"
strokeLinecap="round"
strokeLinejoin="round"
>
<rect x="4" y="4" width="16" height="16" rx="1" />
<path d="M8 4v4M4 8h4M16 20v-4M20 16h-4" />
</svg>
</div>

<h2 className="text-[13px] font-semibold text-[#10284c] sm:text-[13px]">
Plot Shape <span className="text-red-500">*</span>
</h2>
</div>

{/* Plot Shape Options */}
<div className="grid grid-cols-4 gap-1.5 sm:gap-2 md:gap-2.5">

{/* Rectangle */}
<button
type="button"
onClick={() => setPlotShape("rectangle")}
className={`flex min-w-0 flex-col items-center justify-center rounded-xl border px-1 py-1 sm:py-0 text-center transition-all duration-200 sm:px-2 sm:py-3 ${
plotShape === "rectangle"
? "border-[#10284c] bg-[#f8fafc] shadow-sm"
: "border-[#e1e5eb] bg-white hover:border-[#b9c2cf]"
}`}
>
<svg
viewBox="0 0 24 24"
className="mb-0 h-5 w-5 text-[#10284c] sm:h-6 sm:w-6"
fill="none"
stroke="currentColor"
strokeWidth="1.7"
>
<rect x="4" y="6" width="16" height="12" />
</svg>

<span className="min-h-4 px-0.5 text-[9px] font-medium leading-[1.15] text-[#10284c] sm:min-h-[28px] sm:text-[11px]">
Rectangle
</span>

<span
className={`mt-0 h-4 w-4 rounded-full border-2 sm:h-[18px] sm:w-[18px] ${
plotShape === "rectangle"
? "border-[#10284c] bg-[#10284c]"
: "border-[#cbd5e1] bg-white"
}`}
>
{plotShape === "rectangle" && (
<span className="block h-full w-full rounded-full border-[3px] border-white" />
)}
</span>
</button>

{/* Square */}
<button
type="button"
onClick={() => setPlotShape("square")}
className={`flex min-w-0 flex-col items-center justify-center rounded-xl border px-1 py-1 text-center transition-all duration-200 sm:px-2 sm:py-3 ${
plotShape === "square"
? "border-[#10284c] bg-[#f8fafc] shadow-sm"
: "border-[#e1e5eb] bg-white hover:border-[#b9c2cf]"
}`}
>
<svg
viewBox="0 0 24 24"
className="mb-1 h-5 w-5 text-[#10284c] sm:h-6 sm:w-6"
fill="none"
stroke="currentColor"
strokeWidth="1.7"
>
<rect x="6" y="6" width="12" height="12" />
</svg>

<span className="min-h-4 px-0.5 text-[9px] font-medium leading-[1.15] text-[#10284c] sm:min-h-[28px] sm:text-[11px]">
Square
</span>

<span
className={`mt-0 h-4 w-4 rounded-full border-2 sm:h-[18px] sm:w-[18px] ${
plotShape === "square"
? "border-[#10284c] bg-[#10284c]"
: "border-[#cbd5e1] bg-white"
}`}
>
{plotShape === "square" && (
<span className="block h-full w-full rounded-full border-[3px] border-white" />
)}
</span>
</button>

{/* L-Shape */}
<button
type="button"
onClick={() => setPlotShape("l-shape")}
className={`flex min-w-0 flex-col items-center justify-center rounded-xl border px-1 py-1 text-center transition-all duration-200 sm:px-2 sm:py-3 ${
plotShape === "l-shape"
? "border-[#10284c] bg-[#f8fafc] shadow-sm"
: "border-[#e1e5eb] bg-white hover:border-[#b9c2cf]"
}`}
>
<svg
viewBox="0 0 24 24"
className="mb-1 h-5 w-5 text-[#10284c] sm:h-6 sm:w-6"
fill="none"
stroke="currentColor"
strokeWidth="1.7"
strokeLinejoin="round"
>
<path d="M5 5v14h14v-5H10V5H5Z" />
</svg>

<span className="min-h-4 px-0.5 text-[9px] font-medium leading-[1.15] text-[#10284c] sm:min-h-[28px] sm:text-[11px]">
L-Shape
</span>

<span
className={`mt-0 h-4 w-4 rounded-full border-2 sm:h-[18px] sm:w-[18px] ${
plotShape === "l-shape"
? "border-[#10284c] bg-[#10284c]"
: "border-[#cbd5e1] bg-white"
}`}
>
{plotShape === "l-shape" && (
<span className="block h-full w-full rounded-full border-[3px] border-white" />
)}
</span>
</button>

{/* U-Shape */}
<button
type="button"
onClick={() => setPlotShape("u-shape")}
className={`flex min-w-0 flex-col items-center justify-center rounded-xl border px-1 py-1 text-center transition-all duration-200 sm:px-2 sm:py-3 ${
plotShape === "u-shape"
? "border-[#10284c] bg-[#f8fafc] shadow-sm"
: "border-[#e1e5eb] bg-white hover:border-[#b9c2cf]"
}`}
>
<svg
viewBox="0 0 24 24"
className="mb-1 h-5 w-5 text-[#10284c] sm:h-6 sm:w-6"
fill="none"
stroke="currentColor"
strokeWidth="1.7"
strokeLinejoin="round"
>
<path d="M5 5v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5" />
</svg>

<span className="min-h-4 px-0.5 text-[9px] font-medium leading-[1.15] text-[#10284c] sm:min-h-[28px] sm:text-[11px]">
U-Shape
</span>

<span
className={`mt-0 h-4 w-4 rounded-full border-2 sm:h-[18px] sm:w-[18px] ${
plotShape === "u-shape"
? "border-[#10284c] bg-[#10284c]"
: "border-[#cbd5e1] bg-white"
}`}
>
{plotShape === "u-shape" && (
<span className="block h-full w-full rounded-full border-[3px] border-white" />
)}
</span>
</button>

</div>
</div>
</div>
</div>

{/* =========================================================
PLOT DIMENSIONS
========================================================= */}

<div className="mt-3 sm:mt-4">
<div className="rounded-2xl border border-[#e1e5eb] bg-white px-3 py-3 shadow-[0_2px_10px_rgba(16,40,76,0.06)] sm:px-4 sm:py-4">

<div className="grid grid-cols-1 gap-3 md:grid-cols-[210px_1fr] md:items-start md:gap-5">

{/* =====================================================
TITLE
===================================================== */}

<div className="flex items-center gap-3">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff5e3] text-[#b4872c] sm:h-11 sm:w-11">
<svg
viewBox="0 0 24 24"
className="h-5 w-5 sm:h-6 sm:w-6"
fill="none"
stroke="currentColor"
strokeWidth="1.7"
strokeLinecap="round"
strokeLinejoin="round"
>
<path d="M4 20L20 4" />
<path d="M7 17l-3-3" />
<path d="M10 14l-2-2" />
<path d="M13 11l-2-2" />
<path d="M16 8l-2-2" />
<path d="M19 5l-2-2" />
</svg>
</div>

<div>
<h2 className="text-[13px] font-semibold text-[#10284c] sm:text-[13px]">
Plot Dimensions <span className="text-red-500">*</span>
</h2>

<p className="mt-0.5 text-[10px] leading-4 text-[#64748b] sm:text-[11px]">
Enter dimensions based on the selected plot shape.
</p>
</div>
</div>

{/* =====================================================
DIMENSION CONTENT
===================================================== */}

<div className="rounded-xl border border-[#e1e5eb] bg-white p-3 sm:p-4">

{/* ===================================================
RECTANGLE
=================================================== */}

{plotShape === "rectangle" && (
<div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_190px] md:items-center md:gap-6">

<div>
<p className="mb-3 text-[12px] font-semibold text-[#10284c] sm:text-[13px]">
Rectangle <span className="font-normal text-[#64748b]">(e.g., 30 × 50 ft)</span>
</p>

<div className="grid grid-cols-[1fr_auto_1fr] items-end gap-2 sm:gap-3">

<div>
<label className="mb-1.5 block text-[10px] font-medium text-[#334155] sm:text-[11px]">
Length (ft)
</label>

<input
type="number"
min="1"
value={plotLength}
onChange={(e) => setPlotLength(e.target.value)}
placeholder="e.g., 50"
className="h-10 w-full rounded-lg border border-[#d9dee7] bg-white px-3 text-[12px] text-[#26354d] outline-none transition focus:border-[#10284c] focus:ring-1 focus:ring-[#10284c]/10 sm:h-11 sm:text-[13px]"
/>
</div>

<span className="pb-2 text-[14px] font-medium text-[#64748b]">
×
</span>

<div>
<label className="mb-1.5 block text-[10px] font-medium text-[#334155] sm:text-[11px]">
Width (ft)
</label>

<input
type="number"
min="1"
value={plotWidth}
onChange={(e) => setPlotWidth(e.target.value)}
placeholder="e.g., 30"
className="h-10 w-full rounded-lg border border-[#d9dee7] bg-white px-3 text-[12px] text-[#26354d] outline-none transition focus:border-[#10284c] focus:ring-1 focus:ring-[#10284c]/10 sm:h-11 sm:text-[13px]"
/>
</div>

</div>
</div>

{/* Rectangle diagram */}
<div className="hidden border-l border-[#e5e7eb] pl-3 md:flex md:items-center md:justify-center">
<div className="relative flex h-[110px] w-[145px] -translate-x-2 items-center justify-center">

{/* Length guide */}
<div className="absolute left-[12px] right-[18px] top-4 border-t border-dashed border-[#475569]" />

<span className="absolute top-0 left-1/2 -translate-x-1/2 text-[10px] font-medium text-[#334155]">
Length
</span>

{/* Plot */}
<div className="h-[60px] w-[100px] border border-[#334155] bg-[#fff5e3]" />

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-[#64748b]">
Plot
</div>

{/* Width guide */}
<div className="absolute right-[8px] top-[25px] h-[60px] border-r border-dashed border-[#475569]" />

<span className="absolute right-[-30px] top-1/2 -translate-y-1/2 text-[10px] font-medium text-[#334155]">
Width
</span>

</div>
</div>

</div>
)}

{/* ===================================================
SQUARE
=================================================== */}

{plotShape === "square" && (
<div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_190px] md:items-center md:gap-6">

<div>
<p className="mb-3 text-[12px] font-semibold text-[#10284c] sm:text-[13px]">
Square <span className="font-normal text-[#64748b]">(e.g., 40 × 40 ft)</span>
</p>

<div className="max-w-[260px]">
<label className="mb-1.5 block text-[10px] font-medium text-[#334155] sm:text-[11px]">
Side (ft)
</label>

<input
type="number"
min="1"
value={plotSide}
onChange={(e) => setPlotSide(e.target.value)}
placeholder="e.g., 40"
className="h-10 w-full rounded-lg border border-[#d9dee7] bg-white px-3 text-[12px] text-[#26354d] outline-none transition focus:border-[#10284c] focus:ring-1 focus:ring-[#10284c]/10 sm:h-11 sm:text-[13px]"
/>
</div>
</div>

{/* Square diagram */}
<div className="hidden border-1 border-[#e5e7eb] pl-3 md:flex md:items-center md:justify-center">
<div className="relative flex h-[110px] w-[145px] items-center justify-center">

{/* Square */}
<div className="h-[70px] w-[70px] translate-y-[8px] border border-[#334155] bg-[#fff5e3]" />

{/* Overall Width - Top */}
<div className="absolute left-1/2 top-[-0px] flex w-[70px] -translate-x-1/2 flex-col items-center">
<span className="mb-1 whitespace-nowrap text-[11px] font-medium text-[#334155]">
Side
</span>

<div className="relative w-full border-t border-[#64748b]">
<span className="absolute left-0 top-[-5px] h-[10px] border-l border-[#64748b]" />
<span className="absolute right-0 top-[-5px] h-[10px] border-r border-[#64748b]" />
</div>
</div>

{/* Overall Depth - Left */}
<div className="absolute left-[28px] top-[58%] flex h-[70px] -translate-y-1/2 items-center">
<div className="relative h-full border-l border-[#64748b]">
<span className="absolute left-[-5px] top-0 w-[10px] border-t border-[#64748b]" />
<span className="absolute left-[-5px] bottom-0 w-[10px] border-b border-[#64748b]" />
</div>

<span
className="absolute right-full mr-1 whitespace-nowrap text-[11px] font-medium text-[#334155]"
style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
>
Side
</span>
</div>

</div>
</div>
</div>
)}

{/* ===================================================
L-SHAPE
=================================================== */}

{plotShape === "l-shape" && (
<div>
<p className="mb-3 text-[12px] font-semibold text-[#10284c] sm:text-[13px]">
L-Shape
</p>

<div className="grid grid-cols-2 gap-3 sm:grid-cols-3">

<div>
<label className="mb-1.5 block text-[10px] font-medium text-[#334155] sm:text-[11px]">
Length (ft)
</label>

<input
type="number"
min="1"
value={plotLength}
onChange={(e) => setPlotLength(e.target.value)}
placeholder="e.g., 50"
className="h-10 w-full rounded-lg border border-[#d9dee7] px-3 text-[12px] outline-none focus:border-[#10284c] sm:h-11 sm:text-[13px]"
/>
</div>

<div>
<label className="mb-1.5 block text-[10px] font-medium text-[#334155] sm:text-[11px]">
Width (ft)
</label>

<input
type="number"
min="1"
value={plotWidth}
onChange={(e) => setPlotWidth(e.target.value)}
placeholder="e.g., 30"
className="h-10 w-full rounded-lg border border-[#d9dee7] px-3 text-[12px] outline-none focus:border-[#10284c] sm:h-11 sm:text-[13px]"
/>
</div>

<div>
<label className="mb-1.5 block text-[10px] font-medium text-[#334155] sm:text-[11px]">
Depth (ft)
</label>

<input
type="number"
min="1"
value={plotDepth}
onChange={(e) => setPlotDepth(e.target.value)}
placeholder="e.g., 20"
className="h-10 w-full rounded-lg border border-[#d9dee7] px-3 text-[12px] outline-none focus:border-[#10284c] sm:h-11 sm:text-[13px]"
/>
</div>

</div>
</div>
)}

{/* ===================================================
U-SHAPE
=================================================== */}

{plotShape === "u-shape" && (
<div>
<p className="mb-3 text-[12px] font-semibold text-[#10284c] sm:text-[13px]">
U-Shape
</p>

<div className="grid grid-cols-2 gap-2 sm:grid-cols-[1fr_1fr_1fr_1fr_280px] sm:gap-2 items-start">

<div>
<label className="mb-1.5 block text-[10px] font-medium text-[#334155] sm:text-[11px]">
Overall Width (ft)
</label>

<input
type="number"
min="1"
value={plotTopWidth}
onChange={(e) => setPlotTopWidth(e.target.value)}
placeholder="e.g., 30"
className="h-10 w-[140px] sm:w-[160px] rounded-lg border border-[#d9dee7] px-3 text-[12px] outline-none focus:border-[#10284c] sm:h-11 sm:text-[13px]"
/>
</div>

<div>
<label className="mb-1.5 block text-[10px] font-medium text-[#334155] sm:text-[11px]">
Opening Width (ft)
</label>

<input
type="number"
min="1"
value={plotBottomWidth}
onChange={(e) => setPlotBottomWidth(e.target.value)}
placeholder="e.g., 20"
className="h-10 w-[140px] sm:w-[160px] rounded-lg border border-[#d9dee7] px-3 text-[12px] outline-none focus:border-[#10284c] sm:h-11 sm:text-[13px]"
/>
</div>

<div>
<label className="mb-1.5 block text-[10px] font-medium text-[#334155] sm:text-[11px]">
Overall Depth (ft)
</label>

<input
type="number"
min="1"
value={plotDepth}
onChange={(e) => setPlotDepth(e.target.value)}
placeholder="e.g., 40"
className="h-10 w-[140px] sm:w-[160px] rounded-lg border border-[#d9dee7] px-3 text-[12px] outline-none focus:border-[#10284c] sm:h-11 sm:text-[13px]"
/>
</div>

<div>
<label className="mb-1.5 block text-[10px] font-medium text-[#334155] sm:text-[11px]">
Side Leg Width (ft)
</label>

<input
type="number"
min="1"
value={plotStemWidth}
onChange={(e) => setPlotStemWidth(e.target.value)}
placeholder="e.g., 12"
className="h-10 w-[140px] sm:w-[160px] rounded-lg border border-[#d9dee7] px-3 text-[12px] outline-none focus:border-[#10284c] sm:h-11 sm:text-[13px]"
/>
</div>
<div className="mt-2 rounded-xl border border-[#e1e5eb] bg-[#fafafa] p-2 sm:mt-[-24px] sm:p-3">

<div className="flex justify-center">
<svg
viewBox="0 0 420 230"
className="h-auto w-full max-w-[280px]"
fill="none"
>
{/* U-shaped plot */}
<path
d="M70 45 H350 V185 H250 V105 H170 V185 H70 Z"
stroke="#10284c"
strokeWidth="3"
strokeLinejoin="round"
/>

{/* Overall Width */}
<line x1="70" y1="25" x2="350" y2="25" stroke="#64748b" strokeWidth="1.5" />
<line x1="70" y1="20" x2="70" y2="32" stroke="#64748b" strokeWidth="1.5" />
<line x1="350" y1="20" x2="350" y2="32" stroke="#64748b" strokeWidth="1.5" />
<text
x="210"
y="18"
textAnchor="middle"
fontSize="13"
fill="#334155"
>
Overall Width
</text>

{/* Overall Depth */}
<line x1="45" y1="45" x2="45" y2="185" stroke="#64748b" strokeWidth="1.5" />
<line x1="39" y1="45" x2="51" y2="45" stroke="#64748b" strokeWidth="1.5" />
<line x1="39" y1="185" x2="51" y2="185" stroke="#64748b" strokeWidth="1.5" />
<text
x="25"
y="120"
textAnchor="middle"
fontSize="13"
fill="#334155"
transform="rotate(-90 25 120)"
>
Overall Depth
</text>

{/* Opening Width */}
<line
x1="170"
y1="94"
x2="250"
y2="94"
stroke="#64748b"
strokeWidth="1.5"
/>

<line
x1="170"
y1="88"
x2="170"
y2="100"
stroke="#64748b"
strokeWidth="1.5"
/>

<line
x1="250"
y1="88"
x2="250"
y2="100"
stroke="#64748b"
strokeWidth="1.5"
/>

<text
x="210"
y="84"
textAnchor="middle"
fontSize="13"
fill="#334155"
>
Opening Width
</text>
{/* Side Leg Width */}
<line
x1="70"
y1="200"
x2="170"
y2="200"
stroke="#64748b"
strokeWidth="1.5"
/>

<line
x1="70"
y1="195"
x2="70"
y2="205"
stroke="#64748b"
strokeWidth="1.5"
/>

<line
x1="170"
y1="195"
x2="170"
y2="205"
stroke="#64748b"
strokeWidth="1.5"
/>

<text
x="120"
y="218"
textAnchor="middle"
fontSize="13"
fill="#334155"
>
Side Leg Width
</text>
</svg>
</div>
</div>
</div>
</div>
)}

</div>
</div>
</div>
</div>
{/* ============================================================
NUMBER OF FLOORS + TARGET BUILT-UP AREA
============================================================ */}

<div className="mt-3 overflow-hidden rounded-[14px] border border-[#e5e7eb] bg-white">

{/* ==========================================================
DESKTOP VERSION
========================================================== */}
<div className="hidden md:block">

{/* FLOOR + BUILT-UP AREA ROW */}
<div className="grid grid-cols-2 divide-x divide-[#e5e7eb]">

{/* ================= NUMBER OF FLOORS ================= */}
<div className="flex items-center gap-4 px-5 py-4">

{/* Icon */}
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff4df] text-[#a77a25]">
<svg
viewBox="0 0 24 24"
className="h-5 w-5"
fill="none"
stroke="currentColor"
strokeWidth="1.8"
strokeLinecap="round"
strokeLinejoin="round"
>
<path d="M4 21V9l8-6 8 6v12" />
<path d="M8 21v-6h8v6" />
<path d="M9 10h6" />
</svg>
</div>

{/* Label */}
<div className="w-[155px] shrink-0">
<label className="text-[13px] font-semibold text-[#10284c]">
Number of Floors <span className="text-red-500">*</span>
</label>
</div>

{/* Select */}
<div className="flex-1">
<select
value={floorCount}
onChange={(e) => setFloorCount(e.target.value)}
className="h-10 w-full rounded-[7px] border border-[#d9dee7] bg-white px-3 text-[13px] text-[#334155] outline-none transition focus:border-[#10284c] focus:ring-1 focus:ring-[#10284c]"
>
<option value="">Select Number of Floors</option>
<option value="ground">Ground Floor</option>
<option value="first">G+1 Floor</option>
<option value="second">G+2 Floor</option>
<option value="third">G+3 Floor</option>
<option value="more-than-four">More than 4 Floors</option>
</select>
</div>
</div>

{/* ================= TARGET BUILT-UP AREA ================= */}
<div className="flex items-center gap-4 px-5 py-4">

{/* Icon */}
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff4df] text-[#a77a25]">
<svg
viewBox="0 0 24 24"
className="h-5 w-5"
fill="none"
stroke="currentColor"
strokeWidth="1.8"
strokeLinecap="round"
strokeLinejoin="round"
>
<circle cx="12" cy="12" r="8" />
<circle cx="12" cy="12" r="3" />
<path d="M12 1v4" />
<path d="M12 19v4" />
<path d="M1 12h4" />
<path d="M19 12h4" />
</svg>
</div>

{/* Label */}
<div className="w-[175px] shrink-0">
<label className="text-[13px] font-semibold text-[#10284c]">
Target Built-up Area (sq ft){" "}
<span className="text-red-500">*</span>
</label>
</div>

{/* Input */}
<div className="flex flex-1">
<input
type="number"
min="1"
value={builtUpArea}
onChange={(e) => setBuiltUpArea(e.target.value)}
placeholder="e.g., 2000"
className="h-10 w-full rounded-l-[7px] border border-r-0 border-[#d9dee7] bg-white px-3 text-[13px] text-[#334155] outline-none placeholder:text-[#94a3b8] focus:border-[#10284c]"
/>

<div className="flex h-10 items-center rounded-r-[7px] border border-[#d9dee7] bg-white px-3 text-[12px] text-[#64748b]">
sq ft
</div>
</div>
</div>

</div>

{/* ================= INFORMATION NOTE ================= */}
<div className="mx-5 mb-4 mt-1 flex items-start gap-2 rounded-[6px] border border-[#f0dfbd] bg-[#fff8eb] px-3 py-2.5">

<svg
viewBox="0 0 24 24"
className="mt-[1px] h-4 w-4 shrink-0 text-[#a77a25]"
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

<p className="text-[11px] leading-[17px] text-[#475569]">
Please enter the target built-up area (not super built-up area).
This is the actual construction area of your building.
</p>

</div>
</div>


{/* ==========================================================
MOBILE VERSION
========================================================== */}
<div className="block md:hidden">

{/* ================= NUMBER OF FLOORS ================= */}
<div className="flex items-center gap-3 px-4 py-3">

{/* Icon */}
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f0efff] text-[#10284c]">
<svg
viewBox="0 0 24 24"
className="h-[18px] w-[18px]"
fill="none"
stroke="currentColor"
strokeWidth="1.8"
strokeLinecap="round"
strokeLinejoin="round"
>
<path d="M4 21V9l8-6 8 6v12" />
<path d="M8 21v-6h8v6" />
<path d="M9 10h6" />
</svg>
</div>

<div className="min-w-0 flex-1">

<label className="mb-1.5 block text-[13px] font-semibold leading-[14px] text-[#10284c]">
Number of Floors <span className="text-red-500">*</span>
</label>

<select
value={floorCount}
onChange={(e) => setFloorCount(e.target.value)}
className="h-10 w-full rounded-[8px] border border-[#d9dee7] bg-white px-3 text-[13px] text-[#334155] outline-none focus:border-[#10284c] focus:ring-1 focus:ring-[#10284c]"
>
<option value="">Select Number of Floors</option>
<option value="ground">Ground Floor</option>
<option value="first">First Floor</option>
<option value="second">Second Floor</option>
<option value="third">Third Floor</option>
<option value="more-than-four">More than 4 Floors</option>
</select>

</div>
</div>


{/* ================= TARGET BUILT-UP AREA ================= */}
<div className="flex items-start gap-3 border-t border-[#edf0f4] px-4 py-3">

{/* Icon */}
<div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f0efff] text-[#10284c]">
<svg
viewBox="0 0 24 24"
className="h-[18px] w-[18px]"
fill="none"
stroke="currentColor"
strokeWidth="1.8"
strokeLinecap="round"
strokeLinejoin="round"
>
<circle cx="12" cy="12" r="8" />
<circle cx="12" cy="12" r="3" />
<path d="M12 1v4" />
<path d="M12 19v4" />
<path d="M1 12h4" />
<path d="M19 12h4" />
</svg>
</div>

<div className="min-w-0 flex-1">

<label className="mb-1.5 block text-[13px] font-semibold leading-[14px] text-[#10284c]">
Target Built-up Area (sq ft){" "}
<span className="text-red-500">*</span>
</label>

<div className="flex">

<input
type="number"
min="1"
value={builtUpArea}
onChange={(e) => setBuiltUpArea(e.target.value)}
placeholder="e.g., 2000"
className="h-10 min-w-0 flex-1 rounded-l-[8px] border border-r-0 border-[#d9dee7] bg-white px-3 text-[13px] text-[#334155] outline-none placeholder:text-[#94a3b8] focus:border-[#10284c]"
/>

<div className="flex h-10 items-center rounded-r-[8px] border border-[#d9dee7] bg-white px-3 text-[11px] font-medium text-[#64748b]">
sq ft
</div>

</div>

{/* Information note */}
<div className="mt-2.5 flex items-start gap-2 rounded-[7px] border border-[#f0dfbd] bg-[#fff8eb] px-2.5 py-2">

<svg
viewBox="0 0 24 24"
className="mt-[1px] h-[15px] w-[15px] shrink-0 text-[#a77a25]"
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

<p className="text-[11px] leading-[16px] text-[#475569]">
Please enter the target built-up area (not super built-up area).
This is the actual construction area of your building.
</p>

</div>

</div>
</div>
</div>
</div>
{/* =========================
SCREEN 1 BOTTOM ACTIONS
========================= */}
<div className="mt-6 flex items-center justify-between gap-4 border-t border-[#e5e7eb] pt-5">

{/* SAVE & EXIT */}
<button
type="button"
onClick={saveScreen1}
className="hidden lg:inline-flex items-center gap-2 rounded-xl border border-[#d9dee7] bg-white px-4 py-2.5 text-[13px] font-medium text-[#334155] transition hover:bg-[#f8fafc]"
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
d="M4 7.5A2.5 2.5 0 0 1 6.5 5h8.086a2.5 2.5 0 0 1 1.768.732l2.914 2.914A2.5 2.5 0 0 1 20 10.414V18.5A2.5 2.5 0 0 1 17.5 21h-11A2.5 2.5 0 0 1 4 18.5v-11Z"
/>
<path
strokeLinecap="round"
strokeLinejoin="round"
d="M8 5v5h8V5M8 21v-4.5A1.5 1.5 0 0 1 9.5 15h5a1.5 1.5 0 0 1 1.5 1.5V21"
/>
</svg>

Home Page
</button>


{/* CONTINUE */}
<button
type="button"
onClick={() => {
saveScreen1();

// Screen 2 will be connected here
// once Screen 2 is implemented.
}}
className="ml-auto inline-flex items-center justify-center gap-3 rounded-xl bg-[#10284c] px-6 py-3 text-[14px] font-semibold text-white shadow-sm transition hover:bg-[#0c203d] lg:min-w-[220px]"
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

</section>

</main>
);
}