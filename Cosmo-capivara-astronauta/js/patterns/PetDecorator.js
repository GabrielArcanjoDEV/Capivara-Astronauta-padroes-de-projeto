/** DECORATOR: adiciona uma camada visual sem modificar o sprite-base do pet. */
class PetDecorator {
  static catalog = {
    helmet: {name:"Capacete espacial", image:"assets/images/helmet-decorator.svg"},
    sunglasses: {name:"Óculos neon", image:"assets/images/sunglasses-decorator.svg"},
    raincoat: {name:"Capa de chuva", image:"assets/images/raincoat-decorator.svg"}
  };
  static applyDecorator(pet, type) {
    pet.decorator = type === "none" ? null : (this.catalog[type] || null);
    this.render(pet.decorator);
    pet.notify("clothes");
  }
  static render(decorator) {
    const container = document.getElementById("decorators-container");
    container.replaceChildren();
    if (!decorator) return;
    const img = document.createElement("img");
    img.src = decorator.image; img.alt = decorator.name; img.className = "decorator-img";
    container.appendChild(img);
  }
}
