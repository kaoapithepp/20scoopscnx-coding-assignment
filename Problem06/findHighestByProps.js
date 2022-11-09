const INPUT_ARRAY = require('../CHALLENGE_B');

const PROPERTY = "children";

function findHighestByProps(input, props) {
    var compare = input[0];
    for (var i = 0; i < input.length; i++) {
        if (input[i][props] > compare[props]) compare = input[i]; 
    }
    return compare;
}
console.log(findHighestByProps(INPUT_ARRAY, PROPERTY));