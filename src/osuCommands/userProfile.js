const Embed = require('../utils/embedCreator');
const util = require('../utils');
const db = require('../clients/nedb');
const osu = require('../clients/osu');

module.exports = async function getUser(msg, msgargs) {
  const name =
    msgargs.length === 0 ? await db.findByDiscordID(msg.author.id) : msgargs[0];
  return getUserData(name);
};


/**
 * Adjoining function to getUser to fetch the profile of the user.
 * @param {string} user osu username of the user.
 */
async function getUserData(user) {
  const Info = await osu.getUser({
    u: user,
  });

  /* Constructing the Description*/
  const desc = util.condense(
      '\n',
      `Rank:${Info.pp.rank}`,
      `**PP:${Info.pp.raw}**`,
      `Level:${Info.level}`,
      `Country:${Info.country}`,
      `CountryRank:${Info.pp.countryRank}`,
      `PlayCount:${Info.counts.plays}`,
      `Accuracy:${Info.accuracyFormatted}`
  );

  const em = new Embed(`Here's what you *probably* need...?`, desc);

  em.withAuthor(user, `https://osu.ppy.sh/images/flags/${Info.country}.png`);
  em.withThumb(`https://a.ppy.sh/${Info.id}`);
  return em;
}
