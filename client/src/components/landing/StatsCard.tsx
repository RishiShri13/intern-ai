interface Props {
  number: string;
  label: string;
}

export default function StatsCard({
  number,
  label,
}: Props) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <h3 className="text-3xl font-bold">{number}</h3>

      <p className="mt-2 text-slate-400">
        {label}
      </p>
    </div>
  );
}