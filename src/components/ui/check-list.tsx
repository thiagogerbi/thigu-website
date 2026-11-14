import { cx } from "@/components/ui/styles";

type Kind = "yes" | "no" | "soon";

const MARK: Record<Kind, { box: string; path: string }> = {
  yes: { box: "bg-money-50 text-money-700", path: "m6 12 4 4 8-8" },
  no: { box: "bg-[#f1f3f7] text-muted", path: "M7 7l10 10M17 7 7 17" },
  soon: { box: "bg-primary-50 text-primary-700", path: "M12 7v5l3 2" },
};

export interface CheckItem {
  text: string;
  kind?: Kind;
}

/** Lista com marcadores: ✓ (tem), ✕ (não tem) e relógio (em breve). */
export function CheckList({
  items,
  kind = "yes",
  className,
}: {
  items: (string | CheckItem)[];
  kind?: Kind;
  className?: string;
}) {
  return (
    <ul className={cx("grid gap-2.5", className)}>
      {items.map((item) => {
        const { text, kind: k = kind } = typeof item === "string" ? { text: item } : item;
        const m = MARK[k];
        return (
          <li key={text} className={cx("flex gap-2.5", k === "no" && "text-muted")}>
            <span className={cx("mt-0.5 grid size-5 shrink-0 place-items-center rounded-full", m.box)}>
              <svg
                viewBox="0 0 24 24"
                className="size-3"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d={m.path} />
              </svg>
            </span>
            {text}
          </li>
        );
      })}
    </ul>
  );
}
