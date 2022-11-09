import INPUT_ARRAY from '../CHALLENGE_A';

type UserEntity = {
    name: string,
    age: number
}[];

/*
    In use of QuickSort algorithm
    Worst case time complexity: O(n^2)
    Wrote in Functional Programming style
*/
function sortByAge(input: UserEntity) {
    // Base case for handling recursive
    if(input.length <= 1) return input;


    var pivot = input[0];

    input.shift();
    var tail = input;

    const left_arr = tail.filter(elem => elem["age"] < pivot["age"]);
    const right_arr = tail.filter(elem => elem["age"] >= pivot["age"])

    const sorted_arr = sortByAge(left_arr).concat(pivot, sortByAge(right_arr))

    return sorted_arr;
}

console.log(sortByAge(INPUT_ARRAY));