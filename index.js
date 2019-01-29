var Tokens = require('./config.json')
var nodeosu = require('node-osu');
var ModL = require('./ML');
var eris = require('eris');
var CmdConf = require('./DiscordOsu.json');
var sqlconn = require('sqlite3');



var Mods = new ModL.ModuleLoader('./osu');

var Osu = new nodeosu.Api(Tokens.OsuApiKey, {
    notFoundAsError: true,
    completeScores: false
});

var Discord = new eris.CommandClient(Tokens.DiscordKey, {
    autoreconnect: true
}, {
        "description": "A Bot Specifically Designed for Osu!India.",
        "owner": "Xav",
        "prefix": "`"
    });

Mods.fkeys.forEach((func) => {
    Discord.registerCommand(func, (msg, args) => {
        Mods.Callfunc(func, Osu, Discord, msg, args, db);
    }, {
            aliases: CmdConf[func].Alias,
            description: CmdConf[func].ShortDesc,
            fullDescription: CmdConf[func].LongDesc,
            usage: CmdConf[func].Usage
        });
});


Discord.on('ready', () => {
    console.log("Ready!");
    // setInterval(function () {
    //     Mods.Callfunc('feed', Osu, Discord, null, null, db)
    // }, 5000);
});

var db = new sqlconn.Database('Info.db', (err) => {
    if (err === 'undefined')
        console.log("Database Did not open, Please restart the program!")
    else {
        db.run("CREATE TABLE IF NOT EXISTS USERS(userID text PRIMARY KEY NOT NULL, OsuUsername text NOT NULL)");
        db.run("CREATE TABLE IF NOT EXISTS CHANNELS(ID text PRIMARY KEY NOT NULL)")
        console.log("Tables Created!")
        Discord.connect();
    }
});
