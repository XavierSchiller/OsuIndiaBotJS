var utils = require('./utils')

const embed = require('../embedCreator');
module.exports = async function GetUserScores(Osu, Discord, msg, msgargs, db) {
    if (msgargs.length == 0) {
        db.find({
            discordID: msg.author.id
        }, function(err, docs) {
            if (!err || !docs)
                procUser(Osu, Discord, docs[0].OsuID, msg.channel.id);
            else
                Discord.createMessage(msg.channel.id, "Havent Set your ID!")
        })
    } else {
        procUser(Osu, Discord, msgargs[0], msg.channel.id);
    };
}

async function procUser(Osu, Discord, username, channelID) {
    try {
        var em = await GetUserData(Osu, username);
        Discord.createMessage(channelID, em);
    } catch (err) {
        Discord.createMessage(channelID, `Something went wrong: ${err}`)
    }
}

async function GetUserData(Osu, user) {
    let Info = await Osu.getUser({
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