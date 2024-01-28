//1.15.24.
// let parni = [ 2, 4, 6, 8, 10, 12 ] 
// let neparni = [ 1, 3, 5, 7, 9, 11 ]

// let arr = []
// let index_parni = 0
// let index_neparni = neparni.length - 1

// while(index_parni <= parni.length - 1){
//   arr.push(parni[index_parni] + neparni[index_neparni])
//   index_parni++
//   index_neparni--
// }

// console.log(arr)

//1.16.24- domaci

//   let username = ""
  
//   while(username !== "kemal"){
//     username = prompt("Unesi username")   
//   }
//   let password = ""
  
//   while(password !== "kemal22"){
//     password = prompt("Unesi password")
//  }

//  alert("Uspesno ste se ulogovali")


// window.location.replace("file:///C:/Users/computer/OneDrive/Desktop/JavaScript-IT_camp/Calculator-prompt/index.html")


//1.16.24- domaci
// treba da se ispise 1,5,9

const arrDiagonala = [[1,2,3],[4,5,6],[7,8,9]]
const newarrDiagonala = []
let j = 0
for (let i = 0; i < arrDiagonala.length; i++) {
newarrDiagonala.push(arrDiagonala[i][j])
j++
}  
console.log(newarrDiagonala)


//domaci 1.12.24
//  vi na osnovu tog broja n treba da uradite spratove zvezdica, pa na primer ako korisnik unese broj 3 onda vas output treba da bude 
// *
// **
// ***

// let num;
// let a = ""

// while (isNaN(num)) {
//  num = prompt("unesi br")
// } 
// for (let i = 0; i < num; i++) {
//  a+="*"
//  console.log(a)
// }


//domaci 1.24.24
//treba da napravimo drvo od zvezdica
//npr ovako
//   *
//  ***
// ***** 

let nekiBr ;

// while(isNaN(nekiBr)){
//   nekiBr = prompt("Unesi broj za kreiranje jelkice")
// }

for (let i = 1; i <= nekiBr; i++) {
console.log((" ").repeat(nekiBr - i) + ("*").repeat(2*i-1))
}

console.log('-------------------------------------')
//domaci novi
//provera koliko puta se neki element nalazi u nizu

let niz = [1,2,3,4,4,5,6,7,7,4,1,2,4,5,5,4,3,2,1,3,1,3,3,1,3,4,5]

for (let i = 0; i < niz.length; i++) {
  if (niz[i] === 1) {
    console.log(niz[i])
  }
}
for (let j = 0; j < niz.length; j++) {
  if (niz[j] === 2) {
    console.log(niz[j])
  }
}
console.log('--------------------')
///////////////////////////
let noviNiz = [1, 3, 7, 3, 3, 2, 1]

for (let i = 0; i < noviNiz.length; i++) {
  if (noviNiz[i] === 1) {
    console.log(noviNiz[i])
  }
}
for (let j = 0; j < noviNiz.length; j++) {
  if (noviNiz[j] === 3) {
    console.log(noviNiz[j])
  }
}
for (let y = 0; y < noviNiz.length; y++) {
  if (noviNiz[y] === 2) {
    console.log(noviNiz[y])
  }
}
for (let k = 0; k < noviNiz.length; k++) {
  if (noviNiz[k] === 7) {
    console.log(noviNiz[k])
  }
}
