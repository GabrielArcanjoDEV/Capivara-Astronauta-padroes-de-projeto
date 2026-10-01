/** STRATEGY: cada humor define texto, emoji, sprite e animação próprios. */
class HumorStrategy {
  get result() { throw new Error("Implemente result na estratégia concreta."); }
}
class FelizStrategy extends HumorStrategy {
  get result() { return {emoji:"😊",text:"Feliz e pronto para explorar!",image:"assets/images/capivara-feliz.svg",animation:"bob"}; }
}
class TristeStrategy extends HumorStrategy {
  get result() { return {emoji:"😢",text:"Um pouco tristinho...",image:"assets/images/capivara-triste.svg",animation:"shake"}; }
}
class ComFomeStrategy extends HumorStrategy {
  get result() { return {emoji:"😵",text:"Preciso de um lanchinho!",image:"assets/images/capivara-com-fome.svg",animation:"pulse"}; }
}
class CansadoStrategy extends HumorStrategy {
  get result() { return {emoji:"😴",text:"Preciso descansar...",image:"assets/images/capivara-base.svg",animation:"float"}; }
}
class HumorContext {
  constructor(strategy = new FelizStrategy()) { this.strategy = strategy; }
  setStrategy(strategy) { this.strategy = strategy; }
  executeStrategy() { return this.strategy.result; }
}
function getStrategyFromMood(mood) {
  const strategies = {feliz:FelizStrategy,triste:TristeStrategy,com_fome:ComFomeStrategy,cansado:CansadoStrategy};
  const Strategy = strategies[mood] || FelizStrategy;
  return new HumorContext(new Strategy());
}
