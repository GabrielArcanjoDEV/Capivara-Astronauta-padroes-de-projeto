# Guia rápido para explicar os padrões

| Padrão | Arquivo | Responsabilidade |
|---|---|---|
| Singleton | `js/models/Pet.js` | Uma única instância e estado do Cosmo. |
| Factory | `js/patterns/FoodFactory.js` | Centraliza a criação de alimentos. |
| Observer | `js/patterns/PetObserver.js` + `Pet.js` | Notifica UI, áudio e diário após mudanças. |
| Decorator | `js/patterns/PetDecorator.js` | Adiciona/remove acessórios por composição visual. |
| Strategy | `js/patterns/HumorStrategy.js` | Encapsula as reações de cada humor. |

**Nota didática:** o Decorator deste projeto é aplicado como composição de camadas visuais no DOM: o sprite principal permanece intacto e o acessório é inserido em `#decorators-container`.
