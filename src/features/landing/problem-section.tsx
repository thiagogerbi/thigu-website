import { Icon, type IconName } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { Container, SectionHeading } from "@/components/ui/section-heading";

const BEFORE: [IconName, string][] = [
  ["chat", "Conversas perdidas no meio do WhatsApp"],
  ["note", "Proposta refeita do zero a cada cliente"],
  ["sheet", "Planilha de parcelas que ninguém atualiza"],
  ["coins", "“Vendemos muito, mas cadê o dinheiro?”"],
];
const AFTER = [
  "Cada cliente com sua ficha e histórico",
  "Proposta pronta, com sua marca, em minutos",
  "Parcelas criadas automaticamente na venda",
  "Vendido, recebido e a receber sempre claros",
];

export function ProblemSection() {
  return (
    <section className="py-18 sm:py-26">
      <Container>
        <SectionHeading eyebrow="Por que o Thigu existe" title="A venda está num lugar. O dinheiro, em outro.">
          Em muitas pequenas empresas o cliente fica no WhatsApp, a proposta num arquivo solto, as parcelas numa
          planilha e o que já entrou… na cabeça de alguém. O resultado é retrabalho, cobrança esquecida e a sensação de
          vender bem sem ver o dinheiro aparecer.
        </SectionHeading>

        <Reveal className="grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
          <div className="h-full rounded-2xl border border-[#f1dcd9] bg-[#fbf6f5] p-7">
            <h3 className="mb-4 text-xl font-bold text-[#7a271a]">Sem o Thigu</h3>
            <ul className="grid gap-3.5">
              {BEFORE.map(([icon, text]) => (
                <li key={text} className="flex gap-3 text-[#57303a]">
                  <Icon name={icon} className="mt-0.5 text-danger" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
          <div
            aria-hidden="true"
            className="mx-auto grid size-13 place-items-center rounded-full bg-navy text-white shadow-soft max-md:rotate-90"
          >
            <Icon name="arrow" />
          </div>
          <div className="h-full rounded-2xl border border-[#bfe8d9] bg-money-50 p-7">
            <h3 className="mb-4 text-xl font-bold text-money-700">Com o Thigu</h3>
            <ul className="grid gap-3.5">
              {AFTER.map((text) => (
                <li key={text} className="flex gap-3">
                  <Icon name="check" className="mt-0.5 text-money" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
