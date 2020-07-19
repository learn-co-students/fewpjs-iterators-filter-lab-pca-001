function findMatching(arrayOfDrivers, stringOfNames) {
  return arrayOfDrivers.filter(driver => driver.toUpperCase() === stringOfNames.toUpperCase())
}

function fuzzyMatch(arrayOfDrivers, stringOfLetters) {
  return arrayOfDrivers.filter(driver => driver.indexOf(stringOfLetters) === 0)
}

function matchName(arrayOfDrivers,stringOfMatchedName){
  return arrayOfDrivers.filter(driver => driver.name === stringOfMatchedName)
}