import { ReactNode } from "react";

export default function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-slate-900 to-black">
      <div className="w-full max-w-md p-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
          {children}
        </div>
      </div>
    </div>
  );
}