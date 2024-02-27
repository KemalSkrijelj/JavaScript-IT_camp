// localStorage.setItem('test', prompt("unesi neku vrednost"))
// console.log(localStorage.getItem('test'))

if (!localStorage.getItem("jelKorisnikUlogovan")) {
  localStorage.setItem("koriscnikoIme",prompt("Unesi korisnicko ime"))
  localStorage.setItem("sifra", prompt("Unesi sifru"))
  localStorage.setItem("jelKorisnikUlogovan",true)
}else{
  alert(`Dobro dosao ${localStorage.getItem("koriscnikoIme")}`)
}
