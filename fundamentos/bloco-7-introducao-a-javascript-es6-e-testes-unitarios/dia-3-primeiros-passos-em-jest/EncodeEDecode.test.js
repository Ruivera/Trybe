// EncodeEDecode.js
const { encode, decode } = require('./EncodeEDecode.js');

describe('Testando function encode e decode', () => {
  it('se a function enocde é definida', () => {
    expect(encode).toBeDefined();    
  });
  it('se a function decode é definida', () => {
    expect(decode).toBeDefined();
  });
  it('se a function encode é uma função', () => {
    expect(typeof encode).toEqual('function');
  });
  it('se a function decode é uma função', () => {
    expect(typeof decode).toEqual('function');
  });
  it('testando resultados da function encode', () => {
    expect(encode('aeiou')).toEqual('12345');
  });
  it('testando resultados da function decode', () => {
    expect(decode('12345')).toEqual('aeiou');
  });
  it('testando cumprimento da function encode', () => {
    expect(encode('12345').length).toEqual(5);
  });
  it('testando cumprimento da function decode', () => {
    expect(decode('12345').length).toEqual(5);
  });
});
