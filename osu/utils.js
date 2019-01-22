module.exports.ParseDiff = function ParseDiff(DiffString) {
    var str = "+";
    if (!DiffString)
        return "+NoMod";
    DiffString.forEach((Diff) => {
        switch (Diff) {
            case "Hidden": str += "HD"; break;
            case "HardRock": str += "HR"; break;
            case "DoubleTime": str += "DT"; break;
            case "Flashlight": str += "FL"; break;
        }
    });
    return str;
}

module.exports.ParseAcc = function ParseAcc(accValues) {
    const total = parseInt(accValues['50']) + parseInt(accValues['100']) + parseInt(accValues['300']) + parseInt(accValues['miss']);
    var acc = ((parseInt(accValues['300']) * 300 + parseInt(accValues['100']) * 100 + parseInt(accValues['50']) * 50) / (total * 300)) * 100;
    return acc.toString().substring(0,4);
}