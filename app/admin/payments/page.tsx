export default function PaymentsPage() {
const payments = [
{
email: "john@example.com",
plan: "Pro",
amount: "$29",
currency: "USD",
status: "Paid",
provider: "Stripe",
transactionId: "TXN-1001",
paymentDate: "2026-06-01",
invoice: "INV-1001",
},
{
email: "sarah@example.com",
plan: "Free",
amount: "$0",
currency: "USD",
status: "-",
provider: "-",
transactionId: "-",
paymentDate: "-",
invoice: "-",
},
{
email: "mike@example.com",
plan: "Enterprise",
amount: "$999",
currency: "USD",
status: "Paid",
provider: "Stripe",
transactionId: "TXN-1002",
paymentDate: "2026-01-01",
invoice: "INV-1002",
},
];

return (
<div className="space-y-6">
<div>
<h1 className="text-2xl font-bold text-black">Payments</h1>
<p className="text-sm text-gray-500 mt-1">
Monitor all customer payments
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
<th className="text-left px-4 py-3">Plan Type</th>
<th className="text-left px-4 py-3">Amount</th>
<th className="text-left px-4 py-3">Currency</th>
<th className="text-left px-4 py-3">Payment Status</th>
<th className="text-left px-4 py-3">Provider</th>
<th className="text-left px-4 py-3">Transaction ID</th>
<th className="text-left px-4 py-3">Payment Date</th>
<th className="text-left px-4 py-3">Invoice</th>
</tr>
</thead>

<tbody>
{payments.map((payment, index) => (
<tr
key={index}
className="border-t border-gray-100 hover:bg-gray-50"
>
<td className="px-4 py-3">{payment.email}</td>
<td className="px-4 py-3">{payment.plan}</td>
<td className="px-4 py-3">{payment.amount}</td>
<td className="px-4 py-3">{payment.currency}</td>
<td className="px-4 py-3">{payment.status}</td>
<td className="px-4 py-3">{payment.provider}</td>
<td className="px-4 py-3">{payment.transactionId}</td>
<td className="px-4 py-3">{payment.paymentDate}</td>
<td className="px-4 py-3">{payment.invoice}</td>
</tr>
))}
</tbody>
</table>
</div>
</div>
);
}
