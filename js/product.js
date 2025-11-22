window.addEventListener("load", function () {

    let queryString = location.search;
    let params = new URLSearchParams(queryString);
    let id = params.get("id");

    if (!id) {
        alert("No se encontró el producto");
        return;
    }

    fetch("https://dummyjson.com/products/" + id)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {

            document.querySelector("#productImg").src = data.thumbnail;
            document.querySelector("#productBrand").innerHTML = "Marca: " + data.brand;
            document.querySelector("#productDescription").innerHTML = "Descripción: " + data.description;
            document.querySelector("#productPrice").innerHTML = "Precio: $" + data.price;
            document.querySelector("#productStock").innerHTML = "Stock: " + data.stock;

            let catLink = document.querySelector("#productCategory");
            catLink.innerHTML = data.category;
            catLink.href = "category.html?cat=" + data.category;

            let ul = document.querySelector("#productTags");
            for (let i = 0; i < data.tags.length && i < 3; i++) {
                ul.innerHTML += "<li>" + data.tags[i] + "</li>";
            }

            let reviewSection = document.querySelector("#reviewSection");

            for (let i = 0; i < data.reviews.length; i++) {
                let r = data.reviews[i];

                reviewSection.innerHTML +=
                    "<div class='review'>" +
                    "<p>Rating: " + r.rating + "</p>" +
                    "<p>Comentario: " + r.comment + "</p>" +
                    "<p>Usuario: " + r.reviewerName + "</p>" +
                    "</div>";
            }

        })
        .catch(function (error) {
            console.log("Error: " + error);
        });

});
