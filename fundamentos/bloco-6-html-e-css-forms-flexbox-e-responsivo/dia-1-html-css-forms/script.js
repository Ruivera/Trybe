const botaoSubmit = document.getElementById('submit')
const checkContrato = document.getElementById('contrato')
const inputFotos = document.createElement('input')
const labelFotos = document.createElement('label')
const fieldsetCampo = document.getElementById('corpo')

botaoSubmit.addEventListener('click', function (event) {
    event.preventDefault();
})

checkContrato.addEventListener('click', function () {
    if (checkContrato.checked == true) {
        fieldsetCampo.appendChild(labelFotos);
        labelFotos.id = 'labelFotos';
        labelFotos.for = 'fotos';
        labelFotos.innerText = 'Anexe aqui suas fotos:  ';
        document.getElementById('labelFotos').appendChild(inputFotos);
        inputFotos.id = 'fotos';
        inputFotos.type = 'file';
        inputFotos.name = 'file';
        inputFotos.innerText = '';

    }
}
);
