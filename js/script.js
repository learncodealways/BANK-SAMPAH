// const endPoint = "https://pokeapi.co/api/v2/pokemon/ditto"

// fetch(endPoint)
// .then((data) => data.json())
// .then((result) => console.log(result))


// Show Password

// Tambahkan ini ke file script.js Anda
document.addEventListener('DOMContentLoaded', function() {
    const passwordField = document.getElementById('kata sandi');
    const togglePassword = document.getElementById('toggle-password');
   
    togglePassword.addEventListener('click', function() {
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);
        this.classList.toggle('fa-eye-slash');
    });
});

