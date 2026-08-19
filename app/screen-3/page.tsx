"use client";

import { useEffect, useState } from "react";

/* =========================================================
PROGRESS
========================================================= */

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

/* =========================================================
SCREEN 3 OPTIONS
========================================================= */

const architecturalStyles = [
"Modern",
"Contemporary",
"Traditional",
"Classic",
"Mediterranean",
"Minimalist",
"Farmhouse",
];

const naturalLightOptions = [
{
id: "maximum",
label: "Maximum Natural Light",
description: "Large windows, skylights, open spaces",
},
{
id: "moderate",
label: "Moderate Natural Light",
description: "Balanced natural and artificial light",
},
{
id: "standard",
label: "Standard",
description: "Normal windows and openings",
},
];

const openPlanOptions = [
{
id: "open",
label: "Open Plan",
description: "Spacious, less walls, connected spaces",
},
{
id: "semi-open",
label: "Semi Open Plan",
description: "Partially open with subtle divisions",
},
{
id: "traditional",
label: "Traditional Plan",
description: "Separate rooms with more privacy",
},
];

const outdoorOptions = [
{
id: "large",
label: "Large Outdoor Living",
description: "Spacious balcony/terrace for seating",
},
{
id: "moderate",
label: "Moderate",
description: "Standard balcony or small seating",
},
{
id: "basic",
label: "Basic",
description: "Small balcony / utility space only",
},
{
id: "not-required",
label: "Not Required",
description: "No balcony / outdoor area",
},
];

const architecturalFeatureOptions = [
{
id: "doubleHeightLiving",
label: "Double Height Living",
},
{
id: "courtyard",
label: "Courtyard",
},
];

/* =========================================================
TYPES
========================================================= */

type Screen1Data = {
state?: string;
city?: string;
propertyType?: string;
plotShape?: string;
plotLength?: string;
plotWidth?: string;
plotSide?: string;
plotDepth?: string;
plotTopWidth?: string;
plotBottomWidth?: string;
plotStemWidth?: string;
floorCount?: string;
builtUpArea?: string;
};

type Screen2Data = {
propertyType?: string;
values?: Record<string, any>;
specialRequirements?: string;
};

type Screen3Data = {
architecturalStyle: string;
naturalLight: string;
openPlan: string;
outdoorLiving: string;
architecturalFeatures: string[];
};

/* =========================================================
ICONS
========================================================= */

function IconUser() {
return (
<svg
viewBox="0 0 24 24"
className="h-5 w-5"
fill="none"
stroke="currentColor"
strokeWidth="1.7"
strokeLinecap="round"
strokeLinejoin="round"
>
<circle cx="12" cy="8" r="3.5" />
<path d="M5 20c.8-3.2 3.2-5 7-5s6.2 1.8 7 5" />
</svg>
);
}

function IconFolder() {
return (
<svg
viewBox="0 0 24 24"
className="h-[19px] w-[19px]"
fill="none"
stroke="currentColor"
strokeWidth="1.8"
strokeLinecap="round"
strokeLinejoin="round"
>
<path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h4l2 2h5A2.5 2.5 0 0 1 20 8.5v9A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5v-11Z" />
</svg>
);
}

function IconSettings() {
return (
<svg
viewBox="0 0 24 24"
className="h-[19px] w-[19px]"
fill="none"
stroke="currentColor"
strokeWidth="1.7"
strokeLinecap="round"
strokeLinejoin="round"
>
<circle cx="12" cy="12" r="3" />
<path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.8 1.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V20h-2.6v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1-1.8-1.8.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H6V11.3h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1 1.8-1.8.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.6V4h2.6v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1 1.8 1.8-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.1v2.6h-.1a1.7 1.7 0 0 0-1.6 1.3Z" />
</svg>
);
}

function IconLogout() {
return (
<svg
viewBox="0 0 24 24"
className="h-[19px] w-[19px]"
fill="none"
stroke="currentColor"
strokeWidth="1.8"
strokeLinecap="round"
strokeLinejoin="round"
>
<path d="M10 5H6.5A2.5 2.5 0 0 0 4 7.5v9A2.5 2.5 0 0 0 6.5 19H10" />
<path d="M14 8l4 4-4 4" />
<path d="M18 12H9" />
</svg>
);
}

