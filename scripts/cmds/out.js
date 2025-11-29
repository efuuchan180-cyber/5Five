const fs = require("fs-extra");

module.exports = {
  config: {
    name: "out",
    aliases: ["l"],
    version: "1.0",
    author: "EfaaT",
    countDown: 5,
    role: 2,
    shortDescription: "Bot will leave group with style",
    longDescription: "Sends a funny insulting farewell before leaving the group.",
    category: "admin",
    guide: {
      vi: "{pn} [tid, blank]",
      en: "{pn} [tid, blank]"
    }
  },

  onStart: async function ({ api, event, args }) {
    let threadID = args.join(" ") ? parseInt(args.join(" ")) : event.threadID;

    const message = `
╔═══════════
▸ 𝗘𝗙𝗔𝗔𝗧 𝗕𝗢𝗧 𝗢𝗨𝗧
╠═══════════
▸ Ami toder sukh dewar jonno ashchilam… 
▸ Kintu dekhi, tora eta use korar joggoo o na 😎
▸ Eti holo amar last warning 🚀
▸ Bye bye, losers! 👋
╚═══════════
`;

    return api.sendMessage(message, threadID, () =>
      api.removeUserFromGroup(api.getCurrentUserID(), threadID)
    );
  },
};
