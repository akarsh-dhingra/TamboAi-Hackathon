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

// We were on charlies anc exploring it next 
// We are going to move towards building the idea of the projet and what we can potentially build with it.
// We are going to build a prototype of the project and then we will see if we can build it.