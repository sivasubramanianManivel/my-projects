const form = document.querySelector("#form");
const userName = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const cpassword = document.querySelector("#cpassword");

form.addEventListener("submit", (e) => {
  if (!validateInputs()) {
    e.preventDefault();
  }
});
function validateInputs() {
  const userVal = userName.value.trim();
  const emailVal = email.value.trim();
  const passVal = password.value.trim();
  const cpass = cpassword.value.trim();
  let success = true;

  if (userVal === "") {
    success = false;
    setError(userName, "UserName is Required");
  } else {
    setSuccess(userName);
  }
  if (emailVal === "") {
    success = false;
    setError(email, "email is required");
  } else if (validateEmail(emailVal)) {
    success = false;
    setError(email, "please enter valid email");
  } else {
    setSuccess(email);
  }

  if (passVal === "") {
    success = false;
    setError(password, "password is required");
  } else if (passVal.length < 8) {
    success = false;
    setError(password, "password must be atleast 8 characters long");
  } else {
    setSuccess(password);
  }

  if (cpass === "") {
    success = false;
    setError(cpassword, "confirm password is required");
  } else if (passVal !== cpassword) {
    success = false;
    setError(cpassword, "password doesnot match");
  } else {
    setSuccess(cpassword);
  }
  return success;
}
function setError(element, message) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");
  errorElement.innerText = message;
  inputGroup.classList.add("error");
  inputGroup.classList.remove("success");
}

function setSuccess(element) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");
  errorElement.innerText = "";
  inputGroup.classList.add("success");
  inputGroup.classList.remove("error");
}
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
