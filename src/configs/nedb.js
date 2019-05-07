var nedb = require("nedb"),
    db = new nedb({
        filename: "./Info.db"
    });

db.loadDatabase(function(err) {
    if (!err) db.ensureIndex({
        fieldName: "OsuID",
        unique: true
    });
    db.ensureIndex({
        fieldName: "discordID",
        unique: true
    });
    console.log("Database is Loaded!");
});

module.exports = db;