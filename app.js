const BRANDFETCH_CLIENT_ID = "1idWjsaz1tAHjoTtdKm";

const BRANDS = [
  // Fast Food & Dining
  { name: "McDonald's", domain: "mcdonalds.com", colors: ["#DA291C", "#FFC72C"] },
  { name: "Burger King", domain: "bk.com", colors: ["#D62300", "#FBE122", "#502314"] },
  { name: "Subway", domain: "subway.com", colors: ["#008C15", "#FFC600"] },
  { name: "Taco Bell", domain: "tacobell.com", colors: ["#702082", "#A77BCA", "#000000"] },
  { name: "KFC", domain: "kfc.com", colors: ["#A3080C", "#000000", "#FFFFFF"] },
  { name: "Pizza Hut", domain: "pizzahut.com", colors: ["#EE3124", "#00A859", "#FFC425"] },
  { name: "Domino's", domain: "dominos.com", colors: ["#006491", "#E31837"] },
  { name: "Starbucks", domain: "starbucks.com", colors: ["#00704A", "#1E3932", "#FFFFFF"] },
  { name: "Dunkin'", domain: "dunkin.com", colors: ["#FF671F", "#DA1884", "#653819"] },
  { name: "Chipotle", domain: "chipotle.com", colors: ["#451400", "#AD343E"] },
  { name: "Nando's", domain: "nandos.com", colors: ["#000000", "#C8102E", "#F4C430"] },
  { name: "Dairy Queen", domain: "dairyqueen.com", colors: ["#EE3124", "#005696"] },
  { name: "Krispy Kreme", domain: "krispykreme.com", colors: ["#007A3D", "#DD131D"] },
  { name: "Baskin-Robbins", domain: "baskinrobbins.com", colors: ["#315BA7", "#EC1B69"] },
  { name: "Shake Shack", domain: "shakeshack.com", colors: ["#5CA432", "#000000"] },

  // Beverages & Packaged Goods
  { name: "Coca-Cola", domain: "coca-cola.com", colors: ["#F40009", "#000000", "#FFFFFF"] },
  { name: "Pepsi", domain: "pepsi.com", colors: ["#004B93", "#C9002B", "#FFFFFF"] },
  { name: "Red Bull", domain: "redbull.com", colors: ["#001D4A", "#DB0A40", "#FFCC00"] },
  { name: "Monster Energy", domain: "monsterenergy.com", colors: ["#95D600", "#000000"] },
  { name: "Heineken", domain: "heineken.com", colors: ["#008200", "#FF0000"] },
  { name: "Budweiser", domain: "budweiser.com", colors: ["#C8102E", "#15244C", "#D1A153"] },
  { name: "Guinness", domain: "guinness.com", colors: ["#000000", "#D6B265", "#FFFFFF"] },
  { name: "Carlsberg", domain: "carlsberg.com", colors: ["#00382B", "#FFFFFF"] },
  { name: "Stella Artois", domain: "stellaartois.com", colors: ["#9E1B32", "#C69214", "#FFFFFF"] },

  // Big Tech & Platforms
  { name: "Google", domain: "google.com", colors: ["#4285F4", "#EA4335", "#FBBC05", "#34A853"] },
  { name: "Microsoft", domain: "microsoft.com", colors: ["#F25022", "#7FBA00", "#00A4EF", "#FFB900"] },
  { name: "Apple", domain: "apple.com", colors: ["#555555", "#000000", "#FFFFFF"] },
  { name: "Amazon", domain: "amazon.com", colors: ["#FF9900", "#146EB4", "#000000"] },
  { name: "Meta", domain: "meta.com", colors: ["#0081FB", "#0064E0"] },
  { name: "YouTube", domain: "youtube.com", colors: ["#FF0000", "#282828", "#FFFFFF"] },
  { name: "Spotify", domain: "spotify.com", colors: ["#1DB954", "#191414"] },
  { name: "Netflix", domain: "netflix.com", colors: ["#E50914", "#000000"] },
  { name: "Discord", domain: "discord.com", colors: ["#5865F2", "#23272A", "#FFFFFF"] },
  { name: "Twitch", domain: "twitch.tv", colors: ["#9146FF", "#000000", "#FFFFFF"] },
  { name: "Twitter / X", domain: "x.com", colors: ["#000000", "#FFFFFF"] },
  { name: "Instagram", domain: "instagram.com", colors: ["#E1306C", "#F77737", "#405DE6", "#FCAF45"] },
  { name: "Facebook", domain: "facebook.com", colors: ["#1877F2", "#FFFFFF"] },
  { name: "TikTok", domain: "tiktok.com", colors: ["#00F2FE", "#FE2C55", "#000000"] },
  { name: "Snapchat", domain: "snapchat.com", colors: ["#FFFC00", "#000000", "#FFFFFF"] },
  { name: "Reddit", domain: "reddit.com", colors: ["#FF4500", "#CEE3F8", "#000000"] },
  { name: "Pinterest", domain: "pinterest.com", colors: ["#E60023", "#FFFFFF"] },
  { name: "Slack", domain: "slack.com", colors: ["#4A154B", "#36C5F0", "#2EB67D", "#ECB22E"] },
  { name: "LinkedIn", domain: "linkedin.com", colors: ["#0A66C2", "#FFFFFF"] },
  { name: "WhatsApp", domain: "whatsapp.com", colors: ["#25D366", "#075E54", "#128C7E"] },
  { name: "Telegram", domain: "telegram.org", colors: ["#24A1DE", "#FFFFFF"] },
  { name: "Dropbox", domain: "dropbox.com", colors: ["#0061FF", "#000000"] },
  { name: "Uber", domain: "uber.com", colors: ["#000000", "#FFFFFF"] },
  { name: "Airbnb", domain: "airbnb.com", colors: ["#FF5A5F", "#00A699", "#FC642D"] },
  { name: "GitHub", domain: "github.com", colors: ["#24292E", "#FFFFFF"] },

  // Hardware & Gaming
  { name: "Intel", domain: "intel.com", colors: ["#0071C5", "#00C7FD", "#FFFFFF"] },
  { name: "AMD", domain: "amd.com", colors: ["#ED1C24", "#000000", "#FFFFFF"] },
  { name: "Nvidia", domain: "nvidia.com", colors: ["#76B900", "#000000", "#FFFFFF"] },
  { name: "Samsung", domain: "samsung.com", colors: ["#1428A0", "#000000", "#FFFFFF"] },
  { name: "Sony", domain: "sony.com", colors: ["#000000", "#FFFFFF"] },
  { name: "PlayStation", domain: "playstation.com", colors: ["#003791", "#000000", "#FFFFFF"] },
  { name: "Xbox", domain: "xbox.com", colors: ["#107C10", "#000000"] },
  { name: "Nintendo", domain: "nintendo.com", colors: ["#E60012", "#FFFFFF"] },
  { name: "Steam", domain: "steampowered.com", colors: ["#171A21", "#66C0F4", "#1B2838"] },
  { name: "Epic Games", domain: "epicgames.com", colors: ["#313131", "#FFFFFF"] },

  // Automotive, Retail & Finance
  { name: "Ferrari", domain: "ferrari.com", colors: ["#FF2800", "#FFF200", "#00903E"] },
  { name: "Porsche", domain: "porsche.com", colors: ["#D5001C", "#FFD700", "#000000"] },
  { name: "BMW", domain: "bmw.com", colors: ["#0066B1", "#70A9D7", "#000000"] },
  { name: "Mercedes-Benz", domain: "mercedes-benz.com", colors: ["#333333", "#00ADEF"] },
  { name: "Tesla", domain: "tesla.com", colors: ["#E82127", "#000000"] },
  { name: "Ford", domain: "ford.com", colors: ["#003478", "#FFFFFF"] },
  { name: "Toyota", domain: "toyota.com", colors: ["#EB0A1E", "#000000"] },
  { name: "IKEA", domain: "ikea.com", colors: ["#0051BA", "#FFDA1A"] },
  { name: "Target", domain: "target.com", colors: ["#CC0000", "#FFFFFF"] },
  { name: "Walmart", domain: "walmart.com", colors: ["#0071CE", "#FFC220"] },
  { name: "Lego", domain: "lego.com", colors: ["#D11013", "#FFD500", "#000000"] },
  { name: "Nike", domain: "nike.com", colors: ["#111111", "#FFFFFF"] },
  { name: "Mastercard", domain: "mastercard.com", colors: ["#EB001B", "#F79E1B", "#FF5F00"] },
  { name: "Visa", domain: "visa.com", colors: ["#1A1F71", "#F7B600"] },
  { name: "PayPal", domain: "paypal.com", colors: ["#003087", "#0079C1", "#00457C"] }
];

