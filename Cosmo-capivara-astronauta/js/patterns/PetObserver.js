/** OBSERVER: a interface, o áudio e o diário recebem notificações do Pet. */
class UIObserver {
  update(pet) {
    const s = pet.getState();
    this.setBar("hunger", s.hunger); this.setBar("happiness", s.happiness);
    this.setBar("energy", s.energy);
    document.getElementById("age-value").textContent = `${s.age} ${s.age === 1 ? "dia" : "dias"}`;
    document.getElementById("age-bar").style.width = `${Math.min(100, s.age * 10)}%`;
    const result = getStrategyFromMood(s.mood).executeStrategy();
    document.getElementById("pet-mood").textContent = `${result.emoji} ${result.text}`;
    const sprite = document.getElementById("pet-sprite");
    if (sprite.getAttribute("src") !== result.image) sprite.src = result.image;
    sprite.style.animation = `${result.animation} 2.2s ease-in-out infinite`;
  }
  setBar(id, value) {
    document.getElementById(`${id}-bar`).style.width = `${value}%`;
    document.getElementById(`${id}-value`).textContent = `${value}%`;
  }
}
class AudioObserver {
  update(pet, event) {
    if (event === "feed") AudioManager.play("eating");
    else if (event === "play") AudioManager.play("happy");
    else if (event === "sleep") AudioManager.play("notification");
    else if (event === "mood" && pet.mood === "triste") AudioManager.play("sad");
  }
}
class LogObserver {
  update(pet, event) {
    if (event === "tick" || event === "update" || event === "mood") return;
    const messages = {
      feed: `🥗 Cosmo comeu e recuperou a barriguinha.`,
      play: `🎮 Hora de brincar! A felicidade subiu.`,
      sleep: `🌙 Cosmo descansou e recuperou energia.`,
      clothes: `🧑‍🚀 O visual do Cosmo foi atualizado.`
    };
    this.addLog(messages[event] || "✨ Cosmo está pronto para a próxima missão.");
  }
  addLog(message) {
    const root = document.getElementById("activity-log");
    const entry = document.createElement("div"); entry.className = "log-entry";
    const time = document.createElement("span"); time.className = "log-time";
    time.textContent = new Date().toLocaleTimeString("pt-BR", {hour:"2-digit",minute:"2-digit"});
    const text = document.createElement("span"); text.textContent = message;
    entry.append(time, text); root.prepend(entry);
    while (root.children.length > 10) root.lastElementChild.remove();
  }
}
