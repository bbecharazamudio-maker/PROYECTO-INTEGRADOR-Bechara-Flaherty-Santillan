window.addEventListener("load", function () {

    let queryString = location.search;
    let params = new URLSearchParams(queryString);
    let categoria = params.get("cat"); 

    let titulo = document.querySelector("#tituloCategoria");
    let contenedor = document.querySelector("#categoriaContainer");

    if (!categoria) {
        titulo.innerHTML = "No se seleccionó ninguna categoría";
        return;
    }

    titulo.innerHTML = "Categoría: " + categoria;

    let url = "https://dummyjson.com/products/category/" + categoria;

    fetch(url)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {

            contenedor.innerHTML = "";

            for (let i = 0; i < data.products.length; i++) {
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
        .catch(function (error) {
            console.log("Error: " + error);
            titulo.innerHTML = "Hubo un error al cargar la categoría";
        });
});