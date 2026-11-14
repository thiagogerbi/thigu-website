import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { Container, SectionHeading } from "@/components/ui/section-heading";
import type { Feature } from "@/features/landing/feature-card";

/** Regras financeiras e de segurança do sistema, em linguagem simples. */
const ITEMS: Feature[] = [
  {
    icon: "coins",
    title: "Centavo por centavo",
    text: "Valores guardados em centavos inteiros. R$ 100 em 3 vezes vira 33,34 + 33,33 + 33,33 — a soma sempre fecha.",
  },
  {
    icon: "history",
    title: "Nada é apagado",
    text: "Desfazer marca o registro como desfeito, com motivo. Contas canceladas continuam no histórico.",
  },
  {
    icon: "lock",
    title: "Cada empresa isolada",
    text: "Uma pessoa de outra empresa não consegue ler nem alterar seus dados — a regra está no próprio banco.",
  },
  {
    icon: "shield",
    title: "Permissões conferidas no servidor",
    text: "Não basta esconder o botão: o servidor confere o papel de quem pede cada ação.",
  },
  {
    icon: "check",
    title: "Sem duplicar por engano",
    text: "Clicou três vezes em “Criar 3 parcelas”? Serão criadas só 3. Reenvios não duplicam nada.",
  },
  {
    icon: "wallet",
    title: "Sem receber a mais",
    text: "Um recebimento maior que o saldo da parcela é recusado, na tela e no banco de dados.",
  },
];

export function TrustSection() {
  return (
    <section id="seguranca" className="bg-canvas py-18 sm:py-26">
      <Container>
        <SectionHeading eyebrow="Segurança e confiança" title="Seu dinheiro tratado com o cuidado que ele merece">
          As regras financeiras do Thigu foram feitas para não deixar margem a erro — e são conferidas na tela e no
          banco de dados.
        </SectionHeading>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((it) => (
            <Reveal key={it.title} className="flex items-start gap-4 rounded-2xl border border-line bg-white p-6">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-navy text-white">
                <Icon name={it.icon} />
              </span>
              <div>
                <h3 className="mb-1.5 text-[17px] font-bold text-navy">{it.title}</h3>
                <p className="text-[15px] text-muted">{it.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
