// Code your solution here
function findMatching(a, b){
  return a.filter(match =>
    match.toLowerCase() === b.toLowerCase()
  )
}

function fuzzyMatch(a, c){
  return a.filter(match =>
    match.toLowerCase().indexOf(c.toLowerCase()) === 0
  )
}

function matchName(a, d){
  return a.filter(rec => rec.name === d)
}
