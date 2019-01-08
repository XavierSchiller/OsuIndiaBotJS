exports.FetchUser = function (Osu, Discord, msg, msgargs) {
    if (msgargs.length == 0) {
        Discord.createMessage(msg.channel.id, {
            embed: {
                title: "You Idiot! Provide your Profile First!",
                description: "Hmph! You should tell me your name first!",
                color: 0xFF000A,
                author: {
                    name: msg.author.username,
                    icon_url: msg.author.avatarURL
                },
                image:{
                    url: 'https://i.ytimg.com/vi/nKxBr1Ly4WU/maxresdefault.jpg'
                }
            }
        });
    }
    msgargs.forEach(user => {
        try {
            Osu.getUser({ u: user }).then(Info => {
                Discord.createMessage(msg.channel.id, {
                    embed: {
                        title: `User Profile for: ${Info.name}`,
                        description: `Rank:${Info.pp.rank}
                                PP:${Info.pp.raw}
                                Level:${Info.level}
                                Country:${Info.country}
                                CRank:${Info.pp.countryRank}
                                PlayCount:${Info.counts.plays}
                                Accuracy:${Info.accuracyFormatted}`,
                        color: 0xFF000A,
                        author: {
                            name: msg.author.username,
                            icon_url: msg.author.avatarURL
                        },
                        thumbnail: {
                            url: `https://a.ppy.sh/${Info.id}`
                        }

                    }
                });
            })
        }
        catch (err) {
            Discord.createMessage(msg.channel.id, `Profile for ${user} is invalid. Check again.`);
        }
    });
}


exports.GetUserScores = function (Osu, Discord, msg, msgargs) {
    if(msgargs.length == 0)
    {

    }
}