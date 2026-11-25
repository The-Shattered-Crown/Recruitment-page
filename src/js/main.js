const form = document.forms[0];
const submitButton = form.querySelector("button");
const textFields = Array.from(form.querySelectorAll("input, textarea"));
const checkbox = document.getElementById("checkbox");

form.addEventListener("input", () => {
  if (form.checkValidity()) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

if (submitButton.disabled) {
  submitButton.title = "Please fill all fields and accept the terms to submit";
}
// Keyboard navigation
document.addEventListener("keydown", (clicked) => {
  const key = clicked.key;
  const activeElement = document.activeElement
  const index = textFields.indexOf(activeElement);
  // If these variables are used in a if/else if statement they check whether they exist
  const ForwardIndex = textFields[index + 1];
  const BackwardIndex = textFields[index - 1];
  // Checks if altKey is pressed
  if (clicked.altKey) {
    //Switches input fields after checking if they exist
    if (key === "ArrowDown" && ForwardIndex) {
      ForwardIndex.focus();
    } else if (key === "ArrowUp" && BackwardIndex) {
      BackwardIndex.focus();
    } else if (!isNaN(key)) {
      if (key === "4") {
        checkbox.checked = !checkbox.checked;
        form.dispatchEvent(new Event("input"));
      } else if (key === "5") {
        submitButton.click();
      } else if (textFields[key]) {
        textFields[key].focus();
      }
    }
  }
  // Enter key to move to next field IF current field type is input
  else if (clicked.key == "Enter" && index <= 2) {
    clicked.preventDefault();
    ForwardIndex.focus();
  } else if (
    clicked.key == "Backspace" &&
    BackwardIndex &&
    !activeElement.value
  ) {
    clicked.preventDefault();
    BackwardIndex.focus();
  }
});
