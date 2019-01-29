module.exports = async function setChannel(Osu, Discord, msg, args, db) {
    //To set the channel in the given server.
    console.log("Triggered!")
    db.run("INSERT INTO CHANNELS VALUES (?1)", { 1: msg.channel.id }, (err) => {
        if (!err)
            Discord.createMessage(msg.channel.id, "Channel has been registered!");
        else {
            db.run("DELETE FROM CHANNELS WHERE ID = ?1",{1:msg.channel.id},(err)=>
            {
                if(!err)
                    Discord.createMessage(msg.channel.id,"Channel has been deleted!")
            })
        }
    })
}