let listaAmigos = [];

function adicionarAmigo(){
    let nome = document.getElementById('amigo').value.trim();
     if (nome === '') {
        document.getElementById('erro').innerText = 'Por favor, insira um nome válido.';
        return;
    }
    if (listaAmigos.includes(nome)) {
        document.getElementById('erro').innerText= 'Esse nome já foi adicionado.';
        return;
    }

    listaAmigos.push(nome);
    const li = document.createElement('li');
    li.textContent = nome;
    document.getElementById('listaAmigos').appendChild(li);
    document.getElementById('amigo').value = '';
    habilitarReset();
}

function sortearAmigo(){

     if (listaAmigos.length === 0) {
        document.getElementById('erro').innerText= 'Para sortear é necessário adicionar pelo menos 1 nome.';
    }
    else {
        const index = Math.floor(Math.random() * listaAmigos.length);
        const sorteado = listaAmigos.splice(index, 1)[0];
        document.getElementById('resultado').innerText = `Seu amigo secreto é: ${sorteado}`;
        const ul = document.getElementById('listaAmigos');
        ul.removeChild(ul.children[index]);
    }
}

function limparLista() {
    listaAmigos = [];
    ['listaAmigos', 'resultado', 'erro'].forEach(id => {
        document.getElementById(id).innerHTML = "";
    });
    habilitarReset();
}

function habilitarReset() {
    if (listaAmigos.length == 0) {
        document.getElementById('reset').setAttribute('disabled',true);
    }
    else{
        document.getElementById('reset').removeAttribute('disabled');
    }
}