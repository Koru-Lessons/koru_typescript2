// - Selecione o botão usando document.getElementById e tipá-lo como HTMLButtonElement | null.
// - Selecione o input usando document.querySelector e tipá-lo como HTMLInputElement | null.
// -- Selecione a div usando document.querySelector e tipá-la como HTMLDivElement | null.
var myButton = document.getElementById('myButton');
var myInput = document.querySelector('#myInput');
var outputDiv = document.querySelector('#outputDiv');
// - Verifique se os elementos foram encontrados (if (...)).
// - Se encontrados, imprima o textContent do botão, o value do input e o innerHTML da div no console.
if (myButton) {
    console.log("Botão encontrado:", myButton.textContent);
    // myButton.value = "novo valor"; // TypeScript reclama, pois value não existe em HTMLButtonElement
}
else {
    console.error("Botão com ID 'myButton' não encontrado.");
}
;
if (myInput) {
    // console.log(myInput.textContent); // textContent existe em HTMLElement (pai), mas value é mais específico para input
    console.log("Input encontrado:", myInput.value);
    myInput.value = "Hello from TS!"; // OK, value existe em HTMLInputElement
}
else {
    console.error("Input com ID 'myInput' não encontrado.");
}
;
if (outputDiv) {
    // console.log(outputDiv.value); // TypeScript reclama, pois value não existe em HTMLDivElement
    console.log("Div de saída encontrada:", outputDiv.innerHTML);
    outputDiv.innerHTML = "<strong>Conteúdo atualizado pela solução TS!</strong>"; // OK, innerHTML existe em HTMLDivElement
}
else {
    console.error("Div com ID 'outputDiv' não encontrada.");
}
;