const ROUND_TIME_MS = 7000;
const COOLDOWN_LIMIT = 25;

let score = 0;
let streak = 0;

let bestStreak = parseInt(
  localStorage.getItem("huebrand_best_streak") || "0",
  10
);

let currentBrand = null;
let acceptingInput = true;
let deferredPrompt = null;
let recentHistory = [];

let roundStartTime = 0;
let timerInterval = null;

// Stores the Brandfetch URL that successfully worked for each brand.
const resolvedLogoSources = new Map();


// =====================================================
// DOM ELEMENTS
// =====================================================

const displayArea = document.getElementById("displayArea");
const optionsEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const streakEl = document.getElementById("streak");
const bestStreakEl = document.getElementById("bestStreak");
const feedbackEl = document.getElementById("feedback");
const cardLabel = document.getElementById("cardLabel");
const timerBar = document.getElementById("timerBar");

const settingsModal = document.getElementById("settingsModal");
const openSettingsBtn = document.getElementById("openSettingsBtn");
const closeSettingsBtn = document.getElementById("closeSettingsBtn");
const installBtn = document.getElementById("installBtn");

const installPromptModal = document.getElementById("installPromptModal");
const confirmInstallBtn = document.getElementById("confirmInstallBtn");
const closeInstallPromptBtn = document.getElementById("closeInstallPromptBtn");
const installInstructionText = document.getElementById("installInstructionText");

