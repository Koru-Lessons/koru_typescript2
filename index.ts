// - Selecione o botão usando document.getElementById e tipá-lo como HTMLButtonElement | null.
// - Selecione o input usando document.querySelector e tipá-lo como HTMLInputElement | null.
// -- Selecione a div usando document.querySelector e tipá-la como HTMLDivElement | null.

const myButton = document.getElementById('myButton') as HTMLButtonElement | null;
const myInput = document.querySelector('#myInput') as HTMLInputElement | null;
const outputDiv = document.querySelector('#outputDiv') as HTMLDivElement | null;

// - Verifique se os elementos foram encontrados (if (...)).
// - Se encontrados, imprima o textContent do botão, o value do input e o innerHTML da div no console.
if (myButton) {
  console.log("Botão encontrado:", myButton.textContent);
  // myButton.value = "novo valor"; // TypeScript reclama, pois value não existe em HTMLButtonElement
} else {
  console.error("Botão com ID 'myButton' não encontrado.");
};

if (myInput) {
  // console.log(myInput.textContent); // textContent existe em HTMLElement (pai), mas value é mais específico para input
  console.log("Input encontrado:", myInput.value);
  myInput.value = "Hello from TS!"; // OK, value existe em HTMLInputElement
} else {
  console.error("Input com ID 'myInput' não encontrado.");
};

if (outputDiv) {
  // console.log(outputDiv.value); // TypeScript reclama, pois value não existe em HTMLDivElement
  console.log("Div de saída encontrada:", outputDiv.innerHTML);
  outputDiv.innerHTML = "<strong>Conteúdo atualizado pela solução TS!</strong>"; // OK, innerHTML existe em HTMLDivElement
} else {
  console.error("Div com ID 'outputDiv' não encontrada.");
};

// Adicione um event listener de click ao botão. Tipagem para o evento de clique (MouseEvent). Dentro do listener, mude o textContent da div para "Botão clicado!".
if (myButton && outputDiv) {
  myButton.addEventListener('click', (event: MouseEvent) => {
    console.log('Botão clicado!', event);
    outputDiv.textContent = "Botão clicado!"; // Atualiza o texto da div
    // console.log(event.key); // TypeScript reclama, key não existe em MouseEvent
  });
};

// Adicione um event listener de input ou change ao input. Adicione tipagem para o evento. Dentro do listener, atualize o textContent da div com o texto atual do input (event.target as HTMLInputElement).
if (myInput && outputDiv) {
  myInput.addEventListener('input', (event: Event) => {
    const target = event.target as HTMLInputElement;
    console.log('Input alterado:', target.value);
    outputDiv.textContent = `Texto do input: ${target.value}`; // Atualiza o texto da div
  });
};

// Adicione um event listener de keydown ao document. Adicione tipagem para o evento. Dentro do listener, imprima qual tecla foi pressionada (event.key) no console.
document.addEventListener('keydown', (event: KeyboardEvent) => {
  console.log('Tecla pressionada:', event.key);
});
