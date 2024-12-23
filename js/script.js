function setCookieAcceptance(event) {
    event.preventDefault();
    localStorage.setItem('cookiesAccepted', "true");
    let elementById = document.getElementById("cookies");
    elementById.classList.remove("show");
}

function getCookieAcceptance() {
    return localStorage.getItem('cookiesAccepted');
}

function prevent(event) {
    event.preventDefault();
}

window.addEventListener("load", function () {
    let cookieAcceptance = getCookieAcceptance();
    if (cookieAcceptance == null) {
        let elementById = document.getElementById("cookies");
        elementById.classList.add("show");
    }
})
