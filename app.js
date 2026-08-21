const BRANDS = [
  { name: "McDonald's", colors: ["#DA291C", "#FFC72C"] },
  { name: "IKEA", colors: ["#0051BA", "#FFDA1A"] },
  { name: "Spotify", colors: ["#1DB954", "#191414"] },
  { name: "Starbucks", colors: ["#00704A", "#FFFFFF"] },
  { name: "Target", colors: ["#CC0000", "#FFFFFF"] },
  { name: "Google", colors: ["#4285F4", "#EA4335", "#FBBC05", "#34A853"] },
  { name: "Netflix", colors: ["#E50914", "#000000"] },
  { name: "Mastercard", colors: ["#EB001B", "#F79E1B", "#FF5F00"] },
  { name: "FedEx", colors: ["#4D148C", "#FF6600"] },
  { name: "Lego", colors: ["#D11013", "#FFD500", "#000000", "#FFFFFF"] },
  { name: "Best Buy", colors: ["#0046BE", "#FFE000"] },
  { name: "Subway", colors: ["#008C15", "#FFC600"] },
  { name: "Pepsi", colors: ["#004B93", "#C9002B", "#FFFFFF"] },
  { name: "T-Mobile", colors: ["#E20074", "#FFFFFF"] },
  { name: "Slack", colors: ["#4A154B", "#36C5F0", "#2EB67D", "#ECB22E", "#E01E5A"] },
  { name: "Red Bull", colors: ["#001D4A", "#DB0A40", "#FFCC00", "#C4C4C4"] },
  { name: "Dunkin'", colors: ["#FF671F", "#DA1884", "#653819"] },
  { name: "Twitch", colors: ["#9146FF", "#000000"] },
  { name: "Microsoft", colors: ["#F25022", "#7FBA00", "#00A4EF", "#FFB900"] }
];

let score = 0;
let streak = 0;
let currentBrand = null;
let acceptingInput = true;
let deferredPrompt = null;

// Game DOM Elements
const splotchesEl = document.getElementById("splotches");
const optionsEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const streakEl = document.getElementById("streak");
const feedbackEl = document.getElementById("feedback");

// Modal DOM Elements
const settingsModal = document.getElementById("settingsModal");
const openSettingsBtn = document.getElementById("openSettingsBtn");
const closeSettingsBtn = document.getElementById("closeSettingsBtn");
const installBtn = document.getElementById("installBtn");

const installPromptModal = document.getElementById("installPromptModal");
const confirmInstallBtn = document.getElementById("confirmInstallBtn");
const closeInstallPromptBtn = document.getElementById("closeInstallPromptBtn");
const installInstructionText = document.getElementById("installInstructionText");

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function nextRound() {
  acceptingInput = true;
  feedbackEl.textContent = "";
  feedbackEl.className = "feedback";

  currentBrand = BRANDS[Math.floor(Math.random() * BRANDS.length)];

  // Render Color Splotches
  splotchesEl.innerHTML = "";
  currentBrand.colors.forEach((color) => {
    const dot = document.createElement("div");
    dot.className = "splotch";
    dot.style.backgroundColor = color;
    splotchesEl.appendChild(dot);
  });

  // Pick 3 random wrong options
  const wrongOptions = shuffle(BRANDS.filter((b) => b.name !== currentBrand.name)).slice(0, 3);
  const roundChoices = shuffle([currentBrand, ...wrongOptions]);

  // Render Buttons
  optionsEl.innerHTML = "";
  roundChoices.forEach((brand) => {
    const btn = document.createElement("button");
    btn.className = "btn-option";
    btn.textContent = brand.name;
    btn.onclick = () => handleChoice(brand.name, btn);
    optionsEl.appendChild(btn);
  });
}

function handleChoice(selectedName, clickedBtn) {
  if (!acceptingInput) return;
  acceptingInput = false;

  const buttons = optionsEl.querySelectorAll(".btn-option");

  if (selectedName === currentBrand.name) {
    score += 10 + streak * 2;
    streak += 1;
    clickedBtn.classList.add("correct");
    feedbackEl.textContent = "Correct!";
    feedbackEl.className = "feedback correct";
  } else {
    streak = 0;
    clickedBtn.classList.add("wrong");
    feedbackEl.textContent = `It's ${currentBrand.name}`;
    feedbackEl.className = "feedback wrong";

    buttons.forEach((btn) => {
      if (btn.textContent === currentBrand.name) {
        btn.classList.add("correct");
      }
    });
  }

  scoreEl.textContent = score;
  streakEl.textContent = streak;

  setTimeout(nextRound, 1200);
}

// Modal Listeners
openSettingsBtn.addEventListener("click", () => {
  settingsModal.classList.add("active");
});

closeSettingsBtn.addEventListener("click", () => {
  settingsModal.classList.remove("active");
});

settingsModal.addEventListener("click", (e) => {
  if (e.target === settingsModal) {
    settingsModal.classList.remove("active");
  }
});

// PWA Install Handling
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
});

installBtn.addEventListener("click", () => {
  settingsModal.classList.remove("active");

  if (deferredPrompt) {
    installInstructionText.textContent = "Install HUEBRAND directly to your home screen or desktop for fast, offline access.";
    confirmInstallBtn.style.display = "block";
  } else {
    // Fallback if browser already has it installed or hasn't fired prompt event
    installInstructionText.textContent = "To install: tap the share/menu icon in your browser and select 'Add to Home Screen' or 'Install App'.";
    confirmInstallBtn.style.display = "none";
  }

  installPromptModal.classList.add("active");
});

confirmInstallBtn.addEventListener("click", async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    deferredPrompt = null;
  }
  installPromptModal.classList.remove("active");
});

closeInstallPromptBtn.addEventListener("click", () => {
  installPromptModal.classList.remove("active");
});

installPromptModal.addEventListener("click", (e) => {
  if (e.target === installPromptModal) {
    installPromptModal.classList.remove("active");
  }
});

nextRound();