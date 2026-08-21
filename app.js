const BRANDS = [
  // Fast Food, Dining & Snacks
  { name: "McDonald's", slug: "mcdonalds", colors: ["#DA291C", "#FFC72C"] },
  { name: "Burger King", slug: "burgerking", colors: ["#D62300", "#FBE122", "#502314"] },
  { name: "Subway", slug: "subway", colors: ["#008C15", "#FFC600"] },
  { name: "Taco Bell", slug: "tacobell", colors: ["#702082", "#A77BCA", "#000000"] },
  { name: "KFC", slug: "kfc", colors: ["#A3080C", "#000000", "#FFFFFF"] },
  { name: "Pizza Hut", slug: "pizzahut", colors: ["#EE3124", "#00A859", "#FFC425"] },
  { name: "Domino's", slug: "dominos", colors: ["#006491", "#E31837"] },
  { name: "Papa John's", slug: "papajohns", colors: ["#005A36", "#C8102E"] },
  { name: "Starbucks", slug: "starbucks", colors: ["#00704A", "#1E3932", "#FFFFFF"] },
  { name: "Dunkin'", slug: "dunkin", colors: ["#FF671F", "#DA1884", "#653819"] },
  { name: "Chipotle", slug: "chipotle", colors: ["#451400", "#AD343E"] },
  { name: "Shake Shack", slug: "shakeshack", colors: ["#5CA432", "#000000"] },
  { name: "Nando's", slug: "nandos", colors: ["#000000", "#C8102E", "#F4C430"] },
  { name: "Five Guys", slug: "fiveguys", colors: ["#ED1C24", "#FFFFFF"] },
  { name: "In-N-Out", slug: "innoutburger", colors: ["#DD131D", "#FFC20E"] },
  { name: "Dairy Queen", slug: "dairyqueen", colors: ["#EE3124", "#005696"] },
  { name: "Krispy Kreme", slug: "krispykreme", colors: ["#007A3D", "#DD131D"] },
  { name: "Baskin-Robbins", slug: "baskinrobbins", colors: ["#315BA7", "#EC1B69"] },
  { name: "Panda Express", slug: "pandaexpress", colors: ["#D12026", "#000000"] },
  { name: "Panera Bread", slug: "panerabread", colors: ["#4E5B31", "#C49A45"] },
  { name: "Wingstop", slug: "wingstop", colors: ["#005A36", "#F2C75C"] },

  // Beverages & Packaged Foods
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
  { name: "Dr Pepper", slug: "drpepper", colors: ["#711F25", "#FFFFFF"] },
  { name: "Mountain Dew", slug: "mountaindew", colors: ["#23B14D", "#DA291C", "#000000"] },
  { name: "Gatorade", slug: "gatorade", colors: ["#FF6200", "#008751", "#000000"] },
  { name: "Sprite", slug: "sprite", colors: ["#008B47", "#FFDE00", "#004B93"] },
  { name: "Fanta", slug: "fanta", colors: ["#F99B1C", "#004B93", "#3AAA35"] },
  { name: "Pringles", slug: "pringles", colors: ["#E51937", "#FED100", "#4B2E1E"] },
  { name: "Lay's", slug: "lays", colors: ["#FFD100", "#E31B23", "#00629B"] },
  { name: "Doritos", slug: "doritos", colors: ["#ED1C24", "#FFC72C", "#000000"] },
  { name: "Cheetos", slug: "cheetos", colors: ["#FF6600", "#000000", "#FFCC00"] },
  { name: "Oreo", slug: "oreo", colors: ["#005BAC", "#000000", "#FFFFFF"] },
  { name: "Kit Kat", slug: "kitkat", colors: ["#D8232A", "#FFFFFF"] },
  { name: "Nutella", slug: "nutella", colors: ["#000000", "#E31B23"] },
  { name: "Haribo", slug: "haribo", colors: ["#005696", "#E31837", "#FED100"] },
  { name: "Lindt", slug: "lindt", colors: ["#A67C52", "#2B1A12", "#C59B27"] },
  { name: "Toblerone", slug: "toblerone", colors: ["#D4A853", "#9D1E2D", "#FFFFFF"] },
  { name: "Skittles", slug: "skittles", colors: ["#E31837", "#FFD200", "#00853F", "#0055B8"] },
  { name: "M&M's", slug: "mms", colors: ["#5C2D25", "#FFCC00", "#D6262B"] },
  { name: "Snickers", slug: "snickers", colors: ["#492B1E", "#00529B", "#FFFFFF"] },
  { name: "Twix", slug: "twix", colors: ["#C59B27", "#D42128"] },
  { name: "Kellogg's", slug: "kelloggs", colors: ["#D92525", "#FFFFFF"] },
  { name: "Heinz", slug: "heinz", colors: ["#A31A1E", "#006241", "#F2C75C"] },
  { name: "Nestle", slug: "nestle", colors: ["#005CA9", "#75787B"] },
  { name: "Danone", slug: "danone", colors: ["#005CA9", "#E31B23"] },

  // Big Tech, Platforms & Social
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
  { name: "Shopify", slug: "shopify", colors: ["#96BF48", "#004C3F", "#FFFFFF"] },
  { name: "GitHub", slug: "github", colors: ["#24292E", "#FFFFFF"] },
  { name: "GitLab", slug: "gitlab", colors: ["#FC6D26", "#E24329", "#FCA326"] },
  { name: "Figma", slug: "figma", colors: ["#F24E1E", "#A259FF", "#1ABCFE", "#0ACF83"] },
  { name: "Canva", slug: "canva", colors: ["#00C4CC", "#7D2AE8"] },
  { name: "Notion", slug: "notion", colors: ["#000000", "#FFFFFF"] },
  { name: "Trello", slug: "trello", colors: ["#0079BF", "#00C2E0"] },
  { name: "Asana", slug: "asana", colors: ["#F06A6A", "#27333F"] },
  { name: "Zoom", slug: "zoom", colors: ["#2D8CFF", "#FFFFFF"] },
  { name: "Skype", slug: "skype", colors: ["#00AFF0", "#FFFFFF"] },
  { name: "SoundCloud", slug: "soundcloud", colors: ["#FF5500", "#000000"] },
  { name: "Duolingo", slug: "duolingo", colors: ["#58CC02", "#FFC800", "#CE82FF"] },
  { name: "Tinder", slug: "tinder", colors: ["#FE3C72", "#FF655B"] },
  { name: "Bumble", slug: "bumble", colors: ["#FFC629", "#000000"] },
  { name: "WordPress", slug: "wordpress", colors: ["#21759B", "#D54E21"] },
  { name: "Salesforce", slug: "salesforce", colors: ["#00A1E0", "#FFFFFF"] },
  { name: "HubSpot", slug: "hubspot", colors: ["#FF7A59", "#33475B"] },
  { name: "Mailchimp", slug: "mailchimp", colors: ["#FFE01B", "#241C15"] },
  { name: "Stripe", slug: "stripe", colors: ["#635BFF", "#0A2540"] },
  { name: "Square", slug: "square", colors: ["#000000", "#FFFFFF"] },
  { name: "Coinbase", slug: "coinbase", colors: ["#0052FF", "#FFFFFF"] },
  { name: "Robinhood", slug: "robinhood", colors: ["#00C805", "#000000"] },
  { name: "Patreon", slug: "patreon", colors: ["#FF424D", "#052D49"] },
  { name: "Shazam", slug: "shazam", colors: ["#0088FF", "#FFFFFF"] },
  { name: "Waze", slug: "waze", colors: ["#33CCFF", "#FEFEFE", "#000000"] },

  // Hardware & Gaming
  { name: "Intel", slug: "intel", colors: ["#0071C5", "#00C7FD", "#FFFFFF"] },
  { name: "AMD", slug: "amd", colors: ["#ED1C24", "#000000", "#FFFFFF"] },
  { name: "Nvidia", slug: "nvidia", colors: ["#76B900", "#000000", "#FFFFFF"] },
  { name: "Samsung", slug: "samsung", colors: ["#1428A0", "#000000", "#FFFFFF"] },
  { name: "Sony", slug: "sony", colors: ["#000000", "#FFFFFF"] },
  { name: "LG", slug: "lg", colors: ["#A50034", "#6B6B6B"] },
  { name: "Dell", slug: "dell", colors: ["#007DB8", "#000000"] },
  { name: "HP", slug: "hp", colors: ["#0096D6", "#000000"] },
  { name: "Lenovo", slug: "lenovo", colors: ["#E2231A", "#000000"] },
  { name: "ASUS", slug: "asus", colors: ["#00539B", "#000000"] },
  { name: "Acer", slug: "acer", colors: ["#83B81A", "#000000"] },
  { name: "Logitech", slug: "logitech", colors: ["#00B8FC", "#2F3132"] },
  { name: "Razer", slug: "razer", colors: ["#00FF00", "#000000"] },
  { name: "Qualcomm", slug: "qualcomm", colors: ["#3253DC", "#000000"] },
  { name: "Cisco", slug: "cisco", colors: ["#049FD9", "#1BA0D7", "#2B5592"] },
  { name: "IBM", slug: "ibm", colors: ["#054ADA", "#000000"] },
  { name: "Oracle", slug: "oracle", colors: ["#F80000", "#000000"] },
  { name: "Panasonic", slug: "panasonic", colors: ["#004098", "#FFFFFF"] },
  { name: "Toshiba", slug: "toshiba", colors: ["#FF0000", "#000000"] },
  { name: "Hitachi", slug: "hitachi", colors: ["#E60012", "#000000"] },
  { name: "Nokia", slug: "nokia", colors: ["#124191", "#FFFFFF"] },
  { name: "Motorola", slug: "motorola", colors: ["#001438", "#E21836"] },
  { name: "GoPro", slug: "gopro", colors: ["#00A0DF", "#000000"] },
  { name: "Canon", slug: "canon", colors: ["#CC0000", "#000000"] },
  { name: "Nikon", slug: "nikon", colors: ["#FFE100", "#000000"] },
  { name: "Bose", slug: "bose", colors: ["#000000", "#FFFFFF"] },
  { name: "Sennheiser", slug: "sennheiser", colors: ["#0085C7", "#000000"] },
  { name: "Sonos", slug: "sonos", colors: ["#000000", "#FFFFFF"] },
  { name: "JBL", slug: "jbl", colors: ["#FF6600", "#000000"] },
  { name: "Corsair", slug: "corsair", colors: ["#F3D03E", "#000000"] },
  { name: "SteelSeries", slug: "steelseries", colors: ["#FF5200", "#000000"] },
  { name: "MSI", slug: "msi", colors: ["#FF0000", "#000000"] },
  { name: "PlayStation", slug: "playstation", colors: ["#003791", "#000000", "#FFFFFF"] },
  { name: "Xbox", slug: "xbox", colors: ["#107C10", "#000000"] },
  { name: "Nintendo", slug: "nintendoswitch", colors: ["#E60012", "#FFFFFF"] },
  { name: "Steam", slug: "steam", colors: ["#171A21", "#66C0F4", "#1B2838"] },
  { name: "Epic Games", slug: "epicgames", colors: ["#313131", "#FFFFFF"] },
  { name: "Unity", slug: "unity", colors: ["#222C37", "#FFFFFF"] },
  { name: "Unreal Engine", slug: "unrealengine", colors: ["#0E1128", "#FFFFFF"] },
  { name: "Riot Games", slug: "riotgames", colors: ["#D12727", "#000000"] },
  { name: "Ubisoft", slug: "ubisoft", colors: ["#000000", "#006EFF"] },
  { name: "EA Sports", slug: "ea", colors: ["#FF4747", "#000000"] },
  { name: "Blizzard", slug: "blizzardentertainment", colors: ["#009AE4", "#0B1528"] },
  { name: "Rockstar Games", slug: "rockstargames", colors: ["#F9A01B", "#000000"] },
  { name: "Capcom", slug: "capcom", colors: ["#0054A6", "#FFDD00"] },
  { name: "Sega", slug: "sega", colors: ["#0089CF", "#FFFFFF"] },
  { name: "Square Enix", slug: "squareenix", colors: ["#ED1C24", "#000000"] },
  { name: "Bandai Namco", slug: "bandainamco", colors: ["#FF0000", "#FF7300", "#FFEB00"] },
  { name: "Roblox", slug: "roblox", colors: ["#000000", "#FFFFFF"] },

  // Retail, Delivery & Supermarkets
  { name: "IKEA", slug: "ikea", colors: ["#0051BA", "#FFDA1A"] },
  { name: "Target", slug: "target", colors: ["#CC0000", "#FFFFFF"] },
  { name: "Walmart", slug: "walmart", colors: ["#0071CE", "#FFC220"] },
  { name: "Best Buy", slug: "bestbuy", colors: ["#0046BE", "#FFE000"] },
  { name: "Home Depot", slug: "homedepot", colors: ["#F96302", "#FFFFFF"] },
  { name: "Costco", slug: "costco", colors: ["#005DAA", "#E31837"] },
  { name: "FedEx", slug: "fedex", colors: ["#4D148C", "#FF6600"] },
  { name: "UPS", slug: "ups", colors: ["#351C15", "#FFB500"] },
  { name: "DHL", slug: "dhl", colors: ["#FFCC00", "#D40511"] },
  { name: "Lego", slug: "lego", colors: ["#D11013", "#FFD500", "#000000"] },
  { name: "eBay", slug: "ebay", colors: ["#E53238", "#0064D2", "#F5AF02", "#86B817"] },
  { name: "Etsy", slug: "etsy", colors: ["#F16521", "#FFFFFF"] },
  { name: "Alibaba", slug: "alibaba", colors: ["#FF6A00", "#FFFFFF"] },
  { name: "AliExpress", slug: "aliexpress", colors: ["#FF4747", "#FF9900"] },
  { name: "Decathlon", slug: "decathlon", colors: ["#0082C3", "#FFFFFF"] },
  { name: "Aldi", slug: "aldi", colors: ["#00205B", "#E31B23", "#FFC72C", "#38A9DC"] },
  { name: "Lidl", slug: "lidl", colors: ["#0050AA", "#FFF000", "#E60A14"] },
  { name: "Tesco", slug: "tesco", colors: ["#00539F", "#EE1C2E"] },
  { name: "Carrefour", slug: "carrefour", colors: ["#00387B", "#E2001A"] },

  // Automotive & Racing
  { name: "Ferrari", slug: "ferrari", colors: ["#FF2800", "#FFF200", "#00903E"] },
  { name: "Porsche", slug: "porsche", colors: ["#D5001C", "#FFD700", "#000000"] },
  { name: "BMW", slug: "bmw", colors: ["#0066B1", "#70A9D7", "#000000"] },
  { name: "Mercedes-Benz", slug: "mercedes", colors: ["#333333", "#00ADEF"] },
  { name: "Audi", slug: "audi", colors: ["#BB0A30", "#000000"] },
  { name: "Ford", slug: "ford", colors: ["#003478", "#FFFFFF"] },
  { name: "Tesla", slug: "tesla", colors: ["#E82127", "#000000"] },
  { name: "Chevrolet", slug: "chevrolet", colors: ["#CBA135", "#000000"] },
  { name: "Toyota", slug: "toyota", colors: ["#EB0A1E", "#000000"] },
  { name: "Honda", slug: "honda", colors: ["#CC0000", "#000000"] },
  { name: "Jeep", slug: "jeep", colors: ["#495643", "#000000"] },
  { name: "Lamborghini", slug: "lamborghini", colors: ["#DDB321", "#000000"] },
  { name: "Volkswagen", slug: "volkswagen", colors: ["#001E50", "#1E64B4"] },
  { name: "Nissan", slug: "nissan", colors: ["#C3002F", "#000000"] },
  { name: "Hyundai", slug: "hyundai", colors: ["#002C6C", "#00AAD2"] },
  { name: "Kia", slug: "kia", colors: ["#05141F", "#EA0029"] },
  { name: "Subaru", slug: "subaru", colors: ["#013C7B", "#FFFFFF"] },
  { name: "Mazda", slug: "mazda", colors: ["#101010", "#910000"] },
  { name: "Volvo", slug: "volvo", colors: ["#003057", "#1E4F7C"] },
  { name: "Jaguar", slug: "jaguar", colors: ["#005A36", "#505050"] },
  { name: "Land Rover", slug: "landrover", colors: ["#0C5A35", "#FFFFFF"] },
  { name: "Maserati", slug: "maserati", colors: ["#0C2340", "#C8102E"] },
  { name: "Aston Martin", slug: "astonmartin", colors: ["#004838", "#FFFFFF"] },
  { name: "McLaren", slug: "mclaren", colors: ["#FF8000", "#000000"] },
  { name: "Bugatti", slug: "bugatti", colors: ["#BE1622", "#000000"] },
  { name: "Bentley", slug: "bentley", colors: ["#000000", "#144733"] },
  { name: "Rolls-Royce", slug: "rollsroyce", colors: ["#461D4C", "#B0A8A0"] },
  { name: "Ducati", slug: "ducati", colors: ["#CC0000", "#000000"] },
  { name: "Harley-Davidson", slug: "harleydavidson", colors: ["#FF6600", "#000000"] },
  { name: "Yamaha", slug: "yamahamotorcorporation", colors: ["#0033A0", "#CC0000"] },
  { name: "Kawasaki", slug: "kawasaki", colors: ["#66CC00", "#000000"] },
  { name: "Michelin", slug: "michelin", colors: ["#002F6C", "#FFE600"] },
  { name: "Pirelli", slug: "pirelli", colors: ["#FED100", "#D52B1E"] },
  { name: "Bridgestone", slug: "bridgestone", colors: ["#ED1C24", "#000000"] },
  { name: "Goodyear", slug: "goodyear", colors: ["#00338D", "#FED100"] },
  { name: "Castrol", slug: "castrol", colors: ["#007A3E", "#E31837"] },
  { name: "Shell", slug: "shell", colors: ["#FBCE07", "#DD1D21"] },
  { name: "BP", slug: "bp", colors: ["#007A3D", "#FFDE00"] },
  { name: "Chevron", slug: "chevron", colors: ["#005596", "#E31B23"] },

  // Apparel, Footwear & Luxury Fashion
  { name: "Nike", slug: "nike", colors: ["#111111", "#FFFFFF"] },
  { name: "Adidas", slug: "adidas", colors: ["#000000", "#FFFFFF"] },
  { name: "Puma", slug: "puma", colors: ["#000000", "#BA0C2F"] },
  { name: "Under Armour", slug: "underarmour", colors: ["#1D1D1D", "#E03A3E"] },
  { name: "Vans", slug: "vans", colors: ["#BA0C2F", "#000000"] },
  { name: "New Balance", slug: "newbalance", colors: ["#CE0E2D", "#002B49"] },
  { name: "Converse", slug: "converse", colors: ["#000000", "#E31837"] },
  { name: "Reebok", slug: "reebok", colors: ["#D41B2C", "#0B163B"] },
  { name: "Champion", slug: "champion", colors: ["#00205B", "#C8102E"] },
  { name: "ASICS", slug: "asics", colors: ["#001E62", "#FFFFFF"] },
  { name: "The North Face", slug: "thenorthface", colors: ["#ED1B2D", "#000000"] },
  { name: "Columbia", slug: "columbia", colors: ["#0072CE", "#1D252C"] },
  { name: "Patagonia", slug: "patagonia", colors: ["#231F20", "#F47D31", "#5C2D91"] },
  { name: "Lululemon", slug: "lululemon", colors: ["#D31334", "#000000"] },
  { name: "Levi's", slug: "levis", colors: ["#C41230", "#FFFFFF"] },
  { name: "Gap", slug: "gap", colors: ["#002855", "#FFFFFF"] },
  { name: "H&M", slug: "handm", colors: ["#CD040B", "#FFFFFF"] },
  { name: "Zara", slug: "zara", colors: ["#000000", "#FFFFFF"] },
  { name: "Uniqlo", slug: "uniqlo", colors: ["#EE1C25", "#FFFFFF"] },
  { name: "Tommy Hilfiger", slug: "tommyhilfiger", colors: ["#00174F", "#CC0C2F", "#FFFFFF"] },
  { name: "Calvin Klein", slug: "calvinklein", colors: ["#000000", "#FFFFFF"] },
  { name: "Ralph Lauren", slug: "ralphlauren", colors: ["#002054", "#C49A45"] },
  { name: "Lacoste", slug: "lacoste", colors: ["#004526", "#C8102E"] },
  { name: "Gucci", slug: "gucci", colors: ["#00552E", "#AE0E17", "#000000"] },
  { name: "Louis Vuitton", slug: "louisvuitton", colors: ["#4E3D28", "#876D49"] },
  { name: "Chanel", slug: "chanel", colors: ["#000000", "#FFFFFF"] },
  { name: "Prada", slug: "prada", colors: ["#000000", "#FFFFFF"] },
  { name: "Hermès", slug: "hermes", colors: ["#F37021", "#4A2E12"] },
  { name: "Dior", slug: "dior", colors: ["#000000", "#808080"] },
  { name: "Burberry", slug: "burberry", colors: ["#000000", "#C5A059", "#A6192E"] },
  { name: "Versace", slug: "versace", colors: ["#000000", "#DAA520"] },
  { name: "Armani", slug: "giorgioarmani", colors: ["#000000", "#FFFFFF"] },
  { name: "Balenciaga", slug: "balenciaga", colors: ["#000000", "#FFFFFF"] },
  { name: "Tiffany & Co.", slug: "tiffanyandco", colors: ["#81D8D0", "#000000"] },
  { name: "Rolex", slug: "rolex", colors: ["#006039", "#A37E2C"] },

  // Finance, Airlines, Telecom & Media
  { name: "Mastercard", slug: "mastercard", colors: ["#EB001B", "#F79E1B", "#FF5F00"] },
  { name: "Visa", slug: "visa", colors: ["#1A1F71", "#F7B600"] },
  { name: "American Express", slug: "americanexpress", colors: ["#006FCF", "#FFFFFF"] },
  { name: "Chase", slug: "chase", colors: ["#117ACA", "#0A2540"] },
  { name: "Bank of America", slug: "bankofamerica", colors: ["#E31837", "#00529B"] },
  { name: "PayPal", slug: "paypal", colors: ["#003087", "#0079C1", "#00457C"] },
  { name: "T-Mobile", slug: "tmobile", colors: ["#E20074", "#FFFFFF"] },
  { name: "Verizon", slug: "verizon", colors: ["#CD040B", "#000000"] },
  { name: "AT&T", slug: "att", colors: ["#00A8E0", "#0057B8"] },
  { name: "Vodafone", slug: "vodafone", colors: ["#E60000", "#FFFFFF"] },
  { name: "BBC", slug: "bbc", colors: ["#000000", "#FF0000"] },
  { name: "CNN", slug: "cnn", colors: ["#CC0000", "#000000"] },
  { name: "HBO", slug: "hbo", colors: ["#000000", "#582C83"] },
  { name: "ESPN", slug: "espn", colors: ["#CD0000", "#000000"] },
  { name: "Disney", slug: "disneyplus", colors: ["#113CCF", "#FFFFFF"] },
  { name: "Hulu", slug: "hulu", colors: ["#1CE783", "#0B0C0F"] },
  { name: "Delta Air Lines", slug: "delta", colors: ["#003A70", "#E01933"] },
  { name: "American Airlines", slug: "americanairlines", colors: ["#0078D2", "#C30017", "#B2B4B3"] },
  { name: "United Airlines", slug: "unitedairlines", colors: ["#002244", "#005DAA"] },
  { name: "Southwest Airlines", slug: "southwestairlines", colors: ["#11295B", "#F9B612", "#E81B23"] },
  { name: "Air Canada", slug: "aircanada", colors: ["#D8232A", "#000000"] },
  { name: "British Airways", slug: "britishairways", colors: ["#075AAA", "#EB2226"] },
  { name: "Lufthansa", slug: "lufthansa", colors: ["#05164D", "#FFAC00"] },
  { name: "Emirates", slug: "emirates", colors: ["#D71921", "#C79D3B", "#000000"] },
  { name: "Qatar Airways", slug: "qatarairways", colors: ["#5C0632", "#848285"] },
  { name: "Ryanair", slug: "ryanair", colors: ["#073590", "#F1C933"] },
  { name: "Air France", slug: "airfrance", colors: ["#002157", "#ED0000"] }
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
  
  // Directly loads official monochrome SVG vector from jsDelivr
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