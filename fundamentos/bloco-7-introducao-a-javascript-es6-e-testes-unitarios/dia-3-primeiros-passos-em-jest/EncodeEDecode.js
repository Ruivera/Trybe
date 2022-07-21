// EncodeEDecode.js
function encode(string1) {
  // seu código aqui
  let fraseCodificada = '';
  for (let index in string1) {
    switch (string1[index]) {
      case 'a':
        fraseCodificada += '1';
        break;
      case 'e':
        fraseCodificada += '2';
        break;
      case 'i':
        fraseCodificada += '3';
        break;
      case 'o':
        fraseCodificada += '4';
        break;
      case 'u':
        fraseCodificada += '5';
        break;
      default:
        fraseCodificada += string1[index];
    }
  }
  console.log(fraseCodificada);
  return fraseCodificada;
}

function decode(string2) {
  // seu código aqui
  let fraseDecodificada = '';
  for (let index in string2) {
    switch (string2[index]) {
      case '1':
        fraseDecodificada += 'a';
        break;
      case '2':
        fraseDecodificada += 'e';
        break;
      case '3':
        fraseDecodificada += 'i';
        break;
      case '4':
        fraseDecodificada += 'o';
        break;
      case '5':
        fraseDecodificada += 'u';
        break;
      default:
        fraseDecodificada += string2[index];
    }
  }
  return fraseDecodificada;
}
encode('aeiou');

const functions = { encode, decode };
module.exports = functions;
