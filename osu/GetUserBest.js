const embed = require('../embedCreator');
const util = require('./utils');

import condense from "./utils";


module.exports = async function GetUserScores(Osu, Discord, msg, msgargs, db) {
	if (msgargs.length == 0) {
		var result;
		await db.find({
			discordID: msg.author.id
		}, async (err, docs) => {
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
			try {
				Discord.createMessage(msg.channel.id, "Something went wrong...")
			} catch (err) {
				//Replace with Logger Class here.
			}
		}
	}
}

async function getData(Osu, user) {

	var UserBest = await Osu.getUserBest({
		u: user,
		m: '0',
		limit: 5
	});

	var desc = "";
	for (element of UserBest) {
		//get beatmap information for the maps.
		let beatmapInfo = await Osu.getBeatmaps({
			b: element.beatmapId
		})

		//Add to the description.
		desc += condense("\n",
			`**[${beatmapInfo[0].title} [${beatmapInfo[0].version}]](https://osu.ppy.sh/b/${element.beatmapId})**`,
			`**${util.ParseDiff(element.mods)}** [${beatmapInfo[0].difficulty.rating.substring(0, 4)}\u2605]\n`,
			`**PP: ${element.pp}** \u2b95 ${util.ParseAcc(element.counts)}%\n`,
			`${element.score} \u2b95 x${element.maxCombo}/${beatmapInfo[0].maxCombo} \u2b95`,
			`[${element.counts['300']}/${element.counts['100']}/${element.counts['50']}/${element.counts.miss}]\n`);
	};

	//if the description is empty then throw error
	if (desc === "")
		throw "Description is empty!";

	//Create embed and send back.
	var em = new embed("", desc);
	em.withAuthor(`Top 5 osu! Plays for: ${user}`, `https://a.ppy.sh/${UserBest[0].user.id}`);
	em.Withthumb(`https://a.ppy.sh/${UserBest[0].user.id}`)
	return em;
}