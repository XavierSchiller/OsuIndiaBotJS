var embed = require('../embedCreator');
var util = require('./utils');

module.exports = async function GetUserScores(Osu, Discord, msg, msgargs, db) {
	if (msgargs.length == 0) {
		var result;
		await db.find({discordID: msg.author.id}, async (err, docs) => {
			if (!err)
				result = await getData(Osu, docs[0].OsuUsername)
			else
				result = "Please Enter a User"
			Discord.createMessage(msg.channel.id, result);
		});
	} else {
		try {
			msgargs.forEach(async function (user) {
				var em = await getData(Osu, user);
				Discord.createMessage(msg.channel.id, em);
			});
		} catch (err) {
			Discord.createMessage(msg.channel.id, "Something went wrong...")
		}
	}
}

async function getData(Osu, user) {
	var UserBest;
	try {
		UserBest = await Osu.getUserBest({
			u: user,
			m: '0',
			limit: 5
		});
	} catch (err) {
		return em = new embed("Something Went Wrong", `${err}`);
	}
	var desc = "";
	for (element of UserBest) {
		let beatmapInfo = await Osu.getBeatmaps({
			b: element.beatmapId
		})
		desc += `**${beatmapInfo[0].title}[${beatmapInfo[0].version}]**${util.ParseDiff(element.mods)}\n` +
			`**PP: ${element.pp}** | Combo:**${element.maxCombo}**/${beatmapInfo[0].maxCombo}|Acc:${util.ParseAcc(element.counts)}\n`;
	};
	var em = new embed(`Unimpressive best scores for ${user}`, desc);
	em.withAuthor(user, `https://a.ppy.sh/${UserBest[0].user.id}`);
	return em;
}