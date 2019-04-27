import condense from "./utils"

const embed = require('../embedCreator');
module.exports = async function GetUserScores(Osu, Discord, msg, msgargs, db) {
	if (msgargs.length == 0) {
		db.find({
			DiscordId: msg.author.id
		}, async function (err, docs) {
			if (!err && docs) {
				var result = await GetUserData(Osu, docs.username);
			}
			Discord.createMessage(msg.channel.id, result);
		})
	} else {
		msgargs.forEach(async function (user) {
			try {
				var em = await GetUserData(Osu, user);
				Discord.createMessage(msg.channel.id, em);
			} catch (err) {
				console.log(err);
				Discord.createMessage(msg.channel.id, "User Doesn't exist!");
			}
		});
	}
}

async function GetUserData(Osu, user) {
	let Info = await Osu.getUser({
		u: user
	});

	/*Constructing the Description*/
	var desc = condense("\n",
		`Rank:${Info.pp.rank}`,
		`**PP:${Info.pp.raw}*`,
		`Level:${Info.level}`,
		`Country:${Info.country}`,
		`CountryRank:${Info.pp.countryRank}`,
		`PlayCount:${Info.counts.plays}`,
		`Accuracy:${Info.accuracyFormatted}`)

	var em = new embed(`Here's what you *probably* need...?`, desc);

	em.withAuthor(user, `https://osu.ppy.sh/images/flags/${Info.country}.png`);
	em.Withthumb(`https://a.ppy.sh/${Info.id}`);
	return em;
}