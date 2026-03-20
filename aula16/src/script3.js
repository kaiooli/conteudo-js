//Validação de Formulário

function validarForm() {
    let formulario = document.forms["novoForm"]["texto"].value;

    if (formulario == "") {
        alert("Por favor insira um valor para o campo!");
        return false;
    }
};


