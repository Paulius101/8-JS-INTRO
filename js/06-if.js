/*
IF - salygos sakinys

PALYGINIMO OPERATORIAI:
visi: >, <, >=, <=, ==, !=, ===, !==
nenaudotini: ==, !=
naudotini: >, <, >=, <=, ===, !==

SABLONAI:
if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {} ...  else if () {}
if () {} else if () {} ...  else if () {} else {}

*/

const a = 'labas';
const b = 'Labas';

if (a == b) {
    console.log('taip');
} else {
    console.log('ne');
}



const akys = 'melynos';

if (akys === 'melynos') {
    console.log('Melynakis');
} else if (akys === 'zalios') {
    console.log('Zaliaakis');
} else if (akys === 'rudos') {
    console.log('Rudaakis');
} else {
    console.log('Neatpazinta akiu spalva... 🤔');
}


const plaukai = 'rudos';

if (plaukai === 'melynos') {
    console.log('Melynaplaukis');
}

if (plaukai === 'zalios') {
    console.log('Zaliaplaukis');
}

if (plaukai === 'rudos') {
    console.log('Rudaplaukis');
} else {
    console.log('Plauku spalva nera ruda... 🤔');
}

console.log('--------------------');

const parosMetas = 'rytas';
const arLyja = false;

if (parosMetas === 'rytas') {
    if (arLyja) {
        console.log('Labas rytas, nepamirsk skecio!');
    } else {
        console.log('Labas rytas!');
    }
} else {
    if (parosMetas === 'diena') {
        if (arLyja) {
            console.log('Labas diena, nepamirsk skecio!');
        } else {
            console.log('Labas diena!');
        }
    } else {
        if (parosMetas === 'vakaras') {
            if (arLyja) {
                console.log('Labas vakaras, nepamirsk skecio!');
            } else {
                console.log('Labas vakaras!');
            }
        } else {
            console.log('Neatpazintas paros metas');
        }
    }
}