// console.log("nas prvi cas");


//prosti
var ovojeNumber = 23;
var ovojeBoolean = true;
var ovojeString = "IT camp";
var ovojeUnderfined = undefined;
var ovojeNull = null;
// Number,
// Boolean,
// String,
// undefined,
// null


//slozeni

var ovojeArray = [2,"D",true,false]
// Array,
// Object,
// Function

var osoba = {
  ime: "Kemal",
  prezime: "Skrijelj",
  godine: "18"
}

// function test (e) {
// console.log(e)
// }
// test(10)

let dodeliVrednost = 23;

let plus = 2 + 2;
let minus = 2 - 2;
let mnozenje = 2*2;
let deljenje = 2/2;
let number = 2;
let string ="2";

// let test1 =false || (number == string);



// console.log(plus > minus);


//RAZLIKA IZMEDJU LET I CONSTA JE U TOME STO SA LET  MOZEMO MENJATI VREDNOST, A SA CONST NE MOZEMO

//ZADATAK1
 
let mojNovcanik = 100;

const kafa = 10;
const sok = 20;
const cigare = 250;

console.log (mojNovcanik >= kafa);
console.log (mojNovcanik - kafa);
console.log (mojNovcanik >= (sok + kafa));
console.log (mojNovcanik - (sok + kafa));
console.log (mojNovcanik >= cigare) | 
console.log ("Ostalo mi je:" + (mojNovcanik - (sok + kafa))) ;
console.log ("Da bi kupio cigare nedostaje mi:" + (cigare - mojNovcanik));