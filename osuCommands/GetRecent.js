var embed = require('../embedCreator');
var util = require('./utils');

module.exports = async function GetRecent(Osu, Discord, msg, msgargs, db) {
    if (msgargs.length == 0) {
        db.find({
            discordID: msg.author.id
        }, function(err, docs) {
            if (!err || !docs)
                utils.procUser(Osu, Discord, username, channelID, GetUserScores)
            else
                Discord.createMessage(msg.channel.id, "Havent Set your ID!")
        })
    } else {
        utils.procUser(Osu, Discord, username, channelID, GetUserScores)
    };
}

async function GetUserScores(Osu, user) {
    console.log(user);
    try {
        var Scores = await Osu.getUserRecent({
            u: user,
            limit: 1
        });
        var Beatmapinfo = await Osu.getBeatmaps({
            b: Scores[0].beatmapId
        });
    } catch (err) {
        return new embed("Something Went Wrong", `Error Description:${err}`);
    }
    var desc = `${Beatmapinfo[0].title}+[${Beatmapinfo[0].version}]${util.ParseDiff(Scores[0].mods)}\n`;
    desc += `${Scores[0].maxCombo}/${Beatmapinfo[0].maxCombo} | Acc: ${util.ParseAcc(Scores[0].counts)}%`
    var em = new embed("Recent Score for" + user, desc)
    return em;
}