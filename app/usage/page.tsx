export default function UsagePage() {
return (
<main className="min-h-screen bg-zinc-50">
<div className="max-w-5xl mx-auto px-6 py-12">

<h1 className="text-4xl font-bold text-zinc-900">
Usage & Credits
</h1>

<p className="mt-2 text-zinc-600">
Track your account usage and available credits.
</p>

{/* Usage Overview */}

<div className="mt-10 rounded-3xl border border-zinc-200 bg-white p-8">
<h2 className="text-xl font-semibold text-zinc-900">
Usage Overview
</h2>

<div className="mt-6 grid grid-cols-2 gap-6">

<div>
<p className="text-sm text-zinc-500">
Current Plan
</p>

<p className="mt-1 font-medium text-zinc-900">
Vdory Pro
</p>
</div>

<div>
<p className="text-sm text-zinc-500">
Credits Remaining
</p>

<p className="mt-1 font-medium text-zinc-900">
850
</p>
</div>

<div>
<p className="text-sm text-zinc-500">
Credits Used
</p>

<p className="mt-1 font-medium text-zinc-900">
150
</p>
</div>

<div>
<p className="text-sm text-zinc-500">
Monthly Limit
</p>

<p className="mt-1 font-medium text-zinc-900">
1000
</p>
</div>

</div>
</div>

{/* Activity Summary */}

<div className="mt-6 rounded-3xl border border-zinc-200 bg-white p-8">
<h2 className="text-xl font-semibold text-zinc-900">
Activity Summary
</h2>

<div className="mt-6 grid grid-cols-2 gap-6">

<div>
<p className="text-sm text-zinc-500">
Projects Generated
</p>

<p className="mt-1 font-medium text-zinc-900">
12
</p>
</div>

<div>
<p className="text-sm text-zinc-500">
Videos Rendered
</p>

<p className="mt-1 font-medium text-zinc-900">
8
</p>
</div>

<div>
<p className="text-sm text-zinc-500">
AI Generations
</p>

<p className="mt-1 font-medium text-zinc-900">
43
</p>
</div>

<div>
<p className="text-sm text-zinc-500">
Export Downloads
</p>

<p className="mt-1 font-medium text-zinc-900">
17
</p>
</div>

</div>
</div>

{/* Billing Cycle */}

<div className="mt-6 rounded-3xl border border-zinc-200 bg-white p-8">
<h2 className="text-xl font-semibold text-zinc-900">
Billing Cycle
</h2>

<div className="mt-4">
<p className="text-zinc-600">
Current Cycle: Jun 1 – Jun 30
</p>

<p className="mt-2 text-zinc-600">
Next Reset Date: Jul 1
</p>
</div>
</div>

{/* Upgrade */}

<div className="mt-6 rounded-3xl border border-zinc-200 bg-white p-8 flex items-center justify-between gap-6">

<div className="flex-1">
<h2 className="text-xl font-semibold text-zinc-900">
Need More Credits?
</h2>

<p className="mt-2 text-zinc-600">
Upgrade your plan for higher limits.
</p>
</div>

<button className="rounded-xl bg-black px-5 py-2 text-sm text-white min-w-[120px]">
Upgrade
</button>

</div>

</div>
</main>
);
}
