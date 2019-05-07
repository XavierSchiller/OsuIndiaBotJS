var Discord = require("./discord");
var fs = require('fs');

module.exports = function init() {
    initCommands();
    initEvents();
    Discord.connect().catch(err => {
        console.log(err)
    });
}

function initEvents() {
    var events = ["messageCreate"];
    events.forEach(event => {
        Discord.on(event, require("./events/" + event));
    })
}


function initCommands() {
    //get Osu Commands;
    var x = require('./osuCommands')
    Discord.registerCommand("getuser", (message, args) => {
        x.getUser(message, args).then(em => {
            Discord.createMessage(message.channel.id, em)
        })

    })
}