// domaci jeste da korisnika pitate koliko zeli novca da ima
// napraviti takodje store gde mozete kupiti odredjenje artikle
//ako korisnik uneste neki od ponudjenih onda se provera da li korisnik ima novca dovljno za to ako nema pitamo korisnika
// da li zeli da se uzajmi i vi korisniku pozajmite onoliko koliko on unese 


let banka =prompt("Koliko novca zelis da imas?");
const market =prompt("Sta zelite kupiti: cokolada, sok, cigare, voce").toLowerCase();
// console.log(typeof banka, "bankaa");
// console.log(typeof market, "market");

const cokolada = 180;
const sok = 80;
const cigare = 380;
const voce = 265;

switch (banka){
  case "1000":
    console.log(`Podigo si ${banka}rsd`)
    break;
  case "500":
    console.log(`Podigo si ${banka}rsd`)
    break;
  case "200":
    console.log(`Podigo si ${banka}rsd`)
    break;
  default:
    window.alert("MOZES PODICI SAMO NOVCANICE OD 1000, 500, 200!!!")
}

switch (market){
  case "cokolada":
    if(banka >= cokolada){
      banka = banka - cokolada
      console.log(`Kupio si ${market}, i ostalo ti je ${banka}`)
      }
      else{
        let zajam = prompt("Nemas dovoljno novca, koliko novca zelis da ti pozajmimo?");
        console.log(`Pozajmili smo Vam ${zajam}rsd`)
        }
    break;
  case "sok":
    if(banka >= sok){
      banka = banka - sok
      console.log(`Kupio si ${market}, i ostalo ti je ${banka}`)
      }
      else{
        let zajam = prompt("Nemas dovoljno novca, koliko novca zelis da ti pozajmimo?");
        console.log(`Pozajmili smo Vam ${zajam}rsd`)
        }
  break;
  case "cigare":
    if(banka >= cigare){
      banka = banka - cigare
      console.log(`Kupio si ${market}, i ostalo ti je ${banka}`)
      }
      else{
     let zajam = prompt("Nemas dovoljno novca, koliko novca zelis da ti pozajmimo?");
     console.log(`Pozajmili smo Vam ${zajam}rsd`)
        }
    break;
  case "voce":
    if(banka >= voce){
      banka = banka - voce
      console.log(`Kupio si ${market}, i ostalo ti je ${banka}`)
      }
      else{
     let zajam = prompt("Nemas dovoljno novca, koliko novca zelis da ti pozajmimo?")
     console.log(`Pozajmili smo Vam ${zajam}rsd`)
        }
    break;
  default:
    console.log(`Da li zelite nesto drugo da kupite?`);  
}

