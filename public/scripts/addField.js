/* procurar o botão
quando clicar no botao
executar uma açao
    duplicar os campos
    colocar na pagina*/

    document.querySelector("#add-time").addEventListener('click', cloneField)

    //funcoes
    function cloneField() {
        const  newfieldContainer = document.querySelector(".schedule-item").cloneNode(true);
        const fields = newfieldContainer.querySelectorAll('input');
        fields.forEach(function(field){
            field.value = ""
        });
        document.querySelector("#schedule-items").appendChild(newfieldContainer);
    }