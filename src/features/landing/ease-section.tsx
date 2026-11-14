import { Container, SectionHeading } from "@/components/ui/section-heading";
import { type Feature, FeatureCard } from "@/features/landing/feature-card";

const FEATURES: Feature[] = [
  {
    icon: "chat",
    title: "Palavras do dia a dia",
    text: "“Registrar recebimento”, “Falta receber”, “Recebi uma parte”. Nada de jargão contábil.",
  },
  {
    icon: "compass",
    title: "Guia passo a passo",
    text: "Um roteiro de 5 passos com o botão “Me mostre”, que leva à tela certa e destaca onde clicar.",
  },
  {
    icon: "check",
    title: "Erros explicados na hora",
    text: "Digitou um valor maior que o saldo? O aviso aparece ao lado do campo e some quando você corrige.",
  },
  {
    icon: "history",
    title: "Errou? Dá para desfazer",
    text: "Recebimentos e pagamentos podem ser desfeitos com um motivo, sem apagar o histórico.",
  },
  {
    icon: "phone",
    title: "Cabe na palma da mão",
    text: "Pensado para telas de celular de 375 px: nada fica cortado ou escondido.",
  },
  {
    icon: "users",
    title: "Acessível",
    text: "Textos com alto contraste, foco visível para quem usa teclado e letras grandes o suficiente.",
  },
];

export function EaseSection() {
  return (
    <section id="facil" className="py-18 sm:py-26">
      <Container>
        <SectionHeading
          eyebrow="Fácil de verdade"
          title="Pensado para quem tem pouco tempo e pouca paciência com tecnologia"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </Container>
    </section>
  );
}
