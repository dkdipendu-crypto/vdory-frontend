export default function SettingsPage() {
return (
<main className="min-h-screen bg-zinc-50">
<div className="max-w-5xl mx-auto px-6 py-12">
<h1 className="text-4xl font-bold text-zinc-900">
Settings
</h1>

<p className="mt-2 text-zinc-600">
Manage your account preferences.
</p>
<div className="mt-8 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
<h2 className="text-xl font-semibold mb-6 text-zinc-900">
Notification Preferences
</h2>

<div className="space-y-4">
<div className="flex items-center justify-between">
<div>
<p className="font-medium text-zinc-900">Email Notifications</p>
<p className="text-sm text-zinc-500">
Receive important account updates by email.
</p>
</div>

<button className="rounded-full bg-black text-white px-4 py-2 text-sm">
ON
</button>
</div>

<div className="flex items-center justify-between">
<div>
<p className="font-medium text-zinc-900">Product Updates</p>
<p className="text-sm text-zinc-500">
Receive updates about new Vdory features.
</p>
</div>

<button className="rounded-full bg-black text-white px-4 py-2 text-sm">
ON
</button>
</div>
</div>
</div>
<div className="mt-6 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
<h2 className="mb-6 text-xl font-semibold text-zinc-900">
Account Preferences
</h2>

<div className="space-y-4">
<div className="flex items-center justify-between">
<div>
<p className="font-medium text-zinc-900">Change Password</p>
<p className="text-sm text-zinc-500">
Update your account password.
</p>
</div>

<button className="rounded-xl bg-black px-6 py-2 text-sm text-white min-w-[100px]">
Change
</button>
</div>

<div className="flex items-center justify-between gap-4">
<div>
<p className="font-medium text-zinc-900">Sign Out From All Devices</p>
<p className="text-sm text-zinc-500">
End all active sessions across devices.
</p>
</div>

<button className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm text-black min-w-[100px]">
Sign Out
</button>
</div>
</div>
</div>
<div className="mt-6 rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm">
<h2 className="mb-6 text-xl font-semibold text-zinc-900">
Content Preferences
</h2>

<div className="mt-8 space-y-4">

<div className="flex items-center justify-between gap-4">
<div>
<p className="font-medium text-zinc-900">Preferred Aspect Ratio</p>
<p className="text-sm text-zinc-500">
Default export format for videos.
</p>
</div>

<button className="rounded-xl border border-zinc-300 px-4 py-2 text-sm text-zinc-900">
16:9
</button>
</div>

<div className="flex items-center justify-between gap-4">
<div>
<p className="font-medium text-zinc-900">Preferred Language</p>
<p className="text-sm text-zinc-500">
Default language for captions and outputs.
</p>
</div>

<button className="rounded-xl border border-zinc-300 px-4 py-2 text-sm text-zinc-900">
English
</button>
</div>

</div>
</div>
<div className="mt-6 rounded-3xl border border-red-200 bg-red-50 p-10">
<h2 className="text-2xl font-semibold text-red-700">
Danger Zone
</h2>
<div className="mt-6 flex items-center justify-between">
<div>
<p className="font-medium text-red-700">
Delete Account
</p>

<p className="text-sm text-red-600">
Permanently delete your Vdory account and all associated data.
</p>
</div>

<button className="rounded-xl bg-red-600 px-5 py-2 text-sm text-white hover:bg-red-700">
Delete Account
</button>
</div>
</div>
</div>
</main>
);
}