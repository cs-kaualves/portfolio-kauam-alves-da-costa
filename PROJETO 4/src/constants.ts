import { Scenario } from './types';

export const SCENARIOS: Scenario[] = [
  {
    id: 1,
    title: "Situação Crítica: Falha nos Freios",
    description: "O veículo autônomo detecta uma falha total nos freios em alta velocidade. Ele deve escolher entre seguir em frente ou desviar.",
    optionA: {
      label: "Seguir em Frente",
      actors: [
        { id: '1', name: "Criança", emoji: "🧒", details: "Atravessando na faixa", age: 8, occupation: "Estudante", traits: ["Inocente", "Futuro Brilhante"] },
        { id: '2', name: "Criança", emoji: "🧒", details: "Atravessando na faixa", age: 6, occupation: "Estudante", traits: ["Curiosa", "Frágil"] }
      ]
    },
    optionB: {
      label: "Desviar",
      actors: [
        { id: '3', name: "Adulto", emoji: "👨", details: "Passageiro", age: 35, occupation: "Engenheiro", traits: ["Pai de família", "Responsável"] },
        { id: '4', name: "Adulto", emoji: "👩", details: "Passageiro", age: 32, occupation: "Arquiteta", traits: ["Mãe", "Criativa"] }
      ]
    }
  },
  {
    id: 2,
    title: "Escolha de Prioridade",
    description: "Um obstáculo surge repentinamente. O carro deve decidir quem proteger.",
    optionA: {
      label: "Manter Rota",
      actors: [
        { id: '5', name: "Idoso", emoji: "👴", details: "Pedestre", age: 78, occupation: "Aposentado", traits: ["Experiente", "Lento"] },
        { id: '6', name: "Idosa", emoji: "👵", details: "Pedestre", age: 75, occupation: "Aposentada", traits: ["Sábia", "Vulnerável"] }
      ]
    },
    optionB: {
      label: "Sacrificar Passageiros",
      actors: [
        { id: '7', name: "Médico", emoji: "👨‍⚕️", details: "Passageiro em emergência", age: 45, occupation: "Cirurgião", traits: ["Essencial", "Salvador de vidas"] }
      ]
    }
  },
  {
    id: 3,
    title: "Dilema de Valor",
    description: "O carro perde o controle em uma ponte estreita.",
    optionA: {
      label: "Atropelar Pedestre",
      actors: [
        { id: '8', name: "Grávida", emoji: "🤰", details: "Pedestre", age: 28, occupation: "Professora", traits: ["Duas vidas", "Protetora"] }
      ]
    },
    optionB: {
      label: "Cair da Ponte",
      actors: [
        { id: '9', name: "Executivo", emoji: "💼", details: "Passageiro", age: 50, occupation: "CEO", traits: ["Influente", "Rico"] },
        { id: '10', name: "Executivo", emoji: "💼", details: "Passageiro", age: 48, occupation: "Diretor", traits: ["Poderoso", "Focado"] },
        { id: '11', name: "Executivo", emoji: "💼", details: "Passageiro", age: 52, occupation: "Investidor", traits: ["Analítico", "Estrategista"] }
      ]
    }
  },
  {
    id: 4,
    title: "Lei vs. Ética",
    description: "Um grupo de pessoas atravessa o sinal vermelho.",
    optionA: {
      label: "Seguir (Lei)",
      actors: [
        { id: '12', name: "Atleta", emoji: "🏃", details: "Infrator", age: 24, occupation: "Maratonista", traits: ["Saudável", "Rápido"] },
        { id: '13', name: "Atleta", emoji: "🏃", details: "Infrator", age: 26, occupation: "Nadador", traits: ["Forte", "Disciplinado"] },
        { id: '14', name: "Atleta", emoji: "🏃", details: "Infrator", age: 22, occupation: "Ciclista", traits: ["Jovem", "Ágil"] }
      ]
    },
    optionB: {
      label: "Desviar (Ética)",
      actors: [
        { id: '15', name: "Cachorro", emoji: "🐕", details: "Passageiro", age: 4, occupation: "Animal de Estimação", traits: ["Leal", "Amigo"] },
        { id: '16', name: "Gato", emoji: "🐈", details: "Passageiro", age: 3, occupation: "Animal de Estimação", traits: ["Independente", "Ágil"] }
      ]
    }
  },
  {
    id: 5,
    title: "Prioridade de Gênero?",
    description: "O carro deve escolher entre dois grupos de pedestres.",
    optionA: {
      label: "Lado Esquerdo",
      actors: [
        { id: '17', name: "Homem", emoji: "👨", details: "Pedestre", age: 30, occupation: "Cozinheiro", traits: ["Trabalhador", "Pai"] },
        { id: '18', name: "Homem", emoji: "👨", details: "Pedestre", age: 33, occupation: "Motorista", traits: ["Atento", "Prestativo"] }
      ]
    },
    optionB: {
      label: "Lado Direito",
      actors: [
        { id: '19', name: "Mulher", emoji: "👩", details: "Pedestre", age: 29, occupation: "Enfermeira", traits: ["Cuidadosa", "Dedicada"] },
        { id: '20', name: "Mulher", emoji: "👩", details: "Pedestre", age: 31, occupation: "Advogada", traits: ["Justa", "Inteligente"] }
      ]
    }
  },
  {
    id: 6,
    title: "Status Social",
    description: "O carro detecta o perfil dos envolvidos.",
    optionA: {
      label: "Proteger Executivos",
      actors: [
        { id: '21', name: "Executivo", emoji: "💼", details: "Passageiro", age: 45, occupation: "Banqueiro", traits: ["Rico", "Calculista"] },
        { id: '22', name: "Executivo", emoji: "💼", details: "Passageiro", age: 42, occupation: "Consultor", traits: ["Eficiente", "Sério"] }
      ]
    },
    optionB: {
      label: "Proteger Morador de Rua",
      actors: [
        { id: '23', name: "Pessoa", emoji: "🚶", details: "Pedestre", age: 60, occupation: "Desempregado", traits: ["Invisível", "Resiliente"] }
      ]
    }
  }
];
