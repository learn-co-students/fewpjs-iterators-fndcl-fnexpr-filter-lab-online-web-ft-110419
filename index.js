// Code your solution here
function findMatching(drivers = [], string = "") {
  return drivers.filter(driver => driver.toLowerCase() == string.toLowerCase());
}

function fuzzyMatch(drivers = [], string = null) {
  let beginingLetters = drivers.map(driver => driver.slice(0, 2));
  let driverResult = beginingLetters.find(driver => driver.includes(string));
  return drivers.filter(driver => driver.includes(driverResult));
}

function matchName(drivers = [], string = "") {
  return drivers.filter(driver => driver.name == string);
}
