// Código typescript
const myButton = document.getElementById("myButton") as HTMLButtonElement | null;
const myInput = document.getElementById("myInput") as HTMLInputElement | null;
const myDiv = document.getElementById("outputDiv") as HTMLDivElement;

if (myButton) {
  console.log("Botão encontrado!", myButton.textContent);
};

if (myInput) {
  console.log("Input encontrado!", myInput.value);
};

if (myDiv) {
  console.log("Div encontrada!", myDiv.innerHTML);
};

myButton?.addEventListener('click', (e: MouseEvent) => {
  console.log("Botão clicado", e);
  myDiv.textContent = "Botão clicado";
});

if (myInput && myDiv) {
  myInput.addEventListener('input', (e: Event) => {
    const target = e.target as HTMLInputElement;
    console.log("Input alterado:", target.value);
    myDiv.textContent = `Texto do input: ${target.value}`;
  })
}

document.addEventListener('keydown', (e: KeyboardEvent) => {
  console.log("Tecla pressionada: ", e.key);
});