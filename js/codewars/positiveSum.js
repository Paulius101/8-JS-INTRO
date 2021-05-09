function positiveSum(arr) {
    // pagal nutylejima, bendra suma is pradziu lygu nuliui
    let bendraSuma = 0;

    // einam per skaiciu sarasa
    for (let i = 0; i < arr.length; i++) {
        // pasiimu skaiciu
        const skaicius = arr[i];
        // jeigu yra teigiamas
        if (skaicius > 0) {
            // tai pridedu prie bendros sumos
            bendraSuma += skaicius;
        }
    }

    // graziname bendros sumos rezultata
    return bendraSuma;
}

console.log(positiveSum([]), '->', 0);
console.log(positiveSum([-2]), '->', 0);
console.log(positiveSum([-2, -7, -99]), '->', 0);
console.log(positiveSum([-1, -2, -3, -4, -5]), '->', 0);

console.log(positiveSum([1, 2, 3, 4, 5]), '->', 15);

console.log(positiveSum([1, -2, 3, 4, 5]), '->', 13);
console.log(positiveSum([-1, 2, 3, 4, -5]), '->', 9);