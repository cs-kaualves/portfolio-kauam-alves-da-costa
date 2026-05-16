# 🧠 tm-my-image-model

> Modelo de classificação de imagens treinado com **Google Teachable Machine** para distinguir entre **chinelo** e **tênis**.

[![TensorFlow.js](https://img.shields.io/badge/TensorFlow.js-1.7.4-FF6F00?style=for-the-badge&logo=tensorflow)](https://www.tensorflow.org/js)
[![Teachable Machine](https://img.shields.io/badge/Teachable%20Machine-2.4.14-4285F4?style=for-the-badge&logo=google)](https://teachablemachine.withgoogle.com)
[![Classes](https://img.shields.io/badge/Classes-2-green?style=for-the-badge)]()
[![Input](https://img.shields.io/badge/Input-224×224px-blueviolet?style=for-the-badge)]()

---

## 📌 Descrição

Este é um modelo de visão computacional gerado pelo **Google Teachable Machine** e exportado no formato **TensorFlow.js**. Ele foi treinado para classificar imagens de calçados em duas categorias:

| Classe | Descrição |
|--------|-----------|
| 👡 `chinelo` | Sandálias e chinelos |
| 👟 `tênis` | Tênis e calçados fechados |

---

## 🗂️ Arquivos do Modelo

| Arquivo | Tamanho | Descrição |
|---------|---------|-----------|
| `model.json` | ~90 KB | Topologia da rede neural (arquitetura) |
| `weights.bin` | ~2,1 MB | Pesos treinados do modelo |
| `metadata.json` | ~252 B | Labels, versões e configurações |

---

## 🏗️ Arquitetura

O modelo utiliza **Transfer Learning** com base no **MobileNetV2** como extrator de features, seguido de uma cabeça de classificação customizada:

```
Entrada (224×224×3)
    │
    ▼
MobileNetV2 (backbone truncado)
    │  16 blocos inverted residual
    │  Conv2D + BatchNorm + ReLU6
    │
    ▼
GlobalAveragePooling2D → vetor (1280)
    │
    ▼
Dense (1280 → 100, ReLU)
    │
    ▼
Dense (100 → 2, Softmax)
    │
    ▼
Saída: [P(chinelo), P(tênis)]
```

### Detalhes Técnicos

| Parâmetro | Valor |
|-----------|-------|
| Backbone | MobileNetV2 (compacto) |
| Input shape | `(224, 224, 3)` — float32 |
| Ativação oculta | ReLU6 |
| Ativação final | Softmax |
| Camada densa intermediária | 100 neurônios |
| Saídas | 2 classes |
| Framework | TensorFlow.js 1.7.4 |
| Formato dos pesos | `float32` binário |

---

## 🚀 Como Usar

### 1. Instalação

```bash
npm install @teachablemachine/image
```

### 2. Exemplo de uso (JavaScript/HTML)

```html
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.7.4/dist/tf.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@teachablemachine/image@0.8/dist/teachablemachine-image.min.js"></script>

<script>
  const MODEL_URL = './model.json';
  const METADATA_URL = './metadata.json';

  async function loadModel() {
    const model = await tmImage.load(MODEL_URL, METADATA_URL);
    return model;
  }

  async function predict(imageElement) {
    const model = await loadModel();
    const predictions = await model.predict(imageElement);
    console.log(predictions);
    // [{ className: 'chinelo', probability: 0.95 }, { className: 'tênis', probability: 0.05 }]
  }
</script>
```

### 3. Exemplo com Node.js

```javascript
const tmImage = require('@teachablemachine/image');

async function run() {
  const model = await tmImage.load('./model.json', './metadata.json');
  const prediction = await model.predict(imageElement);
  
  prediction.forEach(p => {
    console.log(`${p.className}: ${(p.probability * 100).toFixed(1)}%`);
  });
}

run();
```

---

## 📊 Saída do Modelo

O modelo retorna um array com a probabilidade de cada classe:

```json
[
  { "className": "chinelo", "probability": 0.97 },
  { "className": "tênis",   "probability": 0.03 }
]
```

A classe com maior probabilidade (`probability`) é a predição final.

---

## ⚙️ Metadados

```json
{
  "modelName": "tm-my-image-model",
  "labels": ["chinelo", "tênis"],
  "imageSize": 224,
  "tfjsVersion": "1.7.4",
  "tmVersion": "2.4.14",
  "packageVersion": "0.8.4-alpha2",
  "packageName": "@teachablemachine/image",
  "timeStamp": "2026-05-16T02:15:55.050Z"
}
```

---

## 📦 Origem

Modelo gerado via [Google Teachable Machine](https://teachablemachine.withgoogle.com) — plataforma no-code para treinamento de modelos de machine learning diretamente no navegador, sem necessidade de código.
