export default function AnimatedGrid() {
  return (
    <div
      className="
        absolute inset-0
        -z-10
        bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]
        bg-[size:60px_60px]
        [mask-image:radial-gradient(circle_at_center,black,transparent_90%)]
      "
    />
  );
}