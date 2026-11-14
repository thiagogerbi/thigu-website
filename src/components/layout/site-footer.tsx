import { ThiguLogo } from "@/components/brand/thigu-logo";
import { Container } from "@/components/ui/section-heading";
import { appLinks } from "@/lib/site";

const COLUMNS = [
  {
    title: "Produto",
    links: [
      { href: "#como-funciona", label: "Como funciona" },
      { href: "#recursos", label: "Recursos" },
      { href: "#sua-marca", label: "Sua marca" },
    ],
  },
  {
    title: "Confiança",
    links: [
      { href: "#seguranca", label: "Segurança" },
      { href: "#escopo", label: "O que faz" },
      { href: "#duvidas", label: "Dúvidas" },
    ],
  },
  {
    title: "Acesso",
    links: [
      { href: appLinks.preview, label: "Prévia" },
      { href: appLinks.signIn, label: "Entrar" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-navy-900 pb-7 pt-14 text-on-navy-muted">
      <Container className="flex flex-wrap justify-between gap-10">
        <div>
          <a href="#topo" aria-label="Thigu Gestão — voltar ao topo" className="rounded-lg">
            <ThiguLogo dark />
          </a>
          <p className="mt-3.5 text-[15px]">Gestão simples. Negócios em movimento.</p>
        </div>
        <nav aria-label="Rodapé" className="flex flex-wrap gap-8 sm:gap-14">
          {COLUMNS.map((col) => (
            <div key={col.title} className="grid content-start gap-2">
              <b className="mb-1 font-display text-white">{col.title}</b>
              {col.links.map((l) => (
                <a key={l.label} href={l.href} className="text-[15px] hover:text-white">
                  {l.label}
                </a>
              ))}
            </div>
          ))}
        </nav>
      </Container>
      <Container className="mt-10">
        <p className="border-t border-white/10 pt-6 text-sm">
          © {new Date().getFullYear()} Thigu Gestão. Feito para pequenas empresas brasileiras.
        </p>
      </Container>
    </footer>
  );
}
