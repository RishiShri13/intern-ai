interface Props {
  text: string;
}

export default function PromptChip({
  text,
}: Props) {
  return (
    <button
      className="
      rounded-full
      border
      border-white/10
      bg-white/5
      px-5
      py-2
      text-sm
      transition-all
      hover:border-cyan-400
      hover:bg-cyan-500/10
      "
    >
      {text}
    </button>
  );
}