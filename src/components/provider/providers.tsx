import React, { ReactNode } from "react";
import ThemeProvider from "./theme-provider";
import AuthProvider from "@/components/provider/auth-provider";

export default function Providers({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
}
