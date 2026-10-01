/** FACTORY: concentra a criação dos alimentos em um único lugar. */
class Food {
  constructor(name, emoji, satiety, happinessBonus) {
    this.name = name; this.emoji = emoji;
    this.satiety = satiety; this.happinessBonus = happinessBonus;
  }
}
class FoodFactory {
  static catalog = {
    alga: ["Alga Espacial", "🌿", 28, 8],
    hamburguer: ["Hambúrguer Neon", "🍔", 42, 12],
    doce: ["Doce Cósmico", "🍭", 20, 18],
    pizza: ["Pizza Intergaláctica", "🍕", 36, 10],
    sorvete: ["Sorvete de Nebulosa", "🍦", 16, 15],
    fruta: ["Fruta Alienígena", "🍎", 25, 9]
  };
  static createFood(type) {
    const item = this.catalog[type] || this.catalog.alga;
    return new Food(...item);
  }
  static getRandomFood() {
    const keys = Object.keys(this.catalog);
    return this.createFood(keys[Math.floor(Math.random() * keys.length)]);
  }
}
