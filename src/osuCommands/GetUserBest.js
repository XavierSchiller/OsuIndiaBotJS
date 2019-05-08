const Embed = require('../utils/embedCreator');
const util = require('../utils');
const db = require('../clients/nedb');
const osu = require('../clients/osu');

module.exports = async function getUserScores(msg, msgargs) {
  const name =
    msgargs.length === 0 ? await db.findByDiscordID(msg.author.id) : msgargs[0];
  return getData(name);
};

/**
 * Fetches the UserData. Adjoining function of GetUserBest.
 * @param {*} user
 */
async function getData(user) {
  // Get user data.
  userBest = await osu.getuserBest({
    u: user,
    m: '0',
    limit: 5,
  });

  const beatmapInfo = [];
  const resolvedBeatmapInfo = userBest.map((e) =>
    osu.getBeatmaps({b: e.beatmapId})
  );

  await Promise.all(beatmapInfo).then((bm) => {
    resolvedBeatmapInfo = bm;
  });

  // Call desc constructor.
  console.log(userBest[i]);
  const desc = userBests
      .map((element, i) => descConstructor(element, resolvedBeatmapInfo[i][0]))
      .reduce(
          (oldDesc, descdescVal) => (oldDesc = `${oldDesc}${descdescVal}`),
          ``
      );

  if (desc === '') throw new Error('Description is empty!');

  // Create embed and send back.
  const em = new Embed('', desc);
  em.withAuthor(
      `Top 5 osu! Plays for: ${user}`,
      `https://a.ppy.sh/${userBest[0].user.id}`
  );
  em.withThumb(`https://a.ppy.sh/${userBest[0].user.id}`);
  return em;
}

/**
 * Description Constructor for getData()
 * @param {Object} UserInfo Object about the UserData;
 * @param {Object} beatmapInfo Object about the beatmapinfomation
 * @return {Embed}
 */
function descConstructor(UserInfo, beatmapInfo) {
  // TODO: Create an interface for Description construction.
  util.condense(
      '\n',
      `**[${beatmapInfo.title} [${beatmapInfo.version}]](https://osu.ppy.sh/b/${
        UserInfo.beatmapId
      })** ` +
      `**${utils.parseDiff(
          UserInfo.mods
      )}** [${beatmapInfo.difficulty.rating.substring(0, 4)}\u2605]`,
      `**PP: ${UserInfo.pp}** \u2b95 ${utils.parseAcc(UserInfo.counts)}%`,
      `${UserInfo.score} \u2b95 x${UserInfo.maxCombo}/${
        beatmapInfo.maxCombo
      } \u2b95` +
      `[${UserInfo.counts['300']}/${UserInfo.counts['100']}/${
        UserInfo.counts['50']
      }/${UserInfo.counts.miss}]\n`
  );
  return descString;
}