bestStreakEl.textContent = bestStreak;


// =====================================================
// GENERAL HELPERS
// =====================================================

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}


// =====================================================
// BRANDFETCH LOGO SYSTEM
// =====================================================

function buildBrandfetchUrl(brand, type, theme = "") {
  const domain = encodeURIComponent(brand.domain);

  let url =
    `https://cdn.brandfetch.io/domain/${domain}` +
    `/w/800/h/400`;

  if (theme) {
    url += `/theme/${theme}`;
  }

  url +=
    `/fallback/404/type/${type}` +
    `?c=${BRANDFETCH_CLIENT_ID}`;

  return url;
}


function getBrandfetchSources(brand) {
  return [
    // ICON FIRST:
    // Usually the most colorful/social-profile version of the brand.
    buildBrandfetchUrl(brand, "icon"),

    // Symbol is often the main recognizable brand mark.
    buildBrandfetchUrl(brand, "symbol"),

    // Full horizontal logo.
    buildBrandfetchUrl(brand, "logo"),

    // Theme variants in case the default asset is unavailable.
    buildBrandfetchUrl(brand, "icon", "dark"),
    buildBrandfetchUrl(brand, "symbol", "dark"),
    buildBrandfetchUrl(brand, "logo", "dark"),

    buildBrandfetchUrl(brand, "icon", "light"),
    buildBrandfetchUrl(brand, "symbol", "light"),
    buildBrandfetchUrl(brand, "logo", "light")
  ];
}


