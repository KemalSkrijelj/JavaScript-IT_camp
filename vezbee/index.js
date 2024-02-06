// let br1 = prompt("unesi br1");


// function provera (br1){
// if( br1 % 2 == 0){
//   return "broj je paran"
// }else if ( br1 % 5 == 0) {
//   return "broj je deljiv sa 5"
// }else {
//   return prompt("unesi neki broj")
// }
//  }

// rezultat = provera(br1)
// console.log(rezultat)


//Array VEZBE NA CASU

/*
const arr = [1,2,3,4,5,6]

let rez = 0

let counter = arr.length - 1
while(counter >= 0){
  if(arr[counter] % 2 == 0){
    rez = rez + arr[counter]
  }
  counter--;
}

console.log(rez)
*/

//DOMACI

// const arr = [1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6]

// console.log("Arr lenght:" + arr.length)
// console.log("-----------")

// let rez1 = 0
// let rez2 = 0
// let counter = arr.length - 1

// while (counter >= 0){
//   if(arr[counter] % 2 == 0){
//     rez1 = rez1 + arr[counter]
//   }if(arr[counter] % 2 == 1){
//     rez2 = rez2 + arr[counter]
//   }
//   counter--;
// }

// console.log(`Zbir parnih brojeva je ${rez1}`)
// console.log("------------")
// console.log(`Zbir neparnih brojeva je ${rez2}`)

// for(let i=0; i<arr.test.length; i++){
//   console.log(arrTest[i])
// }


//vezba 1.16

// let arrTest = 100

// let brojac1 = 0
// let brojac2 = 0
// let brojac3 = 0


// for(let i=1; i<=arrTest; i++){
//   if(i % 3 == 0  && i % 5 == 0 ){
//     brojac1++
//   }else if (i % 3 == 0){
//     brojac2++
//   }else if (i % 5 == 0){
//     brojac3++
//   }
// }


// console.log(`Brojevi deljivi i sa 3 i sa 5 :${brojac1}`)
// console.log(`Brojevi deljivi sa 3:${brojac2}`)
// console.log(`Brojevi deljivi  sa 5 :${brojac3}`)

// let text = prompt("unesi neki text")
// let text2 = ""

// for (let i = text.length - 1; i >= 0; i--) {
// text2 += text[i];  
// }
//   if(text2 === text){
//     console.log("ovo je palindrom")
//   }
//   else{
//     console.log("ovo nije palindrom")
//   }

////////////////
  const arr = [1,2,3,4,5,6,7]
  let reverseArr = [];
  
  for (let i = arr.length - 1; i >= 0; i--) {
   reverseArr.push(arr[i])
  }
  console.log(reverseArr)

// /////
// const arr1 = [1,2,3,4,5,6,7]
// const arr2 = [1,3,3,5,6,7,8]
// const newArr = []

// for (let i = 0; i < arr1.length - 1; i++) {
//   if(arr1[i] === arr2[i]){
//     newArr.push(arr1[i])
//   }
// }

// console.log(newArr)

// console.log("-----")
//////

const array = [[1,2,3],[1,2,3],[1,2,3]];
const newArray = []

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
  newArray.push(array[i][j])    
  }
}

console.log(newArray)



////////////////

const test = "ime-prezime"
let ime = ""
let prezime = ""
let pomocnaVar = false

 for (let i = 0; i < test.length; i++) {
  if(test[i] === '-'){
    pomocnaVar = true;
    continue;
  }if(pomocnaVar === false){
    ime += test[i]
  }if(pomocnaVar === true){
    prezime += test[i]
  }
 }
 console.log(test)
console.log(ime, prezime)

//////////////////////

const Array = [1,2,3,4,5,6,7,8,9]

const mesto = Array.join("-")

console.log(mesto)

const bezCrtica = mesto.split("-")

console.log(bezCrtica)

console.log(Array.includes(10))
console.log('----------------')

////////////

const arr1 = [1,2,3,4,5,6,7,8,9]
const arr2 = [2,2,3,1,5,6,7,21,5,76,8,90]

const arr4 = []
for (let i = 0; i < arr1.length; i++) {
if(!arr1 == false){
  console.log(arr4.join())
}
}


//////////////

