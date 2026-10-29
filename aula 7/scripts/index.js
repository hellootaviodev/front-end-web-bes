function executar(evento) {
  evento.preventDefault();
  limparErros();

  const nome = document.querySelector("#nome");
  const erroNome = document.querySelector("#erro-nome");

  if(nome.value === "") {
    erroNome.textContent = "Nome não pode estar vazio!";
    erroNome.classList.add("erro");
    erroNome.classList.remove("oculto");
  }  


    const idade = document.querySelector("#idade");
    const erroidade = document.querySelector("#erro-idade");
    if (idade.value === ""){
        erroidade.textContent = "idade nao pode estar vazio!";
        erroidade.classList.add ("erro");
        erroidade.classList.remove("oculto");
    } else if (Number(idade.value) <18) {
        erroidade.textContent = "e necessario ter 18 anos!";
        erroidade.classList.add("erro");
        erroidade.classList.remove("oculto");
    }


    const email = document.querySelector("#email");
    const erroemail = document.querySelector("#erro-email");
    if (email.value === ""){
        erroemail.textContent = "email nao pode estar vazio";
        erroemail.classList.add("erro");
        erroemail.classList.remove("oculto");
    }

    const termos = document.querySelector("termos");
    const errotermos = document.querySelector("#erro-termos");
    if (!termmos.checked){
        errotermos.textContent = ("e preciso aceitar termos");
        errotermos.classList.add("erro");
        errotermos.classList.remove("oculto");
    }

    const valido = document.querySelectorAll(".erro").length === 0;
    if(valido){
        concluido.textContent = "cadastro concluido com sucesso";
        concluido.classList.add("sucesso");
        concluido.classList.remove("oculto");
    }else{
        concluido.textContent = "cadastro concluido com sucesso";
        concluido.classList.add("sucesso");
        concluido.classList.remove("oculto");
    }
}

function limparErros() {
  document.querySelectorAll(".erro").forEach((elemento) => {
    elemento.classList.remove("erro");
    elemento.classList.add("oculto");
  })
}