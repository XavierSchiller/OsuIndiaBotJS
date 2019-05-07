const Embed = require('../embedCreator');
const utils = require('./utils');

module.exports.GetUserScores = async function GetUserScores(
    Osu,
    Discord,
    msg,
    msgargs,
    db
) {
  if (msgargs.length === 0) {
    db.find(
        {
          discordID: msg.author.id,
        },
        function(err, docs) {
          if (!err || !docs) {
            procUser(docs[0].OsuID, Osu, Discord, msg.channel.id);
          } else {
            Discord.createMessage(msg.channel.id, 'You did not set your ID!');
          }
        }
    );
  } else procUser(msgargs[0], Osu, Discord, msg.channel.id);
};

async function procUser(username, Osu, Discord, channelID) {
  try {
    const em = await getData(Osu, username);
    Discord.createMessage(channelID, em);
  } catch (err) {
    console.log(err);
    Discord.createMessage(channelID, `Something went wrong: ${err}`);
  }
}

async function getData(Osu, user) {
  // Get user data.
  userBest = await Osu.getuserBest({
    u: user,
    m: '0',
    limit: 5,
  });

  const beatmapInfo = [];
  let resolvedBeatmapInfo = [];

  // Get beatmap information through promises.
  userBest.forEach((element) => {
    beatmapInfo.push(Osu.getBeatmaps({b: element.beatmapId}));
  });
  // resolve all promises.
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

function descConstructor(UserInfo, beatmapInfo) {
  utils.condense(
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
