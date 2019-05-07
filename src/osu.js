const Tokens = require('../config/config.json');

const nodeosu = require('node-osu');

const Osu = new nodeosu.Api(Tokens.OsuApiKey, {
  notFoundAsError: true,
  completeScores: false,
});

export default Osu;
