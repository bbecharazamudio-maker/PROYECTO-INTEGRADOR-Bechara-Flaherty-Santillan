window.addEventListener("load", function () {

    const formulario = document.querySelector("header form");
    const input = document.querySelector("header .search");

    // if (!formulario) return;
    // if (!input) return;

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


window.addEventListener('load', function () {

    const categoria1 = 'mens-shirts';
    const categoria2 = 'mens-shoes';

    const section1 = document.querySelector('#section1');
    const section2 = document.querySelector('#section2');

    function cargarSeccion(url, contenedor){
        fetch(url)
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            
            contenedor.innerHTML = "";

            for (let i = 0; i < data.products.length && i < 10; i++) {

                let prod = data.products[i];

                contenedor.innerHTML += 
                "<div class='menu'>" +
                    "<img src='" + prod.thumbnail + "' class='menuimg'>" +
                    "<p class='txtcomdida'>" + prod.title + "</p>" +
                    "<p class='txtparr'>" + prod.description + "</p>" +
                    "<p class='txtprecio'>$" + prod.price + "</p>" +
                    "<a href='product.html?id=" + prod.id + "' class='comidalink'>Ver detalle</a>" +
                "</div>";
            }

        })
        .catch(function(error){
            console.log("Error: " + error);
        });
    }

    cargarSeccion("https://dummyjson.com/products/category/" + categoria1, section1);
    cargarSeccion("https://dummyjson.com/products/category/" + categoria2, section2);


});

window.addEventListener("load", function(){

    const categoriasDeseadas = ["mens-shirts", "mens-shoes"];

    const lista = document.querySelector(".navlist");

    lista.innerHTML = "";

    for (let i = 0; i < categoriasDeseadas.length; i++) {

        let categoria = categoriasDeseadas[i];

        lista.innerHTML += 
        "<li><a class='navlink' href='category.html?id=" + categoria + "'>" 
        + categoria +
        "</a></li>";
    }

});








