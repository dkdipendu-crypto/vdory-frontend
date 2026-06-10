import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
return (
<main className="min-h-screen bg-gradient-to-b from-white via-zinc-50 to-white">
<div className="min-h-screen grid lg:grid-cols-2">

{/* Left Side */}
<div className="hidden lg:flex flex-col justify-center px-16 bg-zinc-950 text-white">
<div className="max-w-md">
<Image
src="/vdory-img.png"
alt="VDORY AI"
width={140}
height={20}
priority
/>

<p className="mt-2 text-sm text-zinc-400">
Shaping Digital Reality
</p>

<h1 className="mt-8 text-4xl font-bold leading-tight">
Create Content Faster With AI
</h1>

<p className="mt-4 text-base text-zinc-400">
Turn raw footage into publish-ready social content in minutes.
</p>
</div>
</div>

{/* Right Side */}
<div className="flex items-start justify-center px-6 py-6 lg:py-6">
<div className="w-full max-w-lg mx-auto">

<div className="text-center mb-6">
<Image
src="/logo-vdory.png"
alt="VDORY AI"
width={120}
height={23}
className="mx-auto lg:hidden"
/>

<h2 className="mt-6 text-[1.75rem] sm:text-[2rem] lg:text-[2.2rem] font-extrabold text-zinc-900 tracking-tight">
Welcome Back
</h2>

<p className="mt-2 text-sm text-zinc-600">
Log in to continue creating AI-powered content with VDORY.
</p>
</div>

<button className="w-full rounded-full border border-zinc-300 py-2 text-zinc-700 font-medium hover:bg-zinc-50 transition">
Continue with Google
</button>

<div className="flex items-center gap-4 my-4">
<div className="h-px flex-1 bg-zinc-200"></div>
<span className="text-sm text-zinc-500">OR</span>
<div className="h-px flex-1 bg-zinc-200"></div>
</div>

<form className="space-y-3">
<input
type="email"
placeholder="Email Address"
className="w-full rounded-xl border border-zinc-300 px-4 py-2 text-zinc-900 placeholder:text-zinc-500 outline-none focus:border-black"
/>

<input
type="password"
placeholder="Password"
className="w-full rounded-xl border border-zinc-300 px-4 py-2 text-zinc-900 placeholder:text-zinc-500 outline-none focus:border-black"
/>

<button
type="submit"
className="w-full rounded-xl bg-black text-white py-2 font-medium hover:opacity-90 transition"
>
Log In
</button>
</form>

<p className="mt-3 text-center">
<Link
href="#"
className="text-sm text-zinc-600 underline"
>
Reset Password
</Link>
</p>

<p className="mt-3 text-center text-sm text-zinc-600">
Don't have an account?{" "}
<Link
href="/signup"
className="font-medium text-black underline"
>
Sign Up
</Link>
</p>

<p className="mt-4 text-center text-xs text-zinc-500 leading-6">
By logging in, you agree to our{" "}
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