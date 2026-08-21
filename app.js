const BRANDS = [
  // Fast Food & Dining
  { name: "McDonald's", icon: "mcdonalds-icon", colors: ["#DA291C", "#FFC72C"] },
  { name: "Burger King", icon: "burger-king", colors: ["#D62300", "#FBE122", "#502314"] },
  { name: "Subway", icon: "subway", colors: ["#008C15", "#FFC600"] },
  { name: "Taco Bell", icon: "taco-bell", colors: ["#702082", "#A77BCA", "#000000"] },
  { name: "KFC", icon: "kfc", colors: ["#A3080C", "#000000", "#FFFFFF"] },
  { name: "Pizza Hut", icon: "pizza-hut", colors: ["#EE3124", "#00A859", "#FFC425"] },
  { name: "Domino's", icon: "dominos", colors: ["#006491", "#E31837"] },
  { name: "Starbucks", icon: "starbucks", colors: ["#00704A", "#1E3932", "#FFFFFF"] },
  { name: "Dunkin'", icon: "dunkin-icon", colors: ["#FF671F", "#DA1884", "#653819"] },
  { name: "Chipotle", icon: "chipotle", colors: ["#451400", "#AD343E"] },
  { name: "Nando's", icon: "nandos", colors: ["#000000", "#C8102E", "#F4C430"] },

  // Beverages & Packaged Foods
  { name: "Coca-Cola", icon: "coca-cola", colors: ["#F40009", "#000000", "#FFFFFF"] },
  { name: "Pepsi", icon: "pepsi", colors: ["#004B93", "#C9002B", "#FFFFFF"] },
  { name: "Red Bull", icon: "redbull", colors: ["#001D4A", "#DB0A40", "#FFCC00"] },
  { name: "Monster Energy", icon: "monster-icon", colors: ["#95D600", "#000000"] },
  { name: "Heineken", icon: "heineken", colors: ["#008200", "#FF0000"] },
  { name: "Guinness", icon: "guinness", colors: ["#000000", "#D6B265", "#FFFFFF"] },
  { name: "Corona", icon: "corona", colors: ["#002454", "#F4BE18", "#FFFFFF"] },
  { name: "Budweiser", icon: "budweiser", colors: ["#C8102E", "#15244C", "#D1A153"] },
  { name: "Kit Kat", icon: "kitkat", colors: ["#D8232A", "#FFFFFF"] },
  { name: "Nutella", icon: "nutella-icon", colors: ["#000000", "#E31B23"] },
  { name: "Haribo", icon: "haribo", colors: ["#005696", "#E31837", "#FED100"] },

  // Tech, Web & Social Platforms
  { name: "Google", icon: "google-icon", colors: ["#4285F4", "#EA4335", "#FBBC05", "#34A853"] },
  { name: "Microsoft", icon: "microsoft-icon", colors: ["#F25022", "#7FBA00", "#00A4EF", "#FFB900"] },
  { name: "Apple", icon: "apple", colors: ["#555555", "#000000", "#FFFFFF"] },
  { name: "Amazon", icon: "amazon-icon", colors: ["#FF9900", "#146EB4", "#000000"] },
  { name: "Meta", icon: "meta-icon", colors: ["#0081FB", "#0064E0"] },
  { name: "YouTube", icon: "youtube-icon", colors: ["#FF0000", "#282828", "#FFFFFF"] },
  { name: "Spotify", icon: "spotify-icon", colors: ["#1DB954", "#191414"] },
  { name: "Netflix", icon: "netflix-icon", colors: ["#E50914", "#000000"] },
  { name: "Discord", icon: "discord-icon", colors: ["#5865F2", "#23272A", "#FFFFFF"] },
  { name: "Twitch", icon: "twitch", colors: ["#9146FF", "#000000", "#FFFFFF"] },
  { name: "Twitter / X", icon: "twitter", colors: ["#1DA1F2", "#FFFFFF"] },
  { name: "Instagram", icon: "instagram-icon", colors: ["#E1306C", "#F77737", "#405DE6", "#FCAF45"] },
  { name: "Facebook", icon: "facebook", colors: ["#1877F2", "#FFFFFF"] },
  { name: "TikTok", icon: "tiktok-icon", colors: ["#00F2FE", "#FE2C55", "#000000"] },
  { name: "Snapchat", icon: "snapchat-icon", colors: ["#FFFC00", "#000000", "#FFFFFF"] },
  { name: "Reddit", icon: "reddit-icon", colors: ["#FF4500", "#cee3f8", "#000000"] },
  { name: "Pinterest", icon: "pinterest", colors: ["#E60023", "#FFFFFF"] },
  { name: "Slack", icon: "slack-icon", colors: ["#4A154B", "#36C5F0", "#2EB67D", "#ECB22E"] },
  { name: "LinkedIn", icon: "linkedin-icon", colors: ["#0A66C2", "#FFFFFF"] },
  { name: "WhatsApp", icon: "whatsapp-icon", colors: ["#25D366", "#075E54", "#128C7E"] },
  { name: "Telegram", icon: "telegram", colors: ["#24A1DE", "#FFFFFF"] },
  { name: "Dropbox", icon: "dropbox", colors: ["#0061FF", "#000000"] },
  { name: "Uber", icon: "uber", colors: ["#000000", "#FFFFFF"] },
  { name: "Lyft", icon: "lyft", colors: ["#FF00BF", "#111111"] },
  { name: "Airbnb", icon: "airbnb-icon", colors: ["#FF5A5F", "#00A699", "#FC642D"] },
  { name: "Shopify", icon: "shopify", colors: ["#96BF48", "#004C3F", "#FFFFFF"] },
  { name: "GitHub", icon: "github-icon", colors: ["#24292E", "#FFFFFF"] },
  { name: "GitLab", icon: "gitlab", colors: ["#FC6D26", "#E24329", "#FCA326"] },
  { name: "Figma", icon: "figma", colors: ["#F24E1E", "#A259FF", "#1ABCFE", "#0ACF83"] },
  { name: "Canva", icon: "canva-icon", colors: ["#00C4CC", "#7D2AE8"] },
  { name: "Notion", icon: "notion-icon", colors: ["#000000", "#FFFFFF"] },
  { name: "Trello", icon: "trello", colors: ["#0079BF", "#00C2E0"] },
  { name: "Asana", icon: "asana-icon", colors: ["#F06A6A", "#27333F"] },
  { name: "Zoom", icon: "zoom-icon", colors: ["#2D8CFF", "#FFFFFF"] },
  { name: "Skype", icon: "skype", colors: ["#00AFF0", "#FFFFFF"] },
  { name: "SoundCloud", icon: "soundcloud", colors: ["#FF5500", "#000000"] },
  { name: "Duolingo", icon: "duolingo-icon", colors: ["#58CC02", "#FFC800", "#CE82FF"] },
  { name: "Tinder", icon: "tinder-icon", colors: ["#FE3C72", "#FF655B"] },
  { name: "WordPress", icon: "wordpress-icon", colors: ["#21759B", "#D54E21"] },
  { name: "Salesforce", icon: "salesforce", colors: ["#00A1E0", "#FFFFFF"] },
  { name: "HubSpot", icon: "hubspot", colors: ["#FF7A59", "#33475B"] },
  { name: "Mailchimp", icon: "mailchimp-freddie-icon", colors: ["#FFE01B", "#241C15"] },
  { name: "Stripe", icon: "stripe", colors: ["#635BFF", "#0A2540"] },
  { name: "PayPal", icon: "paypal", colors: ["#003087", "#0079C1", "#00457C"] },
  { name: "Square", icon: "square-icon", colors: ["#000000", "#FFFFFF"] },
  { name: "Coinbase", icon: "coinbase-icon", colors: ["#0052FF", "#FFFFFF"] },

  // Hardware & Gaming
  { name: "Intel", icon: "intel", colors: ["#0071C5", "#00C7FD", "#FFFFFF"] },
  { name: "AMD", icon: "amd-icon", colors: ["#ED1C24", "#000000", "#FFFFFF"] },
  { name: "Nvidia", icon: "nvidia-icon", colors: ["#76B900", "#000000", "#FFFFFF"] },
  { name: "Samsung", icon: "samsung", colors: ["#1428A0", "#000000", "#FFFFFF"] },
  { name: "Sony", icon: "sony", colors: ["#000000", "#FFFFFF"] },
  { name: "LG", icon: "lg", colors: ["#A50034", "#6B6B6B"] },
  { name: "Dell", icon: "dell", colors: ["#007DB8", "#000000"] },
  { name: "HP", icon: "hp", colors: ["#0096D6", "#000000"] },
  { name: "Lenovo", icon: "lenovo", colors: ["#E2231A", "#000000"] },
  { name: "ASUS", icon: "asus", colors: ["#00539B", "#000000"] },
  { name: "Logitech", icon: "logitech", colors: ["#00B8FC", "#2F3132"] },
  { name: "Razer", icon: "razer", colors: ["#00FF00", "#000000"] },
  { name: "Qualcomm", icon: "qualcomm", colors: ["#3253DC", "#000000"] },
  { name: "Cisco", icon: "cisco", colors: ["#049FD9", "#1BA0D7", "#2B5592"] },
  { name: "IBM", icon: "ibm", colors: ["#054ADA", "#000000"] },
  { name: "Oracle", icon: "oracle", colors: ["#F80000", "#000000"] },
  { name: "Nokia", icon: "nokia", colors: ["#124191", "#FFFFFF"] },
  { name: "GoPro", icon: "gopro", colors: ["#00A0DF", "#000000"] },
  { name: "Canon", icon: "canon", colors: ["#CC0000", "#000000"] },
  { name: "Nikon", icon: "nikon", colors: ["#FFE100", "#000000"] },
  { name: "Bose", icon: "bose", colors: ["#000000", "#FFFFFF"] },
  { name: "JBL", icon: "jbl", colors: ["#FF6600", "#000000"] },
  { name: "Corsair", icon: "corsair", colors: ["#F3D03E", "#000000"] },
  { name: "SteelSeries", icon: "steelseries", colors: ["#FF5200", "#000000"] },
  { name: "Nintendo", icon: "nintendo-3ds", colors: ["#E60012", "#FFFFFF"] },
  { name: "PlayStation", icon: "playstation", colors: ["#003791", "#000000", "#FFFFFF"] },
  { name: "Xbox", icon: "xbox", colors: ["#107C10", "#000000"] },
  { name: "Steam", icon: "steam", colors: ["#171A21", "#66C0F4", "#1B2838"] },
  { name: "Epic Games", icon: "epic-games", colors: ["#313131", "#FFFFFF"] },
  { name: "Unity", icon: "unity", colors: ["#222C37", "#FFFFFF"] },
  { name: "Unreal Engine", icon: "unreal-engine", colors: ["#0E1128", "#FFFFFF"] },
  { name: "Riot Games", icon: "riot-games", colors: ["#D12727", "#000000"] },
  { name: "Ubisoft", icon: "ubisoft", colors: ["#000000", "#006EFF"] },
  { name: "EA Sports", icon: "electronic-arts", colors: ["#FF4747", "#000000"] },

  // Retail, Supermarkets & Department Stores
  { name: "IKEA", icon: "ikea", colors: ["#0051BA", "#FFDA1A"] },
  { name: "Target", icon: "target", colors: ["#CC0000", "#FFFFFF"] },
  { name: "Walmart", icon: "walmart", colors: ["#0071CE", "#FFC220"] },
  { name: "Best Buy", icon: "best-buy", colors: ["#0046BE", "#FFE000"] },
  { name: "Home Depot", icon: "home-depot", colors: ["#F96302", "#FFFFFF"] },
  { name: "Costco", icon: "costco", colors: ["#005DAA", "#E31837"] },
  { name: "FedEx", icon: "fedex", colors: ["#4D148C", "#FF6600"] },
  { name: "UPS", icon: "ups", colors: ["#351C15", "#FFB500"] },
  { name: "DHL", icon: "dhl", colors: ["#FFCC00", "#D40511"] },
  { name: "Lego", icon: "lego", colors: ["#D11013", "#FFD500", "#000000"] },
  { name: "eBay", icon: "ebay", colors: ["#E53238", "#0064D2", "#F5AF02", "#86B817"] },
  { name: "Etsy", icon: "etsy", colors: ["#F16521", "#FFFFFF"] },
  { name: "Alibaba", icon: "alibaba", colors: ["#FF6A00", "#FFFFFF"] },
  { name: "Decathlon", icon: "decathlon", colors: ["#0082C3", "#FFFFFF"] },
  { name: "Aldi", icon: "aldi", colors: ["#00205B", "#E31B23", "#FFC72C", "#38A9DC"] },
  { name: "Lidl", icon: "lidl", colors: ["#0050AA", "#FFF000", "#E60A14"] },
  { name: "Tesco", icon: "tesco", colors: ["#00539F", "#EE1C2E"] },
  { name: "Carrefour", icon: "carrefour", colors: ["#00387B", "#E2001A"] },

  // Automotive & Racing
  { name: "Ferrari", icon: "ferrari", colors: ["#FF2800", "#FFF200", "#00903E"] },
  { name: "Porsche", icon: "porsche", colors: ["#D5001C", "#FFD700", "#000000"] },
  { name: "BMW", icon: "bmw", colors: ["#0066B1", "#70A9D7", "#000000"] },
  { name: "Mercedes-Benz", icon: "mercedes", colors: ["#333333", "#00ADEF"] },
  { name: "Audi", icon: "audi", colors: ["#BB0A30", "#000000"] },
  { name: "Ford", icon: "ford", colors: ["#003478", "#FFFFFF"] },
  { name: "Tesla", icon: "tesla", colors: ["#E82127", "#000000"] },
  { name: "Chevrolet", icon: "chevrolet", colors: ["#CBA135", "#000000"] },
  { name: "Toyota", icon: "toyota", colors: ["#EB0A1E", "#000000"] },
  { name: "Honda", icon: "honda", colors: ["#CC0000", "#000000"] },
  { name: "Jeep", icon: "jeep", colors: ["#495643", "#000000"] },
  { name: "Lamborghini", icon: "lamborghini", colors: ["#DDB321", "#000000"] },
  { name: "Volkswagen", icon: "volkswagen", colors: ["#001E50", "#1E64B4"] },
  { name: "Nissan", icon: "nissan", colors: ["#C3002F", "#000000"] },
  { name: "Hyundai", icon: "hyundai", colors: ["#002C6C", "#00AAD2"] },
  { name: "Kia", icon: "kia", colors: ["#05141F", "#EA0029"] },
  { name: "Subaru", icon: "subaru", colors: ["#013C7B", "#FFFFFF"] },
  { name: "Mazda", icon: "mazda", colors: ["#101010", "#910000"] },
  { name: "Volvo", icon: "volvo", colors: ["#003057", "#1E4F7C"] },
  { name: "Jaguar", icon: "jaguar", colors: ["#005A36", "#505050"] },
  { name: "Land Rover", icon: "land-rover", colors: ["#0C5A35", "#FFFFFF"] },
  { name: "Maserati", icon: "maserati", colors: ["#0C2340", "#C8102E"] },
  { name: "Aston Martin", icon: "aston-martin", colors: ["#004838", "#FFFFFF"] },
  { name: "McLaren", icon: "mclaren", colors: ["#FF8000", "#000000"] },
  { name: "Bugatti", icon: "bugatti", colors: ["#BE1622", "#000000"] },
  { name: "Bentley", icon: "bentley", colors: ["#000000", "#144733"] },
  { name: "Rolls-Royce", icon: "rolls-royce", colors: ["#461D4C", "#B0A8A0"] },
  { name: "Ducati", icon: "ducati", colors: ["#CC0000", "#000000"] },
  { name: "Harley-Davidson", icon: "harley-davidson", colors: ["#FF6600", "#000000"] },
  { name: "Yamaha", icon: "yamaha", colors: ["#0033A0", "#CC0000"] },
  { name: "Kawasaki", icon: "kawasaki", colors: ["#66CC00", "#000000"] },
  { name: "Michelin", icon: "michelin", colors: ["#002F6C", "#FFE600"] },
  { name: "Pirelli", icon: "pirelli", colors: ["#FED100", "#D52B1E"] },
  { name: "Bridgestone", icon: "bridgestone", colors: ["#ED1C24", "#000000"] },
  { name: "Goodyear", icon: "goodyear", colors: ["#00338D", "#FED100"] },
  { name: "Castrol", icon: "castrol", colors: ["#007A3E", "#E31837"] },
  { name: "Shell", icon: "shell", colors: ["#FBCE07", "#DD1D21"] },
  { name: "BP", icon: "bp", colors: ["#007A3D", "#FFDE00"] },
  { name: "Chevron", icon: "chevron", colors: ["#005596", "#E31B23"] },

  // Apparel, Footwear & Luxury Fashion
  { name: "Nike", icon: "nike", colors: ["#111111", "#FFFFFF"] },
  { name: "Adidas", icon: "adidas", colors: ["#000000", "#FFFFFF"] },
  { name: "Puma", icon: "puma", colors: ["#000000", "#BA0C2F"] },
  { name: "Under Armour", icon: "under-armour", colors: ["#1D1D1D", "#E03A3E"] },
  { name: "Vans", icon: "vans", colors: ["#BA0C2F", "#000000"] },
  { name: "New Balance", icon: "new-balance", colors: ["#CE0E2D", "#002B49"] },
  { name: "Converse", icon: "converse", colors: ["#000000", "#E31837"] },
  { name: "Reebok", icon: "reebok", colors: ["#D41B2C", "#0B163B"] },
  { name: "Champion", icon: "champion", colors: ["#00205B", "#C8102E"] },
  { name: "ASICS", icon: "asics", colors: ["#001E62", "#FFFFFF"] },
  { name: "The North Face", icon: "the-north-face", colors: ["#ED1B2D", "#000000"] },
  { name: "Columbia", icon: "columbia", colors: ["#0072CE", "#1D252C"] },
  { name: "Patagonia", icon: "patagonia", colors: ["#231F20", "#F47D31", "#5C2D91"] },
  { name: "Lululemon", icon: "lululemon", colors: ["#D31334", "#000000"] },
  { name: "Levi's", icon: "levis", colors: ["#C41230", "#FFFFFF"] },
  { name: "Gap", icon: "gap", colors: ["#002855", "#FFFFFF"] },
  { name: "H&M", icon: "h-and-m", colors: ["#CD040B", "#FFFFFF"] },
  { name: "Zara", icon: "zara", colors: ["#000000", "#FFFFFF"] },
  { name: "Uniqlo", icon: "uniqlo", colors: ["#EE1C25", "#FFFFFF"] },
  { name: "Tommy Hilfiger", icon: "tommy-hilfiger", colors: ["#00174F", "#CC0C2F", "#FFFFFF"] },
  { name: "Calvin Klein", icon: "calvin-klein", colors: ["#000000", "#FFFFFF"] },
  { name: "Ralph Lauren", icon: "ralph-lauren", colors: ["#002054", "#C49A45"] },
  { name: "Lacoste", icon: "lacoste", colors: ["#004526", "#C8102E"] },
  { name: "Gucci", icon: "gucci", colors: ["#00552E", "#AE0E17", "#000000"] },
  { name: "Louis Vuitton", icon: "louis-vuitton", colors: ["#4E3D28", "#876D49"] },
  { name: "Chanel", icon: "chanel", colors: ["#000000", "#FFFFFF"] },
  { name: "Prada", icon: "prada", colors: ["#000000", "#FFFFFF"] },
  { name: "Hermès", icon: "hermes", colors: ["#F37021", "#4A2E12"] },
  { name: "Dior", icon: "dior", colors: ["#000000", "#808080"] },
  { name: "Burberry", icon: "burberry", colors: ["#000000", "#C5A059", "#A6192E"] },
  { name: "Versace", icon: "versace", colors: ["#000000", "#DAA520"] },
  { name: "Armani", icon: "armani", colors: ["#000000", "#FFFFFF"] },
  { name: "Balenciaga", icon: "balenciaga", colors: ["#000000", "#FFFFFF"] },
  { name: "Tiffany & Co.", icon: "tiffany-and-co", colors: ["#81D8D0", "#000000"] },
  { name: "Rolex", icon: "rolex", colors: ["#006039", "#A37E2C"] },

  // Finance, Airlines, Media & Telecom
  { name: "Mastercard", icon: "mastercard", colors: ["#EB001B", "#F79E1B", "#FF5F00"] },
  { name: "Visa", icon: "visa", colors: ["#1A1F71", "#F7B600"] },
  { name: "American Express", icon: "american-express", colors: ["#006FCF", "#FFFFFF"] },
  { name: "Chase", icon: "chase", colors: ["#117ACA", "#0A2540"] },
  { name: "Bank of America", icon: "bank-of-america", colors: ["#E31837", "#00529B"] },
  { name: "Citi", icon: "citi", colors: ["#003B70", "#ED1C24"] },
  { name: "Wells Fargo", icon: "wells-fargo", colors: ["#D71E28", "#FFCE00"] },
  { name: "Barclays", icon: "barclays", colors: ["#00AEEF", "#00395D"] },
  { name: "HSBC", icon: "hsbc", colors: ["#DB0011", "#000000"] },
  { name: "T-Mobile", icon: "t-mobile", colors: ["#E20074", "#FFFFFF"] },
  { name: "Verizon", icon: "verizon", colors: ["#CD040B", "#000000"] },
  { name: "AT&T", icon: "att", colors: ["#00A8E0", "#0057B8"] },
  { name: "Vodafone", icon: "vodafone", colors: ["#E60000", "#FFFFFF"] },
  { name: "BBC", icon: "bbc", colors: ["#000000", "#FF0000"] },
  { name: "CNN", icon: "cnn", colors: ["#CC0000", "#000000"] },
  { name: "HBO", icon: "hbo", colors: ["#000000", "#582C83"] },
  { name: "ESPN", icon: "espn", colors: ["#CD0000", "#000000"] },
  { name: "Disney", icon: "disney", colors: ["#113CCF", "#FFFFFF"] },
  { name: "Hulu", icon: "hulu", colors: ["#1CE783", "#0B0C0F"] },
  { name: "Delta Air Lines", icon: "delta", colors: ["#003A70", "#E01933"] },
  { name: "American Airlines", icon: "american-airlines", colors: ["#0078D2", "#C30017", "#B2B4B3"] },
  { name: "United Airlines", icon: "united-airlines", colors: ["#002244", "#005DAA"] },
  { name: "Southwest Airlines", icon: "southwest", colors: ["#11295B", "#F9B612", "#E81B23"] },
  { name: "Air Canada", icon: "air-canada", colors: ["#D8232A", "#000000"] },
  { name: "British Airways", icon: "british-airways", colors: ["#075AAA", "#EB2226"] },
  { name: "Lufthansa", icon: "lufthansa", colors: ["#05164D", "#FFAC00"] },
  { name: "Emirates", icon: "emirates", colors: ["#D71921", "#C79D3B", "#000000"] },
  { name: "Qatar Airways", icon: "qatar-airways", colors: ["#5C0632", "#848285"] },
  { name: "Ryanair", icon: "ryanair", colors: ["#073590", "#F1C933"] },
  { name: "Air France", icon: "air-france", colors: ["#002157", "#ED0000"] }
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

  // Filter out brands in active cooldown
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

  // 100% vector SVG direct endpoint via Iconify Open Vector API
  logoImg.src = `https://api.iconify.design/logos:${brand.icon}.svg`;

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