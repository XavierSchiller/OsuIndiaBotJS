var sqlconn = require('sqlite3');

var db = new sqlconn.Database('Info.db', (err) => {
    if (err === 'undefined')
        console.log("Database Did not open, Please restart the program!")
    else {
        db.run("CREATE TABLE IF NOT EXISTS USERS(userID int, OsuUsername text)");
        console.log("Table Created!")
    }
});
