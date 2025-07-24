const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const confirmPasswordInput = document.querySelector("#password-confirm-input");
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");

function validateEmail(email) {
  const atPos = email.indexOf("@");
  const dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

function validateName(name) {
  return /^[A-Za-zก-๙ะ-์]+$/.test(name.trim());
}

function validatePassword(password) {
  return password.length >= 6;
}

function resetValidation(input) {
  input.classList.remove("is-valid");
  input.classList.remove("is-invalid");
}

function setInvalid(input) {
  input.classList.remove("is-valid");
  input.classList.add("is-invalid");
}

function setValid(input) {
  input.classList.remove("is-invalid");
  input.classList.add("is-valid");
}

// เมื่อผู้ใช้พิมพ์ข้อมูลใหม่ ให้ล้างกรอบแดง/เขียว
[firstNameInput, lastNameInput, emailInput, passwordInput, confirmPasswordInput].forEach(input => {
  input.addEventListener("input", () => {
    input.classList.remove("is-valid", "is-invalid");
  });
});

// ปุ่ม Register
submitBtn.onclick = () => {
  let isValid = true;

  // First name
  if (firstNameInput.value.trim() === "" || !validateName(firstNameInput.value)) {
    setInvalid(firstNameInput);
    isValid = false;
  } else {
    setValid(firstNameInput);
  }

  // Last name
  if (lastNameInput.value.trim() === "" || !validateName(lastNameInput.value)) {
    setInvalid(lastNameInput);
    isValid = false;
  } else {
    setValid(lastNameInput);
  }

  // Email
  if (emailInput.value.trim() === "" || !validateEmail(emailInput.value)) {
    setInvalid(emailInput);
    isValid = false;
  } else {
    setValid(emailInput);
  }

  // Password
  if (!validatePassword(passwordInput.value)) {
    setInvalid(passwordInput);
    isValid = false;
  } else {
    setValid(passwordInput);
  }

  // Confirm Password
  if (
    confirmPasswordInput.value !== passwordInput.value ||
    !validatePassword(confirmPasswordInput.value)
  ) {
    setInvalid(confirmPasswordInput);
    isValid = false;
  } else {
    setValid(confirmPasswordInput);
  }

  // แสดงผลเมื่อข้อมูลทุกช่องถูกต้อง
  if (isValid) {
    alert("Registered successfully");
  }
};

// ปุ่ม Reset
resetBtn.onclick = () => {
  [firstNameInput, lastNameInput, emailInput, passwordInput, confirmPasswordInput].forEach(input => {
    input.value = "";
    resetValidation(input);
  });
};