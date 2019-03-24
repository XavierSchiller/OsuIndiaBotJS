var embed = require('../embedCreator');
var util = require('./utils');

module.exports.GetRecent = async function GetRecent(Osu, Discord, msg, msgargs, db) {
	//To Get the recent scores of the given User.
	var res;
	if (msgargs.length == 0) {
		//What happens when there's no username specified.
		//Searching for username
		db.find({
			discordID: msg.author.id
		}, (err, docs) => {
			//if found, then docs is not empty
			if (docs.length == 0) {
				res = new embed("Recent Scores", "You were not found in the database, set your username.");
			} else {
				res = await GetUserScores(Osu, docs[0].OsuID);
			}
		})
	} else {
		var username = msgargs[0];
	}
	Discord.sendMessage(msg.channel.id, res.construct())
}

module.exports.userScores = async function GetUserScores(Osu, user) {
	var Scores = await Osu.getUserRecent({
		u: user,
		limit: 1
	});
	var Beatmapinfo = await Osu.getBeatmaps({
		b: Scores[0].beatmapId
	});
	var desc = `${Beatmapinfo[0].title}+[${Beatmapinfo[0].version}]${util.ParseDiff(Scores[0].mods)}\n`;
	desc += `${Scores[0].maxCombo}/${Beatmapinfo[0].maxCombo} | Acc: ${util.ParseAcc(Scores[0].counts)}%`
	var em = new embed("Recent Score for" + user, desc)
	return em;
}