export function AvatarLino({ size = 40 }: { size?: number }) {
  return (
    <div
      aria-label="Avatar LINO"
      className="relative inline-flex items-center justify-center rounded-md bg-black text-white"
      style={{ width: size, height: size }}
    >
      <span className="font-display text-sm" style={{ filter: "drop-shadow(0 0 6px #D90429)" }}>L&gt;</span>
    </div>
  );
}