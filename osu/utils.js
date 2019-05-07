module.exports.ParseDiff = function ParseDiff(DiffString) {
    //If there's nothing in the Diffstring.
    if (!DiffString)
        return "+NoMod";

    //Set the string to add the "+" by default
    var str = "+";

    //For all of the cases in the diffstring -- TO BE ADDED TO
    DiffString.forEach((Diff) => {
        switch (Diff) {
            case "Hidden":
                str += "HD";
                break;
            case "HardRock":
                str += "HR";
                break;
            case "DoubleTime":
                str += "DT";
                break;
            case "Flashlight":
                str += "FL";
                break;
        }
    });

    //constructed string.
    return str;
}

module.exports.ParseAcc = function ParseAcc(accValues) {
    //total is the sum of all the notes played.
    const total = parseInt(accValues['50']) + parseInt(accValues['100']) + parseInt(accValues['300']) + parseInt(accValues['miss']);

    //Values from the user is then converted to float.
    var acc = ((parseInt(accValues['300']) * 300 + parseInt(accValues['100']) * 100 + parseInt(accValues['50']) * 50) / (total * 300)) * 100;

    //Trim the substring to less than four significant digits.
    acc = acc.toString().substring(0, 4)

    return acc;
}

module.exports.condense = function condense(delim, ...strings) {
    //Set delimiter as new line if not defined
    if (!delim)
        delim = "\n";

    //For each in strings, append the string with the delmiter.
    var constring = ""
    strings.forEach(str => {
        constring += str + delim;
    });

    return constring;
}

async function procUser(username, Osu, Discord, channelID, callback) {
    try {
        var em = await callback(Osu, username);
        Discord.createMessage(channelID, em);
    } catch (err) {
        Discord.createMessage(channelID, `Something went wrong: ${err}`)
    }
}