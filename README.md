
# 🚀 Tamagotchi Galáctico — Capivara Astronauta

<p align="center">
  <img src="assets/images/capivara-base.svg" alt="Cosmo, a Capivara Astronauta" width="220">
</p>

<h3 align="center">
  🐹 Cuide do Cosmo e embarque em uma aventura intergaláctica!
</h3>

<p align="center">
  Um jogo inspirado nos clássicos Tamagotchis, desenvolvido com HTML, CSS e JavaScript puro, aplicando cinco padrões de projeto da programação orientada a objetos.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Design_Patterns-8B5CF6?style=for-the-badge" alt="Design Patterns">
</p>

---

## 📌 Sobre o projeto

O **Tamagotchi Galáctico** é um jogo de estimação virtual no qual o jogador deve cuidar de Cosmo, uma capivara astronauta que vive uma aventura pelo espaço.

Durante a experiência, o jogador precisa alimentar o personagem, brincar com ele, recuperar sua energia e personalizar sua aparência com acessórios espaciais.

O projeto foi desenvolvido com foco na aplicação prática de conceitos de Engenharia de Software, especialmente os cinco padrões de projeto:

- Singleton
- Factory Method
- Observer
- Decorator
- Strategy

A aplicação utiliza tecnologias web nativas, sem exigir frameworks JavaScript ou bibliotecas externas para executar a lógica principal do jogo.

## 🎮 Funcionalidades

### 🐹 Cuidados com o Cosmo

- 🍔 Alimentar o personagem com diferentes alimentos.
- 🎮 Brincar para aumentar a felicidade.
- 😴 Dormir para recuperar energia.
- 📊 Acompanhar as barras de fome, felicidade, energia e idade.
- 😊 Visualizar as mudanças de humor do personagem.
- ⏱️ Simular a passagem do tempo durante a partida.
- 📝 Consultar o histórico de atividades.

### 👕 Personalização

- 🧑‍🚀 Capacete espacial.
- 🕶️ Óculos neon.
- 🌧️ Capa de chuva.
- ✨ Opção para remover os acessórios.
- 🎨 Alteração visual dinâmica durante a partida.

### 🎵 Experiência sonora

- 🎶 Música de fundo com temática espacial.
- ▶️ Botão para reproduzir e pausar a trilha.
- 🔊 Controle de volume independente.
- 🔁 Reprodução contínua em loop.
- 🔔 Efeitos sonoros para as interações do jogo.

> **Observação:** o navegador pode exigir uma interação do usuário antes de permitir a reprodução de áudio.

### 🌌 Interface

- Design inspirado em painéis de bordo espaciais.
- Tema visual futurista.
- Animações do personagem.
- Interface adaptável a diferentes tamanhos de tela.
- Indicadores visuais de status.
- Controles interativos para facilitar a experiência.

---

## 🧠 Padrões de projeto utilizados

O principal objetivo acadêmico do projeto é demonstrar como os padrões de projeto ajudam a organizar o código e separar responsabilidades.

### 1. Singleton — Instância única do pet

**Arquivo:** `js/models/Pet.js`

O Singleton garante que a aplicação trabalhe com uma única instância compartilhada do personagem.

Essa instância mantém os atributos do Cosmo, incluindo fome, felicidade, energia, idade e humor.

Exemplo:

```javascript
const pet = Pet.getInstance();
```

Sempre que `Pet.getInstance()` é chamado, a aplicação recupera a mesma instância do pet.

**Benefício:** evita a criação de diferentes estados independentes para o mesmo personagem.

### 2. Factory Method — Criação de alimentos

**Arquivo:** `js/patterns/FoodFactory.js`

A Factory centraliza a criação dos alimentos disponíveis no jogo.

Cada alimento possui características próprias, como nome, saciedade e bônus de felicidade.

Exemplo:

```javascript
const food = FoodFactory.createFood("hamburguer");
pet.feed(food);
```

