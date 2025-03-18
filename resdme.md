Resumo - Conceitos Avançados de TypeScript
1. Interfaces e Tipagem Avançada
1.1. Interfaces
Definem a estrutura de um objeto.
Podem ter propriedades opcionais (?).
Exemplo:


# TS

interface Usuario {
    nome: string;
    idade: number;
    email?: string;
}
# 1.2. Interfaces com Funções
Podem descrever assinaturas de funções.
Exemplo:
# ts

interface Soma {
    (a: number, b: number): number;
}
const somar: Soma = (x, y) => x + y;
# 1.3. Extensão de Interfaces
Permite herdar propriedades de outra interface.
Exemplo:
# ts

interface Animal { nome: string; idade: number; }
interface Cachorro extends Animal { raca: string; }
# 2. Generics
2.1. Função Genérica
Permite que funções aceitem diferentes tipos.
Exemplo:
# ts

function retornarElemento<T>(elemento: T): T {
    return elemento;
}
# 2.2. Generics em Interfaces
Torna interfaces flexíveis para qualquer tipo de dado.
Exemplo:
# ts

interface RespostaAPI<T> {
    data: T;
    sucesso: boolean;
}
# 2.3. Generics em Classes
Permite criar classes reutilizáveis para diferentes tipos de dados.
Exemplo:
# ts

class Caixa<T> {
    conteudo: T;
    constructor(conteudo: T) { this.conteudo = conteudo; }
    obterConteudo(): T { return this.conteudo; }
}
# 3. Manipulação Avançada de Tipos
3.1. Type Alias
Define apelidos para tipos complexos.
Exemplo:
# ts

type ID = string | number;
# 3.2. Union Types
Permite que uma variável aceite mais de um tipo.
Exemplo:
#ts

let resposta: string | boolean;
# 3.3. Intersection Types
Junta propriedades de múltiplos tipos.
Exemplo:
#ts

type Pessoa = { nome: string; idade: number; };
type Funcionario = { cargo: string; salario: number; };
type FuncionarioDetalhado = Pessoa & Funcionario;
#3.4. Utility Types
Partial<T>: Torna todas as propriedades opcionais.
Exemplo:
#ts

const produtoParcial: Partial<Produto> = { nome: "Notebook" };
# 4. Boas Práticas em TypeScript
4.1. Evite o uso de any
Prefira tipos específicos para evitar perda de segurança.
4.2. Prefira Interfaces em vez de type quando aplicável
Interfaces são mais flexíveis e podem ser estendidas.
4.3. Utilize Readonly
Garante que certas propriedades não sejam modificadas.
Exemplo:
# ts

interface Config { readonly versao: string; }
4.4. Documentação com JSDoc
Ajuda na manutenção do código.
Exemplo:
# ts

/**
 * Soma dois números.
 * @param a Primeiro número.
 * @param b Segundo número.
 * @returns Soma dos números.
 */
function somarValores(a: number, b: number): number {
    return a + b;
}
