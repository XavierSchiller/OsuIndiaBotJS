const embed = require("../embedCreator");
module.exports = async function setUser(Osu, Discord, msg, msgargs, db) {
	var sendstr;
	var userID = msg.author.id;
	var osuUserName = msgargs[0];
	if (msgargs.length === 0) {
		sendstr = new embed("Username error", "Enter a name for setting.");
	}
	db.find({
		user: osuUserName
	}, (err, docs) => {
		if (docs.length > 0) {
			sendstr = new embed("Username Confirmation", "Name has been set.")
		} else {
			sendstr = "Nameset!";
			db.insert({
				discordID: msg.author.id,
				OsuID: osuUserName
			})
		}
	});
	Discord.createMessage(msg.channel.id, sendstr);
};