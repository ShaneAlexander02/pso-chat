"use client";
import LoadingLogo from "@/components/ui/shared/LoadingLogo";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { AuthLoading, ConvexProvider, ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import React from "react";
import { Authenticated, Unauthenticated } from "convex/react";
import { ConvexClient } from "convex/browser";

type Props = {
  children: React.ReactNode;
};

const CONVEX_URL = process.env.NEXT_PUBLIC_CONVEX_URL!;

const convex = new ConvexReactClient(CONVEX_URL);

export const ConvexClientProvider = ({ children }: Props) => {
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};
