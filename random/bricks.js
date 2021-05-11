/*
UZDUOTIS:
- gaunam, kiek sienu turi namas
- gaunam, kokio plocio yra kiekviena siena (metrais)
- sienos neturi angu ir/ar skyliu
- gaunam sienos auksti, kuris visur yra vienodas
- turim plytos dydi (aukstis ir plotis) (metrais)
- reikia suzinoti, keliu plytu mums reikes, jei plytu skaldyti negalima
*/

function bricks(sienuPlociai, sienosAukstis, plytosAukstis, plytosPlotis) {
let bendrasPlotis = 0;
for (let i = 0; i < sienuPlociai.length; i++) {
    const element = sienuPlociai[i];
    bendrasPlotis += sienuPlociai[i];
    }

const plytuPlotyje = Math.ceil(bendrasPlotis / plytosPlotis);
const plytuAukstyje = Math.ceil(sienosAukstis / plytosAukstis);
return plytuPlotyje * plytuAukstyje
}

console.log(bricks([1, 2], 1, 0.1, 0.2), '->', 150);
console.log(bricks([1, 1, 1], 1, 0.1, 0.2), '->', 150);
console.log(bricks([2, 1, 3], 0.5, 0.1, 0.2), '->', 150);

/*
Math.floor(11.9999)
11
Math.ceil(8.0001)
9
Math.round(7.499)
7
Math.round(7.5)
8
*/
