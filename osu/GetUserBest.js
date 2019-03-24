var embed = require('../embedCreator');
var util = require('./utils');

module.exports = async function GetUserScores( /*DiscordOsu*/ Osu, Discord, msg, msgargs, db) {
	if (msgargs.length == 0) {
		var result;
		await db.get("SELECT OsuUsername from USERS WHERE userID = ?", msg.author.id, async (err, row) => {
			if (!err)
				result = await getData(Osu, row.OsuUsername)
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
	let UserBest = await Osu.getUserBest({
		u: user,
		m: '0',
		limit: 5
	});
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