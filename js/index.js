window.addEventListener("load", function () {

    const formulario = document.querySelector("header form");
    const input = document.querySelector("header .search");

    if (!formulario) return;
    if (!input) return;

    formulario.addEventListener("submit", function () {

        const texto = input.value;

        if (texto === "") {
            alert("El campo no puede estar vacío");
            event.preventDefault();
            return;
        }

        if (texto.length < 3) {
            alert("Debés escribir al menos 3 caracteres");
            event.preventDefault();
            return;
        }

    });

});
