let indexOfSlide = 1;

function moveSlides(number) {
    slidesShower(indexOfSlide += number)
}

function currentSlide(number) {
    slidesShower(indexOfSlide = number);
}

function slidesShower(number) {
    let i;
    let slides = document.getElementsByClassName("myPictures");
    let dots = document.getElementsByClassName("dot");

    if (number > slides.length) {
        indexOfSlide = 1
    }

    if (number < 1) {
        indexOfSlide = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activeDot", "")
    }

    slides[indexOfSlide - 1].style.display = "block";
    dots[indexOfSlide - 1].className += " activeDot";
}

slidesShower(1);

function searchSite() {
    let query = document.getElementById("searchInput").value.trim();

    if (query === "") {
        alert("გთხოვ შეიყვანე ტექსტი.");
        return;
    }

    // გადადის search.html ფაილზე და გადასცემს ტექსტს
    window.location.href = "search.html?q=" + encodeURIComponent(query);
}