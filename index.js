// Code your solution here

function findMatching(driversArr, str){
    // let drivers = driversArr.map(n => n.toLowerCase());
    let match = driversArr.filter(n => {return n.toLowerCase() == str.toLowerCase();})
    return match;
};

function fuzzyMatch(driversArr, str){
    let letter = str.split('')[0];
    // let drivers = driversArr.map(n => n.toLowerCase());
    let match = driversArr.filter(n => {return n.startsWith(letter);})
    return match


}

function matchName(driversArr, str){
    let match = driversArr.filter(n => {return n.name === str;})
    return match;
}