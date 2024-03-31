const modalContainer = document.querySelector(".modalContainer");
const openBtn = document.getElementById("openButton");
const closeBtn = document.getElementById("closeButton");

function open() {
    modalContainer.style.display = "block";
}

function close() {
    modalContainer.style.display = "none";
}

openBtn.addEventListener("click", open);
closeBtn.addEventListener("click", close);