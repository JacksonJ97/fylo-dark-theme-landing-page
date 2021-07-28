const emailInputField = document.getElementById("email");
const submitBtn = document.getElementById("submit-btn");
const inputWrapper = document.querySelector(".input-wrapper");
const emailInputResultContainer = document.createElement("div");
emailInputResultContainer.classList.add("email-input-result");

function isEmailValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (isEmailValid(emailInputField.value)) {
    emailInputResultContainer.textContent = "Please check your email";
  } else {
    emailInputResultContainer.textContent = "Please enter a valid email address";
  }
});

inputWrapper.insertBefore(emailInputResultContainer, inputWrapper.firstElementChild.nextElementSibling);
