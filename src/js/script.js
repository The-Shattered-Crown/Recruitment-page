const htmlClass = document.documentElement.classList;
const darkModeButton = document.getElementById("darkmode-button");

if (JSON.parse(sessionStorage.getItem("darkMode")) === true) {
  htmlClass.toggle("darkmode");
}

darkModeButton.addEventListener("click", () => {
  htmlClass.toggle("darkmode");
  sessionStorage.setItem("darkMode", darkMode);
});
