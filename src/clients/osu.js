const Tokens = require('../configs/config.json');

const nodeosu = require('node-osu');

const Osu = new nodeosu.Api(Tokens.OsuApiKey, {
  notFoundAsError: true,
  completeScores: false,
});

module.exports = Osu;