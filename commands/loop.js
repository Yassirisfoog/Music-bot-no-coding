const { canModifyQueue } = require("../util/Util");

module.exports = {

  name: "loop",

  aliases: ["l"],

  description: "Toggle music loop",

  execute(message) {

    const queue = message.client.queue.get(message.guild.id);

    if (!queue) return message.reply("No music are currently playing!").catch(console.error);

    if (!canModifyQueue(message.member)) return;

    // toggle from false to true and reverse

    queue.loop = !queue.loop;

    return queue.textChannel.send(`loop mode is  ${queue.loop ? "**on**" : "**off**"}`).catch(console.error);

  }

};