function IconBack() {
return (
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
);
}

function IconArrowRight() {
return (
<svg
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
strokeWidth="2"
className="h-5 w-5"
>
<path d="M5 12h13" />
<path d="m13 6 6 6-6 6" />
</svg>
);
}

function IconHome() {
return (
<svg
viewBox="0 0 24 24"
className="h-6 w-6"
fill="none"
stroke="currentColor"
strokeWidth="1.7"
strokeLinecap="round"
strokeLinejoin="round"
>
<path d="M4 11 12 4l8 7" />
<path d="M6 10v9h12v-9" />
<path d="M9 19v-5h6v5" />
</svg>
);
}

function IconSun() {
return (
<svg
viewBox="0 0 24 24"
className="h-6 w-6"
fill="none"
stroke="currentColor"
strokeWidth="1.7"
strokeLinecap="round"
strokeLinejoin="round"
>
<circle cx="12" cy="12" r="3.5" />
<path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
</svg>
);
}

function IconPlan() {
return (
<svg
viewBox="0 0 24 24"
className="h-6 w-6"
fill="none"
stroke="currentColor"
strokeWidth="1.7"
strokeLinecap="round"
strokeLinejoin="round"
>
<rect x="5" y="5" width="14" height="14" rx="1.5" />
<path d="M5 10h14M10 5v14" />
</svg>
);
}

function IconOutdoor() {
return (
<svg
viewBox="0 0 24 24"
className="h-6 w-6"
fill="none"
stroke="currentColor"
strokeWidth="1.7"
strokeLinecap="round"
strokeLinejoin="round"
>
<path d="M4 10h16" />
<path d="M6 10v8M10 10v8M14 10v8M18 10v8" />
<path d="M3 18h18" />
<path d="M5 7h14" />
</svg>
);
}

function IconSparkles() {
return (
<svg
viewBox="0 0 24 24"
className="h-6 w-6"
fill="none"
stroke="currentColor"
strokeWidth="1.7"
strokeLinecap="round"
strokeLinejoin="round"
>
<path d="m12 3 1.3 4.2L17.5 9 13.3 10.3 12 14.5l-1.3-4.2L6.5 9l4.2-1.8L12 3Z" />
<path d="m19 14 .7 2.3L22 17l-2.3.7L19 20l-.7-2.3L16 17l2.3-.7L19 14Z" />
<path d="m5 14 .6 1.9L7.5 17l-1.9.6L5 19.5l-.6-1.9L2.5 17l1.9-.6L5 14Z" />
</svg>
);
}

function IconPalette() {
return (
<svg
viewBox="0 0 24 24"
className="h-5 w-5"
fill="none"
stroke="currentColor"
strokeWidth="1.7"
strokeLinecap="round"
strokeLinejoin="round"
>
<path d="M12 3a9 9 0 0 0 0 18h1.4a1.6 1.6 0 0 0 1.1-2.8c-.9-.8-.3-2.2.9-2.2H17a4 4 0 0 0 4-4C21 7 17 3 12 3Z" />
<circle cx="7.5" cy="10" r="1" />
<circle cx="10" cy="7" r="1" />
<circle cx="14" cy="7" r="1" />
<circle cx="17" cy="10" r="1" />
</svg>
);
}

/* =========================================================
PROFILE POPUP
========================================================= */

