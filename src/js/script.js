const htmlClass = document.documentElement.classList;
const darkModeButton = document.getElementById("darkmode-button");
if (sessionStorage.getItem("darkMode") == null) {
  sessionStorage.setItem("darkMode", "false");
}
let darkMode = JSON.parse(sessionStorage.getItem("darkMode"));

if (darkMode === true) {
  htmlClass.toggle("darkmode");
}

darkModeButton.addEventListener("click", () => {
  darkMode = !darkMode;
  htmlClass.toggle("darkmode");
  sessionStorage.setItem("darkMode", darkMode);
});
