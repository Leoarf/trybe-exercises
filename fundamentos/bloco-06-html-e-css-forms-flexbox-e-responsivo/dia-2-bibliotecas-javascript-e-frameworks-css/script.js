const buttonsubmit = document.querySelector("#submit");
const inputname = document.querySelector("#inputname");
const inputemail = document.querySelector("#inputemail");
const form = document.querySelector('#sortsection');
const title = document.querySelector('#title')

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

// Adicione um framework CSS de sua escolha ao formulário que você construiu na última aula e o utilize para estilizar o formulário.
