const NeDb = require('nedb');

db = new NeDb({
  filename: '../private/var/Info.db',
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
  Discord.connect();
});
