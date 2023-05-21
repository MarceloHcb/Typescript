const firstName: string = "Joel";
const age: number = 38;
const brazilian: boolean = false;

function greet(name: string) {
    console.log(`Olá, ${name.toUpperCase()}!`);
}

console.log(greet('abc'));

function getFavoriteNumber(): number {
    return 26;
}
console.log(getFavoriteNumber())

let sum = (a, b) => a + b
sum(1, '2')

function printPersonalInfo2(data: { name: string; birthYear: number }) {
    console.log(`${data.name} was born in ${data.birthYear}.`);
}
printPersonalInfo2({ name: 'Rogerinho', birthYear: 1978 });

const evenNumbers: number[] = [2, 4, 6];
const vowel: string[] = ['a', 'e', 'i', 'o', 'u'];
const booleanValues: boolean[] = [true, false];

evenNumbers.push(8) // Funciona
evenNumbers.push('8') // Erro


let role:any = 10

role =  'kdfnlg'

role = []
role = {}
role.toUpperCase()
// if(typeof role === 'string'){
//     role.toUpperCase()
// }

let ages: unknown = 10
ages = 'jksdf'
ages = true
ages = []

if(typeof ages === 'string'){
    ages.toUpperCase()
}
// ages.toUpperCase()

const greets = (name:string):string => {
    console.log('hello', name);
    return name
    
}

console.log(greets('mclo'));

type User = {
    name: string,
    age: number,
    // address?: string | undefined
    address?: string 
}
// interrogação não funciona fora do objeto
let address: number | null = null

const user: User = {
    name: 'kjhk',
    age: 2,
}

let gr: string = ''
let abc : string | undefined = 'undefined'
function test(a:string) {
    a.toLowerCase()
}

test(abc)