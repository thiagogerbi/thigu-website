"use client";

import { type KeyboardEvent, useRef, useState } from "react";

/**
 * Abas acessíveis (padrão WAI-ARIA): clique ou setas/Home/End mudam a aba,
 * e só a aba ativa entra na ordem do Tab.
 */
export function useTabs(count: number, idPrefix: string) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  function select(i: number, focus = false) {
    setActive(i);
    const el = refs.current[i];
    if (!el) return;
    if (focus) el.focus();
    const list = el.parentElement;
    if (list && list.scrollWidth > list.clientWidth) {
      el.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }

  function onKeyDown(e: KeyboardEvent, i: number) {
    const map: Record<string, number> = {
      ArrowDown: (i + 1) % count,
      ArrowRight: (i + 1) % count,
      ArrowUp: (i - 1 + count) % count,
      ArrowLeft: (i - 1 + count) % count,
      Home: 0,
      End: count - 1,
    };
    if (e.key in map) {
      e.preventDefault();
      select(map[e.key], true);
    }
  }

  const tabProps = (i: number) => ({
    ref: (el: HTMLButtonElement | null) => {
      refs.current[i] = el;
    },
    role: "tab" as const,
    id: `${idPrefix}-tab-${i}`,
    "aria-selected": active === i,
    "aria-controls": `${idPrefix}-panel-${i}`,
    tabIndex: active === i ? 0 : -1,
    onClick: () => select(i),
    onKeyDown: (e: KeyboardEvent) => onKeyDown(e, i),
  });

  const panelProps = (i: number) => ({
    role: "tabpanel" as const,
    id: `${idPrefix}-panel-${i}`,
    "aria-labelledby": `${idPrefix}-tab-${i}`,
    hidden: active !== i,
  });

  return { active, tabProps, panelProps };
}
