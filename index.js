// Code your solution here
function findMatching(drivers, string) {
  return  drivers.filter(i => {
    return i.toLowerCase() === string.toLowerCase()
  })
}

function fuzzyMatch(drivers, string) {
  return drivers.filter((elem) => elem.charAt(0) === string.charAt(0))
}

function matchName(drivers, string) {
  return drivers.filter((element) => element.name === string)
}