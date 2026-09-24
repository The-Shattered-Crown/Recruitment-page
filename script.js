const darkModeButton = document.getElementById("darkmode-button")
const html = document.documentElement
let state = JSON.parse(sessionStorage.getItem("darkMode"))
function darkmode() {
  if (state) {
    html.id = ("darkmode");
  }
  else {
    html.removeAttribute("id");
  }
}
darkmode()
if (darkModeButton != null) {
  darkModeButton.addEventListener("click", () => {
    state = !state;
    sessionStorage.setItem("darkMode", JSON.stringify(state));
    darkmode();
  });
}
