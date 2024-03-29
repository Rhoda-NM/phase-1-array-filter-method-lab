// Code your solution here
function findMatching(driversArray, passedString) {
    const matchingDrivers = driversArray.filter((driver) => driver.toUpperCase() == passedString.toUpperCase());
    return matchingDrivers;
}
function fuzzyMatch(driversArray, passedString) {
    const matchingLetter = driversArray.filter((driver) => driver[0] === passedString[0]);
    return matchingLetter;
}
function matchName(driversArray, passedString) {
    const matchingName = driversArray.filter((driver) => driver.name === passedString);
    return matchingName
}