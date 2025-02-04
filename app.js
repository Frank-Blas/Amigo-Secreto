// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Declaramos las variables
let listaNombres = [];
let listaAmigos = document.getElementById("listaAmigos");

function agregarAmigo(){
    //captura el nombre ingresado por el usuario
    let nombresUsuarios = document.getElementById("amigo").value;

    //se valida que no se ingrese espacio en blanco
    if (nombresUsuarios == "") {
        alert("El campo no puede ser vacio!!!");
        limpiarCaja();
        return;
    }

    //validar que no se ingresen nombres repetidos
    if (listaNombres.includes(nombresUsuarios)) {
        alert("Este nombre ya se encuentra en la lista!!!");
        return;
    }
    
    //agrega el nombre al array
    listaNombres.push(nombresUsuarios);
    console.log(listaNombres);

    //mostrar la lista
    mostrarLista();
    
    //se limpia el campo de entrada
    limpiarCaja();
}

//funcion limpiar caja
function limpiarCaja() {
    document.getElementById("amigo").value = "";
}

//funcion mostrar lista
function mostrarLista(){
    listaAmigos.innerHTML = "";

    //recorre el array listaNombres
    for (let i = 0; i < listaNombres.length; i++) {
        
        //crea un nuevo elemento 
       let nuevoElemento = document.createElement("li");

       //asignar el nombre del amigo al contenido del li
       nuevoElemento.textContent = listaNombres[i];
        
       //agregar el li a la lista
       listaAmigos.appendChild(nuevoElemento);
    }
}

//funcion para realizar el sorteo
function sortearAmigo() {
    //validar que el array no este vacio
    if (listaNombres.length === 0) {
        alert("La lista de amigos esta vacia");
        return;
    }

    //generar el indice aleatorio
    let indiceAleatorio = Math.floor(Math.random()*listaNombres.length);
    console.log(indiceAleatorio);

    //obtener el nombre sorteado
    let nombreSorteado = listaNombres[indiceAleatorio];

    //mostramos el resultado en el ul id="resultado"
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    //creamos un nuevo <li> con el nombre sorteado
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombreSorteado;

    //agregamos el <li> al <ul>
    resultado.appendChild(nuevoElemento);
}