A fábrica pode criar diferentes alimentos, como:

- Alga espacial.
- Hambúrguer neon.
- Doce cósmico.
- Pizza intergaláctica.
- Sorvete de nebulosa.
- Fruta alienígena.

**Benefício:** permite adicionar novos alimentos sem espalhar a lógica de criação por toda a aplicação.

### 3. Observer — Notificação de mudanças

**Arquivo:** `js/patterns/PetObserver.js`

O Observer permite que diferentes componentes sejam notificados quando o estado do pet muda.

O personagem mantém os observadores inscritos e os notifica após suas ações.

Exemplo:

```javascript
pet.subscribe(uiObserver);
pet.subscribe(audioObserver);
pet.subscribe(logObserver);
```

Os observadores desempenham responsabilidades diferentes:

- **UIObserver:** atualiza as barras de status, o humor e a imagem.
- **AudioObserver:** reage a determinadas condições do personagem com efeitos sonoros.
- **LogObserver:** registra informações sobre o estado do pet.

**Benefício:** separa a lógica do personagem da atualização da interface e dos registros de atividade.

### 4. Decorator — Personalização do personagem

**Arquivo:** `js/patterns/PetDecorator.js`

O Decorator permite adicionar acessórios visualmente ao personagem durante a execução do jogo.

Exemplo:

```javascript
PetDecorator.applyDecorator(pet, "helmet");
```

Os acessórios disponíveis são:

- `helmet` — capacete espacial.
- `sunglasses` — óculos neon.
- `raincoat` — capa de chuva.
- `none` — remove o acessório atual.

**Benefício:** permite personalizar a aparência do pet dinamicamente, sem precisar criar uma classe completa do personagem para cada combinação de roupas.

### 5. Strategy — Comportamentos e humor

**Arquivo:** `js/patterns/HumorStrategy.js`

O Strategy organiza diferentes comportamentos de acordo com o humor do Cosmo.

O sistema considera os níveis de fome, felicidade e energia para determinar o estado atual do personagem.

As estratégias incluem:

- 😊 Feliz.
- 😢 Triste.
- 😵 Com fome.
- 😴 Cansado.

Exemplo:

```javascript
const strategy = getStrategyFromMood(pet.mood);
```

Cada estratégia pode definir características como emoji, descrição do humor, imagem e animação.

**Benefício:** facilita a criação de novos comportamentos sem concentrar todas as regras em uma única função.

---

## 📂 Estrutura do projeto

```text
tamagotchi-capivara-astronauta/
│
├── index.html
├── style.css
├── README.md
│
├── assets/
│   ├── images/
│   │   ├── capivara-base.svg
│   │   ├── capivara-feliz.svg
│   │   ├── capivara-triste.svg
│   │   ├── capivara-com-fome.svg
│   │   ├── helmet-decorator.svg
│   │   ├── sunglasses-decorator.svg
│   │   └── raincoat-decorator.svg
│   │
│   └── sounds/
│       ├── musica-fundo.wav
│       ├── eating.wav
│       ├── happy.wav
│       ├── sad.wav
│       └── notification.wav
│
└── js/
    ├── app.js
    │
    ├── models/
    │   └── Pet.js
    │
    ├── patterns/
    │   ├── FoodFactory.js
    │   ├── PetObserver.js
    │   ├── PetDecorator.js
    │   └── HumorStrategy.js
    │
    └── utils/
        └── AudioManager.js
```

> A estrutura acima é uma referência para documentar a organização dos arquivos. Caso algum nome ou extensão seja diferente na versão do projeto que você baixou, mantenha no README os nomes reais da sua pasta.

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Aplicação |
|---|---|
| HTML5 | Estrutura da interface |
| CSS3 | Estilização, animações e responsividade |
| JavaScript | Regras, interações e estado do personagem |
| HTML Audio API | Reprodução de músicas e efeitos sonoros |
| SVG | Sprites e acessórios vetoriais |
| Design Patterns | Organização e reutilização de código |
| Git e GitHub | Versionamento e hospedagem do código |

