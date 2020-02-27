function findMatching(array, string) {
    let names = array.filter(function(n) { 
         return n === string || n === string.toLowerCase() || n === string.toUpperCase();
    })
    return names
}