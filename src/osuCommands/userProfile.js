const utils = require('./utils');
const osu = require('./osu');
const Embed = require('../embedCreator');

module.exports = async function GetUser(msg, msgargs) {
  if (msgargs.length == 0) {
    db.find(
        {
          discordID: msg.author.id,
        },
        function(err, docs) {
          if (!err || !docs) {
            utils.procUser(osu, Discord, username, channelID, getUserData);
          } else Discord.createMessage(msg.channel.id, 'Havent Set your ID!');
        }
    );
  } else {
    utils.procUser(osu, Discord, username, channelID, getUserData);
  }
};

async function getUserData(osu, user) {
  const Info = await osu.getUser({
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
