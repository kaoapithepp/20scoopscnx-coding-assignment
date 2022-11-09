const INPUT_ARRAY = require('../CHALLENGE_A');

function findHighestByAge(input) {
    var compare = input[0];
    for (var i = 0; i < input.length; i++) {
        if (input[i]["age"] > compare["age"]) compare = input[i]; 
    }
    
    return compare;
}
console.log(findHighestByAge(INPUT_ARRAY));