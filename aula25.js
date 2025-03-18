// 1. Interfaces e Tipagem Avançada (Simulado sem TypeScript)

// 1.1. Simulando Interfaces
const usuario1 = {
    nome: "Ana",
    idade: 25
};

// 1.2. Funções
const somar = (x, y) => x + y;
console.log(somar(10, 5));

// 1.3. Extensão de "Interfaces" com Objetos
const meuCachorro = {
    nome: "Rex",
    idade: 4,
    raca: "Labrador"
};

// 2. Generics (Simulado sem TypeScript)

// 2.1. Função Genérica
function retornarElemento(elemento) {
    return elemento;
}
console.log(retornarElemento(10));
console.log(retornarElemento("Olá JavaScript"));

// 2.2. Simulando Generics em Objetos
const respostaTexto = {
    data: "Dados recebidos com sucesso!",
    sucesso: true
};

const respostaNumerica = {
    data: 200,
    sucesso: true
};

// 2.3. Simulando Generics em Classes
class Caixa {
    constructor(conteudo) {
        this.conteudo = conteudo;
    }
    obterConteudo() {
        return this.conteudo;
    }
}
const caixaNumerica = new Caixa(100);
console.log(caixaNumerica.obterConteudo());
const caixaTexto = new Caixa("Presente");
console.log(caixaTexto.obterConteudo());

// 3. Manipulação Avançada de Tipos

// 3.1. Union Types Simulado
function buscarUsuario(id) {
    console.log(`Buscando usuário com ID: ${id}`);
}

// 3.2. Union Types em Variáveis
let resposta;
resposta = "Sucesso";
console.log(resposta);
resposta = true;
console.log(resposta);

// 3.3. Intersection Types Simulado
const funcionario1 = {
    nome: "Carlos",
    idade: 35,
    cargo: "Engenheiro",
    salario: 5000
};

// 3.4. Simulando Utility Types
const produtoParcial = {
    nome: "Notebook"
};

// 4. Boas Práticas em JavaScript
let valorCerto = "Teste";

const configApp = { versao: "1.0.0" };

/**
 * Soma dois números e retorna o resultado.
 * @param {number} a Primeiro número
 * @param {number} b Segundo número
 * @returns {number} Soma dos dois valores
 */
function somarValores(a, b) {
    return a + b;
}

// Exercícios

// Exercício 1
const meuCarro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022
};
console.log(meuCarro);

// Exercício 2
const multiplicar = (x, y) => x * y;
console.log(multiplicar(4, 5));

// Exercício 3
function inverterArray(array) {
    return array.reverse();
}
console.log(inverterArray([1, 2, 3]));
console.log(inverterArray(["a", "b", "c"]));

// Exercício 4
class UsuarioRepositorio {
    constructor() {
        this.usuarios = [];
    }
    salvar(dado) {
        this.usuarios.push(dado);
    }
    obterTodos() {
        return this.usuarios;
    }
}
const repo = new UsuarioRepositorio();
repo.salvar({ nome: "João", email: "joao@email.com" });
console.log(repo.obterTodos());

// Exercício 5
function processarResposta(resposta) {
    console.log(`Processando resposta: ${resposta}`);
}
processarResposta("Sucesso");
processarResposta(false);

// Exercício 6
const estudanteTrabalhador = {
    nome: "Mariana",
    curso: "Engenharia",
    empresa: "Tech Corp",
    cargo: "Desenvolvedora"
};
console.log(estudanteTrabalhador);
