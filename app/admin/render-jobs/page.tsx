export default function RenderJobsPage() {
const renderJobs = [
{
renderId: "RND-1001",
projectId: "PRJ-1001",
email: "john@example.com",
status: "Completed",
duration: 45,
creditsUsed: 30,
completedAt: "2026-06-10",
},
{
renderId: "RND-1002",
projectId: "PRJ-1002",
email: "sarah@example.com",
status: "Processing",
duration: 60,
creditsUsed: 40,
completedAt: "-",
},
{
renderId: "RND-1003",
projectId: "PRJ-1003",
email: "mike@example.com",
status: "Failed",
duration: 30,
creditsUsed: 20,
completedAt: "2026-06-08",
},
];

return (
<div className="space-y-6">
<div>
<h1 className="text-2xl font-bold text-black">Render Jobs</h1>
<p className="text-sm text-gray-500 mt-1">
Monitor all video render activities
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
<th className="text-left px-4 py-3 text-black font-semibold">Render ID</th>
<th className="text-left px-4 py-3 text-black font-semibold">Project ID</th>
<th className="text-left px-4 py-3 text-black font-semibold">User Email</th>
<th className="text-left px-4 py-3 text-black font-semibold">Status</th>
<th className="text-left px-4 py-3 text-black font-semibold">Duration (sec)</th>
<th className="text-left px-4 py-3 text-black font-semibold">Credits Used</th>
<th className="text-left px-4 py-3 text-black font-semibold">Completed At</th>
</tr>
</thead>

<tbody>
{renderJobs.map((job, index) => (
<tr
key={index}
className="border-t border-gray-100 hover:bg-gray-50 text-black"
>
<td className="px-4 py-3 font-medium">{job.renderId}</td>
<td className="px-4 py-3">{job.projectId}</td>
<td className="px-4 py-3">{job.email}</td>
<td className="px-4 py-3">{job.status}</td>
<td className="px-4 py-3">{job.duration}</td>
<td className="px-4 py-3">{job.creditsUsed}</td>
<td className="px-4 py-3">{job.completedAt}</td>
</tr>
))}
</tbody>
</table>
</div>
</div>
);
}
