const Discord = require('../discord');

module.exports = function osuinit() {
  const x = require('../osuCommands');
  Discord.registerCommand(
      'getuser',
      (message, args) => {
        x.getUser(message, args).then((em) => {
          Discord.createMessage(message.channel.id, em);
        });
      },
      {
        aliases: ['osu', 'user', 'profile'],
        caseInsensitive: false,
        cooldown: 5,
        cooldownMessage: 'Wait for 5 seconds before using this command again!',
        usage: 'top username',
      }
  );

  Discord.registerCommand(
      'getUserBest',
      (message, args) => {
        x.getUserBest(message, args).then((em) => {
          Discord.createMessage(message.channel.id, em);
        });
      },
      {
        aliases: ['top'],
        caseInsensitive: false,
        cooldown: 5,
        cooldownMessage: 'Wait for 5 seconds before using this command again!',
        usage: 'top username',
      }
  );

  Discord.registerCommand(
      'getRecent',
      async (message, args) => {
        const em = await x.getRecent(message, args);
        Discord.createMessage(message.channel.id, em);
      },
      {
        aliases: ['rs'],
        caseInsensitive: false,
        cooldown: 5,
        cooldownMessage: 'Wait for 5 seconds before using this command again!',
        usage: 'top username',
      }
  );

  Discord.registerCommand(
      'setUser',
      async (message, args) => {
        const em = await x.setUser(message, args);
        Discord.createMessage(message.channel.id, em);
      },
      {
        aliases: ['set'],
        caseInsensitive: false,
        cooldown: 5,
        cooldownMessage: 'Wait for 5 seconds before using this command again!',
        usage: 'top username',
      }
  );
};
