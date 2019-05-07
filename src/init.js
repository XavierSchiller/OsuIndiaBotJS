var Discord = require("./discord")
var fs = require('fs')
module.exports = function init() {
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