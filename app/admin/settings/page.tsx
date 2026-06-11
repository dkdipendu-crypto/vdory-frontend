export default function SettingsPage() {
return (
<div className="space-y-8">
<div>
<h1 className="text-2xl font-bold text-black">Settings</h1>
<p className="text-sm text-gray-500 mt-1">
Configure platform settings
</p>
</div>

{/* Platform Settings */}
<div className="bg-white border border-gray-200 rounded-xl p-6">
<h2 className="text-lg font-semibold mb-4 text-black">Platform Settings</h2>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<input
type="text"
defaultValue="Vdory AI"
placeholder="Platform Name"
className="border rounded-lg px-4 py-2 text-black placeholder:text-black bg-white"
/>

<input
type="email"
defaultValue="support@vdory.ai"
placeholder="Support Email"
className="border rounded-lg px-4 py-2 text-black placeholder:text-black bg-white"
/>
</div>
</div>

{/* Credit Settings */}
<div className="bg-white border border-gray-200 rounded-xl p-6">
<h2 className="text-lg font-semibold mb-4 text-black">Credit Settings</h2>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<input
type="number"
defaultValue="100"
placeholder="Free Plan Credits"
className="border rounded-lg px-4 py-2 text-black placeholder:text-black bg-white"
/>

<input
type="number"
defaultValue="1000"
placeholder="Pro Plan Credits"
className="border rounded-lg px-4 py-2 text-black placeholder:text-black bg-white"
/>

<input
type="number"
defaultValue="5000"
placeholder="Enterprise Credits"
className="border rounded-lg px-4 py-2 text-black placeholder:text-black bg-white"
/>
</div>
</div>

{/* Subscription Settings */}
<div className="bg-white border border-gray-200 rounded-xl p-6">
<h2 className="text-lg font-semibold mb-4 text-black">Subscription Settings</h2>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<input
type="number"
defaultValue="29"
placeholder="Monthly Plan Price"
className="border rounded-lg px-4 py-2 text-black placeholder:text-black bg-white"
/>

<input
type="number"
defaultValue="299"
placeholder="Yearly Plan Price"
className="border rounded-lg px-4 py-2 text-black placeholder:text-black bg-white"
/>
</div>
</div>

{/* Storage Settings */}
<div className="bg-white border border-gray-200 rounded-xl p-6">
<h2 className="text-lg font-semibold mb-4 text-black">Storage Settings</h2>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<input
type="number"
defaultValue="30"
placeholder="Asset Retention Days"
className="border rounded-lg px-4 py-2 text-black placeholder:text-black bg-white"
/>

<select className="border rounded-lg px-4 py-2 text-black placeholder:text-black bg-white">
<option>Auto Delete Enabled</option>
<option>Auto Delete Disabled</option>
</select>
</div>
</div>

<div>
<button className="bg-slate-900 text-white px-6 py-2 rounded-lg">
Save Settings
</button>
</div>
</div>
);
}
