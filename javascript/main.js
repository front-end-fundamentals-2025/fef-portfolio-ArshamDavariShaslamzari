const darkPattern = document.getElementById("nav-button-dark");
const lightPattern = document.getElementById("nav-button-light");
const bodyElement = document.querySelector("body");
darkPattern.addEventListener("click", function (event){
    bodyElement.style.backgroundColor = "#023060";
});