function preloadBrandLogo(brand) {
  if (!brand) {
    return;
  }

  if (resolvedLogoSources.has(brand.name)) {
    return;
  }

  const sources = getBrandfetchSources(brand);

  let sourceIndex = 0;

  function tryNextSource() {
    if (sourceIndex >= sources.length) {
      return;
    }

    const source = sources[sourceIndex++];

    const preloadImage = new Image();

    preloadImage.referrerPolicy = "no-referrer";

    preloadImage.onload = () => {
      if (
        preloadImage.naturalWidth > 1 &&
        preloadImage.naturalHeight > 1
      ) {
        resolvedLogoSources.set(
          brand.name,
          source
        );
      } else {
        tryNextSource();
      }
    };

    preloadImage.onerror = () => {
      tryNextSource();
    };

    preloadImage.src = source;
  }

  tryNextSource();
}


function showLogoFallback(brand) {
  displayArea.innerHTML = "";

  const fallback = document.createElement("div");

  fallback.setAttribute(
    "role",
    "img"
  );

  fallback.setAttribute(
    "aria-label",
    `${brand.name} logo`
  );

  fallback.textContent = brand.name;

  let background;

  if (brand.colors.length === 1) {
    background = brand.colors[0];
  } else {
    background =
      `linear-gradient(135deg, ${brand.colors.join(", ")})`;
  }

  fallback.style.width = "100%";
  fallback.style.maxWidth = "400px";
  fallback.style.height = "200px";

  fallback.style.display = "flex";
  fallback.style.alignItems = "center";
  fallback.style.justifyContent = "center";

  fallback.style.padding = "24px";

  fallback.style.borderRadius = "20px";

  fallback.style.background = background;

  fallback.style.border =
    "2px solid rgba(255,255,255,0.2)";

  fallback.style.boxShadow =
    "0 12px 32px rgba(0,0,0,0.5)";

  fallback.style.color = "#FFFFFF";

  fallback.style.textShadow =
    "0 2px 8px rgba(0,0,0,0.8)";

  fallback.style.fontSize =
    "clamp(1.5rem, 7vw, 2.5rem)";

  fallback.style.fontWeight = "900";

  fallback.style.textAlign = "center";

  fallback.style.animation =
    "popIn 0.35s cubic-bezier(0.34,1.56,0.64,1)";

  displayArea.appendChild(fallback);
}


function showBrandLogo(brand) {
  displayArea.innerHTML = "";

  cardLabel.textContent = brand.name;

  const logoImg =
    document.createElement("img");

  logoImg.className =
    "revealed-logo";

  logoImg.alt =
    `${brand.name} logo`;

  logoImg.referrerPolicy =
    "no-referrer";

  const savedSource =
    resolvedLogoSources.get(
      brand.name
    );

  const normalSources =
    getBrandfetchSources(
      brand
    );

  let sources;

  if (savedSource) {
    sources = [
      savedSource,
      ...normalSources.filter(
        (source) =>
          source !== savedSource
      )
    ];
  } else {
    sources = normalSources;
  }

  let sourceIndex = 0;
  let logoTimeout = null;
  let requestNumber = 0;


  function clearCurrentTimeout() {
    if (logoTimeout) {
      clearTimeout(logoTimeout);

      logoTimeout = null;
    }
  }


  function loadNextSource() {
    clearCurrentTimeout();

    if (
      sourceIndex >=
      sources.length
    ) {
      showLogoFallback(brand);

      return;
    }

    const source =
      sources[sourceIndex++];

    requestNumber += 1;

    const thisRequest =
      requestNumber;

    logoImg.onload = () => {
      if (
        thisRequest !==
        requestNumber
      ) {
        return;
      }

      clearCurrentTimeout();

      if (
        logoImg.naturalWidth > 1 &&
        logoImg.naturalHeight > 1
      ) {
        resolvedLogoSources.set(
          brand.name,
          source
        );
      } else {
        loadNextSource();
      }
    };


    logoImg.onerror = () => {
      if (
        thisRequest !==
        requestNumber
      ) {
        return;
      }

      loadNextSource();
    };


    logoImg.src = source;


    // If a logo server hangs instead of returning an error,
    // move on automatically.
    logoTimeout =
      setTimeout(() => {
        if (
          thisRequest !==
          requestNumber
        ) {
          return;
        }

        if (
          !logoImg.complete ||
          logoImg.naturalWidth <= 1
        ) {
          loadNextSource();
        }
      }, 2000);
  }


  displayArea.appendChild(
    logoImg
  );

  loadNextSource();
}


