const form = document.querySelector("form");
const successMsg = document.getElementById("successMsg");

function showError(id, message) {
  document.getElementById(id).classList.add("invalid");
  document.getElementById(id + "Error").textContent = message;
}

function clearErrors() {
  const ids = ["name", "email", "phone", "subject", "message", "consent"];

  for (let i = 0; i < ids.length; i++) {
    document.getElementById(ids[i]).classList.remove("invalid");
    document.getElementById(ids[i] + "Error").textContent = "";
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();       
  successMsg.hidden = true;     
  clearErrors();                

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value.trim();
  const consent = document.getElementById("consent").checked;

  let isValid = true;           

  if (name === "") {
    showError("name", "Please enter your full name.");
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    showError("email", "Please enter your email address.");
    isValid = false;
  } else if (!emailPattern.test(email)) {
    showError("email", "Please enter a valid email, like you@example.com.");
    isValid = false;
  }

  const phonePattern = /^[0-9]{1,11}$/;

  if (phone !== "" && !phonePattern.test(phone)) {
    showError("phone", "Use digits only, up to 11 digits.");
    isValid = false;
  }

  if (subject === "") {
    showError("subject", "Please choose a subject.");
    isValid = false;
  }

  if (message === "") {
    showError("message", "Please write a message.");
    isValid = false;
  } else if (message.length < 10) {
    showError("message", "Your message should be at least 10 characters.");
    isValid = false;
  }

  if (consent === false) {
    showError("consent", "Please tick the consent box to continue.");
    isValid = false;
  }

  if (isValid === true) {
    successMsg.hidden = false;
    form.reset();
  }
});

form.addEventListener("reset", function () {
  clearErrors();
  successMsg.hidden = true;
});