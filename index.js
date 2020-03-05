function findMatching(drivers, string) {
    let matches = drivers.filter(function(d) {
        return d === string || d.toLowerCase() === string.toLowerCase();
    });
    return matches
}

function fuzzyMatch(drivers, string) {
    let matches = drivers.filter(function(d) {
        return d.startsWith(string);
    });
    return matches
}

function matchName(drivers, string) {
    let matches = drivers.filter(function(d) {
        return d.name === string;
    });
    return matches
}