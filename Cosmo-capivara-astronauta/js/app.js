document.addEventListener("DOMContentLoaded", () => {
  // SINGLETON: todas as ações compartilham exatamente o mesmo Pet.
  const pet = Pet.getInstance();
  const ui = new UIObserver(), audio = new AudioObserver(), log = new LogObserver();
  pet.subscribe(ui); pet.subscribe(audio); pet.subscribe(log);

  log.addLog("🚀 Cosmo chegou à estação espacial. Cuide bem dele!");
  pet.notify("update");
  pet.startGameLoop();

  document.getElementById("feed-btn").addEventListener("click", () => {
    const food = FoodFactory.getRandomFood(); // FACTORY cria um alimento
    pet.feed(food);
    log.addLog(`${food.emoji} ${food.name}: saciedade +${food.satiety}%.`);
  });
  document.getElementById("play-btn").addEventListener("click", () => {
    if (!pet.play()) {
      log.addLog("😴 Cosmo está sem energia. Deixe-o dormir primeiro.");
    }
  });
  document.getElementById("sleep-btn").addEventListener("click", () => pet.sleep());

  const modal = document.getElementById("clothes-modal");
  const openModal = () => modal.classList.remove("hidden");
  const closeModal = () => modal.classList.add("hidden");
  document.getElementById("clothes-btn").addEventListener("click", openModal);
  document.querySelector(".close-btn").addEventListener("click", closeModal);
  modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

  document.querySelectorAll(".clothes-btn").forEach(button => {
    button.addEventListener("click", () => {
      PetDecorator.applyDecorator(pet, button.dataset.decorator);
      log.addLog(button.dataset.decorator === "none" ? "👕 Cosmo tirou os acessórios." :
        `✨ Cosmo equipou: ${PetDecorator.catalog[button.dataset.decorator].name}.`);
      closeModal();
    });
  });
  // Música de fundo: só inicia quando o usuário pedir, evitando bloqueio do navegador.
  const musicButton = document.getElementById("music-btn");
  const musicStatus = document.getElementById("music-status");
  const musicVolume = document.getElementById("music-volume");

  const syncMusicControls = (playing) => {
    musicButton.textContent = playing ? "Ⅱ Pausar" : "▶ Tocar";
    musicButton.setAttribute("aria-pressed", String(playing));
    musicStatus.textContent = playing
      ? "Trilha espacial tocando em loop"
      : "Música pausada · toque para ouvir";
  };

  musicButton.addEventListener("click", async () => {
    musicButton.disabled = true;
    const playing = await AudioManager.toggleBackgroundMusic();
    syncMusicControls(playing);
    musicButton.disabled = false;
    if (!playing && !AudioManager.backgroundMusic.paused) {
      musicStatus.textContent = "Não foi possível iniciar a música. Tente novamente.";
    }
  });

  musicVolume.addEventListener("input", () => {
    AudioManager.setMusicVolume(Number(musicVolume.value) / 100);
  });

  console.info("Cosmo iniciado | Singleton, Factory, Observer, Decorator e Strategy ativos.");
});
