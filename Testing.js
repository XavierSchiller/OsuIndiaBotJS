var Tokens = require('./config.json')
var nodeosu = require('node-osu')
var embed = require('./embedCreator')
var Osu = new nodeosu.Api(Tokens.OsuApiKey, {
    notFoundAsError: true,
    completeScores: false
});

var disc = require('./osu');