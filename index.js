function findMatching(array, string){
     return array.filter(item => item.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(array, string){
	return array.filter(item => item.slice(0, string.length).toLowerCase() === string.toLowerCase())
}

function matchName(array, string){
	return array.filter(item => item.name === string)
}