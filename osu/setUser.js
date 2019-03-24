const embed = require("../embedCreator");


module.exports = async function setUser(Osu, Discord, msg, msgargs, db) {
	var sendstr = new embed();
	var osuUserName = msgargs[0]; //msgargs are seperated by ' ' so 0th arg should be name.

	if (msgargs.length === 0) {
		//Username to set not Specified.
		sendstr.withTitle("Username Confirmation")
		sendstr.withDesc("You have not set a user to be tracked.");
	}

	db.find({
		user: osuUserName
	}, (err, docs) => {
		if (docs.length > 0) {
			//Name has been set already. 
			//TODO:
			//Make the command remap to a new user if specified again.
			sendstr.withTitle("Username Confirmation");
			sendstr.withDesc("Name has already been set.");
		} else {
			//TODO:
			/**Add additional feilds when inserting the player information.
			 * Implement secondary DB data fetch (One for the Player Data so that it can be stored locally)(needed?);
			 */
			sendstr.withTitle("Username Confirmation");
			sendstr.withDesc(`Your username has been set as ${osuUserName}`);

			db.insert({
				discordID: msg.author.id,
				OsuID: osuUserName
			}); //DB now has been inserted to. ERROR check is not done. TODO.
		}
	});
	Discord.createMessage(msg.channel.id, sendstr);
};