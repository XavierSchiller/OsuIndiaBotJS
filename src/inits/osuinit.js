const Discord = require('../Clients/discord');

module.exports = function osuinit() {
  const x = require('../osuCommands');

  Discord.addCommand('getUser', x.getUser, ['osu', 'user', 'profile']);

  Discord.addCommand('getUserBest', x.getUserBest, ['top']);

  Discord.addCommand('setUser', x.setUser, ['set']);

  Discord.addCommand(
      'getRecent',
      async (msg, args) => {
        const em = await x.getRecent(msg, args);
        Discord.sendMessage(em, msg.channel.id);
      },
      ['rs']
  );
};
