// https://65f1a999034bdbecc7634f68.mockapi.io/

document.querySelector('#fetchBtn').addEventListener('click', e => {
  e.preventDefault()

  let id = document.querySelector('#userID').value

  console.log(id)

  let request = fetch('https://65f1a999034bdbecc7634f68.mockapi.io/users/' + id).then(response => response.json()).then(data => {
    console.log(data)

  let podaci =  document.querySelector('#podaci')
  podaci.innerHTML = `<p><b>Name: ${data['name']}</b></p>
                      <p>Created at: ${data['createdAt']}</p>
                      <p><i>Email: ${data['email']}</i></p>`
                      
  podaci.style.fontSize ="30px"
  }).catch(error => {
    alert(error)
  })

})

