// ! =============> Global  ===============>
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const signUpEmail = document.getElementById("signUpEmail");
const signUpPassword = document.getElementById("signUpPassword");
const btnSignUp = document.getElementById("btn-signUp");
let getUsers = localStorage.getItem("users");
let signUpArray = [];
// ! =============> When Start ===============>
if (getUsers === null) {
  signUpArray = [];
} else {
  signUpArray = JSON.parse(getUsers);
}

// ! =============> Events ===============>

btnSignUp.addEventListener("click", function() {
  if (allInputsValidation(firstName) && allInputsValidation(lastName)
  && allInputsValidation(signUpEmail) &&allInputsValidation(signUpPassword)) {
  singUp();
  clearInputs();
  }

});
document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();
});

// ! =============> functions  ===============>
function emailCheck() {
  for (var i = 0; i < signUpArray.length; i++) {
    if (signUpArray[i].email.toLowerCase() == signUpEmail.value.toLowerCase()) {
      return false;
    }
  }
}
function isEmpty() {
  if (
    firstName.value == "" ||
    lastName.value == "" ||
    signUpEmail.value == "" ||
    signUpPassword.value == ""
  ) {
    return false;
  } else {
    return true;
  }
}
function singUp() {
  if (isEmpty() == false) {
    document.getElementById("incorrect").classList.remove("d-none");
    document.getElementById("exist").classList.add("d-none");
    return false;
  }
  const signUpButton = {
    first: firstName.value,
    last: lastName.value,
    email: signUpEmail.value,
    password: signUpPassword.value
  };
  if (emailCheck() == false) {
    document.getElementById("exist").classList.remove("d-none");
    document.getElementById("incorrect").classList.add("d-none");
  } else {
    signUpArray.push(signUpButton);
    localStorage.setItem("users", JSON.stringify(signUpArray));
    console.log(signUpArray);
    location.href = "./index.html";
  }
}

function clearInputs() {
  firstName.value = "";
  lastName.value = "";
  signUpEmail.value = "";
  signUpPassword.value = "";
}

// ! =============> validation ===============>
function allInputsValidation(element) {
  var regex = {
    firstName: /^(?:[a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){2,20}/,
    lastName: /^(?:[a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){2,20}/,
    signUpEmail: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
    signUpPassword: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
  };
  if (regex[element.id].test(element.value)) {
    // console.log("true");
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    return true;
  }else{
        element.classList.add("is-invalid");
        element.classList.remove("is-valid");
        return false;
  }
}
// ! =============> Events ===============>
firstName.addEventListener('input',function(){
  // console.log(this);
  allInputsValidation(this);
})
lastName.addEventListener("input",function(){
  allInputsValidation(this);
})
signUpEmail.addEventListener("input",function(){
  allInputsValidation(this);
})
signUpPassword.addEventListener("input",function(){
  allInputsValidation(this);
});
