const html = document.documentElement
if (sessionStorage.getItem("darkMode") == null) { sessionStorage.setItem("darkMode", "false") }
let darkMode = JSON.parse(sessionStorage.getItem("darkMode"))
function applyDarkMode() {
  if (darkMode) { html.id = "darkmode" }
  else { html.removeAttribute("id") }
}
applyDarkMode()
document.getElementById("darkmode-button").addEventListener("click", () => {
  darkMode = !darkMode
  sessionStorage.setItem("darkMode", darkMode)
  applyDarkMode()
})