// =====================================================
// TIMER
// =====================================================

function startTimer() {
  clearInterval(
    timerInterval
  );

  roundStartTime =
    performance.now();

  timerBar.style.width =
    "100%";

  timerBar.className =
    "timer-bar";

  timerInterval =
    setInterval(() => {
      const elapsed =
        performance.now() -
        roundStartTime;

      const remaining =
        Math.max(
          0,
          ROUND_TIME_MS -
          elapsed
        );

      const percent =
        (
          remaining /
          ROUND_TIME_MS
        ) * 100;

      timerBar.style.width =
        `${percent}%`;

      if (percent <= 25) {
        timerBar.className =
          "timer-bar danger";
      } else if (
        percent <= 50
      ) {
        timerBar.className =
          "timer-bar warning";
      } else {
        timerBar.className =
          "timer-bar";
      }

      if (remaining <= 0) {
        clearInterval(
          timerInterval
        );

        handleTimeout();
      }

    }, 50);
}


function stopTimer() {
  clearInterval(
    timerInterval
  );
}


// =====================================================
// NEXT ROUND
// =====================================================

function nextRound() {
  acceptingInput = true;

  feedbackEl.textContent = "";

  feedbackEl.className =
    "feedback";

  cardLabel.textContent =
    "Brand Color Palette";


  const availablePool =
    BRANDS.filter(
      (brand) =>
        !recentHistory.includes(
          brand.name
        )
    );


  const pool =
    availablePool.length > 0
      ? availablePool
      : BRANDS;


  currentBrand =
    pool[
      Math.floor(
        Math.random() *
        pool.length
      )
    ];


  recentHistory.push(
    currentBrand.name
  );


  if (
    recentHistory.length >
    COOLDOWN_LIMIT
  ) {
    recentHistory.shift();
  }


  // Preload the Brandfetch logo while
  // the user is guessing the color palette.
  preloadBrandLogo(
    currentBrand
  );


  displayArea.innerHTML = "";


  currentBrand.colors.forEach(
    (color) => {
      const dot =
        document.createElement(
          "div"
        );

      dot.className =
        "splotch";

      dot.style.backgroundColor =
        color;

      displayArea.appendChild(
        dot
      );
    }
  );


  const wrongOptions =
    shuffle(
      BRANDS.filter(
        (brand) =>
          brand.name !==
          currentBrand.name
      )
    ).slice(0, 3);


  const roundChoices =
    shuffle([
      currentBrand,
      ...wrongOptions
    ]);


  optionsEl.innerHTML = "";


  roundChoices.forEach(
    (brand) => {
      const btn =
        document.createElement(
          "button"
        );

      btn.className =
        "btn-option";

      btn.textContent =
        brand.name;

      btn.onclick =
        () =>
          handleChoice(
            brand.name,
            btn
          );

      optionsEl.appendChild(
        btn
      );
    }
  );


  startTimer();
}


// =====================================================
// ANSWER HANDLING
// =====================================================

