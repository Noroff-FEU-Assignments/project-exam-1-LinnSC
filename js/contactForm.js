const form = document.querySelector("#contact-form");
const fullName = document.querySelector("#name-id");
const fullNameError = document.querySelector("#name-error");
const email = document.querySelector("#email-id");
const emailError = document.querySelector("#email-error");
const subject = document.querySelector("#subject-id");
const subjectError = document.querySelector("#subject-error");
const message = document.querySelector("#message-id");
const messageError = document.querySelector("#message-error");
const validationMessage = document.querySelector("#validation");

const sendButton = document.querySelector(".send-message");

const modal = document.querySelector(".modal");

function validateForm(event) {
  event.preventDefault();

  if (checkLength(fullName.value, 5)) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }

  if (validateEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(subject.value, 15)) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (checkLength(message.value, 25)) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }

  if (
    checkLength(fullName.value, 5) &&
    validateEmail(email.value) &&
    checkLength(subject.value, 15) &&
    checkLength(message.value, 25)
  ) {
    validationMessage.innerHTML =
      '<div class="message"><p class ="first-line">Thank you for contacting me!</p><p class ="second-line"> I will get back to you as son as I can <3</p></div>';
    modal.style.display = "block";

    form.reset();

    window.scrollTo(0, 0);
  } else {
    validationMessage.innerHTML = "";
  }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const emailValid = regEx.test(email);
  return emailValid;
}

// modal

document.addEventListener("click", function () {
  modal.style.display = "none";
});
