let form = document.querySelector('.form_user');
let emailInput = document.querySelector('input[name="emailUsuario"]');
let passwordInput = document.querySelector('input[name="contraseñaUsuario"]');
let repeatPasswordInput = document.querySelector('.inputregister');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    let email = emailInput.value;
    let password = passwordInput.value;
    let repeatPassword = repeatPasswordInput.value;

    if (email === '') {
        alert('El campo email es obligatorio');
        return;
    }

    if (password === '') {
        alert('El campo contraseña es obligatorio');
        return;
    }

    if (password.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres');
        return;
    }

    if (password !== repeatPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }

    alert('Registro exitoso. Ahora podés iniciar sesión.');
    
});

