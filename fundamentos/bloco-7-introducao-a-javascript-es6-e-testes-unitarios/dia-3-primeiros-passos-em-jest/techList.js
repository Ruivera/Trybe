// techList.js
function techList(array, string) {
  // seu código aqui
  let arraySorted = array.sort();
  let arrayDeObjetos = [];
  for (let index in arraySorted) {
    arrayDeObjetos.push({tech: arraySorted[index], name: string});
  }
  if(arrayDeObjetos.length > 0) return arrayDeObjetos;
  return 'Vazio!';
}

  module.exports = techList;