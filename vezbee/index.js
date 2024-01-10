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

const arr = [1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6]

console.log("Arr lenght:" + arr.length)
console.log("-----------")

let rez1 = 0
let rez2 = 0
let counter = arr.length - 1

while (counter >= 0){
  if(arr[counter] % 2 == 0){
    rez1 = rez1 + arr[counter]
  }if(arr[counter] % 2 == 1){
    rez2 = rez2 + arr[counter]
  }
  counter--;
}

console.log(`Zbir parnih brojeva je ${rez1}`)
console.log("------------")
console.log(`Zbir neparnih brojeva je ${rez2}`)
