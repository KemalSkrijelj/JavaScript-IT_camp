const btnEl = document.getElementById("btn")
const input = document.getElementById("birthday")
const result = document.getElementById("result")

function calculateAge() {
const birthdayValue = input.value;
if (birthdayValue === "") {
  alert("Unesi svoj datum rodjenja!")
}else{
  let age = getAge(birthdayValue)
  console.log(age)
  result.innerText = `Vi imate ${age} godina.`
 }
}
function getAge(birthdayValue) {
  let currentDay = new Date()
  let birthdayDate = new Date(birthdayValue)
  let age =  currentDay.getFullYear() - birthdayDate.getFullYear()
  console.log(age)
  const month = currentDay.getMonth() - birthdayDate.getMonth()
  if (month < 0 || (month === 0 && currentDay.getDate() < birthdayDate.getDate())) {
    age--
  }
  
  return age
}
btnEl.addEventListener('click', calculateAge)