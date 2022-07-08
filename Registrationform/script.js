const mainModal = document.querySelector(".main-modal");
const main = document.querySelector(".main");
const containerBox = document.querySelector(".container-box");
const submitButton = document.querySelector("#btn");
const warning = document.querySelector(".warning");
const formName = document.querySelector(".name");
const formEmail = document.querySelector(".email");
const formMobile = document.querySelector(".phno");
const formCollege = document.querySelector(".collname");
const myForm = document.getElementById("myForm");

submitButton.addEventListener("click", function () {
  if (
    formName.value.length === 0 ||
    formEmail.value.length === 0 ||
    formMobile.value.length === 0 ||
    formCollege.value.length === 0
  ) {
    console.log("if block");
    if (warning.classList.contains("hidden")) {
      warning.classList.remove("hidden");
    }
  } else {
    warning.classList.add("hidden");
    containerBox.style.zIndex = "-1";
    containerBox.classList.add("overlay");
    mainModal.classList.toggle("hidden");
  }
});
