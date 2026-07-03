import { ReactNode } from "react";

import Navbar from "@/components/landing/Navbar";

interface Props {
  children: ReactNode;
}

export default function LandingLayout({ children }: Props) {
  return (
    <>
      <Navbar />

      <main className="pt-32">
        {children}
      </main>
    </>
  );
}