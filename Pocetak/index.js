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

// const kafa = 10;
// const sok = 20;
// const cigare = 250;

// console.log (mojNovcanik >= kafa);
// console.log (mojNovcanik - kafa);
// console.log (mojNovcanik >= (sok + kafa));
// console.log (mojNovcanik - (sok + kafa));
// console.log (mojNovcanik >= cigare) | 
// console.log ("Ostalo mi je:" + (mojNovcanik - (sok + kafa))) ;
// console.log ("Da bi kupio cigare nedostaje mi:" + (cigare - mojNovcanik));


// let kemal = prompt("Koliko ce kemal da ima para....");
// const staZelisKupiti = prompt("Mozes kupiti 1.cokolada , 2.cigare, 3.sok").toLowerCase();
// console.log(typeof kemal, "gore typeof od kemal")
const staZelisKupiti = prompt("Sta cete kupiti?");

switch(staZelisKupiti){
    case "cokolada":
    console.log(`Kupio si ${staZelisKupiti}`);
      break;
    case "sok":
    console.log(`Kupio si ${staZelisKupiti}`);
      break;
    case "cigare":
    console.log(`Kupio si ${staZelisKupiti}`);
      break;
    default:
    console.log("Odustao si nisi hteo nista da kupis...");
}