const button = document.getElementById("botao");
const span = document.getElementById("contador");
let clickCount = 0;

button.addEventListener("click", () => {
  clickCount += 1;
  span.innerText = clickCount;
});
