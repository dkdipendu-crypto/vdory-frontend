export default function UsersPage() {
const users = [
{
name: "John Doe",
email: "john@example.com",
plan: "Pro",
credits: 1200,
projects: 8,
status: "Active",
lastLogin: "2026-06-10",
},
{
name: "Sarah Smith",
email: "sarah@example.com",
plan: "Free",
credits: 150,
projects: 2,
status: "Active",
lastLogin: "2026-06-09",
},
{
name: "Mike Wilson",
email: "mike@example.com",
plan: "Enterprise",
credits: 5000,
projects: 24,
status: "Suspended",
lastLogin: "2026-06-01",
},
];

return (
<div className="space-y-6">
<div>
<h1 className="text-2xl font-bold text-black">Users</h1>
<p className="text-sm text-gray-500 mt-1">
Manage all registered users
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
<th className="text-left px-4 py-3 text-black font-semibold">Name</th>
<th className="text-left px-4 py-3 text-black font-semibold">Email</th>
<th className="text-left px-4 py-3 text-black font-semibold">Plan</th>
<th className="text-left px-4 py-3 text-black font-semibold">Credits</th>
<th className="text-left px-4 py-3 text-black font-semibold">Projects</th>
<th className="text-left px-4 py-3 text-black font-semibold">Status</th>
<th className="text-left px-4 py-3 text-black font-semibold">Last Login</th>
</tr>
</thead>

<tbody>
{users.map((user, index) => (
<tr
key={index}
className="border-t border-gray-100 text-black"
>
<td className="px-4 py-3">{user.name}</td>
<td className="px-4 py-3">{user.email}</td>
<td className="px-4 py-3">{user.plan}</td>
<td className="px-4 py-3">{user.credits}</td>
<td className="px-4 py-3">{user.projects}</td>
<td className="px-4 py-3">
<span
className={`px-2 py-1 rounded-full text-xs ${
user.status === "Active"
? "bg-green-100 text-green-700"
: "bg-red-100 text-red-700"
}`}
>
{user.status}
</span>
</td>
<td className="px-4 py-3">{user.lastLogin}</td>
</tr>
))}
</tbody>
</table>
</div>
</div>
);
}