class Zadatak {
  constructor(opis){
    this.opis = opis
  }
  id = Math.random()
}

const zadaci = []

while (true) {
  let unos = Number(prompt("Izaberi: 1.Unos zadatka, 2.Pregled svih zadataka, 3.Izmena postojecih zadataka, 4.Brisanje zadataka"))
  if (unos === 1) {
    const opis = prompt("Unesi zadatak")
    zadaci.push(new Zadatak (opis))
    localStorage.setItem(zadaci.length - 1 ,opis)
  }
  else if (unos === 2){
    alert("Zadaci su u consoli")
    console.log(zadaci)
  }
  else if (unos === 3){
    const index = prompt("Broj zadatka za izmenu")
    const zadatak = zadaci[index]
    const opis = prompt(`Izmena zadatka broj ${index}`)
    zadatak.opis = opis
    zadaci[index] = zadatak
  }
  else if (unos === 4){
    const index = prompt("Index zadatka za brisanje")
    localStorage.removeItem(index)
    zadaci.splice(index,1)
  }else{
    console.log("Izasao si iz zadataka")
    break;
  }
}
console.log(`Zadaci arr = ${zadaci}`)
