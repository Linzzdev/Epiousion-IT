document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let emailError = document.getElementById('emailError');
    let passwordError = document.getElementById('passwordError');

    let isValid = true;

    emailError.style.display = 'none';
    passwordError.style.display = 'none';

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Por favor, insira um e-mail válido.';
        emailError.style.display = 'block';
        isValid = false;
    }

    if (password.length < 6) {
        passwordError.textContent = 'A senha deve ter pelo menos 6 caracteres.';
        passwordError.style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        alert('Formulário de login enviado com sucesso!');
    }
});

document.getElementById('forgotPasswordForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let email = document.getElementById('email').value;
    let emailError = document.getElementById('emailError');

    let isValid = true;

    emailError.style.display = 'none';

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Por favor, insira um e-mail válido.';
        emailError.style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        alert('E-mail de recuperação enviado!');
    }
});
