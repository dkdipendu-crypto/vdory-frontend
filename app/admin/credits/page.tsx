export default function CreditsPage() {
const credits = [
{
email: "john@example.com",
amount: "+1000",
creditType: "Monthly Allocation",
transactionType: "Added",
balance: 1000,
notes: "Pro plan renewal",
},
{
email: "john@example.com",
amount: "-50",
creditType: "Render Usage",
transactionType: "Deducted",
balance: 950,
notes: "Video render",
},
{
email: "sarah@example.com",
amount: "+200",
creditType: "Bonus",
transactionType: "Added",
balance: 350,
notes: "Promotional credit",
},
];

return (
<div className="space-y-6">
<div>
<h1 className="text-2xl font-bold text-black">Credits</h1>
<p className="text-sm text-gray-500 mt-1">
Monitor all credit transactions
</p>
</div>

<div>
<input
type="text"
placeholder="Search by email..."
className="w-full md:w-96 border border-gray-300 rounded-lg px-4 py-2 text-sm"
/>
</div>

<div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
<table className="w-full text-sm">
<thead className="bg-gray-50">
<tr>
<th className="text-left px-4 py-3">User Email</th>
<th className="text-left px-4 py-3">Credit Amount</th>
<th className="text-left px-4 py-3">Credit Type</th>
<th className="text-left px-4 py-3">Transaction Type</th>
<th className="text-left px-4 py-3">Balance After</th>
<th className="text-left px-4 py-3">Notes</th>
</tr>
</thead>

<tbody>
{credits.map((credit, index) => (
<tr
key={index}
className="border-t border-gray-100 hover:bg-gray-50"
>
<td className="px-4 py-3">{credit.email}</td>
<td className="px-4 py-3">{credit.amount}</td>
<td className="px-4 py-3">{credit.creditType}</td>
<td className="px-4 py-3">{credit.transactionType}</td>
<td className="px-4 py-3">{credit.balance}</td>
<td className="px-4 py-3">{credit.notes}</td>
</tr>
))}
</tbody>
</table>
</div>
</div>
);
}
