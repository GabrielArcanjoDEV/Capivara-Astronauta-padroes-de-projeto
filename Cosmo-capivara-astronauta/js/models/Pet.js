/**
 * SINGLETON: existe um único estado de Cosmo na aplicação.
 */
class Pet {
  constructor() {
    if (Pet.instance) return Pet.instance;
    this.name = "Cosmo";
    this.hunger = 12;
    this.happiness = 88;
    this.energy = 82;
    this.age = 0;
    this.decorator = null;
    this.mood = "feliz";
    this.observers = [];
    this.ticks = 0;
    this.gameInterval = null;
    Pet.instance = this;
  }
  static getInstance() {
    if (!Pet.instance) Pet.instance = new Pet();
    return Pet.instance;
  }
  subscribe(observer) {
    if (!this.observers.includes(observer)) this.observers.push(observer);
  }
  unsubscribe(observer) {
    this.observers = this.observers.filter(item => item !== observer);
  }
  notify(event = "update") {
    this.observers.forEach(observer => observer.update(this, event));
  }
  feed(food) {
    this.hunger = Math.max(0, this.hunger - food.satiety);
    this.happiness = Math.min(100, this.happiness + food.happinessBonus);
    this.energy = Math.max(0, this.energy - 3);
    this.updateMood(); this.notify("feed");
  }
  play() {
    if (this.energy < 18) return false;
    this.happiness = Math.min(100, this.happiness + 18);
    this.hunger = Math.min(100, this.hunger + 12);
    this.energy = Math.max(0, this.energy - 18);
    this.updateMood(); this.notify("play"); return true;
  }
  sleep() {
    this.energy = Math.min(100, this.energy + 32);
    this.hunger = Math.min(100, this.hunger + 5);
    this.happiness = Math.min(100, this.happiness + 3);
    this.updateMood(); this.notify("sleep");
  }
  updateMood() {
    if (this.hunger >= 75) this.mood = "com_fome";
    else if (this.energy <= 22) this.mood = "cansado";
    else if (this.happiness <= 28) this.mood = "triste";
    else this.mood = "feliz";
  }
  tick() {
    this.hunger = Math.min(100, this.hunger + 1);
    this.happiness = Math.max(0, this.happiness - 0.35);
    this.energy = Math.max(0, this.energy - 0.25);
    this.ticks++;
    if (this.ticks % 30 === 0) this.age++;
    this.updateMood(); this.notify("tick");
  }
  startGameLoop() {
    if (this.gameInterval) return;
    this.gameInterval = setInterval(() => this.tick(), 3000);
  }
  stopGameLoop() {
    if (this.gameInterval) clearInterval(this.gameInterval);
    this.gameInterval = null;
  }
  getState() {
    return {name:this.name,hunger:Math.round(this.hunger),happiness:Math.round(this.happiness),
      energy:Math.round(this.energy),age:this.age,mood:this.mood,decorator:this.decorator};
  }
}
