//calculator with prompt

let prviBroj = Number(prompt("Unesi prvi broj"));
let drugiBroj =  Number(prompt("Unesi drugi broj"));
let operacije = prompt("Izaberi neku od operacija +, -, *, /")

a = prviBroj
b = drugiBroj
if(isNaN(prviBroj) || isNaN(drugiBroj)){
 alert("MORAS DA UNESES NEKI BROJ")
}
switch(operacije){
  case "+":
  sabiranjeBrojeva(a,b)
  break;
  case "-":
  oduzimanjeBrojeva(a,b)
    break;
  case "*":
  mnozenjeBrojeva(a,b)
    break;
  case "/":
  deljenjeBrojeva(a,b)
    break;
    default:
      window.alert("UNESI OPERACIJU")    
}
function mnozenjeBrojeva(a, b){
  rezultat = prviBroj * drugiBroj
  alert(`Rezultat mnozenja je: ${rezultat}`)
}

function deljenjeBrojeva (a, b){
  rezultat = prviBroj / drugiBroj
  alert(`Rezultat deljenja je: ${rezultat}`)
}

function sabiranjeBrojeva (a, b){
  rezultat = prviBroj + drugiBroj
  alert(`Rezultat sabiranja je: ${rezultat}`)
}

function oduzimanjeBrojeva (a, b){
  rezultat = prviBroj - drugiBroj
  alert(`Rezultat oduzimanja je: ${rezultat}`)
}
if(rezultat == 0){
  rezultat
}
