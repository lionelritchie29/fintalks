const imgBasePath = "/assets/images";
const logoBasePath = "/assets/logo";

const imgUrl = [
  `${imgBasePath}/404.svg`,
  `${imgBasePath}/about.svg`,
  `${imgBasePath}/contact.svg`,
  `${imgBasePath}/curve.svg`,
  `${imgBasePath}/header-img.svg`,
  `${imgBasePath}/services.svg`,

  `${imgBasePath}/steps/1-choose-2.svg`,
  `${imgBasePath}/steps/2-plan.svg`,
  `${imgBasePath}/steps/3-done.svg`,

  `${imgBasePath}/services/fininsurance.svg`,
  `${imgBasePath}/services/finlegal.svg`,
  `${imgBasePath}/services/finstocks.svg`,
  `${imgBasePath}/services/fintax.svg`,
];

const logoUrl = [
  `${logoBasePath}/logo-blue.png`,
  `${logoBasePath}/logo-white.png`,
];

const jsUrl = [
  "/js/app.js",
  "/js/vendor/materialize.min.js",
  "/js/script/load-nav.js",
  "/js/script/load-page.js",
];

const cssUrl = ["/css/materialize.min.css", "/css/custom.css"];

const urlsToCache = [...imgUrl, ...logoUrl, ...jsUrl, ...cssUrl];

export default urlsToCache;
