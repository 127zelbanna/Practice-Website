function clicked() {
    document.title = document.querySelector("input").value;
}
function localUp() {
    let copy = JSON.parse((document.querySelector("button#hello").innerText));
    copy = copy + 1;
    document.querySelector("button#hello").innerText = JSON.stringify(copy);
    localStorage.setItem("hello", JSON.stringify(copy));
}
function sessionUp() {
    let copy = JSON.parse((document.querySelector("button#maxy").innerText));
    copy = copy + 1;
    document.querySelector("button#maxy").innerText = JSON.stringify(copy);
    sessionStorage.setItem("hello", JSON.stringify(copy));
}
function loading() {
    if (localStorage.getItem("hello")) {
        document.querySelector("button#hello").innerText = JSON.stringify(JSON.parse(localStorage.getItem("hello")));
    }
    if (sessionStorage.getItem("maxy")) {
        document.querySelector("button#maxy").innerText = JSON.stringify(JSON.parse(localStorage.getItem("maxy")));
    }
}