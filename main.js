const form = document.forms[0];
const submitButton = form.querySelector("button")
const formInputs = form.querySelectorAll("input")
const textFields = Array.from(form.querySelectorAll("input, textarea"))
const checkbox = document.getElementById("checkbox")

form.addEventListener("input", () => {
  if (form.checkValidity()) { submitButton.disabled = false; }
  else { submitButton.disabled = true; }
});
if (submitButton.disabled) { submitButton.title = "Please fill all fields and accept the terms to submit"; }
// Keyboard navigation
document.addEventListener("keydown", (clicked) => {
  const index = textFields.indexOf(document.activeElement);
  // Checks if altKey is pressed
  if (clicked.altKey) {
    // Disables autofill popup
    if (clicked.key === 'ArrowDown' || clicked.key === 'ArrowUp') {
      clicked.preventDefault();

      const input = clicked.target;
      input.readOnly = true;
      input.focus();
      setTimeout(() => { input.readOnly = false; }, 50);
      //Switches input fields
      if (clicked.key === 'ArrowDown' && textFields[index + 1]) { textFields[index + 1].focus(); }
      else if (clicked.key === 'ArrowUp' && textFields[index - 1]) { textFields[index - 1].focus(); }
      return;
    }
    // Number keys navigation
    if (!isNaN(clicked.key) && clicked.key !== " ") {
      if (clicked.key === "4") {
        checkbox.checked = !checkbox.checked;
        form.dispatchEvent(new Event("input"));
      }
      else if (clicked.key === "5") { submitButton.click(); }
      else if (textFields[clicked.key]) { textFields[clicked.key].focus(); }
      return;
    }
  }
  // Enter key to move to next field IF current field type is input
  if (clicked.key == "Enter") {
    if (index <= 2) {
      clicked.preventDefault();
      textFields[index + 1].focus();
    }
  }
})
