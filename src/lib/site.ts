/** Configuração do site. O endereço do sistema vem de NEXT_PUBLIC_APP_URL (veja .env.example). */
export const APP_URL = (process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000").replace(/\/$/, "");

export const appLinks = {
  preview: `${APP_URL}/previa`,
  signIn: `${APP_URL}/entrar`,
} as const;

export const siteNav = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#recursos", label: "Recursos" },
  { href: "#equipe", label: "Para sua equipe" },
  { href: "#sua-marca", label: "Sua marca" },
  { href: "#seguranca", label: "Segurança" },
  { href: "#duvidas", label: "Dúvidas" },
] as const;
