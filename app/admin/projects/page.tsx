export default function ProjectsPage() {
const projects = [
{
projectId: "PRJ-1001",
email: "john@example.com",
status: "Completed",
creditsUsed: 120,
totalRenders: 4,
createdAt: "2026-06-01",
updatedAt: "2026-06-10",
},
{
projectId: "PRJ-1002",
email: "sarah@example.com",
status: "Processing",
creditsUsed: 80,
totalRenders: 2,
createdAt: "2026-06-05",
updatedAt: "2026-06-10",
},
{
projectId: "PRJ-1003",
email: "mike@example.com",
status: "Failed",
creditsUsed: 50,
totalRenders: 1,
createdAt: "2026-06-02",
updatedAt: "2026-06-08",
},
];

return (
<div className="space-y-6">
<div>
<h1 className="text-2xl font-bold text-black">Projects</h1>
<p className="text-sm text-gray-500 mt-1">
Manage all user projects
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
<th className="text-left px-4 py-3 text-black font-semibold">Project ID</th>
<th className="text-left px-4 py-3 text-black font-semibold">User Email</th>
<th className="text-left px-4 py-3 text-black font-semibold">Status</th>
<th className="text-left px-4 py-3 text-black font-semibold">Credits Used</th>
<th className="text-left px-4 py-3 text-black font-semibold">Total Renders</th>
<th className="text-left px-4 py-3 text-black font-semibold">Created At</th>
<th className="text-left px-4 py-3 text-black font-semibold">Updated At</th>
</tr>
</thead>

<tbody>
{projects.map((project, index) => (
<tr
key={index}
className="border-t border-gray-100 hover:bg-gray-50 text-black"
>
<td className="px-4 py-3 font-medium">
{project.projectId}
</td>
<td className="px-4 py-3">
{project.email}
</td>
<td className="px-4 py-3">
{project.status}
</td>
<td className="px-4 py-3">
{project.creditsUsed}
</td>
<td className="px-4 py-3">
{project.totalRenders}
</td>
<td className="px-4 py-3">
{project.createdAt}
</td>
<td className="px-4 py-3">
{project.updatedAt}
</td>
</tr>
))}
</tbody>
</table>
</div>
</div>
);
}
