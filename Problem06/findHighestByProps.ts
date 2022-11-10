import INPUT_ARRAY from '../CHALLENGE_B';

interface UserProps {
    name: string;
    age: number;
    salary: number;
    children: number
};

type UserEntity = UserProps[];

const PROPERTY = "children";

function findHighestByProps(input: UserEntity, props: string) {
    var compare = input[0];
    for (var i = 0; i < input.length; i++) {
        if (input[i][props] > compare[props]) compare = input[i]; 
    }
    return compare;
}
console.log(findHighestByProps(INPUT_ARRAY, PROPERTY));