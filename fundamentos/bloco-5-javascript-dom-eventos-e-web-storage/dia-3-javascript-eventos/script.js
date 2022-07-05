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
/* Exe 1 */

let decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
let elementUl = document.getElementById("days");

for (let i = 0; i < decemberDaysList.length; i += 1) {
  const elementLi = document.createElement("li");
  elementLi.innerText = decemberDaysList[i];
  elementLi.classList.add("day");
  elementUl.appendChild(elementLi);

  if (
    elementLi.innerText == "24" ||
    elementLi.innerText == "25" ||
    elementLi.innerText == "31"
  ) {
    elementLi.classList.add("holiday");
  }
  if (
    elementLi.innerText == "4" ||
    elementLi.innerText == "11" ||
    elementLi.innerText == "18" ||
    elementLi.innerText == "25"
  ) {
    elementLi.classList.add("friday");
  }
}

/* Exe 2 */

const classeButtonsContainer = document.querySelector(".buttons-container");

function feriados(buttonName) {
  const elementButton = document.createElement("button");
  classeButtonsContainer.appendChild(elementButton);
  elementButton.innerText = buttonName;
  elementButton.id = "btn-holiday";
}
feriados("Feriados");

/* Exe 3 */

const botaoFeriados = document.querySelector("#btn-holiday");

function feriadosActive() {
  const classHoliday = document.getElementsByClassName("holiday");
  let corDeFundo = "rgb(238,238,238)";
  let novaCor = "lightblue";

  for (let i = 0; i < classHoliday.length; i += 1) {
    if (classHoliday[i].style.backgroundColor === novaCor) {
      classHoliday[i].style.backgroundColor = corDeFundo;
    } else {
      classHoliday[i].style.backgroundColor = novaCor;
    }
  }
}

botaoFeriados.addEventListener("click", feriadosActive);

/* Exe 4 */

function sexta(buttonName) {
  const elementButton = document.createElement("button");
  classeButtonsContainer.appendChild(elementButton);
  elementButton.innerText = buttonName;
  elementButton.id = "btn-friday";
}
sexta("Sexta-Feira");

/* Exe 5 */
const botaoSextou = document.getElementById("btn-friday");

function sextaActive() {
  const classFriday = document.getElementsByClassName("friday");
  let decemberFridays = [4, 11, 18, 25];

  for (let i = 0; i < classFriday.length; i += 1) {
    if (classFriday[i].innerHTML !== "Sextouuu bebe!") {
      classFriday[i].innerHTML = "Sextouuu bebe!";
    } else {
      classFriday[i].innerHTML = decemberFridays[i];
    }
  }
}

botaoSextou.addEventListener("click", sextaActive);

/* Exe 6 */

const dias = document.getElementById("days");

function zoomIn(event) {
  event.target.style.fontSize = "30px";
  event.target.style.fontWeight = "600";
}

function zoomOut(event) {
  event.target.style.fontSize = "20px";
  event.target.style.fontWeight = "200";
}

dias.addEventListener("mouseover", zoomIn);
dias.addEventListener("mouseout", zoomOut);

/* Exe 7 */
const tasksPlace = document.querySelector(".my-tasks");

function adicionandoTarefas(task) {
  const elementSpan = document.createElement("span");
  elementSpan.innerText = task;
  tasksPlace.appendChild(elementSpan);
}

adicionandoTarefas("projeto 1");

/* Exe 8 */
function adicionandoLegenda(cor) {
  const elementDiv = document.createElement("div");
  elementDiv.style.backgroundColor = cor;
  elementDiv.classList.add("task");
  tasksPlace.appendChild(elementDiv);
}

adicionandoLegenda("red");

/* Exe 9 */
const minhasTarefas = document.querySelectorAll("div .task");

function selectATask(event) {
  let selectedTask = document.getElementsByClassName("task selected");
  if (selectedTask.length === 0) {
    event.target.className = "task selected";
  } else if (event.target.className !== "task selected" && selectedTask.length !== 0) {
    selectedTask[0].className = 'task';
    event.target.className = "task selected";
  } else {
    event.target.className = "task";
  }
}

for (let i = 0 ; i < minhasTarefas.length; i += 1) {
minhasTarefas[i].addEventListener("click", selectATask);
}


/* Exe 10 */

function mudarCorDeFundo(evento) {
  const tarefaSelecionada = document.getElementsByClassName("task selected")[0];
  if (evento.target.style.backgroundColor !== tarefaSelecionada.style.backgroundColor) {
    evento.target.style.backgroundColor = tarefaSelecionada.style.backgroundColor;
  } else if (evento.target.style.backgroundColor !== 'rgb(238,238,238)') {
    evento.target.style.backgroundColor = 'rgb(238,238,238)';
  }
}

elementUl.addEventListener("click", mudarCorDeFundo);

/* Exe 11 */

let inputSpace = document.getElementById('task-input');
let botaoAdicionar = document.getElementById('btn-add');
let listaCompromissos = document.querySelector('.task-list')


inputSpace.addEventListener('keyup', function(evento) {
  if (evento.key === 'Enter' && inputSpace.value.length > 0) {
    let novaLinha = document.createElement('li');
    novaLinha.innerText = inputSpace.value;
    listaCompromissos.appendChild(novaLinha);
    inputSpace.value = '';
  }
})

botaoAdicionar.addEventListener('click', function() {
  if (inputSpace.value.length > 0) {
    let novaLinha = document.createElement('li');
    novaLinha.innerText = inputSpace.value;
    listaCompromissos.appendChild(novaLinha);
    inputSpace.value = '';
  } else {
    alert('Escreva uma tarefa na caixa de texto');
  }
})