function ProfilePopup({
show,
onClose,
}: {
show: boolean;
onClose: () => void;
}) {
const [showAccountSettings, setShowAccountSettings] = useState(false);

useEffect(() => {
if (!show) {
setShowAccountSettings(false);
}
}, [show]);

if (!show) return null;

return (
<div
className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 px-4 backdrop-blur-[2px]"
onClick={onClose}
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
onClick={onClose}
className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f6f8fa] text-[20px] leading-none text-[#64748b] transition hover:bg-[#eef1f5] hover:text-[#10284c]"
>
×
</button>
</div>

<div className="mt-6 flex items-center gap-4">
<div className="flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full border border-[#ead7ad] bg-[#fff8e8] text-[#b4872c]">
<IconUser />
</div>

<div className="min-w-0">
<p className="text-[17px] font-bold text-[#10284c]">
Your Name
</p>

<p className="mt-1 text-[13px] text-[#64748b] underline underline-offset-2">
your@email.com
</p>
</div>
</div>
</div>

{/* PROFILE ACTIONS */}
<div className="px-4 py-4">
{/* MY PROJECTS */}
<button
type="button"
className="group flex w-full items-center gap-3 rounded-[16px] px-3 py-3.5 text-left transition hover:bg-[#f8fafc]"
>
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f4f6f9] text-[#10284c]">
<IconFolder />
</div>

<div className="min-w-0 flex-1">
<p className="text-[13px] font-semibold text-[#10284c]">
My Projects
</p>

<p className="mt-0.5 text-[11px] text-[#7b8798]">
View your saved home projects
</p>
</div>

<svg
viewBox="0 0 24 24"
className="h-4 w-4 text-[#94a3b8] transition group-hover:translate-x-0.5 group-hover:text-[#10284c]"
fill="none"
stroke="currentColor"
strokeWidth="1.8"
strokeLinecap="round"
strokeLinejoin="round"
>
<path d="m9 18 6-6-6-6" />
</svg>
</button>

{/* ACCOUNT SETTINGS */}
<button
type="button"
onClick={() => setShowAccountSettings(true)}
className="group mt-1 flex w-full items-center gap-3 rounded-[16px] px-3 py-3.5 text-left transition hover:bg-[#f8fafc]"
>
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f4f6f9] text-[#10284c]">
<IconSettings />
</div>

<div className="min-w-0 flex-1">
<p className="text-[13px] font-semibold text-[#10284c]">
Account Settings
</p>

<p className="mt-0.5 text-[11px] text-[#7b8798]">
Change your account details
</p>
</div>

<svg
viewBox="0 0 24 24"
className="h-4 w-4 text-[#94a3b8] transition group-hover:translate-x-0.5 group-hover:text-[#10284c]"
fill="none"
stroke="currentColor"
strokeWidth="1.8"
strokeLinecap="round"
strokeLinejoin="round"
>
<path d="m9 18 6-6-6-6" />
</svg>
</button>

<div className="my-3 border-t border-[#edf0f4]" />

{/* SIGN OUT */}
<button
type="button"
className="group flex w-full items-center gap-3 rounded-[16px] px-3 py-3.5 text-left transition hover:bg-[#fff7f6]"
>
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fff1ef] text-[#b42318]">
<IconLogout />
</div>

<div>
<p className="text-[13px] font-semibold text-[#b42318]">
Sign Out
</p>

<p className="mt-0.5 text-[11px] text-[#9a6b68]">
Sign out of your Solving Walls account
</p>
</div>
</button>
</div>
</>
) : (
<>
{/* ACCOUNT SETTINGS HEADER */}
<div className="border-b border-[#edf0f4] px-6 pb-5 pt-6">
<div className="flex items-center gap-3">
<button
type="button"
aria-label="Back to profile"
onClick={() => setShowAccountSettings(false)}
className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f6f8fa] text-[#64748b] transition hover:bg-[#eef1f5] hover:text-[#10284c]"
>
<IconBack />
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

{/* ACCOUNT SETTINGS OPTIONS */}
<div className="px-4 py-4">
{/* CHANGE NAME */}
<button
type="button"
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
Change Name
</p>

<p className="mt-0.5 text-[11px] text-[#7b8798]">
Update the name shown on your profile
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

{/* CHANGE EMAIL */}
<button
type="button"
className="group mt-1 flex w-full items-center gap-3 rounded-[16px] px-3 py-3.5 text-left transition hover:bg-[#f8fafc]"
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
<rect x="3" y="5" width="18" height="14" rx="2" />
<path d="m4 7 8 6 8-6" />
</svg>
</div>

<div className="flex-1">
<p className="text-[13px] font-semibold text-[#10284c]">
Change Email ID
</p>

<p className="mt-0.5 text-[11px] text-[#7b8798]">
Update the email address on your account
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
)}
</div>
</div>
);
}

