import { Reveal } from "@/components/ui/reveal";
import { Container, SectionHeading } from "@/components/ui/section-heading";

const FAQ = [
  {
    q: "Preciso entender de tecnologia ou de finanças para usar?",
    a: "Não. O Thigu usa palavras do dia a dia e tem um guia passo a passo que mostra onde clicar. Se você usa WhatsApp, consegue usar o Thigu.",
  },
  {
    q: "Posso testar antes de criar uma conta?",
    a: "Sim. A prévia é navegável, sem login e sem cadastro, com uma empresa de exemplo (Aurora Estúdio) e dados fictícios. Você pode trocar de papel — dona, vendedor, financeiro ou gestor — e recomeçar o exemplo quando quiser.",
  },
  {
    q: "Funciona no celular?",
    a: "Funciona. O Thigu é um sistema web: abre no navegador do computador, do tablet ou do celular, sem instalar nada. As telas foram ajustadas para caber em celulares pequenos.",
  },
  {
    q: "Qual a diferença entre “Vendido” e “Recebido”?",
    a: "“Vendido” é o que o cliente aceitou comprar. “Recebido” é o dinheiro que realmente entrou. Entre os dois fica o “Falta receber”: as parcelas combinadas que ainda vão vencer. Uma venda aguardando conferência do financeiro aparece em “Vendido”, mas ainda não em “A receber”.",
  },
  {
    q: "Posso colocar o logotipo e as cores da minha empresa?",
    a: "Pode. Em “Minha empresa” você envia o logotipo, escolhe a cor da marca e a cor do menu, e preenche os dados que aparecem no cabeçalho das propostas. O sistema ajusta a cor automaticamente se ela ficar clara demais para leitura.",
  },
  {
    q: "Como adiciono as pessoas da minha equipe?",
    a: "Cada pessoa cria a própria conta. Depois, o administrador adiciona o e-mail dela em “Minha empresa” e escolhe os papéis. Uma mesma pessoa pode ter vários papéis.",
  },
  {
    q: "O Thigu emite nota fiscal ou faz cobrança automática?",
    a: "Não. O Thigu foca em organizar clientes, vendas e o dinheiro que entra e sai. Integração bancária, cobrança automática, nota fiscal e estoque estão fora do escopo.",
  },
];

export function FaqSection() {
  return (
    <section id="duvidas" className="bg-canvas py-18 sm:py-26">
      <Container>
        <SectionHeading eyebrow="Dúvidas frequentes" title="Perguntas que todo mundo faz" />
        <Reveal className="mx-auto grid max-w-[820px] gap-3">
          {FAQ.map((item, i) => (
            <details
              key={item.q}
              open={i === 0}
              className="group rounded-[14px] border border-line bg-white px-5.5 transition open:border-[#c9d5ec] open:shadow-sm"
            >
              <summary className="relative cursor-pointer list-none py-5 pr-9 font-display text-[17px] font-bold leading-snug text-navy [&::-webkit-details-marker]:hidden">
                {item.q}
                <span
                  aria-hidden="true"
                  className="absolute right-0 top-1/2 grid size-5.5 -translate-y-1/2 place-items-center rounded-full bg-primary-50 text-primary-700 transition group-open:rotate-45"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="size-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    strokeLinecap="round"
                  >
                    <path d="M12 6v12M6 12h12" />
                  </svg>
                </span>
              </summary>
              <p className="pb-5 text-muted">{item.a}</p>
            </details>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
