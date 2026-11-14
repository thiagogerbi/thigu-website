import { Reveal } from "@/components/ui/reveal";
import { Container } from "@/components/ui/section-heading";
import { cx } from "@/components/ui/styles";
import type { CSSProperties } from "react";

/** Mesmo caso de aceitação usado nos testes do sistema: R$ 1.500 em 3 × R$ 500, com R$ 200 pagos. */
const ROWS = [
  { label: "Vendido", value: "R$ 1.500", pct: 100, bar: "from-primary to-[#6f93ff]" },
  { label: "Falta receber", value: "R$ 1.300", pct: 86.7, bar: "from-[#d38b1c] to-[#f2b84b]" },
  { label: "Recebido", value: "R$ 200", pct: 13.3, bar: "from-money to-mint" },
];

const PARCELS = [
  { n: 1, status: "R$ 200 pagos", partial: true },
  { n: 2, status: "Em aberto", partial: false },
  { n: 3, status: "Em aberto", partial: false },
];

export function MoneySection() {
  return (
    <section className="relative overflow-hidden bg-navy bg-[radial-gradient(900px_500px_at_0%_100%,rgba(24,167,123,.22),transparent_60%)] py-18 text-white sm:py-26">
      <Container className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
        <Reveal>
          <span className="mb-3.5 inline-flex rounded-full border border-white/15 bg-white/7 px-3 py-1.5 text-sm font-semibold text-[#9fc0ff]">
            O diferencial
          </span>
          <h2 className="mb-4.5 text-[clamp(30px,4vw,44px)] font-extrabold leading-[1.15] text-white">
            Venda fechada não é dinheiro no bolso
          </h2>
          <p className="text-lg text-on-navy">
            O Thigu separa claramente o que foi <b className="text-white">vendido</b>, o que ainda{" "}
            <b className="text-white">falta receber</b> e o que já foi <b className="text-white">recebido</b>.
            Negociações em andamento nunca entram no seu caixa, e a previsão usa só o que está combinado.
          </p>
          <p className="mt-3.5 text-[15px] text-on-navy-muted">
            Exemplo do sistema: uma venda de R$ 1.500 dividida em 3 parcelas, com R$ 200 já pagos.
          </p>
        </Reveal>

        <Reveal className="group grid gap-4.5 rounded-[20px] border border-white/12 bg-white/5 p-5 sm:p-7">
          {ROWS.map((r) => (
            <div
              key={r.label}
              className="grid grid-cols-[1fr_auto] items-center gap-x-3.5 gap-y-1.5 sm:grid-cols-[120px_1fr_90px]"
            >
              <span className="text-[15px] font-semibold text-on-navy">{r.label}</span>
              <div className="col-span-full row-start-2 h-3.5 overflow-hidden rounded-full bg-white/8 sm:col-span-1 sm:row-start-auto">
                <i
                  className={cx(
                    "block h-full w-0 rounded-full bg-gradient-to-r transition-[width] duration-[1200ms] ease-[cubic-bezier(.2,.8,.2,1)] group-[.is-visible]:w-(--w)",
                    r.bar,
                  )}
                  style={{ "--w": `${r.pct}%` } as CSSProperties}
                />
              </div>
              <b className="tabular text-right font-display text-lg">{r.value}</b>
            </div>
          ))}
          <div className="mt-2 grid gap-2.5 sm:grid-cols-3">
            {PARCELS.map((p) => (
              <div
                key={p.n}
                className={cx(
                  "grid gap-0.5 rounded-xl border p-3",
                  p.partial ? "border-mint/50 bg-money/15" : "border-white/12 bg-white/6",
                )}
              >
                <small className="text-xs text-on-navy-muted">Parcela {p.n} de 3</small>
                <b className="font-display text-lg font-extrabold">R$ 500</b>
                <span className={cx("text-[12.5px]", p.partial ? "font-semibold text-mint" : "text-on-navy-muted")}>
                  {p.status}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
