const BRANDS = [
  // Fast Food & Dining (1-15)
  { name: "McDonald's", slug: "mcdonalds", colors: ["#DA291C", "#FFC72C"] },
  { name: "Burger King", slug: "burgerking", colors: ["#D62300", "#FBE122", "#502314"] },
  { name: "Subway", slug: "subway", colors: ["#008C15", "#FFC600"] },
  { name: "Taco Bell", slug: "tacobell", colors: ["#702082", "#A77BCA", "#000000"] },
  { name: "KFC", slug: "kfc", colors: ["#A3080C", "#000000", "#FFFFFF"] },
  { name: "Pizza Hut", slug: "pizzahut", colors: ["#EE3124", "#00A859", "#FFC425"] },
  { name: "Domino's", slug: "dominos", colors: ["#006491", "#E31837"] },
  { name: "Starbucks", slug: "starbucks", colors: ["#00704A", "#1E3932", "#FFFFFF"] },
  { name: "Dunkin'", slug: "dunkin", colors: ["#FF671F", "#DA1884", "#653819"] },
  { name: "Chipotle", slug: "chipotle", colors: ["#451400", "#AD343E"] },
  { name: "Shake Shack", slug: "shakeshack", colors: ["#5CA432", "#000000"] },
  { name: "Nando's", slug: "nandos", colors: ["#000000", "#C8102E", "#F4C430"] },
  { name: "Dairy Queen", slug: "dairyqueen", colors: ["#EE3124", "#005696"] },
  { name: "Krispy Kreme", slug: "krispykreme", colors: ["#007A3D", "#DD131D"] },
  { name: "Baskin-Robbins", slug: "baskinrobbins", colors: ["#315BA7", "#EC1B69"] },

  // Beverages & Packaged Goods (16-25)
  { name: "Coca-Cola", slug: "cocacola", colors: ["#F40009", "#000000", "#FFFFFF"] },
  { name: "Pepsi", slug: "pepsi", colors: ["#004B93", "#C9002B", "#FFFFFF"] },
  { name: "Red Bull", slug: "redbull", colors: ["#001D4A", "#DB0A40", "#FFCC00"] },
  { name: "Monster Energy", slug: "monsterenergy", colors: ["#95D600", "#000000"] },
  { name: "Heineken", slug: "heineken", colors: ["#008200", "#FF0000"] },
  { name: "Corona", slug: "corona", colors: ["#002454", "#F4BE18", "#FFFFFF"] },
  { name: "Budweiser", slug: "budweiser", colors: ["#C8102E", "#15244C", "#D1A153"] },
  { name: "Guinness", slug: "guinness", colors: ["#000000", "#D6B265", "#FFFFFF"] },
  { name: "Carlsberg", slug: "carlsberg", colors: ["#00382B", "#FFFFFF"] },
  { name: "Stella Artois", slug: "stellaartois", colors: ["#9E1B32", "#C69214", "#FFFFFF"] },

  // Big Tech, Platforms & Social (26-50)
  { name: "Google", slug: "google", colors: ["#4285F4", "#EA4335", "#FBBC05", "#34A853"] },
  { name: "Microsoft", slug: "microsoft", colors: ["#F25022", "#7FBA00", "#00A4EF", "#FFB900"] },
  { name: "Apple", slug: "apple", colors: ["#555555", "#000000", "#FFFFFF"] },
  { name: "Amazon", slug: "amazon", colors: ["#FF9900", "#146EB4", "#000000"] },
  { name: "Meta", slug: "meta", colors: ["#0081FB", "#0064E0"] },
  { name: "YouTube", slug: "youtube", colors: ["#FF0000", "#282828", "#FFFFFF"] },
  { name: "Spotify", slug: "spotify", colors: ["#1DB954", "#191414"] },
  { name: "Netflix", slug: "netflix", colors: ["#E50914", "#000000"] },
  { name: "Discord", slug: "discord", colors: ["#5865F2", "#23272A", "#FFFFFF"] },
  { name: "Twitch", slug: "twitch", colors: ["#9146FF", "#000000", "#FFFFFF"] },
  { name: "Twitter / X", slug: "x", colors: ["#000000", "#FFFFFF"] },
  { name: "Instagram", slug: "instagram", colors: ["#E1306C", "#F77737", "#405DE6", "#FCAF45"] },
  { name: "Facebook", slug: "facebook", colors: ["#1877F2", "#FFFFFF"] },
  { name: "TikTok", slug: "tiktok", colors: ["#00F2FE", "#FE2C55", "#000000"] },
  { name: "Snapchat", slug: "snapchat", colors: ["#FFFC00", "#000000", "#FFFFFF"] },
  { name: "Reddit", slug: "reddit", colors: ["#FF4500", "#cee3f8", "#000000"] },
  { name: "Pinterest", slug: "pinterest", colors: ["#E60023", "#FFFFFF"] },
  { name: "Slack", slug: "slack", colors: ["#4A154B", "#36C5F0", "#2EB67D", "#ECB22E"] },
  { name: "LinkedIn", slug: "linkedin", colors: ["#0A66C2", "#FFFFFF"] },
  { name: "WhatsApp", slug: "whatsapp", colors: ["#25D366", "#075E54", "#128C7E"] },
  { name: "Telegram", slug: "telegram", colors: ["#24A1DE", "#FFFFFF"] },
  { name: "Dropbox", slug: "dropbox", colors: ["#0061FF", "#000000"] },
  { name: "Uber", slug: "uber", colors: ["#000000", "#FFFFFF"] },
  { name: "Lyft", slug: "lyft", colors: ["#FF00BF", "#111111"] },
  { name: "Airbnb", slug: "airbnb", colors: ["#FF5A5F", "#00A699", "#FC642D"] },

  // Software, Apps & Payments (51-60)
  { name: "Shopify", slug: "shopify", colors: ["#96BF48", "#004C3F", "#FFFFFF"] },
  { name: "GitHub", slug: "github", colors: ["#24292E", "#FFFFFF"] },
  { name: "Figma", slug: "figma", colors: ["#F24E1E", "#A259FF", "#1ABCFE", "#0ACF83"] },
  { name: "Canva", slug: "canva", colors: ["#00C4CC", "#7D2AE8"] },
  { name: "Notion", slug: "notion", colors: ["#000000", "#FFFFFF"] },
  { name: "Zoom", slug: "zoom", colors: ["#2D8CFF", "#FFFFFF"] },
  { name: "Duolingo", slug: "duolingo", colors: ["#58CC02", "#FFC800", "#CE82FF"] },
  { name: "Tinder", slug: "tinder", colors: ["#FE3C72", "#FF655B"] },
  { name: "Stripe", slug: "stripe", colors: ["#635BFF", "#0A2540"] },
  { name: "PayPal", slug: "paypal", colors: ["#003087", "#0079C1", "#00457C"] },

  // Hardware & Gaming (61-70)
  { name: "Intel", slug: "intel", colors: ["#0071C5", "#00C7FD", "#FFFFFF"] },
  { name: "AMD", slug: "amd", colors: ["#ED1C24", "#000000", "#FFFFFF"] },
  { name: "Nvidia", slug: "nvidia", colors: ["#76B900", "#000000", "#FFFFFF"] },
  { name: "Samsung", slug: "samsung", colors: ["#1428A0", "#000000", "#FFFFFF"] },
  { name: "Sony", slug: "sony", colors: ["#000000", "#FFFFFF"] },
  { name: "PlayStation", slug: "playstation", colors: ["#003791", "#000000", "#FFFFFF"] },
  { name: "Xbox", slug: "xbox", colors: ["#107C10", "#000000"] },
  { name: "Nintendo", slug: "nintendoswitch", colors: ["#E60012", "#FFFFFF"] },
  { name: "Steam", slug: "steam", colors: ["#171A21", "#66C0F4", "#1B2838"] },
  { name: "Epic Games", slug: "epicgames", colors: ["#313131", "#FFFFFF"] },

  // Automotive, Retail & Apparel (71-80)
  { name: "Ferrari", slug: "ferrari", colors: ["#FF2800", "#FFF200", "#00903E"] },
  { name: "Porsche", slug: "porsche", colors: ["#D5001C", "#FFD700", "#000000"] },
  { name: "BMW", slug: "bmw", colors: ["#0066B1", "#70A9D7", "#000000"] },
  { name: "Mercedes-Benz", slug: "mercedes", colors: ["#333333", "#00ADEF"] },
  { name: "Audi", slug: "audi", colors: ["#BB0A30", "#000000"] },
  { name: "Tesla", slug: "tesla", colors: ["#E82127", "#000000"] },
  { name: "Ford", slug: "ford", colors: ["#003478", "#FFFFFF"] },
  { name: "Toyota", slug: "toyota", colors: ["#EB0A1E", "#000000"] },
  { name: "Honda", slug: "honda", colors: ["#CC0000", "#000000"] },
  { name: "Nike", slug: "nike", colors: ["#111111", "#FFFFFF"] }
];

