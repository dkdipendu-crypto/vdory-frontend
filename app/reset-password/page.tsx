"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ResetPasswordPage() {
const [email, setEmail] = useState("");
const handleResetPassword = async () => {
const { error } = await supabase.auth.resetPasswordForEmail(email);

if (error) {
alert(error.message);
return;
}

alert("Password reset email sent. Please check your inbox.");
};
return (
<main className="min-h-screen flex items-center justify-center">
<div className="w-full max-w-md px-6">
<h1 className="text-3xl font-bold text-center mb-2">
Reset Password
</h1>

<p className="text-center text-zinc-600 mb-6">
Enter your email address and we'll send you a password reset link.
</p>

<input
type="email"
placeholder="Email Address"
value={email}
onChange={(e) => setEmail(e.target.value)}
className="w-full rounded-xl border border-zinc-300 px-4 py-2 mb-4"
/>

<button
onClick={handleResetPassword}
className="w-full rounded-xl bg-black text-white py-2"
>
Send Reset Link
</button>
</div>
</main>
);
}
