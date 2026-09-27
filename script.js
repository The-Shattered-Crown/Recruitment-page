const html = document.documentElement
if (JSON.parse(sessionStorage.getItem("darkMode"))) {
  html.id = "darkmode";
} else {
  html.removeAttribute("id");
}
