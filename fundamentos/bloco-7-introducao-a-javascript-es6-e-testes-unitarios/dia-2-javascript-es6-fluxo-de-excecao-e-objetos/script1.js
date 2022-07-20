const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

/* const addTurnoNoturno = (objeto, novaChave, valor) => {
  objeto[novaChave] = valor;
}
addTurnoNoturno(lesson2, 'turno', 'noite');
console.log(lesson2);

const listamentoDeChaves = objeto => Object.keys(objeto);
console.log(listamentoDeChaves(lesson2));

const tamanhoDoObjeto = objeto => Object.keys(objeto).length;
console.log(tamanhoDoObjeto(lesson2));

const listamentoDeValores = objeto => Object.values(objeto);
console.log(listamentoDeValores(lesson2));
 */
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);
/* 
const todosOsEstudantes = (object) => console.log(`Soma de todos os estudantes ${object.lesson1.numeroEstudantes + object.lesson2.numeroEstudantes + object.lesson3.numeroEstudantes}`);
todosOsEstudantes(allLessons);

const verificandoChave = (object, index) => console.log(`Output: ${Object.keys(object)[index]}`);
verificandoChave(allLessons, 2);

const verificandoChaveValor = (object, chave, valor) => {
  if (!(object[chave] === valor)) {
  console.log(`Output: false`);
  } else {
  console.log(`Output: true`);
  }
}
verificandoChaveValor(lesson3, 'turno', 'noite');
 */

function createReport(object, name) {
  let report = {};
  let estudantes = 0;
  let aulas = [];
  let turno = [];
  for (let key in object) {
    if(object[key].professor === name) {
      estudantes += object[key].numeroEstudantes;
      aulas.push(object[key].materia);
      turno.push(object[key].turno);
    }
  }
  report['nome'] = name;
  report['aulas'] = aulas;
  report['estudantes'] = estudantes;
  report['turnos'] = turno;
  console.log(report);
}
createReport(allLessons, 'Maria Clara');