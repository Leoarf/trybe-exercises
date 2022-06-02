const buttonsubmit = document.querySelector("#submit");
const inputname = document.querySelector("#inputname");
const inputemail = document.querySelector("#inputemail");
const contract = document.querySelector("#contract");

buttonsubmit.addEventListener("click", function (event) {
  // event.preventDefault();
  textInputValidation();
});

function textInputValidation() {
  const email = document.querySelector("#inputemail").value.length;
  const invalidEmail = email < 10;

  const name = document.querySelector("#inputname").value.length;
  const invalidName = name < 10;

  if (invalidEmail || invalidName) {
    window.alert("Dados Inválidos");
  } else {
    window.alert(
      "Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip."
    );
  }
}

contract.addEventListener("change", activeSubmit);

function activeSubmit() {
  buttonsubmit.disabled = !contract.checked;
}

// Adicione um framework CSS de sua escolha ao formulário que você construiu na última aula e o utilize para estilizar o formulário.
