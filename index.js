var Tokens = require('./config.json')

var nodeosu = require('node-osu');
var eris = require('eris');
var Osu = new nodeosu.Api(Tokens.OsuApiKey, {
    notFoundAsError: true,
    completeScores: false
});

var DiscordOsu = require('./osu');
var Discord = new eris.CommandClient(Tokens.DiscordKey, {}, {
    "description": "A Bot Specifically Designed for Osu!India.",
    "owner": "Xav",
    "prefix": "!"
});

Discord.on('ready',()=>{
    console.log("Ready!");
})
//var sqlite3 = require('sqlite3');
//var sqlcon = sqlite3.Database('Profiles.db');


//UserProfile Command.
Discord.registerCommand("user", (msg, args) => {
    DiscordOsu.FetchUser(Osu, Discord, msg, args);
    //Test.FetchUser(Osu, Discord, msg, args);
}, {
        "description": "Fetches User Profile.",
        "usage": "!user <Username> [Usernames...]"
    });
var useraliases = ['u', 'usr', 'profile', 'osu']
useraliases.forEach(function (Alias) {
    Discord.registerCommandAlias(Alias, "user");
});



Discord.registerCommand("recent",(msg,args) => {
    DiscordOsu.GetUserBest(Osu,Discord,msg,args);
},{

});

Discord.connect();