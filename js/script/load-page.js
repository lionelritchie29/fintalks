import loadNav from "./load-nav.js";
const notFound = `
  <section class="container" style="height: 100vh; padding-top: 10rem;">
  <div class="center service-page-heading">
    <h4 class="font-bold text-primary">Oops</h4>
  </div>

  <div class="heading-img">
    <img src="../assets/images/404.svg" alt="404" />
  </div>
  </section>
`;

const loadPage = (page) => {
  if (page === "") page = "home";

  //ajax
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      const content = document.querySelector("#content");
      if (this.status == 200) {
        content.innerHTML = xhttp.responseText;
      } else if (this.status == 404) {
        content.innerHTML = notFound;
      } else {
        content.innerHTML = "<p>Oops, halaman tidak bisa diakses</p>";
      }
    }

    loadNav();
  };
  xhttp.open("GET", "/pages/" + page + ".html", true);
  xhttp.send();
};

export default loadPage;
