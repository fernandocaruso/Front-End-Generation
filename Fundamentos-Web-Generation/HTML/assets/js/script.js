/* Comentários sobre o JavaScript:

// Case Sensitive = letras maiúsculas e minúsculas fazem diferença.

// Declaração de Variáveis:
// o JS utiliza variáveis. 
Como declarar:
var Caruso - não é muito usado (mais antigo)
let Caruso - variável clássica 'a = number'. (valores q irão mudar!)
const Caruso - se utiliza em valores fixos (valores q nunca vão mudar!) 

    por Tag: getElementByTagName(h1)
    por Id: getElementById()
    por Nome: getElementsByNome()
    por Classe: getElementsByClassName()
    por Seletor: querySelector()

*/

// PEGAR COMPONENTES DA TELA!
//DOM é tudo renderizado em sigla. (Document Object Manager)

/* let texto = getElementByTagname(h1)
let menu = getElementById('#menu')
let classe = getElementsByClassName('.classe')
let nome = getElementByName('nome')
let Caruso = querySelector('.caruso')
texto = "batatinha" */


/* let titulo = document.querySelector ('#titulo') */

let nome = document.getElementById('nome') // get especifico do id não precisa de #
let email = window.document.getElementById('email') // "window" antes do document ajuda a completar os comandos
let assunto = window.document.querySelector('#assunto') // querySelector precisa da //#endregion

nome.style.width = '90%'
email.style.width = '90%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome inválido - Digite um nome válido."
        txtNome.style.color = "red"
    }
    else {
        txtNome.innerHTML = ""
        txtNome.style.color = "green"
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1) { //obrigação de incluir um @ no campo EMAIL
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
        
    }
    else {
        txtEmail.innerHTML = ""
        txtEmail.style.color = "green"
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")
    if (assunto.value.length < 4) {
        txtAssunto.innerHTML = "Mínimo de 4 caracteres necessários!"
        txtAssunto.style.color = "red"
    }
    else {
        txtAssunto.innerHTML = ""
        txtAssunto.style.color = "green"
    }
}