const NeDb = require('nedb');

const db = new NeDb({
  filename: '../../private/var/Info.db',
});

db.loadDatabase(function(err) {
  if (!err) {
    db.ensureIndex({
      fieldName: 'osuID',
      unique: true,
    });
  }
  db.ensureIndex({
    fieldName: 'discordID',
    unique: true,
  });
  console.log('Database is Loaded!');
});

/**
 * Returns a osuUsername based on their DiscordID
 * @param {string} DiscordID The Users' discordID.
 * @return {string} osuUsername.
 */
function findByDiscordID(DiscordID) {
  return new Promise((resolve, reject) => {
    db.find(
        {
          discordID: DiscordID,
        },
        (err, docs) => {
          if (!err) resolve(docs);
          else reject(err);
        }
    );
  });
}
/**
 * Inserts/Updates the record into the database.
 * @param {*} disId Discord ID of the user.
 * @param {*} osuId Osu ID of the user.
 */
function setUser(disId, osuId) {
  findByDiscordID(DiscordID).then((e) => {
    if (e.length === 0) {
      db.insert({osuID: osuId, discordID: disId});
    } else {
      db.update(
          {
            discordID: disId,
          },
          {
            $set: {
              osuID: osuId,
            },
          }
      );
    }
  });
}

module.exports = {
  findByDiscordID: findByDiscordID,
  setUser: setUser,
};
