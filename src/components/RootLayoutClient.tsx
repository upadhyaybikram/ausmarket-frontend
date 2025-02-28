'use client';

import Navbar from "@/components/Navbar";

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
    </>
  );
} 