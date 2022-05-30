function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days". Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>

const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

const numberDays = document.querySelector("#days");

function createDaysOfTheMonth() {
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let numberDay = dezDaysList[index];
    let liDay = document.createElement("li");
    if (numberDay === 24 || numberDay === 31) {
      liDay.className = "day holiday";
      liDay.innerHTML = numberDay;
      numberDays.appendChild(liDay);
    } else if (numberDay === 4 || numberDay === 11 || numberDay === 18) {
      liDay.className = "day friday";
      liDay.innerHTML = numberDay;
      numberDays.appendChild(liDay);
    } else if (numberDay === 25) {
      liDay.className = "day holiday friday";
      liDay.innerHTML = numberDay;
      numberDays.appendChild(liDay);
    } else {
      liDay.className = "day";
      liDay.innerHTML = numberDay;
      numberDays.appendChild(liDay);
    }
  }
}

createDaysOfTheMonth();

// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday".
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

function createButton(stringholiday) {
  let buttonString = document.createElement("button");
  buttonString.innerHTML = stringholiday;
  buttonString.id = "btn-holiday";
  document.querySelector(".buttons-container").appendChild(buttonString);
}

createButton("Feriados");

// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday".
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)".

function displayHolidays() {
  let getHolidayButton = document.querySelector("#btn-holiday");
  let getHolidays = document.querySelectorAll(".holiday");
  let oldBackgroundColor = "rgb(238,238,238)";
  let setNewColor = "red";

  getHolidayButton.addEventListener("click", function () {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = oldBackgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  });
}

displayHolidays();

// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday".
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

function createButton2(stringfriday) {
  let buttonString2 = document.createElement("button");
  buttonString2.innerHTML = stringfriday;
  buttonString2.id = "btn-friday";
  document.querySelector(".buttons-container").appendChild(buttonString2);
}

createButton2("Sexta-feira");

// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

function displayFridays(fridaysArray) {
  let getFridayButton = document.querySelector("#btn-friday");
  let getFridays = document.querySelectorAll(".friday");
  let newFridayText = "SEXTOU o/";

  getFridayButton.addEventListener("click", function () {
    for (let index = 0; index < getFridays.length; index += 1) {
      if (getFridays[index].innerHTML !== newFridayText) {
        getFridays[index].innerHTML = newFridayText;
      } else {
        getFridays[index].innerHTML = fridaysArray[index];
      }
    }
  });
}

let dezFridays = [4, 11, 18, 25];
displayFridays(dezFridays);

// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

function dayMouseOver() {
  let days = document.querySelector("#days");

  days.addEventListener("mouseover", function (event) {
    event.target.style.fontSize = "30px";
    event.target.style.fontWeight = "600";
  });
}

function dayMouseOut() {
  let days = document.querySelector("#days");

  days.addEventListener("mouseout", function (event) {
    event.target.style.fontWeight = "200";
    event.target.style.fontSize = "20px";
  });
}

dayMouseOver();
dayMouseOut();

// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function addTask(stringtaskname) {
  let span = document.createElement("span");
  span.innerHTML = stringtaskname;
  document.querySelector(".my-tasks").appendChild(span);
}

addTask("Cozinhar");

// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task.
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function subtitleColorTask(stringColor) {
  let div = document.createElement("div");
  div.className = "task";
  div.style.backgroundColor = stringColor;
  document.querySelector(".my-tasks").appendChild(div);
}

subtitleColorTask("red");

// Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected, ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

let divMod = document.querySelector(".task");

function addEvent() {
  divMod.addEventListener("click", function () {
    if (divMod.className !== "task selected") {
      divMod.className = "task selected";
    } else {
      divMod.className = "task";
    }
  });
}

addEvent();

// Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119).

function setDayColor() {
  let selectedTask = document.getElementsByClassName("task selected");
  let days = document.querySelector("#days");
  let taskDiv = document.querySelector(".task");
  let taskColor = taskDiv.style.backgroundColor;

  days.addEventListener("click", function (event) {
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = "rgb(119,119,119)";
    }
  });
}

setDayColor();