function handleChoice(
  selectedName,
  clickedBtn
) {
  if (!acceptingInput) {
    return;
  }

  acceptingInput = false;

  stopTimer();


  const elapsed =
    performance.now() -
    roundStartTime;


  const buttons =
    optionsEl.querySelectorAll(
      ".btn-option"
    );


  showBrandLogo(
    currentBrand
  );


  if (
    selectedName ===
    currentBrand.name
  ) {
    streak += 1;


    let speedBonus = 0;


    if (elapsed <= 2000) {
      speedBonus = 50;
    } else if (
      elapsed <
      ROUND_TIME_MS
    ) {
      const decayRatio =
        (
          ROUND_TIME_MS -
          elapsed
        ) /
        (
          ROUND_TIME_MS -
          2000
        );


      speedBonus =
        Math.max(
          0,
          Math.round(
            decayRatio * 50
          )
        );
    }


    const streakBonus =
      streak * 25;


    const pointsWon =
      100 +
      streakBonus +
      speedBonus;


    score += pointsWon;


    if (
      streak >
      bestStreak
    ) {
      bestStreak =
        streak;


      localStorage.setItem(
        "huebrand_best_streak",
        bestStreak
      );


      bestStreakEl.textContent =
        bestStreak;
    }


    clickedBtn.classList.add(
      "correct"
    );


    const bonusText =
      speedBonus > 0
        ? ` (+${speedBonus} speed)`
        : "";


    feedbackEl.textContent =
      `+${pointsWon} pts${bonusText} (${streak} streak!)`;


    feedbackEl.className =
      "feedback correct";


  } else {

    streak = 0;


    clickedBtn.classList.add(
      "wrong"
    );


    feedbackEl.textContent =
      `Incorrect — It's ${currentBrand.name}`;


    feedbackEl.className =
      "feedback wrong";


    buttons.forEach(
      (btn) => {
        if (
          btn.textContent ===
          currentBrand.name
        ) {
          btn.classList.add(
            "correct"
          );
        }
      }
    );
  }


  scoreEl.textContent =
    score;


  streakEl.textContent =
    streak;


  setTimeout(
    nextRound,
    1500
  );
}


// =====================================================
// TIMEOUT
// =====================================================

function handleTimeout() {
  if (!acceptingInput) {
    return;
  }


  acceptingInput = false;


  streak = 0;


  scoreEl.textContent =
    score;


  streakEl.textContent =
    streak;


  showBrandLogo(
    currentBrand
  );


  const buttons =
    optionsEl.querySelectorAll(
      ".btn-option"
    );


  buttons.forEach(
    (btn) => {
      if (
        btn.textContent ===
        currentBrand.name
      ) {
        btn.classList.add(
          "correct"
        );
      }
    }
  );


  feedbackEl.textContent =
    `Time's Up! — It's ${currentBrand.name}`;


  feedbackEl.className =
    "feedback wrong";


  setTimeout(
    nextRound,
    1500
  );
}


// =====================================================
// SETTINGS MODAL
// =====================================================

openSettingsBtn.addEventListener(
  "click",
  () => {
    settingsModal.classList.add(
      "active"
    );
  }
);


closeSettingsBtn.addEventListener(
  "click",
  () => {
    settingsModal.classList.remove(
      "active"
    );
  }
);


settingsModal.addEventListener(
  "click",
  (e) => {
    if (
      e.target ===
      settingsModal
    ) {
      settingsModal.classList.remove(
        "active"
      );
    }
  }
);


// =====================================================
// PWA INSTALL HANDLING
// =====================================================

window.addEventListener(
  "beforeinstallprompt",
  (e) => {
    e.preventDefault();

    deferredPrompt =
      e;
  }
);


installBtn.addEventListener(
  "click",
  () => {
    settingsModal.classList.remove(
      "active"
    );


    if (deferredPrompt) {

      installInstructionText.textContent =
        "Install HUEBRAND to your home screen or desktop for fast, offline access.";


      confirmInstallBtn.style.display =
        "block";

    } else {

      installInstructionText.textContent =
        "To install: tap your browser menu and choose 'Add to Home Screen' or 'Install App'.";


      confirmInstallBtn.style.display =
        "none";
    }


    installPromptModal.classList.add(
      "active"
    );
  }
);


confirmInstallBtn.addEventListener(
  "click",
  async () => {

    if (deferredPrompt) {

      deferredPrompt.prompt();


      await deferredPrompt.userChoice;


      deferredPrompt = null;
    }


    installPromptModal.classList.remove(
      "active"
    );
  }
);


closeInstallPromptBtn.addEventListener(
  "click",
  () => {
    installPromptModal.classList.remove(
      "active"
    );
  }
);


installPromptModal.addEventListener(
  "click",
  (e) => {

    if (
      e.target ===
      installPromptModal
    ) {
      installPromptModal.classList.remove(
        "active"
      );
    }
  }
);


// =====================================================
// START GAME
// =====================================================

nextRound();