"use strict";

// Elements
const btnEl = document.querySelector(".btn");
const inputEl = document.querySelector(".input");
const copyIconEl = document.querySelector(".copy");
const alertContainerEl = document.querySelector(".alert-container");

// Functions
const createPass = function () {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?><{}[]=-;:',/.ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLength = 14;
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);
  }
  inputEl.value = password;
  alertContainerEl.textContent = password + " copied!";
};

const copyPass = function () {
  inputEl.select();
  inputEl.setSelectionRange(0, 9999);

  navigator.clipboard.writeText(inputEl.value);
};

const copyAlert = function () {
  if (inputEl.value) {
    alertContainerEl.classList.remove("active");

    setTimeout(() => {
      alertContainerEl.classList.add("active");
    }, 3000);
  }
};

// Event handlres
btnEl.addEventListener("click", createPass);

copyIconEl.addEventListener("click", () => {
  copyPass();
  copyAlert();
});
