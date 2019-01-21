module.exports = async function setUser(Osu, Discord, msg, msgargs, db) {
    var userID = msg.author.id;
    var osuUserName = msgargs[0];
    if (msgargs.length === 0) {
        Discord.createMessage(msg.channel.id,"Enter a name for registering.")
    }
    db.run("Insert into USERS values (?1,?2)", {
        1: userID,
        2: osuUserName
    },
        (err) => {
            console.log(err);
            if (!err)
                Discord.createMessage(msg.channel.id, "Your ID has been registered");
            else
                Discord.createMessage(msg.channel.id, "You've already set your ID!");
        });
}