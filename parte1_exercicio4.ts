// Escreva uma função chamada add que recebe dois argumentos do tipo number e retorna a soma deles (do tipo number).
function add(a: number, b:number): number {
  return a + b;
};

// Escreva uma função chamada greet que recebe um argumento name do tipo string e retorna uma string de saudação (ex: "Olá, [name]!").
function greet(name: string): string {
  return `Olá, ${name}`;
};

// Escreva uma função chamada logMessage que recebe um argumento message do tipo string e não retorna nada (void). Esta função deve apenas imprimir a mensagem no console.
function logMessage(message: string): void {
  console.log(message);
};

// Chame cada função com argumentos apropriados e imprima os resultados das funções add e greet.
const soma = add(5, 7); 
console.log(soma);

const saudacao = greet("Ander");
console.log(saudacao);

logMessage("Esta é uma mensagem");