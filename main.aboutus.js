document.getElementById("btn").addEventListener("click", async () => {
    const list = document.getElementById("list");
    list.innerHTML = "<li>იტვირთება...</li>";

    try {
        const res = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await res.json();

        
        const breeds = Object.keys(data.message);

        list.innerHTML = ""; 

        breeds.forEach(breed => {
            const li = document.createElement("li");
            li.textContent = breed;
            list.appendChild(li);
        });

    } catch (err) {
        list.innerHTML = "<li>შეცდომა: " + err.message + "</li>";
    }
});