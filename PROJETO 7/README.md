# 🏋️ FitLive — Treino Fitness com Videoconferência em Tempo Real

> Conecte instrutores e alunos em sessões de treino ao vivo com videoconferência integrada, cronômetro e contador de repetições — tudo em um único app mobile.

---

## 💡 Proposta de Valor

O FitLive resolve um problema real do personal trainer moderno: **conduzir treinos remotos com a mesma qualidade de uma sessão presencial**.

Diferente de usar Zoom + app de treino separados, o FitLive unifica em uma única tela:

- 📹 **Videoconferência via Jitsi Meet** — sem custo de licença, sem limite de participantes
- ⏱️ **Cronômetro integrado** — controle o tempo de cada exercício sem sair da tela
- 🔢 **Contador de repetições** — registre cada série em tempo real durante a chamada
- 📊 **Dashboard de desempenho** — acompanhe sessões, clientes ativos e receita gerada
- 👤 **Perfil do instrutor** — bio, especialidades, redes sociais e foto personalizável


---

## 🚀 Instruções de Uso

### Pré-requisitos

- [Node.js](https://nodejs.org/) 18+
- [pnpm](https://pnpm.io/) 9.12+
- [Expo CLI](https://expo.dev/) (instalado via pnpm)
- Dispositivo físico ou emulador (iOS/Android) com o app **Expo Go**

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/fitlive.git
cd fitlive

# Instale as dependências
pnpm install

# Configure as variáveis de ambiente
cp .env.example .env
# Edite o .env com suas credenciais (DATABASE_URL, JWT_SECRET, etc.)
```

### Rodando o projeto

```bash
# Inicia o servidor backend + Metro bundler simultaneamente
pnpm dev

# Ou separadamente:
pnpm dev:server   # Backend Express/tRPC
pnpm dev:metro    # Expo Metro Bundler
```

### Outros comandos úteis

```bash
pnpm android      # Abre no emulador Android
pnpm ios          # Abre no simulador iOS
pnpm test         # Executa os testes com Vitest
pnpm db:push      # Gera e aplica migrações no banco de dados
pnpm qr           # Gera QR Code para testar no dispositivo físico
```

### Variáveis de Ambiente

| Variável | Descrição |
|----------|-----------|
| `DATABASE_URL` | String de conexão MySQL/TiDB |
| `JWT_SECRET` | Segredo para assinatura de sessão |
| `EXPO_PUBLIC_API_BASE_URL` | URL base da API |
| `EXPO_PUBLIC_OAUTH_PORTAL_URL` | URL do portal de login OAuth |

---

## 🛠️ Stack Tecnológica

| Camada | Tecnologia |
|--------|-----------|
| Mobile | React Native + Expo 54 |
| Navegação | Expo Router (file-based) |
| Estilização | NativeWind (Tailwind para RN) |
| Videoconferência | Jitsi Meet (`react-native-jitsi-meet`) |
| API | tRPC + React Query |
| Backend | Express + TypeScript |
| Banco de Dados | MySQL / TiDB via Drizzle ORM |
| Autenticação | OAuth (Manus) + SecureStore |
| Testes | Vitest + Testing Library |

---

## 📂 Estrutura do Projeto

```
fitlive/
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx          # Tela inicial (Home)
│   │   ├── training-setup.tsx # Configurar nova sessão
│   │   ├── training-session.tsx # Sessão de treino ao vivo
│   │   ├── dashboard.tsx      # Estatísticas e gráficos
│   │   └── profile.tsx        # Perfil do instrutor
│   ├── login.tsx
│   └── signup.tsx
├── components/
│   ├── timer.tsx              # Cronômetro
│   ├── repetition-counter.tsx # Contador de repetições
│   ├── jitsi-view.tsx         # Componente de videoconferência
│   ├── bar-chart.tsx          # Gráfico de barras
│   └── line-chart.tsx         # Gráfico de linhas
├── server/                    # Backend Express + tRPC
├── drizzle/                   # Schema e migrações do banco
└── hooks/                     # Custom hooks (auth, profile, stats)
```

---

