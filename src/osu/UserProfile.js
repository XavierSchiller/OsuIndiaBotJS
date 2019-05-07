const utils = require('./utils');
const Embed = require('../embedCreator');

module.exports = function GetUserScores(Osu, Discord, msg, msgargs, db) {
  if (msgargs.length == 0) {
    db.find(
        {
          discordID: msg.author.id,
        },
        function(err, docs) {
          if (!err || !docs) {
            utils.procUser(Osu, Discord, username, channelID, GetUserData);
          } else Discord.createMessage(msg.channel.id, 'Havent Set your ID!');
        }
    );
  } else {
    utils.procUser(Osu, Discord, username, channelID, GetUserData);
  }
};

async function GetUserData(Osu, user) {
  const Info = await Osu.getUser({
    u: user,
  });

  /* Constructing the Description*/
  const desc = utils.condense(
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
