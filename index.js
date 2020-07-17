// Code your solution here
function findMatching(drivers, string) {
  return  drivers.filter(i => {
    return i.toLowerCase() === string.toLowerCase()
  })
}

function fuzzyMatch(drivers, string) {
  return drivers.filter((elem) => elem.indexOf(string) === 0)
  //The indexOf() method returns the position of the first occurrence of a specified value in a string.
  // in this case we are saying where the first letter(index 0) of element and string match
}

function matchName(drivers, string) {
  return drivers.filter((element) => element.name === string)
}