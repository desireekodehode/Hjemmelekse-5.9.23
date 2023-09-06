console.log("Hjemmelekse til 5. september 2023")

//// Oppgave 1.////


const Butikklapp = [
        "Brød",
        "Melk",
        "Leverpostei",
        "Knekkebrød",
        "Frukt",
        "Nøtter",
        "Såpe",
        "Kaffe",
        "Poteter",
        "Sjokolade",
];

Butikklapp.pop()

Butikklapp.push("Dopapir")
Butikklapp.pop(3, 7)
console.log(Butikklapp.length);
console.log(Butikklapp)
Butikklapp[4];

console.log(Butikklapp);

///****Oppgave 1.1**** *///////

console.log(Butikklapp[5])

///****Oppgave 2 */




const personsArray = [{

        firstName: "Desiree",
        lastName: "Bergstrøm",
        Age: "36",
},


{
        firstName: "Per",
        lastName: "Strøm",
        Age: "40",


}
]
console.log(personsArray[1])
console.log(personsArray[0]);

///***Oppgave 3 ***////

const numberOfgests = 3

if (numberOfgests <= 10) {
        console.log("Veldig labert med gjester")
}
else if (numberOfgests > 10 && numberOfgests <= 10) {
        console.log("Hurra, du blir millionær!")
}
else {

        console.log("Hurra, magisk!!")
}




////**Oppgave 4 *///
function noe() {
        console.log("Hallo")
}
noe()


///////////


