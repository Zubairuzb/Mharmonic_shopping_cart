let user = "zubair"

let newNumber: number;

newNumber = "musa"


let newBool: boolean;
newBool = 33


let newUser: string | number;

newUser = "Musa"
newUser = 23
newUser = true;

//ARRAY
let arr = ['Ahmad', 'Sani', 'Mahmud']

arr.push(4)
arr.push("Munir")


let newArray: string[]

newArray =[3,4]

let anotherArray: (string | number)[];

anotherArray = [32,"Zubair"]

let user1 = {
    name: 'Musa',
    id: 1,
    isAlive: true;
}

//error - assigned values of other type other than the initial values 
user1.isAlive = 'yes'
user1.name = 21;
user1.id = true;

//Correct - Values were assined according to the first initial value's type
user1.name = "Ahmad";
user1.id = 43;
user1.isAlive = false;