const ROUND_TIME_MS = 7000;
const COOLDOWN_LIMIT = 40;

let score = 0;
let streak = 0;
let bestStreak = parseInt(localStorage.getItem("huebrand_best_streak") || "0", 10);
let currentBrand = null;
let acceptingInput = true;
let deferredPrompt = null;
let recentHistory = [];

let roundStartTime = 0;
let timerInterval = null;

// Game DOM Elements
const displayArea = document.getElementById("displayArea");
const optionsEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const streakEl = document.getElementById("streak");
const bestStreakEl = document.getElementById("bestStreak");
const feedbackEl = document.getElementById("feedback");
const cardLabel = document.getElementById("cardLabel");
const timerBar = document.getElementById("timerBar");

// Modal DOM Elements
const settingsModal = document.getElementById("settingsModal");
const openSettingsBtn = document.getElementById("openSettingsBtn");
const closeSettingsBtn = document.getElementById("closeSettingsBtn");
const installBtn = document.getElementById("installBtn");

const installPromptModal = document.getElementById("installPromptModal");
const confirmInstallBtn = document.getElementById("confirmInstallBtn");
const closeInstallPromptBtn = document.getElementById("closeInstallPromptBtn");
const installInstructionText = document.getElementById("installInstructionText");

bestStreakEl.textContent = bestStreak;

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function startTimer() {
  clearInterval(timerInterval);
  roundStartTime = performance.now();
  timerBar.style.width = "100%";
  timerBar.className = "timer-bar";

  timerInterval = setInterval(() => {
    const elapsed = performance.now() - roundStartTime;
    const remaining = Math.max(0, ROUND_TIME_MS - elapsed);
    const percent = (remaining / ROUND_TIME_MS) * 100;

    timerBar.style.width = `${percent}%`;

    if (percent <= 25) {
      timerBar.className = "timer-bar danger";
    } else if (percent <= 50) {
      timerBar.className = "timer-bar warning";
    } else {
      timerBar.className = "timer-bar";
    }

    if (remaining <= 0) {
      clearInterval(timerInterval);
      handleTimeout();
    }
  }, 50);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function nextRound() {
  acceptingInput = true;
  feedbackEl.textContent = "";
  feedbackEl.className = "feedback";
  cardLabel.textContent = "Brand Color Palette";

  // Filter out recent cooldown pool
  const availablePool = BRANDS.filter((b) => !recentHistory.includes(b.name));
  const pool = availablePool.length > 0 ? availablePool : BRANDS;

  currentBrand = pool[Math.floor(Math.random() * pool.length)];

  recentHistory.push(currentBrand.name);
  if (recentHistory.length > COOLDOWN_LIMIT) {
    recentHistory.shift();
  }

  // Render Swatches
  displayArea.innerHTML = "";
  currentBrand.colors.forEach((color) => {
    const dot = document.createElement("div");
    dot.className = "splotch";
    dot.style.backgroundColor = color;
    displayArea.appendChild(dot);
  });

  const wrongOptions = shuffle(BRANDS.filter((b) => b.name !== currentBrand.name)).slice(0, 3);
  const roundChoices = shuffle([currentBrand, ...wrongOptions]);

  optionsEl.innerHTML = "";
  roundChoices.forEach((brand) => {
    const btn = document.createElement("button");
    btn.className = "btn-option";
    btn.textContent = brand.name;
    btn.onclick = () => handleChoice(brand.name, btn);
    optionsEl.appendChild(btn);
  });

  startTimer();
}

function showBrandLogo(brand) {
  displayArea.innerHTML = "";
  cardLabel.textContent = brand.name;

  const logoImg = document.createElement("img");
  logoImg.className = "revealed-logo";
  logoImg.alt = `${brand.name} logo`;
  
  // Directly loads official verified SVG from jsDelivr
  logoImg.src = `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${brand.slug}.svg`;

  displayArea.appendChild(logoImg);
}

function handleChoice(selectedName, clickedBtn) {
  if (!acceptingInput) return;
  acceptingInput = false;
  stopTimer();

  const elapsed = performance.now() - roundStartTime;
  const buttons = optionsEl.querySelectorAll(".btn-option");
  showBrandLogo(currentBrand);

  if (selectedName === currentBrand.name) {
    streak += 1;

    let speedBonus = 0;
    if (elapsed <= 2000) {
      speedBonus = 50;
    } else if (elapsed < ROUND_TIME_MS) {
      const decayRatio = (ROUND_TIME_MS - elapsed) / (ROUND_TIME_MS - 2000);
      speedBonus = Math.max(0, Math.round(decayRatio * 50));
    }

    const streakBonus = streak * 25;
    const pointsWon = 100 + streakBonus + speedBonus;
    score += pointsWon;

    if (streak > bestStreak) {
      bestStreak = streak;
      localStorage.setItem("huebrand_best_streak", bestStreak);
      bestStreakEl.textContent = bestStreak;
    }

    clickedBtn.classList.add("correct");
    const bonusText = speedBonus > 0 ? ` (+${speedBonus} speed)` : "";
    feedbackEl.textContent = `+${pointsWon} pts${bonusText} (${streak} streak!)`;
    feedbackEl.className = "feedback correct";
  } else {
    streak = 0;
    clickedBtn.classList.add("wrong");
    feedbackEl.textContent = `Incorrect — It's ${currentBrand.name}`;
    feedbackEl.className = "feedback wrong";

    buttons.forEach((btn) => {
      if (btn.textContent === currentBrand.name) {
        btn.classList.add("correct");
      }
    });
  }

  scoreEl.textContent = score;
  streakEl.textContent = streak;

  setTimeout(nextRound, 1500);
}

function handleTimeout() {
  if (!acceptingInput) return;
  acceptingInput = false;

  streak = 0;
  scoreEl.textContent = score;
  streakEl.textContent = streak;

  showBrandLogo(currentBrand);

  const buttons = optionsEl.querySelectorAll(".btn-option");
  buttons.forEach((btn) => {
    if (btn.textContent === currentBrand.name) {
      btn.classList.add("correct");
    }
  });

  feedbackEl.textContent = `Time's Up! — It's ${currentBrand.name}`;
  feedbackEl.className = "feedback wrong";

  setTimeout(nextRound, 1500);
}

// Modal Listeners
openSettingsBtn.addEventListener("click", () => settingsModal.classList.add("active"));
closeSettingsBtn.addEventListener("click", () => settingsModal.classList.remove("active"));
settingsModal.addEventListener("click", (e) => {
  if (e.target === settingsModal) settingsModal.classList.remove("active");
});

// PWA Install Handling
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
});

installBtn.addEventListener("click", () => {
  settingsModal.classList.remove("active");

  if (deferredPrompt) {
    installInstructionText.textContent = "Install HUEBRAND to your home screen or desktop for fast, offline access.";
    confirmInstallBtn.style.display = "block";
  } else {
    installInstructionText.textContent = "To install: tap your browser menu and choose 'Add to Home Screen' or 'Install App'.";
    confirmInstallBtn.style.display = "none";
  }

  installPromptModal.classList.add("active");
});

confirmInstallBtn.addEventListener("click", async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
  }
  installPromptModal.classList.remove("active");
});

closeInstallPromptBtn.addEventListener("click", () => {
  installPromptModal.classList.remove("active");
});

installPromptModal.addEventListener("click", (e) => {
  if (e.target === installPromptModal) installPromptModal.classList.remove("active");
});

nextRound();