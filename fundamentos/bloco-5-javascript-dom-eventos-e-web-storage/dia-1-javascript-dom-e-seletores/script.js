/* Exe 1 */
function changeText() {
    const paragrafo2 = document.getElementsByTagName('p')[1];
    paragrafo2.innerText = 'Hadoukeeeeeen';
}
changeText();

/* Exe 2 */
function corDeFundaMainContent() {
    const corMainContent = document.getElementsByClassName('main-content')[0];
    corMainContent.style.background = 'rgb(76,164,109)';
}
corDeFundaMainContent();

/* Exe 3 */
function corDeFundoMainCentro() {
    const corMainContent = document.getElementsByClassName('center-content')[0];
    corMainContent.style.background = 'white';
}
corDeFundoMainCentro();

/* Exe 4 */
function corrigindoH1() {
    const h1 = document.getElementsByTagName('h1')[0];
    h1.innerText = 'Exercício 5.1 - JavaScript';
}
corrigindoH1();

/* Exe 5 */
function toUpperCase() {
    const pUpper = document.getElementsByTagName('p')[0];
    pUpper.innerHTML = pUpper.innerHTML.toUpperCase();
}
toUpperCase();

/* Exe 6 */

function pExhibition() {
    const pContent = document.getElementsByTagName('p');
    for (let content of pContent) {
        console.log(content.innerText);
    }
}
pExhibition();