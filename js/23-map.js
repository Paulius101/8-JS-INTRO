function dvygubinu(list) {
    const dvygubasSarasas = [];

    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        dvygubasSarasas.push(item * 2)
    }

    return dvygubasSarasas;
}

module.exports = dvygubinu;

// IKLIJUOTI I index.js norint pamatyti kaip veikia

// const dvygubinu = require('./js/23-map');

// const ilgiai = [1, 2, 3, 4, 5];

// const duIlgiai = dvygubinu(ilgiai);
// console.log(ilgiai);
// console.log(duIlgiai);

// const trysIlgiai = ilgiai.map(item => item * 3);
// console.log(trysIlgiai);

// const sesiApvalusIlgiai = ilgiai.map(x => Math.round(x * 6 / 10) * 10);
// console.log(sesiApvalusIlgiai);

// const zodynas = ['labas', 'rytas', 'sakau', 'tau'];
// const pirmosZodynoRaides = zodynas.map(word => word[0].toUpperCase());
// console.log(pirmosZodynoRaides);