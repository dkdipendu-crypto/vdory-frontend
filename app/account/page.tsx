"use client";

export default function AccountPage() {
return (
<main className="min-h-screen bg-zinc-50">
<div className="max-w-5xl mx-auto px-6 py-10">

<h1 className="text-3xl font-bold text-zinc-900">
My Account
</h1>

<p className="mt-2 text-zinc-600">
Manage your profile and account information.
</p>

<div className="mt-8 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">

<div className="flex items-center gap-4">
<div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center text-xl font-semibold">
D
</div>

<div className="flex-1">
<h2 className="text-xl font-semibold">
Dependu Das
</h2>

<p className="text-zinc-500">
dependu@example.com
</p>
<p className="text-sm text-zinc-500">
Member Since • June 2026
</p>
</div>

<button
onClick={() => alert("Edit Profile Coming Soon")}
className="rounded-xl bg-black px-5 py-2 text-white text-sm hover:opacity-90"
>
Edit Profile
</button>
</div>

</div>
<div className="mt-8 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
<h3 className="text-lg font-semibold mb-6">
Account Information
</h3>

<div className="grid md:grid-cols-2 gap-6">
<div>
<p className="text-sm text-zinc-500">Full Name</p>
<p className="font-medium">Dependu Das</p>
</div>

<div>
<p className="text-sm text-zinc-500">Email Address</p>
<p className="font-medium">dependu@example.com</p>
</div>

<div>
<p className="text-sm text-zinc-500">Current Plan</p>
<p className="font-medium">Free Plan</p>
</div>

<div>
<p className="text-sm text-zinc-500">Available Credits</p>
<p className="font-medium">10 Credits</p>
</div>
</div>
</div>
</div>
</main>
);
}