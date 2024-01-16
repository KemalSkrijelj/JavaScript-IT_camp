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

let arrTest = 100

let brojac1 = 0
let brojac2 = 0
let brojac3 = 0


for(let i=1; i<=arrTest; i++){
  if(i % 3 == 0  && i % 5 == 0 ){
    brojac1++
  }else if (i % 3 == 0){
    brojac2++
  }else if (i % 5 == 0){
    brojac3++
  }
}


console.log(`Brojevi deljivi i sa 3 i sa 5 :${brojac1}`)
console.log(`Brojevi deljivi sa 3:${brojac2}`)
console.log(`Brojevi deljivi  sa 5 :${brojac3}`)

let text = prompt("unesi neki text")
let text2 = ""

for (let i = text.length - 1; i >= 0; i--) {
text2 += text[i];  
}
  if(text2 === text){
    console.log("ovo je palindrom")
  }
  else{
    console.log("ovo nije palindrom")
  }
