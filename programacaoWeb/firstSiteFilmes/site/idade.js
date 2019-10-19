//16 pode entrar
//= 18 pode entrar e beber
//> 18 pode entrar, beber e sala VIP

var age = Number(prompt("Introduza a sua idade"))
var password = "mercedes".toLowerCase
var user = "king".toLowerCase

if(age < 16)
{
    alert("Não podes entrar!")
}
else if(age >= 16 && age < 18)
{
    alert("Pode entrar")
}
else if(age === 18)
{
    alert("Pode Entrar e Beber")
}
else if(age > 18)
{
    var answer = prompt("Pode entrar e beber. Deseja entrar na zona VIP?")

    if(answer === "yes")
    {
        var user = prompt("User:")
        var password = prompt("Password:")

        if(user === user && password === password)
        {
            alert("Bem vindo a zona VIP!!")
        }
        else
            alert("credenciais erradas!!")
    }
    else if(answer === "no")
    {
        alert("Ok, Volte quando quiser!")
    }
}