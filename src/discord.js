const Tokens = require('../config/config.json');

const eris = require('eris');

const Discord = new eris.CommandClient(
    Tokens.DiscordKey,
    {
      autoreconnect: true,
    },
    {
      description: 'A Bot Specifically Designed for Osu!India.',
      owner: 'Xav',
      prefix: '`',
    }
);

module.exports = Discord;
