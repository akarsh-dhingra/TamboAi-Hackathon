"use client";

import { TamboProvider } from "@tambo-ai/react";
import { components } from "@/lib/tambo";
import { MessageThreadCollapsible } from "@/components/tambo/message-thread-collapsible";

export function TamboWrapper({ children }: { children: React.ReactNode }) {
  return (
    <TamboProvider
      apiKey={process.env.NEXT_PUBLIC_TAMBO_API_KEY ?? ""}
      components={components}
    >
      <MessageThreadCollapsible />
      {children}
    </TamboProvider>
  );
}
