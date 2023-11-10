//um array é uma estrutura de dados que permite armazenar vários valores em uma única variável. Esses valores podem ser de qualquer tipo, como números, strings, objetos e até mesmo outros arrays. Os arrays em JavaScript são objetos especiais com propriedades e métodos específicos que facilitam a manipulação de conjuntos de dados.
let listaDeNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentivas = 1;
// "document" refere-se ao objeto Document. O objeto Document representa a estrutura do documento HTML em uma página da web.
//O método querySelector é usado para selecionar o primeiro elemento que corresponde a um seletor CSS especificado.
//"innerHTML" em JavaScript refere-se a uma propriedade do objeto DOM (Modelo de Objeto de Documento). Essa propriedade permite que você obtenha ou defina o conteúdo HTML de um elemento.
function exibirTextoNatela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.1})
}
function exibirMensagemInicial() {
    exibirTextoNatela('h1', 'Jogo do número secreto');
    exibirTextoNatela('p', 'Escolha um numero de 1 e 10');
}
exibirMensagemInicial();
// função é um bloco de código que pode ser chamado ou invocado para realizar uma tarefa específica. 
function verificarChute() {
    let chute = document.querySelector('input').value; 
    if (chute == numeroSecreto) {
        exibirTextoNatela('h1', 'Acertou!');
        let palavraTentativa = tentivas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentivas} ${palavraTentativa}`;
        exibirTextoNatela('p', mensagemTentativas);
        //removeAttribute é usado para remover um atributo de um elemento HTML. Ele pertence ao objeto Element no DOM (Modelo de Objeto de Documento) e é uma forma de manipular dinamicamente os atributos de elementos HTML.
        //"getElementById" em JavaScript é uma função do objeto Document que é usada para obter uma referência a um elemento HTML com base no valor do atributo "id" desse elemento
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNatela('p', 'O número secreto é menor');
        } else {
            exibirTextoNatela('p', 'O número secreto é maior');
        }
        tentivas++;
        limparCampo();
    }
}
function gerarNumeroAleatorio() {
    //Math.random em JavaScript é um método que retorna um número de ponto flutuante pseudoaleatório no intervalo de 0 (inclusive) a 1 (exclusive). Isso significa que o número gerado pode ser 0, mas nunca será exatamente 1.
    //usamos Math.floor ou parseInt para arredondar para o número inteiro mais próximo. Finalmente, adicionamos 1 para garantir que o número esteja no intervalo desejado (1 a 10, inclusive).
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    //Em JavaScript, a propriedade length é utilizada para obter ou definir o número de elementos em uma array ou o número de caracteres em uma string. Essa propriedade é muito útil para realizar operações que envolvem a contagem de elementos em uma estrutura de dados.
    let quantidadesDeElimentosNaLista = listaDeNumerosSorteados.length;
    if (quantidadesDeElimentosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
//o método includes() é utilizado para verificar se uma determinada string contém outra string ou se um array contém um determinado elemento. Ele retorna um valor booleano (true ou false) com base na presença ou ausência do elemento procurado.
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        //o método push() é utilizado em arrays para adicionar um ou mais elementos ao final do array. Ele modifica o array original e retorna o novo comprimento do array.
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
// "return" usada dentro de uma função para especificar o valor que a função deve retornar quando é chamada ou invocada. Em outras palavras, "return" é usado para enviar um valor de volta ao local onde a função foi chamada.
        return numeroEscolhido;
    }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentivas = 1;
    exibirMensagemInicial();
    //setAttribute é usado para definir ou modificar o valor de um atributo em um elemento HTML. Ele pertence ao objeto Element no DOM (Modelo de Objeto de Documento) e é uma maneira de manipular dinamicamente os atributos de elementos HTML.
    document.getElementById("reiniciar").setAttribute('disabled', true);
}