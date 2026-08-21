const BRANDS = [
  // Fast Food, Casual Dining & Pizza
  { name: "McDonald's", domain: "mcdonalds.com", colors: ["#DA291C", "#FFC72C"] },
  { name: "Burger King", domain: "bk.com", colors: ["#D62300", "#FBE122", "#502314"] },
  { name: "Wendy's", domain: "wendys.com", colors: ["#E2203D", "#199BD7", "#000000"] },
  { name: "Subway", domain: "subway.com", colors: ["#008C15", "#FFC600"] },
  { name: "Taco Bell", domain: "tacobell.com", colors: ["#702082", "#A77BCA", "#000000"] },
  { name: "KFC", domain: "kfc.com", colors: ["#A3080C", "#000000", "#FFFFFF"] },
  { name: "Pizza Hut", domain: "pizzahut.com", colors: ["#EE3124", "#00A859", "#FFC425"] },
  { name: "Domino's", domain: "dominos.com", colors: ["#006491", "#E31837"] },
  { name: "Papa John's", domain: "papajohns.com", colors: ["#005A36", "#C8102E"] },
  { name: "Little Caesars", domain: "littlecaesars.com", colors: ["#F37021", "#000000"] },
  { name: "Dunkin'", domain: "dunkindonuts.com", colors: ["#FF671F", "#DA1884", "#653819"] },
  { name: "Starbucks", domain: "starbucks.com", colors: ["#00704A", "#1E3932", "#FFFFFF"] },
  { name: "Tim Hortons", domain: "timhortons.com", colors: ["#C8102E", "#4B2E1E"] },
  { name: "Chipotle", domain: "chipotle.com", colors: ["#451400", "#AD343E"] },
  { name: "Popeyes", domain: "popeyes.com", colors: ["#F15A24", "#007A3E"] },
  { name: "Dairy Queen", domain: "dairyqueen.com", colors: ["#EE3124", "#005696"] },
  { name: "Five Guys", domain: "fiveguys.com", colors: ["#ED1C24", "#FFFFFF"] },
  { name: "Shake Shack", domain: "shakeshack.com", colors: ["#5CA432", "#000000"] },
  { name: "In-N-Out", domain: "in-n-out.com", colors: ["#DD131D", "#FFC20E"] },
  { name: "Sonic Drive-In", domain: "sonicdrivein.com", colors: ["#D92525", "#F7C300"] },
  { name: "Krispy Kreme", domain: "krispykreme.com", colors: ["#007A3D", "#DD131D"] },
  { name: "Panda Express", domain: "pandaexpress.com", colors: ["#D12026", "#000000"] },
  { name: "Arby's", domain: "arbys.com", colors: ["#D9272E", "#303030"] },
  { name: "Jack in the Box", domain: "jackinthebox.com", colors: ["#DA291C", "#FFFFFF"] },
  { name: "Carl's Jr.", domain: "carlsjr.com", colors: ["#ED1C24", "#FFC72C", "#000000"] },
  { name: "Hardee's", domain: "hardees.com", colors: ["#ED1C24", "#FFD100"] },
  { name: "Culver's", domain: "culvers.com", colors: ["#005696", "#FFFFFF"] },
  { name: "Chick-fil-A", domain: "chick-fil-a.com", colors: ["#DD0031", "#FFFFFF"] },
  { name: "Whataburger", domain: "whataburger.com", colors: ["#F15A22", "#FFFFFF"] },
  { name: "Wingstop", domain: "wingstop.com", colors: ["#005A36", "#F2C75C"] },
  { name: "Nando's", domain: "nandos.com", colors: ["#000000", "#C8102E", "#F4C430"] },
  { name: "Panera Bread", domain: "panerabread.com", colors: ["#4E5B31", "#C49A45"] },
  { name: "Red Lobster", domain: "redlobster.com", colors: ["#D8232A", "#000000"] },
  { name: "Olive Garden", domain: "olivegarden.com", colors: ["#5B6734", "#4B2E1E"] },
  { name: "Baskin-Robbins", domain: "baskinrobbins.com", colors: ["#315BA7", "#EC1B69"] },
  { name: "A&W", domain: "awrestaurants.com", colors: ["#5C2D25", "#F7941D"] },
  { name: "Cinnabon", domain: "cinnabon.com", colors: ["#00778B", "#4A2C11"] },

  // Beverages, Snacks & Packaged Foods
  { name: "Coca-Cola", domain: "coca-cola.com", colors: ["#F40009", "#000000", "#FFFFFF"] },
  { name: "Pepsi", domain: "pepsi.com", colors: ["#004B93", "#C9002B", "#FFFFFF"] },
  { name: "Red Bull", domain: "redbull.com", colors: ["#001D4A", "#DB0A40", "#FFCC00"] },
  { name: "Monster Energy", domain: "monsterenergy.com", colors: ["#95D600", "#000000"] },
  { name: "Heineken", domain: "heineken.com", colors: ["#008200", "#FF0000"] },
  { name: "Mountain Dew", domain: "mountaindew.com", colors: ["#23B14D", "#DA291C", "#000000"] },
  { name: "Gatorade", domain: "gatorade.com", colors: ["#FF6200", "#008751", "#000000"] },
  { name: "Sprite", domain: "sprite.com", colors: ["#008B47", "#FFDE00", "#004B93"] },
  { name: "Fanta", domain: "fanta.com", colors: ["#F99B1C", "#004B93", "#3AAA35"] },
  { name: "Dr Pepper", domain: "drpepper.com", colors: ["#711F25", "#FFFFFF"] },
  { name: "7UP", domain: "7up.com", colors: ["#008852", "#E31B23", "#A8D32A"] },
  { name: "Corona", domain: "corona.com", colors: ["#002454", "#F4BE18", "#FFFFFF"] },
  { name: "Budweiser", domain: "budweiser.com", colors: ["#C8102E", "#15244C", "#D1A153"] },
  { name: "Guinness", domain: "guinness.com", colors: ["#000000", "#D6B265", "#FFFFFF"] },
  { name: "Stella Artois", domain: "stellaartois.com", colors: ["#9E1B32", "#C69214", "#FFFFFF"] },
  { name: "Carlsberg", domain: "carlsberg.com", colors: ["#00382B", "#FFFFFF"] },
  { name: "Oreo", domain: "oreo.com", colors: ["#005BAC", "#000000", "#FFFFFF"] },
  { name: "Doritos", domain: "doritos.com", colors: ["#ED1C24", "#FFC72C", "#000000"] },
  { name: "Lay's", domain: "lays.com", colors: ["#FFD100", "#E31B23", "#00629B"] },
  { name: "Pringles", domain: "pringles.com", colors: ["#E51937", "#FED100", "#4B2E1E"] },
  { name: "Cheetos", domain: "cheetos.com", colors: ["#FF6600", "#000000", "#FFCC00"] },
  { name: "Skittles", domain: "skittles.com", colors: ["#E31837", "#FFD200", "#00853F", "#0055B8"] },
  { name: "M&M's", domain: "mms.com", colors: ["#5C2D25", "#FFCC00", "#D6262B"] },
  { name: "Kit Kat", domain: "kitkat.com", colors: ["#D8232A", "#FFFFFF"] },
  { name: "Snickers", domain: "snickers.com", colors: ["#492B1E", "#00529B", "#FFFFFF"] },
  { name: "Twix", domain: "twix.com", colors: ["#C59B27", "#D42128"] },
  { name: "Reese's", domain: "reeses.com", colors: ["#FF6600", "#4A2A0C", "#FFD100"] },
  { name: "Hershey's", domain: "hersheys.com", colors: ["#3D1E16", "#C0C0C0"] },
  { name: "Nutella", domain: "nutella.com", colors: ["#000000", "#E31B23"] },
  { name: "Heinz", domain: "heinz.com", colors: ["#A31A1E", "#006241", "#F2C75C"] },
  { name: "Campbell's", domain: "campbells.com", colors: ["#DF1B24", "#FFFFFF", "#C59B27"] },
  { name: "Kellogg's", domain: "kelloggs.com", colors: ["#D92525", "#FFFFFF"] },
  { name: "Nestle", domain: "nestle.com", colors: ["#005CA9", "#75787B"] },
  { name: "Cadbury", domain: "cadbury.co.uk", colors: ["#4D2678", "#FFFFFF"] },
  { name: "Toblerone", domain: "toblerone.com", colors: ["#D4A853", "#9D1E2D", "#FFFFFF"] },
  { name: "Haribo", domain: "haribo.com", colors: ["#005696", "#E31837", "#FED100"] },
  { name: "Lindt", domain: "lindt.com", colors: ["#A67C52", "#2B1A12", "#C59B27"] },
  { name: "Ben & Jerry's", domain: "benjerry.com", colors: ["#00A3E0", "#78BE20", "#000000"] },
  { name: "Tropicana", domain: "tropicana.com", colors: ["#008751", "#FF6200", "#FFFFFF"] },
  { name: "Minute Maid", domain: "minutemaid.com", colors: ["#000000", "#78BE20", "#FFFFFF"] },

  // Big Tech, Hardware & Electronics
  { name: "Google", domain: "google.com", colors: ["#4285F4", "#EA4335", "#FBBC05", "#34A853"] },
  { name: "Microsoft", domain: "microsoft.com", colors: ["#F25022", "#7FBA00", "#00A4EF", "#FFB900"] },
  { name: "Apple", domain: "apple.com", colors: ["#555555", "#000000", "#FFFFFF"] },
  { name: "Amazon", domain: "amazon.com", colors: ["#FF9900", "#146EB4", "#000000"] },
  { name: "Samsung", domain: "samsung.com", colors: ["#1428A0", "#000000", "#FFFFFF"] },
  { name: "Intel", domain: "intel.com", colors: ["#0071C5", "#00C7FD", "#FFFFFF"] },
  { name: "AMD", domain: "amd.com", colors: ["#ED1C24", "#000000", "#FFFFFF"] },
  { name: "Nvidia", domain: "nvidia.com", colors: ["#76B900", "#000000", "#FFFFFF"] },
  { name: "Sony", domain: "sony.com", colors: ["#000000", "#FFFFFF"] },
  { name: "LG", domain: "lg.com", colors: ["#A50034", "#6B6B6B"] },
  { name: "Dell", domain: "dell.com", colors: ["#007DB8", "#000000"] },
  { name: "HP", domain: "hp.com", colors: ["#0096D6", "#000000"] },
  { name: "Lenovo", domain: "lenovo.com", colors: ["#E2231A", "#000000"] },
  { name: "ASUS", domain: "asus.com", colors: ["#00539B", "#000000"] },
  { name: "Acer", domain: "acer.com", colors: ["#83B81A", "#000000"] },
  { name: "Logitech", domain: "logitech.com", colors: ["#00B8FC", "#2F3132"] },
  { name: "Razer", domain: "razer.com", colors: ["#00FF00", "#000000"] },
  { name: "Qualcomm", domain: "qualcomm.com", colors: ["#3253DC", "#000000"] },
  { name: "Cisco", domain: "cisco.com", colors: ["#049FD9", "#1BA0D7", "#2B5592"] },
  { name: "IBM", domain: "ibm.com", colors: ["#054ADA", "#000000"] },
  { name: "Oracle", domain: "oracle.com", colors: ["#F80000", "#000000"] },
  { name: "Panasonic", domain: "panasonic.com", colors: ["#004098", "#FFFFFF"] },
  { name: "Toshiba", domain: "toshiba.com", colors: ["#FF0000", "#000000"] },
  { name: "Hitachi", domain: "hitachi.com", colors: ["#E60012", "#000000"] },
  { name: "Sharp", domain: "sharp-world.com", colors: ["#E60012", "#000000"] },
  { name: "Fujitsu", domain: "fujitsu.com", colors: ["#ED1A3D", "#6C6D70"] },
  { name: "Nokia", domain: "nokia.com", colors: ["#124191", "#FFFFFF"] },
  { name: "Motorola", domain: "motorola.com", colors: ["#001438", "#E21836"] },
  { name: "GoPro", domain: "gopro.com", colors: ["#00A0DF", "#000000"] },
  { name: "Canon", domain: "canon.com", colors: ["#CC0000", "#000000"] },
  { name: "Nikon", domain: "nikon.com", colors: ["#FFE100", "#000000"] },
  { name: "Bose", domain: "bose.com", colors: ["#000000", "#FFFFFF"] },
  { name: "Sennheiser", domain: "sennheiser.com", colors: ["#0085C7", "#000000"] },
  { name: "Sonos", domain: "sonos.com", colors: ["#000000", "#FFFFFF"] },
  { name: "JBL", domain: "jbl.com", colors: ["#FF6600", "#000000"] },
  { name: "Corsair", domain: "corsair.com", colors: ["#F3D03E", "#000000"] },
  { name: "SteelSeries", domain: "steelseries.com", colors: ["#FF5200", "#000000"] },
  { name: "MSI", domain: "msi.com", colors: ["#FF0000", "#000000"] },
  { name: "Gigabyte", domain: "gigabyte.com", colors: ["#FF6600", "#000000"] },

  // Social, Software & Web Platforms
  { name: "YouTube", domain: "youtube.com", colors: ["#FF0000", "#282828"] },
  { name: "Spotify", domain: "spotify.com", colors: ["#1DB954", "#191414"] },
  { name: "Netflix", domain: "netflix.com", colors: ["#E50914", "#000000"] },
  { name: "Discord", domain: "discord.com", colors: ["#5865F2", "#23272A"] },
  { name: "Twitch", domain: "twitch.tv", colors: ["#9146FF", "#000000"] },
  { name: "Twitter / X", domain: "x.com", colors: ["#000000", "#FFFFFF"] },
  { name: "Instagram", domain: "instagram.com", colors: ["#E1306C", "#F77737", "#405DE6", "#FCAF45"] },
  { name: "Facebook", domain: "facebook.com", colors: ["#1877F2", "#FFFFFF"] },
  { name: "TikTok", domain: "tiktok.com", colors: ["#00F2FE", "#FE2C55", "#000000"] },
  { name: "Snapchat", domain: "snapchat.com", colors: ["#FFFC00", "#000000"] },
  { name: "Reddit", domain: "reddit.com", colors: ["#FF4500", "#cee3f8"] },
  { name: "Pinterest", domain: "pinterest.com", colors: ["#E60023", "#FFFFFF"] },
  { name: "Slack", domain: "slack.com", colors: ["#4A154B", "#36C5F0", "#2EB67D", "#ECB22E"] },
  { name: "LinkedIn", domain: "linkedin.com", colors: ["#0A66C2", "#FFFFFF"] },
  { name: "WhatsApp", domain: "whatsapp.com", colors: ["#25D366", "#075E54"] },
  { name: "Telegram", domain: "telegram.org", colors: ["#24A1DE", "#FFFFFF"] },
  { name: "Dropbox", domain: "dropbox.com", colors: ["#0061FF", "#000000"] },
  { name: "Uber", domain: "uber.com", colors: ["#000000", "#FFFFFF"] },
  { name: "Lyft", domain: "lyft.com", colors: ["#FF00BF", "#111111"] },
  { name: "Airbnb", domain: "airbnb.com", colors: ["#FF5A5F", "#00A699"] },
  { name: "Shopify", domain: "shopify.com", colors: ["#96BF48", "#004C3F"] },
  { name: "GitHub", domain: "github.com", colors: ["#24292E", "#FFFFFF"] },
  { name: "GitLab", domain: "gitlab.com", colors: ["#FC6D26", "#E24329", "#FCA326"] },
  { name: "Figma", domain: "figma.com", colors: ["#F24E1E", "#A259FF", "#1ABCFE", "#0ACF83"] },
  { name: "Canva", domain: "canva.com", colors: ["#00C4CC", "#7D2AE8"] },
  { name: "Notion", domain: "notion.so", colors: ["#000000", "#FFFFFF"] },
  { name: "Trello", domain: "trello.com", colors: ["#0079BF", "#00C2E0"] },
  { name: "Asana", domain: "asana.com", colors: ["#F06A6A", "#27333F"] },
  { name: "Zoom", domain: "zoom.us", colors: ["#2D8CFF", "#FFFFFF"] },
  { name: "Skype", domain: "skype.com", colors: ["#00AFF0", "#FFFFFF"] },
  { name: "Vimeo", domain: "vimeo.com", colors: ["#1AB7EA", "#FFFFFF"] },
  { name: "SoundCloud", domain: "soundcloud.com", colors: ["#FF5500", "#000000"] },
  { name: "Shazam", domain: "shazam.com", colors: ["#0088FF", "#FFFFFF"] },
  { name: "Duolingo", domain: "duolingo.com", colors: ["#58CC02", "#FFC800", "#CE82FF"] },
  { name: "Waze", domain: "waze.com", colors: ["#33CCFF", "#FEFEFE", "#000000"] },
  { name: "Tinder", domain: "tinder.com", colors: ["#FE3C72", "#FF655B"] },
  { name: "Bumble", domain: "bumble.com", colors: ["#FFC629", "#000000"] },
  { name: "Hinge", domain: "hinge.co", colors: ["#000000", "#333333"] },
  { name: "Tumblr", domain: "tumblr.com", colors: ["#36465D", "#FFFFFF"] },
  { name: "Quora", domain: "quora.com", colors: ["#B92B27", "#FFFFFF"] },
  { name: "Medium", domain: "medium.com", colors: ["#000000", "#FFFFFF"] },
  { name: "WordPress", domain: "wordpress.org", colors: ["#21759B", "#D54E21"] },
  { name: "Salesforce", domain: "salesforce.com", colors: ["#00A1E0", "#FFFFFF"] },
  { name: "HubSpot", domain: "hubspot.com", colors: ["#FF7A59", "#33475B"] },
  { name: "Mailchimp", domain: "mailchimp.com", colors: ["#FFE01B", "#241C15"] },
  { name: "Stripe", domain: "stripe.com", colors: ["#635BFF", "#0A2540"] },
  { name: "Square", domain: "squareup.com", colors: ["#000000", "#FFFFFF"] },
  { name: "Robinhood", domain: "robinhood.com", colors: ["#00C805", "#000000"] },
  { name: "Coinbase", domain: "coinbase.com", colors: ["#0052FF", "#FFFFFF"] },

  // Gaming, Consoles & Publishers
  { name: "Nintendo", domain: "nintendo.com", colors: ["#E60012", "#FFFFFF"] },
  { name: "PlayStation", domain: "playstation.com", colors: ["#003791", "#000000"] },
  { name: "Xbox", domain: "xbox.com", colors: ["#107C10", "#000000"] },
  { name: "Steam", domain: "steampowered.com", colors: ["#171A21", "#66C0F4", "#1B2838"] },
  { name: "Epic Games", domain: "epicgames.com", colors: ["#313131", "#FFFFFF"] },
  { name: "Roblox", domain: "roblox.com", colors: ["#000000", "#FFFFFF"] },
  { name: "Riot Games", domain: "riotgames.com", colors: ["#D12727", "#000000"] },
  { name: "Ubisoft", domain: "ubisoft.com", colors: ["#000000", "#006EFF"] },
  { name: "EA Sports", domain: "ea.com", colors: ["#FF4747", "#000000"] },
  { name: "Blizzard", domain: "blizzard.com", colors: ["#009AE4", "#0B1528"] },
  { name: "Rockstar Games", domain: "rockstargames.com", colors: ["#F9A01B", "#000000"] },
  { name: "Capcom", domain: "capcom.com", colors: ["#0054A6", "#FFDD00"] },
  { name: "Sega", domain: "sega.com", colors: ["#0089CF", "#FFFFFF"] },
  { name: "Square Enix", domain: "square-enix.com", colors: ["#ED1C24", "#000000"] },
  { name: "Bandai Namco", domain: "bandainamcoent.com", colors: ["#FF0000", "#FF7300", "#FFEB00"] },
  { name: "Konami", domain: "konami.com", colors: ["#C41230", "#000000"] },
  { name: "Bethesda", domain: "bethesda.net", colors: ["#000000", "#FFFFFF"] },
  { name: "Unity", domain: "unity.com", colors: ["#222C37", "#FFFFFF"] },
  { name: "Unreal Engine", domain: "unrealengine.com", colors: ["#0E1128", "#FFFFFF"] },
  { name: "Pokémon", domain: "pokemon.com", colors: ["#FFCB05", "#3D7DCA", "#003A70"] },

  // Retail, Supermarkets & Department Stores
  { name: "IKEA", domain: "ikea.com", colors: ["#0051BA", "#FFDA1A"] },
  { name: "Target", domain: "target.com", colors: ["#CC0000", "#FFFFFF"] },
  { name: "Walmart", domain: "walmart.com", colors: ["#0071CE", "#FFC220"] },
  { name: "Best Buy", domain: "bestbuy.com", colors: ["#0046BE", "#FFE000"] },
  { name: "Home Depot", domain: "homedepot.com", colors: ["#F96302", "#FFFFFF"] },
  { name: "Lowe's", domain: "lowes.com", colors: ["#004990", "#FFFFFF"] },
  { name: "Costco", domain: "costco.com", colors: ["#005DAA", "#E31837"] },
  { name: "Sam's Club", domain: "samsclub.com", colors: ["#0067A0", "#76B82A"] },
  { name: "FedEx", domain: "fedex.com", colors: ["#4D148C", "#FF6600"] },
  { name: "UPS", domain: "ups.com", colors: ["#351C15", "#FFB500"] },
  { name: "DHL", domain: "dhl.com", colors: ["#FFCC00", "#D40511"] },
  { name: "Lego", domain: "lego.com", colors: ["#D11013", "#FFD500", "#000000"] },
  { name: "eBay", domain: "ebay.com", colors: ["#E53238", "#0064D2", "#F5AF02", "#86B817"] },
  { name: "Etsy", domain: "etsy.com", colors: ["#F16521", "#FFFFFF"] },
  { name: "Alibaba", domain: "alibaba.com", colors: ["#FF6A00", "#FFFFFF"] },
  { name: "AliExpress", domain: "aliexpress.com", colors: ["#FF4747", "#FF9900"] },
  { name: "Wish", domain: "wish.com", colors: ["#2FB7EC", "#FFFFFF"] },
  { name: "ASOS", domain: "asos.com", colors: ["#2D2D2D", "#FFFFFF"] },
  { name: "Zalando", domain: "zalando.com", colors: ["#FF6900", "#FFFFFF"] },
  { name: "Macy's", domain: "macys.com", colors: ["#E21A2C", "#000000"] },
  { name: "Nordstrom", domain: "nordstrom.com", colors: ["#000000", "#FFFFFF"] },
  { name: "Kohl's", domain: "kohls.com", colors: ["#000000", "#E31837"] },
  { name: "Sephora", domain: "sephora.com", colors: ["#000000", "#FFFFFF"] },
  { name: "Ulta Beauty", domain: "ulta.com", colors: ["#F26722", "#EB1B5E"] },
  { name: "CVS Pharmacy", domain: "cvs.com", colors: ["#CC0000", "#FFFFFF"] },
  { name: "Walgreens", domain: "walgreens.com", colors: ["#E31837", "#005596"] },
  { name: "7-Eleven", domain: "7-eleven.com", colors: ["#008163", "#EE3124", "#F47920"] },
  { name: "Circle K", domain: "circlek.com", colors: ["#EE2724", "#F6921E"] },
  { name: "Decathlon", domain: "decathlon.com", colors: ["#0082C3", "#FFFFFF"] },
  { name: "Toys 'R' Us", domain: "toysrus.com", colors: ["#0056B3", "#FFCB05", "#EE3124", "#7AC142"] },

  // Apparel, Footwear & Sportswear
  { name: "Nike", domain: "nike.com", colors: ["#111111", "#FFFFFF"] },
  { name: "Adidas", domain: "adidas.com", colors: ["#000000", "#FFFFFF"] },
  { name: "Puma", domain: "puma.com", colors: ["#000000", "#BA0C2F"] },
  { name: "Under Armour", domain: "underarmour.com", colors: ["#1D1D1D", "#E03A3E"] },
  { name: "Vans", domain: "vans.com", colors: ["#BA0C2F", "#000000"] },
  { name: "New Balance", domain: "newbalance.com", colors: ["#CE0E2D", "#002B49"] },
  { name: "Converse", domain: "converse.com", colors: ["#000000", "#E31837"] },
  { name: "Reebok", domain: "reebok.com", colors: ["#D41B2C", "#0B163B"] },
  { name: "Champion", domain: "champion.com", colors: ["#00205B", "#C8102E"] },
  { name: "Fila", domain: "fila.com", colors: ["#00205B", "#E21836"] },
  { name: "ASICS", domain: "asics.com", colors: ["#001E62", "#FFFFFF"] },
  { name: "Skechers", domain: "skechers.com", colors: ["#003366", "#0085CA"] },
  { name: "Crocs", domain: "crocs.com", colors: ["#000000", "#76BD1D"] },
  { name: "Timberland", domain: "timberland.com", colors: ["#D4892A", "#000000"] },
  { name: "The North Face", domain: "thenorthface.com", colors: ["#ED1B2D", "#000000"] },
  { name: "Columbia", domain: "columbia.com", colors: ["#0072CE", "#1D252C"] },
  { name: "Patagonia", domain: "patagonia.com", colors: ["#231F20", "#F47D31", "#5C2D91"] },
  { name: "Lululemon", domain: "lululemon.com", colors: ["#D31334", "#000000"] },
  { name: "Gymshark", domain: "gymshark.com", colors: ["#000000", "#FFFFFF"] },
  { name: "Levi's", domain: "levi.com", colors: ["#C41230", "#FFFFFF"] },
  { name: "Gap", domain: "gap.com", colors: ["#002855", "#FFFFFF"] },
  { name: "Old Navy", domain: "oldnavy.com", colors: ["#00205B", "#FFFFFF"] },
  { name: "H&M", domain: "hm.com", colors: ["#CD040B", "#FFFFFF"] },
  { name: "Zara", domain: "zara.com", colors: ["#000000", "#FFFFFF"] },
  { name: "Uniqlo", domain: "uniqlo.com", colors: ["#EE1C25", "#FFFFFF"] },
  { name: "Tommy Hilfiger", domain: "tommy.com", colors: ["#00174F", "#CC0C2F", "#FFFFFF"] },
  { name: "Calvin Klein", domain: "calvinklein.com", colors: ["#000000", "#FFFFFF"] },
  { name: "Ralph Lauren", domain: "ralphlauren.com", colors: ["#002054", "#C49A45"] },
  { name: "Lacoste", domain: "lacoste.com", colors: ["#004526", "#C8102E"] },
  { name: "Diesel", domain: "diesel.com", colors: ["#ED1C24", "#000000"] },
  { name: "Abercrombie & Fitch", domain: "abercrombie.com", colors: ["#0A1D37", "#FFFFFF"] },
  { name: "Hollister", domain: "hollisterco.com", colors: ["#77191C", "#FFFFFF"] },
  { name: "American Eagle", domain: "ae.com", colors: ["#1B365D", "#FFFFFF"] },

  // Luxury & Designer Fashion
  { name: "Gucci", domain: "gucci.com", colors: ["#00552E", "#AE0E17", "#000000"] },
  { name: "Louis Vuitton", domain: "louisvuitton.com", colors: ["#4E3D28", "#876D49"] },
  { name: "Chanel", domain: "chanel.com", colors: ["#000000", "#FFFFFF"] },
  { name: "Prada", domain: "prada.com", colors: ["#000000", "#FFFFFF"] },
  { name: "Hermès", domain: "hermes.com", colors: ["#F37021", "#4A2E12"] },
  { name: "Dior", domain: "dior.com", colors: ["#000000", "#808080"] },
  { name: "Burberry", domain: "burberry.com", colors: ["#000000", "#C5A059", "#A6192E"] },
  { name: "Versace", domain: "versace.com", colors: ["#000000", "#DAA520"] },
  { name: "Armani", domain: "armani.com", colors: ["#000000", "#FFFFFF"] },
  { name: "Fendi", domain: "fendi.com", colors: ["#F7B928", "#000000"] },
  { name: "Balenciaga", domain: "balenciaga.com", colors: ["#000000", "#FFFFFF"] },
  { name: "Saint Laurent", domain: "ysl.com", colors: ["#000000", "#FFFFFF"] },
  { name: "Tiffany & Co.", domain: "tiffany.com", colors: ["#81D8D0", "#000000"] },
  { name: "Cartier", domain: "cartier.com", colors: ["#8A151B", "#C5A059"] },
  { name: "Rolex", domain: "rolex.com", colors: ["#006039", "#A37E2C"] },
  { name: "Omega", domain: "omegawatches.com", colors: ["#B81820", "#000000"] },
  { name: "TAG Heuer", domain: "tagheuer.com", colors: ["#008559", "#E31B23", "#000000"] },
  { name: "Ray-Ban", domain: "ray-ban.com", colors: ["#E31B23", "#000000"] },
  { name: "Oakley", domain: "oakley.com", colors: ["#000000", "#ED1C24"] },

  // Automotive & Racing Brands
  { name: "Ferrari", domain: "ferrari.com", colors: ["#FF2800", "#FFF200", "#00903E"] },
  { name: "Porsche", domain: "porsche.com", colors: ["#D5001C", "#FFD700", "#000000"] },
  { name: "BMW", domain: "bmw.com", colors: ["#0066B1", "#70A9D7", "#000000"] },
  { name: "Mercedes-Benz", domain: "mercedes-benz.com", colors: ["#333333", "#00ADEF"] },
  { name: "Audi", domain: "audi.com", colors: ["#BB0A30", "#000000"] },
  { name: "Ford", domain: "ford.com", colors: ["#003478", "#FFFFFF"] },
  { name: "Tesla", domain: "tesla.com", colors: ["#E82127", "#000000"] },
  { name: "Chevrolet", domain: "chevrolet.com", colors: ["#CBA135", "#000000"] },
  { name: "Toyota", domain: "toyota.com", colors: ["#EB0A1E", "#000000"] },
  { name: "Honda", domain: "honda.com", colors: ["#CC0000", "#000000"] },
  { name: "Jeep", domain: "jeep.com", colors: ["#495643", "#000000"] },
  { name: "Lamborghini", domain: "lamborghini.com", colors: ["#DDB321", "#000000"] },
  { name: "Volkswagen", domain: "vw.com", colors: ["#001E50", "#1E64B4"] },
  { name: "Nissan", domain: "nissanusa.com", colors: ["#C3002F", "#000000"] },
  { name: "Hyundai", domain: "hyundai.com", colors: ["#002C6C", "#00AAD2"] },
  { name: "Kia", domain: "kia.com", colors: ["#05141F", "#EA0029"] },
  { name: "Subaru", domain: "subaru.com", colors: ["#013C7B", "#FFFFFF"] },
  { name: "Mazda", domain: "mazda.com", colors: ["#101010", "#910000"] },
  { name: "Volvo", domain: "volvocars.com", colors: ["#003057", "#1E4F7C"] },
  { name: "Jaguar", domain: "jaguar.com", colors: ["#005A36", "#505050"] },
  { name: "Land Rover", domain: "landrover.com", colors: ["#0C5A35", "#FFFFFF"] },
  { name: "Maserati", domain: "maserati.com", colors: ["#0C2340", "#C8102E"] },
  { name: "Aston Martin", domain: "astonmartin.com", colors: ["#004838", "#FFFFFF"] },
  { name: "McLaren", domain: "mclaren.com", colors: ["#FF8000", "#000000"] },
  { name: "Bugatti", domain: "bugatti.com", colors: ["#BE1622", "#000000"] },
  { name: "Bentley", domain: "bentleymotors.com", colors: ["#000000", "#144733"] },
  { name: "Rolls-Royce", domain: "rolls-roycemotorcars.com", colors: ["#461D4C", "#B0A8A0"] },
  { name: "Ducati", domain: "ducati.com", colors: ["#CC0000", "#000000"] },
  { name: "Harley-Davidson", domain: "harley-davidson.com", colors: ["#FF6600", "#000000"] },
  { name: "Yamaha", domain: "yamahamotorsports.com", colors: ["#0033A0", "#CC0000"] },
  { name: "Kawasaki", domain: "kawasaki.com", colors: ["#66CC00", "#000000"] },
  { name: "Michelin", domain: "michelin.com", colors: ["#002F6C", "#FFE600"] },
  { name: "Pirelli", domain: "pirelli.com", colors: ["#FED100", "#D52B1E"] },
  { name: "Bridgestone", domain: "bridgestone.com", colors: ["#ED1C24", "#000000"] },
  { name: "Goodyear", domain: "goodyear.com", colors: ["#00338D", "#FED100"] },
  { name: "Castrol", domain: "castrol.com", colors: ["#007A3E", "#E31837"] },
  { name: "Mobil 1", domain: "mobil.com", colors: ["#003C71", "#ED1C24"] },
  { name: "Shell", domain: "shell.com", colors: ["#FBCE07", "#DD1D21"] },
  { name: "BP", domain: "bp.com", colors: ["#007A3D", "#FFDE00"] },
  { name: "Chevron", domain: "chevron.com", colors: ["#005596", "#E31B23"] },

  // Finance, Banking, Cards & Insurance
  { name: "Mastercard", domain: "mastercard.com", colors: ["#EB001B", "#F79E1B", "#FF5F00"] },
  { name: "Visa", domain: "visa.com", colors: ["#1A1F71", "#F7B600"] },
  { name: "American Express", domain: "americanexpress.com", colors: ["#006FCF", "#FFFFFF"] },
  { name: "PayPal", domain: "paypal.com", colors: ["#003087", "#0079C1", "#00457C"] },
  { name: "Venmo", domain: "venmo.com", colors: ["#008CFF", "#FFFFFF"] },
  { name: "Chase", domain: "chase.com", colors: ["#117ACA", "#0A2540"] },
  { name: "Bank of America", domain: "bankofamerica.com", colors: ["#E31837", "#00529B"] },
  { name: "Citi", domain: "citi.com", colors: ["#003B70", "#ED1C24"] },
  { name: "Wells Fargo", domain: "wellsfargo.com", colors: ["#D71E28", "#FFCE00"] },
  { name: "Capital One", domain: "capitalone.com", colors: ["#D03027", "#004879"] },
  { name: "Discover", domain: "discover.com", colors: ["#FF6000", "#1F3643"] },
  { name: "Barclays", domain: "barclays.co.uk", colors: ["#00AEEF", "#00395D"] },
  { name: "HSBC", domain: "hsbc.com", colors: ["#DB0011", "#000000"] },
  { name: "Santander", domain: "santander.com", colors: ["#EC0000", "#FFFFFF"] },
  { name: "Deutsche Bank", domain: "db.com", colors: ["#0018A8", "#FFFFFF"] },
  { name: "UBS", domain: "ubs.com", colors: ["#E60000", "#000000"] },
  { name: "Goldman Sachs", domain: "goldmansachs.com", colors: ["#7399C6", "#000000"] },
  { name: "Morgan Stanley", domain: "morganstanley.com", colors: ["#002B49", "#0072CE"] },
  { name: "Fidelity", domain: "fidelity.com", colors: ["#45853B", "#000000"] },
  { name: "Vanguard", domain: "vanguard.com", colors: ["#981E32", "#000000"] },
  { name: "Charles Schwab", domain: "schwab.com", colors: ["#00A3E0", "#FFFFFF"] },
  { name: "Klarna", domain: "klarna.com", colors: ["#FFB3C7", "#0A0A0A"] },
  { name: "Afterpay", domain: "afterpay.com", colors: ["#B2FCE4", "#000000"] },
  { name: "Geico", domain: "geico.com", colors: ["#003366", "#78BE20"] },
  { name: "Progressive", domain: "progressive.com", colors: ["#0076CE", "#FFFFFF"] },
  { name: "State Farm", domain: "statefarm.com", colors: ["#E31B23", "#FFFFFF"] },
  { name: "Allstate", domain: "allstate.com", colors: ["#004B87", "#FFFFFF"] },

  // Telecom & Media Networks
  { name: "T-Mobile", domain: "t-mobile.com", colors: ["#E20074", "#FFFFFF"] },
  { name: "Verizon", domain: "verizon.com", colors: ["#CD040B", "#000000"] },
  { name: "AT&T", domain: "att.com", colors: ["#00A8E0", "#0057B8"] },
  { name: "Vodafone", domain: "vodafone.com", colors: ["#E60000", "#FFFFFF"] },
  { name: "Orange", domain: "orange.com", colors: ["#FF7900", "#000000"] },
  { name: "O2", domain: "o2.co.uk", colors: ["#0019A5", "#EDF0F5"] },
  { name: "Xfinity / Comcast", domain: "xfinity.com", colors: ["#782B8F", "#FF2465", "#000000"] },
  { name: "BBC", domain: "bbc.com", colors: ["#000000", "#FF0000"] },
  { name: "CNN", domain: "cnn.com", colors: ["#CC0000", "#000000"] },
  { name: "HBO", domain: "hbo.com", colors: ["#000000", "#582C83"] },
  { name: "ESPN", domain: "espn.com", colors: ["#CD0000", "#000000"] },
  { name: "Disney", domain: "disney.com", colors: ["#113CCF", "#FFFFFF"] },
  { name: "Hulu", domain: "hulu.com", colors: ["#1CE783", "#0B0C0F"] },
  { name: "Paramount+", domain: "paramountplus.com", colors: ["#0064FF", "#000B2B"] },
  { name: "Peacock", domain: "peacocktv.com", colors: ["#000000", "#00A859", "#FFDE00", "#004B93"] },
  { name: "Warner Bros", domain: "warnerbros.com", colors: ["#004DB3", "#FFD700"] },
  { name: "Universal Pictures", domain: "universalpictures.com", colors: ["#1D3557", "#DDA15E"] },

  // Airlines & Travel Services
  { name: "Delta Air Lines", domain: "delta.com", colors: ["#003A70", "#E01933"] },
  { name: "American Airlines", domain: "aa.com", colors: ["#0078D2", "#C30017", "#B2B4B3"] },
  { name: "United Airlines", domain: "united.com", colors: ["#002244", "#005DAA"] },
  { name: "Southwest Airlines", domain: "southwest.com", colors: ["#11295B", "#F9B612", "#E81B23"] },
  { name: "Air Canada", domain: "aircanada.com", colors: ["#D8232A", "#000000"] },
  { name: "British Airways", domain: "britishairways.com", colors: ["#075AAA", "#EB2226"] },
  { name: "Lufthansa", domain: "lufthansa.com", colors: ["#05164D", "#FFAC00"] },
  { name: "Emirates", domain: "emirates.com", colors: ["#D71921", "#C79D3B", "#000000"] },
  { name: "Qatar Airways", domain: "qatarairways.com", colors: ["#5C0632", "#848285"] },
  { name: "Ryanair", domain: "ryanair.com", colors: ["#073590", "#F1C933"] },
  { name: "EasyJet", domain: "easyjet.com", colors: ["#FF6600", "#000000"] },
  { name: "Air France", domain: "airfrance.com", colors: ["#002157", "#ED0000"] },
  { name: "KLM", domain: "klm.com", colors: ["#00A1DE", "#FFFFFF"] },
  { name: "Singapore Airlines", domain: "singaporeair.com", colors: ["#0A1C44", "#D8A850"] },
  { name: "Qantas", domain: "qantas.com", colors: ["#E0001B", "#FFFFFF"] },
  { name: "Booking.com", domain: "booking.com", colors: ["#003580", "#008009", "#FEBA02"] },
  { name: "Expedia", domain: "expedia.com", colors: ["#00355F", "#FFCC00"] },
  { name: "Tripadvisor", domain: "tripadvisor.com", colors: ["#00AF87", "#000000"] },
  { name: "Marriott", domain: "marriott.com", colors: ["#B81F28", "#1E1E1E"] },
  { name: "Hilton", domain: "hilton.com", colors: ["#123652", "#937D53"] },
  { name: "Hyatt", domain: "hyatt.com", colors: ["#762235", "#C89D52"] },

  // Household, Personal Care & Industrial
  { name: "Oral-B", domain: "oralb.com", colors: ["#002D72", "#00A3E0"] },
  { name: "Colgate", domain: "colgate.com", colors: ["#E11A27", "#FFFFFF"] },
  { name: "Gillette", domain: "gillette.com", colors: ["#00186B", "#FFFFFF"] },
  { name: "Dove", domain: "dove.com", colors: ["#0C2340", "#CCA43B"] },
  { name: "Nivea", domain: "nivea.com", colors: ["#00327A", "#FFFFFF"] },
  { name: "Old Spice", domain: "oldspice.com", colors: ["#A6192E", "#F4C430"] },
  { name: "Tide", domain: "tide.com", colors: ["#F15D22", "#003A70", "#FFD200"] },
  { name: "Clorox", domain: "clorox.com", colors: ["#005696", "#E31B23", "#FDC114"] },
  { name: "Lysol", domain: "lysol.com", colors: ["#0055A5", "#FFE000"] },
  { name: "Dyson", domain: "dyson.com", colors: ["#880088", "#222222"] },
  { name: "DeWalt", domain: "dewalt.com", colors: ["#FEB81C", "#000000"] },
  { name: "Milwaukee Tool", domain: "milwaukeetool.com", colors: ["#DB0000", "#000000"] },
  { name: "Bosch", domain: "bosch.com", colors: ["#EA1D2D", "#005691"] },
  { name: "Makita", domain: "makitatools.com", colors: ["#00878F", "#000000"] },
  { name: "Caterpillar", domain: "cat.com", colors: ["#FFCD11", "#000000"] },
  { name: "John Deere", domain: "deere.com", colors: ["#367C2B", "#FFDE00"] },
  { name: "3M", domain: "3m.com", colors: ["#FF0000", "#000000"] },
  { name: "Bic", domain: "bic.com", colors: ["#FF6600", "#000000", "#FDB913"] },
  { name: "Sharpie", domain: "sharpie.com", colors: ["#000000", "#D6262B"] },
  { name: "Post-it", domain: "post-it.com", colors: ["#FFF000", "#FF69B4"] },
  { name: "Band-Aid", domain: "band-aid.com", colors: ["#0057B8", "#ED1C24"] },
  { name: "Duracell", domain: "duracell.com", colors: ["#C68A4C", "#000000"] },
  { name: "Energizer", domain: "energizer.com", colors: ["#ED1C24", "#FFDD00", "#000000"] },
  { name: "Stanley", domain: "stanleytools.com", colors: ["#FFE600", "#000000"] },
  { name: "Rubbermaid", domain: "rubbermaid.com", colors: ["#D71920", "#000000"] },
  { name: "Tupperware", domain: "tupperware.com", colors: ["#84BD00", "#000000"] },
  { name: "Pampers", domain: "pampers.com", colors: ["#00A896", "#F2C75C"] },
  { name: "Huggies", domain: "huggies.com", colors: ["#E31B23", "#005A9C"] },
  { name: "L'Oréal", domain: "loreal.com", colors: ["#E31B23", "#000000", "#C5A059"] },
  { name: "Maybelline", domain: "maybelline.com", colors: ["#000000", "#FFFFFF"] },
  { name: "MAC Cosmetics", domain: "maccosmetics.com", colors: ["#000000", "#FFFFFF"] },
  { name: "Kleenex", domain: "kleenex.com", colors: ["#00386B", "#FFFFFF"] },
  { name: "Head & Shoulders", domain: "headandshoulders.com", colors: ["#004B93", "#00A8E0"] },
  { name: "Pantene", domain: "pantene.com", colors: ["#C5A059", "#000000"] },
  { name: "Neutrogena", domain: "neutrogena.com", colors: ["#00529B", "#000000"] },
  { name: "Johnson & Johnson", domain: "jnj.com", colors: ["#D51900", "#FFFFFF"] },
  { name: "Pfizer", domain: "pfizer.com", colors: ["#0000FF", "#0095FF"] },
  { name: "AstraZeneca", domain: "astrazeneca.com", colors: ["#830051", "#D0D0CE", "#F0AB00"] },
  { name: "Moderna", domain: "modernatx.com", colors: ["#E11A27", "#003A70"] },
  { name: "Bayer", domain: "bayer.com", colors: ["#0091DF", "#89BA16"] }
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

  // Filter out brands currently in cooldown
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

  // Pick 3 random wrong options
  const wrongOptions = shuffle(BRANDS.filter((b) => b.name !== currentBrand.name)).slice(0, 3);
  const roundChoices = shuffle([currentBrand, ...wrongOptions]);

  // Render Option Buttons
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
  
  // High-res logo endpoint pulling vector/HQ assets up to 400px
  logoImg.src = `https://unavatar.io/${brand.domain}?fallback=https://logo.clearbit.com/${brand.domain}`;
  logoImg.onerror = () => {
    logoImg.src = `https://www.google.com/s2/favicons?domain=${brand.domain}&sz=256`;
  };
  
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