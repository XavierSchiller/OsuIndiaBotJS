var embed = require('../embedCreator');
module.exports = async function GetUserScores(Osu, Discord, msg, msgargs) {
    if (msgargs.length == 0) {
        var em = new embed("You Idiot, Provide your profile first!", "Hmph! You should tell me your name first!");
        em.withAuthor(msg.author.username, msg.author.avatarURL);
        em.Withimg("https://i.imgur.com/F5FIC4T.jpg");
        Discord.createMessage(msg.channel.id, em);
    }
    else {
        msgargs.forEach(async function (user) {
            try {
                let Info = await Osu.getUser({ u: user });
                var desc = `Rank:${Info.pp.rank}
                **PP:${Info.pp.raw}**
                Level:${Info.level}
                Country:${Info.country}
                CountryRank:${Info.pp.countryRank}
                PlayCount:${Info.counts.plays}
                Accuracy:${Info.accuracyFormatted}`;
                var em = new embed(`Here's what you *probably* need...?`, desc);
                em.withAuthor(user, `https://osu.ppy.sh/images/flags/${Info.country}.png`);
                em.Withthumb(`https://a.ppy.sh/${Info.id}`);
                Discord.createMessage(msg.channel.id, em);
            }
            catch (err) {
                console.log(err);
                var em = new embed("Apparently you don't exist!", "Atleast make sure you exist, you know?");
                em.withAuthor(msg.author.username, msg.author.avatarURL);
                em.Withimg('https://i.imgur.com/dtMkTAs.jpg');
                Discord.createMessage(msg.channel.id, em);
            }
        });
    }
}