// Declare um array chamado numbers que só pode conter números. Adicione alguns números a ele
const numbers: Array<number> = [1, 7, 13, 20, 23];
// const numbers: number[] = [1, 7, 13, 20, 23];

// Declare um array chamado fruits que só pode conter strings. Adicione alguns nomes de frutas a ele.
const fruits: string[] = ['banana', 'orange', 'manga'];

// Declare um array chamado mixedArray que pode conter números OU strings (usando o tipo união |). Adicione elementos de ambos os tipos.
const mixedArray: (number | string)[] = [1,'banana'];

console.log({numbers, fruits, mixedArray});
