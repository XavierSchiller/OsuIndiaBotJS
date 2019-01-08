var Tokens = require('./config.json')

var nodeosu = require('node-osu');
var eris = require('eris');
var Test = require('./OnReady');
var Osu = new nodeosu.Api(Tokens.OsuApiKey, {
    notFoundAsError: true,
    completeScores: false
});

var Discord = new eris.CommandClient(Tokens.DiscordKey, {}, {
    "description": "A Bot Specifically Designed for Osu!India.",
    "owner": "Xav",
    "prefix": "!"
});


//UserProfile Command.
Discord.registerCommand("user", (msg, args) => {
    Test.FetchUser(Osu, Discord, msg, args);
}, {
        "description": "Fetches User Profile.",
        "usage": "!user <Username> [Usernames...]"
    });

var useraliases = ['u', 'usr', 'profile', 'osu']
useraliases.forEach(function(Alias) {
    Discord.registerCommandAlias(Alias,"user");
});


Discord.registerCommand("recent",(msg,args) => {
    Test.GetUserScores(Osu,Discord,msg,args);
},{

});

Discord.connect();