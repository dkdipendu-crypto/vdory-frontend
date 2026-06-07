"use client";
import Image from "next/image";
import {
LineChart,
Line,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer,
PieChart,
Pie,
Cell,
Legend,
BarChart,
Bar,
} from "recharts";

const accountData = [
{ month: "Jan", users: 120 },
{ month: "Feb", users: 180 },
{ month: "Mar", users: 260 },
{ month: "Apr", users: 390 },
{ month: "May", users: 520 },
{ month: "Jun", users: 680 },
];
const activeInactiveData = [
{ name: "Active", value: 894 },
{ name: "Inactive", value: 351 },
];
const paidUserData = [
{ month: "Jan", users: 21 },
{ month: "Feb", users: 34 },
{ month: "Mar", users: 52 },
{ month: "Apr", users: 76 },
{ month: "May", users: 103 },
{ month: "Jun", users: 127 },
];
const videoData = [
{ month: "Jan", videos: 1245 },
{ month: "Feb", videos: 2114 },
{ month: "Mar", videos: 3205 },
{ month: "Apr", videos: 5812 },
{ month: "May", videos: 7630 },
{ month: "Jun", videos: 9431 },
];
export default function AdminPage() {
return (
<main className="min-h-screen bg-zinc-50">
<header className="sticky top-0 z-50 bg-white border-b border-zinc-200">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center">
<Image
src="/logo-vdory.png"
alt="VDORY AI"
width={110}
height={20}
/>

</div>
</header>

<div className="max-w-7xl mx-auto px-6 py-8">
<div className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
<div>
<h2 className="text-3xl font-bold text-black">
Dashboard Analytics
</h2>

<p className="text-zinc-500 mt-1">
Business overview and platform insights
</p>
</div>

<div className="flex items-center gap-2 whitespace-nowrap text-base font-base text-green-600">
<span className="h-2.5 w-2.5 rounded-full bg-green-500 flex-shrink-0"></span>
<span>System Healthy</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">

<div className="bg-white rounded-2xl p-5 border border-zinc-200">
<p className="text-sm text-zinc-500">Website Views</p>
<h3 className="text-3xl font-bold text-zinc-700 mt-2">12,847</h3>
</div>

<div className="bg-white rounded-2xl p-5 border border-zinc-200">
<p className="text-sm text-zinc-500">Accounts</p>
<h3 className="text-3xl font-bold text-zinc-700 mt-2">1,245</h3>
</div>

<div className="bg-white rounded-2xl p-5 border border-zinc-200">
<p className="text-sm text-zinc-500">Active Users</p>
<h3 className="text-3xl font-bold text-zinc-700 mt-2">894</h3>
</div>

<div className="bg-white rounded-2xl p-5 border border-zinc-200">
<p className="text-sm text-zinc-500">Paid Users</p>
<h3 className="text-3xl font-bold text-zinc-700 mt-2">127</h3>
</div>

<div className="bg-white rounded-2xl p-5 border border-zinc-200">
<p className="text-sm text-zinc-500">Videos Rendered</p>
<h3 className="text-3xl font-bold text-zinc-700 mt-2">9,431</h3>
</div>

<div className="bg-white rounded-2xl p-5 border border-zinc-200">
<p className="text-sm text-zinc-500">Monthly Cost</p>
<h3 className="text-3xl font-bold text-zinc-700 mt-2">$241</h3>
</div>

</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

<div className="bg-white rounded-2xl border border-zinc-200 p-6">
<div className="flex justify-between items-center">
<h3 className="font-semibold text-lg text-zinc-600">
Account Creation Trend
</h3>

<span className="text-base font-semibold text-zinc-500">
1,245
</span>
</div>

<div className="h-64 mt-4 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-500">
<ResponsiveContainer width="98%" height="100%">
<LineChart
data={accountData}
margin={{
top: 20,
right: 30,
left: 10,
bottom: 10,
}}
>
<XAxis dataKey="month" />
<YAxis width={40} />
<Tooltip />
<Line
type="monotone"
dataKey="users"
stroke="#18181b"
strokeWidth={3}
/>
</LineChart>
</ResponsiveContainer>
</div>
</div>

<div className="bg-white rounded-2xl border border-zinc-200 p-6">
<div className="flex justify-between items-center">
<h3 className="font-semibold text-lg text-zinc-600">
Active vs Inactive Users
</h3>

<span className="font-semibold text-lg text-zinc-500">
1,245
</span>
</div>

<div className="h-64 mt-4">
<ResponsiveContainer width="100%" height="100%">
<PieChart>
<Pie
data={activeInactiveData}
dataKey="value"
nameKey="name"
outerRadius={80}
label
>
<Cell fill="#111111" />
<Cell fill="#9CA3AF" />
</Pie>
<Tooltip />
<Legend />
</PieChart>
</ResponsiveContainer>
</div>
</div>

</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">

<div className="bg-white rounded-2xl border border-zinc-200 p-6">
<div className="flex justify-between items-center">
<h3 className="font-semibold text-lg text-zinc-600">
Paid User Growth
</h3>

<span className="font-semibold text-lg text-zinc-500">
127
</span>
</div>

<div className="h-64 mt-4 rounded-xl bg-zinc-100 flex flex-col items-center justify-center text-zinc-500">
<ResponsiveContainer width="100%" height="100%">
<LineChart
data={paidUserData}
margin={{
top: 20,
right: 30,
left: 10,
bottom: 10,
}}
>
<XAxis dataKey="month" />
<YAxis width={50} />
<Tooltip />
<Line
type="monotone"
dataKey="users"
stroke="#111111"
strokeWidth={3}
/>
</LineChart>
</ResponsiveContainer>
</div>
</div>

<div className="bg-white rounded-2xl border border-zinc-200 p-6">
<div className="flex justify-between items-center">
<h3 className="font-semibold text-lg text-zinc-600">
Monthly Video Rendering
</h3>

<span className="font-semibold text-lg text-zinc-500">
9,431
</span>
</div>

<div className="h-64 mt-4 rounded-xl bg-zinc-100 flex flex-col items-center justify-center text-zinc-500">
<ResponsiveContainer width="98%" height="100%">
<BarChart
data={videoData}
margin={{
top: 20,
right: 20,
left: 10,
bottom: 10,
}}
>
<XAxis dataKey="month" />
<YAxis width={50} />
<Tooltip />
<Bar
dataKey="videos"
fill="#18181b"
radius={[4, 4, 0, 0]}
barSize={40}
/>
</BarChart>
</ResponsiveContainer>
</div>
</div>
<div className="bg-white rounded-2xl border border-zinc-200 p-6 mt-0 lg:col-span-2">
<h3 className="font-semibold text-lg text-zinc-600 mb-4">
AI Business Insights
</h3>

<div className="space-y-3 text-sm text-zinc-700">
<p>📈 User growth increased by 18% this month.</p>

<p>👥 72% of registered users are actively using the platform.</p>

<p>🎬 Video rendering demand increased significantly in the last 30 days.</p>

<p>⚡ Current infrastructure can support growth, but GPU usage should be monitored.</p>

<p>💰 Paid user conversion rate is improving steadily.</p>
</div>

<div className="mt-4 text-xs text-zinc-500">
Last Updated: 2 minutes ago
</div>
</div>

</div>

</div>
</main>
);
}
