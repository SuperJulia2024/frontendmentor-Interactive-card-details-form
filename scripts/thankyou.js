const urlParams = new URLSearchParams(window.location.search);
const paramName = urlParams.get("name");
const paramNumber = urlParams.get("number");
const paramExpMonth = urlParams.get("exp-month");
const paramExpYear = urlParams.get("exp-year");
const paramCvc = urlParams.get("cvc");

/* Update Name */
const nameInCard = document.getElementById("name-card-front");
/* Update card Number */
const numberInCard = document.getElementById("card-number-card-front");
/* Expiration date */
const expDateMonthInCard = document.getElementById("exp-date-card-front-month");
const expDateYearInCard = document.getElementById("exp-date-card-front-year");
/* CVC */
const cvcInCard = document.getElementById("cvc-back-card");

/* Name */
nameInCard.innerHTML = paramName;
/* Card number */
numberInCard.innerHTML = paramNumber;
/* Expiration date - Month  */
expDateMonthInCard.innerHTML = paramExpMonth;
/* Expiration date - Year  */
expDateYearInCard.innerHTML = "/" + paramExpYear;
/* CVC  */
cvcInCard.innerHTML = paramCvc;
