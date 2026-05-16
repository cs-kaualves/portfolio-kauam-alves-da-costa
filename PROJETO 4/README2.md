<div align="center">

# 🚗 VRCiA
### Veículos Robóticos e Consciência Artificial

*Um experimento ético sobre decisões de veículos autônomos em situações críticas.*

[![AI Studio](https://img.shields.io/badge/AI%20Studio-Publicado-blue?style=for-the-badge)](https://ai.studio/apps/a4ce9c64-9287-471b-92a8-a6668f6d02ae)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev)
[![Gemini](https://img.shields.io/badge/Gemini-API-4285F4?style=for-the-badge&logo=google)](https://ai.google.dev)

</div>

---

## 📌 Sobre o Projeto

O **VRCiA** é uma aplicação interativa que coloca o usuário no papel de um algoritmo de decisão de veículos autônomos. Inspirado no conceito do *Trolley Problem* e no experimento **MIT Moral Machine**, o app apresenta 6 cenários éticos reais onde uma escolha precisa ser feita — e não há resposta certa.

O projeto explora perguntas fundamentais:

- Um carro autônomo deve priorizar passageiros ou pedestres?
- Idade, profissão ou status social devem influenciar decisões algorítmicas?
- O que é mais ético: seguir a lei ou agir moralmente?

---

## 🎮 Cenários Disponíveis

| # | Título | Dilema Central |
|---|--------|----------------|
| 1 | **Falha nos Freios** | Crianças pedestres vs. adultos passageiros |
| 2 | **Escolha de Prioridade** | Idosos pedestres vs. médico em emergência |
| 3 | **Dilema de Valor** | Mulher grávida vs. três executivos |
| 4 | **Lei vs. Ética** | Atropelamento legal vs. animais de estimação |
| 5 | **Prioridade de Gênero?** | Grupo masculino vs. grupo feminino |
| 6 | **Status Social** | Executivos ricos vs. morador de rua |

Ao final, o app gera um **relatório de perfil ético** com estatísticas de quem foi salvo pelo usuário ao longo das escolhas.

---

## 🛠️ Stack Tecnológica

| Tecnologia | Função |
|------------|--------|
| **React 19** | Interface e gerenciamento de estado |
| **TypeScript 5.8** | Tipagem estática |
| **Vite 6** | Bundler e servidor de desenvolvimento |
| **Tailwind CSS 4** | Estilização utilitária |
| **Motion (Framer)** | Animações e transições |
| **Lucide React** | Ícones |
| **Google Gemini API** | IA integrada via `@google/genai` |
| **Express** | Servidor backend auxiliar |

---

## 🚀 Rodando Localmente

**Pré-requisitos:** Node.js

```bash
# 1. Instale as dependências
npm install

# 2. Configure a chave da API Gemini
cp .env.example .env.local
# Edite .env.local e adicione sua GEMINI_API_KEY

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`.

### Scripts disponíveis

```bash
npm run dev      # Desenvolvimento (porta 3000)
npm run build    # Build de produção
npm run preview  # Preview do build
npm run lint     # Checagem de tipos TypeScript
npm run clean    # Remove pasta dist
```

---

## 🌐 Deploy

A aplicação está publicada no **Google AI Studio**:

🔗 [https://ai.studio/apps/a4ce9c64-9287-471b-92a8-a6668f6d02ae](https://ai.studio/apps/a4ce9c64-9287-471b-92a8-a6668f6d02ae)

---

## 🗂️ Estrutura do Projeto

```
vrcia/
├── src/
│   ├── App.tsx          # Componente principal e lógica de estados
│   ├── constants.ts     # Definição dos 6 cenários e atores
│   ├── types.ts         # Interfaces TypeScript (Actor, Scenario, Choice)
│   ├── main.tsx         # Entry point React
│   └── index.css        # Estilos globais
├── index.html
├── vite.config.ts
├── tsconfig.json
├── package.json
├── .env.example         # Template de variáveis de ambiente
└── .gitignore
```

---

## ⚙️ Variáveis de Ambiente

Crie um arquivo `.env.local` com base no `.env.example`:

```env
GEMINI_API_KEY=sua_chave_aqui
```

---

## 🎨 Funcionalidades

- ✅ **6 dilemas éticos** com atores detalhados (nome, idade, profissão, características)
- ✅ **Modo escuro/claro** com persistência via `localStorage`
- ✅ **Barra de progresso** ao longo dos cenários
- ✅ **Estatísticas finais** — perfil ético baseado nas escolhas
- ✅ **Animações fluidas** com a biblioteca Motion
- ✅ **Design responsivo** para mobile e desktop
- ✅ **IA integrada** via Google Gemini API

---

## 📄 Licença

Distribuído sob a licença **Apache-2.0**.
