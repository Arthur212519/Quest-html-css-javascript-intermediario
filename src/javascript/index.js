const enviar = document.getElementById("enviar")
const erro =document.querySelectorAll(".campo-obrigatorio")
const inputs =document.querySelectorAll(".input")

enviar.addEventListener('click',()=>{
    inputs.forEach((input,number)=>{
        const value = input.value
        if(value==''){
            input.classList.remove('campo-verde')
            input.classList.add('campo-vermelho')
            erro[number].classList.remove('invisivel')

        } else{
            input.classList.remove('campo-vermelho')
            input.classList.add('campo-verde') 
            erro[number].classList.add('invisivel')
        }
    })
})




    

