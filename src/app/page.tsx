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
      router.push("/conversations")
    }
 
  }, [isSignedIn, router]);


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
    </main>
  );
}


