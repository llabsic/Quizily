"use client"


import { ThemeProvider } from "next-themes";
import { ProgressProvider } from "@bprogress/next/app";

export function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <ProgressProvider
        height="4px"
        color="#5465ff"
        options={{ showSpinner: false }}
      >
        {children}
      </ProgressProvider>
    </ThemeProvider>
  );
}
