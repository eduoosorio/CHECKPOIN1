// 1. Interfaces e Tipagem Avançada

// 1.1. Interfaces
interface Usuario {
    nome: string;
    idade: number;
    email?: string;
}

const usuario1: Usuario = {
    nome: "Ana",
    idade: 25
};

// 1.2. Interfaces com Funções
interface Soma {
    (a: number, b: number): number;
}

const somar: Soma = (x, y) => x + y;
console.log(somar(10, 5));

// 1.3. Extensão de Interfaces
interface Animal {
    nome: string;
    idade: number;
}

interface Cachorro extends Animal {
    raca: string;
}

const meuCachorro: Cachorro = {
    nome: "Rex",
    idade: 4,
    raca: "Labrador"
};

// 2. Generics

// 2.1. Função Genérica
function retornarElemento<T>(elemento: T): T {
    return elemento;
}
console.log(retornarElemento<number>(10));
console.log(retornarElemento<string>("Olá TypeScript"));

// 2.2. Generics em Interfaces
interface RespostaAPI<T> {
    data: T;
    sucesso: boolean;
}

const respostaTexto: RespostaAPI<string> = {
    data: "Dados recebidos com sucesso!",
    sucesso: true
};

const respostaNumerica: RespostaAPI<number> = {
    data: 200,
    sucesso: true
};

// 2.3. Generics em Classes
class Caixa<T> {
    conteudo: T;
    constructor(conteudo: T) {
        this.conteudo = conteudo;
    }
    obterConteudo(): T {
        return this.conteudo;
    }
}

const caixaNumerica = new Caixa<number>(100);
console.log(caixaNumerica.obterConteudo());

const caixaTexto = new Caixa<string>("Presente");
console.log(caixaTexto.obterConteudo());

// 3. Manipulação Avançada de Tipos

// 3.1. Type Alias
type ID = string | number;
function buscarUsuario(id: ID) {
    console.log(`Buscando usuário com ID: ${id}`);
}

// 3.2. Union Types
let resposta: string | boolean;
resposta = "Sucesso";
console.log(resposta);
resposta = true;
console.log(resposta);

// 3.3. Intersection Types
type Pessoa = {
    nome: string;
    idade: number;
};

type Funcionario = {
    cargo: string;
    salario: number;
};

type FuncionarioDetalhado = Pessoa & Funcionario;
const funcionario1: FuncionarioDetalhado = {
    nome: "Carlos",
    idade: 35,
    cargo: "Engenheiro",
    salario: 5000
};

// 3.4. Utility Types
interface Produto {
    id: number;
    nome: string;
    preco: number;
}

const produtoParcial: Partial<Produto> = {
    nome: "Notebook"
};

// 4. Boas Práticas em TypeScript

// 4.1. Evite o uso de any
let valorCerto: string | number = "Teste";

// 4.2. Prefira Interfaces
type Cliente = {
    nome: string;
    idade: number;
};

// 4.3. Utilize Readonly
interface Config {
    readonly versao: string;
}

const configApp: Config = { versao: "1.0.0" };

// 4.4. Documentação usando JSDoc
/**
 * Soma dois números e retorna o resultado.
 * @param a Primeiro número
 * @param b Segundo número
 * @returns Soma dos dois valores
 */
function somarValores(a: number, b: number): number {
    return a + b;
}

// Exercícios

// 1. Interfaces e Tipagem Avançada

// Exercício 1
interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    motor?: string;
}

const meuCarro: Carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022
};
console.log(meuCarro);

// Exercício 2
interface Multiplicacao {
    (a: number, b: number): number;
}
const multiplicar: Multiplicacao = (x, y) => x * y;
console.log(multiplicar(4, 5));

// 2. Generics

// Exercício 3
function inverterArray<T>(array: T[]): T[] {
    return array.reverse();
}
console.log(inverterArray<number>([1, 2, 3]));
console.log(inverterArray<string>(["a", "b", "c"]));

// Exercício 4
interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
}

class UsuarioRepositorio implements Repositorio<{ nome: string; email: string; }> {
    private usuarios: { nome: string; email: string; }[] = [];
    
    salvar(dado: { nome: string; email: string; }): void {
        this.usuarios.push(dado);
    }
    
    obterTodos(): { nome: string; email: string; }[] {
        return this.usuarios;
    }
}

const repo = new UsuarioRepositorio();
repo.salvar({ nome: "João", email: "joao@email.com" });
console.log(repo.obterTodos());

// 3. Manipulação Avançada de Tipos

// Exercício 5
type RespostaServidor = string | boolean;
function processarResposta(resposta: RespostaServidor) {
    console.log(`Processando resposta: ${resposta}`);
}
processarResposta("Sucesso");
processarResposta(false);

// Exercício 6
type Estudante = {
    nome: string;
    curso: string;
};

type Trabalhador = {
    empresa: string;
    cargo: string;
};

type EstudanteTrabalhador = Estudante & Trabalhador;

const estudanteTrabalhador: EstudanteTrabalhador = {
    nome: "Mariana",
    curso: "Engenharia",
    empresa: "Tech Corp",
    cargo: "Desenvolvedora"
};
console.log(estudanteTrabalhador);
