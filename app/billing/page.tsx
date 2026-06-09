export default function BillingPage() {
return (
<main className="min-h-screen bg-zinc-50">
<div className="max-w-5xl mx-auto px-6 py-12">
<h1 className="text-4xl font-bold text-zinc-900">
Billing
</h1>

<p className="mt-2 text-zinc-600">
Manage your subscription and invoices.
</p>

<div className="mt-10 rounded-3xl border border-zinc-200 bg-white p-8">
<h2 className="text-xl font-semibold text-zinc-900">
Current Plan
</h2>

<div className="mt-6 flex items-center justify-between">
<div>
<p className="font-medium text-zinc-900">
Vdory Pro
</p>

<p className="text-sm text-zinc-500">
₹1,999/month
</p>
</div>

<button className="rounded-xl bg-black px-5 py-2 text-sm text-white">
Upgrade
</button>
</div>
</div>

<div className="mt-6 rounded-3xl border border-zinc-200 bg-white p-8">
<h2 className="text-xl font-semibold text-zinc-900">
Payment Method
</h2>

<p className="mt-4 text-zinc-600">
Visa ending in 4242
</p>
</div>

<div className="mt-6 rounded-3xl border border-zinc-200 bg-white p-8">
<h2 className="text-xl font-semibold text-zinc-900">
Invoice History
</h2>

<p className="mt-4 text-zinc-600">
No invoices available yet.
</p>
</div>
</div>
</main>
);
}
