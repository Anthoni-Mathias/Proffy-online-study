document.querySelector("#add-time") //procurar o botao
.addEventListener("click", cloneField)//quando clicar no botao

//executar uma acao
function cloneField() {
//duplicar os campos
   const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true) //boolean true o false

//limpar os campos
    const fields = newFieldsContainer.querySelectorAll('input')

 //para cada campo limpar
    fields.forEach(function(field){
        //pegar o field do momento e limpa ele
        field.value = ""

    })

//colocar na pagina
    document.querySelector('#schedule-items').appendChild(newFieldsContainer)    

}


