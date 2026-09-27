const form = document.forms[0];
const submit = form.querySelector("button")
form.addEventListener("input", (event) => {
  event.preventDefault();
  if (form.checkValidity()) {
    submit.disabled = false;
  }
  else {
    submit.disabled = true;
  }
});
if (submit.disabled == true) {
   submit.title = "Please fill all fields and accept the terms to submit";
}
