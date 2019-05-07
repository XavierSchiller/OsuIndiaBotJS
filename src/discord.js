var Tokens = require("./config.json");

var eris = require("eris");

var Discord = new eris.CommandClient(
    Tokens.DiscordKey, {
        autoreconnect: true
    }, {
        description: "A Bot Specifically Designed for Osu!India.",
        owner: "Xav",
        prefix: "`"
    }
);

module.exports = Discord;