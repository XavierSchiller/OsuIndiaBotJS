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
                image: {
                    url: 'https://imgur.com/a/suRVv6Q' //Tsundere Chitoge lmfao 
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
            Discord.createMessage(msg.channel.id, {
                embed: {
                    title: "Apparently you don't exist!",
                    description: "Atleast make sure you exist, you know?",
                    color: 0xFF000A,
                    author: {
                        name: msg.author.username,
                        icon_url: msg.author.avatarURL
                    },
                    image: {
                        url: 'https://imgur.com/a/X10WWpx' //Mad expression
                    }
                }
            });
        }
    });
}


exports.GetUserScores = async function (Osu, Discord, msg, msgargs) {
    if (msgargs.length == 0) {
        Discord.createMessage(msg.channel.id, {
            embed: {
                title: "You Idiot! Provide your Profile First!",
                description: "How do I tell your Score without you?",
                color: 0xFF000A,
                author: {
                    name: msg.author.username,
                    icon_url: msg.author.avatarURL
                },
                image: {
                    url: 'https://i.imgur.com/F5FIC4T.jpg' //Tsundere Chitoge lmfao 
                }
            }
        });
    }
    try {
        msgargs.forEach(user => {
            Osu.getUserBest({ u: user, m: '0'}).then(Info => {
                var desc;
                Info.forEach(element => {
                    Osu.getBeatmaps({b: Info.beatmapId}).then(beatmapInfo => {
                        desc += `${beatmapInfo.title}[${beatmapInfo.version}]}
                        PP: ${Info.pp} | Combo:${Info.maxCombo}/${beatmapInfo.maxCombo}| Akkoracy here`
                    })
                });
                Discord.createMessage(msg.channel.id, {
                    embed:{
                        title: `Unimpressive best scores for ${Info.name}.`,
                        description: desc,
                        color: 0xFF000A,
                        author: {
                            name: msg.author.username,
                            icon_url: msg.author.avatarURL
                        }
                    }
                })
            })
        })
        let usersBest = await Osu.getUserBest()
    }
    catch (err) {
        console.log(err)
        Discord.createMessage(msg.channel.id, {
            embed: {
                title: "Apparently you don't exist!",
                description: "Atleast make sure you exist, you know?",
                color: 0xFF000A,
                author: {
                    name: msg.author.username,
                    icon_url: msg.author.avatarURL
                },
                image: {
                    url: 'https://i.imgur.com/dtMkTAs.jpg' //Mad expression
                }
            }
        });
    }
}

function ParseDiff(DiffArr){
    var ProcArr;
    if(DiffArr.length == 0)
        ProcArr.push("NoMod");
    DiffArr.forEach(Diff => {
        switch(Diff){
            case "Hidden": push("HD");
            case "HardRock": push("HR");
            case "DoubleTime": push("DT");
            case "Hidden": push("HD");
            case "Easy" : push("EZ");
        }
    })
    return ProcArr.join("");
}