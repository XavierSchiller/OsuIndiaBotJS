var embed = require('./embedCreator');
exports.FetchUser = async function (Osu, Discord, msg, msgargs) {
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


exports.GetUserScores = async function (Osu, Discord, msg, msgargs) {
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

function ParseDiff(DiffArr) {
    var ProcArr;
    if (DiffArr.length == 0)
        ProcArr.push("NoMod");
    DiffArr.forEach(Diff => {
        switch (Diff) {
            case "Hidden": push("HD");
            case "HardRock": push("HR");
            case "DoubleTime": push("DT");
            case "Hidden": push("HD");
            case "Easy": push("EZ");
        }
    })
    return ProcArr.join("");
}