const Embed = require('../embedCreator');
const util = require('./utils');

module.exports.GetRecent = async function GetRecent(
    Osu,
    Discord,
    msg,
    msgargs,
    db
) {
  if (msgargs.length == 0) {
    db.find(
        {
          discordID: msg.author.id,
        },
        function(err, docs) {
          if (!err || !docs) {
            utils.procUser(Osu, Discord, username, channelID, getUserScores);
          } else Discord.createMessage(msg.channel.id, 'Havent Set your ID!');
        }
    );
  } else {
    utils.procUser(Osu, Discord, username, channelID, getUserScores);
  }
};

async function getUserScores(Osu, user) {
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

module.exports.userScores = getUserScores;
