export default function AssetsPage() {
const assets = [
{
email: "john@example.com",
projectId: "PRJ-1001",
assetType: "Source Video",
fileName: "source-video.mp4",
size: "120 MB",
status: "Active",
expiresAt: "2026-07-01",
},
{
email: "john@example.com",
projectId: "PRJ-1001",
assetType: "Output Video",
fileName: "output-video.mp4",
size: "95 MB",
status: "Active",
expiresAt: "2026-07-01",
},
{
email: "sarah@example.com",
projectId: "PRJ-1002",
assetType: "Image",
fileName: "thumbnail.png",
size: "5 MB",
status: "Deleted",
expiresAt: "-",
},
];

return (
<div className="space-y-6">
<div>
<h1 className="text-2xl font-bold text-black">Assets</h1>
<p className="text-sm text-gray-500 mt-1">
Monitor uploaded files and generated assets
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
<th className="text-left px-4 py-3 text-black font-semibold">Project ID</th>
<th className="text-left px-4 py-3 text-black font-semibold">Asset Type</th>
<th className="text-left px-4 py-3 text-black font-semibold">File Name</th>
<th className="text-left px-4 py-3 text-black font-semibold">Size</th>
<th className="text-left px-4 py-3 text-black font-semibold">Status</th>
<th className="text-left px-4 py-3 text-black font-semibold">Expires At</th>
</tr>
</thead>

<tbody>
{assets.map((asset, index) => (
<tr
key={index}
className="border-t border-gray-100 hover:bg-gray-50 text-black"
>
<td className="px-4 py-3">{asset.email}</td>
<td className="px-4 py-3">{asset.projectId}</td>
<td className="px-4 py-3">{asset.assetType}</td>
<td className="px-4 py-3">{asset.fileName}</td>
<td className="px-4 py-3">{asset.size}</td>
<td className="px-4 py-3">{asset.status}</td>
<td className="px-4 py-3">{asset.expiresAt}</td>
</tr>
))}
</tbody>
</table>
</div>
</div>
);
}
