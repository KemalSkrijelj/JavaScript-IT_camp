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

 console.log(`User je ${username}`)
 console.log(`Pass je ${password}`)
