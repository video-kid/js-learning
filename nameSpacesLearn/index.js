//Tworze psa

let Nusia = {
    imie: "Nusia",
    rasa: "York",
    wiek: 10,
}


Nusia.uszy = "szpiczaste";
Nusia.ulubioneJedzenie = [];
Nusia.ulubioneJedzenie.push("marchewka");

let bazaPsow = [];

let dodajPsa = (pies) => {
    pies.id = bazaPsow.length;
    bazaPsow.push(pies);
}

let usunPsa = (id) => {
    delete bazaPsow[id].id;
    delete bazaPsow[id];
}

console.log(Nusia);