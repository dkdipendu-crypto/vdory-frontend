"use client";

import { useEffect, useMemo, useState } from "react";

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

type SpaceItem = {
id: string;
label: string;
description?: string;
type: "count" | "toggle" | "select" | "text";
options?: string[];
defaultValue?: number;
};

const residentialCore: SpaceItem[] = [
{
id: "bedrooms",
label: "Bedrooms",
type: "count",
defaultValue: 0,
},
{
id: "bathrooms",
label: "Bathrooms",
type: "count",
defaultValue: 0,
},
{
id: "livingRoom",
label: "Living Room",
type: "count",
defaultValue: 0,
},
{
id: "diningArea",
label: "Dining Area",
type: "count",
defaultValue: 0,
},
{
id: "kitchen",
label: "Kitchen",
type: "select",
options: ["Straight", "L-Shaped", "U-Shaped", "Island"],
},
];

const residentialAdditional: SpaceItem[] = [
{
id: "familyLounge",
label: "Family Lounge",
type: "count",
defaultValue: 0,
},
{
id: "studyOffice",
label: "Study / Office",
type: "count",
defaultValue: 0,
},
{
id: "pujaRoom",
label: "Puja Room",
type: "toggle",
},
{
id: "utilityRoom",
label: "Utility / Laundry",
type: "toggle",
},
{
id: "storePantry",
label: "Store / Pantry",
type: "toggle",
},
{
id: "parking",
label: "Parking",
type: "count",
defaultValue: 0,
},
{
id: "garden",
label: "Garden",
type: "select",
options: ["Ground Floor", "Front", "Rear", "Side"],
},
{
id: "outdoorSitting",
label: "Outdoor Sitting",
type: "toggle",
},
{
id: "terraceGarden",
label: "Terrace Garden",
type: "toggle",
},
{
id: "balconies",
label: "Balconies",
type: "count",
defaultValue: 0,
},
{
id: "terrace",
label: "Terrace",
type: "toggle",
},
{
id: "gym",
label: "Gym / Fitness",
type: "toggle",
},
{
id: "homeTheater",
label: "Home Theater",
type: "toggle",
},
{
id: "multipurposeRoom",
label: "Multipurpose Room",
type: "toggle",
},
];

const restaurantSpaces: SpaceItem[] = [
{
id: "customerSeating",
label: "Customer Seating",
type: "count",
defaultValue: 1,
},
{
id: "diningArea",
label: "Dining Area",
type: "count",
defaultValue: 1,
},
{
id: "commercialKitchen",
label: "Kitchen",
type: "select",
options: ["Compact", "Standard", "Large", "Open Kitchen"],
},
{
id: "serviceCounter",
label: "Counter / Service Area",
type: "toggle",
},
{
id: "washrooms",
label: "Washrooms",
type: "count",
defaultValue: 1,
},
{
id: "storePantry",
label: "Store / Pantry",
type: "toggle",
},
{
id: "utilityRoom",
label: "Utility Area",
type: "toggle",
},
{
id: "outdoorSeating",
label: "Outdoor Seating",
type: "toggle",
},
{
id: "staffRoom",
label: "Staff Room",
type: "toggle",
},
];

const commercialSpaces: SpaceItem[] = [
{
id: "workArea",
label: "Main Work Area",
type: "count",
defaultValue: 1,
},
{
id: "reception",
label: "Reception",
type: "toggle",
},
{
id: "meetingRoom",
label: "Meeting Room",
type: "count",
defaultValue: 0,
},
{
id: "pantry",
label: "Pantry",
type: "toggle",
},
{
id: "washrooms",
label: "Washrooms",
type: "count",
defaultValue: 1,
},
{
id: "storage",
label: "Storage",
type: "toggle",
},
{
id: "utilityRoom",
label: "Utility Area",
type: "toggle",
},
{
id: "parking",
label: "Parking",
type: "count",
defaultValue: 0,
},
];

