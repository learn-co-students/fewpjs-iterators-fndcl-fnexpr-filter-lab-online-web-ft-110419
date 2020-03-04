function findMatching(drivers, finder) {
    let found = drivers.filter(f => {
        return f.toLowerCase() === finder.toLowerCase()
    })    
    return found
}

function matchName(drivers, finder) {
    let found = drivers.filter(f => {
        return f.name === finder
    })  
    return found  
}

function fuzzyMatch(drivers, finder) {
    let len = finder.length
    let found = drivers.filter(f => {
        return f.slice(0, len) === finder 
    })
    return found
}