var Tokens = require('./config.json')

var nodeosu = require('node-osu');
var eris = require('eris');
var Osu = new nodeosu.Api(Tokens.OsuApiKey, {
    notFoundAsError: true,
    completeScores: false
});

var Discord = new eris.CommandClient(Tokens.DiscordKey, {}, {
    "description": "A Bot Specifically Designed for Osu!India.",
    "owner": "Xav",
    "prefix": "!"
});

var ModL = require('./ML');

var Mods = new ModL.ModuleLoader('./osu');

function ModuleLoader(Discord, ML, Osu) {
    ML.fkeys.forEach((func) =>{
        Discord.registerCommand(func,(msg,args)=>
        {
            ML.Callfunc(func,Osu,Discord,msg,args);
        });
    })
}


Discord.on('ready',()=>{
    console.log("Ready!");
})
ModuleLoader(Discord,Mods,Osu)
Discord.connect();