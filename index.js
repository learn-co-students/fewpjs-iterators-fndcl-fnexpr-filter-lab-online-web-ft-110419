// Code your solution here
function findMatching(source, sought) {
  return source.filter( possibleMatch =>
    possibleMatch.toLowerCase() === sought.toLowerCase()
  )
}

function fuzzyMatch(drivers, driver) {
  return drivers.filter( possibleMatch =>
    possibleMatch.toLowerCase().indexOf(driver.toLowerCase()) === 0
  )
}

function matchName(drivers, driver) {
  return drivers.filter( possibleMatch =>
    possibleMatch.name === driver
  )
}
