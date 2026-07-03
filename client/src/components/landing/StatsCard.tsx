interface StatsCardProps {
  number: string;
  label: string;
}

export default function StatsCard({
  number,
  label,
}: StatsCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-400/50">
      <h3 className="text-3xl font-black text-cyan-400">
        {number}
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        {label}
      </p>
    </div>
  );
}