import loadNav from "./script/load-nav.js";
import loadPage from "./script/load-page.js";
import showCredit from "./script/show-credit.js";

document.addEventListener("DOMContentLoaded", function () {
  loadNav();
  loadPage(window.location.hash.substr(1));
  showCredit();
});
