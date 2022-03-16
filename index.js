// Code your solution here
function findMatching(drivers, name){
    return drivers.filter((match) => match.toLowerCase() === name.toLowerCase());
 }

 function fuzzyMatch(drivers,letters){
    return drivers.filter(
        (maybeMatch) =>
          maybeMatch.toLowerCase().indexOf(letters.toLowerCase()) === 0
      );
    }

function matchName(drivers, nameMatch){
    return drivers.filter((record) => record.name === nameMatch);
}