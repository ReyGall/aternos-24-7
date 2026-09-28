module.exports = {
  "name": "Axel The Mlem",
  "bot-account": {
    "username": process.env.BOT_ACCOUNT_1_USERNAME || "Axel",
    "password": process.env.BOT_ACCOUNT_1_PASSWORD || "",
    "type": process.env.BOT_ACCOUNT_1_TYPE || "offline"
  },
  "bot-accounts": [
    {
      "username": process.env.BOT_ACCOUNT_1_USERNAME || "Axel",
      "password": process.env.BOT_ACCOUNT_1_PASSWORD || "",
      "type": process.env.BOT_ACCOUNT_1_TYPE || "offline"
    },
    {
      "username": process.env.BOT_ACCOUNT_2_USERNAME || "Rehxchi",
      "password": process.env.BOT_ACCOUNT_2_PASSWORD || "",
      "type": process.env.BOT_ACCOUNT_2_TYPE || "offline"
    }
  ],
  "server": {
    "ip": process.env.ATERNOS_IP || "",
    "port": process.env.ATERNOS_PORT ? parseInt(process.env.ATERNOS_PORT) : 0,
    "version": "",
    "try-creative": false
  },
  "position": {
    "enabled": true,
    "x": 0,
    "y": 100,
    "z": 0
  },
  "utils": {
    "auto-auth": {
      "enabled": true,
      "password": "chalol78"
    },
    "anti-afk": {
      "enabled": true,
      "sneak": true
    },
    "chat-messages": {
      "enabled": true,
      "repeat": true,
      "repeat-delay": 120,
      "messages": [
        "I'm a regular player",
        "Big Black Balls HD",
        "The sun is shining!"
      ]
    },
    "chat-log": true,
    "auto-reconnect": true,
    "auto-reconnect-delay": 2000,
    "max-reconnect-delay": 15000
  },
  "movement": {
    "enabled": true,
    "circle-walk": {
      "enabled": true,
      "radius": 4,
      "speed": 3000
    },
    "look-around": {
      "enabled": true,
      "interval": 5000
    },
    "random-jump": {
      "enabled": true,
      "interval": 10000
    }
  },
  "modules": {
    "avoidMobs": true,
    "combat": true,
    "beds": false,
    "chat": true,
    "console-commands": true
  },
  "combat": {
    "attack-mobs": true,
    "auto-eat": true
  },
  "beds": {
    "pick-up-day": false,
    "place-night": false
  },
  "discord": {
    "enabled": true,
    // FIX: Теперь вебхук полностью скрыт и читается из секретов GitHub!
    "webhookUrl": process.env.DISCORD_WEBHOOK || "https://discord.com/api/webhooks/...",
    "events": {
      "connect": true,
      "disconnect": true,
      "chat": false
    }
  },
  "chat": {
    "respond": true
  }
};

