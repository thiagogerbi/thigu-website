"use client";

import { type CheckItem, CheckList } from "@/components/ui/check-list";
import { Reveal } from "@/components/ui/reveal";
import { Container, SectionHeading } from "@/components/ui/section-heading";
import { cx } from "@/components/ui/styles";
import { useTabs } from "@/components/ui/use-tabs";

/** As mesmas pessoas do "Experimente como" da prévia do sistema. */
const ROLES: {
  person: string;
  role: string;
  title: string;
  color: string;
  text: string;
  can: (string | CheckItem)[];
}[] = [
  {
    person: "Ana",
    role: "Dona",
    title: "Administradora / dona",
    color: "bg-navy",
    text: "Pode tudo — inclusive cadastrar membros e definir papéis. Numa empresa pequena, faz o fluxo inteiro sozinha, do cliente ao recebimento.",
    can: [
      "Vê todos os números da empresa",
      "Adiciona pessoas e escolhe papéis",
      "Personaliza logotipo, cores e dados",
      "Fecha vendas e confere parcelas",
    ],
  },
  {
    person: "Bruno",
    role: "Vendedor",
    title: "Vendedor",
    color: "bg-primary",
    text: "Foca em vender. Cuida dos próprios clientes e negociações, monta propostas e fecha vendas propondo as parcelas.",
    can: [
      "Os próprios clientes e negociações",
      "Propostas, aceite e fechamento",
      "Acompanha as parcelas das próprias vendas",
      { text: "Não vê contas a pagar nem lança despesas", kind: "no" },
    ],
  },
  {
    person: "Carla",
    role: "Financeiro",
    title: "Financeiro",
    color: "bg-money",
    text: "Cuida do dinheiro. A ação principal na tela é “Registrar recebimento” — sem distrações de vendas.",
    can: [
      "Confere vendas e cria contas a receber",
      "Cadastra despesas",
      "Registra e desfaz recebimentos e pagamentos",
      "Consulta os clientes",
    ],
  },
  {
    person: "Diego",
    role: "Gestor comercial",
    title: "Gestor comercial",
    color: "bg-[#6d4ad8]",
    text: "Lidera o time de vendas. Enxerga e ajuda em todas as negociações, sem mexer no financeiro.",
    can: [
      "Vê e edita clientes e negociações de todos",
      "Fecha vendas",
      "Acompanha parcelas (somente leitura)",
      { text: "Não registra recebimentos", kind: "no" },
    ],
  },
];

export function RolesSection() {
  const { active, tabProps, panelProps } = useTabs(ROLES.length, "papeis");

  return (
    <section id="equipe" className="py-18 sm:py-26">
      <Container>
        <SectionHeading eyebrow="Para sua equipe" title="Cada pessoa vê o que precisa — e só isso">
          Dê a cada pessoa um ou mais papéis. As telas se adaptam: o vendedor vê os próprios clientes, o financeiro vê
          as contas, e o dono vê tudo.
        </SectionHeading>

        <Reveal className="mx-auto grid max-w-[980px] gap-6 md:grid-cols-[300px_1fr]">
          <div role="tablist" aria-label="Papéis" className="grid content-start gap-2 max-md:grid-cols-2">
            {ROLES.map((r, i) => (
              <button
                key={r.person}
                type="button"
                {...tabProps(i)}
                className={cx(
                  "flex items-center gap-3 rounded-[14px] border-[1.5px] px-3.5 py-3 text-left transition",
                  active === i ? "border-navy bg-canvas" : "border-line bg-white hover:border-[#b9c8ea]",
                )}
              >
                <span
                  className={cx(
                    "grid size-10.5 shrink-0 place-items-center rounded-full font-display text-base font-extrabold text-white",
                    r.color,
                  )}
                >
                  {r.person[0]}
                </span>
                <span>
                  <b className="block font-display text-navy">{r.person}</b>
                  <small className="text-[13.5px] text-muted">{r.role}</small>
                </span>
              </button>
            ))}
          </div>

          {ROLES.map((r, i) => (
            <div
              key={r.person}
              {...panelProps(i)}
              className="animate-fade-in rounded-[20px] border border-line bg-canvas p-6 sm:p-8 [&[hidden]]:hidden"
            >
              <h3 className="mb-2.5 text-2xl font-extrabold text-navy">{r.title}</h3>
              <p className="mb-5 text-[17px] text-muted">{r.text}</p>
              <CheckList items={r.can} />
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