export default function Screen2() {
const [screen1Data, setScreen1Data] = useState<Screen1Data | null>(null);
const [showProfile, setShowProfile] = useState(false);
const [showAccountSettings, setShowAccountSettings] = useState(false);

const [values, setValues] = useState<Record<string, any>>({});
const [specialRequirements, setSpecialRequirements] = useState("");

useEffect(() => {
try {
const saved = localStorage.getItem("solvingWalls_screen1");

if (saved) {
const parsed = JSON.parse(saved);
setScreen1Data(parsed);
}

const savedScreen2 = localStorage.getItem("solvingWalls_screen2");

if (savedScreen2) {
const parsed = JSON.parse(savedScreen2);

setValues(parsed.values || {});
setSpecialRequirements(parsed.specialRequirements || "");
}
} catch (error) {
console.error("Unable to load project data:", error);
}
}, []);

const propertyType = screen1Data?.propertyType || "";

const isRestaurant =
propertyType.toLowerCase().includes("cafe") ||
propertyType.toLowerCase().includes("restaurant");

const isCommercial =
propertyType.toLowerCase().includes("commercial") && !isRestaurant;

const isApartment =
propertyType.toLowerCase().includes("apartment") ||
propertyType.toLowerCase().includes("flat") ||
propertyType.toLowerCase().includes("rental");

const spaces = useMemo(() => {
if (isRestaurant) {
return restaurantSpaces;
}

if (isCommercial) {
return commercialSpaces;
}

return [...residentialCore, ...residentialAdditional];
}, [isRestaurant, isCommercial]);

const coreSpaces = isRestaurant
? restaurantSpaces.slice(0, 5)
: isCommercial
? commercialSpaces.slice(0, 2)
: residentialCore;

const additionalSpaces = isRestaurant
? restaurantSpaces.slice(5)
: isCommercial
? commercialSpaces.slice(2)
: residentialAdditional;

const isScreen2Complete =
Number(values.bedrooms ?? 0) >= 1 &&
Number(values.bathrooms ?? 0) >= 1 &&
Number(values.livingRoom ?? 0) >= 1 &&
Number(values.diningArea ?? 0) >= 1 &&
typeof values.kitchen === "string" &&
values.kitchen.trim() !== "" &&
(
Number(values.familyLounge ?? 0) >= 1 ||
Number(values.studyOffice ?? 0) >= 1 ||
values.pujaRoom === true ||
values.utilityRoom === true ||
values.storePantry === true ||
Number(values.parking ?? 0) >= 1 ||
values.garden === true ||
values.outdoorSitting === true ||
values.homeTheater === true ||
values.terraceGarden === true ||
Number(values.balconies ?? 0) >= 1 ||
values.multiPurposeRoom === true ||
values.multiPurposeRoom === "true"
);

const updateValue = (id: string, value: any) => {
setValues((previous) => ({
...previous,
[id]: value,
}));
};

const increase = (id: string) => {
const current = Number(values[id] ?? 0);

updateValue(id, Math.min(current + 1, 20));
};

const decrease = (id: string) => {
const current = Number(values[id] ?? 0);

updateValue(id, Math.max(current - 1, 0));
};

const toggle = (id: string) => {
updateValue(id, !Boolean(values[id]));
};

const saveScreen2 = () => {
const screen2Data = {
propertyType,
values,
specialRequirements,
};

localStorage.setItem(
"solvingWalls_screen2",
JSON.stringify(screen2Data)
);
};

const goBack = () => {
window.location.href = "/screen-1";
};

const continueToNextStep = () => {
saveScreen2();

// Screen 3 will be connected here when implemented.
window.location.href = "/screen-3";
};

const getNumber = (id: string, defaultValue = 0) => {
if (values[id] !== undefined) {
return Number(values[id]);
}

return defaultValue;
};

const renderIcon = (id: string) => {
const iconClass = "h-5 w-5 sm:h-6 sm:w-6";

switch (id) {
case "bedrooms":
return (
<svg
viewBox="0 0 24 24"
className={iconClass}
fill="none"
stroke="currentColor"
strokeWidth="1.7"
>
<path d="M3 18v-8h18v8" />
<path d="M5 10V7h6v3" />
<path d="M13 10V7h6v3" />
<path d="M3 18v2M21 18v2" />
</svg>
);

case "bathrooms":
case "washrooms":
return (
<svg
viewBox="0 0 24 24"
className={iconClass}
fill="none"
stroke="currentColor"
strokeWidth="1.7"
>
<path d="M5 11h14" />
<path d="M7 11V6a2 2 0 0 1 4 0v2" />
<path d="M5 11v3a5 5 0 0 0 10 0v-3" />
<path d="M8 18v2M16 18v2" />
</svg>
);

case "livingRoom":
case "familyLounge":
case "customerSeating":
case "diningArea":
return (
<svg
viewBox="0 0 24 24"
className={iconClass}
fill="none"
stroke="currentColor"
strokeWidth="1.7"
>
<path d="M5 11h14a2 2 0 0 1 2 2v4H3v-4a2 2 0 0 1 2-2Z" />
<path d="M7 11V8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3" />
<path d="M5 17v2M19 17v2" />
</svg>
);

case "kitchen":
case "commercialKitchen":
case "pantry":
case "storePantry":
return (
<svg
viewBox="0 0 24 24"
className={iconClass}
fill="none"
stroke="currentColor"
strokeWidth="1.7"
>
<path d="M4 5h16v16H4z" />
<path d="M8 5v5M12 5v5M16 5v5" />
<path d="M7 15h3M14 15h3M7 18h3M14 18h3" />
</svg>
);

case "studyOffice":
case "workArea":
case "meetingRoom":
case "reception":
return (
<svg
viewBox="0 0 24 24"
className={iconClass}
fill="none"
stroke="currentColor"
strokeWidth="1.7"
>
<path d="M4 5h16v11H4z" />
<path d="M8 21v-5M16 21v-5M7 21h10" />
</svg>
);

case "parking":
return (
<svg
viewBox="0 0 24 24"
className={iconClass}
fill="none"
stroke="currentColor"
strokeWidth="1.7"
>
<path d="M5 17l1-7h12l1 7" />
<path d="M7 17v2M17 17v2" />
<circle cx="8" cy="15" r="1" />
<circle cx="16" cy="15" r="1" />
</svg>
);

case "garden":
case "outdoorSitting":
case "outdoorSeating":
case "terraceGarden":
return (
<svg
viewBox="0 0 24 24"
className={iconClass}
fill="none"
stroke="currentColor"
strokeWidth="1.7"
>
<path d="M12 21V10" />
<path d="M12 12c-4 0-6-2-6-5 4 0 6 2 6 5Z" />
<path d="M12 12c4 0 6-2 6-5-4 0-6 2-6 5Z" />
<path d="M5 21h14" />
</svg>
);

case "balconies":
case "terrace":
return (
<svg
viewBox="0 0 24 24"
className={iconClass}
fill="none"
stroke="currentColor"
strokeWidth="1.7"
>
<path d="M4 10h16" />
<path d="M6 10v8M10 10v8M14 10v8M18 10v8" />
<path d="M3 18h18" />
<path d="M5 7h14" />
</svg>
);

default:
return (
<svg
viewBox="0 0 24 24"
className={iconClass}
fill="none"
stroke="currentColor"
strokeWidth="1.7"
>
<rect x="4" y="4" width="16" height="16" rx="2" />
<path d="M8 9h8M8 13h8M8 17h5" />
</svg>
);
}
};

const renderSpaceCard = (item: SpaceItem) => {
const value = values[item.id];

return (
<div
key={item.id}
className={`rounded-2xl border border-[#e1e5eb] bg-white p-2 sm:p-4 shadow-[0_2px_10px_rgba(16,40,76,0.04)] transition hover:border-[#d4dbe5] ${
item.type === "select" ? "col-span-3 sm:col-span-2 lg:col-span-1" : ""
}`}
>
<div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-start sm:gap-3">
<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fff5e3] text-[#b4872c] sm:h-10 sm:w-10">
{renderIcon(item.id)}
</div>

<div className="min-w-0 flex-1">
<p className="text-[11px] font-semibold leading-tight text-[#10284c sm:text-[14px]]">
{item.label}
</p>

{item.type === "count" && (
<div className="mt-2 flex items-center rounded-full border border-[#e1e5eb] bg-white sm:mt-3">
<button
type="button"
onClick={() => decrease(item.id)}
className="flex h-7 w-7 items-center justify-center rounded-full text-[16px] text-[#334155] hover:bg-[#f8fafc] sm:h-8 sm:w-8 sm:text-[18px]"
>
−
</button>

<span className="flex min-w-[32px] justify-center text-[14px] font-semibold text-[#10284c]">
{getNumber(item.id, item.defaultValue || 0)}
</span>

<button
type="button"
onClick={() => increase(item.id)}
className="flex h-8 w-8 items-center justify-center rounded-full text-[18px] text-[#334155] hover:bg-[#f8fafc]"
>
+
</button>
</div>
)}

{item.type === "toggle" && (
<button
type="button"
onClick={() => toggle(item.id)}
className={`mt-3 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[12px] font-medium transition ${
value
? "bg-[#fff1d6] text-[#9a6c16]"
: "bg-[#f5f7fa] text-[#64748b]"
}`}
>
<span>{value ? "Yes" : "No"}</span>

<span
className={`relative h-5 w-9 rounded-full transition ${
value ? "bg-[#d9a52b]" : "bg-[#cbd3df]"
}`}
>
<span
className={`absolute top-[2px] h-4 w-4 rounded-full bg-white shadow-sm transition ${
value ? "left-[18px]" : "left-[2px]"
}`}
/>
</span>
</button>
)}

{item.type === "select" && (
<select
value={value || ""}
onChange={(event) =>
updateValue(item.id, event.target.value)
}
className="mt-3 w-full rounded-xl border border-[#dce2ea] bg-white px-3 py-2 text-[13px] text-[#334155] outline-none focus:border-[#b4872c]"
>
<option value="">Select</option>
{item.options?.map((option) => (
<option key={option} value={option}>
{option}
</option>
))}
</select>
)}
</div>
</div>
</div>
);
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
onClick={(e) => e.stopPropagation()}
>
{!showAccountSettings ? (
<>
{/* ================= PROFILE HEADER ================= */}
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

{/* ================= AVATAR + USER INFO ================= */}
<div className="mt-5 flex items-center gap-4">
<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#fff4df] text-[#b4872c] ring-1 ring-[#ead8b2]">
<svg
viewBox="0 0 24 24"
className="h-7 w-7"
fill="none"
stroke="currentColor"
strokeWidth="1.7"
strokeLinecap="round"
strokeLinejoin="round"
>
<circle cx="12" cy="8" r="3.5" />
<path d="M5.5 20c.8-3.4 3.1-5.2 6.5-5.2s5.7 1.8 6.5 5.2" />
</svg>
</div>

<div className="min-w-0">
<p className="truncate text-[16px] font-semibold text-[#10284c]">
Your Name
</p>

<p className="mt-0.5 truncate text-[12px] text-[#64748b]">
your@email.com
</p>
</div>
</div>
</div>

{/* ================= PROFILE OPTIONS ================= */}
<div className="px-4 py-4">
{/* MY PROJECTS */}
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
strokeWidth="1.8"
strokeLinecap="round"
strokeLinejoin="round"
>
<path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h4l2 2h5A2.5 2.5 0 0 1 20 8.5v9A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5v-11Z" />
</svg>
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
<path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.7 1.7-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.56V20h-2.4v-.2a1.7 1.7 0 0 0-1.03-1.56 1.7 1.7 0 0 0-1.88.34l-.06.06-1.7-1.7.06-.06A1.7 1.7 0 0 0 8.4 15a1.7 1.7 0 0 0-1.56-1.03H6v-2.4h.2A1.7 1.7 0 0 0 7.76 10a1.7 1.7 0 0 0-.34-1.88l-.06-.06 1.7-1.7.06.06A1.7 1.7 0 0 0 11 6.1 1.7 1.7 0 0 0 12.03 4.5V4h2.4v.2A1.7 1.7 0 0 0 15.46 5.76a1.7 1.7 0 0 0 1.88-.34l.06-.06 1.7 1.7-.06.06A1.7 1.7 0 0 0 18.7 9a1.7 1.7 0 0 0 1.56 1.03h.2v2.4h-.2A1.7 1.7 0 0 0 18.24 14a1.7 1.7 0 0 0 1.16 1Z" />
</svg>
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

{/* DIVIDER */}
<div className="my-3 border-t border-[#edf0f4]" />

{/* SIGN OUT */}
<button
type="button"
className="flex w-full items-center gap-3 rounded-[16px] px-3 py-3.5 text-left transition hover:bg-[#fff7f7]"
>
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fff1f1] text-[#b42318]">
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
{/* ================= ACCOUNT SETTINGS ================= */}
<div className="border-b border-[#edf0f4] px-6 pb-5 pt-6">
<div className="flex items-center gap-3">
<button
type="button"
aria-label="Back to profile"
onClick={() => setShowAccountSettings(false)}
className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f6f8fa] text-[#64748b] transition hover:bg-[#eef1f5] hover:text-[#10284c]"
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
<rect x="3.5" y="5" width="17" height="14" rx="2" />
<path d="m5 7 7 5 7-5" />
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
{[
"Project & Plot",
"Spaces & Requirements",
"Design Preferences",
"Materials & Quality",
"Layout Preview",
].map((step, index) => {
const active = index === 1;
const completed = index === 0;

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
className={`mt-[15px] h-[2px] flex-1 ${
index === 0
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
<div className="relative block bg-white px-4 pb-5 pt-4 lg:hidden">
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
<div className="relative mt-6 w-full px-1">
{/* Connecting line */}
<div className="pointer-events-none absolute left-[10%] right-[10%] top-[18px] h-[2px] bg-[#dfe3e8]" />

{/* Completed connection */}
<div className="pointer-events-none absolute left-[10%] top-[18px] h-[2px] w-[20%] bg-[#d9a52b]" />

{/* Steps */}
<div className="relative grid w-full grid-cols-5">
{[
"Project & Plot",
"Spaces",
"Design",
"Materials",
"Layout",
].map((step, index) => {
const active = index === 1;
const completed = index === 0;

return (
<div
key={step}
className="flex min-w-0 flex-col items-center text-center"
>
{/* Step circle */}
<div
className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-[13px] font-semibold ${
active || completed
? "border-[#10284c] bg-[#10284c] text-white"
: "border-[#cbd3df] bg-white text-[#26344b]"
}`}
>
{completed ? "✓" : index + 1}
</div>

{/* Step label */}
<span
className={`mt-2 w-full px-1 text-center text-[10px] font-medium leading-[13px] ${
active
? "text-[#10284c]"
: "text-[#26344b]"
}`}
>
{step}
</span>
</div>
);
})}
</div>
</div>
</div>
</header>

{/* =========================================================
PAGE INTRO
========================================================= */}
<section className="mx-auto max-w-[1540px] px-5 pb-5 pt-6 sm:px-8 lg:px-10 lg:pb-5 lg:pt-6">
<p className="text-[11px] font-semibold tracking-[0.8px] text-[#9a7734] sm:text-[12px]">
STEP 2 OF 5
</p>

<h1 className="mt-1 text-[28px] font-bold leading-tight tracking-[-0.7px] text-[#10284c] sm:text-[32px] lg:text-[34px]">
Spaces &amp; Requirements
</h1>

<p className="mt-1 max-w-[700px] text-[13px] leading-5 text-[#596579] sm:text-[14px]">
Tell us about the spaces you need so we can create a layout that
fits your requirements.
</p>
</section>

{/* =========================================================
MAIN CONTENT
========================================================= */}
<section className="mx-auto max-w-[1450px] px-5 pb-8 sm:px-8 lg:px-10">
{/* PROJECT CONTEXT */}
<div className="mb-4 rounded-2xl border border-[#e1e5eb] bg-white px-4 py-3 shadow-[0_2px_10px_rgba(16,40,76,0.04)]">
<div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-[#64748b]">
<span>
<strong className="text-[#10284c]">Property:</strong>{" "}
{propertyType || "Not selected"}
</span>

{screen1Data?.floorCount && (
<span>
<strong className="text-[#10284c]">Floors:</strong>{" "}
{screen1Data.floorCount}
</span>
)}

{screen1Data?.builtUpArea && (
<span>
<strong className="text-[#10284c]">Built-up Area:</strong>{" "}
{screen1Data.builtUpArea} sq ft
</span>
)}
</div>
</div>

{/* =========================================================
SPACES CARD
========================================================= */}
<div className="rounded-2xl border border-[#e1e5eb] bg-white px-4 py-5 shadow-[0_2px_10px_rgba(16,40,76,0.05)] sm:px-6 sm:py-6">
<div className="flex items-start gap-3">
<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fff5e3] text-[#b4872c]">
<svg
viewBox="0 0 24 24"
className="h-6 w-6"
fill="none"
stroke="currentColor"
strokeWidth="1.7"
>
<path d="M4 21V9l8-6 8 6v12" />
<path d="M8 21v-6h8v6" />
</svg>
</div>

<div>
<h2 className="text-[17px] font-semibold text-[#10284c]">
Tell us about the spaces you need
</h2>

<p className="mt-1 text-[12px] text-[#64748b]">
Select the spaces you need and tell us how many.
</p>
</div>
</div>

{/* CORE SPACES */}
<div className="mt-6">
<div className="mb-3 flex items-center gap-2">
<h3 className="text-[14px] font-semibold text-[#10284c]">
Core Spaces
</h3>

<span className="rounded-full bg-[#fff5e3] px-2.5 py-1 text-[10px] font-medium text-[#9a7734]">
Required
</span>
</div>

<div className="grid grid-cols-3 gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-5">
{coreSpaces.map(renderSpaceCard)}
</div>
</div>

{/* ADDITIONAL SPACES */}
{additionalSpaces.length > 0 && (
<div className="mt-7">
<div className="mb-3 flex items-center gap-2">
<h3 className="text-[14px] font-semibold text-[#10284c]">
Additional Spaces
</h3>

<span className="rounded-full bg-[#f3f5f8] px-2.5 py-1 text-[10px] font-medium text-[#64748b]">
Optional
</span>
</div>

<div className="grid grid-cols-3 gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-5">
{additionalSpaces.map(renderSpaceCard)}
</div>
</div>
)}

{/* SPECIAL REQUIREMENTS */}
<div className="mt-7">
<div className="mb-2 flex items-center gap-2">
<h3 className="text-[14px] font-semibold text-[#10284c]">
Special Requirements
</h3>

<span className="rounded-full bg-[#f3f5f8] px-2.5 py-1 text-[10px] font-medium text-[#64748b]">
Optional
</span>
</div>

<textarea
value={specialRequirements}
onChange={(event) =>
setSpecialRequirements(event.target.value)
}
rows={3}
placeholder="e.g., Open kitchen, separate puja room, walk-in closet, double-height living room..."
className="w-full resize-none rounded-xl border border-[#dce2ea] bg-white px-4 py-3 text-[13px] text-[#334155] outline-none placeholder:text-[#9aa6b8] focus:border-[#b4872c]"
/>
</div>
</div>

{/* =========================================================
BOTTOM ACTIONS
========================================================= */}
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
disabled={!isScreen2Complete}
className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#10284c] px-6 py-3 text-[14px] font-semibold text-white shadow-sm transition hover:bg-[#0c203d] sm:min-w-[220px]"
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