// da je broj deljiv i sa 5 i sa 3 ispisi "fizzbuzz"
//da je broj deljiv samo sa 3 ispisi "buzz"
//da je broj deljiv samo sa 5 ispisi "fizz"
let deljenje = prompt("Unesi br")

const broj1 = 10;
const broj2 = 13;
const broj3 = 15;

if(broj1 % 5 == 0 && broj1 % 3 == 0){
  console.log("fizzbuzz")
}else if (broj1 % 5 == 0){
  console.log("fizz")
}else if( broj1 % 3 == 0) {
  console.log("buzz")
}else if (isNaN(broj1)){
  console.log("nije broj 10")
}
if(broj2 % 5 == 0 && broj2 % 3 == 0){
  console.log("fizzbuzz")
}else if (broj2 % 5 == 0){
  console.log("fizz")
}else if( broj2 % 3 == 0) {
  console.log("buzz")
}else if (isNaN(broj2)){
  console.log("nije broj 13")
}
if(broj3 % 5 == 0 && broj3 % 3 == 0){
  console.log("fizzbuzz")
}else if (broj3 % 5 == 0){
  console.log("fizz")
}else if( broj3 % 3 == 0) {
  console.log("buzz")
}else if (isNaN(broj3)){
  console.log("nije broj 15")
}

//Ucenje funkcija, pocetak

function sabiranjeDvaBroja (a, b){
console.log( a + b);
}
sabiranjeDvaBroja(23,56)
sabiranjeDvaBroja(3,7)


function sabiranjeViseBrojeva (a,b,c,d){
  console.log(a + b);
  console.log(c + d);
}
sabiranjeViseBrojeva.prompt(22,54,142,123);
sabiranjeViseBrojeva(21, 213,);

let prviBroj = prompt("Unesi1")
let drugiBroj = prompt("Unesi2")
a = prviBroj
b = drugiBroj

function mnozenjeBrojeva (a, b){
  console.log(a*b)
}

mnozenjeBrojeva(a,b)