var embed = require('../embedCreator');
var util = require('./utils');

module.exports = async function GetRecent(Osu, Discord, msg, msgargs,db) {
    if (msgargs.length == 0) {
        var result;
        await db.get("SELECT OsuUsername from USERS WHERE userID = ?", msg.author.id, async (err, row) => {
            if (!err)
                result = await GetUserScores(Osu, row.OsuUsername)
            else
                result = "Please Enter a User"
            Discord.createMessage(msg.channel.id, result);
        });
    }
    else {
        msgargs.forEach(async (user) => {
            try {
                var em = await GetUserScores(Osu, user);
                Discord.createMessage(msg.channel.id, em)
            }
            catch(err)
            {
                console.log(err)
                Discord.createMessage(msg.channel.id,"Please Specify the correct ID.");
            }
        });
    }
}

async function GetUserScores(Osu, user) {
    var Scores = await Osu.getUserRecent({u: user,limit: 1});
    var Beatmapinfo = await Osu.getBeatmaps({b:Scores[0].beatmapId});
    var desc = `${Beatmapinfo[0].title}+[${Beatmapinfo[0].version}]${util.ParseDiff(Scores[0].mods)}\n`;
    desc+= `${Scores[0].maxCombo}/${Beatmapinfo[0].maxCombo} | Acc: ${util.ParseAcc(Scores[0].counts)}%`
    var em = new embed("Recent Score for"+user,desc)
    return em;
}
