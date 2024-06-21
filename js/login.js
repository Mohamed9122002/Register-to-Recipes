// ! =============> Global ===============>
const signInEmail = document.getElementById("signInEmail");
const signInPassword = document.getElementById("signInPassword");
let singInArray = JSON.parse(localStorage.getItem("users"));
// console.log(singInArray);
const btnLogIn = document.getElementById("btn-login");
// ! =============> Events ===============>
btnLogIn.addEventListener("click", function(e) {
  logIn();
});
document.addEventListener("keyup", function(e) {
  // console.log(e.code);
  e.preventDefault();
  if (e.code === "NumpadEnter") {
    logIn();
  }
});

// ! =============> Functions ===============>
function logIn() {
  for (const user of singInArray) {
    console.log(user.first + " " + user.last);
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
