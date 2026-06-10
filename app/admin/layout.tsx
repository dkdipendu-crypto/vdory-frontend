"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function AdminLayout({
children,
}: {
children: React.ReactNode;
}) {
const [sidebarOpen, setSidebarOpen] = useState(false);
const pathname = usePathname();
return (
<div className="min-h-screen bg-zinc-100">
<div className="flex min-h-screen">

{/* Sidebar */}
<aside
className={`
fixed top-0 left-0 z-50
w-64 min-h-screen bg-slate-900
transform transition-transform duration-300
${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
md:translate-x-0 md:static md:flex
`}
>
<nav className="space-y-3 w-full px-0">
<div className="px-6 h-16 flex items-center">
<Image
src="/vdory-img.png"
alt="VDORY"
width={110}
height={20}
priority
/>
</div>
<Link
href="/admin"
onClick={() => setSidebarOpen(false)}
className={`block w-full text-lg py-2 px-6 font-medium ${
pathname === "/admin"
? "bg-white text-black"
: "text-white hover:bg-slate-200 hover:text-black"
}`}
>
Overview
</Link>
<Link
href="/admin/users"
onClick={() => setSidebarOpen(false)}
className={`block w-full text-lg py-2 px-6 font-medium ${
pathname === "/admin/users"
? "bg-white text-black"
: "text-white hover:bg-slate-200 hover:text-black"
}`}
>
Users
</Link>
<Link
href="/admin/projects"
onClick={() => setSidebarOpen(false)}
className={`block w-full text-lg py-2 px-6 font-medium ${
pathname === "/admin/projects"
? "bg-white text-black"
: "text-white hover:bg-slate-200 hover:text-black"
}`}
>
Projects
</Link>
<Link
href="/admin/render-jobs"
onClick={() => setSidebarOpen(false)}
className={`block w-full text-lg py-2 px-6 font-medium ${
pathname === "/admin/render-jobs"
? "bg-white text-black"
: "text-white hover:bg-slate-200 hover:text-black"
}`}
>
Render Jobs
</Link>
<Link
href="/admin/subscriptions"
onClick={() => setSidebarOpen(false)}
className={`block w-full text-lg py-2 px-6 font-medium ${
pathname === "/admin/subscriptions"
? "bg-white text-black"
: "text-white hover:bg-slate-200 hover:text-black"
}`}
>
Subscriptions
</Link>
<Link
href="/admin/credits"
onClick={() => setSidebarOpen(false)}
className={`block w-full text-lg py-2 px-6 font-medium ${
pathname === "/admin/credits"
? "bg-white text-black"
: "text-white hover:bg-slate-200 hover:text-black"
}`}
>
Credits
</Link>
<Link
href="/admin/payments"
onClick={() => setSidebarOpen(false)}
className={`block w-full text-lg py-2 px-6 font-medium ${
pathname === "/admin/payments"
? "bg-white text-black"
: "text-white hover:bg-slate-200 hover:text-black"
}`}
>
Payments
</Link>
<Link
href="/admin/notifications"
onClick={() => setSidebarOpen(false)}
className={`block w-full text-lg py-2 px-6 font-medium ${
pathname === "/admin/notifications"
? "bg-white text-black"
: "text-white hover:bg-slate-200 hover:text-black"
}`}
>
Notifications
</Link>
<Link
href="/admin/settings"
onClick={() => setSidebarOpen(false)}
className={`block w-full text-lg py-2 px-6 font-medium ${
pathname === "/admin/settings"
? "bg-white text-black"
: "text-white hover:bg-slate-200 hover:text-black"
}`}
>
Settings
</Link>
</nav>
</aside>

{/* Main Content */}
<main className="flex-1 min-w-0">

{/* Top Header */}
<header className="h-14 border-b border-zinc-200 bg-white flex items-center justify-between px-4">

<div className="flex items-center gap-4">

<button
className="md:hidden text-black text-2xl font-bold -mt-1"
onClick={() => setSidebarOpen(!sidebarOpen)}
>
☰
</button>

<div className="text-base md:text-lg font-bold text-black whitespace-nowrap">
Admin Dashboard
</div>

</div>

<div className="flex items-center gap-4">
<button className="md:hidden text-xl">
🔍
</button>
<input
type="text"
placeholder="Search..."
className="hidden md:block border border-gray-300 rounded-full px-5 py-2 w-80 text-sm"
/>

<div className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center font-semibold">
D
</div>
</div>

</header>

<div className="p-4">
{children}
</div>

</main>

</div>
</div>
);
}