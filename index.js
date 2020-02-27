function findMatching(array, string) {
    let names = array.filter(function(n) { 
         return n === string || n === string.toLowerCase() || n === string.toUpperCase();
    })
    return names
}

function fuzzyMatch (array, string) {
    let length = string.length
    return array.filter(function(n) {return n.substring(0, length) === string})
}

function matchName(array, string) {
    let newArray = array.filter(function(n) { return n.name === string })
    return newArray
}