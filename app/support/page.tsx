export default function SupportPage() {
return (
<main className="min-h-screen bg-zinc-50">
<div className="max-w-5xl mx-auto px-6 py-12">

<h1 className="text-4xl font-bold">
Help & Support
</h1>

<p className="mt-2 text-zinc-600">
Need assistance? We're here to help.
</p>

{/* Contact Support */}

<div className="mt-10 rounded-3xl border border-zinc-200 bg-white p-8">
<h2 className="text-xl font-semibold">
Contact Support
</h2>

<div className="mt-4 space-y-2">
<p>Email: support@vdory.ai</p>
<p>Response Time: Within 24 hours</p>
</div>
</div>

{/* FAQ */}

<div className="mt-6 rounded-3xl border border-zinc-200 bg-white p-8">
<h2 className="text-xl font-semibold">
Frequently Asked Questions
</h2>

<div className="mt-4 space-y-4">

<div>
<p className="font-medium">
How do credits work?
</p>

<p className="text-zinc-600">
Credits are consumed when generating content and rendering videos.
</p>
</div>

<div>
<p className="font-medium">
Can I upgrade my plan anytime?
</p>

<p className="text-zinc-600">
Yes, plans can be upgraded at any time.
</p>
</div>

<div>
<p className="font-medium">
How can I cancel my subscription?
</p>

<p className="text-zinc-600">
Subscription controls will be available in Billing & Plans.
</p>
</div>

</div>
</div>

{/* Documentation */}

<div className="mt-6 rounded-3xl border border-zinc-200 bg-white p-8">
<h2 className="text-xl font-semibold">
Documentation
</h2>

<p className="mt-4 text-zinc-600">
Product guides, tutorials, and onboarding resources will be available here.
</p>
</div>

</div>
</main>
);
}
