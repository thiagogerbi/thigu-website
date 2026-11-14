import { CheckList } from "@/components/ui/check-list";
import { Reveal } from "@/components/ui/reveal";
import { Container, SectionHeading } from "@/components/ui/section-heading";
import { cx } from "@/components/ui/styles";

const COLUMNS = [
  {
    label: "Já faz",
    pill: "bg-money-50 text-money-700",
    kind: "yes" as const,
    items: [
      "Clientes, negociações e tarefas",
      "Propostas com sua marca",
      "Vendas à vista e parceladas",
      "Contas a receber e a pagar",
      "Caixa e previsão de 7/30/90 dias",
      "Equipe com papéis e várias empresas",
    ],
  },
  {
    label: "Nos planos",
    pill: "bg-primary-50 text-primary-700",
    kind: "soon" as const,
    items: [
      "Receitas e despesas recorrentes",
      "Importar e exportar planilhas",
      "Lembretes simples",
      "Convite de pessoas por e-mail",
    ],
  },
  {
    label: "Não é o foco",
    pill: "bg-[#f1f3f7] text-muted",
    kind: "no" as const,
    items: [
      "Integração bancária e cobrança automática",
      "Emissão de nota fiscal",
      "Controle de estoque",
      "ERP completo",
    ],
  },
];

export function ScopeSection() {
  return (
    <section id="escopo" className="py-18 sm:py-26">
      <Container>
        <SectionHeading eyebrow="Com transparência" title="O que o Thigu faz — e o que não faz">
          Preferimos ser simples e bem feitos a tentar ser tudo. Veja o que já está no sistema e o que está nos planos.
        </SectionHeading>
        <div className="grid gap-5 md:grid-cols-3">
          {COLUMNS.map((c) => (
            <Reveal key={c.label} className="rounded-2xl border border-line bg-white p-7">
              <h3 className="mb-4.5">
                <span
                  className={cx(
                    "inline-block rounded-full px-3 py-1.5 font-sans text-sm font-bold tracking-normal",
                    c.pill,
                  )}
                >
                  {c.label}
                </span>
              </h3>
              <CheckList items={c.items} kind={c.kind} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
