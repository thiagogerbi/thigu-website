import { Icon, type IconName } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";

export interface Feature {
  icon: IconName;
  title: string;
  text: string;
}

export function FeatureCard({ icon, title, text }: Feature) {
  return (
    <Reveal className="rounded-2xl border border-line bg-white p-6 transition hover:-translate-y-0.5 hover:border-[#c9d5ec] hover:shadow-soft">
      <span className="mb-4 grid size-11 place-items-center rounded-xl bg-primary-50 text-primary">
        <Icon name={icon} />
      </span>
      <h3 className="mb-1.5 text-[17px] font-bold text-navy">{title}</h3>
      <p className="text-[15px] text-muted">{text}</p>
    </Reveal>
  );
}
