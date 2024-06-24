// ! =============> Global ===============>
const signInEmail = document.getElementById("signInEmail");
const signInPassword = document.getElementById("signInPassword");
let singInArray = JSON.parse(localStorage.getItem("users"));
// console.log(singInArray);
const btnLogIn = document.getElementById("btn-login");
// ! =============> Events ===============>
btnLogIn.addEventListener("click", function() {

  if (allInputsValidation(signInEmail) && allInputsValidation(signInPassword)) {
    // console.log("Mohamed");
    if (singInArray == null) {
      document.getElementById("exist").classList.remove("d-none");
    } else {
      logIn();
    }
  }
});
document.addEventListener("keyup", function(event) {
  if (event.code === "NumpadEnter" || event.code === "Enter") {
    if (allInputsValidation(signInEmail) && allInputsValidation(signInPassword)) {
      // console.log("Mohamed");
      if (singInArray == null) {
        document.getElementById("exist").classList.remove("d-none");
      } else {
        logIn();
      }
    }
  }
});
document.querySelector('form').addEventListener("submit", function(event){
event.preventDefault();
})

// ! =============> Functions ===============>
function logIn() {
  for (const user of singInArray) {
    // console.log(user.first + " " + user.last);
    if (
      user.email.toLowerCase() == signInEmail.value.toLowerCase() &&
      user.password.toLowerCase() == signInPassword.value.toLowerCase()
    ) {
      document.getElementById("success").classList.remove("d-none");
      document.getElementById("exist").classList.add("d-none");

      localStorage.setItem("userName", user.first + " " + user.last);
      location.href = "./home.html";
    } else {
      document.getElementById("exist").classList.remove("d-none");
      document.getElementById("success").classList.add("d-none");
    }
  }
}
// ! =============> validation ===============>
function allInputsValidation(element) {
  var regex = {
    signInEmail: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
    signInPassword: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
  };
  if (regex[element.id].test(element.value)) {
    // console.log("true");
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    return true;
  } else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
    return false;
  }
}
// ! =============> Events ===============>

signInEmail.addEventListener("input", function() {
  allInputsValidation(this);
});
signInPassword.addEventListener("input", function() {
  allInputsValidation(this);
});
