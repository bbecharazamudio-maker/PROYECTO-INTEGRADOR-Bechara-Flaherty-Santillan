window.addEventListener("load", function () {

    const info = location.search;
    const infoObj = new URLSearchParams(info);
    const categoria = infoObj.get("id");

    const contenedor = document.querySelector("#categoriaContainer");

    const url = "https://dummyjson.com/products/category/" + categoria;
    
    

    fetch(url)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){

    
        contenedor.innerHTML = "";

        contenedor.innerHTML += "<h1>" + categoria + "</h1>";

        for (let i = 0; i < datos.products.length; i++) {

            let prod = datos.products[i];

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
        console.log("Error:", error);
        contenedor.innerHTML = "<p>Error al cargar la categoría.</p>";
    });

});
