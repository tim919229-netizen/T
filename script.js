const powerBtn = document.getElementById("powerBtn");
const nextBtn = document.getElementById("nextBtn");
const resetBtn = document.getElementById("resetBtn");
const hint = document.getElementById("hint");
const screen = document.getElementById("screen");
const screenContent = document.getElementById("screenContent");

const states = [
  "off",
  "bootloader",
  "androidBoot",
  "setupWelcome",
  "setupWifi",
  "setupAccount",
  "home"
];

let currentIndex = 0;

const views = {
  off: `
    <div class="bootlog">Display ist aus.
Drücke "Power", um den Emulator zu starten.</div>
  `,
  bootloader: `
    <div class="bootlog">FASTBOOT MODE
Bootloader: unlocked
Device: NeoDroid A17
Verifying partitions... OK
Checking recovery image... OK
Loading kernel... done
Loading ramdisk... done
Jumping to Android init...</div>
  `,
  androidBoot: `
    <div class="android-logo">🤖 Android 15</div>
    <div class="loading"><span></span></div>
    <p style="text-align:center;color:#b6c3e7;font-size:0.85rem;">Systemdienste werden gestartet...</p>
  `,
  setupWelcome: `
    <div class="setup-card">
      <h3>Willkommen</h3>
      <p>Einrichtung des Android-Systems auf iPhone-artigem Gerät.</p>
      <div class="pills"><span>Deutsch</span><span>Barrierefreiheit</span><span>Notruf</span></div>
    </div>
  `,
  setupWifi: `
    <div class="setup-card">
      <h3>Mit WLAN verbinden</h3>
      <p>Wähle ein Netzwerk, um Updates und Apps einzurichten.</p>
      <div class="pills"><span>NeoNet_5G</span><span>StudioLab</span><span>Hotspot</span></div>
    </div>
  `,
  setupAccount: `
    <div class="setup-card">
      <h3>Konto hinzufügen</h3>
      <p>Melde dich mit einem Android-Konto an, um Daten zu synchronisieren.</p>
      <div class="pills"><span>Google</span><span>Gastmodus</span><span>Überspringen</span></div>
    </div>
  `,
  home: `
    <div class="home">
      <div class="widgets">🌤️ 22°C · Berlin | Akku 92% | 3 neue Benachrichtigungen</div>
      <div class="app-grid">
        <div class="app"><div class="app-icon a1">C</div>Camera</div>
        <div class="app"><div class="app-icon a2">G</div>Galerie</div>
        <div class="app"><div class="app-icon a3">M</div>Musik</div>
        <div class="app"><div class="app-icon a4">S</div>Settings</div>
        <div class="app"><div class="app-icon a5">P</div>Play</div>
        <div class="app"><div class="app-icon a6">F</div>Dateien</div>
        <div class="app"><div class="app-icon a7">K</div>Kontakte</div>
        <div class="app"><div class="app-icon a8">B</div>Browser</div>
      </div>
    </div>
  `
};

const updateScreen = () => {
  const state = states[currentIndex];
  screen.className = `screen ${state}`;
  screenContent.innerHTML = views[state];

  if (state === "off") {
    hint.textContent = "Emulator ist aus. Starte mit Power.";
  } else if (state === "home") {
    hint.textContent = "Android ist vollständig gebootet. Setup abgeschlossen.";
  } else {
    hint.textContent = `Aktueller Schritt: ${state}`;
  }
};

powerBtn.addEventListener("click", () => {
  if (states[currentIndex] === "off") {
    currentIndex = 1;
  } else {
    currentIndex = 0;
  }
  updateScreen();
});

nextBtn.addEventListener("click", () => {
  if (states[currentIndex] === "off") {
    currentIndex = 1;
  } else if (currentIndex < states.length - 1) {
    currentIndex += 1;
  }
  updateScreen();
});

resetBtn.addEventListener("click", () => {
  currentIndex = 1;
  updateScreen();
});

updateScreen();
