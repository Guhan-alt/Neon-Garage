const startBtn = document.getElementById('start-btn');
const roarBtn = document.getElementById('roar-btn');
const startSound = document.getElementById('start-sound');
const roarSound = document.getElementById('roar-sound');
const fireEffect = document.getElementById('fire-effect');

let flameInterval = null;

function spawnFlame() {
  const left = Math.random() * (window.innerWidth - 80);
  const flame = document.createElement('img');
  flame.src = "https://static.vecteezy.com/system/resources/previews/047/833/665/non_2x/fire-flames-on-a-transparent-background-free-png.png";
  flame.className = "fire-flame";
  flame.style.left = `${left}px`;
  flame.style.bottom = "0px";
  fireEffect.appendChild(flame);

  flame.addEventListener('animationend', () => {
    flame.remove();
  });
}

function startFlames() {
  fireEffect.classList.add('active');
  flameInterval = setInterval(spawnFlame, 350);
}

function stopFlames() {
  fireEffect.classList.remove('active');
  clearInterval(flameInterval);
  flameInterval = null;
  fireEffect.innerHTML = "";
}

function stopAllSoundsAndFlames() {
  startSound.pause();
  startSound.currentTime = 0;
  roarSound.pause();
  roarSound.currentTime = 0;
  stopFlames();
}

startBtn.addEventListener('click', () => {
  if (!startSound.paused) {
    stopAllSoundsAndFlames();
  } else {
    stopAllSoundsAndFlames();
    startSound.play();
  }
});

roarBtn.addEventListener('click', () => {
  if (!roarSound.paused) {
    stopAllSoundsAndFlames();
  } else {
    stopAllSoundsAndFlames();
    roarSound.play();
    startFlames();
  }
});

roarSound.addEventListener('ended', stopFlames);