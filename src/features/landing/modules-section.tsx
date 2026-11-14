import { Icon, type IconName } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { Container, SectionHeading } from "@/components/ui/section-heading";
import { cx } from "@/components/ui/styles";
import { type Feature, FeatureCard } from "@/features/landing/feature-card";

interface Module {
  name: string;
  tagline: string;
  icon: IconName;
  tone: "crm" | "fin";
  items: [string, string][];
}

const CRM: Module = {
  name: "CRM",
  tagline: "Relacionamento e vendas",
  icon: "users",
  tone: "crm",
  items: [
    ["Clientes", "cadastro, ficha lateral e histórico completo."],
    ["Negociações", "quadro por etapas e motivo de perda."],
    ["Propostas", "editor, numeração automática, impressão e aceite."],
    ["Fechamento de venda", "à vista ou parcelado, com prévia das parcelas."],
    ["Tarefas", "lembretes do que fazer e quando."],
  ],
};

const FIN: Module = {
  name: "Financeiro",
  tagline: "Dinheiro que entra e sai",
  icon: "wallet",
  tone: "fin",
  items: [
    ["A receber", "parcelas ligadas ao cliente e à venda."],
    ["A pagar", "despesas da empresa com vencimento."],
    ["Recebimentos parciais", "registre o que entrou e veja o que falta."],
    ["Caixa", "tudo o que entrou menos tudo o que saiu."],
    ["Previsão", "como estará o caixa em 7, 30 e 90 dias."],
  ],
};

const EXTRAS: Feature[] = [
  {
    icon: "compass",
    title: "Prioridades do dia",
    text: "A visão geral mostra o que precisa da sua atenção hoje: propostas paradas, parcelas vencendo e tarefas.",
  },
  {
    icon: "calendar",
    title: "Alertas que levam ao lugar certo",
    text: "Clicou num aviso de parcela atrasada? Abre a lista já filtrada, pronta para agir.",
  },
  {
    icon: "building",
    title: "Várias empresas, um login",
    text: "Participa de mais de um negócio? Troque de empresa pelo seletor “Minha empresa”.",
  },
  {
    icon: "phone",
    title: "Feito para o celular",
    text: "Todas as telas cabem numa tela pequena. Registre um recebimento de onde estiver.",
  },
];

function ModuleCard({ m }: { m: Module }) {
  const crm = m.tone === "crm";
  return (
    <Reveal className="relative overflow-hidden rounded-[20px] border border-line bg-white p-6 shadow-sm sm:p-8">
      <span className={cx("absolute inset-x-0 top-0 h-1", crm ? "bg-primary" : "bg-money")} aria-hidden="true" />
      <header className="mb-5 flex items-center gap-3.5">
        <span
          className={cx(
            "grid size-13 place-items-center rounded-[14px]",
            crm ? "bg-primary-50 text-primary" : "bg-money-50 text-money",
          )}
        >
          <Icon name={m.icon} className="size-6.5" />
        </span>
        <div>
          <h3 className="text-[26px] font-extrabold leading-tight tracking-[-0.03em] text-navy">
            thigu <span className={crm ? "text-primary" : "text-money"}>{m.name}</span>
          </h3>
          <p className="text-[15px] text-muted">{m.tagline}</p>
        </div>
      </header>
      <ul className="grid gap-3">
        {m.items.map(([title, text]) => (
          <li key={title} className="relative pl-5 text-muted">
            <span
              aria-hidden="true"
              className={cx("absolute left-0 top-[0.6em] size-2 rounded-[3px]", crm ? "bg-primary" : "bg-money")}
            />
            <b className="text-ink">{title}</b> — {text}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export function ModulesSection() {
  return (
    <section id="recursos" className="py-18 sm:py-26">
      <Container>
        <SectionHeading eyebrow="Recursos" title="Dois módulos que conversam entre si">
          Um único login. O que acontece nas vendas aparece no financeiro automaticamente — sem digitar nada duas vezes.
        </SectionHeading>

        <div className="grid items-stretch gap-5 lg:grid-cols-[1fr_auto_1fr]">
          <ModuleCard m={CRM} />
          <div
            aria-hidden="true"
            className="flex items-center justify-center gap-2 text-center text-xs font-bold uppercase tracking-[0.06em] text-muted lg:max-w-[110px] lg:flex-col"
          >
            <span>venda fechada</span>
            <span className="grid size-11 place-items-center rounded-full bg-gradient-to-br from-primary to-money text-white shadow-soft max-lg:rotate-90">
              <Icon name="arrow" />
            </span>
            <span>contas a receber</span>
          </div>
          <ModuleCard m={FIN} />
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {EXTRAS.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </Container>
    </section>
  );
}
