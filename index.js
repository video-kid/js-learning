let imie = 'Żaba';
let nazwisko = 'Żabińska';
let title = 'Władczyni Troli';

console.log('Wielmożna ' + imie + ' ' + nazwisko + ' Wielka '  + title);
console.log(`Wielka ${imie} ${nazwisko} Wielmożna ${title}`);

/* let dodawanie = (a, b) => {
    console.log(`${a} + ${b} = ${a + b}`);
}; */

let dodawanie = (a, b) => {
    let wynik = a + b;
    console.log(`${a} + ${b} = ${wynik}`)
    return wynik;
};

let odejmowanie = (a, b) => {
    return a - b;
};

let mnozenie = (a, b) => {
    return a * b;
}

let dodajJeden = (a) => {
    dodawanie(a, 1);
};

let cyfry = [];

for (let i = 0; i  < 10; i++) {
    cyfry.push(i);
}
