/* Name */
const nameInCard = document.getElementById("name-card-front");
const nameInForm = document.getElementById("name");

/* Card Number */
const numberInCard = document.getElementById("card-number-card-front");
const numberInForm = document.getElementById("card-number");

/* Expiration date */
const expDateMonthInCard = document.getElementById("exp-date-card-front-month");
const expDateYearInCard = document.getElementById("exp-date-card-front-year");
const expDateMonthInForm = document.getElementById("input-month");
const expDateYearInForm = document.getElementById("input-year");

/* CVC */
const cvcInCard = document.getElementById("cvc-back-card");
const cvcInForm = document.getElementById("input-cvc");

/* Form */
const form = document.getElementById("form");

/* Error Messages */
const errorName = document.getElementById("error-name");
const errorCardNumber = document.getElementById("error-card-number");
const errorDate = document.getElementById("error-msg-date");
const errorCvc = document.getElementById("error-cvc");

/* Update Name */
nameInForm.addEventListener("keyup", () => {
  nameInCard.innerHTML = nameInForm.value;
});

/* Update Card number */
let counterNumbers = 0;
numberInForm.addEventListener("keyup", () => {
  counterNumbers++;

  if (counterNumbers % 4 == 0) {
    numberInForm.value = numberInForm.value + " ";
  }

  numberInCard.innerHTML = numberInForm.value;
});

/* Update Expiration date - Month  */
expDateMonthInForm.addEventListener("keyup", () => {
  if (expDateMonthInForm.value.length > 2) {
    expDateMonthInForm.value = expDateMonthInForm.value.substr(0, 2);
  }
  expDateMonthInCard.innerHTML = expDateMonthInForm.value;
});

/* Update Expiration date - Year  */
expDateYearInForm.addEventListener("keyup", () => {
  if (expDateYearInForm.value.length > 2) {
    expDateYearInForm.value = expDateYearInForm.value.substr(0, 2);
  }
  expDateYearInCard.innerHTML = "/" + expDateYearInForm.value;
});

/* Update CVC  */
cvcInForm.addEventListener("keyup", () => {
  if (cvcInForm.value.length > 3) {
    cvcInForm.value = cvcInForm.value.substr(0, 3);
  }
  cvcInCard.innerHTML = cvcInForm.value;
});

/* Form validator */
function myValidator() {
  let numberOfErrors = 0;
  const reg = /^(?=.*\d)[\d ]+$/; // Only numbers and spaces

  /* First we remove all errors */
  errorName.style.display = "none";
  errorCardNumber.style.display = "none";
  errorDate.style.display = "none";
  errorCvc.style.display = "none";
  nameInForm.classList.remove("error");
  numberInForm.classList.remove("error");
  expDateMonthInForm.classList.remove("error");
  expDateYearInForm.classList.remove("error");
  cvcInForm.classList.remove("error");
  errorDate.innerHTML = "Year can't be blank";

  /* Name cannot be blank */
  if (nameInForm.value.trim() === "") {
    errorName.style.display = "block";
    nameInForm.classList.add("error");
    numberOfErrors++;
  }

  /* Card number can only consist of numbers */
  console.log(reg.test(numberInForm.value));
  if (!reg.test(numberInForm.value)) {
    errorCardNumber.style.display = "block";
    numberInForm.classList.add("error");
    numberOfErrors++;
  }

  /* Month in Expiration date cannot be blank */
  if (expDateMonthInForm.value.trim() === "") {
    errorDate.style.display = "block";
    expDateMonthInForm.classList.add("error");
    numberOfErrors++;
  }

  /* Month in Expiration date cannot be less than 1 or more than 12 */
  if (expDateMonthInForm.value<1 || expDateMonthInForm.value>12) {
    errorDate.style.display = "block";
    errorDate.innerHTML = "Month btw 1 & 12";
    expDateMonthInForm.classList.add("error");
    numberOfErrors++;
  }

  /* Year in Expiration date cannot be blank */
  if (expDateYearInForm.value.trim() === "") {
    errorDate.style.display = "block";
    expDateYearInForm.classList.add("error");
    numberOfErrors++;
  }

  /* CVC cannot be blank */
  if (cvcInForm.value.trim() === "") {
    errorCvc.style.display = "block";
    cvcInForm.classList.add("error");
    numberOfErrors++;
  }

  return !numberOfErrors;
}
