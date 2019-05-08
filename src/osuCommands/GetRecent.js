const Embed = require('../utils/embedCreator');
const util = require('../utils');
const db = require('../Clients/nedb');
const osu = require('../Clients/osu');

module.exports = async function getRecent(msg, msgargs) {
  const name =
    msgargs.length === 0 ? await db.findByDiscordID(msg.author.id) : msgargs[0];
  return getUserScores(name);
};

/**
 * Fetches a single score from the osuapi and returns a promise.
 * @param {string} user
 */
async function getUserScores(user) {
  console.log(user);
  try {
    const scores = await osu.getUserRecent({
      u: user,
      limit: 1,
    });

    const beatmapInfo = await osu.getBeatmaps({
      b: scores[0].beatmapId,
    });

    let desc = `${beatmapInfo[0].title}+[${
      beatmapInfo[0].version
    }]${util.parseDiff(scores[0].mods)}\n`;
    desc += `${scores[0].maxCombo}/${
      beatmapInfo[0].maxCombo
    } | Acc: ${util.parseAcc(scores[0].counts)}%`;
    const em = new Embed('Recent Score for' + user, desc);
    return em;
  } catch (err) {
    return new Embed('Something Went Wrong', `Error Description:${err}`);
  }
}
