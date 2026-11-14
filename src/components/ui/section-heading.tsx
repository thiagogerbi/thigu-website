import { Reveal } from "@/components/ui/reveal";
import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="mb-3.5 block text-[13px] font-bold uppercase tracking-[0.08em] text-primary">{children}</span>
  );
}

export function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <Reveal className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mb-4 text-[clamp(30px,4vw,44px)] font-extrabold leading-[1.15] text-navy">{title}</h2>
      {children && <p className="text-[17px] text-muted sm:text-lg">{children}</p>}
    </Reveal>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1160px] px-4 sm:px-6 ${className}`}>{children}</div>;
}
