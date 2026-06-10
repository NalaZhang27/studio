"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import { MainLayout } from "@/components/layout/MainLayout";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <MainLayout>{children}</MainLayout>
    </LanguageProvider>
  );
}
