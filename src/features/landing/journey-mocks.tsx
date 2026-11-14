import { cx } from "@/components/ui/styles";
import type { ReactNode } from "react";

/* Pequenas telas de exemplo usadas na seção "Como funciona". Puramente ilustrativas. */

function Frame({ title, white = false, children }: { title?: string; white?: boolean; children: ReactNode }) {
  return (
    <div className={cx("grid gap-2.5 rounded-2xl border border-line p-4 text-sm", white ? "bg-white" : "bg-canvas")}>
      {title && <div className="border-b border-line pb-2 font-display text-sm font-bold text-navy">{title}</div>}
      {children}
    </div>
  );
}

function Field({ label, value, wrap = false }: { label: string; value: string; wrap?: boolean }) {
  return (
    <div className="grid min-w-0 gap-1">
      <span className="text-xs font-semibold text-muted">{label}</span>
      <span className={cx("rounded-lg border border-line bg-white px-2.5 py-2", wrap ? "text-muted" : "truncate")}>
        {value}
      </span>
    </div>
  );
}

function Actions({ children }: { children: ReactNode }) {
  return <div className="mt-1 flex flex-wrap justify-end gap-2">{children}</div>;
}

function Btn({ tone = "primary", children }: { tone?: "primary" | "ghost" | "money"; children: ReactNode }) {
  const t = {
    primary: "bg-primary text-white",
    money: "bg-money text-white",
    ghost: "border border-line bg-white text-navy",
  }[tone];
  return <span className={cx("rounded-[9px] px-3.5 py-2 text-[13px] font-semibold", t)}>{children}</span>;
}

function Segmented({ options, active }: { options: [string, string]; active: 0 | 1 }) {
  return (
    <div className="grid grid-cols-2 rounded-[10px] border border-line bg-white p-[3px] text-center text-[13px] font-semibold text-muted">
      {options.map((o, i) => (
        <span key={o} className={cx("rounded-[7px] py-1.5", i === active && "bg-primary-50 text-primary-700")}>
          {o}
        </span>
      ))}
    </div>
  );
}

function Installments({ dates = false }: { dates?: boolean }) {
  const due = ["10/12", "10/01", "10/02"];
  return (
    <ul className="grid gap-1.5">
      {due.map((d, i) => (
        <li
          key={d}
          className="flex justify-between gap-2 rounded-lg border border-line bg-white px-2.5 py-2 text-[13px]"
        >
          <span>
            Parcela {i + 1} de 3{dates && ` · ${d}`}
          </span>
          <b className="tabular text-navy">R$ 500,00</b>
        </li>
      ))}
    </ul>
  );
}

export function ClientMock() {
  return (
    <Frame title="Novo cliente">
      <Field label="Nome" value="João Pereira" />
      <div className="grid grid-cols-2 gap-2.5">
        <Field label="Telefone" value="(11) 98765-4321" />
        <Field label="Responsável" value="Bruno" />
      </div>
      <Field label="Observações" value="Quer reformar a fachada da loja até dezembro." wrap />
      <Actions>
        <Btn tone="ghost">Cancelar</Btn>
        <Btn>Salvar cliente</Btn>
      </Actions>
    </Frame>
  );
}

const BOARD = [
  {
    stage: "Primeiro contato",
    cards: [
      ["Marina Alves", "R$ 2.800"],
      ["Padaria Bom Dia", "R$ 900"],
    ],
  },
  { stage: "Conversando", cards: [["Clínica Sorriso", "R$ 4.200"]] },
  { stage: "Proposta enviada", cards: [["João Pereira", "R$ 1.500"]], hi: true },
  { stage: "Fechado", cards: [["Loja Ventura", "R$ 3.100"]], won: true },
];

