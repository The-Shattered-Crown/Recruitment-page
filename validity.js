const form = document.forms[0];
const submitButton = form.querySelector("button")
form.addEventListener("input", () => {
  if (form.checkValidity()) {
    submitButton.disabled = false;
  }
  else {
    submitButton.disabled = true;
  }
});
if (submitButton.disabled) {
   submitButton.title = "Please fill all fields and accept the terms to submit";
}
