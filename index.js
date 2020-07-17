// Code your solution here
function findMatching(drivers, name) {
  return drivers.filter(driver => {
    return driver.toLowerCase() === name.toLowerCase()
  })
}

function fuzzyMatch(drivers, query) {
  const queryLetters = query.split("") // array of each letter of the query

  return drivers.filter(driver => {
    const nameLetters = driver.split("") // array of each letter of the name
    let result

    for (let i = 0; i < queryLetters.length; i++) {
      if (nameLetters[i] === queryLetters[i]) { // if the search letter matches the query letter
        result = true                           //set result to true
      }
    }
    return result // return the result, true or undefined
  })              // if filter receives true, it pushes the driver onto a new array,
}                 // if it receives undefined it will not

function matchName(drivers, name ) {
  return drivers.filter(driver => {
    return driver.name === name
  })
}
