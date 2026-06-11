export default function SubscriptionsPage() {
const subscriptions = [
{
email: "john@example.com",
plan: "Pro",
billing: "Monthly",
amount: "$29",
status: "Paid",
startDate: "2026-06-01",
endDate: "2026-07-01",
provider: "Stripe",
transactionId: "TXN-1001",
},
{
email: "sarah@example.com",
plan: "Free",
billing: "-",
amount: "$0",
status: "-",
startDate: "2026-06-01",
endDate: "-",
provider: "-",
transactionId: "-",
},
{
email: "mike@example.com",
plan: "Enterprise",
billing: "Yearly",
amount: "$999",
status: "Paid",
startDate: "2026-01-01",
endDate: "2027-01-01",
provider: "Stripe",
transactionId: "TXN-1002",
},
];

return (
<div className="space-y-6">
<div>
<h1 className="text-2xl font-bold text-black">Subscriptions</h1>
<p className="text-sm text-gray-500 mt-1">
Manage all customer subscriptions
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
<th className="text-left px-4 py-3 text-black font-semibold">Plan Type</th>
<th className="text-left px-4 py-3 text-black font-semibold">Billing Cycle</th>
<th className="text-left px-4 py-3 text-black font-semibold">Amount Paid</th>
<th className="text-left px-4 py-3 text-black font-semibold">Payment Status</th>
<th className="text-left px-4 py-3 text-black font-semibold">Start Date</th>
<th className="text-left px-4 py-3 text-black font-semibold">End Date</th>
<th className="text-left px-4 py-3 text-black font-semibold">Provider</th>
<th className="text-left px-4 py-3 text-black font-semibold">Transaction ID</th>
</tr>
</thead>

<tbody>
{subscriptions.map((sub, index) => (
<tr
key={index}
className="border-t border-gray-100 hover:bg-gray-50 text-black"
>
<td className="px-4 py-3">{sub.email}</td>
<td className="px-4 py-3">{sub.plan}</td>
<td className="px-4 py-3">{sub.billing}</td>
<td className="px-4 py-3">{sub.amount}</td>
<td className="px-4 py-3">{sub.status}</td>
<td className="px-4 py-3">{sub.startDate}</td>
<td className="px-4 py-3">{sub.endDate}</td>
<td className="px-4 py-3">{sub.provider}</td>
<td className="px-4 py-3">{sub.transactionId}</td>
</tr>
))}
</tbody>
</table>
</div>
</div>
);
}
