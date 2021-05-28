function pozityvas(list) {
    const teigiamiSkaiciai = [];

    for (const item of list) {
        if (item >= 0) {
            teigiamiSkaiciai.push(item);
        }
    }

    return teigiamiSkaiciai;
}
module.exports = pozityvas;

// IKLIJUOTI I index.js norint pamatyti kaip veikia

// const pozityvas = require('./js/24-filter');

// const skaiciai = [8, -3, 9, -17, 0, 6, -3.14];

// const tikTeigiami = pozityvas(skaiciai);
// console.log(tikTeigiami);

// const neNeigiami = skaiciai.filter(item => item >= 0);
// console.log(neNeigiami);

// const zodynas = ['labas', 'rytas', 'sakau', 'tau', 'Mefistofelis', 'barsukas', 'guolis', 'raguolis', 'zaliapjove'];

// const trumpesniNei5simboliai = zodynas.filter(word => word.length < 5);
// console.log(trumpesniNei5simboliai);

// const ilgesniNei5simboliai = zodynas.filter(word => word.length > 5);
// console.log(ilgesniNei5simboliai);

// const zodziaiIs5simboliu = zodynas.filter(word => word.length === 5);
// console.log(zodziaiIs5simboliu);