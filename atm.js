
const botondeposito = document.querySelector("#depositos")
const modal = document.querySelector("#modal")
let userdata = {}


document.addEventListener("DOMContentLoaded", function(){
    
    const correctUserString = sessionStorage.getItem("correctUser")
    const correctUser = JSON.parse(correctUserString)
    //if (!correctUser) window.location.href = "/index.html"

    userdata = correctUser

    const saludoTag = document.querySelector("#saludo_usuario")
    saludoTag.outerHTML = `<h1>Bienvenido ${correctUser.nombre}</h1>`
    console.log({ correctUser })
}) 

botondeposito.addEventListener("click", function(){
    window.location.href = "/pantalla.html"
})
