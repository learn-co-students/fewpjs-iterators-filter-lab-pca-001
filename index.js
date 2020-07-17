// Code your solution here
function findMatching(drivers, name){
  return drivers.filter(drivername => drivername.toUpperCase() === name.toUpperCase())
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => driver.indexOf(letters) === 0)
}

function matchName(drivers, matchname) {
  return drivers.filter(driver => driver.name === matchname)
}