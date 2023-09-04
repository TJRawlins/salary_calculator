"use strict";

const body = document.querySelector("body");
const btnCalc = document.getElementById("calc");
const btnClear = document.getElementById("clear");
const input = document.querySelector(".main-input");
const annualRadio = document.getElementById("annual");
const hourRadio = document.getElementById("hourly");
const results = document.querySelectorAll(".results-container label span");
const resultLabels = document.querySelectorAll(".results-container label");

input.focus();

btnCalc.addEventListener("click", () => {
  let entry = parseFloat(input.value).toFixed(2);
  if (annualRadio.checked && input.value) {
    // Annual Salary
    results[0].innerText = parseFloat(entry + 0).toFixed(2);
    // Monthly
    results[1].innerText = parseFloat((entry / 52) * 4).toFixed(2);
    // Biweekly
    results[2].innerText = parseFloat((entry / 52) * 2).toFixed(2);

    // Weekly
    results[3].innerText = parseFloat(entry / 52).toFixed(2);
    // Hourly
    results[4].innerText = parseFloat(entry / 52 / 40).toFixed(2);
    resultLabels[4].style.border = "0";
    resultLabels[0].style.border = "var(--gradient-secondary) 1px solid";
  } else if (hourRadio.checked && input.value) {
    // Hourly Wage
    results[0].innerText = parseFloat(entry * 2080).toFixed(2);
    // Biweekly
    results[1].innerText = parseFloat(entry * 160).toFixed(2);
    // Weekly
    results[2].innerText = parseFloat(entry * 80).toFixed(2);
    // Monthly
    results[3].innerText = parseFloat(entry * 40).toFixed(2);
    // Annual
    results[4].innerText = parseFloat(entry + 0).toFixed(2);
    resultLabels[4].style.border = "var(--gradient-secondary) 1px solid";
    resultLabels[0].style.border = "0";
  } else {
    // Error Modal
    const errorModalDiv = document.createElement("div");
    errorModalDiv.innerHTML = `<div class="error-modal-container">
                                <div id="invalid-input">
                                  <i class="fas fa-exclamation-triangle alert"></i>
                                  <h2>Please enter an amount and select "Annual" or "Hourly".</h2>
                                  <i class="fas fa-times exit"></i>
                                </div>
                              </div>`;
    body.appendChild(errorModalDiv);

    document
      .querySelector("i.exit")
      .addEventListener("click", () => body.removeChild(errorModalDiv));
  }
});

btnClear.addEventListener("click", () => {
  results[0].innerText = "0.00";
  results[2].innerText = "0.00";
  results[3].innerText = "0.00";
  results[1].innerText = "0.00";
  results[4].innerText = "0.00";
  resultLabels[0].style.border = "0";
  resultLabels[4].style.border = "0";
  input.value = "";
});
