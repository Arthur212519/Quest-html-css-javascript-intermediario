const enviar = document.getElementById("enviar")
const nome = document.getElementById("nome")
const email = document.getElementById("email")
const tel = document.getElementById("tel")
const mensagem = document.getElementById("mensagem")
const erro =document.querySelectorAll(".campo-obrigatorio")

enviar.addEventListener("click",function(){
    const nomeValue =nome.value;
    const emailValue =email.value;
    const telValue =tel.value;
    const mensagemValue =mensagem.value;
    if(nomeValue!==""){
        nome.classList.remove("campo-vermelho")
        nome.classList.add("campo-verde")
        erro[0].classList.add("invisivel")
    }else{
        nome.classList.remove("campo-verde")
        nome.classList.add("campo-vermelho")
        erro[0].classList.remove("invisivel")
    }
    if(emailValue!==""){
        email.classList.remove("campo-vermelho")
        email.classList.add("campo-verde")
        erro[1].classList.add("invisivel")
    }else{
        email.classList.remove("campo-verde")
        email.classList.add("campo-vermelho")
        erro[1].classList.remove("invisivel")
    }
    if(telValue!==""){
        tel.classList.remove("campo-vermelho")
        tel.classList.add("campo-verde")
        erro[2].classList.add("invisivel")
    }else{
        tel.classList.remove("campo-verde")
        tel.classList.add("campo-vermelho")
        erro[2].classList.remove("invisivel")
    }
    if(mensagemValue!==""){
        mensagem.classList.remove("campo-vermelho")
        mensagem.classList.add("campo-verde")
        erro[3].classList.add("invisivel")
    }else{
        mensagem.classList.remove("campo-verde")
        mensagem.classList.add("campo-vermelho")
        erro[3].classList.remove("invisivel")
    }
})



    