export function BoardMock() {
  return (
    <div className="grid grid-cols-2 gap-2 rounded-2xl border border-line bg-canvas p-4 sm:grid-cols-4">
      {BOARD.map((col) => (
        <div
          key={col.stage}
          className={cx(
            "grid content-start gap-1.5 rounded-[10px] p-2 sm:min-h-[170px]",
            col.hi ? "bg-primary-50" : "bg-[#eaeef6]",
          )}
        >
          <b className="text-[11.5px] font-bold leading-tight text-muted">{col.stage}</b>
          {col.cards.map(([name, value]) => (
            <span
              key={name}
              className={cx(
                "rounded-lg border bg-white px-2 py-1.5 text-xs font-semibold leading-snug text-navy",
                col.hi && "border-primary shadow-[0_6px_14px_-8px_rgba(53,99,233,.8)]",
                col.won && "border-[#bfe8d9] bg-money-50",
                !col.hi && !col.won && "border-line",
              )}
            >
              {name}
              <small className="block font-medium text-muted">{value}</small>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export function ProposalMock() {
  return (
    <Frame white>
      <div className="flex items-center gap-2.5 border-b-2 border-primary pb-2.5">
        <span className="grid size-9.5 place-items-center rounded-[9px] bg-primary font-display text-sm font-extrabold text-white">
          AE
        </span>
        <div>
          <b className="font-display text-navy">Aurora Estúdio</b>
          <small className="block text-xs text-muted">Proposta nº 0042 · 14/11/2026</small>
        </div>
      </div>
      <p className="text-[13px] text-muted">
        Para: <b className="text-ink">João Pereira</b>
      </p>
      {[
        ["Projeto da fachada", "R$ 1.100,00"],
        ["Instalação", "R$ 400,00"],
      ].map(([item, value]) => (
        <div key={item} className="flex justify-between gap-2 border-b border-dashed border-line pb-1.5 text-[13.5px]">
          <span>{item}</span>
          <span className="tabular">{value}</span>
        </div>
      ))}
      <div className="flex justify-between pt-1 text-[15px]">
        <span>Total</span>
        <b className="tabular font-display text-navy">R$ 1.500,00</b>
      </div>
      <Actions>
        <Btn tone="ghost">Imprimir</Btn>
        <Btn>Registrar aceite do cliente</Btn>
      </Actions>
    </Frame>
  );
}

export function CloseSaleMock() {
  return (
    <Frame title="Fechar venda · João Pereira">
      <Segmented options={["À vista", "Parcelado"]} active={1} />
      <div className="grid grid-cols-2 gap-2.5">
        <Field label="Parcelas" value="3 vezes" />
        <Field label="1º vencimento" value="10/12/2026" />
      </div>
      <Installments dates />
      <Actions>
        <Btn>Fechar venda</Btn>
      </Actions>
    </Frame>
  );
}

export function ReviewMock() {
  const steps = [
    { label: "Vendedor propôs", state: "done" },
    { label: "Financeiro confere", state: "now" },
    { label: "Contas criadas", state: "next" },
  ] as const;
  return (
    <Frame>
      <ol className="grid grid-cols-3 gap-1.5 text-xs font-semibold text-muted">
        {steps.map((s, i) => (
          <li
            key={s.label}
            className={cx("flex flex-col items-center gap-1 text-center", s.state === "now" && "text-primary-700")}
          >
            <span
              className={cx(
                "grid size-7 place-items-center rounded-full border-2 bg-white text-xs",
                s.state === "done" && "border-money bg-money text-white",
                s.state === "now" && "border-primary text-primary-700 shadow-[0_0_0_4px_var(--color-primary-50)]",
                s.state === "next" && "border-line",
              )}
            >
              {s.state === "done" ? "✓" : i + 1}
            </span>
            {s.label}
          </li>
        ))}
      </ol>
      <p className="rounded-[10px] border border-[#f3dcae] bg-warn-50 px-3 py-2 text-[13px] text-[#6b4206]">
        Objetivo: criar as contas a receber desta venda. <b>Quem precisa agir: Carla (Financeiro).</b>
      </p>
      <Installments />
      <Actions>
        <Btn tone="money">Criar 3 parcelas a receber</Btn>
      </Actions>
    </Frame>
  );
}

export function ReceiveMock() {
  return (
    <Frame title="Registrar recebimento · Parcela 1 de 3">
      <Segmented options={["Recebi tudo", "Recebi uma parte"]} active={1} />
      <Field label="Valor recebido" value="R$ 200,00" />
      <div className="h-2.5 overflow-hidden rounded-full bg-[#e6ebf3]">
        <i className="block h-full w-2/5 rounded-full bg-money" />
      </div>
      <p className="flex justify-between text-[12.5px] font-semibold text-muted">
        <span className="text-money-700">Recebido R$ 200,00</span>
        <span>Faltam R$ 300,00</span>
      </p>
      <Actions>
        <Btn tone="money">Registrar recebimento</Btn>
      </Actions>
    </Frame>
  );
}
