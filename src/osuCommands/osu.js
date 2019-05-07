const Tokens = require('../config.json');

const nodeosu = require('node-osu');

const osu = new nodeosu.Api(Tokens.OsuApiKey, {
  notFoundAsError: true,
  completeScores: false,
});

module.exports = osu;
