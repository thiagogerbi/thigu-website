import { ThiguMark } from "@/components/brand/thigu-logo";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { Container } from "@/components/ui/section-heading";
import { buttonClass } from "@/components/ui/styles";
import { appLinks } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="bg-canvas pb-18 sm:pb-26">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[20px] bg-navy bg-[radial-gradient(700px_300px_at_100%_0%,rgba(53,99,233,.55),transparent_60%),radial-gradient(600px_300px_at_0%_100%,rgba(24,167,123,.4),transparent_60%)] px-5 py-12 text-center text-white sm:rounded-[28px] sm:px-6 sm:py-18">
          <ThiguMark variant="white" className="mx-auto mb-6 size-16" />
          <h2 className="mx-auto mb-3.5 max-w-[700px] text-[clamp(28px,4vw,42px)] font-extrabold leading-[1.15] text-white">
            Veja seu próximo negócio virar dinheiro no caixa
          </h2>
          <p className="mx-auto max-w-[560px] text-lg text-on-navy">
            Abra a prévia e percorra o caminho completo em poucos minutos. Sem cadastro, sem cartão.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={appLinks.preview} className={buttonClass("primary", "lg", "max-sm:w-full")}>
              Experimentar a prévia
              <Icon name="arrow" className="transition group-hover:translate-x-0.5" />
            </a>
            <a href={appLinks.signIn} className={buttonClass("onDark", "lg", "max-sm:w-full")}>
              Criar minha conta
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