const dajemPrimer = [1,2,3,4,5,6,7,8,9,10]
let brojacProvera = 1
const noviArr = []

for (let i = 1; i <= dajemPrimer.length; i++) {
  noviArr.push(String(i * brojacProvera))
  brojacProvera++
}
console.log(noviArr)

//////////

const numbers = [12,32,32,321,213,3213,1313131,313131]
const zadatakZadaca2 =numbers.map((el, i, arr) => {
  if (i === 0) {
    return el;
  }else{
    if (el % 2 === 0) {
      return el-arr[i-1]
    }else{
      return el
    }
  }

})

console.log(zadatakZadaca2)


const vasZadatakJe = [1,2,3,4,5,6,7,8,9,10]
const vasZadatakPrimer = vasZadatakJe.map((el, index) => {
  if (index % 2 === 0) {
    return el + 1;
  }else {
    return el - 1;
  }
})
console.log("Svi parni +1, neparni - 1:")
console.log(vasZadatakPrimer)

///////////////////
let novaVarijabla = []

function mojCustomMap(vasZadatakJe) {
  for (let i = 0; i < vasZadatakJe.length; i++) {
  novaVarijabla.push(vasZadatakJe[i] + 1)
  }
}
mojCustomMap(vasZadatakJe)
console.log(novaVarijabla)
//////////////
const kemal = [1,2,3,4,5,67,8,9,0,10,11,12,32,14]
const veljko = [2,3,4,5,6,7,8,12,32]

let kemalVeljko  = [];

for (let i = 0; i < kemal.length; i++) {
  kemalVeljko.push(kemal[i])
}
for (let j = 0; j < veljko.length; j++) {
  kemalVeljko.push(veljko[j])
}


/////concat()- spaja dva arr
kemalVeljko = kemal.concat(veljko)

console.log(kemalVeljko)

const svi = [1,2,3421,321321,321321,12,213122312]

const samoNeparni = []

for (let i = 0; i < svi.length; i++) {
 if (svi[i] % 2 === 0) {
  continue;
 }else{
  samoNeparni.push(svi[i])
 } 
}
console.log(samoNeparni)
//////////////
const nekiObj = [
 {ime:"Kemal", grad: "Np"},
 {ime:"Mihailo", grad: "Bg"},
 {ime:"Amir", grad: "Np"}
]

const nekiObjFilter = nekiObj.filter(function (e) {
  return e. grad == "Np"
});
console.log(nekiObjFilter)

const nekiArr = [221,2,3,32,3,23,12,3,213,21,3,12323123,32123]
const nekiArrFilter = nekiArr.filter(function(e){
  if (e % 2 === 0) {
    return e
  }
})
console.log(nekiArrFilter)
console.log('-------------')
/////////////////
 const imateImamo = [[1,2,3,32],[23232,323232]]
const imateImamo2 = []
for (let i = 0; i < imateImamo.length; i++) {
for (let j = 0; j < imateImamo[i].length; j++) {
imateImamo2.push(imateImamo[i][j])  
}
}
console.log(imateImamo2)

const flex = imateImamo.flat()
console.log(flex)
//////////////////////
// const videos = [
//   "Pranking my sister, is she okey(gone wrong",
//   "how to javascript",
//   "html tutorial",
//   "learning the piano",
//   "html basics",
//   "java",
//   "programming",
//   "ui/ux"
// ];
// videos.forEach(function(video) {
//   console.log("run")
//  console.log(video)
// });

const names = ["k","e","m","a","l"]

names.forEach(function(name) {
  console.log(name)
})

const num = [1,2,3,4,5,6,7,8]

num.forEach(function(el){
console.log(el)
})
///////////////
let br = [10,11,12,13,14,15,16,17,18,19]
let obrnutiBr = []
for (let i = br.length - 1; i > 0; i--) {
  obrnutiBr.push(br[i])
}
console.log(obrnutiBr)

//Objects
 
let imeObject= "ffffffffffffffff"
while(imeObject.length > 15) {
  imeObject = prompt("unesi ime!")
}
let prezimeObject = prompt("Unesi prezime")
let godineObject;
while (isNaN(godineObject)) {
  godineObject = prompt('Unesi godine')
}

console.log(`{ime:${imeObject},prezime:${prezimeObject},godine:${godineObject}}`)