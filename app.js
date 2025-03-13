
let amigo = [];

function agregarAmigo() {
let inputAmigo = document.getElementById("amigo");
let nombreAmigo = inputAmigo.value;

if(!nombreAmigo) { // ! se niega variable (sino tengo)
    alert ("Ingresa el nombre");
    return;
    }
 //console.log(nombreAmigo); // f12 valida en consola el nombre add   
    amigo.push(nombreAmigo); //valida el array ls
    inputAmigo.value = "";
    inputAmigo.focus ();
    renderizarAmigos(); //llamo la funcion de add amigos
}    

    function renderizarAmigos(){
        let listaAmigos = document.getElementById("listaAmigos");
        listaAmigos.innerHTML = "";

        for (let i = 0; i < amigo.length; i++){
            let item = document.createElement("li");
            item.textContent = amigo[i];
            listaAmigos.appendChild(item);
        }
    }

    function sortearAmigo(){
        if (amigo.length === 0){  //comparo tipo y valor dif 0
           alert ("No hay amigos para sorteo");
           return;
        }
        let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)]; //fincion matematica para ls
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`; //TS  agrego funcion en html imprima el ganador

        let limpiar = document.getElementById("listaAmigos");
        limpiar.innerHTML = "";
        } 
    


