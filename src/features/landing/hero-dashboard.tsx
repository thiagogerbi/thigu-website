import { Icon } from "@/components/ui/icon";

const MENU = ["Visão geral", "Clientes", "Negociações", "Propostas", "Financeiro", "Tarefas"];
const BARS = [38, 52, 44, 68, 60, 82, 74];
const PRIORITIES = [
  { tag: "Proposta", tone: "bg-primary-50 text-primary-700", text: "João Pereira aguardando resposta" },
  { tag: "Receber", tone: "bg-money-50 text-money-700", text: "Parcela 2 de 3 · Clínica Sorriso" },
  { tag: "Tarefa", tone: "bg-warn-50 text-warn", text: "Ligar para Marina às 15h" },
];

/** Ilustração do painel do sistema (HTML, não imagem: fica nítida em qualquer tela). */
export function HeroDashboard() {
  return (
    <div
      className="relative"
      role="img"
      aria-label="Ilustração do painel do Thigu Gestão com vendido, recebido e falta receber"
    >
      <div className="grid overflow-hidden rounded-[18px] bg-white text-ink shadow-deep ring-1 ring-white/10 sm:grid-cols-[150px_1fr] lg:[transform:perspective(1400px)_rotateY(-6deg)_rotateX(2deg)] lg:origin-left">
        <div className="hidden flex-col gap-1 bg-navy-700 px-2.5 py-4 sm:flex">
          <span className="mb-3 flex items-center gap-2 px-1 font-display text-xs font-bold leading-tight text-white">
            <span className="grid size-7.5 shrink-0 place-items-center rounded-lg bg-primary text-xs font-extrabold">
              AE
            </span>
            Aurora
            <br />
            Estúdio
          </span>
          {MENU.map((m, i) => (
            <span
              key={m}
              className={
                i === 0
                  ? "rounded-lg bg-white/12 px-2.5 py-1.5 text-[12.5px] font-semibold text-white"
                  : "px-2.5 py-1.5 text-[12.5px] text-[#c9d6ea]"
              }
            >
              {m}
            </span>
          ))}
        </div>
        <div className="min-w-0 bg-canvas px-5 pb-5 pt-4.5">
          <p className="text-xs text-muted">Bom dia, Ana 👋</p>
          <p className="mb-3 mt-0.5 font-display text-[17px] font-extrabold text-navy">Visão geral de novembro</p>
          <div className="grid grid-cols-3 gap-2">
            <Kpi label="Vendido" value="R$ 12.400" />
            <Kpi label="Recebido" value="R$ 8.150" money />
            <Kpi label="Falta receber" value="R$ 4.250" />
          </div>
          <div
            className="my-3 flex h-16 items-end gap-1.5 rounded-[10px] border border-line bg-white px-2.5 py-2"
            aria-hidden="true"
          >
            {BARS.map((h, i) => (
              <i
                key={i}
                className={`flex-1 rounded-t ${i >= 5 ? "bg-money" : "bg-[#c8d6fb]"}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <p className="mb-1.5 font-display text-xs font-bold text-navy">Prioridades de hoje</p>
          <ul className="grid gap-1.5">
            {PRIORITIES.map((p) => (
              <li
                key={p.text}
                className="flex items-center gap-2 truncate rounded-lg border border-line bg-white px-2.5 py-1.5 text-[11.5px]"
              >
                <span className={`shrink-0 rounded-full px-1.5 py-0.5 text-[10px] font-bold ${p.tone}`}>{p.tag}</span>
                <span className="truncate">{p.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute -bottom-10 left-2 flex max-w-[calc(100%-16px)] animate-float items-center gap-2.5 rounded-2xl border-l-4 border-money bg-white px-3.5 py-3 text-[13px] leading-snug text-ink shadow-deep sm:max-w-[290px] lg:-bottom-6 lg:-left-7">
        <Icon name="check" className="size-6.5 text-money" />
        <div>
          <b className="block text-navy">Recebimento de R$ 200,00 registrado.</b>
          <span className="text-muted">Faltam R$ 300,00.</span>
        </div>
      </div>
      <div className="absolute -top-5.5 right-2 flex animate-float-slow items-center gap-2.5 rounded-2xl bg-white px-3.5 py-3 text-[13px] leading-snug shadow-deep lg:-right-4.5">
        <span className="grid size-9 place-items-center rounded-[10px] bg-primary-50 text-primary">
          <Icon name="hand" />
        </span>
        <div>
          <b className="block text-navy">Venda fechada</b>
          <span className="text-muted">3 × R$ 500,00</span>
        </div>
      </div>
    </div>
  );
}

function Kpi({ label, value, money = false }: { label: string; value: string; money?: boolean }) {
  return (
    <div
      className={`min-w-0 rounded-[10px] border px-2.5 py-2 ${money ? "border-[#bfe8d9] bg-money-50" : "border-line bg-white"}`}
    >
      <span className="block text-[10.5px] text-muted">{label}</span>
      <b
        className={`tabular whitespace-nowrap font-display text-xs font-extrabold sm:text-sm ${money ? "text-money-700" : "text-navy"}`}
      >
        {value}
      </b>
    </div>
  );
}
