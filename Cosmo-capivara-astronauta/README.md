# 🚀 Tamagotchi — Capivara Astronauta Cosmo

Projeto de estudo em **HTML, CSS e JavaScript puro**, com cinco padrões de projeto aplicados.

## Como executar
1. Extraia o ZIP.
2. Abra a pasta no VS Code.
3. Abra `index.html` no navegador. Recomendado: extensão **Live Server** do VS Code.
4. Clique em Alimentar, Brincar, Dormir e Roupas. Os sons são arquivos locais WAV.

Não há dependências, npm ou servidor obrigatório. A fonte do Google Fonts é opcional; sem internet, o site usa fontes do sistema.

## Estrutura
```text
tamagotchi-capivara-astronauta/
├── index.html
├── style.css
├── README.md
├── assets/
│   ├── images/       # Sprites SVG autorais e acessórios
│   └── sounds/       # Efeitos sonoros WAV locais
└── js/
    ├── app.js
    ├── models/Pet.js
    ├── patterns/
    │   ├── FoodFactory.js
    │   ├── HumorStrategy.js
    │   ├── PetObserver.js
    │   └── PetDecorator.js
    └── utils/AudioManager.js
```

## Os cinco padrões
- **Singleton — `Pet.getInstance()`**: mantém um único estado do Cosmo.
- **Factory — `FoodFactory`**: cria alimentos com saciedade e bônus de felicidade.
- **Observer — `subscribe()`, `notify()`**: a interface, os sons e o diário são notificados quando o estado muda.
- **Decorator — `PetDecorator`**: aplica ou remove acessórios como camadas sobre o sprite.
- **Strategy — `HumorStrategy`**: seleciona texto, emoji, imagem e animação conforme o humor.

## Regras do jogo
- Fome aumenta gradualmente; felicidade e energia diminuem com o tempo.
- Alimentar reduz a fome; brincar aumenta a felicidade, mas consome energia.
- Dormir recupera energia.
- O humor é recalculado automaticamente conforme os atributos.
- O diário mantém as dez atividades mais recentes.

## Para apresentar em sala
1. Demonstre os quatro botões e a troca de acessórios.
2. Mostre `Pet.getInstance()` para explicar Singleton.
3. Mostre `FoodFactory.getRandomFood()` para explicar Factory.
4. Explique que `pet.notify()` atualiza os observadores (Observer).
5. Mostre que `PetDecorator` adiciona uma imagem sem editar o sprite-base.
6. Compare as estratégias de humor em `HumorStrategy.js`.

## Observação
Sprites vetoriais e efeitos sonoros foram criados para este projeto e ficam dentro de `assets/`, então o projeto funciona sem baixar imagens ou sons externos.


### Música de fundo
A trilha original `assets/sounds/musica-fundo.wav` toca em loop pelo player da interface. Clique em **Tocar** para iniciar e ajuste o volume no controle ao lado. A música começa após interação do usuário para respeitar as políticas dos navegadores.
