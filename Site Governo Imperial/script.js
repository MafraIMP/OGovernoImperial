<script>
  document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('musicaAmbiente');
    const player = document.getElementById('player-musica');
    const btn = document.getElementById('btn-musica');

    audio.volume = 0.3;

    const tentarTocar = () => {
      audio.play().catch(() => {
        document.body.addEventListener('click', () => {
          audio.play();
        }, { once: true });
      });
    };

    tentarTocar();

    btn.addEventListener('click', () => {
      if (audio.paused) {
        audio.play();
        btn.textContent = '⏸️ Pausar';
        player.classList.remove('minimizado');
      } else {
        audio.pause();
        btn.textContent = '▶️ Tocar';
        player.classList.add('minimizado');
      }
    });
  });
</script>

  
  
  const music = document.getElementById("bg-music");
const btn = document.getElementById("toggle-music");
let isPlaying = false;

btn.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    btn.textContent = "🎵 Tocar Música";
  } else {
    music.play();
    btn.textContent = "🔇 Parar Música";
  }
  isPlaying = !isPlaying;
});

</script>
