var Tokens = require('./config.json')
var nodeosu = require('node-osu')
var Osu = new nodeosu.Api(Tokens.OsuApiKey, {
    notFoundAsError: true,
    completeScores: false
});

async function GetUserScores(user)
{
    let userScores = await Osu.getUserBest({u: user});
    userScores.forEach(async function GetBeatmap(user){
        let beatmapinfo = await Osu.getBeatmaps({b: user.beatmapId});
        console.log(beatmapinfo[0].title);
    });
}

GetUserScores("Xav")