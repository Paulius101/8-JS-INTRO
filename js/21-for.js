/*
Isspausdinti skaicius intervale
*/

const nuo = 5;
const iki = 10;

for (let i = nuo; i <= iki; i++) {
    console.log(i);
}

console.log('-----------');

/*
Isspausdinti skaicius intervale, bet padvigubintus
*/

const nuo2 = 2;
const iki2 = 7;

for (let i = nuo2; i <= iki2; i++) {
    console.log(i * 2);
}

console.log('--------------');

/*
Turime sarasa (array) ir reikia isspausdinti visas jo reiksmes
*/

const marks = [10, 2, 8, 4, 6, 9, 1, 7, 3, 5];

console.log(marks);

for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}