const embed = require('../embedCreator');
const utils = require('./utils');



module.exports = async function GetUserScores(Osu, Discord, msg, msgargs, db) {
    if (msgargs.length === 0) {
        db.find({
            discordID: msg.author.id
        }, function(err, docs) {
            if (!err || !docs) {
                procUser(docs[0].OsuID, Osu, Discord, msg.channel.id)
            } else
                Discord.createMessage(msg.channel.id, "You did not set your ID!")
        });
    } else
        procUser(msgargs[0], Osu, Discord, msg.channel.id)
}

async function procUser(username, Osu, Discord, channelID) {
    try {
        var em = await getData(Osu, username);
        Discord.createMessage(channelID, em);
    } catch (err) {
        Discord.createMessage(channelID, `Something went wrong: ${err}`)
    }
}

async function getData(Osu, user) {
    var UserBest = await Osu.getUserBest({
        u: user,
        m: '0',
        limit: 5
    })

    var desc = "";
    for (element of UserBest) {
        //get beatmap information for the maps.
        var beatmapInfo = await Osu.getBeatmaps({
            b: element.beatmapId
        })

        desc = descConstructor(desc, element, beatmapInfo);
    }

    if (desc === "")
        throw "Description is empty!";

    //Create embed and send back.
    var em = new embed("", desc);
    em.withAuthor(`Top 5 osu! Plays for: ${user}`, `https://a.ppy.sh/${UserBest[0].user.id}`);
    em.Withthumb(`https://a.ppy.sh/${UserBest[0].user.id}`)
    return em;
};

function descConstructor(descString, UserInfo, beatmapInfo) {
    descString += utils.condense("\n",
        `**[${beatmapInfo[0].title} [${beatmapInfo[0].version}]](https://osu.ppy.sh/b/${UserInfo.beatmapId})** ` +
        `**${utils.ParseDiff(UserInfo.mods)}** [${beatmapInfo[0].difficulty.rating.substring(0, 4)}\u2605]`,
        `**PP: ${UserInfo.pp}** \u2b95 ${utils.ParseAcc(UserInfo.counts)}%`,
        `${UserInfo.score} \u2b95 x${UserInfo.maxCombo}/${beatmapInfo[0].maxCombo} \u2b95` +
        `[${UserInfo.counts['300']}/${UserInfo.counts['100']}/${UserInfo.counts['50']}/${UserInfo.counts.miss}]\n`);
    return descString;
}