// Declare um objeto chamado person com as seguintes propriedades e seus tipos:
// name: string
// age: number
// city: string
// isEmployed: boolean
interface Person {
  name: string;
  age: number;
  city: string;
  isEmployed: boolean;
}

const person: Person = {
  name: "Ander",
  age: 18,
  city: "Jumirim/SP",
  isEmployed: true,
}

console.log(person.name, person.city);
