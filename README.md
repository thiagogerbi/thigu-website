# Thigu Gestão — site

Site institucional do **Thigu Gestão** (CRM + Financeiro para pequenas empresas). Mesma base do sistema:
**Next.js 16, React 19, Tailwind CSS 4 e TypeScript**, com as mesmas cores, fontes (Manrope e Inter) e convenções.

O site é **100% estático** (`output: "export"`): `npm run build` gera a pasta `out/`, que pode ser publicada em
qualquer hospedagem (Vercel, Netlify, GitHub Pages, S3 ou um servidor comum).

## Como rodar

```bash
npm install
npm run dev        # http://localhost:3001 (o sistema usa a 3000)
```

| Comando             | O que faz                                        |
| ------------------- | ------------------------------------------------ |
| `npm run dev`       | Servidor de desenvolvimento na porta 3001        |
| `npm run build`     | Gera o site estático em `out/`                   |
| `npm start`         | Serve a pasta `out/` localmente                  |
| `npm run typecheck` | Verificação de tipos                             |
| `npm run lint`      | ESLint (mesmas regras do sistema)                |
| `npm run format`    | Prettier                                         |
| `npm run check`     | Tipos, lint e formatação, antes de enviar código |

## Endereço do sistema

Os botões "Experimentar a prévia", "Criar minha conta" e "Entrar" apontam para `NEXT_PUBLIC_APP_URL`
(padrão `http://localhost:3000`). Para produção, copie `.env.example` para `.env.local` (ou configure na hospedagem):

```bash
NEXT_PUBLIC_APP_URL=https://app.seudominio.com.br
```

Como o site é estático, o valor é gravado no momento do `npm run build`.

## Estrutura

```
src/
  app/                    layout (fontes, metadados), página única, estilos globais e ícone
  components/
    brand/                logotipo e símbolo Thigu (iguais aos do sistema)
    layout/               cabeçalho (menu do celular) e rodapé
    ui/                   ícones, botões, títulos de seção, lista com marcadores, abas acessíveis, animação ao rolar
  features/landing/       uma seção por arquivo (hero, jornada, módulos, papéis, sua marca, segurança, dúvidas…)
  lib/site.ts             endereço do sistema e itens do menu
```

Convenções do sistema: arquivos em `kebab-case`, um componente principal por arquivo, importações com `@/`.
Componentes interativos (`"use client"`) só onde há estado: cabeçalho, abas da jornada e dos papéis e a demonstração de cor.
