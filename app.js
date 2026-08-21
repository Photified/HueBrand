const BRANDS = [
  // Fast Food & Dining
  { name: "McDonald's", id: "mcdonalds", colors: ["#DA291C", "#FFC72C"] },
  { name: "Burger King", id: "burgerking", colors: ["#D62300", "#FBE122", "#502314"] },
  { name: "Subway", id: "subway", colors: ["#008C15", "#FFC600"] },
  { name: "Taco Bell", id: "tacobell", colors: ["#702082", "#A77BCA", "#000000"] },
  { name: "KFC", id: "kfc", colors: ["#A3080C", "#000000", "#FFFFFF"] },
  { name: "Pizza Hut", id: "pizzahut", colors: ["#EE3124", "#00A859", "#FFC425"] },
  { name: "Domino's", id: "dominos", colors: ["#006491", "#E31837"] },
  { name: "Starbucks", id: "starbucks", colors: ["#00704A", "#1E3932", "#FFFFFF"] },
  { name: "Dunkin'", id: "dunkin", colors: ["#FF671F", "#DA1884", "#653819"] },
  { name: "Chipotle", id: "chipotle", colors: ["#451400", "#AD343E"] },
  { name: "Coca-Cola", id: "cocacola", colors: ["#F40009", "#000000", "#FFFFFF"] },
  { name: "Pepsi", id: "pepsi", colors: ["#004B93", "#C9002B", "#FFFFFF"] },
  { name: "Red Bull", id: "redbull", colors: ["#001D4A", "#DB0A40", "#FFCC00"] },
  { name: "Heineken", id: "heineken", colors: ["#008200", "#FF0000"] },

  // Tech, Web & Social Platforms
  { name: "Google", id: "google", colors: ["#4285F4", "#EA4335", "#FBBC05", "#34A853"] },
  { name: "Microsoft", id: "microsoft", colors: ["#F25022", "#7FBA00", "#00A4EF", "#FFB900"] },
  { name: "Apple", id: "apple", colors: ["#555555", "#000000", "#FFFFFF"] },
  { name: "Amazon", id: "amazon", colors: ["#FF9900", "#146EB4", "#000000"] },
  { name: "Meta", id: "meta", colors: ["#0081FB", "#0064E0"] },
  { name: "YouTube", id: "youtube", colors: ["#FF0000", "#282828", "#FFFFFF"] },
  { name: "Spotify", id: "spotify", colors: ["#1DB954", "#191414"] },
  { name: "Netflix", id: "netflix", colors: ["#E50914", "#000000"] },
  { name: "Discord", id: "discord", colors: ["#5865F2", "#23272A", "#FFFFFF"] },
  { name: "Twitch", id: "twitch", colors: ["#9146FF", "#000000", "#FFFFFF"] },
  { name: "Twitter / X", id: "twitter", colors: ["#1DA1F2", "#FFFFFF"] },
  { name: "Instagram", id: "instagram", colors: ["#E1306C", "#F77737", "#405DE6", "#FCAF45"] },
  { name: "Facebook", id: "facebook", colors: ["#1877F2", "#FFFFFF"] },
  { name: "TikTok", id: "tiktok", colors: ["#00F2FE", "#FE2C55", "#000000"] },
  { name: "Snapchat", id: "snapchat", colors: ["#FFFC00", "#000000", "#FFFFFF"] },
  { name: "Reddit", id: "reddit", colors: ["#FF4500", "#cee3f8", "#000000"] },
  { name: "Pinterest", id: "pinterest", colors: ["#E60023", "#FFFFFF"] },
  { name: "Slack", id: "slack", colors: ["#4A154B", "#36C5F0", "#2EB67D", "#ECB22E"] },
  { name: "LinkedIn", id: "linkedin", colors: ["#0A66C2", "#FFFFFF"] },
  { name: "WhatsApp", id: "whatsapp", colors: ["#25D366", "#075E54", "#128C7E"] },
  { name: "Telegram", id: "telegram", colors: ["#24A1DE", "#FFFFFF"] },
  { name: "Dropbox", id: "dropbox", colors: ["#0061FF", "#000000"] },
  { name: "Uber", id: "uber", colors: ["#000000", "#FFFFFF"] },
  { name: "Lyft", id: "lyft", colors: ["#FF00BF", "#111111"] },
  { name: "Airbnb", id: "airbnb", colors: ["#FF5A5F", "#00A699", "#FC642D"] },
  { name: "Shopify", id: "shopify", colors: ["#96BF48", "#004C3F", "#FFFFFF"] },
  { name: "GitHub", id: "github", colors: ["#24292E", "#FFFFFF"] },
  { name: "GitLab", id: "gitlab", colors: ["#FC6D26", "#E24329", "#FCA326"] },
  { name: "Figma", id: "figma", colors: ["#F24E1E", "#A259FF", "#1ABCFE", "#0ACF83"] },
  { name: "Canva", id: "canva", colors: ["#00C4CC", "#7D2AE8"] },
  { name: "Notion", id: "notion", colors: ["#000000", "#FFFFFF"] },
  { name: "Trello", id: "trello", colors: ["#0079BF", "#00C2E0"] },
  { name: "Asana", id: "asana", colors: ["#F06A6A", "#27333F"] },
  { name: "Zoom", id: "zoom", colors: ["#2D8CFF", "#FFFFFF"] },
  { name: "Skype", id: "skype", colors: ["#00AFF0", "#FFFFFF"] },
  { name: "SoundCloud", id: "soundcloud", colors: ["#FF5500", "#000000"] },
  { name: "Duolingo", id: "duolingo", colors: ["#58CC02", "#FFC800", "#CE82FF"] },
  { name: "Tinder", id: "tinder", colors: ["#FE3C72", "#FF655B"] },
  { name: "WordPress", id: "wordpress", colors: ["#21759B", "#D54E21"] },
  { name: "Salesforce", id: "salesforce", colors: ["#00A1E0", "#FFFFFF"] },
  { name: "HubSpot", id: "hubspot", colors: ["#FF7A59", "#33475B"] },
  { name: "Mailchimp", id: "mailchimp", colors: ["#FFE01B", "#241C15"] },
  { name: "Stripe", id: "stripe", colors: ["#635BFF", "#0A2540"] },
  { name: "PayPal", id: "paypal", colors: ["#003087", "#0079C1", "#00457C"] },
  { name: "Square", id: "square", colors: ["#000000", "#FFFFFF"] },
  { name: "Coinbase", id: "coinbase", colors: ["#0052FF", "#FFFFFF"] },

  // Hardware & Gaming
  { name: "Intel", id: "intel", colors: ["#0071C5", "#00C7FD", "#FFFFFF"] },
  { name: "AMD", id: "amd", colors: ["#ED1C24", "#000000", "#FFFFFF"] },
  { name: "Nvidia", id: "nvidia", colors: ["#76B900", "#000000", "#FFFFFF"] },
  { name: "Samsung", id: "samsung", colors: ["#1428A0", "#000000", "#FFFFFF"] },
  { name: "Sony", id: "sony", colors: ["#000000", "#FFFFFF"] },
  { name: "LG", id: "lg", colors: ["#A50034", "#6B6B6B"] },
  { name: "Dell", id: "dell", colors: ["#007DB8", "#000000"] },
  { name: "HP", id: "hp", colors: ["#0096D6", "#000000"] },
  { name: "Lenovo", id: "lenovo", colors: ["#E2231A", "#000000"] },
  { name: "ASUS", id: "asus", colors: ["#00539B", "#000000"] },
  { name: "Logitech", id: "logitech", colors: ["#00B8FC", "#2F3132"] },
  { name: "Razer", id: "razer", colors: ["#00FF00", "#000000"] },
  { name: "Qualcomm", id: "qualcomm", colors: ["#3253DC", "#000000"] },
  { name: "Cisco", id: "cisco", colors: ["#049FD9", "#1BA0D7", "#2B5592"] },
  { name: "IBM", id: "ibm", colors: ["#054ADA", "#000000"] },
  { name: "Oracle", id: "oracle", colors: ["#F80000", "#000000"] },
  { name: "Nokia", id: "nokia", colors: ["#124191", "#FFFFFF"] },
  { name: "GoPro", id: "gopro", colors: ["#00A0DF", "#000000"] },
  { name: "Canon", id: "canon", colors: ["#CC0000", "#000000"] },
  { name: "Nikon", id: "nikon", colors: ["#FFE100", "#000000"] },
  { name: "Bose", id: "bose", colors: ["#000000", "#FFFFFF"] },
  { name: "JBL", id: "jbl", colors: ["#FF6600", "#000000"] },
  { name: "Corsair", id: "corsair", colors: ["#F3D03E", "#000000"] },
  { name: "SteelSeries", id: "steelseries", colors: ["#FF5200", "#000000"] },
  { name: "PlayStation", id: "playstation", colors: ["#003791", "#000000", "#FFFFFF"] },
  { name: "Xbox", id: "xbox", colors: ["#107C10", "#000000"] },
  { name: "Nintendo", id: "nintendo", colors: ["#E60012", "#FFFFFF"] },
  { name: "Steam", id: "steam", colors: ["#171A21", "#66C0F4", "#1B2838"] },
  { name: "Epic Games", id: "epicgames", colors: ["#313131", "#FFFFFF"] },
  { name: "Unity", id: "unity", colors: ["#222C37", "#FFFFFF"] },
  { name: "Unreal Engine", id: "unrealengine", colors: ["#0E1128", "#FFFFFF"] },
  { name: "Riot Games", id: "riotgames", colors: ["#D12727", "#000000"] },
  { name: "Ubisoft", id: "ubisoft", colors: ["#000000", "#006EFF"] },
  { name: "EA Sports", id: "ea", colors: ["#FF4747", "#000000"] },

  // Retail & Delivery
  { name: "IKEA", id: "ikea", colors: ["#0051BA", "#FFDA1A"] },
  { name: "Target", id: "target", colors: ["#CC0000", "#FFFFFF"] },
  { name: "Walmart", id: "walmart", colors: ["#0071CE", "#FFC220"] },
  { name: "Best Buy", id: "bestbuy", colors: ["#0046BE", "#FFE000"] },
  { name: "Home Depot", id: "homedepot", colors: ["#F96302", "#FFFFFF"] },
  { name: "Costco", id: "costco", colors: ["#005DAA", "#E31837"] },
  { name: "FedEx", id: "fedex", colors: ["#4D148C", "#FF6600"] },
  { name: "UPS", id: "ups", colors: ["#351C15", "#FFB500"] },
  { name: "DHL", id: "dhl", colors: ["#FFCC00", "#D40511"] },
  { name: "Lego", id: "lego", colors: ["#D11013", "#FFD500", "#000000"] },
  { name: "eBay", id: "ebay", colors: ["#E53238", "#0064D2", "#F5AF02", "#86B817"] },
  { name: "Etsy", id: "etsy", colors: ["#F16521", "#FFFFFF"] },
  { name: "Alibaba", id: "alibaba", colors: ["#FF6A00", "#FFFFFF"] },
  { name: "Decathlon", id: "decathlon", colors: ["#0082C3", "#FFFFFF"] },

  // Automotive & Racing
  { name: "Ferrari", id: "ferrari", colors: ["#FF2800", "#FFF200", "#00903E"] },
  { name: "Porsche", id: "porsche", colors: ["#D5001C", "#FFD700", "#000000"] },
  { name: "BMW", id: "bmw", colors: ["#0066B1", "#70A9D7", "#000000"] },
  { name: "Mercedes-Benz", id: "mercedes", colors: ["#333333", "#00ADEF"] },
  { name: "Audi", id: "audi", colors: ["#BB0A30", "#000000"] },
  { name: "Ford", id: "ford", colors: ["#003478", "#FFFFFF"] },
  { name: "Tesla", id: "tesla", colors: ["#E82127", "#000000"] },
  { name: "Chevrolet", id: "chevrolet", colors: ["#CBA135", "#000000"] },
  { name: "Toyota", id: "toyota", colors: ["#EB0A1E", "#000000"] },
  { name: "Honda", id: "honda", colors: ["#CC0000", "#000000"] },
  { name: "Volkswagen", id: "volkswagen", colors: ["#001E50", "#1E64B4"] },
  { name: "Nissan", id: "nissan", colors: ["#C3002F", "#000000"] },
  { name: "Hyundai", id: "hyundai", colors: ["#002C6C", "#00AAD2"] },
  { name: "Kia", id: "kia", colors: ["#05141F", "#EA0029"] },
  { name: "Subaru", id: "subaru", colors: ["#013C7B", "#FFFFFF"] },
  { name: "Mazda", id: "mazda", colors: ["#101010", "#910000"] },
  { name: "Volvo", id: "volvo", colors: ["#003057", "#1E4F7C"] },
  { name: "Jaguar", id: "jaguar", colors: ["#005A36", "#505050"] },
  { name: "Land Rover", id: "landrover", colors: ["#0C5A35", "#FFFFFF"] },
  { name: "Aston Martin", id: "astonmartin", colors: ["#004838", "#FFFFFF"] },
  { name: "McLaren", id: "mclaren", colors: ["#FF8000", "#000000"] },
  { name: "Harley-Davidson", id: "harleydavidson", colors: ["#FF6600", "#000000"] },
  { name: "Yamaha", id: "yamaha", colors: ["#0033A0", "#CC0000"] },
  { name: "Michelin", id: "michelin", colors: ["#002F6C", "#FFE600"] },
  { name: "Pirelli", id: "pirelli", colors: ["#FED100", "#D52B1E"] },
  { name: "Shell", id: "shell", colors: ["#FBCE07", "#DD1D21"] },
  { name: "BP", id: "bp", colors: ["#007A3D", "#FFDE00"] },

  // Apparel & Fashion
  { name: "Nike", id: "nike", colors: ["#111111", "#FFFFFF"] },
  { name: "Adidas", id: "adidas", colors: ["#000000", "#FFFFFF"] },
  { name: "Puma", id: "puma", colors: ["#000000", "#BA0C2F"] },
  { name: "Under Armour", id: "underarmour", colors: ["#1D1D1D", "#E03A3E"] },
  { name: "Vans", id: "vans", colors: ["#BA0C2F", "#000000"] },
  { name: "New Balance", id: "newbalance", colors: ["#CE0E2D", "#002B49"] },
  { name: "Converse", id: "converse", colors: ["#000000", "#E31837"] },
  { name: "Reebok", id: "reebok", colors: ["#D41B2C", "#0B163B"] },
  { name: "Champion", id: "champion", colors: ["#00205B", "#C8102E"] },
  { name: "ASICS", id: "asics", colors: ["#001E62", "#FFFFFF"] },
  { name: "The North Face", id: "thenorthface", colors: ["#ED1B2D", "#000000"] },
  { name: "Columbia", id: "columbia", colors: ["#0072CE", "#1D252C"] },
  { name: "Patagonia", id: "patagonia", colors: ["#231F20", "#F47D31", "#5C2D91"] },
  { name: "Lululemon", id: "lululemon", colors: ["#D31334", "#000000"] },
  { name: "Levi's", id: "levis", colors: ["#C41230", "#FFFFFF"] },
  { name: "Gap", id: "gap", colors: ["#002855", "#FFFFFF"] },
  { name: "H&M", id: "hm", colors: ["#CD040B", "#FFFFFF"] },
  { name: "Zara", id: "zara", colors: ["#000000", "#FFFFFF"] },
  { name: "Uniqlo", id: "uniqlo", colors: ["#EE1C25", "#FFFFFF"] },
  { name: "Tommy Hilfiger", id: "tommyhilfiger", colors: ["#00174F", "#CC0C2F", "#FFFFFF"] },
  { name: "Calvin Klein", id: "calvinklein", colors: ["#000000", "#FFFFFF"] },
  { name: "Lacoste", id: "lacoste", colors: ["#004526", "#C8102E"] },
  { name: "Gucci", id: "gucci", colors: ["#00552E", "#AE0E17", "#000000"] },
  { name: "Louis Vuitton", id: "louisvuitton", colors: ["#4E3D28", "#876D49"] },
  { name: "Chanel", id: "chanel", colors: ["#000000", "#FFFFFF"] },
  { name: "Prada", id: "prada", colors: ["#000000", "#FFFFFF"] },
  { name: "Hermès", id: "hermes", colors: ["#F37021", "#4A2E12"] },
  { name: "Dior", id: "dior", colors: ["#000000", "#808080"] },
  { name: "Burberry", id: "burberry", colors: ["#000000", "#C5A059", "#A6192E"] },
  { name: "Versace", id: "versace", colors: ["#000000", "#DAA520"] },
  { name: "Armani", id: "armani", colors: ["#000000", "#FFFFFF"] },
  { name: "Balenciaga", id: "balenciaga", colors: ["#000000", "#FFFFFF"] },
  { name: "Rolex", id: "rolex", colors: ["#006039", "#A37E2C"] },

  // Finance, Media & Telecom
  { name: "Mastercard", id: "mastercard", colors: ["#EB001B", "#F79E1B", "#FF5F00"] },
  { name: "Visa", id: "visa", colors: ["#1A1F71", "#F7B600"] },
  { name: "American Express", id: "americanexpress", colors: ["#006FCF", "#FFFFFF"] },
  { name: "Chase", id: "chase", colors: ["#117ACA", "#0A2540"] },
  { name: "Bank of America", id: "bankofamerica", colors: ["#E31837", "#00529B"] },
  { name: "T-Mobile", id: "tmobile", colors: ["#E20074", "#FFFFFF"] },
  { name: "Verizon", id: "verizon", colors: ["#CD040B", "#000000"] },
  { name: "AT&T", id: "att", colors: ["#00A8E0", "#0057B8"] },
  { name: "Vodafone", id: "vodafone", colors: ["#E60000", "#FFFFFF"] },
  { name: "BBC", id: "bbc", colors: ["#000000", "#FF0000"] },
  { name: "CNN", id: "cnn", colors: ["#CC0000", "#000000"] },
  { name: "HBO", id: "hbo", colors: ["#000000", "#582C83"] },
  { name: "ESPN", id: "espn", colors: ["#CD0000", "#000000"] },
  { name: "Disney", id: "disney", colors: ["#113CCF", "#FFFFFF"] },
  { name: "Hulu", id: "hulu", colors: ["#1CE783", "#0B0C0F"] }
];

const ROUND_TIME_MS = 7000;
const COOLDOWN_LIMIT = 50;

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

  // Filter out brands in active 50-turn cooldown
  const availablePool = BRANDS.filter((b) => !recentHistory.includes(b.name));
  const pool = availablePool.length > 0 ? availablePool : BRANDS;

  currentBrand = pool[Math.floor(Math.random() * pool.length)];

  // Push to recent cooldown queue
  recentHistory.push(currentBrand.name);
  if (recentHistory.length > COOLDOWN_LIMIT) {
    recentHistory.shift();
  }

  // Render Color Splotches
  displayArea.innerHTML = "";
  currentBrand.colors.forEach((color) => {
    const dot = document.createElement("div");
    dot.className = "splotch";
    dot.style.backgroundColor = color;
    displayArea.appendChild(dot);
  });

  // Pick 3 random incorrect choices
  const wrongOptions = shuffle(BRANDS.filter((b) => b.name !== currentBrand.name)).slice(0, 3);
  const roundChoices = shuffle([currentBrand, ...wrongOptions]);

  // Render Choice Buttons
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
  
  // Directly loads full-color local SVG
  logoImg.src = `images/brands/${brand.id}.svg`;

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