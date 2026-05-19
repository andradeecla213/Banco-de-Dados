/*
var num1    //Global - não tem segurança, evitar
let num2   //funciona de fora para dentro função e dentro 
const total // apenas dentro da função e seu valor é imutável,
            // deve ser inicializada.  
*/

function mostrar(){

    let nome = document.querySelector("#nome").value
    let lg = document.querySelector("#login").value
    let sn = document.querySelector("#senha").value
    let mail= document.querySelector("#email").value



    alert ("Seu nome é: " + nome + "\n seu login é: " + lg +
                                   "\n sua senha é: " + sn + 
                                   "\n seu e-mail é: " + mail) //Concatenar
    console.log("Seu nome é: " + nome)
}