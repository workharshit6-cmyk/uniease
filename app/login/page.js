"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) alert(error.message);
    else alert("Login successful!");
  };

  const handleSignup = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) alert(error.message);
    else alert("Signup successful! Check email.");
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Login / Signup</h1>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>Login</button>
      <button onClick={handleSignup} style={{ marginLeft: 10 }}>
        Signup
      </button>
    </div>
  );
}
