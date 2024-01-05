//DOMACI 2.1.2023

// ispisi fizz ako je deljiv sa 3
// ispisi buzz ako je deljiv sa 5
// ako je deljiv i sa 3 i sa 5 fizzbuzz

const broj = prompt("Unesi neki broj")


if(!isNaN(broj)){
  if(broj % 5 == 0 && broj % 3 == 0){
   console.log("fizzbuzz")
  }else if(broj % 3 == 0){
   console.log("fizz")
  }else if(broj % 5 == 0){
   console.log("buzz")
  }else{
  console.log("Broj nije deljiv ni sa 3 ni sa 5!!")
  }
}else{
  window.alert("UNESI BROJ");
}


//vezba

// let novcanice = 25

// let vrednost = 10

// let brojac = 0

// let izbrojane_novcanice = 0

// while (brojac < novcanice){
//   izbrojane_novcanice++;
//   brojac++;
//   console.log(izbrojane_novcanice)
// }
