document.getElementById('btn-submit').addEventListener('click', function () {
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;
    const userPassword = document.getElementById('user-password');
    const passwordValue = userPassword.value;
    if (email === 'admin@gmail.com' && passwordValue === 'secret') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Invalid email or password');
    }
})