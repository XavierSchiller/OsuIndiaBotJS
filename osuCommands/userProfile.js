var utils = require('./utils');
var osu = require('./osu');


const embed = require('../embedCreator');
module.exports = async function GetUser(msg, msgargs) {
    if (msgargs.length == 0) {
        db.find({
            discordID: msg.author.id
        }, function(err, docs) {
            if (!err || !docs)
                utils.procUser(osu, Discord, username, channelID, GetUserData)
            else
                Discord.createMessage(msg.channel.id, "Havent Set your ID!")
        })
    } else {
        utils.procUser(osu, Discord, username, channelID, GetUserData)
    };
}

async function GetUserData(osu, user) {
    let Info = await osu.getUser({
        u: user
    });

    /*Constructing the Description*/
    var desc = utils.condense("\n",
        `Rank:${Info.pp.rank}`,
        `**PP:${Info.pp.raw}**`,
        `Level:${Info.level}`,
        `Country:${Info.country}`,
        `CountryRank:${Info.pp.countryRank}`,
        `PlayCount:${Info.counts.plays}`,
        `Accuracy:${Info.accuracyFormatted}`)

    var em = new embed(`Here's what you *probably* need...?`, desc);

    em.withAuthor(user, `https://osu.ppy.sh/images/flags/${Info.country}.png`);
    em.Withthumb(`https://a.ppy.sh/${Info.id}`);
    return em;
}