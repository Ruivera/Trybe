let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

/* Exe 1 */

console.log("Exe 1: Bem vinda,", info["personagem"]);

/* Exe 2 */

info.recorrente = "Sim";

console.log("Exe 2:", info["recorrente"]);

/* Exe 3 */

for (let chaves in info) {
  console.log("Exe 3: ", chaves);
}

/* Exe 4 */

for (let chaves in info) {
  console.log("Exe 4: ", info[chaves]);
}

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

/* Exe 5 */
for (let chaves in info) {
  if (
    chaves === "recorrente" &&
    info[chaves] === "Sim" &&
    info2[chaves] === "Sim"
  ) {
    console.log("Exe 5:  Ambos Recorrentes");
  } else {
    console.log("Exe 5: ", info[chaves] + " e " + info2[chaves]);
  }
}


/* Objeto para os exes 6, 7 e 8 */
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [{
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      }
    ],
  };

  /* Exe 6 */
  console.log("Exe 6:  O livro favorito de " + leitor.nome + ' ' + leitor.sobrenome + ' se chama "' + leitor["livrosFavoritos"][0]["titulo"] + '"');

  /* Exe 7 */
  leitor["livrosFavoritos"].push(
    {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editor: 'Rocco',
      }
  );

  console.log("Exe 8: ", leitor['nome'] + " tem " + leitor.livrosFavoritos.length + " livros favoritos");

