export default function FAQPage() {
return (
<main className="min-h-screen bg-zinc-50">
<div className="max-w-4xl mx-auto px-6 py-12">

<h1 className="text-4xl font-bold text-zinc-900 mb-6">
Frequently Asked Questions
</h1>

<div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm space-y-8">

<div>
<h2 className="font-semibold text-zinc-900">
What is Vdory AI?
</h2>
<p className="text-zinc-600 mt-2">
Vdory AI converts raw footage into publish-ready social media
content using AI-powered workflows.
</p>
</div>

<div>
<h2 className="font-semibold text-zinc-900">
What video formats are supported?
</h2>
<p className="text-zinc-600 mt-2">
Common formats such as MP4, MOV, and other standard video formats.
</p>
</div>

<div>
<h2 className="font-semibold text-zinc-900">
Do I need editing experience?
</h2>
<p className="text-zinc-600 mt-2">
No. Vdory AI is designed for creators of all skill levels.
</p>
</div>

<div>
<h2 className="font-semibold text-zinc-900">
Can I export content for social media?
</h2>
<p className="text-zinc-600 mt-2">
Yes. Outputs are optimized for major social platforms.
</p>
</div>

<div>
<h2 className="font-semibold text-zinc-900">
How do credits work?
</h2>
<p className="text-zinc-600 mt-2">
Credits are consumed when generating AI outputs and vary by
feature usage.
</p>
</div>

</div>

</div>
</main>
);
}