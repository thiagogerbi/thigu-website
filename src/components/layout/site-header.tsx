"use client";

import { ThiguLogo } from "@/components/brand/thigu-logo";
import { Icon } from "@/components/ui/icon";
import { buttonClass, cx } from "@/components/ui/styles";
import { appLinks, siteNav } from "@/lib/site";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header
      id="topo"
      className={cx(
        "sticky top-0 z-50 border-b bg-white/85 backdrop-blur-md backdrop-saturate-150 transition",
        scrolled ? "border-line shadow-sm" : "border-transparent",
      )}
    >
      <div className="mx-auto flex h-18 w-full max-w-[1160px] items-center justify-between px-4 sm:px-6">
        <a href="#topo" aria-label="Thigu Gestão — início" className="rounded-lg">
          <ThiguLogo />
        </a>

        <nav
          id="menu-principal"
          aria-label="Principal"
          className={cx(
            "flex items-center gap-1",
            "max-lg:absolute max-lg:inset-x-0 max-lg:top-18 max-lg:flex-col max-lg:items-stretch max-lg:gap-0.5 max-lg:border-b max-lg:border-line max-lg:bg-white max-lg:px-4 max-lg:pb-5 max-lg:pt-3 max-lg:shadow-soft max-lg:transition",
            !open && "max-lg:invisible max-lg:-translate-y-2 max-lg:opacity-0",
          )}
          onClick={(e) => (e.target as HTMLElement).closest("a") && setOpen(false)}
        >
          {siteNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-[15px] font-medium text-muted transition hover:bg-canvas hover:text-navy max-lg:py-3 max-lg:text-base"
            >
              {item.label}
            </a>
          ))}
          <a href={appLinks.preview} className={buttonClass("primary", "sm", "ml-2 max-lg:ml-0 max-lg:mt-2")}>
            Experimentar grátis
          </a>
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-navy lg:hidden"
          aria-expanded={open}
          aria-controls="menu-principal"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "x" : "menu"} className="size-7" />
        </button>
      </div>
    </header>
  );
}
