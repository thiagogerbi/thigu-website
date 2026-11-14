"use client";

import { Reveal } from "@/components/ui/reveal";
import { Container, SectionHeading } from "@/components/ui/section-heading";
import { cx } from "@/components/ui/styles";
import { useTabs } from "@/components/ui/use-tabs";
import {
  BoardMock,
  ClientMock,
  CloseSaleMock,
  ProposalMock,
  ReceiveMock,
  ReviewMock,
} from "@/features/landing/journey-mocks";
import type { ComponentType } from "react";

interface Step {
  name: string;
  hint: string;
  title: string;
  text: string;
  Mock: ComponentType;
}

const STEPS: Step[] = [
  {
    name: "Cadastre o cliente",
    hint: "Nome, contato e observações",
    title: "Todo cliente com uma ficha organizada",
    text: "Guarde nome, telefone, e-mail e anotações. Abra a ficha lateral para ver, num relance, as negociações, propostas e parcelas daquele cliente.",
    Mock: ClientMock,
  },
  {
    name: "Negocie",
    hint: "Acompanhe por etapas",
    title: "Um quadro para ver quem está em cada etapa",
    text: "Mova cada negociação de etapa conforme a conversa avança. Se perder, registre o motivo — e aprenda com isso. Nada de oportunidade esquecida.",
    Mock: BoardMock,
  },
  {
    name: "Envie a proposta",
    hint: "Com seu logotipo e condições",
    title: "Proposta bonita, pronta para enviar ou imprimir",
    text: "Itens, valores e condições comerciais já preenchidos. O cabeçalho leva o logotipo e os dados da sua empresa. Quando o cliente disser “sim”, é só registrar o aceite.",
    Mock: ProposalMock,
  },
  {
    name: "Feche a venda",
    hint: "À vista ou parcelado",
    title: "Fechou? Combine como o cliente vai pagar",
    text: "Escolha à vista ou parcelado e veja a prévia das parcelas na hora. O sistema divide os centavos certinho — a soma sempre bate com o total.",
    Mock: CloseSaleMock,
  },
  {
    name: "Confira as parcelas",
    hint: "O financeiro aprova",
    title: "Quem vende propõe. Quem cuida do dinheiro confere.",
    text: "A venda só vira “a receber” depois que o financeiro (ou o dono) confere as parcelas. Assim ninguém conta com um dinheiro que ainda não foi combinado direito.",
    Mock: ReviewMock,
  },
  {
    name: "Registre o recebimento",
    hint: "Inteiro ou em partes",
    title: "O dinheiro entrou? Registre em dois cliques",
    text: "Recebeu tudo ou só uma parte? O Thigu guarda o valor, mostra quanto falta e atualiza o caixa. Errou? Dá para desfazer com um motivo — o histórico fica guardado.",
    Mock: ReceiveMock,
  },
];

export function JourneySection() {
  const { active, tabProps, panelProps } = useTabs(STEPS.length, "jornada");

  return (
    <section id="como-funciona" className="bg-canvas py-18 sm:py-26">
      <Container>
        <SectionHeading eyebrow="Como funciona" title="Do primeiro contato ao dinheiro no caixa, em 6 passos">
          Clique em cada etapa para ver o que acontece na tela. É exatamente o caminho que você percorre no sistema.
        </SectionHeading>

        <Reveal className="grid items-start gap-8 md:grid-cols-[300px_1fr] lg:grid-cols-[340px_1fr]">
          <div
            role="tablist"
            aria-label="Etapas"
            className="-mx-1 grid auto-cols-[minmax(210px,1fr)] grid-flow-col gap-2 overflow-x-auto px-1 pb-3 max-md:snap-x max-md:snap-mandatory md:grid-flow-row md:overflow-visible md:pb-0"
          >
            {STEPS.map((s, i) => {
              const on = active === i;
              const money = i === STEPS.length - 1;
              return (
                <button
                  key={s.name}
                  type="button"
                  {...tabProps(i)}
                  className={cx(
                    "flex snap-start items-center gap-3.5 rounded-[14px] border-[1.5px] bg-white px-4 py-3.5 text-left transition",
                    on
                      ? money
                        ? "border-money shadow-[0_10px_24px_-14px_rgba(24,167,123,.7)] md:translate-x-1"
                        : "border-primary shadow-[0_10px_24px_-14px_rgba(53,99,233,.7)] md:translate-x-1"
                      : "border-line hover:border-[#b9c8ea]",
                  )}
                >
                  <span
                    className={cx(
                      "grid size-9 shrink-0 place-items-center rounded-[10px] font-display text-[15px] font-extrabold transition",
                      on
                        ? money
                          ? "bg-money text-white"
                          : "bg-primary text-white"
                        : money
                          ? "bg-money-50 text-money-700"
                          : "bg-primary-50 text-primary-700",
                    )}
                  >
                    {i + 1}
                  </span>
                  <span>
                    <b className="block font-display text-base text-navy">{s.name}</b>
                    <small className="text-[13.5px] text-muted">{s.hint}</small>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="rounded-[20px] border border-line bg-white p-5 shadow-soft sm:p-8">
            {STEPS.map(({ title, text, Mock }, i) => (
              <div
                key={title}
                {...panelProps(i)}
                className="grid animate-fade-in items-center gap-8 lg:grid-cols-[1fr_1.1fr] [&[hidden]]:hidden"
              >
                <div>
                  <h3 className="mb-3 text-2xl font-extrabold leading-tight text-navy">{title}</h3>
                  <p className="text-muted">{text}</p>
                </div>
                <Mock />
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
