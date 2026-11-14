/**
 * Marca Thigu Gestão (igual à do sistema): símbolo "t" com um quadrado azul (relacionamento)
 * e um verde (dinheiro), e o nome "thigu" com "GESTÃO" espaçado.
 */
export function ThiguMark({
  variant = "color",
  className = "h-9 w-9",
}: {
  variant?: "color" | "white";
  className?: string;
}) {
  const stem = variant === "color" ? "#142D4E" : "#FFFFFF";
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" focusable="false">
      <rect x="8" y="2" width="11" height="40" rx="3.5" fill={stem} />
      <rect x="3" y="13" width="27" height="10" rx="3.5" fill={stem} />
      <rect x="32" y="17" width="13" height="13" rx="3.5" fill="#3563E9" />
      <path d="M19 30h11.5v9a3 3 0 0 1-3 3H19z" fill="#18A77B" />
    </svg>
  );
}

export function ThiguLogo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5" aria-label="Thigu Gestão" role="img">
      <ThiguMark variant={dark ? "white" : "color"} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[26px] font-extrabold tracking-[-0.03em] ${dark ? "text-white" : "text-navy"}`}
        >
          thigu
        </span>
        <span
          className={`mt-0.5 font-display text-[9px] font-bold uppercase tracking-[0.42em] ${dark ? "text-[#c9d6ea]" : "text-navy"}`}
        >
          Gestão
        </span>
      </span>
    </span>
  );
}
