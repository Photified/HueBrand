const BRANDS = [
  // Tech, Web & Software
  { name: "Google", logoUrl: "https://www.vectorlogo.zone/logos/google/google-icon.svg", colors: ["#4285F4", "#EA4335", "#FBBC05", "#34A853"] },
  { name: "Microsoft", logoUrl: "https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg", colors: ["#F25022", "#7FBA00", "#00A4EF", "#FFB900"] },
  { name: "Apple", logoUrl: "https://www.vectorlogo.zone/logos/apple/apple-icon.svg", colors: ["#555555", "#000000", "#FFFFFF"] },
  { name: "Amazon", logoUrl: "https://www.vectorlogo.zone/logos/amazon/amazon-icon.svg", colors: ["#FF9900", "#146EB4", "#000000"] },
  { name: "YouTube", logoUrl: "https://www.vectorlogo.zone/logos/youtube/youtube-icon.svg", colors: ["#FF0000", "#282828", "#FFFFFF"] },
  { name: "Spotify", logoUrl: "https://www.vectorlogo.zone/logos/spotify/spotify-icon.svg", colors: ["#1DB954", "#191414"] },
  { name: "Netflix", logoUrl: "https://www.vectorlogo.zone/logos/netflix/netflix-icon.svg", colors: ["#E50914", "#000000"] },
  { name: "Discord", logoUrl: "https://www.vectorlogo.zone/logos/discordapp/discordapp-icon.svg", colors: ["#5865F2", "#23272A", "#FFFFFF"] },
  { name: "Twitch", logoUrl: "https://www.vectorlogo.zone/logos/twitch/twitch-icon.svg", colors: ["#9146FF", "#000000", "#FFFFFF"] },
  { name: "Twitter / X", logoUrl: "https://www.vectorlogo.zone/logos/twitter/twitter-icon.svg", colors: ["#1DA1F2", "#FFFFFF"] },
  { name: "Instagram", logoUrl: "https://www.vectorlogo.zone/logos/instagram/instagram-icon.svg", colors: ["#E1306C", "#F77737", "#405DE6", "#FCAF45"] },
  { name: "Facebook", logoUrl: "https://www.vectorlogo.zone/logos/facebook/facebook-icon.svg", colors: ["#1877F2", "#FFFFFF"] },
  { name: "TikTok", logoUrl: "https://www.vectorlogo.zone/logos/tiktok/tiktok-icon.svg", colors: ["#00F2FE", "#FE2C55", "#000000"] },
  { name: "Snapchat", logoUrl: "https://www.vectorlogo.zone/logos/snapchat/snapchat-icon.svg", colors: ["#FFFC00", "#000000", "#FFFFFF"] },
  { name: "Reddit", logoUrl: "https://www.vectorlogo.zone/logos/reddit/reddit-icon.svg", colors: ["#FF4500", "#cee3f8", "#000000"] },
  { name: "Pinterest", logoUrl: "https://www.vectorlogo.zone/logos/pinterest/pinterest-icon.svg", colors: ["#E60023", "#FFFFFF"] },
  { name: "Slack", logoUrl: "https://www.vectorlogo.zone/logos/slack/slack-icon.svg", colors: ["#4A154B", "#36C5F0", "#2EB67D", "#ECB22E"] },
  { name: "LinkedIn", logoUrl: "https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg", colors: ["#0A66C2", "#FFFFFF"] },
  { name: "WhatsApp", logoUrl: "https://www.vectorlogo.zone/logos/whatsapp/whatsapp-icon.svg", colors: ["#25D366", "#075E54", "#128C7E"] },
  { name: "Telegram", logoUrl: "https://www.vectorlogo.zone/logos/telegram/telegram-icon.svg", colors: ["#24A1DE", "#FFFFFF"] },
  { name: "Dropbox", logoUrl: "https://www.vectorlogo.zone/logos/dropbox/dropbox-icon.svg", colors: ["#0061FF", "#000000"] },
  { name: "Uber", logoUrl: "https://www.vectorlogo.zone/logos/uber/uber-icon.svg", colors: ["#000000", "#FFFFFF"] },
  { name: "Lyft", logoUrl: "https://www.vectorlogo.zone/logos/lyft/lyft-icon.svg", colors: ["#FF00BF", "#111111"] },
  { name: "Airbnb", logoUrl: "https://www.vectorlogo.zone/logos/airbnb/airbnb-icon.svg", colors: ["#FF5A5F", "#00A699", "#FC642D"] },
  { name: "Shopify", logoUrl: "https://www.vectorlogo.zone/logos/shopify/shopify-icon.svg", colors: ["#96BF48", "#004C3F", "#FFFFFF"] },
  { name: "GitHub", logoUrl: "https://www.vectorlogo.zone/logos/github/github-icon.svg", colors: ["#24292E", "#FFFFFF"] },
  { name: "GitLab", logoUrl: "https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg", colors: ["#FC6D26", "#E24329", "#FCA326"] },
  { name: "Figma", logoUrl: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg", colors: ["#F24E1E", "#A259FF", "#1ABCFE", "#0ACF83"] },
  { name: "Canva", logoUrl: "https://www.vectorlogo.zone/logos/canva/canva-icon.svg", colors: ["#00C4CC", "#7D2AE8"] },
  { name: "Notion", logoUrl: "https://www.vectorlogo.zone/logos/notion/notion-icon.svg", colors: ["#000000", "#FFFFFF"] },
  { name: "Trello", logoUrl: "https://www.vectorlogo.zone/logos/trello/trello-icon.svg", colors: ["#0079BF", "#00C2E0"] },
  { name: "Asana", logoUrl: "https://www.vectorlogo.zone/logos/asana/asana-icon.svg", colors: ["#F06A6A", "#27333F"] },
  { name: "Zoom", logoUrl: "https://www.vectorlogo.zone/logos/zoomus/zoomus-icon.svg", colors: ["#2D8CFF", "#FFFFFF"] },
  { name: "Skype", logoUrl: "https://www.vectorlogo.zone/logos/skype/skype-icon.svg", colors: ["#00AFF0", "#FFFFFF"] },
  { name: "Vimeo", logoUrl: "https://www.vectorlogo.zone/logos/vimeo/vimeo-icon.svg", colors: ["#1AB7EA", "#FFFFFF"] },
  { name: "SoundCloud", logoUrl: "https://www.vectorlogo.zone/logos/soundcloud/soundcloud-icon.svg", colors: ["#FF5500", "#000000"] },
  { name: "Shazam", logoUrl: "https://www.vectorlogo.zone/logos/shazam/shazam-icon.svg", colors: ["#0088FF", "#FFFFFF"] },
  { name: "Duolingo", logoUrl: "https://www.vectorlogo.zone/logos/duolingo/duolingo-icon.svg", colors: ["#58CC02", "#FFC800", "#CE82FF"] },
  { name: "Waze", logoUrl: "https://www.vectorlogo.zone/logos/waze/waze-icon.svg", colors: ["#33CCFF", "#FEFEFE", "#000000"] },
  { name: "Tinder", logoUrl: "https://www.vectorlogo.zone/logos/tinder/tinder-icon.svg", colors: ["#FE3C72", "#FF655B"] },
  { name: "Bumble", logoUrl: "https://www.vectorlogo.zone/logos/bumble/bumble-icon.svg", colors: ["#FFC629", "#000000"] },
  { name: "Medium", logoUrl: "https://www.vectorlogo.zone/logos/medium/medium-icon.svg", colors: ["#000000", "#FFFFFF"] },
  { name: "WordPress", logoUrl: "https://www.vectorlogo.zone/logos/wordpress/wordpress-icon.svg", colors: ["#21759B", "#D54E21"] },
  { name: "Salesforce", logoUrl: "https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg", colors: ["#00A1E0", "#FFFFFF"] },
  { name: "HubSpot", logoUrl: "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg", colors: ["#FF7A59", "#33475B"] },
  { name: "Mailchimp", logoUrl: "https://www.vectorlogo.zone/logos/mailchimp/mailchimp-icon.svg", colors: ["#FFE01B", "#241C15"] },
  { name: "Stripe", logoUrl: "https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg", colors: ["#635BFF", "#0A2540"] },
  { name: "Square", logoUrl: "https://www.vectorlogo.zone/logos/squareup/squareup-icon.svg", colors: ["#000000", "#FFFFFF"] },
  { name: "Robinhood", logoUrl: "https://www.vectorlogo.zone/logos/robinhood/robinhood-icon.svg", colors: ["#00C805", "#000000"] },
  { name: "Coinbase", logoUrl: "https://www.vectorlogo.zone/logos/coinbase/coinbase-icon.svg", colors: ["#0052FF", "#FFFFFF"] },
  { name: "PayPal", logoUrl: "https://www.vectorlogo.zone/logos/paypal/paypal-icon.svg", colors: ["#003087", "#0079C1", "#00457C"] },
  { name: "Venmo", logoUrl: "https://www.vectorlogo.zone/logos/venmo/venmo-icon.svg", colors: ["#008CFF", "#FFFFFF"] },
  { name: "BitTorrent", logoUrl: "https://www.vectorlogo.zone/logos/bittorrent/bittorrent-icon.svg", colors: ["#2F3033", "#4FA83D"] },
  { name: "Evernote", logoUrl: "https://www.vectorlogo.zone/logos/evernote/evernote-icon.svg", colors: ["#00A82D", "#222222"] },
  { name: "Quora", logoUrl: "https://www.vectorlogo.zone/logos/quora/quora-icon.svg", colors: ["#B92B27", "#FFFFFF"] },
  { name: "Tumblr", logoUrl: "https://www.vectorlogo.zone/logos/tumblr/tumblr-icon.svg", colors: ["#36465D", "#FFFFFF"] },
  { name: "Pocket", logoUrl: "https://www.vectorlogo.zone/logos/getpocket/getpocket-icon.svg", colors: ["#EF4056", "#50BCB6"] },
  { name: "Stack Overflow", logoUrl: "https://www.vectorlogo.zone/logos/stackoverflow/stackoverflow-icon.svg", colors: ["#F48024", "#BCBBBB", "#222426"] },
  { name: "Docker", logoUrl: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg", colors: ["#2496ED", "#FFFFFF"] },
  { name: "Postman", logoUrl: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", colors: ["#FF6C37", "#FFFFFF"] },
  { name: "Vercel", logoUrl: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg", colors: ["#000000", "#FFFFFF"] },
  { name: "Netlify", logoUrl: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg", colors: ["#00C7B7", "#05B5A2"] },

  // Hardware, Semiconductors & Consumer Tech
  { name: "Intel", logoUrl: "https://www.vectorlogo.zone/logos/intel/intel-icon.svg", colors: ["#0071C5", "#00C7FD", "#FFFFFF"] },
  { name: "AMD", logoUrl: "https://www.vectorlogo.zone/logos/amd/amd-icon.svg", colors: ["#ED1C24", "#000000", "#FFFFFF"] },
  { name: "Nvidia", logoUrl: "https://www.vectorlogo.zone/logos/nvidia/nvidia-icon.svg", colors: ["#76B900", "#000000", "#FFFFFF"] },
  { name: "Samsung", logoUrl: "https://www.vectorlogo.zone/logos/samsung/samsung-icon.svg", colors: ["#1428A0", "#000000", "#FFFFFF"] },
  { name: "Sony", logoUrl: "https://www.vectorlogo.zone/logos/sony/sony-icon.svg", colors: ["#000000", "#FFFFFF"] },
  { name: "LG", logoUrl: "https://www.vectorlogo.zone/logos/lg/lg-icon.svg", colors: ["#A50034", "#6B6B6B"] },
  { name: "Dell", logoUrl: "https://www.vectorlogo.zone/logos/dell/dell-icon.svg", colors: ["#007DB8", "#000000"] },
  { name: "HP", logoUrl: "https://www.vectorlogo.zone/logos/hp/hp-icon.svg", colors: ["#0096D6", "#000000"] },
  { name: "Lenovo", logoUrl: "https://www.vectorlogo.zone/logos/lenovo/lenovo-icon.svg", colors: ["#E2231A", "#000000"] },
  { name: "ASUS", logoUrl: "https://www.vectorlogo.zone/logos/asus/asus-icon.svg", colors: ["#00539B", "#000000"] },
  { name: "Acer", logoUrl: "https://www.vectorlogo.zone/logos/acer/acer-icon.svg", colors: ["#83B81A", "#000000"] },
  { name: "Logitech", logoUrl: "https://www.vectorlogo.zone/logos/logitech/logitech-icon.svg", colors: ["#00B8FC", "#2F3132"] },
  { name: "Razer", logoUrl: "https://www.vectorlogo.zone/logos/razer/razer-icon.svg", colors: ["#00FF00", "#000000"] },
  { name: "Qualcomm", logoUrl: "https://www.vectorlogo.zone/logos/qualcomm/qualcomm-icon.svg", colors: ["#3253DC", "#000000"] },
  { name: "Cisco", logoUrl: "https://www.vectorlogo.zone/logos/cisco/cisco-icon.svg", colors: ["#049FD9", "#1BA0D7", "#2B5592"] },
  { name: "IBM", logoUrl: "https://www.vectorlogo.zone/logos/ibm/ibm-icon.svg", colors: ["#054ADA", "#000000"] },
  { name: "Oracle", logoUrl: "https://www.vectorlogo.zone/logos/oracle/oracle-icon.svg", colors: ["#F80000", "#000000"] },
  { name: "Panasonic", logoUrl: "https://www.vectorlogo.zone/logos/panasonic/panasonic-icon.svg", colors: ["#004098", "#FFFFFF"] },
  { name: "Toshiba", logoUrl: "https://www.vectorlogo.zone/logos/toshiba/toshiba-icon.svg", colors: ["#FF0000", "#000000"] },
  { name: "Hitachi", logoUrl: "https://www.vectorlogo.zone/logos/hitachi/hitachi-icon.svg", colors: ["#E60012", "#000000"] },
  { name: "Fujitsu", logoUrl: "https://www.vectorlogo.zone/logos/fujitsu/fujitsu-icon.svg", colors: ["#ED1A3D", "#6C6D70"] },
  { name: "Nokia", logoUrl: "https://www.vectorlogo.zone/logos/nokia/nokia-icon.svg", colors: ["#124191", "#FFFFFF"] },
  { name: "Motorola", logoUrl: "https://www.vectorlogo.zone/logos/motorola/motorola-icon.svg", colors: ["#001438", "#E21836"] },
  { name: "GoPro", logoUrl: "https://www.vectorlogo.zone/logos/gopro/gopro-icon.svg", colors: ["#00A0DF", "#000000"] },
  { name: "Canon", logoUrl: "https://www.vectorlogo.zone/logos/canon/canon-icon.svg", colors: ["#CC0000", "#000000"] },
  { name: "Nikon", logoUrl: "https://www.vectorlogo.zone/logos/nikon/nikon-icon.svg", colors: ["#FFE100", "#000000"] },
  { name: "Bose", logoUrl: "https://www.vectorlogo.zone/logos/bose/bose-icon.svg", colors: ["#000000", "#FFFFFF"] },
  { name: "Sennheiser", logoUrl: "https://www.vectorlogo.zone/logos/sennheiser/sennheiser-icon.svg", colors: ["#0085C7", "#000000"] },
  { name: "Sonos", logoUrl: "https://www.vectorlogo.zone/logos/sonos/sonos-icon.svg", colors: ["#000000", "#FFFFFF"] },
  { name: "JBL", logoUrl: "https://www.vectorlogo.zone/logos/jbl/jbl-icon.svg", colors: ["#FF6600", "#000000"] },
  { name: "Corsair", logoUrl: "https://www.vectorlogo.zone/logos/corsair/corsair-icon.svg", colors: ["#F3D03E", "#000000"] },
  { name: "SteelSeries", logoUrl: "https://www.vectorlogo.zone/logos/steelseries/steelseries-icon.svg", colors: ["#FF5200", "#000000"] },
  { name: "MSI", logoUrl: "https://www.vectorlogo.zone/logos/msi/msi-icon.svg", colors: ["#FF0000", "#000000"] },
  { name: "Gigabyte", logoUrl: "https://www.vectorlogo.zone/logos/gigabyte/gigabyte-icon.svg", colors: ["#FF6600", "#000000"] },
  { name: "Western Digital", logoUrl: "https://www.vectorlogo.zone/logos/westerndigital/westerndigital-icon.svg", colors: ["#002F6C", "#00B4D8"] },
  { name: "Seagate", logoUrl: "https://www.vectorlogo.zone/logos/seagate/seagate-icon.svg", colors: ["#6CA927", "#000000"] },
  { name: "Kingston", logoUrl: "https://www.vectorlogo.zone/logos/kingston/kingston-icon.svg", colors: ["#E31B23", "#000000"] },
  { name: "SanDisk", logoUrl: "https://www.vectorlogo.zone/logos/sandisk/sandisk-icon.svg", colors: ["#ED1C24", "#000000"] },

  // Gaming
  { name: "Nintendo", logoUrl: "https://www.vectorlogo.zone/logos/nintendo/nintendo-icon.svg", colors: ["#E60012", "#FFFFFF"] },
  { name: "PlayStation", logoUrl: "https://www.vectorlogo.zone/logos/playstation/playstation-icon.svg", colors: ["#003791", "#000000", "#FFFFFF"] },
  { name: "Xbox", logoUrl: "https://www.vectorlogo.zone/logos/xbox/xbox-icon.svg", colors: ["#107C10", "#000000"] },
  { name: "Steam", logoUrl: "https://www.vectorlogo.zone/logos/steam/steam-icon.svg", colors: ["#171A21", "#66C0F4", "#1B2838"] },
  { name: "Epic Games", logoUrl: "https://www.vectorlogo.zone/logos/epicgames/epicgames-icon.svg", colors: ["#313131", "#FFFFFF"] },
  { name: "Unity", logoUrl: "https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg", colors: ["#222C37", "#FFFFFF"] },
  { name: "Unreal Engine", logoUrl: "https://www.vectorlogo.zone/logos/unrealengine/unrealengine-icon.svg", colors: ["#0E1128", "#FFFFFF"] },
  { name: "Riot Games", logoUrl: "https://www.vectorlogo.zone/logos/riotgames/riotgames-icon.svg", colors: ["#D12727", "#000000"] },
  { name: "Ubisoft", logoUrl: "https://www.vectorlogo.zone/logos/ubisoft/ubisoft-icon.svg", colors: ["#000000", "#006EFF"] },
  { name: "EA Sports", logoUrl: "https://www.vectorlogo.zone/logos/ea/ea-icon.svg", colors: ["#FF4747", "#000000"] },
  { name: "Blizzard", logoUrl: "https://www.vectorlogo.zone/logos/blizzard/blizzard-icon.svg", colors: ["#009AE4", "#0B1528"] },
  { name: "Rockstar Games", logoUrl: "https://www.vectorlogo.zone/logos/rockstargames/rockstargames-icon.svg", colors: ["#F9A01B", "#000000"] },
  { name: "Capcom", logoUrl: "https://www.vectorlogo.zone/logos/capcom/capcom-icon.svg", colors: ["#0054A6", "#FFDD00"] },
  { name: "Sega", logoUrl: "https://www.vectorlogo.zone/logos/sega/sega-icon.svg", colors: ["#0089CF", "#FFFFFF"] },
  { name: "Square Enix", logoUrl: "https://www.vectorlogo.zone/logos/square-enix/square-enix-icon.svg", colors: ["#ED1C24", "#000000"] },
  { name: "Bandai Namco", logoUrl: "https://www.vectorlogo.zone/logos/bandainamco/bandainamco-icon.svg", colors: ["#FF0000", "#FF7300", "#FFEB00"] },
  { name: "Konami", logoUrl: "https://www.vectorlogo.zone/logos/konami/konami-icon.svg", colors: ["#C41230", "#000000"] },
  { name: "Bethesda", logoUrl: "https://www.vectorlogo.zone/logos/bethesda/bethesda-icon.svg", colors: ["#000000", "#FFFFFF"] },
  { name: "Roblox", logoUrl: "https://www.vectorlogo.zone/logos/roblox/roblox-icon.svg", colors: ["#000000", "#FFFFFF"] },
  { name: "Atari", logoUrl: "https://www.vectorlogo.zone/logos/atari/atari-icon.svg", colors: ["#E21B24", "#000000"] },
  { name: "IGN", logoUrl: "https://www.vectorlogo.zone/logos/ign/ign-icon.svg", colors: ["#BF1313", "#000000"] },
  { name: "GameStop", logoUrl: "https://www.vectorlogo.zone/logos/gamestop/gamestop-icon.svg", colors: ["#E31837", "#000000"] },

  // Fast Food & Dining
  { name: "McDonald's", logoUrl: "https://www.vectorlogo.zone/logos/mcdonalds/mcdonalds-icon.svg", colors: ["#DA291C", "#FFC72C"] },
  { name: "Burger King", logoUrl: "https://www.vectorlogo.zone/logos/burgerking/burgerking-icon.svg", colors: ["#D62300", "#FBE122", "#502314"] },
  { name: "Wendy's", logoUrl: "https://www.vectorlogo.zone/logos/wendys/wendys-icon.svg", colors: ["#E2203D", "#199BD7", "#000000"] },
  { name: "Subway", logoUrl: "https://www.vectorlogo.zone/logos/subway/subway-icon.svg", colors: ["#008C15", "#FFC600"] },
  { name: "Taco Bell", logoUrl: "https://www.vectorlogo.zone/logos/tacobell/tacobell-icon.svg", colors: ["#702082", "#A77BCA", "#000000"] },
  { name: "KFC", logoUrl: "https://www.vectorlogo.zone/logos/kfc/kfc-icon.svg", colors: ["#A3080C", "#000000", "#FFFFFF"] },
  { name: "Pizza Hut", logoUrl: "https://www.vectorlogo.zone/logos/pizzahut/pizzahut-icon.svg", colors: ["#EE3124", "#00A859", "#FFC425"] },
  { name: "Domino's", logoUrl: "https://www.vectorlogo.zone/logos/dominos/dominos-icon.svg", colors: ["#006491", "#E31837"] },
  { name: "Papa John's", logoUrl: "https://www.vectorlogo.zone/logos/papajohns/papajohns-icon.svg", colors: ["#005A36", "#C8102E"] },
  { name: "Dunkin'", logoUrl: "https://www.vectorlogo.zone/logos/dunkindonuts/dunkindonuts-icon.svg", colors: ["#FF671F", "#DA1884", "#653819"] },
  { name: "Starbucks", logoUrl: "https://www.vectorlogo.zone/logos/starbucks/starbucks-icon.svg", colors: ["#00704A", "#1E3932", "#FFFFFF"] },
  { name: "Tim Hortons", logoUrl: "https://www.vectorlogo.zone/logos/timhortons/timhortons-icon.svg", colors: ["#C8102E", "#4B2E1E"] },
  { name: "Chipotle", logoUrl: "https://www.vectorlogo.zone/logos/chipotle/chipotle-icon.svg", colors: ["#451400", "#AD343E"] },
  { name: "Popeyes", logoUrl: "https://www.vectorlogo.zone/logos/popeyes/popeyes-icon.svg", colors: ["#F15A24", "#007A3E"] },
  { name: "Dairy Queen", logoUrl: "https://www.vectorlogo.zone/logos/dairyqueen/dairyqueen-icon.svg", colors: ["#EE3124", "#005696"] },
  { name: "Five Guys", logoUrl: "https://www.vectorlogo.zone/logos/fiveguys/fiveguys-icon.svg", colors: ["#ED1C24", "#FFFFFF"] },
  { name: "Shake Shack", logoUrl: "https://www.vectorlogo.zone/logos/shakeshack/shakeshack-icon.svg", colors: ["#5CA432", "#000000"] },
  { name: "In-N-Out", logoUrl: "https://www.vectorlogo.zone/logos/in-n-out/in-n-out-icon.svg", colors: ["#DD131D", "#FFC20E"] },
  { name: "Krispy Kreme", logoUrl: "https://www.vectorlogo.zone/logos/krispykreme/krispykreme-icon.svg", colors: ["#007A3D", "#DD131D"] },
  { name: "Panda Express", logoUrl: "https://www.vectorlogo.zone/logos/pandaexpress/pandaexpress-icon.svg", colors: ["#D12026", "#000000"] },
  { name: "Arby's", logoUrl: "https://www.vectorlogo.zone/logos/arbys/arbys-icon.svg", colors: ["#D9272E", "#303030"] },
  { name: "Jack in the Box", logoUrl: "https://www.vectorlogo.zone/logos/jackinthebox/jackinthebox-icon.svg", colors: ["#DA291C", "#FFFFFF"] },
  { name: "Carl's Jr.", logoUrl: "https://www.vectorlogo.zone/logos/carlsjr/carlsjr-icon.svg", colors: ["#ED1C24", "#FFC72C", "#000000"] },
  { name: "Chick-fil-A", logoUrl: "https://www.vectorlogo.zone/logos/chick-fil-a/chick-fil-a-icon.svg", colors: ["#DD0031", "#FFFFFF"] },
  { name: "Nando's", logoUrl: "https://www.vectorlogo.zone/logos/nandos/nandos-icon.svg", colors: ["#000000", "#C8102E", "#F4C430"] },
  { name: "Panera Bread", logoUrl: "https://www.vectorlogo.zone/logos/panerabread/panerabread-icon.svg", colors: ["#4E5B31", "#C49A45"] },
  { name: "Baskin-Robbins", logoUrl: "https://www.vectorlogo.zone/logos/baskinrobbins/baskinrobbins-icon.svg", colors: ["#315BA7", "#EC1B69"] },
  { name: "A&W", logoUrl: "https://www.vectorlogo.zone/logos/awrestaurants/awrestaurants-icon.svg", colors: ["#5C2D25", "#F7941D"] },
  { name: "Cinnabon", logoUrl: "https://www.vectorlogo.zone/logos/cinnabon/cinnabon-icon.svg", colors: ["#00778B", "#4A2C11"] },
  { name: "Hard Rock Cafe", logoUrl: "https://www.vectorlogo.zone/logos/hardrock/hardrock-icon.svg", colors: ["#77191C", "#D4A853"] },

  // Beverages & Packaged Foods
  { name: "Coca-Cola", logoUrl: "https://www.vectorlogo.zone/logos/cocacola/cocacola-icon.svg", colors: ["#F40009", "#000000", "#FFFFFF"] },
  { name: "Pepsi", logoUrl: "https://www.vectorlogo.zone/logos/pepsi/pepsi-icon.svg", colors: ["#004B93", "#C9002B", "#FFFFFF"] },
  { name: "Red Bull", logoUrl: "https://www.vectorlogo.zone/logos/redbull/redbull-icon.svg", colors: ["#001D4A", "#DB0A40", "#FFCC00"] },
  { name: "Monster Energy", logoUrl: "https://www.vectorlogo.zone/logos/monsterenergy/monsterenergy-icon.svg", colors: ["#95D600", "#000000"] },
  { name: "Heineken", logoUrl: "https://www.vectorlogo.zone/logos/heineken/heineken-icon.svg", colors: ["#008200", "#FF0000"] },
  { name: "Mountain Dew", logoUrl: "https://www.vectorlogo.zone/logos/mountaindew/mountaindew-icon.svg", colors: ["#23B14D", "#DA291C", "#000000"] },
  { name: "Gatorade", logoUrl: "https://www.vectorlogo.zone/logos/gatorade/gatorade-icon.svg", colors: ["#FF6200", "#008751", "#000000"] },
  { name: "Sprite", logoUrl: "https://www.vectorlogo.zone/logos/sprite/sprite-icon.svg", colors: ["#008B47", "#FFDE00", "#004B93"] },
  { name: "Fanta", logoUrl: "https://www.vectorlogo.zone/logos/fanta/fanta-icon.svg", colors: ["#F99B1C", "#004B93", "#3AAA35"] },
  { name: "Dr Pepper", logoUrl: "https://www.vectorlogo.zone/logos/drpepper/drpepper-icon.svg", colors: ["#711F25", "#FFFFFF"] },
  { name: "Corona", logoUrl: "https://www.vectorlogo.zone/logos/corona/corona-icon.svg", colors: ["#002454", "#F4BE18", "#FFFFFF"] },
  { name: "Budweiser", logoUrl: "https://www.vectorlogo.zone/logos/budweiser/budweiser-icon.svg", colors: ["#C8102E", "#15244C", "#D1A153"] },
  { name: "Guinness", logoUrl: "https://www.vectorlogo.zone/logos/guinness/guinness-icon.svg", colors: ["#000000", "#D6B265", "#FFFFFF"] },
  { name: "Carlsberg", logoUrl: "https://www.vectorlogo.zone/logos/carlsberg/carlsberg-icon.svg", colors: ["#00382B", "#FFFFFF"] },
  { name: "Oreo", logoUrl: "https://www.vectorlogo.zone/logos/oreo/oreo-icon.svg", colors: ["#005BAC", "#000000", "#FFFFFF"] },
  { name: "Doritos", logoUrl: "https://www.vectorlogo.zone/logos/doritos/doritos-icon.svg", colors: ["#ED1C24", "#FFC72C", "#000000"] },
  { name: "Lay's", logoUrl: "https://www.vectorlogo.zone/logos/lays/lays-icon.svg", colors: ["#FFD100", "#E31B23", "#00629B"] },
  { name: "Pringles", logoUrl: "https://www.vectorlogo.zone/logos/pringles/pringles-icon.svg", colors: ["#E51937", "#FED100", "#4B2E1E"] },
  { name: "Cheetos", logoUrl: "https://www.vectorlogo.zone/logos/cheetos/cheetos-icon.svg", colors: ["#FF6600", "#000000", "#FFCC00"] },
  { name: "M&M's", logoUrl: "https://www.vectorlogo.zone/logos/mms/mms-icon.svg", colors: ["#5C2D25", "#FFCC00", "#D6262B"] },
  { name: "Kit Kat", logoUrl: "https://www.vectorlogo.zone/logos/kitkat/kitkat-icon.svg", colors: ["#D8232A", "#FFFFFF"] },
  { name: "Nutella", logoUrl: "https://www.vectorlogo.zone/logos/nutella/nutella-icon.svg", colors: ["#000000", "#E31B23"] },
  { name: "Heinz", logoUrl: "https://www.vectorlogo.zone/logos/heinz/heinz-icon.svg", colors: ["#A31A1E", "#006241", "#F2C75C"] },
  { name: "Kellogg's", logoUrl: "https://www.vectorlogo.zone/logos/kelloggs/kelloggs-icon.svg", colors: ["#D92525", "#FFFFFF"] },
  { name: "Nestle", logoUrl: "https://www.vectorlogo.zone/logos/nestle/nestle-icon.svg", colors: ["#005CA9", "#75787B"] },
  { name: "Toblerone", logoUrl: "https://www.vectorlogo.zone/logos/toblerone/toblerone-icon.svg", colors: ["#D4A853", "#9D1E2D", "#FFFFFF"] },
  { name: "Haribo", logoUrl: "https://www.vectorlogo.zone/logos/haribo/haribo-icon.svg", colors: ["#005696", "#E31837", "#FED100"] },
  { name: "Danone", logoUrl: "https://www.vectorlogo.zone/logos/danone/danone-icon.svg", colors: ["#005CA9", "#E31B23"] },

  // Retail, Supermarkets & Delivery
  { name: "IKEA", logoUrl: "https://www.vectorlogo.zone/logos/ikea/ikea-icon.svg", colors: ["#0051BA", "#FFDA1A"] },
  { name: "Target", logoUrl: "https://www.vectorlogo.zone/logos/target/target-icon.svg", colors: ["#CC0000", "#FFFFFF"] },
  { name: "Walmart", logoUrl: "https://www.vectorlogo.zone/logos/walmart/walmart-icon.svg", colors: ["#0071CE", "#FFC220"] },
  { name: "Best Buy", logoUrl: "https://www.vectorlogo.zone/logos/bestbuy/bestbuy-icon.svg", colors: ["#0046BE", "#FFE000"] },
  { name: "Home Depot", logoUrl: "https://www.vectorlogo.zone/logos/homedepot/homedepot-icon.svg", colors: ["#F96302", "#FFFFFF"] },
  { name: "Lowe's", logoUrl: "https://www.vectorlogo.zone/logos/lowes/lowes-icon.svg", colors: ["#004990", "#FFFFFF"] },
  { name: "Costco", logoUrl: "https://www.vectorlogo.zone/logos/costco/costco-icon.svg", colors: ["#005DAA", "#E31837"] },
  { name: "Sam's Club", logoUrl: "https://www.vectorlogo.zone/logos/samsclub/samsclub-icon.svg", colors: ["#0067A0", "#76B82A"] },
  { name: "FedEx", logoUrl: "https://www.vectorlogo.zone/logos/fedex/fedex-icon.svg", colors: ["#4D148C", "#FF6600"] },
  { name: "UPS", logoUrl: "https://www.vectorlogo.zone/logos/ups/ups-icon.svg", colors: ["#351C15", "#FFB500"] },
  { name: "DHL", logoUrl: "https://www.vectorlogo.zone/logos/dhl/dhl-icon.svg", colors: ["#FFCC00", "#D40511"] },
  { name: "Lego", logoUrl: "https://www.vectorlogo.zone/logos/lego/lego-icon.svg", colors: ["#D11013", "#FFD500", "#000000"] },
  { name: "eBay", logoUrl: "https://www.vectorlogo.zone/logos/ebay/ebay-icon.svg", colors: ["#E53238", "#0064D2", "#F5AF02", "#86B817"] },
  { name: "Etsy", logoUrl: "https://www.vectorlogo.zone/logos/etsy/etsy-icon.svg", colors: ["#F16521", "#FFFFFF"] },
  { name: "Alibaba", logoUrl: "https://www.vectorlogo.zone/logos/alibaba/alibaba-icon.svg", colors: ["#FF6A00", "#FFFFFF"] },
  { name: "AliExpress", logoUrl: "https://www.vectorlogo.zone/logos/aliexpress/aliexpress-icon.svg", colors: ["#FF4747", "#FF9900"] },
  { name: "Macy's", logoUrl: "https://www.vectorlogo.zone/logos/macys/macys-icon.svg", colors: ["#E21A2C", "#000000"] },
  { name: "Nordstrom", logoUrl: "https://www.vectorlogo.zone/logos/nordstrom/nordstrom-icon.svg", colors: ["#000000", "#FFFFFF"] },
  { name: "Kohl's", logoUrl: "https://www.vectorlogo.zone/logos/kohls/kohls-icon.svg", colors: ["#000000", "#E31837"] },
  { name: "Sephora", logoUrl: "https://www.vectorlogo.zone/logos/sephora/sephora-icon.svg", colors: ["#000000", "#FFFFFF"] },
  { name: "CVS Pharmacy", logoUrl: "https://www.vectorlogo.zone/logos/cvs/cvs-icon.svg", colors: ["#CC0000", "#FFFFFF"] },
  { name: "Walgreens", logoUrl: "https://www.vectorlogo.zone/logos/walgreens/walgreens-icon.svg", colors: ["#E31837", "#005596"] },
  { name: "7-Eleven", logoUrl: "https://www.vectorlogo.zone/logos/7-eleven/7-eleven-icon.svg", colors: ["#008163", "#EE3124", "#F47920"] },
  { name: "Circle K", logoUrl: "https://www.vectorlogo.zone/logos/circlek/circlek-icon.svg", colors: ["#EE2724", "#F6921E"] },
  { name: "Decathlon", logoUrl: "https://www.vectorlogo.zone/logos/decathlon/decathlon-icon.svg", colors: ["#0082C3", "#FFFFFF"] },

  // Automotive & Racing
  { name: "Ferrari", logoUrl: "https://www.vectorlogo.zone/logos/ferrari/ferrari-icon.svg", colors: ["#FF2800", "#FFF200", "#00903E"] },
  { name: "Porsche", logoUrl: "https://www.vectorlogo.zone/logos/porsche/porsche-icon.svg", colors: ["#D5001C", "#FFD700", "#000000"] },
  { name: "BMW", logoUrl: "https://www.vectorlogo.zone/logos/bmw/bmw-icon.svg", colors: ["#0066B1", "#70A9D7", "#000000"] },
  { name: "Mercedes-Benz", logoUrl: "https://www.vectorlogo.zone/logos/mercedes-benz/mercedes-benz-icon.svg", colors: ["#333333", "#00ADEF"] },
  { name: "Audi", logoUrl: "https://www.vectorlogo.zone/logos/audi/audi-icon.svg", colors: ["#BB0A30", "#000000"] },
  { name: "Ford", logoUrl: "https://www.vectorlogo.zone/logos/ford/ford-icon.svg", colors: ["#003478", "#FFFFFF"] },
  { name: "Tesla", logoUrl: "https://www.vectorlogo.zone/logos/tesla/tesla-icon.svg", colors: ["#E82127", "#000000"] },
  { name: "Chevrolet", logoUrl: "https://www.vectorlogo.zone/logos/chevrolet/chevrolet-icon.svg", colors: ["#CBA135", "#000000"] },
  { name: "Toyota", logoUrl: "https://www.vectorlogo.zone/logos/toyota/toyota-icon.svg", colors: ["#EB0A1E", "#000000"] },
  { name: "Honda", logoUrl: "https://www.vectorlogo.zone/logos/honda/honda-icon.svg", colors: ["#CC0000", "#000000"] },
  { name: "Jeep", logoUrl: "https://www.vectorlogo.zone/logos/jeep/jeep-icon.svg", colors: ["#495643", "#000000"] },
  { name: "Lamborghini", logoUrl: "https://www.vectorlogo.zone/logos/lamborghini/lamborghini-icon.svg", colors: ["#DDB321", "#000000"] },
  { name: "Volkswagen", logoUrl: "https://www.vectorlogo.zone/logos/volkswagen/volkswagen-icon.svg", colors: ["#001E50", "#1E64B4"] },
  { name: "Nissan", logoUrl: "https://www.vectorlogo.zone/logos/nissan/nissan-icon.svg", colors: ["#C3002F", "#000000"] },
  { name: "Hyundai", logoUrl: "https://www.vectorlogo.zone/logos/hyundai/hyundai-icon.svg", colors: ["#002C6C", "#00AAD2"] },
  { name: "Kia", logoUrl: "https://www.vectorlogo.zone/logos/kia/kia-icon.svg", colors: ["#05141F", "#EA0029"] },
  { name: "Subaru", logoUrl: "https://www.vectorlogo.zone/logos/subaru/subaru-icon.svg", colors: ["#013C7B", "#FFFFFF"] },
  { name: "Mazda", logoUrl: "https://www.vectorlogo.zone/logos/mazda/mazda-icon.svg", colors: ["#101010", "#910000"] },
  { name: "Volvo", logoUrl: "https://www.vectorlogo.zone/logos/volvocars/volvocars-icon.svg", colors: ["#003057", "#1E4F7C"] },
  { name: "Jaguar", logoUrl: "https://www.vectorlogo.zone/logos/jaguar/jaguar-icon.svg", colors: ["#005A36", "#505050"] },
  { name: "Land Rover", logoUrl: "https://www.vectorlogo.zone/logos/landrover/landrover-icon.svg", colors: ["#0C5A35", "#FFFFFF"] },
  { name: "Maserati", logoUrl: "https://www.vectorlogo.zone/logos/maserati/maserati-icon.svg", colors: ["#0C2340", "#C8102E"] },
  { name: "Aston Martin", logoUrl: "https://www.vectorlogo.zone/logos/astonmartin/astonmartin-icon.svg", colors: ["#004838", "#FFFFFF"] },
  { name: "McLaren", logoUrl: "https://www.vectorlogo.zone/logos/mclaren/mclaren-icon.svg", colors: ["#FF8000", "#000000"] },
  { name: "Bugatti", logoUrl: "https://www.vectorlogo.zone/logos/bugatti/bugatti-icon.svg", colors: ["#BE1622", "#000000"] },
  { name: "Bentley", logoUrl: "https://www.vectorlogo.zone/logos/bentleymotors/bentleymotors-icon.svg", colors: ["#000000", "#144733"] },
  { name: "Rolls-Royce", logoUrl: "https://www.vectorlogo.zone/logos/rolls-royce/rolls-royce-icon.svg", colors: ["#461D4C", "#B0A8A0"] },
  { name: "Ducati", logoUrl: "https://www.vectorlogo.zone/logos/ducati/ducati-icon.svg", colors: ["#CC0000", "#000000"] },
  { name: "Harley-Davidson", logoUrl: "https://www.vectorlogo.zone/logos/harley-davidson/harley-davidson-icon.svg", colors: ["#FF6600", "#000000"] },
  { name: "Yamaha", logoUrl: "https://www.vectorlogo.zone/logos/yamaha/yamaha-icon.svg", colors: ["#0033A0", "#CC0000"] },
  { name: "Kawasaki", logoUrl: "https://www.vectorlogo.zone/logos/kawasaki/kawasaki-icon.svg", colors: ["#66CC00", "#000000"] },
  { name: "Michelin", logoUrl: "https://www.vectorlogo.zone/logos/michelin/michelin-icon.svg", colors: ["#002F6C", "#FFE600"] },
  { name: "Pirelli", logoUrl: "https://www.vectorlogo.zone/logos/pirelli/pirelli-icon.svg", colors: ["#FED100", "#D52B1E"] },
  { name: "Bridgestone", logoUrl: "https://www.vectorlogo.zone/logos/bridgestone/bridgestone-icon.svg", colors: ["#ED1C24", "#000000"] },
  { name: "Goodyear", logoUrl: "https://www.vectorlogo.zone/logos/goodyear/goodyear-icon.svg", colors: ["#00338D", "#FED100"] },
  { name: "Castrol", logoUrl: "https://www.vectorlogo.zone/logos/castrol/castrol-icon.svg", colors: ["#007A3E", "#E31837"] },
  { name: "Shell", logoUrl: "https://www.vectorlogo.zone/logos/shell/shell-icon.svg", colors: ["#FBCE07", "#DD1D21"] },
  { name: "BP", logoUrl: "https://www.vectorlogo.zone/logos/bp/bp-icon.svg", colors: ["#007A3D", "#FFDE00"] },
  { name: "Chevron", logoUrl: "https://www.vectorlogo.zone/logos/chevron/chevron-icon.svg", colors: ["#005596", "#E31B23"] },

  // Apparel, Luxury & Fashion
  { name: "Nike", logoUrl: "https://www.vectorlogo.zone/logos/nike/nike-icon.svg", colors: ["#111111", "#FFFFFF"] },
  { name: "Adidas", logoUrl: "https://www.vectorlogo.zone/logos/adidas/adidas-icon.svg", colors: ["#000000", "#FFFFFF"] },
  { name: "Puma", logoUrl: "https://www.vectorlogo.zone/logos/puma/puma-icon.svg", colors: ["#000000", "#BA0C2F"] },
  { name: "Under Armour", logoUrl: "https://www.vectorlogo.zone/logos/underarmour/underarmour-icon.svg", colors: ["#1D1D1D", "#E03A3E"] },
  { name: "Vans", logoUrl: "https://www.vectorlogo.zone/logos/vans/vans-icon.svg", colors: ["#BA0C2F", "#000000"] },
  { name: "New Balance", logoUrl: "https://www.vectorlogo.zone/logos/newbalance/newbalance-icon.svg", colors: ["#CE0E2D", "#002B49"] },
  { name: "Converse", logoUrl: "https://www.vectorlogo.zone/logos/converse/converse-icon.svg", colors: ["#000000", "#E31837"] },
  { name: "The North Face", logoUrl: "https://www.vectorlogo.zone/logos/thenorthface/thenorthface-icon.svg", colors: ["#ED1B2D", "#000000"] },
  { name: "Columbia", logoUrl: "https://www.vectorlogo.zone/logos/columbia/columbia-icon.svg", colors: ["#0072CE", "#1D252C"] },
  { name: "Patagonia", logoUrl: "https://www.vectorlogo.zone/logos/patagonia/patagonia-icon.svg", colors: ["#231F20", "#F47D31", "#5C2D91"] },
  { name: "Lululemon", logoUrl: "https://www.vectorlogo.zone/logos/lululemon/lululemon-icon.svg", colors: ["#D31334", "#000000"] },
  { name: "Levi's", logoUrl: "https://www.vectorlogo.zone/logos/levi/levi-icon.svg", colors: ["#C41230", "#FFFFFF"] },
  { name: "Gap", logoUrl: "https://www.vectorlogo.zone/logos/gap/gap-icon.svg", colors: ["#002855", "#FFFFFF"] },
  { name: "H&M", logoUrl: "https://www.vectorlogo.zone/logos/hm/hm-icon.svg", colors: ["#CD040B", "#FFFFFF"] },
  { name: "Zara", logoUrl: "https://www.vectorlogo.zone/logos/zara/zara-icon.svg", colors: ["#000000", "#FFFFFF"] },
  { name: "Uniqlo", logoUrl: "https://www.vectorlogo.zone/logos/uniqlo/uniqlo-icon.svg", colors: ["#EE1C25", "#FFFFFF"] },
  { name: "Tommy Hilfiger", logoUrl: "https://www.vectorlogo.zone/logos/tommyhilfiger/tommyhilfiger-icon.svg", colors: ["#00174F", "#CC0C2F", "#FFFFFF"] },
  { name: "Calvin Klein", logoUrl: "https://www.vectorlogo.zone/logos/calvinklein/calvinklein-icon.svg", colors: ["#000000", "#FFFFFF"] },
  { name: "Ralph Lauren", logoUrl: "https://www.vectorlogo.zone/logos/ralphlauren/ralphlauren-icon.svg", colors: ["#002054", "#C49A45"] },
  { name: "Lacoste", logoUrl: "https://www.vectorlogo.zone/logos/lacoste/lacoste-icon.svg", colors: ["#004526", "#C8102E"] },
  { name: "Gucci", logoUrl: "https://www.vectorlogo.zone/logos/gucci/gucci-icon.svg", colors: ["#00552E", "#AE0E17", "#000000"] },
  { name: "Louis Vuitton", logoUrl: "https://www.vectorlogo.zone/logos/louisvuitton/louisvuitton-icon.svg", colors: ["#4E3D28", "#876D49"] },
  { name: "Chanel", logoUrl: "https://www.vectorlogo.zone/logos/chanel/chanel-icon.svg", colors: ["#000000", "#FFFFFF"] },
  { name: "Prada", logoUrl: "https://www.vectorlogo.zone/logos/prada/prada-icon.svg", colors: ["#000000", "#FFFFFF"] },
  { name: "Hermès", logoUrl: "https://www.vectorlogo.zone/logos/hermes/hermes-icon.svg", colors: ["#F37021", "#4A2E12"] },
  { name: "Dior", logoUrl: "https://www.vectorlogo.zone/logos/dior/dior-icon.svg", colors: ["#000000", "#808080"] },
  { name: "Burberry", logoUrl: "https://www.vectorlogo.zone/logos/burberry/burberry-icon.svg", colors: ["#000000", "#C5A059", "#A6192E"] },
  { name: "Versace", logoUrl: "https://www.vectorlogo.zone/logos/versace/versace-icon.svg", colors: ["#000000", "#DAA520"] },
  { name: "Armani", logoUrl: "https://www.vectorlogo.zone/logos/armani/armani-icon.svg", colors: ["#000000", "#FFFFFF"] },
  { name: "Fendi", logoUrl: "https://www.vectorlogo.zone/logos/fendi/fendi-icon.svg", colors: ["#F7B928", "#000000"] },
  { name: "Balenciaga", logoUrl: "https://www.vectorlogo.zone/logos/balenciaga/balenciaga-icon.svg", colors: ["#000000", "#FFFFFF"] },
  { name: "Tiffany & Co.", logoUrl: "https://www.vectorlogo.zone/logos/tiffany/tiffany-icon.svg", colors: ["#81D8D0", "#000000"] },
  { name: "Cartier", logoUrl: "https://www.vectorlogo.zone/logos/cartier/cartier-icon.svg", colors: ["#8A151B", "#C5A059"] },
  { name: "Rolex", logoUrl: "https://www.vectorlogo.zone/logos/rolex/rolex-icon.svg", colors: ["#006039", "#A37E2C"] },
  { name: "TAG Heuer", logoUrl: "https://www.vectorlogo.zone/logos/tagheuer/tagheuer-icon.svg", colors: ["#008559", "#E31B23", "#000000"] },
  { name: "Ray-Ban", logoUrl: "https://www.vectorlogo.zone/logos/ray-ban/ray-ban-icon.svg", colors: ["#E31B23", "#000000"] },

  // Finance, Insurance & Telecom
  { name: "Mastercard", logoUrl: "https://www.vectorlogo.zone/logos/mastercard/mastercard-icon.svg", colors: ["#EB001B", "#F79E1B", "#FF5F00"] },
  { name: "Visa", logoUrl: "https://www.vectorlogo.zone/logos/visa/visa-icon.svg", colors: ["#1A1F71", "#F7B600"] },
  { name: "American Express", logoUrl: "https://www.vectorlogo.zone/logos/americanexpress/americanexpress-icon.svg", colors: ["#006FCF", "#FFFFFF"] },
  { name: "Chase", logoUrl: "https://www.vectorlogo.zone/logos/chase/chase-icon.svg", colors: ["#117ACA", "#0A2540"] },
  { name: "Bank of America", logoUrl: "https://www.vectorlogo.zone/logos/bankofamerica/bankofamerica-icon.svg", colors: ["#E31837", "#00529B"] },
  { name: "Citi", logoUrl: "https://www.vectorlogo.zone/logos/citi/citi-icon.svg", colors: ["#003B70", "#ED1C24"] },
  { name: "Wells Fargo", logoUrl: "https://www.vectorlogo.zone/logos/wellsfargo/wellsfargo-icon.svg", colors: ["#D71E28", "#FFCE00"] },
  { name: "Capital One", logoUrl: "https://www.vectorlogo.zone/logos/capitalone/capitalone-icon.svg", colors: ["#D03027", "#004879"] },
  { name: "Discover", logoUrl: "https://www.vectorlogo.zone/logos/discover/discover-icon.svg", colors: ["#FF6000", "#1F3643"] },
  { name: "Barclays", logoUrl: "https://www.vectorlogo.zone/logos/barclays/barclays-icon.svg", colors: ["#00AEEF", "#00395D"] },
  { name: "HSBC", logoUrl: "https://www.vectorlogo.zone/logos/hsbc/hsbc-icon.svg", colors: ["#DB0011", "#000000"] },
  { name: "Santander", logoUrl: "https://www.vectorlogo.zone/logos/santander/santander-icon.svg", colors: ["#EC0000", "#FFFFFF"] },
  { name: "Deutsche Bank", logoUrl: "https://www.vectorlogo.zone/logos/deutschebank/deutschebank-icon.svg", colors: ["#0018A8", "#FFFFFF"] },
  { name: "UBS", logoUrl: "https://www.vectorlogo.zone/logos/ubs/ubs-icon.svg", colors: ["#E60000", "#000000"] },
  { name: "Klarna", logoUrl: "https://www.vectorlogo.zone/logos/klarna/klarna-icon.svg", colors: ["#FFB3C7", "#0A0A0A"] },
  { name: "T-Mobile", logoUrl: "https://www.vectorlogo.zone/logos/t-mobile/t-mobile-icon.svg", colors: ["#E20074", "#FFFFFF"] },
  { name: "Verizon", logoUrl: "https://www.vectorlogo.zone/logos/verizon/verizon-icon.svg", colors: ["#CD040B", "#000000"] },
  { name: "AT&T", logoUrl: "https://www.vectorlogo.zone/logos/att/att-icon.svg", colors: ["#00A8E0", "#0057B8"] },
  { name: "Vodafone", logoUrl: "https://www.vectorlogo.zone/logos/vodafone/vodafone-icon.svg", colors: ["#E60000", "#FFFFFF"] },
  { name: "Orange", logoUrl: "https://www.vectorlogo.zone/logos/orange/orange-icon.svg", colors: ["#FF7900", "#000000"] },

  // Entertainment, Media & Airlines
  { name: "BBC", logoUrl: "https://www.vectorlogo.zone/logos/bbc/bbc-icon.svg", colors: ["#000000", "#FF0000"] },
  { name: "CNN", logoUrl: "https://www.vectorlogo.zone/logos/cnn/cnn-icon.svg", colors: ["#CC0000", "#000000"] },
  { name: "HBO", logoUrl: "https://www.vectorlogo.zone/logos/hbo/hbo-icon.svg", colors: ["#000000", "#582C83"] },
  { name: "ESPN", logoUrl: "https://www.vectorlogo.zone/logos/espn/espn-icon.svg", colors: ["#CD0000", "#000000"] },
  { name: "Disney", logoUrl: "https://www.vectorlogo.zone/logos/disney/disney-icon.svg", colors: ["#113CCF", "#FFFFFF"] },
  { name: "Hulu", logoUrl: "https://www.vectorlogo.zone/logos/hulu/hulu-icon.svg", colors: ["#1CE783", "#0B0C0F"] },
  { name: "Paramount+", logoUrl: "https://www.vectorlogo.zone/logos/paramountplus/paramountplus-icon.svg", colors: ["#0064FF", "#000B2B"] },
  { name: "Warner Bros", logoUrl: "https://www.vectorlogo.zone/logos/warnerbros/warnerbros-icon.svg", colors: ["#004DB3", "#FFD700"] },
  { name: "Delta Air Lines", logoUrl: "https://www.vectorlogo.zone/logos/delta/delta-icon.svg", colors: ["#003A70", "#E01933"] },
  { name: "American Airlines", logoUrl: "https://www.vectorlogo.zone/logos/aa/aa-icon.svg", colors: ["#0078D2", "#C30017", "#B2B4B3"] },
  { name: "United Airlines", logoUrl: "https://www.vectorlogo.zone/logos/united/united-icon.svg", colors: ["#002244", "#005DAA"] },
  { name: "Southwest Airlines", logoUrl: "https://www.vectorlogo.zone/logos/southwest/southwest-icon.svg", colors: ["#11295B", "#F9B612", "#E81B23"] },
  { name: "Air Canada", logoUrl: "https://www.vectorlogo.zone/logos/aircanada/aircanada-icon.svg", colors: ["#D8232A", "#000000"] },
  { name: "British Airways", logoUrl: "https://www.vectorlogo.zone/logos/british_airways/british_airways-icon.svg", colors: ["#075AAA", "#EB2226"] },
  { name: "Lufthansa", logoUrl: "https://www.vectorlogo.zone/logos/lufthansa/lufthansa-icon.svg", colors: ["#05164D", "#FFAC00"] },
  { name: "Emirates", logoUrl: "https://www.vectorlogo.zone/logos/emirates/emirates-icon.svg", colors: ["#D71921", "#C79D3B", "#000000"] },
  { name: "Qatar Airways", logoUrl: "https://www.vectorlogo.zone/logos/qatarairways/qatarairways-icon.svg", colors: ["#5C0632", "#848285"] },
  { name: "Ryanair", logoUrl: "https://www.vectorlogo.zone/logos/ryanair/ryanair-icon.svg", colors: ["#073590", "#F1C933"] },
  { name: "EasyJet", logoUrl: "https://www.vectorlogo.zone/logos/easyjet/easyjet-icon.svg", colors: ["#FF6600", "#000000"] },
  { name: "Air France", logoUrl: "https://www.vectorlogo.zone/logos/airfrance/airfrance-icon.svg", colors: ["#002157", "#ED0000"] },
  { name: "KLM", logoUrl: "https://www.vectorlogo.zone/logos/klm/klm-icon.svg", colors: ["#00A1DE", "#FFFFFF"] },
  { name: "Booking.com", logoUrl: "https://www.vectorlogo.zone/logos/booking/booking-icon.svg", colors: ["#003580", "#008009", "#FEBA02"] },
  { name: "Tripadvisor", logoUrl: "https://www.vectorlogo.zone/logos/tripadvisor/tripadvisor-icon.svg", colors: ["#00AF87", "#000000"] },
  { name: "Marriott", logoUrl: "https://www.vectorlogo.zone/logos/marriott/marriott-icon.svg", colors: ["#B81F28", "#1E1E1E"] },
  { name: "Hilton", logoUrl: "https://www.vectorlogo.zone/logos/hilton/hilton-icon.svg", colors: ["#123652", "#937D53"] },

  // Household, Tools & Pharma
  { name: "Dyson", logoUrl: "https://www.vectorlogo.zone/logos/dyson/dyson-icon.svg", colors: ["#880088", "#222222"] },
  { name: "DeWalt", logoUrl: "https://www.vectorlogo.zone/logos/dewalt/dewalt-icon.svg", colors: ["#FEB81C", "#000000"] },
  { name: "Milwaukee Tool", logoUrl: "https://www.vectorlogo.zone/logos/milwaukeetool/milwaukeetool-icon.svg", colors: ["#DB0000", "#000000"] },
  { name: "Bosch", logoUrl: "https://www.vectorlogo.zone/logos/bosch/bosch-icon.svg", colors: ["#EA1D2D", "#005691"] },
  { name: "Makita", logoUrl: "https://www.vectorlogo.zone/logos/makita/makita-icon.svg", colors: ["#00878F", "#000000"] },
  { name: "Caterpillar", logoUrl: "https://www.vectorlogo.zone/logos/cat/cat-icon.svg", colors: ["#FFCD11", "#000000"] },
  { name: "John Deere", logoUrl: "https://www.vectorlogo.zone/logos/deere/deere-icon.svg", colors: ["#367C2B", "#FFDE00"] },
  { name: "3M", logoUrl: "https://www.vectorlogo.zone/logos/3m/3m-icon.svg", colors: ["#FF0000", "#000000"] },
  { name: "Bic", logoUrl: "https://www.vectorlogo.zone/logos/bic/bic-icon.svg", colors: ["#FF6600", "#000000", "#FDB913"] },
  { name: "Duracell", logoUrl: "https://www.vectorlogo.zone/logos/duracell/duracell-icon.svg", colors: ["#C68A4C", "#000000"] },
  { name: "Energizer", logoUrl: "https://www.vectorlogo.zone/logos/energizer/energizer-icon.svg", colors: ["#ED1C24", "#FFDD00", "#000000"] },
  { name: "Stanley", logoUrl: "https://www.vectorlogo.zone/logos/stanleytools/stanleytools-icon.svg", colors: ["#FFE600", "#000000"] },
  { name: "Pampers", logoUrl: "https://www.vectorlogo.zone/logos/pampers/pampers-icon.svg", colors: ["#00A896", "#F2C75C"] },
  { name: "L'Oréal", logoUrl: "https://www.vectorlogo.zone/logos/loreal/loreal-icon.svg", colors: ["#E31B23", "#000000", "#C5A059"] },
  { name: "Colgate", logoUrl: "https://www.vectorlogo.zone/logos/colgate/colgate-icon.svg", colors: ["#E11A27", "#FFFFFF"] },
  { name: "Gillette", logoUrl: "https://www.vectorlogo.zone/logos/gillette/gillette-icon.svg", colors: ["#00186B", "#FFFFFF"] },
  { name: "Dove", logoUrl: "https://www.vectorlogo.zone/logos/dove/dove-icon.svg", colors: ["#0C2340", "#CCA43B"] },
  { name: "Nivea", logoUrl: "https://www.vectorlogo.zone/logos/nivea/nivea-icon.svg", colors: ["#00327A", "#FFFFFF"] },
  { name: "Tide", logoUrl: "https://www.vectorlogo.zone/logos/tide/tide-icon.svg", colors: ["#F15D22", "#003A70", "#FFD200"] },
  { name: "Johnson & Johnson", logoUrl: "https://www.vectorlogo.zone/logos/jnj/jnj-icon.svg", colors: ["#D51900", "#FFFFFF"] },
  { name: "Pfizer", logoUrl: "https://www.vectorlogo.zone/logos/pfizer/pfizer-icon.svg", colors: ["#0000FF", "#0095FF"] },
  { name: "AstraZeneca", logoUrl: "https://www.vectorlogo.zone/logos/astrazeneca/astrazeneca-icon.svg", colors: ["#830051", "#D0D0CE", "#F0AB00"] },
  { name: "Moderna", logoUrl: "https://www.vectorlogo.zone/logos/modernatx/modernatx-icon.svg", colors: ["#E11A27", "#003A70"] },
  { name: "Bayer", logoUrl: "https://www.vectorlogo.zone/logos/bayer/bayer-icon.svg", colors: ["#0091DF", "#89BA16"] }
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

  // Add selected brand to cooldown history
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
  logoImg.src = brand.logoUrl;
  
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