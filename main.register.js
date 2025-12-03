function registerUser(event) {
    event.preventDefault(); 
    let inputs = document.getElementsByTagName("input");
    inputs = Array.from(inputs);

    let person = {
        firstName: inputs[0].value,
        lastName: inputs[1].value,
        email: inputs[2].value,
        password: inputs[3].value
    };

    let regUsers = localStorage.getItem("regUsers");

    if (regUsers === null) {
        localStorage.setItem("regUsers", JSON.stringify([person]));
    } else {
        let oldUsers = JSON.parse(regUsers);
        oldUsers.push(person);
        localStorage.setItem("regUsers", JSON.stringify(oldUsers));
    }

    alert("registered successfully!");
    window.location.href = "index.login.html"; 
}