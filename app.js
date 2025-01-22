let amigosLista = document.getElementById("listaAmigos")
let amigoSecreto = document.getElementById("resultado")
let titulo = document.querySelector("h2")
let nombreAmigo = document.getElementById("amigo").focus()
let amigos = []


let index = 0
let amigo;


function escribirTitulo(texto) {
    titulo.innerHTML = texto
}

function agregarAmigo(){
    nombreAmigo = document.getElementById("amigo").value
    if (nombreAmigo == "") {
        escribirTitulo("¡Debes agregar un nombre valido!")
    }
    else {
        escribirTitulo("¡Agrega más amigos si lo deseas!")
        amigos.push(nombreAmigo)
        while (index < amigos.length) {
            amigo = amigos[index]
            let elementoLi = document.createElement("li")
            amigosLista.appendChild(elementoLi)
            elementoLi.innerHTML = amigo
            nombreAmigo = document.getElementById("amigo").value = ""
            nombreAmigo = document.getElementById("amigo").focus()
            index++
        }
    }
}

function sortearAmigo() {
    if (amigos.length == 0) {
        escribirTitulo("¡No has agregado amigos aún!")
        nombreAmigo = document.getElementById("amigo").focus()
    }
    else {
        let numeroRandom = Math.floor(Math.random() * amigos.length)
        amigoSecreto.innerHTML = amigos[numeroRandom]
    }
}