const NeDb = require('nedb');

const db = new NeDb({
  filename: '../../private/var/Info.db',
});

db.loadDatabase(function(err) {
  if (!err) {
    db.ensureIndex({
      fieldName: 'OsuID',
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

module.exports = {
  findByDiscordID: findByDiscordID,
};
