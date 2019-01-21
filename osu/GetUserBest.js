var embed = require('../embedCreator');


module.exports = async function GetUserScores(/*DiscordOsu*/ Osu, Discord, msg, msgargs, db) {
    if (msgargs.length == 0) {
        var result;
        await db.get("SELECT OsuUsername from USERS WHERE userID = ?", msg.author.id, async (err, row) => {
            if (!err)
                result = await getData(Osu,row.OsuUsername)
            else
                result = "Please Enter a User"
            Discord.createMessage(msg.channel.id, result);
        });
    }
    else {
        try {
            msgargs.forEach(async function (user) {
                var em = await getData(Osu,user);
                Discord.createMessage(msg.channel.id, em);
            });
        }
        catch (err) {
            Discord.createMessage(msg.channel.id,"Something went wrong...")
        }
    }
}

async function getData(Osu, user) {
    let UserBest = await Osu.getUserBest({ u: user, m: '0', limit: 5 });
    var desc = "";
    for (element of UserBest) {
        let beatmapInfo = await Osu.getBeatmaps({ b: element.beatmapId })
        desc += `**${beatmapInfo[0].title}[${beatmapInfo[0].version}]**${ParseDiff(beatmapInfo[0].mods.toString().substring(0, 4))}\n` +
            `**PP: ${element.pp}** | Combo:**${element.maxCombo}**/${beatmapInfo[0].maxCombo}|Acc:${ParseAcc(element.counts)}\n`;
    };
    var em = new embed(`Unimpressive best scores for ${user}`, desc);
    em.withAuthor(user, `https://a.ppy.sh/${UserBest[0].user.id}`);
    return em;
}

function ParseDiff(DiffString) {
    var str = "+";
    if (typeof DiffString == 'undefined')
        return "+NoMod";
    DiffString.forEach((Diff) => {
        switch (Diff) {
            case "Hidden": str += "HD"; break;
            case "HardRock": str += "HR"; break;
            case "DoubleTime": str += "DT"; break;
            case "Flashlight": str += "FL"; break;
        }
    });
}

function ParseAcc(accValues) {
    const total = parseInt(accValues['50']) + parseInt(accValues['100']) + parseInt(accValues['300']) + parseInt(accValues['miss']);
    return ((parseInt(accValues['300']) * 300 + parseInt(accValues['100']) * 100 + parseInt(accValues['50']) * 50) / (total * 300)) * 100;
}