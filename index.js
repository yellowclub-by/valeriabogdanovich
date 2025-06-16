console.log('Happy developing ✨')
let username = "456"
let password = "123"
function login() {
    let username_input = document.getElementById("username").value
    let password_input = document.getElementById("password").value
    if (username_input == username && password_input == password) {
        alert("Вход выполнен, авторизация успешна!")
        window.location.href = "лерака/лерка.html"
    } else {
        alert("Неверный логин или пароль")
    }
    }
