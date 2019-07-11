const container = document.querySelector('#recipe-api')


fetch(`http://localhost:3000/brownie`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {

    data.forEach(brownie => {
      console.log(data)

      const mediaItem = document.createElement('div');
      mediaItem.setAttribute('class', 'col span-1-of-3');
      mediaItem.innerHTML = `
            <div class="plan-box">
            <h3><a target="_blank" href="https://www.instagram.com/${brownie.profile}/?hl=pt-br"><i class="ion-social-instagram icon-small"></i>${brownie.name}</a></h3>
                
                <img class="img-recipe" src="${brownie.url}">
                
                <h5>${brownie.message}</h5>
              </div>`
      container.appendChild(mediaItem)
    }
    )
  }
  )
  .catch((erro) => {
    console.log(erro)
  })


const buttonRegister = document.querySelector('#button-add')
buttonRegister.addEventListener("click", registerNewRecipe)
function registerNewRecipe() {
  const name = document.querySelector("#name_input").value
  const profile = document.querySelector("#instagram_input").value
  const url = document.querySelector("#url_input").value
  const message = document.querySelector("#message_input").value
  const recipe = {
    name, profile, url, message
  }
  fetch(
    'http://localhost:3000/brownie',
    {
      method: 'POST',
      body: JSON.stringify(recipe),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
  .then((response) =>{
    console.log(response)
    if(response.status === 200){
      window.location.reload()
    } else{
      window.alert('Por favor, preencha todos os campos.')
    }
  })
}