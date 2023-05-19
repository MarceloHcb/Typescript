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

function printPersonalInfo(data: { name: string; birthYear: number }) {
    console.log(`${data.name} was born in ${data.birthYear}.`);
}
printPersonalInfo({ name: 'Rogerinho', birthYear: 1978 });

const evenNumbers: number[] = [2, 4, 6];
const vowel: string[] = ['a', 'e', 'i', 'o', 'u'];
const booleanValues: boolean[] = [true, false];

evenNumbers.push(8) // Funciona
evenNumbers.push('8') // Erro

