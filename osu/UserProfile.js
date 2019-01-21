var embed = require('../embedCreator');
module.exports = async function GetUserScores(Osu, Discord, msg, msgargs, db) {
    if (msgargs.length == 0) {
        var result;
        await db.get("SELECT OsuUsername from USERS WHERE userID = ?", msg.author.id, async (err, row) => {
            if (!err)
                result = await GetUserData(Osu,row.OsuUsername)
            else
                result = "Please Enter a User"
            Discord.createMessage(msg.channel.id, result);
        });

        return 0;
    }

    msgargs.forEach(async function (user) {
        try {
            var em = await GetUserData(Osu, user);
            Discord.createMessage(msg.channel.id, em);
        }
        catch (err) {
            console.log(err);
            Discord.createMessage(msg.channel.id, "Something Went Wrong...");
        }
    });
}

async function GetUserData(Osu, user) {
    let Info = await Osu.getUser({ u: user });

    /*Constructing the Description*/

    var desc = `Rank:${Info.pp.rank}\n`;
    desc += `**PP:${Info.pp.raw}\n`;
    desc += `Level:${Info.level}\n`;
    desc += `Country:${Info.country}\n`;
    desc += `CountryRank:${Info.pp.countryRank}\n`;
    desc += `PlayCount:${Info.counts.plays}\n`;
    desc += `Accuracy:${Info.accuracyFormatted}n`;

    var em = new embed(`Here's what you *probably* need...?`, desc);

    em.withAuthor(user, `https://osu.ppy.sh/images/flags/${Info.country}.png`);
    em.Withthumb(`https://a.ppy.sh/${Info.id}`);
    return em;
}
