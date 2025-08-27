 const prompt = require('prompt-sync')({singint: true});
 let titulo = [];
 let autor = [];

 function menu() {
    console.log("1-Adicionar Título: ");
    console.log("2-Adicionar Autor: ");
    console.log("3-Pesquisar Título:");
    console.log("4-Pesquisar Autor: ");
    console.log("5-Sair");
    console.log("Opção Inválida");
 }
 menu();

 switch(opcao){
    case 1:
        console.log();
        break;
    case 2:
        console.log();
        break;
    case 3:
        console.log();
        break;
    case 4:
        console.log();
        break;
    case 5:
        console.log();
        break;
    default:
        console.log();

 }

 function incluirLivro() {
    let tituloLivro =  prompt("Digite o titulo do livro: ");
    titulo.push(tituloLivro);

    let autorLivro = prompt ("Digite o nome do autor: ");
    autor.push(autorLivro);
    
 }
 incluirLivro();

 console.log(titulo, autor);
 

 