// Defina uma interface Address com propriedades street, city, zipCode (todas strings).
interface Address {
  street: string;
  city: string;
  zipCode: string;
};

// Defina uma interface Employee que estenda a interface Person (defina-a novamente com name: string; age: number;) e adicione propriedades employeeId (number) e department (string, opcional).
interface Person {
  name: string;
  age: number;
};

interface Employee extends Person {
  employeeId: number;
  department?: string; // Opcional
};

// Defina um type ContactInfo que seja uma união de string | Address.
type ContactInfo = string | Address;

// Defina um type HasId com uma propriedade id: number.
type HasId = {
  id: number;
};

// Defina um type UserWithId que seja uma interseção de Person e HasId.
type UserWithId = Person & HasId;

// Crie objetos que sigam essas novas interfaces e types.
const myAddress: Address = {
  street: "Rua A",
  city: "Cidade B",
  zipCode: "12345-678",
};

const myEmployee: Employee = {
  name: "Carlos",
  age: 40,
  employeeId: 98765,
  department: "TI",
};

const anotherEmployee: Employee = {
  name: "Ana",
  age: 28,
  employeeId: 54321,
  // 'department' é opcional, não precisa estar aqui
};

const contactEmail: ContactInfo = "contato@empresa.com";

const contactLocation: ContactInfo = myAddress; // Pode ser a string ou o objeto Address

const myUserWithId: UserWithId = {
  name: "João",
  age: 30,
  id: 123,
};

console.log("Endereço:", myAddress);
console.log("Funcionário 1:", myEmployee);
console.log("Funcionário 2:", anotherEmployee);
console.log("Informação de contato (email):", contactEmail);
console.log("Informação de contato (endereço):", contactLocation);
console.log("Usuário com ID:", myUserWithId);
