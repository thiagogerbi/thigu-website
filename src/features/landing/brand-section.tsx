"use client";

import { CheckList } from "@/components/ui/check-list";
import { Reveal } from "@/components/ui/reveal";
import { Container, Eyebrow } from "@/components/ui/section-heading";
import { cx } from "@/components/ui/styles";
import { type CSSProperties, useState } from "react";

/** Cor da marca + tom escuro do menu, como o sistema faz em "Minha empresa". */
const COLORS = [
  { name: "Azul", brand: "#3563E9", menu: "#142D4E" },
  { name: "Roxo", brand: "#7C3AED", menu: "#2E1065" },
  { name: "Rosa", brand: "#DB2777", menu: "#4A0D2A" },
  { name: "Laranja", brand: "#C2410C", menu: "#431407" },
  { name: "Petróleo", brand: "#0E7490", menu: "#0B2E38" },
  { name: "Verde", brand: "#15803D", menu: "#0D2E1A" },
];

export function BrandSection() {
  const [color, setColor] = useState(COLORS[0]);
  const vars = { "--bc": color.brand, "--bm": color.menu } as CSSProperties;

  return (
    <section id="sua-marca" className="bg-canvas py-18 sm:py-26">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <Eyebrow>Sua marca</Eyebrow>
          <h2 className="mb-4 text-[clamp(30px,4vw,44px)] font-extrabold leading-[1.15] text-navy">
            O sistema com a cara da sua empresa
          </h2>
          <p className="mb-6 text-lg text-muted">
            Envie seu logotipo, escolha a cor da marca e preencha os dados da empresa uma única vez. O menu, os botões e
            o cabeçalho das propostas passam a mostrar a sua identidade.
          </p>
          <CheckList
            items={[
              "Logotipo em PNG, JPG, WebP ou SVG",
              "Cor da marca e do menu, com contraste sempre legível",
              "Condições comerciais padrão em toda proposta nova",
              "CNPJ (inclusive o alfanumérico) ou CPF, endereço e contatos",
            ]}
          />
          <div role="radiogroup" aria-labelledby="cor-label" className="mt-7 flex flex-wrap items-center gap-2.5">
            <p id="cor-label" className="w-full text-[15px] font-semibold text-navy">
              Experimente uma cor:
            </p>
            {COLORS.map((c) => {
              const on = c.name === color.name;
              return (
                <button
                  key={c.name}
                  type="button"
                  role="radio"
                  aria-checked={on}
                  aria-label={c.name}
                  onClick={() => setColor(c)}
                  className={cx("size-10 rounded-full border-[3px] border-white transition hover:scale-110")}
                  style={{
                    background: c.brand,
                    boxShadow: on ? `0 0 0 3px ${c.brand}` : "0 0 0 1px var(--color-line)",
                  }}
                />
              );
            })}
          </div>
        </Reveal>

        <Reveal>
          <div
            aria-hidden="true"
            style={vars}
            className="grid grid-cols-[52px_1fr] overflow-hidden rounded-[20px] border border-line bg-white shadow-deep sm:grid-cols-[64px_1fr]"
          >
            <div className="flex flex-col items-center gap-2.5 bg-(--bm) px-2 py-4 transition-colors duration-500 sm:px-3">
              <span className="mb-2.5 grid size-9.5 place-items-center rounded-[10px] bg-(--bc) font-display text-sm font-extrabold text-white transition-colors duration-500">
                AE
              </span>
              {[false, true, false, false].map((on, i) => (
                <i key={i} className={cx("h-2 w-9 rounded", on ? "bg-white/65" : "bg-white/20")} />
              ))}
            </div>
            <div className="grid gap-4 bg-canvas p-3.5 sm:p-6">
              <div className="grid gap-3 rounded-[14px] border border-line bg-white p-3.5 sm:p-5">
                <div className="flex flex-wrap items-center gap-3 border-b-[3px] border-(--bc) pb-3.5 transition-colors duration-500">
                  <span className="grid size-9.5 place-items-center rounded-[10px] bg-(--bc) font-display text-sm font-extrabold text-white transition-colors duration-500">
                    AE
                  </span>
                  <div>
                    <b className="block font-display text-navy">Aurora Estúdio</b>
                    <small className="text-xs text-muted">CNPJ 12.ABC.345/0001-67</small>
                  </div>
                  <span className="text-xs font-bold text-(--bc) transition-colors duration-500 sm:ml-auto">
                    Proposta nº 0042
                  </span>
                </div>
                <i className="h-2.5 rounded bg-[#eef1f6]" />
                <i className="h-2.5 w-3/5 rounded bg-[#eef1f6]" />
                <div className="flex items-baseline justify-between pt-1.5">
                  <span className="text-sm text-muted">Total</span>
                  <b className="tabular font-display text-[22px] font-extrabold text-navy">R$ 1.500,00</b>
                </div>
              </div>
              <div className="flex flex-wrap gap-2.5">
                <span className="rounded-[10px] bg-(--bc) px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-500">
                  Enviar proposta
                </span>
                <span className="rounded-[10px] border-[1.5px] border-(--bc) bg-white px-4 py-2.5 text-sm font-semibold text-(--bc) transition-colors duration-500">
                  Imprimir
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
