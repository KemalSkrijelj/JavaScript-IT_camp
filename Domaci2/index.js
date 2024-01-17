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

  let username = ""
  
  while(username !== "kemal"){
    username = prompt("Unesi username")   
  }
  let password = ""
  
  while(password !== "kemal22"){
    password = prompt("Unesi password")
 }

 alert("Uspesno ste se ulogovali")


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