const BRANDS = [
  // Fast Food & Dining
  { name: "McDonald's", logo: "https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg", colors: ["#DA291C", "#FFC72C"] },
  { name: "Burger King", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Burger_King_2020.svg", colors: ["#D62300", "#FBE122", "#502314"] },
  { name: "Wendy's", logo: "https://upload.wikimedia.org/wikipedia/en/3/32/Wendy%27s_full_logo_2012.svg", colors: ["#E2203D", "#199BD7", "#000000"] },
  { name: "Subway", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Subway_2016_logo.svg", colors: ["#008C15", "#FFC600"] },
  { name: "Taco Bell", logo: "https://upload.wikimedia.org/wikipedia/en/b/b3/Taco_Bell_2016.svg", colors: ["#702082", "#A77BCA", "#000000"] },
  { name: "KFC", logo: "https://upload.wikimedia.org/wikipedia/en/b/bf/KFC_logo.svg", colors: ["#A3080C", "#000000", "#FFFFFF"] },
  { name: "Pizza Hut", logo: "https://upload.wikimedia.org/wikipedia/en/d/d2/Pizza_Hut_logo_%282014%29.svg", colors: ["#EE3124", "#00A859", "#FFC425"] },
  { name: "Domino's", logo: "https://upload.wikimedia.org/wikipedia/commons/7/74/Dominos_pizza_logo.svg", colors: ["#006491", "#E31837"] },
  { name: "Papa John's", logo: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Papa_John%27s_Pizza_logo.svg", colors: ["#005A36", "#C8102E"] },
  { name: "Little Caesars", logo: "https://upload.wikimedia.org/wikipedia/en/7/78/Little_Caesars_logo.svg", colors: ["#F37021", "#000000"] },
  { name: "Dunkin'", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Dunkin%27_logo.svg", colors: ["#FF671F", "#DA1884", "#653819"] },
  { name: "Starbucks", logo: "https://upload.wikimedia.org/wikipedia/en/d/d3/Starbucks_Corporation_Logo_2011.svg", colors: ["#00704A", "#1E3932", "#FFFFFF"] },
  { name: "Tim Hortons", logo: "https://upload.wikimedia.org/wikipedia/commons/5/57/Tim_Hortons_logo.svg", colors: ["#C8102E", "#4B2E1E"] },
  { name: "Chipotle", logo: "https://upload.wikimedia.org/wikipedia/en/3/3b/Chipotle_Mexican_Grill_logo.svg", colors: ["#451400", "#AD343E"] },
  { name: "Popeyes", logo: "https://upload.wikimedia.org/wikipedia/commons/0/00/Popeyes_logo.svg", colors: ["#F15A24", "#007A3E"] },
  { name: "Dairy Queen", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Dairy_Queen_logo.svg", colors: ["#EE3124", "#005696"] },
  { name: "Five Guys", logo: "https://upload.wikimedia.org/wikipedia/commons/7/78/Five_Guys_logo.svg", colors: ["#ED1C24", "#FFFFFF"] },
  { name: "Shake Shack", logo: "https://upload.wikimedia.org/wikipedia/commons/d/df/Shake_Shack_logo.svg", colors: ["#5CA432", "#000000"] },
  { name: "In-N-Out", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/In-N-Out_Burger_logo.svg", colors: ["#DD131D", "#FFC20E"] },
  { name: "Sonic Drive-In", logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sonic_Drive-In_logo.svg", colors: ["#D92525", "#F7C300"] },
  { name: "Krispy Kreme", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Krispy_Kreme_doughnuts_logo.svg", colors: ["#007A3D", "#DD131D"] },
  { name: "Panda Express", logo: "https://upload.wikimedia.org/wikipedia/en/e/e5/Panda_Express_logo.svg", colors: ["#D12026", "#000000"] },
  { name: "Arby's", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Arby%27s_logo.svg", colors: ["#D9272E", "#303030"] },
  { name: "Jack in the Box", logo: "https://upload.wikimedia.org/wikipedia/commons/5/52/Jack_in_the_Box_2009_logo.svg", colors: ["#DA291C", "#FFFFFF"] },
  { name: "Carl's Jr.", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Carl%27s_Jr._logo.svg", colors: ["#ED1C24", "#FFC72C", "#000000"] },
  { name: "Hardee's", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Hardee%27s_logo.svg", colors: ["#ED1C24", "#FFD100"] },
  { name: "Culver's", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Culver%27s_logo.svg", colors: ["#005696", "#FFFFFF"] },
  { name: "Chick-fil-A", logo: "https://upload.wikimedia.org/wikipedia/commons/0/02/Chick-fil-A_Logo.svg", colors: ["#DD0031", "#FFFFFF"] },
  { name: "Whataburger", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Whataburger_logo.svg", colors: ["#F15A22", "#FFFFFF"] },
  { name: "Wingstop", logo: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Wingstop_logo.svg", colors: ["#005A36", "#F2C75C"] },
  { name: "Nando's", logo: "https://upload.wikimedia.org/wikipedia/en/c/c5/Nandos_logo.svg", colors: ["#000000", "#C8102E", "#F4C430"] },
  { name: "Panera Bread", logo: "https://upload.wikimedia.org/wikipedia/en/9/9a/Panera_Bread_logo.svg", colors: ["#4E5B31", "#C49A45"] },
  { name: "Red Lobster", logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Red_Lobster_logo.svg", colors: ["#D8232A", "#000000"] },
  { name: "Olive Garden", logo: "https://upload.wikimedia.org/wikipedia/en/3/39/Olive_Garden_Logo.svg", colors: ["#5B6734", "#4B2E1E"] },
  { name: "Baskin-Robbins", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Baskin-Robbins_logo.svg", colors: ["#315BA7", "#EC1B69"] },

  // Beverages & Packaged Foods
  { name: "Coca-Cola", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg", colors: ["#F40009", "#000000", "#FFFFFF"] },
  { name: "Pepsi", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Pepsi_logo_2014.svg", colors: ["#004B93", "#C9002B", "#FFFFFF"] },
  { name: "Red Bull", logo: "https://upload.wikimedia.org/wikipedia/en/f/f5/RedBullEnergyDrink.svg", colors: ["#001D4A", "#DB0A40", "#FFCC00"] },
  { name: "Monster Energy", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/monster.svg", colors: ["#95D600", "#000000"] },
  { name: "Heineken", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Heineken_logo.svg", colors: ["#008200", "#FF0000"] },
  { name: "Mountain Dew", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Mountain_Dew_logo.svg", colors: ["#23B14D", "#DA291C", "#000000"] },
  { name: "Gatorade", logo: "https://upload.wikimedia.org/wikipedia/commons/9/94/Gatorade_logo.svg", colors: ["#FF6200", "#008751", "#000000"] },
  { name: "Sprite", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Sprite_Logo.svg", colors: ["#008B47", "#FFDE00", "#004B93"] },
  { name: "Fanta", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Fanta_logo_%282017%29.svg", colors: ["#F99B1C", "#004B93", "#3AAA35"] },
  { name: "Dr Pepper", logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/Dr_Pepper_logo.svg", colors: ["#711F25", "#FFFFFF"] },
  { name: "7UP", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/7up_logo.svg", colors: ["#008852", "#E31B23", "#A8D32A"] },
  { name: "Corona", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Corona-Logo.svg", colors: ["#002454", "#F4BE18", "#FFFFFF"] },
  { name: "Budweiser", logo: "https://upload.wikimedia.org/wikipedia/commons/2/23/Budweiser_logo.svg", colors: ["#C8102E", "#15244C", "#D1A153"] },
  { name: "Guinness", logo: "https://upload.wikimedia.org/wikipedia/en/b/b3/Guinness_Logo.svg", colors: ["#000000", "#D6B265", "#FFFFFF"] },
  { name: "Stella Artois", logo: "https://upload.wikimedia.org/wikipedia/en/1/10/Stella_Artois_Logo.svg", colors: ["#9E1B32", "#C69214", "#FFFFFF"] },
  { name: "Carlsberg", logo: "https://upload.wikimedia.org/wikipedia/commons/d/df/Carlsberg_logo.svg", colors: ["#00382B", "#FFFFFF"] },
  { name: "Oreo", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Oreo_Grayscale_Logo.svg", colors: ["#005BAC", "#000000", "#FFFFFF"] },
  { name: "Doritos", logo: "https://upload.wikimedia.org/wikipedia/en/b/be/Doritos_2013_logo.svg", colors: ["#ED1C24", "#FFC72C", "#000000"] },
  { name: "Lay's", logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Lay%27s_logo.svg", colors: ["#FFD100", "#E31B23", "#00629B"] },
  { name: "Pringles", logo: "https://upload.wikimedia.org/wikipedia/en/7/71/Pringles_logo_2020.svg", colors: ["#E51937", "#FED100", "#4B2E1E"] },
  { name: "Cheetos", logo: "https://upload.wikimedia.org/wikipedia/en/2/21/Cheetos_logo.svg", colors: ["#FF6600", "#000000", "#FFCC00"] },
  { name: "Skittles", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Skittles-Logo.svg", colors: ["#E31837", "#FFD200", "#00853F", "#0055B8"] },
  { name: "M&M's", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e5/M%26M%27s_logo.svg", colors: ["#5C2D25", "#FFCC00", "#D6262B"] },
  { name: "Kit Kat", logo: "https://upload.wikimedia.org/wikipedia/commons/5/56/KitKat_logo.svg", colors: ["#D8232A", "#FFFFFF"] },
  { name: "Snickers", logo: "https://upload.wikimedia.org/wikipedia/commons/9/97/Snickers_logo.svg", colors: ["#492B1E", "#00529B", "#FFFFFF"] },
  { name: "Twix", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Twix-Logo.svg", colors: ["#C59B27", "#D42128"] },
  { name: "Reese's", logo: "https://upload.wikimedia.org/wikipedia/commons/9/97/Reese%27s_logo.svg", colors: ["#FF6600", "#4A2A0C", "#FFD100"] },
  { name: "Hershey's", logo: "https://upload.wikimedia.org/wikipedia/commons/3/30/The_Hershey_Company_logo.svg", colors: ["#3D1E16", "#C0C0C0"] },
  { name: "Nutella", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Nutella_logo.svg", colors: ["#000000", "#E31B23"] },
  { name: "Heinz", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Heinz_logo.svg", colors: ["#A31A1E", "#006241", "#F2C75C"] },
  { name: "Campbell's", logo: "https://upload.wikimedia.org/wikipedia/commons/3/34/Campbell%27s_Soup_Company_logo.svg", colors: ["#DF1B24", "#FFFFFF", "#C59B27"] },
  { name: "Kellogg's", logo: "https://upload.wikimedia.org/wikipedia/commons/d/df/Kellogg%27s-Logo.svg", colors: ["#D92525", "#FFFFFF"] },
  { name: "Nestle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Nestl%C3%A9_textlogo.svg", colors: ["#005CA9", "#75787B"] },
  { name: "Toblerone", logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Toblerone_logo.svg", colors: ["#D4A853", "#9D1E2D", "#FFFFFF"] },
  { name: "Haribo", logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Haribo_Logo.svg", colors: ["#005696", "#E31837", "#FED100"] },
  { name: "Lindt", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Lindt_Logo.svg", colors: ["#A67C52", "#2B1A12", "#C59B27"] },
  { name: "Ben & Jerry's", logo: "https://upload.wikimedia.org/wikipedia/en/e/ea/Ben_and_jerry_logo.svg", colors: ["#00A3E0", "#78BE20", "#000000"] },
  { name: "Tropicana", logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Tropicana_Logo.svg", colors: ["#008751", "#FF6200", "#FFFFFF"] },
  { name: "Danone", logo: "https://upload.wikimedia.org/wikipedia/commons/1/13/Danone_logo.svg", colors: ["#005CA9", "#E31B23"] },
  { name: "Quaker Oats", logo: "https://upload.wikimedia.org/wikipedia/en/3/3f/Quaker_Oats_Company_logo.svg", colors: ["#003366", "#D71920"] },

  // Big Tech & Cloud Platforms
  { name: "Google", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/google.svg", colors: ["#4285F4", "#EA4335", "#FBBC05", "#34A853"] },
  { name: "Microsoft", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/microsoft.svg", colors: ["#F25022", "#7FBA00", "#00A4EF", "#FFB900"] },
  { name: "Apple", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/apple.svg", colors: ["#555555", "#000000", "#FFFFFF"] },
  { name: "Amazon", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/amazon.svg", colors: ["#FF9900", "#146EB4", "#000000"] },
  { name: "Meta", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/meta.svg", colors: ["#0081FB", "#0064E0"] },
  { name: "YouTube", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/youtube.svg", colors: ["#FF0000", "#282828", "#FFFFFF"] },
  { name: "Spotify", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/spotify.svg", colors: ["#1DB954", "#191414"] },
  { name: "Netflix", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/netflix.svg", colors: ["#E50914", "#000000"] },
  { name: "Discord", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/discord.svg", colors: ["#5865F2", "#23272A", "#FFFFFF"] },
  { name: "Twitch", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/twitch.svg", colors: ["#9146FF", "#000000", "#FFFFFF"] },
  { name: "Twitter / X", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/x.svg", colors: ["#000000", "#FFFFFF"] },
  { name: "Instagram", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/instagram.svg", colors: ["#E1306C", "#F77737", "#405DE6", "#FCAF45"] },
  { name: "Facebook", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/facebook.svg", colors: ["#1877F2", "#FFFFFF"] },
  { name: "TikTok", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/tiktok.svg", colors: ["#00F2FE", "#FE2C55", "#000000"] },
  { name: "Snapchat", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/snapchat.svg", colors: ["#FFFC00", "#000000", "#FFFFFF"] },
  { name: "Reddit", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/reddit.svg", colors: ["#FF4500", "#cee3f8", "#000000"] },
  { name: "Pinterest", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/pinterest.svg", colors: ["#E60023", "#FFFFFF"] },
  { name: "Slack", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/slack.svg", colors: ["#4A154B", "#36C5F0", "#2EB67D", "#ECB22E"] },
  { name: "LinkedIn", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/linkedin.svg", colors: ["#0A66C2", "#FFFFFF"] },
  { name: "WhatsApp", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/whatsapp.svg", colors: ["#25D366", "#075E54", "#128C7E"] },
  { name: "Telegram", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/telegram.svg", colors: ["#24A1DE", "#FFFFFF"] },
  { name: "Dropbox", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/dropbox.svg", colors: ["#0061FF", "#000000"] },
  { name: "Uber", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/uber.svg", colors: ["#000000", "#FFFFFF"] },
  { name: "Airbnb", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/airbnb.svg", colors: ["#FF5A5F", "#00A699", "#FC642D"] },
  { name: "Shopify", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/shopify.svg", colors: ["#96BF48", "#004C3F", "#FFFFFF"] },
  { name: "GitHub", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/github.svg", colors: ["#24292E", "#FFFFFF"] },
  { name: "GitLab", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/gitlab.svg", colors: ["#FC6D26", "#E24329", "#FCA326"] },
  { name: "Figma", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/figma.svg", colors: ["#F24E1E", "#A259FF", "#1ABCFE", "#0ACF83"] },
  { name: "Canva", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/canva.svg", colors: ["#00C4CC", "#7D2AE8"] },
  { name: "Notion", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/notion.svg", colors: ["#000000", "#FFFFFF"] },
  { name: "Trello", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/trello.svg", colors: ["#0079BF", "#00C2E0"] },
  { name: "Asana", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/asana.svg", colors: ["#F06A6A", "#27333F"] },
  { name: "Zoom", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/zoom.svg", colors: ["#2D8CFF", "#FFFFFF"] },
  { name: "Duolingo", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/duolingo.svg", colors: ["#58CC02", "#FFC800", "#CE82FF"] },
  { name: "Tinder", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/tinder.svg", colors: ["#FE3C72", "#FF655B"] },
  { name: "WordPress", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/wordpress.svg", colors: ["#21759B", "#D54E21"] },
  { name: "Salesforce", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/salesforce.svg", colors: ["#00A1E0", "#FFFFFF"] },
  { name: "HubSpot", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/hubspot.svg", colors: ["#FF7A59", "#33475B"] },
  { name: "Mailchimp", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/mailchimp.svg", colors: ["#FFE01B", "#241C15"] },
  { name: "Stripe", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/stripe.svg", colors: ["#635BFF", "#0A2540"] },

  // Hardware & Gaming
  { name: "Intel", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/intel.svg", colors: ["#0071C5", "#00C7FD", "#FFFFFF"] },
  { name: "AMD", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/amd.svg", colors: ["#ED1C24", "#000000", "#FFFFFF"] },
  { name: "Nvidia", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/nvidia.svg", colors: ["#76B900", "#000000", "#FFFFFF"] },
  { name: "Samsung", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/samsung.svg", colors: ["#1428A0", "#000000", "#FFFFFF"] },
  { name: "Sony", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/sony.svg", colors: ["#000000", "#FFFFFF"] },
  { name: "LG", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/lg.svg", colors: ["#A50034", "#6B6B6B"] },
  { name: "Dell", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/dell.svg", colors: ["#007DB8", "#000000"] },
  { name: "HP", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/hp.svg", colors: ["#0096D6", "#000000"] },
  { name: "Lenovo", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/lenovo.svg", colors: ["#E2231A", "#000000"] },
  { name: "ASUS", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/asus.svg", colors: ["#00539B", "#000000"] },
  { name: "Logitech", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/logitech.svg", colors: ["#00B8FC", "#2F3132"] },
  { name: "Razer", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/razer.svg", colors: ["#00FF00", "#000000"] },
  { name: "Qualcomm", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/qualcomm.svg", colors: ["#3253DC", "#000000"] },
  { name: "Cisco", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/cisco.svg", colors: ["#049FD9", "#1BA0D7", "#2B5592"] },
  { name: "IBM", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/ibm.svg", colors: ["#054ADA", "#000000"] },
  { name: "Oracle", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/oracle.svg", colors: ["#F80000", "#000000"] },
  { name: "Panasonic", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Panasonic_logo_%28Blue%29.svg", colors: ["#004098", "#FFFFFF"] },
  { name: "Toshiba", logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Toshiba_logo.svg", colors: ["#FF0000", "#000000"] },
  { name: "Hitachi", logo: "https://upload.wikimedia.org/wikipedia/commons/3/30/Hitachi_logo.svg", colors: ["#E60012", "#000000"] },
  { name: "Nokia", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/nokia.svg", colors: ["#124191", "#FFFFFF"] },
  { name: "GoPro", logo: "https://upload.wikimedia.org/wikipedia/commons/6/67/GoPro_logo.svg", colors: ["#00A0DF", "#000000"] },
  { name: "Canon", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Canon_wordmark.svg", colors: ["#CC0000", "#000000"] },
  { name: "Nikon", logo: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Nikon_Logo.svg", colors: ["#FFE100", "#000000"] },
  { name: "Bose", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Bose_logo.svg", colors: ["#000000", "#FFFFFF"] },
  { name: "Sennheiser", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Sennheiser_Logo.svg", colors: ["#0085C7", "#000000"] },
  { name: "Sonos", logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sonos_logo.svg", colors: ["#000000", "#FFFFFF"] },
  { name: "JBL", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/JBL_logo.svg", colors: ["#FF6600", "#000000"] },
  { name: "Corsair", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/corsair.svg", colors: ["#F3D03E", "#000000"] },
  { name: "SteelSeries", logo: "https://upload.wikimedia.org/wikipedia/commons/f/ff/SteelSeries_logo.svg", colors: ["#FF5200", "#000000"] },
  { name: "MSI", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b3/MSI_Logo.svg", colors: ["#FF0000", "#000000"] },
  { name: "Nintendo", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/nintendo.svg", colors: ["#E60012", "#FFFFFF"] },
  { name: "PlayStation", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/playstation.svg", colors: ["#003791", "#000000", "#FFFFFF"] },
  { name: "Xbox", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/xbox.svg", colors: ["#107C10", "#000000"] },
  { name: "Steam", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/steam.svg", colors: ["#171A21", "#66C0F4", "#1B2838"] },
  { name: "Epic Games", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/epic-games.svg", colors: ["#313131", "#FFFFFF"] },
  { name: "Unity", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/unity.svg", colors: ["#222C37", "#FFFFFF"] },
  { name: "Unreal Engine", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/unreal-engine.svg", colors: ["#0E1128", "#FFFFFF"] },
  { name: "Riot Games", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/riot-games.svg", colors: ["#D12727", "#000000"] },
  { name: "Ubisoft", logo: "https://upload.wikimedia.org/wikipedia/commons/7/78/Ubisoft_logo.svg", colors: ["#000000", "#006EFF"] },
  { name: "EA Sports", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Electronic-Arts-Logo.svg", colors: ["#FF4747", "#000000"] },

  // Retail, Supermarkets & Department Stores
  { name: "IKEA", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Ikea_logo.svg", colors: ["#0051BA", "#FFDA1A"] },
  { name: "Target", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Target_Corporation_logo_%28vector%29.svg", colors: ["#CC0000", "#FFFFFF"] },
  { name: "Walmart", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg", colors: ["#0071CE", "#FFC220"] },
  { name: "Best Buy", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Best_Buy_Logo.svg", colors: ["#0046BE", "#FFE000"] },
  { name: "Home Depot", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/TheHomeDepot.svg", colors: ["#F96302", "#FFFFFF"] },
  { name: "Lowe's", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Lowes_Companies_Logo.svg", colors: ["#004990", "#FFFFFF"] },
  { name: "Costco", logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/Costco_Wholesale_logo_2010-10-26.svg", colors: ["#005DAA", "#E31837"] },
  { name: "Sam's Club", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Sam%27s_Club_logo.svg", colors: ["#0067A0", "#76B82A"] },
  { name: "FedEx", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b9/FedEx_Corporation_-_2016_Logo.svg", colors: ["#4D148C", "#FF6600"] },
  { name: "UPS", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/United_Parcel_Service_logo_2014.svg", colors: ["#351C15", "#FFB500"] },
  { name: "DHL", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ac/DHL_Logo.svg", colors: ["#FFCC00", "#D40511"] },
  { name: "Lego", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/LEGO_logo.svg", colors: ["#D11013", "#FFD500", "#000000"] },
  { name: "eBay", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg", colors: ["#E53238", "#0064D2", "#F5AF02", "#86B817"] },
  { name: "Etsy", logo: "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/etsy.svg", colors: ["#F16521", "#FFFFFF"] },
  { name: "Alibaba", logo: "https://upload.wikimedia.org/wikipedia/en/8/80/Alibaba-Group-Logo.svg", colors: ["#FF6A00", "#FFFFFF"] },
  { name: "Macy's", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Macy%27s_logo.svg", colors: ["#E21A2C", "#000000"] },
  { name: "Nordstrom", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Nordstrom_Logo_2019.svg", colors: ["#000000", "#FFFFFF"] },
  { name: "Kohl's", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Kohl%27s_logo.svg", colors: ["#000000", "#E31837"] },
  { name: "Sephora", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Sephora_logo.svg", colors: ["#000000", "#FFFFFF"] },
  { name: "CVS Pharmacy", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/CVS_Health_Logo.svg", colors: ["#CC0000", "#FFFFFF"] },
  { name: "Walgreens", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Walgreens_Logo.svg", colors: ["#E31837", "#005596"] },
  { name: "7-Eleven", logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/7-eleven_logo.svg", colors: ["#008163", "#EE3124", "#F47920"] },
  { name: "Circle K", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Circle_K_logo.svg", colors: ["#EE2724", "#F6921E"] },
  { name: "Decathlon", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Decathlon_Logo.svg", colors: ["#0082C3", "#FFFFFF"] },
  { name: "Toys 'R' Us", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Toys_%22R%22_Us_logo.svg", colors: ["#0056B3", "#FFCB05", "#EE3124", "#7AC142"] },
  { name: "Aldi", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1a/ALDI_S%C3%9CD_2017_logo.svg", colors: ["#00205B", "#E31B23", "#FFC72C", "#38A9DC"] },
  { name: "Lidl", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Lidl-Logo.svg", colors: ["#0050AA", "#FFF000", "#E60A14"] },
  { name: "Tesco", logo: "https://upload.wikimedia.org/wikipedia/en/b/b5/Tesco_Logo.svg", colors: ["#00539F", "#EE1C2E"] },
  { name: "Carrefour", logo: "https://upload.wikimedia.org/wikipedia/en/1/12/Carrefour_logo_no_text.svg", colors: ["#00387B", "#E2001A"] },
  { name: "Kroger", logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/The_Kroger_Co._logo_%282019%29.svg", colors: ["#0C479D", "#D6232A"] },
  { name: "Whole Foods", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Whole_Foods_Market_201x_logo.svg", colors: ["#006747", "#FFFFFF"] },
  { name: "Publix", logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Publix_Logo.svg", colors: ["#006B3F", "#FFFFFF"] },
  { name: "Trader Joe's", logo: "https://upload.wikimedia.org/wikipedia/en/e/ec/Trader_Joe%27s_Logo.svg", colors: ["#BA0C2F", "#000000"] },
  { name: "Canadian Tire", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Canadian_Tire_logo.svg", colors: ["#DA291C", "#008751", "#FFFFFF"] },
  { name: "Dollar General", logo: "https://upload.wikimedia.org/wikipedia/commons/8/84/Dollar_General_logo.svg", colors: ["#FFE600", "#000000"] },
  { name: "Dollar Tree", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Dollar_Tree_logo.svg", colors: ["#008751", "#FFD100"] },
  { name: "Staples", logo: "https://upload.wikimedia.org/wikipedia/commons/8/80/Staples_Inc_logo.svg", colors: ["#CC0000", "#000000"] },
  { name: "Petco", logo: "https://upload.wikimedia.org/wikipedia/commons/0/07/Petco_logo.svg", colors: ["#00205B", "#ED1C24"] },
  { name: "PetSmart", logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/PetSmart_logo.svg", colors: ["#004B87", "#E31837"] },
  { name: "Bed Bath & Beyond", logo: "https://upload.wikimedia.org/wikipedia/commons/1/11/Bed_Bath_%26_Beyond_logo.svg", colors: ["#002C6C", "#FFFFFF"] },

  // Automotive & Racing
  { name: "Ferrari", logo: "https://upload.wikimedia.org/wikipedia/en/7/77/Scuderia_Ferrari_Logo.svg", colors: ["#FF2800", "#FFF200", "#00903E"] },
  { name: "Porsche", logo: "https://upload.wikimedia.org/wikipedia/en/8/8c/Porsche_logo.svg", colors: ["#D5001C", "#FFD700", "#000000"] },
  { name: "BMW", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg", colors: ["#0066B1", "#70A9D7", "#000000"] },
  { name: "Mercedes-Benz", logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg", colors: ["#333333", "#00ADEF"] },
  { name: "Audi", logo: "https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg", colors: ["#BB0A30", "#000000"] },
  { name: "Ford", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_motor_company_logo.svg", colors: ["#003478", "#FFFFFF"] },
  { name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg", colors: ["#E82127", "#000000"] },
  { name: "Chevrolet", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Chevrolet-logo.svg", colors: ["#CBA135", "#000000"] },
  { name: "Toyota", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Toyota_logo_%282020%29.svg", colors: ["#EB0A1E", "#000000"] },
  { name: "Honda", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Honda_Logo.svg", colors: ["#CC0000", "#000000"] },
  { name: "Jeep", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Jeep_logo.svg", colors: ["#495643", "#000000"] },
  { name: "Lamborghini", logo: "https://upload.wikimedia.org/wikipedia/en/d/df/Lamborghini_Logo.svg", colors: ["#DDB321", "#000000"] },
  { name: "Volkswagen", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg", colors: ["#001E50", "#1E64B4"] },
  { name: "Nissan", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Nissan_2020_logo.svg", colors: ["#C3002F", "#000000"] },
  { name: "Hyundai", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Hyundai_Motor_Company_logo.svg", colors: ["#002C6C", "#00AAD2"] },
  { name: "Kia", logo: "https://upload.wikimedia.org/wikipedia/commons/4/47/KIA_logo2.svg", colors: ["#05141F", "#EA0029"] },
  { name: "Subaru", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Subaru_logo.svg", colors: ["#013C7B", "#FFFFFF"] },
  { name: "Mazda", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Mazda_logo_with_words.svg", colors: ["#101010", "#910000"] },
  { name: "Volvo", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Volvo-Iron-Mark-Black.svg", colors: ["#003057", "#1E4F7C"] },
  { name: "Jaguar", logo: "https://upload.wikimedia.org/wikipedia/en/e/e0/Jaguar_Cars_logo.svg", colors: ["#005A36", "#505050"] },
  { name: "Land Rover", logo: "https://upload.wikimedia.org/wikipedia/en/a/a5/LandRover.svg", colors: ["#0C5A35", "#FFFFFF"] },
  { name: "Maserati", logo: "https://upload.wikimedia.org/wikipedia/en/8/80/Maserati_logo.svg", colors: ["#0C2340", "#C8102E"] },
  { name: "Aston Martin", logo: "https://upload.wikimedia.org/wikipedia/en/a/ad/Aston_Martin_Lagonda_logo.svg", colors: ["#004838", "#FFFFFF"] },
  { name: "McLaren", logo: "https://upload.wikimedia.org/wikipedia/en/6/66/McLaren_Automotive_logo.svg", colors: ["#FF8000", "#000000"] },
  { name: "Bugatti", logo: "https://upload.wikimedia.org/wikipedia/commons/6/60/Bugatti_logo.svg", colors: ["#BE1622", "#000000"] },
  { name: "Bentley", logo: "https://upload.wikimedia.org/wikipedia/en/a/aa/Bentley_Motors_logo.svg", colors: ["#000000", "#144733"] },
  { name: "Rolls-Royce", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Rolls-Royce_Motor_Cars_logo.svg", colors: ["#461D4C", "#B0A8A0"] },
  { name: "Ducati", logo: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Ducati_red_logo.svg", colors: ["#CC0000", "#000000"] },
  { name: "Harley-Davidson", logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Harley-Davidson_logo.svg", colors: ["#FF6600", "#000000"] },
  { name: "Yamaha", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Yamaha_Motor_Logo_%28full%29.svg", colors: ["#0033A0", "#CC0000"] },
  { name: "Kawasaki", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Kawasaki_Logo.svg", colors: ["#66CC00", "#000000"] },
  { name: "Michelin", logo: "https://upload.wikimedia.org/wikipedia/commons/1/15/Michelin_Logo.svg", colors: ["#002F6C", "#FFE600"] },
  { name: "Pirelli", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Pirelli_logo.svg", colors: ["#FED100", "#D52B1E"] },
  { name: "Bridgestone", logo: "https://upload.wikimedia.org/wikipedia/commons/3/30/Bridgestone_Logo.svg", colors: ["#ED1C24", "#000000"] },
  { name: "Goodyear", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Goodyear_logo.svg", colors: ["#00338D", "#FED100"] },
  { name: "Castrol", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Castrol_logo.svg", colors: ["#007A3E", "#E31837"] },
  { name: "Shell", logo: "https://upload.wikimedia.org/wikipedia/en/e/e8/Shell_logo.svg", colors: ["#FBCE07", "#DD1D21"] },
  { name: "BP", logo: "https://upload.wikimedia.org/wikipedia/en/d/d2/BP_Helios_logo.svg", colors: ["#007A3D", "#FFDE00"] },
  { name: "Chevron", logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Chevron_Logo.svg", colors: ["#005596", "#E31B23"] },
  { name: "ExxonMobil", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/ExxonMobil_Logo.svg", colors: ["#ED1C24", "#003A70"] },

  // Apparel, Footwear & Luxury Fashion
  { name: "Nike", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg", colors: ["#111111", "#FFFFFF"] },
  { name: "Adidas", logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg", colors: ["#000000", "#FFFFFF"] },
  { name: "Puma", logo: "https://upload.wikimedia.org/wikipedia/commons/8/88/Puma_logo.svg", colors: ["#000000", "#BA0C2F"] },
  { name: "Under Armour", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Under_armour_logo.svg", colors: ["#1D1D1D", "#E03A3E"] },
  { name: "Vans", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Vans-logo.svg", colors: ["#BA0C2F", "#000000"] },
  { name: "New Balance", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ea/New_Balance_logo.svg", colors: ["#CE0E2D", "#002B49"] },
  { name: "Converse", logo: "https://upload.wikimedia.org/wikipedia/commons/3/30/Converse_logo.svg", colors: ["#000000", "#E31837"] },
  { name: "Reebok", logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/Reebok_2019_logo.svg", colors: ["#D41B2C", "#0B163B"] },
  { name: "Champion", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Champion_logo.svg", colors: ["#00205B", "#C8102E"] },
  { name: "ASICS", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Asics_Logo.svg", colors: ["#001E62", "#FFFFFF"] },
  { name: "The North Face", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/The_North_Face_logo.svg", colors: ["#ED1B2D", "#000000"] },
  { name: "Columbia", logo: "https://upload.wikimedia.org/wikipedia/commons/5/52/Columbia_Sportswear_Logo.svg", colors: ["#0072CE", "#1D252C"] },
  { name: "Patagonia", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Patagonia_logo.svg", colors: ["#231F20", "#F47D31", "#5C2D91"] },
  { name: "Lululemon", logo: "https://upload.wikimedia.org/wikipedia/commons/2/22/Lululemon_Athletica_logo.svg", colors: ["#D31334", "#000000"] },
  { name: "Levi's", logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Levi%27s_logo.svg", colors: ["#C41230", "#FFFFFF"] },
  { name: "Gap", logo: "https://upload.wikimedia.org/wikipedia/commons/0/00/Gap_logo.svg", colors: ["#002855", "#FFFFFF"] },
  { name: "H&M", logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg", colors: ["#CD040B", "#FFFFFF"] },
  { name: "Zara", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg", colors: ["#000000", "#FFFFFF"] },
  { name: "Uniqlo", logo: "https://upload.wikimedia.org/wikipedia/commons/9/92/UNIQLO_logo.svg", colors: ["#EE1C25", "#FFFFFF"] },
  { name: "Tommy Hilfiger", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Tommy_Hilfiger_logo.svg", colors: ["#00174F", "#CC0C2F", "#FFFFFF"] },
  { name: "Calvin Klein", logo: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Calvin_Klein_logo.svg", colors: ["#000000", "#FFFFFF"] },
  { name: "Ralph Lauren", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Polo_Ralph_Lauren_logo.svg", colors: ["#002054", "#C49A45"] },
  { name: "Lacoste", logo: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Lacoste_logo.svg", colors: ["#004526", "#C8102E"] },
  { name: "Gucci", logo: "https://upload.wikimedia.org/wikipedia/commons/7/79/Gucci_Logo.svg", colors: ["#00552E", "#AE0E17", "#000000"] },
  { name: "Louis Vuitton", logo: "https://upload.wikimedia.org/wikipedia/commons/9/92/Louis_Vuitton_LV_logo.svg", colors: ["#4E3D28", "#876D49"] },
  { name: "Chanel", logo: "https://upload.wikimedia.org/wikipedia/en/9/92/Chanel_logo_interlocking_cs.svg", colors: ["#000000", "#FFFFFF"] },
  { name: "Prada", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Prada-Logo.svg", colors: ["#000000", "#FFFFFF"] },
  { name: "Hermès", logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/Herm%C3%A8s_logo.svg", colors: ["#F37021", "#4A2E12"] },
  { name: "Dior", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Dior_Logo.svg", colors: ["#000000", "#808080"] },
  { name: "Burberry", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Burberry_Logo.svg", colors: ["#000000", "#C5A059", "#A6192E"] },
  { name: "Versace", logo: "https://upload.wikimedia.org/wikipedia/en/4/41/Versace_Medusa_logo.svg", colors: ["#000000", "#DAA520"] },
  { name: "Armani", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Giorgio_Armani_logo.svg", colors: ["#000000", "#FFFFFF"] },
  { name: "Balenciaga", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Balenciaga_logo.svg", colors: ["#000000", "#FFFFFF"] },
  { name: "Tiffany & Co.", logo: "https://upload.wikimedia.org/wikipedia/commons/d/da/Tiffany_%26_Co._logo.svg", colors: ["#81D8D0", "#000000"] },
  { name: "Rolex", logo: "https://upload.wikimedia.org/wikipedia/en/9/95/Rolex_logo.svg", colors: ["#006039", "#A37E2C"] },

  // Finance, Airlines, Media & Telecom
  { name: "Mastercard", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg", colors: ["#EB001B", "#F79E1B", "#FF5F00"] },
  { name: "Visa", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg", colors: ["#1A1F71", "#F7B600"] },
  { name: "American Express", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg", colors: ["#006FCF", "#FFFFFF"] },
  { name: "Chase", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Chase_bank_logo.svg", colors: ["#117ACA", "#0A2540"] },
  { name: "Bank of America", logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Bank_of_America_logo.svg", colors: ["#E31837", "#00529B"] },
  { name: "Citi", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Citi.svg", colors: ["#003B70", "#ED1C24"] },
  { name: "Wells Fargo", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Wells_Fargo_Bank.svg", colors: ["#D71E28", "#FFCE00"] },
  { name: "Barclays", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Barclays_logo.svg", colors: ["#00AEEF", "#00395D"] },
  { name: "HSBC", logo: "https://upload.wikimedia.org/wikipedia/commons/a/aa/HSBC_logo_%282018%29.svg", colors: ["#DB0011", "#000000"] },
  { name: "T-Mobile", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ee/T-Mobile_2020_Logo.svg", colors: ["#E20074", "#FFFFFF"] },
  { name: "Verizon", logo: "https://upload.wikimedia.org/wikipedia/commons/8/83/Verizon_2015_logo.svg", colors: ["#CD040B", "#000000"] },
  { name: "AT&T", logo: "https://upload.wikimedia.org/wikipedia/commons/3/31/AT%26T_logo_2016.svg", colors: ["#00A8E0", "#0057B8"] },
  { name: "Vodafone", logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/Vodafone_2017_logo.svg", colors: ["#E60000", "#FFFFFF"] },
  { name: "BBC", logo: "https://upload.wikimedia.org/wikipedia/commons/4/41/BBC_Logo_2021.svg", colors: ["#000000", "#FF0000"] },
  { name: "CNN", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/CNN.svg", colors: ["#CC0000", "#000000"] },
  { name: "HBO", logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/HBO_logo.svg", colors: ["#000000", "#582C83"] },
  { name: "ESPN", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/ESPN_wordmark.svg", colors: ["#CD0000", "#000000"] },
  { name: "Disney", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg", colors: ["#113CCF", "#FFFFFF"] },
  { name: "Hulu", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg", colors: ["#1CE783", "#0B0C0F"] },
  { name: "Delta Air Lines", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Delta_logo.svg", colors: ["#003A70", "#E01933"] },
  { name: "American Airlines", logo: "https://upload.wikimedia.org/wikipedia/commons/2/23/American_Airlines_logo_2013.svg", colors: ["#0078D2", "#C30017", "#B2B4B3"] },
  { name: "United Airlines", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/United_Airlines_Logo.svg", colors: ["#002244", "#005DAA"] },
  { name: "Southwest Airlines", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Southwest_Airlines_logo_2014.svg", colors: ["#11295B", "#F9B612", "#E81B23"] },
  { name: "Air Canada", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Air_Canada_Logo.svg", colors: ["#D8232A", "#000000"] },
  { name: "British Airways", logo: "https://upload.wikimedia.org/wikipedia/en/e/e4/British_Airways_Logo.svg", colors: ["#075AAA", "#EB2226"] },
  { name: "Lufthansa", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Lufthansa_Logo_2018.svg", colors: ["#05164D", "#FFAC00"] },
  { name: "Emirates", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Emirates_logo.svg", colors: ["#D71921", "#C79D3B", "#000000"] },
  { name: "Qatar Airways", logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Qatar_Airways_Logo.svg", colors: ["#5C0632", "#848285"] },
  { name: "Ryanair", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Ryanair_Logo.svg", colors: ["#073590", "#F1C933"] },
  { name: "Air France", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Air_France_Logo.svg", colors: ["#002157", "#ED0000"] }
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
  logoImg.referrerPolicy = "no-referrer";

  const cleanSlug = brand.name.toLowerCase().replace(/[^a-z0-9]/g, "");
  
  // High-availability CDN failover
  const sources = [
    brand.logo ? `https://images.weserv.nl/?url=${encodeURIComponent(brand.logo)}&default=false` : null,
    `https://api.iconify.design/simple-icons:${cleanSlug}.svg`,
    `https://raw.githubusercontent.com/pheralb/svgl/main/static/library/${cleanSlug}.svg`,
    `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${cleanSlug}.svg`
  ].filter(Boolean);

  let currentSource = 0;

  function loadNext() {
    if (currentSource < sources.length) {
      logoImg.src = sources[currentSource++];
    }
  }

  logoImg.onerror = loadNext;
  loadNext();

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