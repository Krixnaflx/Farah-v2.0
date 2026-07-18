// ============================================================
//  config.js.example — Central configuration template
// ============================================================

const path = require("path");
const fs   = require("fs");

function loadJson(filename) {
  const filePath = path.join(__dirname, "data", filename);
  try {
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, "[]", "utf8");
      return [];
    }
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch {
    return [];
  }
}

module.exports = {

  // ── Bot ──────────────────────────────────────────────────
  token:   "", // Fill in .env or here
  prefix:  ";",
  ownerID: "YOUR_DISCORD_ID",
       
  // ── Developer IDs ────────────────────────────────────────
  devIDs: loadJson("devs.json"),

  // ── No-Prefix Users ──────────────────────────────────────
  noPrefix: loadJson("nplist.json"),
    
  // ── Hidden Categories ────────────────────────────────────
  hiddenCategories: [
    "owner",
    "dev",
    "premium",
  ],

  // ── MongoDB Clusters ─────────────────────────────────────
  mongodb: {
    clusters: [
      { name: "cluster1", uri: "mongodb://mongo:kwKlYfukvcVZVoPHsJpZZBJYaREqbuZk@tokaido.proxy.rlwy.net:16541" },
      { name: "cluster2", uri: "mongodb://mongo:kwKlYfukvcVZVoPHsJpZZBJYaREqbuZk@tokaido.proxy.rlwy.net:16541" },
    ],
    economyUri: "mongodb://mongo:kwKlYfukvcVZVoPHsJpZZBJYaREqbuZk@tokaido.proxy.rlwy.net:16541",
    maxServersPerCluster: 100,
  },

  // ── Emoji Hosting ────────────────────────────────────
  // The bot will upload custom emojis to these servers.
  emojiServers: ["1360081627094581348", "1524101214655090828"],

  // ── Lavalink ─────────────────────────────────────────────
  lavalink: {
    host: "sg2-nodelink.nyxbot.app",
    port: 3000,
    password: "nyxbot.app/support",
    secure: false,
    restVersion: "v4",
    name: "Main Node", 
  },

};
