import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { Container } from "@/components/ui/section-heading";
import { buttonClass, cx } from "@/components/ui/styles";
import { HeroDashboard } from "@/features/landing/hero-dashboard";
import { appLinks } from "@/lib/site";

/** As etapas que o painel do sistema chama de "caminho do dinheiro". */
const TRAIL = ["Clientes", "Conversando", "Propostas", "Vendido", "Falta receber", "Recebido"];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy bg-[radial-gradient(1200px_600px_at_85%_-10%,#1f4a86_0%,transparent_60%)] pb-14 pt-12 text-white lg:pt-18">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -bottom-56 -right-30 size-[520px] bg-[radial-gradient(circle,rgba(24,167,123,.35),transparent_65%)] blur-md"
        aria-hidden="true"
      />

      <Container className="relative grid items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        <Reveal>
          <span className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/7 px-3 py-1.5 text-sm font-semibold text-[#9fc0ff]">
            <span className="size-2 rounded-full bg-money shadow-[0_0_0_4px_rgba(24,167,123,.25)]" />
            CRM + Financeiro em um só lugar
          </span>
          <h1 className="mb-5 text-[clamp(40px,5.6vw,64px)] font-extrabold leading-[1.08] tracking-[-0.035em] text-white">
            Gestão simples.
            <br />
            <span className="text-gradient">Negócios em movimento.</span>
          </h1>
          <p className="max-w-[560px] text-[17px] text-on-navy sm:text-[19px]">
            O Thigu Gestão liga o relacionamento com o cliente ao dinheiro que entra no caixa. Do primeiro contato ao
            último recebimento, tudo num lugar só — com uma linguagem que qualquer pessoa entende.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={appLinks.preview} className={buttonClass("primary", "lg", "max-sm:w-full")}>
              Experimentar a prévia
              <Icon name="arrow" className="transition group-hover:translate-x-0.5" />
            </a>
            <a href="#como-funciona" className={buttonClass("onDark", "lg", "max-sm:w-full")}>
              Ver como funciona
            </a>
          </div>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[15px] text-on-navy-muted">
            {["Sem cadastro para testar", "Funciona no celular", "Guia passo a passo"].map((t) => (
              <li key={t} className="inline-flex items-center gap-1.5">
                <Icon name="check" className="text-mint" />
                {t}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <HeroDashboard />
        </Reveal>
      </Container>

      <Container>
        <Reveal>
          <ol
            aria-label="O caminho do dinheiro"
            className="relative mt-20 grid grid-cols-3 gap-x-2 gap-y-5 sm:grid-cols-6 lg:mt-18"
          >
            <span
              aria-hidden="true"
              className="absolute inset-x-[8%] top-[18px] hidden h-0.5 bg-gradient-to-r from-sky/50 to-mint/80 sm:block"
            />
            {TRAIL.map((step, i) => {
              const last = i === TRAIL.length - 1;
              return (
                <li
                  key={step}
                  className={cx(
                    "relative flex flex-col items-center gap-2 text-center text-sm font-semibold",
                    last ? "text-mint" : "text-on-navy",
                  )}
                >
                  <span
                    className={cx(
                      "grid size-[38px] place-items-center rounded-full border-2 font-display text-sm font-extrabold text-white",
                      last
                        ? "border-mint bg-money shadow-[0_0_0_6px_rgba(24,167,123,.2)]"
                        : "border-[#4f75b8] bg-navy-700",
                    )}
                  >
                    {i + 1}
                  </span>
                  {step}
                </li>
              );
            })}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
