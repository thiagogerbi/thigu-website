/** Utilitários de estilo sem estado (mesmo padrão do Thigu Gestão). */
export function cx(...c: (string | false | null | undefined)[]) {
  return c.filter(Boolean).join(" ");
}

export type Variant = "primary" | "onDark";
const VARIANT: Record<Variant, string> = {
  primary: "bg-primary text-white shadow-[0_8px_20px_-8px_rgba(53,99,233,.7)] hover:bg-primary-700",
  onDark: "border-[1.5px] border-white/30 bg-white/5 text-white hover:bg-white/15",
};
const SIZE = { sm: "min-h-10 px-4 text-[15px]", lg: "min-h-13 px-6 text-[17px]" };

export function buttonClass(variant: Variant = "primary", size: keyof typeof SIZE = "lg", extra?: string) {
  return cx(
    "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-semibold transition hover:-translate-y-px",
    VARIANT[variant],
    SIZE[size],
    extra,
  );
}

/** Cartão branco com borda, usado na maioria das seções. */
export const cardClass = "rounded-2xl border border-line bg-white";
