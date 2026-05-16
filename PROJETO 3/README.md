# ⚔️ Batalha de Modelos & Engenharia de Prompt (XML)

**Autor:** Kauam Alves Da Costa  
**Experiência:** #3

---

## Descrição

Experimento comparativo entre os principais modelos de linguagem do mercado, avaliando a capacidade de cada um de interpretar um **prompt estruturado em XML** e gerar uma página **HTML5 Single Page com CSS3 interno**.

---

## O Prompt

O prompt foi estruturado em XML com os seguintes elementos:

```xml
<tarefa>
  <objetivo>Criar uma página HTML5 única com CSS3 interno (single page).</objetivo>
  <tema> [TEMA DA PÁGINA] </tema>
  <diretrizes_design>
    <layout>Responsivo e minimalista.</layout>
    <paleta_cores> [CORES DEFINIDAS] </paleta_cores>
    <tipografia>Sans-serif para títulos, Serif para corpo.</tipografia>
  </diretrizes_design>
  <obrigatoriedades_tecnicas>
    <item>Menu de navegação funcional (âncoras).</item>
    <item>Seção de portfólio ou galeria.</item>
    <item>Rodapé com informações de contato simuladas.</item>
    <item>[ITEM PERSONALIZADO]</item>
  </obrigatoriedades_tecnicas>
  <metrica_obrigatoria>
    Ao final da resposta, informe uma estimativa de quantos tokens foram gerados.
  </metrica_obrigatoria>
</tarefa>
```

---

## Modelos Avaliados

ChatGPT · Gemini · DeepSeek · Qwen · Grok · Maritaca · **Claude**

---

## Quadro Comparativo

| Critério                    | GPT       | Gemini  | DeepSeek  | Qwen | Grok | Maritaca | Claude   |
|-----------------------------|-----------|---------|-----------|------|------|----------|----------|
| Precisão estimada do prompt | 6         | 3       | 7         | 9    | 9    | 2        | **10**   |
| Precisão do HTML            | 7         | 7       | 7         | 8    | 9    | 5        | **9**    |
| Criatividade no Conteúdo    | 8         | 2       | 4         | 10   | 9    | 2        | **10**   |
| Erros de Sintaxe (Bugs)     | 0         | 1       | 0         | 0    | 0    | 1        | **0**    |
| Tokens Gastos (estimativa)  | 1400–1800 | 900–950 | 3200–3500 | 920  | 2850 | 850      | **4200** |

---

## Reflexão Crítica

**1. Qual modelo demonstrou maior compreensão da estrutura XML?**
> "Claude.Ai, sem sombra de dúvidas."

**2. Houve diferença significativa na verbosidade (tokens) entre as IAs?**
> Sim — os modelos que utilizaram mais tokens foram mais fiéis ao resultado esperado.

**3. Qual ferramenta para prototipagem rápida vs. código complexo?**
> - ⚡ **Rápida:** Qwen ou Grok — atenderam muito bem em curto prazo.  
> - 🏆 **Performance geral:** Claude — escolha sem dúvida alguma.

---

## Conclusões

- Claude obteve as maiores notas em **precisão do prompt** e **criatividade**, ambas com pontuação máxima (10), sem nenhum erro de sintaxe.
- Qwen e Grok se destacaram para **prototipagem ágil**, equilibrando qualidade e economia de tokens.
- Gemini e Maritaca apresentaram os **piores resultados** gerais, com erros de sintaxe e baixa criatividade.
- A correlação entre **quantidade de tokens e fidelidade ao prompt** foi confirmada na prática.
