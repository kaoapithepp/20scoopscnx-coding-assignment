import INPUT_ARRAY from '../CHALLENGE_A';

interface UserProps {
    name: string;
    age: number;
};

type UserEntity = UserProps[];

function findHighestByAge(input: UserEntity) {
    var compare = input[0];
    for (var i = 0; i < input.length; i++) {
        if (input[i]["age"] > compare["age"]) compare = input[i]; 
    }
    
    return compare;
}
console.log(findHighestByAge(INPUT_ARRAY));