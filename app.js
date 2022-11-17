const title = document.getElementById("title");
const nameField = document.getElementById("nameField");
const sigUp = document.getElementById("sigUp");
const sigIn = document.getElementById("sigIn");

sigIn.addEventListener("click", function () {
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    sigUp.classList.add("disable");
    sigIn.classList.remove("disable");
});
sigUp.addEventListener("click", function () {
    nameField.style.maxHeight = "65px";
    title.innerHTML = "Sign Up";
    sigUp.classList.remove("disable");
    sigIn.classList.add("disable");
});
