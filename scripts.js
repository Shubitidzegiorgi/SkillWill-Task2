// Task 1

/*
მოცემულია მასივი [{name: 'Temo', age: 25},
{name: 'Lasha', age: 21}, {name: 'Ana', age: 28}]
დაწერე ფუნქცია, რომელიც პარამეტრად
მიიღებს user - ების მასივს და დააბრუნებს
ყველაზე პატარა ასაკის მქონე ადამიანის
სახელს
*/

const users = [{name: 'Temo', age: 25},
{name: 'Lasha', age: 21},
{name: 'Anna', age: 28}]

function findYoungestPerson(users) {
    
    let youngest = users[0];

   
    for (let i = 1; i < users.length; i++) {
        if (users[i].age < youngest.age) {
            youngest = users[i]; 
        }
    }

    return youngest.name; 
}



console.log(findYoungestPerson(users));

// Task 2

/*
დაწერე ფუნქცია, რომელიც პარამეტრად
მიიღებს user ობიექტს და დააბრუნებს
იგივე მნიშვნელობების მქონე ახალ
(განსხვავებულ) ობიექტს
*/

let user = {
    name: 'James',
    lastName: 'Bond',
    userName: 'Agent 007',
}


    let clone = Object.assign({}, user); 

    user.name = "sean";

console.log(user, clone);

// Task 3

/*
დაწერე პროგრამა, სადაც ორი a და b
მომხმარებლები აგორებენ კამათელს
მანამ, სანამ არ გაგორდება, რომელიც
უფრო ნაკლებ ცდაში გააგორებს სამიანს ის
არის გამარჯვებული
*/

function rollDice() {    
    return Math.floor(Math.random() * 6) + 1;
}

function rollUntilThree() {
    let aTries = 0;
    let bTries = 0;

    while (true) {
        let rollA = rollDice();
        aTries++;

        if (rollA === 3) {
            return 'Customer A wins with ' + aTries + ' tries';
        }

        let rollB = rollDice();
        bTries++;

        if (rollB === 3) {
            return 'Customer B wins with ' + bTries + ' tries';
        }
    }
}


console.log(rollUntilThree());