/* =========================================================
SCREEN 3
========================================================= */

export default function Screen3() {
const [screen1Data, setScreen1Data] = useState<Screen1Data | null>(null);
const [screen2Data, setScreen2Data] = useState<Screen2Data | null>(null);

const [showProfile, setShowProfile] = useState(false);

const [architecturalStyle, setArchitecturalStyle] = useState("");
const [naturalLight, setNaturalLight] = useState("");
const [openPlan, setOpenPlan] = useState("");
const [outdoorLiving, setOutdoorLiving] = useState("");
const [architecturalFeatures, setArchitecturalFeatures] = useState<
string[]
>([]);

const isScreen3Complete =
architecturalStyle.trim() !== "" &&
naturalLight.trim() !== "" &&
openPlan.trim() !== "" &&
outdoorLiving.trim() !== "";

/* =========================================================
LOAD PREVIOUS DATA
========================================================= */

useEffect(() => {
try {
const savedScreen1 = localStorage.getItem("solvingWalls_screen1");

if (savedScreen1) {
setScreen1Data(JSON.parse(savedScreen1));
}

const savedScreen2 = localStorage.getItem("solvingWalls_screen2");

if (savedScreen2) {
setScreen2Data(JSON.parse(savedScreen2));
}

const savedScreen3 = localStorage.getItem("solvingWalls_screen3");

if (savedScreen3) {
const parsed: Screen3Data = JSON.parse(savedScreen3);

setArchitecturalStyle(parsed.architecturalStyle || "");
setNaturalLight(parsed.naturalLight || "maximum");
setOpenPlan(parsed.openPlan || "open");
setOutdoorLiving(parsed.outdoorLiving || "large");
setArchitecturalFeatures(parsed.architecturalFeatures || []);
}
} catch (error) {
console.error("Unable to load design preference data:", error);
}
}, []);

/* =========================================================
TOGGLE FEATURE
========================================================= */

const toggleArchitecturalFeature = (id: string) => {
setArchitecturalFeatures((previous) =>
previous.includes(id)
? previous.filter((item) => item !== id)
: [...previous, id]
);
};

/* =========================================================
SAVE
========================================================= */

const saveScreen3 = () => {
const screen3Data: Screen3Data = {
architecturalStyle,
naturalLight,
openPlan,
outdoorLiving,
architecturalFeatures,
};

localStorage.setItem(
"solvingWalls_screen3",
JSON.stringify(screen3Data)
);
};

/* =========================================================
NAVIGATION
========================================================= */

const goBack = () => {
saveScreen3();
window.location.href = "/screen-2";
};

const continueToNextStep = () => {
saveScreen3();

window.location.href = "/screen-4";
};

/* =========================================================
CONTEXT
========================================================= */

const propertyType =
screen1Data?.propertyType ||
screen2Data?.propertyType ||
"Not selected";

return (
<main className="min-h-screen bg-[#f8fafc] text-[#10284c]">
{/* =====================================================
PROFILE POPUP
===================================================== */}

<ProfilePopup
show={showProfile}
onClose={() => setShowProfile(false)}
/>

{/* =====================================================
HEADER
===================================================== */}

<header className="border-b border-[#e5e7eb] bg-white">
{/* ================= DESKTOP HEADER ================= */}

<div className="mx-auto hidden min-h-[108px] max-w-[1540px] items-center gap-8 px-6 lg:flex lg:px-10">
{/* LOGO */}

<div className="flex w-[300px] shrink-0 items-center">
<img
src="/images/s-walls.png"
alt="Solving Walls"
className="h-13 w-auto object-contain"
/>
</div>

{/* DESKTOP PROGRESS */}

<div className="flex min-w-0 flex-1 items-start justify-center translate-x-[35px]">
<div className="flex w-full max-w-[760px] items-start">
{desktopSteps.map((step, index) => {
const active = index === 2;
const completed = index < 2;

return (
<div
key={step}
className="flex min-w-0 flex-1 items-start"
>
<div className="flex w-full items-start">
<div className="flex min-w-[45px] flex-col items-center">
<div
className={`flex h-8 w-8 items-center justify-center rounded-full border text-sm font-semibold ${
active
? "border-[#10284c] bg-[#10284c] text-white"
: completed
? "border-[#10284c] bg-[#10284c] text-white"
: "border-[#d7dce3] bg-white text-[#26344b]"
}`}
>
{completed ? "✓" : index + 1}
</div>

<div
className={`mt-2 whitespace-nowrap text-center text-[11px] font-medium leading-tight ${
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
className={`mt-[15px] w-[80px] flex-none h-[2px] ${
index < 2
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

{/* PROFILE */}

<div className="flex w-[110px] shrink-0 justify-end">
<button
type="button"
aria-label="profile"
onClick={() => setShowProfile(true)}
className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e1e5eb] bg-white text-[20px] shadow-sm"
>
<span className="text-[18px]">👤</span>
</button>
</div>
</div>

{/* ================= MOBILE HEADER ================= */}

<div className="lg:hidden">
{/* MOBILE TOP BAR */}

<div className="flex h-[92px] items-center justify-between px-5">
{/* BACK */}

<button
type="button"
aria-label="Go back"
onClick={goBack}
className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#e1e5eb] bg-white text-[#10284c] shadow-[0_2px_8px_rgba(16,40,76,0.06)]"
>
<IconBack />
</button>

{/* LOGO */}

<div className="flex flex-1 justify-center px-4">
<img
src="/images/s-walls.png"
alt="Solving Walls"
className="h-10 w-auto object-contain"
/>
</div>

{/* PROFILE */}

<button
type="button"
aria-label="profile"
onClick={() => setShowProfile(true)}
className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e1e5eb] bg-white text-[20px] shadow-sm"
>
👤
</button>
</div>

{/* MOBILE PROGRESS */}

<div className="px-5 pb-4.5">
<div className="flex w-full items-start">
{mobileSteps.map((step, index) => {
const active = index === 2;
const completed = index < 2;

return (
<div
key={step}
className="relative flex min-w-0 flex-1 flex-col items-center"
>
{/* CONNECTOR */}

{index < mobileSteps.length - 1 && (
<div
className={`absolute left-1/2 top-[17px] h-[2px] w-full ${
index < 2
? "bg-[#d9a441]"
: "bg-[#d7dce3]"
}`}
/>
)}

{/* CIRCLE */}

<div
className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-full border text-[13px] font-semibold ${
active || completed
? "border-[#10284c] bg-[#10284c] text-white"
: "border-[#d7dce3] bg-white text-[#26344b]"
}`}
>
{completed ? "✓" : index + 1}
</div>

{/* LABEL */}

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
);
})}
</div>
</div>
</div>
</header>

{/* =====================================================
PAGE INTRO
===================================================== */}

<section className="mx-auto max-w-[1540px] px-5 pb-5 pt-6 sm:px-8 lg:px-10 lg:pb-5 lg:pt-6">
<div className="flex items-start justify-between gap-4">
{/* LEFT — EXISTING CONTENT, UNCHANGED */}
<div className="min-w-0">
<p className="text-[11px] font-semibold tracking-[0.8px] text-[#9a7734] sm:text-[12px]">
STEP 3 OF 5
</p>

<h1 className="mt-1 text-[28px] font-bold leading-tight tracking-[-0.7px] text-[#10284c] sm:text-[32px] lg:text-[34px]">
Design Preferences
</h1>

<p className="mt-1 max-w-[700px] text-[13px] leading-5 text-[#596579] sm:text-[14px]">
Tell us your design style and preferences. This helps our AI create a
design that matches your taste and lifestyle perfectly.
</p>
</div>

{/* RIGHT — GOLDEN DESIGN PREFERENCES ICON / MOBILE ONLY */}
<div className="mt-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#fff5e3] text-[#b4872c] sm:h-16 sm:w-16 lg:hidden">
<svg
viewBox="0 0 32 32"
fill="none"
stroke="currentColor"
strokeWidth="1.7"
strokeLinecap="round"
strokeLinejoin="round"
className="h-8 w-8"
>
{/* Sofa */}
<path d="M4.5 17.5V14a3 3 0 0 1 3-3h4.5a3 3 0 0 1 3 3v3.5" />
<path d="M15 17.5V14a3 3 0 0 1 3-3h4.5a3 3 0 0 1 3 3v3.5" />

<path d="M3.5 17.5h25v5h-25z" />
<path d="M6 22.5v2" />
<path d="M26 22.5v2" />

{/* Clear gap between sofa and lamp */}

{/* Floor lamp */}
<path d="M29.5 5.5h2" />
<path d="M29.5 5.5l-1.5 3h4.5z" />
<path d="M31 8.5v16" />
<path d="M27.5 24.5h5" />
</svg>
</div>
</div>
</section>

{/* =====================================================
MAIN CONTENT
===================================================== */}

<section className="mx-auto max-w-[1450px] px-5 pb-8 sm:px-8 lg:px-10">
<div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_300px]">
{/* =================================================
LEFT CONTENT
================================================= */}

<div className="space-y-4">
{/* ================= ARCHITECTURAL STYLE ================= */}

<div className="rounded-2xl border border-[#e1e5eb] bg-white px-4 py-5 shadow-[0_2px_10px_rgba(16,40,76,0.04)] sm:px-6 sm:py-6">
<div className="flex items-start gap-3">
<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fff5e3] text-[#b4872c]">
<IconHome />
</div>

<div className="min-w-0 flex-1">
<h2 className="text-[15px] font-semibold text-[#10284c] sm:text-[14px]">
1. Architectural Style <span className="text-[#b42318]">*</span>
</h2>

<select
value={architecturalStyle}
onChange={(event) =>
setArchitecturalStyle(event.target.value)
}
className="mt-3 w-full max-w-[360px] rounded-xl border border-[#dce2ea] bg-white px-3 py-2.5 text-[13px] text-[#334155] outline-none transition focus:border-[#b4872c]"
>
<option value="">Select Architectural Style</option>

{architecturalStyles.map((style) => (
<option key={style} value={style}>
{style}
</option>
))}
</select>
</div>
</div>
</div>

{/* ================= NATURAL LIGHT + OPEN PLAN ================= */}

<div className="grid gap-4 lg:grid-cols-2">
{/* NATURAL LIGHT */}

<div className="rounded-2xl border border-[#e1e5eb] bg-white px-4 py-5 shadow-[0_2px_10px_rgba(16,40,76,0.04)] sm:px-6 sm:py-6">
<div className="flex items-start gap-3">
<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fff5e3] text-[#b4872c]">
<IconSun />
</div>

<div className="min-w-0 flex-1">
<h2 className="text-[15px] font-semibold text-[#10284c]">
2. Natural Light Preference{" "}
<span className="text-[#b42318]">*</span>
</h2>

<div className="mt-5 space-y-5">
{naturalLightOptions.map((option) => {
const selected = naturalLight === option.id;

return (
<button
key={option.id}
type="button"
onClick={() => setNaturalLight(option.id)}
className="flex w-full items-start gap-3 text-left"
>
<span
className={`mt-[2px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
selected
? "border-[#10284c] bg-[#10284c]"
: "border-[#64748b] bg-white"
}`}
>
{selected && (
<span className="h-1.5 w-1.5 rounded-full bg-white" />
)}
</span>

<span className="min-w-0">
<span className="block text-[12px] font-semibold text-[#10284c]">
{option.label}
</span>

<span className="mt-0.5 block text-[11px] leading-[15px] text-[#64748b]">
{option.description}
</span>
</span>
</button>
);
})}
</div>
</div>
</div>
</div>

{/* OPEN PLAN */}

<div className="rounded-2xl border border-[#e1e5eb] bg-white px-4 py-5 shadow-[0_2px_10px_rgba(16,40,76,0.04)] sm:px-6 sm:py-6">
<div className="flex items-start gap-3">
<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fff5e3] text-[#b4872c]">
<IconPlan />
</div>

<div className="min-w-0 flex-1">
<h2 className="text-[15px] font-semibold text-[#10284c]">
3. Open Plan Preference{" "}
<span className="text-[#b42318]">*</span>
</h2>

<div className="mt-5 space-y-5">
{openPlanOptions.map((option) => {
const selected = openPlan === option.id;

return (
<button
key={option.id}
type="button"
onClick={() => setOpenPlan(option.id)}
className="flex w-full items-start gap-3 text-left"
>
<span
className={`mt-[2px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
selected
? "border-[#10284c] bg-[#10284c]"
: "border-[#64748b] bg-white"
}`}
>
{selected && (
<span className="h-1.5 w-1.5 rounded-full bg-white" />
)}
</span>

<span className="min-w-0">
<span className="block text-[12px] font-semibold text-[#10284c]">
{option.label}
</span>

<span className="mt-0.5 block text-[11px] leading-[15px] text-[#64748b]">
{option.description}
</span>
</span>
</button>
);
})}
</div>
</div>
</div>
</div>
</div>

{/* ================= OUTDOOR LIVING ================= */}

<div className="rounded-2xl border border-[#e1e5eb] bg-white px-4 py-5 shadow-[0_2px_10px_rgba(16,40,76,0.04)] sm:px-6 sm:py-6">
<div className="flex items-start gap-3">
<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fff5e3] text-[#b4872c]">
<IconOutdoor />
</div>

<div className="min-w-0 flex-1">
<h2 className="text-[15px] font-semibold text-[#10284c]">
4. Balcony / Outdoor Living{" "}
<span className="text-[#b42318]">*</span>
</h2>

<div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
{outdoorOptions.map((option) => {
const selected = outdoorLiving === option.id;

return (
<button
key={option.id}
type="button"
onClick={() => setOutdoorLiving(option.id)}
className={`relative rounded-xl border px-4 py-3 text-left transition ${
selected
? "border-[#d9a52b] bg-[#fffaf0]"
: "border-[#dce2ea] bg-white hover:border-[#cbd4df]"
}`}
>
{selected && (
<span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#d9a52b] text-white">
<svg
viewBox="0 0 20 20"
className="h-3 w-3"
fill="none"
stroke="currentColor"
strokeWidth="2.5"
strokeLinecap="round"
strokeLinejoin="round"
>
<path d="m4 10 4 4 8-8" />
</svg>
</span>
)}

<span className="block pr-5 text-[12px] font-semibold text-[#10284c]">
{option.label}
</span>

<span className="mt-1 block text-[11px] leading-[15px] text-[#64748b]">
{option.description}
</span>
</button>
);
})}
</div>
</div>
</div>
</div>

{/* ================= SPECIAL ARCHITECTURAL FEATURES ================= */}

<div className="rounded-2xl border border-[#e1e5eb] bg-white px-4 py-5 shadow-[0_2px_10px_rgba(16,40,76,0.04)] sm:px-6 sm:py-6">
<div className="flex items-start gap-3">
<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fff5e3] text-[#b4872c]">
<IconSparkles />
</div>

<div className="min-w-0 flex-1">
<h2 className="text-[15px] font-semibold text-[#10284c]">
5. Special Architectural Features{" "}
<span className="text-[12px] font-normal text-[#64748b]">
(Optional)
</span>
</h2>

<p className="mt-1 text-[11px] text-[#64748b]">
Select any features you like (multiple choice)
</p>

<div className="mt-4 flex flex-wrap gap-2.5">
{architecturalFeatureOptions.map((feature) => {
const selected = architecturalFeatures.includes(
feature.id
);

return (
<button
key={feature.id}
type="button"
onClick={() =>
toggleArchitecturalFeature(feature.id)
}
className={`inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-[11px] font-medium transition sm:text-[12px] ${
selected
? "border-[#d9a52b] bg-[#fffaf0] text-[#10284c]"
: "border-[#dce2ea] bg-white text-[#334155] hover:border-[#cbd4df]"
}`}
>
<span
className={`flex h-4 w-4 items-center justify-center rounded-[4px] border ${
selected
? "border-[#d9a52b] bg-[#d9a52b] text-white"
: "border-[#aeb8c6] bg-white"
}`}
>
{selected && (
<svg
viewBox="0 0 16 16"
className="h-3 w-3"
fill="none"
stroke="currentColor"
strokeWidth="2.5"
strokeLinecap="round"
strokeLinejoin="round"
>
<path d="m3 8 3 3 7-7" />
</svg>
)}
</span>

{feature.label}
</button>
);
})}
</div>
</div>
</div>
</div>

{/* ================= BOTTOM ACTIONS ================= */}

<div className="mt-6 flex flex-col-reverse gap-3 border-t border-[#e5e7eb] pt-5 sm:flex-row sm:items-center sm:justify-between">
<button
type="button"
onClick={goBack}
className="hidden lg:inline-flex items-center justify-center gap-2 rounded-xl border border-[#d9dee7] bg-white px-5 py-3 text-[13px] font-medium text-[#334155] transition hover:bg-[#f8fafc]"
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

<button
type="button"
onClick={continueToNextStep}
disabled={!isScreen3Complete}
className={`inline-flex items-center justify-center gap-3 rounded-xl px-6 py-3 text-[14px] font-semibold ${
isScreen3Complete
? "bg-[#10284c] text-white hover:bg-[#0d213f] cursor-pointer"
: "bg-gray-300 text-gray-500 cursor-not-allowed"
}`}
>
Continue to Next Step

<IconArrowRight />
</button>
</div>
</div>

{/* =================================================
RIGHT SIDEBAR
================================================= */}

<aside className="hidden lg:block">
<div className="sticky top-5 rounded-2xl border border-[#e1e5eb] bg-white px-5 py-5 shadow-[0_2px_10px_rgba(16,40,76,0.04)]">
<h2 className="text-[15px] font-semibold text-[#10284c]">
Why we ask this?
</h2>

<div className="mt-5 space-y-5">
{/* ITEM 1 */}

<div className="flex items-start gap-3">
<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fff5e3] text-[#b4872c]">
<IconPalette />
</div>

<p className="pt-1 text-[11px] leading-[16px] text-[#475569]">
Helps us understand your style and taste.
</p>
</div>

{/* ITEM 2 */}

<div className="flex items-start gap-3">
<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fff5e3] text-[#b4872c]">
<IconUser />
</div>

<p className="pt-1 text-[11px] leading-[16px] text-[#475569]">
Ensures the design matches your lifestyle and preferences.
</p>
</div>

{/* ITEM 3 */}

<div className="flex items-start gap-3">
<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fff5e3] text-[#b4872c]">
<IconSparkles />
</div>

<p className="pt-1 text-[11px] leading-[16px] text-[#475569]">
AI uses this to create the most suitable design for you.
</p>
</div>

{/* ITEM 4 */}

<div className="flex items-start gap-3">
<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fff5e3] text-[#b4872c]">
<svg
viewBox="0 0 24 24"
className="h-5 w-5"
fill="none"
stroke="currentColor"
strokeWidth="1.7"
strokeLinecap="round"
strokeLinejoin="round"
>
<path d="M20 11a8 8 0 1 0 1 4" />
<path d="M20 5v6h-6" />
</svg>
</div>

<p className="pt-1 text-[11px] leading-[16px] text-[#475569]">
You can change everything later if you wish.
</p>
</div>
</div>

{/* NOTE */}

<div className="mt-6 rounded-2xl border border-[#dbe5f7] bg-[#f1f5ff] px-4 py-4">
<div className="flex items-start gap-3">
<div className="mt-0.5 text-[#4169a1]">
<svg
viewBox="0 0 24 24"
className="h-5 w-5"
fill="none"
stroke="currentColor"
strokeWidth="1.7"
strokeLinecap="round"
strokeLinejoin="round"
>
<path d="M12 3a7 7 0 0 0-7 7c0 2.5 1.3 4.2 3 5.4V19h8v-3.6c1.7-1.2 3-2.9 3-5.4a7 7 0 0 0-7-7Z" />
<path d="M9 22h6" />
</svg>
</div>

<div>
<p className="text-[13px] font-semibold text-[#10284c]">
Note
</p>

<p className="mt-1 text-[11px] leading-[16px] text-[#475569]">
You can select multiple options where applicable.
</p>
</div>
</div>
</div>
</div>
</aside>
</div>
</section>
</main>
);
}
