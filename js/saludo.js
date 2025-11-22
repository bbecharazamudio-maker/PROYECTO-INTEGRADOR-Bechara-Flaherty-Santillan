let emailEnStorage = localStorage.getItem('emailUsuario');

let contenedorLogin = document.querySelector('.login');
let header = document.querySelector('header');

if (emailEnStorage !== null) {

    let saludo = document.createElement('p');
    saludo.innerText = 'Bienvenido: ' + emailEnStorage;

    let logout = document.createElement('a');
    logout.innerText = 'Logout';
    logout.href = '#';

    contenedorLogin.style.display = 'none';

    header.appendChild(saludo);
    header.appendChild(logout);

    logout.addEventListener('click', function() {
        localStorage.removeItem('emailUsuario');
        location.reload();
    });

} else {
    contenedorLogin.style.display = 'flex';
}
