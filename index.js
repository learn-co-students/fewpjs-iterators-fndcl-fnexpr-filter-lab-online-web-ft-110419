// Code your solution here

function findMatching(drivers, d) {
  return drivers.filter( match =>
    match.toLowerCase() === d.toLowerCase()
  )
}

function fuzzyMatch(drivers, s) {
  return drivers.filter( match =>
    match.toLowerCase().indexOf(s.toLowerCase()) === 0
  )
}

function matchName(drivers, driverName) {
  return drivers.filter( record => record.name === driverName)
}