var recents = require('./GetRecent');

module.exports = async function feed(Osu, Discord, msg, args, db) {
    db.all("SELECT * FROM CHANNELS", (err, row) => {
        if (!err && row)
            row.forEach(element => {
                db.all("SELECT OsuUsername from USERS", async (errUser, rowUser) => {
                    rowUser.forEach(async user => {
                        //var embed = await recents.userScores(Osu, user.OsuUsername);
                        // Discord.createMessage(element.ID, embed);
                    });
                })
            });
    })
}
