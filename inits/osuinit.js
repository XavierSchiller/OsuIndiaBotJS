var Discord = require('../configs/discord')

module.exports = function osuinit() {
    var x = require('../osuCommands')
    Discord.registerCommand("getuser", (message, args) => {
        x.getUser(message, args).then(em => {
            Discord.createMessage(message.channel.id, em)
        })
    }, {
        aliases: ["osu", "user", "profile"],
        caseInsensitive: false,
        cooldown: 5,
        cooldownMessage: "Wait for 5 seconds before using this command again!",
        usage: "top username"
    })


    Discord.registerCommand("getUserBest", (message, args) => {
        x.getUserBest(message, args).then(em => {
            Discord.createMessage(message.channel.id, em)
        })
    }, {
        aliases: ["osu", "user", "profile"],
        caseInsensitive: false,
        cooldown: 5,
        cooldownMessage: "Wait for 5 seconds before using this command again!",
        usage: "top username"
    })


    Discord.registerCommand("getRecent", (message, args) => {
        x.getRecent(message, args).then(em => {
            Discord.createMessage(message.channel.id, em)
        })
    }, {
        aliases: ["osu", "user", "profile"],
        caseInsensitive: false,
        cooldown: 5,
        cooldownMessage: "Wait for 5 seconds before using this command again!",
        usage: "top username"
    })


    Discord.registerCommand("setUser", (message, args) => {
        x.setUser(message, args).then(em => {
            Discord.createMessage(message.channel.id, em)
        })
    }, {
        aliases: ["osu", "user", "profile"],
        caseInsensitive: false,
        cooldown: 5,
        cooldownMessage: "Wait for 5 seconds before using this command again!",
        usage: "top username"
    })
}