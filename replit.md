# Workspace

## Overview

Site institucional da **Paróquia Nossa Senhora Aparecida de Sertãozinho/SP** — um aplicativo React + Vite com páginas para história, sacramentos, missas, capelas, eventos e um painel administrativo simples.

## Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite 7
- **Styling**: Tailwind CSS 4 + shadcn/ui components
- **Routing**: wouter
- **Data**: TanStack Query (React Query)
- **Icons**: lucide-react, react-icons
- **Charts**: recharts
- **Forms**: react-hook-form + zod
- **Package manager**: pnpm (monorepo workspace)

## Structure

```text
artifacts/paroquia-sertaozinho/   # Aplicação web da paróquia
├── src/
│   ├── App.tsx                   # Rotas principais
│   ├── main.tsx                  # Entry point
│   ├── pages/                    # Páginas do site (Home, Historia, Sacramentos, etc.)
│   ├── components/               # Componentes reutilizáveis e UI
│   ├── lib/                      # Utilitários, autenticação e helpers
│   └── index.css                 # Estilos globais + Tailwind
├── public/                       # Imagens, logos, banners e PDFs estáticos
├── package.json                  # Scripts e dependências do app
├── vite.config.ts                # Configuração do Vite
└── tsconfig.json                 # Configuração do TypeScript
```

## Running locally

O app é servido pelo Vite. Para iniciar no Replit:

1. Instale as dependências (se ainda não estiverem instaladas):
   ```bash
   cd artifacts/paroquia-sertaozinho && pnpm install
   ```
2. Inicie o workflow **Start application** (ou rode `PORT=5000 pnpm dev` manualmente dentro de `artifacts/paroquia-sertaozinho`).
3. O app estará disponível em `http://localhost:5000/` e no painel de preview do Replit.

## Scripts

- `pnpm dev` — inicia o servidor de desenvolvimento na porta definida por `PORT` (padrão: 5173)
- `pnpm build` — gera o build de produção em `dist/public`
- `pnpm serve` — preview do build de produção
- `pnpm typecheck` — verificação de tipos com TypeScript

## Environment variables

- `PORT` — porta do servidor de desenvolvimento (usar `5000` no Replit para o preview webview funcionar).
- `BASE_PATH` — caminho base para deploy em subdiretório (padrão: `/`).
- `SESSION_SECRET` — segredo para autenticação do painel administrativo (já configurado nos secrets do Replit).

## Deployment

O app está configurado para deploy como aplicação web (`router = "application"`) no Replit Autoscale. O build é gerado pelo Vite em `artifacts/paroquia-sertaozinho/dist/public`.
