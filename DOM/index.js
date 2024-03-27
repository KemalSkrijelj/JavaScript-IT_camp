const container = document.querySelector('.container')

let counter = 0;
let content = `<div>
              <p>Testiramo znanje</p>
              <button id="btn">Klikni me START ${counter}</button>
              </div>
            `
container.innerHTML = content;

const btn = document.getElementById('btn')
btn.addEventListener('click', ()=> {
  counter++
  container.innerHTML = `<div>${counter}</div>`
})
const test = document.createElement('span',content).innerText = `Testiramo nas paragraf`

let div = document.createElement('div')
container.append('divvv')
let p = document.createElement('p').innerText =`1000`
div.append('p')


console.log(container,"con", btn)