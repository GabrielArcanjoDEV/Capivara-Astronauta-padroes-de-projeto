/**
 * AUDIO MANAGER
 * Gerencia os efeitos sonoros e a trilha de fundo do Cosmo.
 * A música só começa após interação do usuário (política dos navegadores).
 */
class AudioManager {
  static sounds = {
    eating: "assets/sounds/eating.wav",
    happy: "assets/sounds/happy.wav",
    sad: "assets/sounds/sad.wav",
    notification: "assets/sounds/notification.wav"
  };

  static backgroundMusic = new Audio("assets/sounds/musica-fundo.wav");
  static musicStarted = false;

  static {
    this.backgroundMusic.loop = true;
    this.backgroundMusic.preload = "auto";
    this.backgroundMusic.volume = 0.25;
  }

  static play(name) {
    const src = this.sounds[name];
    if (!src) return;
    const audio = new Audio(src);
    audio.volume = 0.32;
    audio.play().catch(() => {});
  }

  static async playBackgroundMusic() {
    try {
      await this.backgroundMusic.play();
      this.musicStarted = true;
      return true;
    } catch (error) {
      // O navegador pode bloquear áudio até que o usuário clique no botão.
      return false;
    }
  }

  static pauseBackgroundMusic() {
    this.backgroundMusic.pause();
  }

  static async toggleBackgroundMusic() {
    if (this.backgroundMusic.paused) {
      return await this.playBackgroundMusic();
    }
    this.pauseBackgroundMusic();
    return false;
  }

  static setMusicVolume(value) {
    const volume = Number(value);
    if (!Number.isFinite(volume)) return;
    this.backgroundMusic.volume = Math.max(0, Math.min(1, volume));
  }

  static isMusicPlaying() {
    return !this.backgroundMusic.paused && !this.backgroundMusic.ended;
  }
}
