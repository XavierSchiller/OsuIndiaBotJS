var Tokens = require("../config/config.json");

var nodeosu = require("node-osu");

var Osu = new nodeosu.Api(Tokens.OsuApiKey, {
    notFoundAsError: true,
    completeScores: false
});

export default Osu;