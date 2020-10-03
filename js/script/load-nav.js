import loadPage from "./load-page.js";

const loadNav = () => {
  //init sidebar
  const elems = document.querySelectorAll(".sidenav");
  M.Sidenav.init(elems);

  //init ajax
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status != 200) return;

      // attach nav list to top and sidebar
      document
        .querySelectorAll(".topnav, .sidenav, .footer-top")
        .forEach(function (elm) {
          elm.innerHTML = xhttp.responseText;
        });

      // add event listener for each list
      document
        .querySelectorAll(".topnav a, .sidenav a, .footer-top a, .nav-link")
        .forEach((elm) => {
          elm.addEventListener("click", (event) => {
            // close sidenav
            var sidenav = document.querySelector(".sidenav");
            M.Sidenav.getInstance(sidenav).close();

            // load page
            const page = event.target.getAttribute("href").substr(1);
            window.scrollTo(0, 0);
            loadPage(page);
          });
        });
    }
  };
  xhttp.open("GET", "../nav.html", true);
  xhttp.send();
};

export default loadNav;
