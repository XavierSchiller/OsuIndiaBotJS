var Tokens = require('./config.json')
var nodeosu = require('node-osu')
var embed = require('./embedCreator')
var Osu = new nodeosu.Api(Tokens.OsuApiKey, {
    notFoundAsError: true,
    completeScores: false
});

async function GetUserScores(user) {
    let UserBest = await Osu.getUserBest({ u: user, m: '0' });
    var desc = "";
    for (element of UserBest) {
        let beatmapInfo = await Osu.getBeatmaps({ b: element.beatmapId })
        desc += `${beatmapInfo[0].title}[${beatmapInfo[0].version}]
                        PP: ${element.pp} | Combo:${element.maxCombo}/${beatmapInfo[0].maxCombo}| Akkoracy here\n`;
    };
    var em = new embed(`Unimpressive best scores for ${user}`, desc);
    em.withAuthor(user, `https://a.ppy.sh/${UserBest[0].user.id}`);
    console.log(em);
}

GetUserScores("Xav")