---

## 💻 Como executar o projeto

### Pré-requisitos

- Navegador atualizado, como Google Chrome, Firefox ou Microsoft Edge.
- Visual Studio Code (recomendado).
- Extensão Live Server para executar o projeto localmente.

Não é necessário instalar Node.js para executar a versão estática do jogo.

### 1. Baixe ou clone o repositório

```bash
git clone https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
```

Substitua o endereço pelo link real do seu repositório.

### 2. Abra a pasta no VS Code

```bash
cd SEU-REPOSITORIO
code .
```

### 3. Execute o jogo

1. Abra o arquivo `index.html`.
2. Clique com o botão direito no editor.
3. Selecione **Open with Live Server**.
4. Aguarde a abertura do navegador.
5. Interaja com os controles para cuidar do Cosmo.

### 4. Teste a música

1. Localize o player de música na interface.
2. Clique em **Tocar**.
3. Ajuste o volume conforme desejar.
4. Clique em **Pausar** para interromper a trilha.

Certifique-se de que os arquivos de áudio estão presentes no diretório `assets/sounds/`.

---

## 🧪 Exemplos de interação

| Ação | Resultado esperado |
|---|---|
| Alimentar | Reduz a fome e pode aumentar a felicidade |
| Brincar | Aumenta a felicidade e consome energia |
| Dormir | Recupera energia e altera os demais status |
| Trocar roupa | Modifica a aparência do personagem |
| Passagem do tempo | Atualiza os indicadores de estado |
| Mudança de humor | Atualiza a representação visual do pet |
| Tocar música | Reproduz a trilha em segundo plano |
| Ajustar volume | Altera o volume da música |
| Pausar música | Interrompe a trilha de fundo |

---

## 📚 Conceitos acadêmicos demonstrados

O desenvolvimento deste projeto permite praticar:

- Programação orientada a objetos.
- Classes, métodos e encapsulamento.
- Separação de responsabilidades.
- Gerenciamento de estado.
- Manipulação do DOM.
- Eventos e interatividade.
- Composição e reutilização de código.
- Padrões de projeto comportamentais e criacionais.
- Reprodução de áudio no navegador.
- Organização de projetos front-end.
- Controle de versão com Git.

---

## 🚀 Possíveis melhorias futuras

- 💾 Salvar automaticamente o estado do pet com LocalStorage.
- 🥕 Adicionar novos alimentos e itens colecionáveis.
- 🧑‍🚀 Permitir combinar diferentes acessórios.
- 🌎 Criar novos cenários e planetas.
- 🏆 Implementar conquistas e sistema de pontuação.
- 🕹️ Adicionar minijogos.
- 📱 Melhorar ainda mais a experiência em dispositivos móveis.
- 🔔 Criar notificações para lembrar o jogador de cuidar do Cosmo.
- 🎨 Adicionar novas skins e animações.
- 📊 Criar estatísticas de evolução do personagem.

---

## 👨‍💻 Autor

**Gabriel Arcanjo Evangelista**

Estudante de Análise e Desenvolvimento de Sistemas no IFPB, interessado em desenvolvimento de software, programação e tecnologia.

### Contato e portfólio

- GitHub: [@GabrielArcanjoDEV](https://github.com/GabrielArcanjoDEV)

---

## 🎓 Objetivo educacional

Este projeto foi desenvolvido com finalidade educacional para demonstrar a aplicação de padrões de projeto em uma aplicação interativa construída com tecnologias web.

A proposta é unir criatividade, organização do código e conceitos de Engenharia de Software em uma experiência prática.

---

<p align="center">
  🚀 <strong>Cuide do Cosmo, explore o universo e mantenha sua missão em andamento!</strong> 🐹
</p>