window.addEventListener("load", function () {

    let queryString = location.search;
    let params = new URLSearchParams(queryString);
    let busqueda = params.get("search"); 

    let titulo = document.querySelector("#tituloBusqueda");
    let section = document.querySelector("#resultados");

    titulo.innerHTML = "Resultados de búsqueda para: " + busqueda;

    fetch("https://dummyjson.com/products/search?q=" + busqueda)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {


            if (data.products.length === 0) {
                section.innerHTML = "<h2 class='no-results'>No hay resultados para: " + busqueda + "</h2>";
            } 
            else {
                for (let i = 0; i < data.products.length; i++) {
                    let prod = data.products[i];

                    section.innerHTML +=
                        "<div class='menu'>" +
                        "<img src='" + prod.thumbnail + "' class='menuimg'>" +
                        "<p class='txtcomdida'>" + prod.title + "</p>" +
                        "<p class='txtparr'>" + prod.description + "</p>" +
                        "<p class='txtprecio'>$" + prod.price + "</p>" +
                        "<a href='product.html?id=" + prod.id + "' class='comidalink'>Saber mas</a>" +
                        "</div>";
                }
            }

        })
        .catch(function (error) {
            console.log("Error: " + error);
        });

});