let logoutLink = document.querySelector('#logoutLink');
let welcomeMessage = document.querySelector('#welcomeMessage');
let contenedorLogin = document.querySelector('.login');

if (logoutLink !== null) 
    logoutLink.addEventListener('click', function () {

        localStorage.removeItem('emailUsuario');

        if (welcomeMessage !== null) {
            welcomeMessage.style.display = 'none';
        }

        logoutLink.style.display = 'none';

        if (contenedorLogin !== null) {
            contenedorLogin.style.display = 'flex';
        }
    });