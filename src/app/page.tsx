"use client";

import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/conversations");
    }
  }, [isSignedIn, router]);

  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <div className="max-w-md w-full bg-cyan-950 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Welcome to Our App!
        </h1>
        <div className="mb-8 text-center">
          <Unauthenticated>
            <SignInButton />
          </Unauthenticated>
        </div>
      </div>
    </main>
  );
}
