// Code your solution here

function findMatching(drivers, characters){
let foundDriver = drivers.filter(function(person) {
    return person.toLowerCase().indexOf(characters.toLowerCase()) !== -1; //we lowercase a persons name. We call index of on the characters
    // in that name. If there are no characters in that persons name that match, we will get a return value of -1.
    // indexOf returns -1 if the value to search for never occurs.
}); 
    if (!!foundDriver){
    return foundDriver
    }
}

function fuzzyMatch(drivers, characters){ 
    let driver = drivers.filter(p => p.startsWith(characters));
    if (!!driver){
    return driver
    }
}

function matchName(drivers, word){
    let person = drivers.filter(human => human.name === word)
    return person
} 