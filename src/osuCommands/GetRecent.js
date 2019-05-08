const Embed = require('../utils/embedCreator');
const util = require('../utils');
const db = require('../Clients/nedb');
const Osu = require('../Clients/osu');

module.exports = async function GetRecent(msg, msgargs) {
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
    const Scores = await Osu.getUserRecent({
      u: user,
      limit: 1,
    });
    const Beatmapinfo = await Osu.getBeatmaps({
      b: Scores[0].beatmapId,
    });
    let desc = `${Beatmapinfo[0].title}+[${
      Beatmapinfo[0].version
    }]${util.parseDiff(Scores[0].mods)}\n`;
    desc += `${Scores[0].maxCombo}/${
      Beatmapinfo[0].maxCombo
    } | Acc: ${util.parseAcc(Scores[0].counts)}%`;
    const em = new Embed('Recent Score for' + user, desc);
    return em;
  } catch (err) {
    return new Embed('Something Went Wrong', `Error Description:${err}`);
  }
}
