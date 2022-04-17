const livros = require('./database')
//console.log(livros)

//pegar o input
const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro?S/N')

//Se for sim, mostrar as categorias disponíveis, perguntar qual categoria ela escolhe

if(entradaInicial.toLocaleLowerCase() === 's') {
    console.log('Essas são as categorias disponíveis:')
    console.log('/Produtividade', '/Estilo')

    const estradaCategoria = readline.question('Qual categoria voce escolhe:')

    const retorno = livros.filter(livro => livro.categoria === estradaCategoria)

    console.table(retorno)

    //Se não, mostrar todos os livros em ordem crescente pela quantidade de páginas
} else {
    const livrosOrdenados = livros.sort((a,b) =>a.paginas -b.paginas)
    console.log('Esses sao todos os livros disponívels:')
    console.table(livros)
}

