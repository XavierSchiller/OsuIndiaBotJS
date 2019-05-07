var Tokens = require("../configs/config.json");

var nodeosu = require("node-osu");

var osu = new nodeosu.Api(Tokens.OsuApiKey, {
    notFoundAsError: true,
    completeScores: false
});

module.exports = osu;