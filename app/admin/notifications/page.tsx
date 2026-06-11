export default function NotificationsPage() {
const notifications = [
{
email: "john@example.com",
type: "Render",
title: "Render Completed",
channel: "In-App",
status: "Delivered",
createdAt: "2026-06-10 10:25",
},
{
email: "sarah@example.com",
type: "Payment",
title: "Payment Successful",
channel: "Email",
status: "Delivered",
createdAt: "2026-06-10 09:15",
},
{
email: "mike@example.com",
type: "Subscription",
title: "Subscription Expiring",
channel: "Email + In-App",
status: "Pending",
createdAt: "2026-06-09 18:40",
},
{
email: "john@example.com",
type: "Credits",
title: "Credits Deducted",
channel: "In-App",
status: "Delivered",
createdAt: "2026-06-08 12:30",
},
];

return (
<div className="space-y-6">
<div>
<h1 className="text-2xl font-bold text-black">Notifications</h1>
<p className="text-sm text-gray-500 mt-1">
Monitor all system notifications and activity logs
</p>
</div>

<div>
<input
type="text"
placeholder="Search by email..."
className="w-full md:w-96 border border-gray-300 rounded-lg px-4 py-2 text-sm text-black placeholde:text-black bg-white"
/>
</div>

<div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
<table className="w-full text-sm">
<thead className="bg-gray-100 text-black">
<tr>
<th className="text-left px-4 py-3 text-black font-semibold">User Email</th>
<th className="text-left px-4 py-3 text-black font-semibold">Type</th>
<th className="text-left px-4 py-3 text-black font-semibold">Title</th>
<th className="text-left px-4 py-3 text-black font-semibold">Channel</th>
<th className="text-left px-4 py-3 text-black font-semibold">Status</th>
<th className="text-left px-4 py-3 text-black font-semibold">Created At</th>
</tr>
</thead>

<tbody>
{notifications.map((item, index) => (
<tr
key={index}
className="border-t border-gray-100 hover:bg-gray-50 text-black"
>
<td className="px-4 py-3">{item.email}</td>
<td className="px-4 py-3">{item.type}</td>
<td className="px-4 py-3">{item.title}</td>
<td className="px-4 py-3">{item.channel}</td>
<td className="px-4 py-3">{item.status}</td>
<td className="px-4 py-3">{item.createdAt}</td>
</tr>
))}
</tbody>
</table>
</div>
</div>
);
}
