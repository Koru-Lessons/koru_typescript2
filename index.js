// Código typescript
var myButton = document.getElementById("myButton");
var myInput = document.getElementById("myInput");
var myDiv = document.getElementById("outputDiv");
if (myButton) {
    console.log("Botão encontrado!", myButton.textContent);
}
;
if (myInput) {
    console.log("Input encontrado!", myInput.value);
}
;
if (myDiv) {
    console.log("Div encontrada!", myDiv.innerHTML);
}
;
myButton === null || myButton === void 0 ? void 0 : myButton.addEventListener('click', function (e) {
    console.log("Botão clicado", e);
    myDiv.textContent = "Botão clicado";
});
if (myInput && myDiv) {
    myInput.addEventListener('input', function (e) {
        var target = e.target;
        console.log("Input alterado:", target.value);
        myDiv.textContent = "Texto do input: ".concat(target.value);
    });
}
document.addEventListener('keydown', function (e) {
    console.log("Tecla pressionada: ", e.key);
});
