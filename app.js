//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];


function adicionarAmigo(){
    let nome = document.getElementById('amigo').value.trim();
     if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }
    if (listaAmigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }

    listaAmigos.push(nome);
    console.log(listaAmigos);
   
    const li = document.createElement("li");
    li.textContent = nome;
    document.getElementById("listaAmigos").appendChild(li);

    document.getElementById('amigo').value = "";
}

function getAmigoSecreto(){

}
function sortearAmigo() {
    let amigoSecreto = getRandomName(listaAmigos);
}