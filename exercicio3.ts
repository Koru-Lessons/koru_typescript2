// No seu index.html, adicione:
// - Um botão com id="myButton".
// - Um input de texto com id="myInput".
// - Uma div vazia com id="outputDiv".

// No seu index.ts:
// - Selecione o botão usando document.getElementById e tipá-lo como HTMLButtonElement | null.
// - Selecione o input usando document.querySelector e tipá-lo como HTMLInputElement | null.
// Selecione a div usando document.querySelector e tipá-la como HTMLDivElement | null.

// - Verifique se os elementos foram encontrados (if (...)).
// - Se encontrados, imprima o textContent do botão, o value do input e o innerHTML da div no console.
// - Tente acessar uma propriedade que não existe em um tipo específico (ex: .value em um HTMLDivElement) e veja o erro de tipagem.
