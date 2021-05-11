/*
UZDUOTIS:
- duodama, kiek turim geliu
- duodama, kiek viena gele "susilaukia" nauju gelyciu
- duodama, kiek turiu vazonu
- reikia rasti, keliu vazonu truksta?

*/

function flowers(geles, vaikai, vazonai) {
let visoGeliu = geles * vaikai + geles;
const reikiaVazonu = visoGeliu - vazonai;

if (reikiaVazonu < 0) {
    return 0;
}
return reikiaVazonu;

}

console.log(flowers(1, 4, 2), '->', 3);
console.log(flowers(10, 1, 5), '->', 15);
console.log(flowers(10, 2, 100), '->', 0);