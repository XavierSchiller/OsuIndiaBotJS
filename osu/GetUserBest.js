var embed = require('../embedCreator');
module.exports = async function GetUserScores(Osu, Discord, msg, msgargs) {
    if (msgargs.length == 0) {
        var em = new embed("You Idiot, Provide your profile first!", "I can't tell a nobodies profile out of the blue!");
        em.withAuthor(msg.author.username, msg.author.avatarURL);
        em.Withimg("https://i.imgur.com/F5FIC4T.jpg");
        Discord.createMessage(msg.channel.id, em);
    }
    else {
        try {
            msgargs.forEach(async function (user) {
                let UserBest = await Osu.getUserBest({ u: user, m: '0', limit: 5 });
                var desc = "";
                for (element of UserBest) {
                    let beatmapInfo = await Osu.getBeatmaps({ b: element.beatmapId })
                    desc += `${beatmapInfo[0].title}[${beatmapInfo[0].version}]+${ParseDiff()}
                        PP: ${element.pp} | Combo:${element.maxCombo}/${beatmapInfo[0].maxCombo}| Akkoracy here\n`;
                };
                var em = new embed(`Unimpressive best scores for ${user}`, desc);
                em.withAuthor(user, `https://a.ppy.sh/${UserBest[0].user.id}`);
                Discord.createMessage(msg.channel.id, em);
            });
        }
        catch (err) {
            var em = new embed("Apparently, you don't exist!", "Atleast make sure you exist, you know?");
            em.withAuthor(msg.author.username, msg.author.avatarURL);
            em.Withimg('https://i.imgur.com/dtMkTAs.jpg');
            Discord.createMessage(msg.channel.id, em);
        }
    }
}
