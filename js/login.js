let formLogin = document.querySelector('#loginForm');
let inputEmail = document.querySelector('#emailUsuario');
let inputPassword = document.querySelector('#contraseñaUsuario');

let emailError = document.querySelector('#emailError');
let passwordError = document.querySelector('#passwordError');

formLogin.addEventListener('submit', function (event) {
    emailError.innerText = '';
    passwordError.innerText = '';

    let hayErrores = false;

    if (inputEmail.value === '') {
        emailError.innerText = 'El email es obligatorio';
        hayErrores = true;
    }

    if (inputPassword.value === '') {
        passwordError.innerText = 'La contraseña es obligatoria';
        hayErrores = true;
    } else if (inputPassword.value.length < 6) {
        passwordError.innerText = 'La contraseña debe tener al menos 6 caracteres';
        hayErrores = true;
    }

    if (hayErrores) {
        event.preventDefault();
    } else {
     localStorage.setItem('emailUsuario', inputEmail.value);
    }
});

