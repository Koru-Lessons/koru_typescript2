// Crie um array chamado products que contenha objetos, cada um seguindo uma interface Product (com id, name, price, category). Defina a interface Product.
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
};

const products: Product[] = [
  { id: 1, name: "Laptop", price: 1200, category: "Eletrônicos" },
  { id: 2, name: "Mouse", price: 25, category: "Eletrônicos" },
  { id: 3, name: "Livro TypeScript", price: 50, category: "Livros" },
  { id: 4, name: "Teclado", price: 75, category: "Eletrônicos" },
  { id: 5, name: "Caneta", price: 2, category: "Escritório" },
];

// Use o método map no array products para criar um novo array contendo apenas os nomes dos produtos (um array de strings). 
const productNames: string[] = products.map(product => product.name);

// Use o método filter no array products para criar um novo array contendo apenas os produtos de uma categoria específica. 
const electronicProducts: Array<Product> = products.filter(product => product.category === "Eletrônicos");

// Imprima os resultados de map, filter no console.
console.log("(MAP) Nome dos produtos:", productNames);
console.log("(FILTER) Produtos eletrônicos", electronicProducts);
