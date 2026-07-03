interface Props {
  title: string;
  time: string;
}

export default function ActivityItem({
  title,
  time,
}: Props) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-white/5 p-4">
      <div>
        <p className="font-medium">
          {title}
        </p>

        <span className="text-sm text-slate-400">
          {time}
        </span>
      </div>

      <span className="h-3 w-3 rounded-full bg-green-400"></span>
    </div>
  );
}