import Link from "next/link";
import Image from "next/image";

export default function SignupPage() {
return (
<main className="min-h-screen bg-gradient-to-b from-white via-zinc-50 to-white">
<div className="min-h-screen grid lg:grid-cols-2">

{/* Left Side */}
<div className="hidden lg:flex flex-col justify-center px-16 bg-zinc-950 text-white">
<div className="max-w-md">
<Image
src="/vdory-img.png"
alt="VDORY AI"
width={160}
height={23}
priority
/>

<p className="mt-3 text-zinc-400">
Shaping Digital Reality
</p>

<h1 className="mt-10 text-5xl font-bold leading-tight">
Create Content Faster With AI
</h1>

<p className="mt-6 text-lg text-zinc-400">
Turn raw footage into publish-ready social content in minutes.
</p>
</div>
</div>

{/* Right Side */}
<div className="flex items-center justify-center px-6 py-6 lg:py-6">
<div className="w-full max-w-lg mx-auto">

<div className="text-center mb-6">
<Image
src="/logo-vdory.png"
alt="VDORY AI"
width={120}
height={23}
className="mx-auto lg:hidden"
/>

<h2 className="mt-6 text-[2rem] sm:text-[2.3rem] lg:text-[2.5rem] font-extrabold text-zinc-900 tracking-tight">
Create Your Account
</h2>

<p className="mt-3 text-zinc-600">
Start producing AI-powered content with VDORY.
</p>
</div>

<button className="w-full rounded-full border border-zinc-300 py-3 text-zinc-700 font-medium hover:bg-zinc-50 transition">
Continue with Google
</button>

<div className="flex items-center gap-4 my-6">
<div className="h-px flex-1 bg-zinc-200"></div>
<span className="text-sm text-zinc-500">OR</span>
<div className="h-px flex-1 bg-zinc-200"></div>
</div>

<form className="space-y-4">
<input
type="text"
placeholder="First Name"
className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-zinc-900 placeholder:text-zinc-500 outline-none focus:border-black"
/>

<input
type="email"
placeholder="Email Address"
className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-zinc-900 placeholder:text-zinc-500 outline-none focus:border-black"
/>

<input
type="password"
placeholder="Password"
className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-zinc-900 placeholder:text-zinc-500 outline-none focus:border-black"
/>

<button
type="submit"
className="w-full rounded-xl bg-black text-white py-3 font-medium hover:opacity-90 transition"
>
Create Account
</button>
</form>

<p className="mt-6 text-center text-sm text-zinc-600">
Already have an account?{" "}
<Link
href="/login"
className="font-medium text-black underline"
>
Log In
</Link>
</p>

<p className="mt-8 text-center text-xs text-zinc-500 leading-6">
By creating an account, you agree to our{" "}
<a href="#" className="underline">
Terms of Use
</a>{" "}
and{" "}
<a href="#" className="underline">
Privacy Policy
</a>
.
</p>
</div>
</div>
</div>
</main>
);
}