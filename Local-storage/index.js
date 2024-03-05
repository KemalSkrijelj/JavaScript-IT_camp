// localStorage.setItem('test', prompt("unesi neku vrednost"))
// console.log(localStorage.getItem('test'))00

// if (!localStorage.getItem("jelKorisnikUlogovan")) {
//   localStorage.setItem("koriscnikoIme",prompt("Unesi korisnicko ime"))
//   localStorage.setItem("sifra", prompt("Unesi sifru"))
//   localStorage.setItem("jelKorisnikUlogovan",true)
// }else{
//   alert(`Dobro dosao ${localStorage.getItem("koriscnikoIme")}`)
// }

// const osoba = {
//   ime:"Kemal",
//   prezime: "Skrijelj",
//   godine:18
// }
// Object.entries(osoba).forEach(([key, value]) => {
//   console.log(key,value)
// })

localStorage.setItem('ulogovaniKorisnik','kemal')
//                           key          value
console.log(localStorage.getItem('ulogovaniKorisnik'))