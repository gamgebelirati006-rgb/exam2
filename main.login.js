function loginUser(event) {
    event.preventDefault();

    let inputs = document.getElementsByTagName("input");
    let email = inputs[0].value;
    let password = inputs[1].value;

    let regUsers = localStorage.getItem("regUsers");

    if (regUsers === null) {
        alert("არავინ არის დარეგისტრირებული!");
        return;
    }

    let users = JSON.parse(regUsers);

    let found = users.find(u => u.email === email && u.password === password);

    if (found) {
        alert("Login successful!");
        window.location.href = "index.home.html";
    } else {
        alert("Wrong email or password!");
    }
}