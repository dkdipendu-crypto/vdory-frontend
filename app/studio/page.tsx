"use client";

export default function StudioPage() {
return (
<main className="p-10">
<a
href="https://google.com"
className="block bg-black text-white px-6 py-4 rounded-xl mb-6"
>
TEST LINK
</a>

<button
className="block bg-red-500 text-white px-6 py-4 rounded-xl"
style={{ touchAction: "manipulation" }}
onClick={() => {
document.body.style.backgroundColor = "green";
}}
>
TEST BUTTON
</button>
</main>
);
}