const INPUT_ARRAY = require('../INPUT');

function findHighest(input) {
    var temp = input[0];
    for (var i = 0; i < input.length; i++) {
        if (input[i] > temp) temp = input[i]; 
    }
    
    return temp;
}
console.log(findHighest(INPUT_ARRAY));