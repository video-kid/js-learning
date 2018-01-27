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
    //console.log(`${a} + ${b} = ${wynik}`)
    return wynik;
};

let odejmowanie = (a, b) => {
    return a - b;
};

let mnozenie = (a, b) => {
    if (b === undefined) {
        return (c) => {
            return mnozenie (a, c);
        };
    }

    return a * b;
}

let dodajJeden = (a) => {
    return dodawanie(a, 1); 
};

/*
let razyDziesiec = (a) => {
    return mnozenie(a, 10);
} */


let cyfry = [];

for (let i = 2; i  < 8; i++) {
    cyfry.push(i);
}

let cyfryRazy10 = cyfry.map(mnozenie(10));

// lub

let minus5 = (a) => {
    return odejmowanie (a, 5);
}

let cyfryMinus5 = cyfry.map(minus5);

// lub 

let cyfryDodac3 = cyfry.map( (a) => dodawanie (a, 3));