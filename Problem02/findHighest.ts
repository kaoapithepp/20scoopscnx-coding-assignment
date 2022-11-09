import INPUT_ARRAY from "../INPUT";

function findHighest(input: number[]) {
    var temp = input[0];
    for (var i = 0; i < input.length; i++) {
        if (input[i] > temp) temp = input[i]; 
    }
    
    return temp;
}
console.log(findHighest(INPUT_ARRAY));