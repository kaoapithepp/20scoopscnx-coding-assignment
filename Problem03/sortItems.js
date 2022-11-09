const INPUT_ARRAY = require('../INPUT');

/*
    In use of QuickSort algorithm
    Worst case time complexity: O(n^2)
    Wrote in Functional Programming style
*/
function sortItems(input) {
    // Base case for handling recursive
    if(input.length <= 1) return input;

    // Chose the first elem as a pivot
    var pivot = input[0];
    // And the entire remain array is a tail
    input.shift();
    var tail = input;

    /*
        Left Array collects which value is less than the pivot.
        Right Array collects greater than or equal to.
    */
    const left_arr = tail.filter(elem => elem < pivot);
    const right_arr = tail.filter(elem => elem >= pivot)

    /*
        Then, we recursive until the rest of the smallest subarray (n > 1)
        and concat them together
    */
    const sorted_arr = sortItems(left_arr).concat(pivot, sortItems(right_arr))

    return sorted_arr;
}

console.log(sortItems(INPUT_ARRAY));