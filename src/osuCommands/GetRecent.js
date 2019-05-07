const embed = require('../utils/embedCreator');
const util = require('./utils');
const db = require('../configs/nedb');
const Osu = require('../configs/osu');
module.exports = function GetRecent(msg, msgargs) {
	let em;
	if (msgargs.length == 0) {
		em = db.find(
			{
				discordID: msg.author.id,
			},
			(err, docs) => {
				debugger;
				if (!err || !docs) {
					return getUserScores(docs[0].OsuID);
				} else {
					return new embed(
						'ID Has not been set',
						'Set your ID to utilize this command!'
					);
				}
			}
		);
	} else {
		em = getUserScores(msgargs[0]);
	}
	console.log(em);
	return em;
};

/**
 * Fetches a single score from the osuapi and returns a promise.
 * @param {string} user
 */
async function getUserScores(user) {
	console.log(user);
	try {
		const Scores = await Osu.getUserRecent({
			u: user,
			limit: 1,
		});
		const Beatmapinfo = await Osu.getBeatmaps({
			b: Scores[0].beatmapId,
		});
	} catch (err) {
		return new embed('Something Went Wrong', `Error Description:${err}`);
	}
	let desc = `${Beatmapinfo[0].title}+[${
		Beatmapinfo[0].version
	}]${util.ParseDiff(Scores[0].mods)}\n`;
	desc += `${Scores[0].maxCombo}/${
		Beatmapinfo[0].maxCombo
	} | Acc: ${util.ParseAcc(Scores[0].counts)}%`;
	const em = new embed('Recent Score for' + user, desc);
	return em;
}