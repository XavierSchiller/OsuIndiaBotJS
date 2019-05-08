var nodeosu = require("node-osu");

var Tokens = require("./config.json");

var Osu = new nodeosu.Api(Tokens.OsuApiKey, {
    notFoundAsError: true,
    completeScores: false
});

function ParseDiff(DiffString) {
    //If there's nothing in the Diffstring.
    if (!DiffString)
        return "+NoMod";

    //Set the string to add the "+" by default
    var str = "+";

    //For all of the cases in the diffstring -- TO BE ADDED TO
    DiffString.forEach((Diff) => {
        switch (Diff) {
            case "Hidden":
                str += "HD";
                break;
            case "HardRock":
                str += "HR";
                break;
            case "DoubleTime":
                str += "DT";
                break;
            case "Flashlight":
                str += "FL";
                break;
        }
    });

    //constructed string.
    return str;
}

async function getData(Osu, user) {
    this.UserBest = await Osu.getUserBest({
        u: user,
        m: '0',
        limit: 5
    })
    this.desc = "";
    var beatmapInfo = [];
    UserBest.forEach(element => {
        beatmapInfo.push(Osu.getBeatmaps({ b: element.beatmapId }))
    });

    var resolved;
    await Promise.all(beatmapInfo).then(bm => {
        resolved = bm;

    })

    console.log(resolved[0][0]);
    for (var i = 0; i < this.UserBest.length; i++) {
        this.desc += descConstructor(this.UserBest[i], bm[i][0]);
    }


    if (desc === "")
        throw "Description is empty!";

    //Create embed and send back.

    var em = new embed("", desc);
    em.withAuthor(`Top 5 osu! Plays for: ${user}`, `https://a.ppy.sh/${UserBest[0].user.id}`);
    em.Withthumb(`https://a.ppy.sh/${UserBest[0].user.id}`)
    return em;
    console.log(em)
};

function ParseAcc(accValues) {
    //total is the sum of all the notes played.
    const total = parseInt(accValues['50']) + parseInt(accValues['100']) + parseInt(accValues['300']) + parseInt(accValues['miss']);

    //Values from the user is then converted to float.
    var acc = ((parseInt(accValues['300']) * 300 + parseInt(accValues['100']) * 100 + parseInt(accValues['50']) * 50) / (total * 300)) * 100;

    //Trim the substring to less than four significant digits.
    acc = acc.toString().substring(0, 4)

    return acc;
}

function descConstructor(UserInfo, beatmapInfo) {
    var descString = condense("\n",
        `**[${beatmapInfo.title} [${beatmapInfo.version}]](https://osu.ppy.sh/b/${UserInfo.beatmapId})** ` +
        `**${ParseDiff(UserInfo.mods)}** [${beatmapInfo.difficulty.rating.substring(0, 4)}\u2605]`,
        `**PP: ${UserInfo.pp}** \u2b95 ${ParseAcc(UserInfo.counts)}%`,
        `${UserInfo.score} \u2b95 x${UserInfo.maxCombo}/${beatmapInfo.maxCombo} \u2b95` +
        `[${UserInfo.counts['300']}/${UserInfo.counts['100']}/${UserInfo.counts['50']}/${UserInfo.counts.miss}]\n`);
    return descString;
}

function condense(delim, ...strings) {
    //Set delimiter as new line if not defined
    if (!delim)
        delim = "\n";

    //For each in strings, append the string with the delmiter.
    var constring = ""
    strings.forEach(str => {
        constring += str + delim;
    });

    return constring;
}


getData(Osu, "Xav");