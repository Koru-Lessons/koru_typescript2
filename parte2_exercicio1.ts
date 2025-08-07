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
  department?: string;
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
  city: "Cidade das Flores",
  zipCode: "12345-678"
};

const myEmployee: Employee = {
  name: "Ander",
  age: 18,
  employeeId: 98765,
  department: "TI"
};

const anotherEmployee: Employee = {
  name: "Ana",
  age: 28,
  employeeId: 98766,
};

const contactInfo: ContactInfo = myAddress;
const anotherContactInfo: ContactInfo = "ander@escolakoru.com.bnr"

const myUserWithId: UserWithId = {
  name: "José",
  age: 48,
  id: 76532
};

console.log("Endereço:", myAddress);
console.log("Funcionário 1:", myEmployee);
console.log("Funcionário 2:", anotherEmployee);
console.log("Informação de contato (email):", anotherContactInfo);
console.log("Informação de contato (endereço):", myAddress);
console.log("Usuário com ID:", myUserWithId);