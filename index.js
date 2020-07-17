const { resetHistory } = require("sinon")

// Code your solution here
function findMatching(drivers, string) {
  return drivers.filter(i=> {
    return i.toLowerCase() === string.toLowerCase()
  })
}

function fuzzyMatch(drivers, string) {
  return drivers.filter((i) => i.charAt(0) === string.charAt(0))
}

function matchName(drivers, string) {
  return drivers.filter((i) => i.name === string)
}