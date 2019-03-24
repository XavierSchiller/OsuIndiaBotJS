const embed = require("../embedCreator");
module.exports = async function setUser(Osu, Discord, msg, msgargs, db) {
	var sendstr;
	var userID = msg.author.id;
	var osuUserName = msgargs[0];
	if (msgargs.length === 0) {
		sendstr = "Enter a name for registering.";
	}
	db.find({
		user: osuUserName
	}, (err, docs) => {
		if (docs.length > 0) sendstr = "You've Already Set your Name!";
		else {
			sendstr = "Nameset!";
		}
	});
	var em = new embed("Username Confirmation.", sendstr);
	Discord.createMessage(msg.channel.id, em.construct());
};