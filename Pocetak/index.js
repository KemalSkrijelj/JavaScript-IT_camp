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
 
// let mojNovcanik = 100;

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
// const staZelisKupiti = prompt("Sta cete kupiti?");

// switch(staZelisKupiti){
//     case "cokolada":
//     console.log(`Kupio si ${staZelisKupiti}`);
//       break;
//     case "sok":
//     console.log(`Kupio si ${staZelisKupiti}`);
//       break;
//     case "cigare":
//     console.log(`Kupio si ${staZelisKupiti}`);
//       break;
//     default:
//     console.log("Odustao si nisi hteo nista da kupis...");
// }


// 1 > 2 provera da li je 1 vece od 2 output: false
//1 < 2 provera da li je 1 manje od 2 output: true
//2 == 2 proverava jel 2 jednako 2 output : true
//2 === "2" proverava i tip i vrednost output : false
//&& i leva i desna strana moraju biti tacne da bi bio izraz true;
// || jedna strana mora da je true i on ce dati izraz true
// !false negacija od false je true
// 1 != 2 je l jedan razlicito od 2 : true
// 1!== "2" proverava i tip

// imamo arr.push(el) ubacuje el na poslednje mesto
// imamo arr.pop() izbacije poslednji element
// imamo arr.shift() on nam izbacuje prvi el iz niza
// imamo arr.unshift(el) da ubacimo el na pocetak niza

//niz.splice(3 je index elementa, ako je 0 onda ne brise nista nego samo dodaje el posle zareza,)
//niz.splice(3 je index elementa, a onda koji broj unesemo toliko brise elemenata)

//Hojsting je podizanje odredjenih varijabli na vrhu naseg scopa
//Niz je referentni tip podataka koji moze i ne mora da sadrzi neke el
//Map funckija prolazi kroz sve elemnte u nizu koja vraca vecu duzinu i ne moze da vrati manju duzinu
//Filter je metod nad nizom koja 
//ForEach metoda nad nizovima, prima callBackFunction 
//Clouser je kad dete scopa vidi roditeljske stvari dok roditelj ne vidi stvari kod deteta
//Some je metoda nad nizovima sadrzi 3 argumenta (el,index,arr) i vraca true ili false           
//Includes koristimo da li nesto sadrzi u nekom nizu
//Object je referentni tip podatka koji ima key value
//U Bazi podataka skladistimo podatke
//Callbackfunction je funkcija koja se prosledjuje drugoj funkciji i neposredno se izvrsava unutar nje

//KLASE
//Kod staticne klase nije nam potrebna istanca
//Klasa je sablon ili kalup za kreiranje objekta
//Apstraktna klasa je klasa od koje ne moze da se napravi objekat, sluzi nam za nasledjevanje
//OOP je 
//Nasledjivanje je kada jedna klasa nasledi drugu klasu to jeste da uzmemo njene vrednosti
//Local storage je memorija odnosno bazza koja se nalazi u nasem browseru
//Local storage nema expired time dok session storage ima

//JavaScript je single Thread
//Ne mogu paralelno da se izvrsavaju 2 radnje u JS
//W8 engine su metode koje su napisane u C i C++ jeziku, ugradjen je u broswer
//JS Runtime(kontejner gde se izvrsava JS) za rad koristi dva tipa memorije: Heap i Stack.
//Api-konobar salje podatke do baze podataka uzima ih i vraca ih 
//Event loop mozemo da zamislimo kao neki sat koji nam odbrojava za koliko ce nesto da se izvrsi
//Promise su neka obecanja koja dajemo, ima 3 stanja: pending, fulfilled, rejected
//Try...catch se korisit da uhvatimo neki error i da ga upisemo
//W8 engine nam omogucava multi thread
// 0 == false, 1 == true

//Asihronicni JS i W8 engune
//Sihroni JS se izvrsava jedan po jedan red
//Asihrono se koristi zbog brzeg izvrsavanja radnji
//DOM je vrsta s kojom mozemo da manipulisemo HTML
//Interface je sve sto vidimo

const broj = prompt("Unesi broj za proveru ")

if(!isNaN(broj)){
    if(broj == 0){
        console.log("Broj je neutralan ili je nulica")
    }else{
        if(broj % 2 == 0){
            console.log("broj je paran")
        }
        else{
            console.log("broj je naparan!")
        }
    }
}
else{
    console.log('Morate da unesete broj :)')
}
