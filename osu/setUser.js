module.exports = async function setUser(Osu, Discord, msg, msgargs, db) {
    var sendstr;
    var userID = msg.author.id;
    var osuUserName = msgargs[0];
    if (msgargs.length === 0) {
        sendstr = "Enter a name for registering.";
    }
    db.find({user:osuUserName},(err,docs)=>{
        if(docs.length > 0)
            sendstr = "You've Already Set your Name!";
        else
        {
            sendstr = "Nameset!";
        }
    })
    Discord.createMessage(msg.channel.id,"Enter a name for registering.")
}