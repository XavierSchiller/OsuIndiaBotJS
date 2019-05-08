const Embed = require('../utils/embedCreator');

module.exports = async function setUser(msg, msgargs) {
  const sendstr = new Embed();
  // msgargs are seperated by ' ' so 0th arg should be name.
  const osuUserName = msgargs[0];
  if (msgargs.length === 0) {
    // Username to set not Specified.
    sendstr.withTitle('Username Confirmation');
    sendstr.withDesc('You have not set a user to be tracked.');
    Discord.createMessage(msg.channel.id, sendstr);
  } else {
    db.find(
        {
          discordID: msg.author.id,
        }, // If there's no error, do this:
        (err, docs) => {
          if (err) console.log(err);
          else if (docs.length > 0) {
            // Name has been set already, remap to a new name.
            db.update(
                {
                  // Search by discordID because the users are rarted.
                  discordID: msg.author.id,
                },
                {
                  $set: {
                    // Set these feilds only. Do not change anything else.
                    OsuID: osuUserName,
                  },
                }
            );
            sendstr.withTitle('Username Confirmation');
            sendstr.withDesc(`Your username has been set as ${osuUserName}`);
            Discord.createMessage(msg.channel.id, sendstr);
          } else {
            /** Add additional feilds when inserting the player information.
           * Implement secondary DB data fetch.
           * One for the Player Data so that it can be stored locally)(needed?);
           */
            sendstr.withTitle('Username Confirmation');
            sendstr.withDesc(`Your username has been set as ${osuUserName}`);
            Discord.createMessage(msg.channel.id, sendstr);

            db.insert({
              discordID: msg.author.id,
              OsuID: osuUserName,
            }); // DB now has been inserted to. ERROR check is not done. TODO.
          }
        }
    );
  }
};
