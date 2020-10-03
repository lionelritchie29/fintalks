const CACHE_NAME = "v1";
const imgBasePath = "/assets/images";
const logoBasePath = "/assets/logo";
const pageBasePath = "/pages";
const fontBasePath = "/assets/fonts";

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
  `${logoBasePath}/logo-144.png`,
];

const jsUrl = [
  "/js/app.js",
  "/js/vendor/materialize.min.js",
  "/js/script/load-nav.js",
  "/js/script/load-page.js",
  "/js/script/show-credit.js",
  "/js/script/register-service-worker.js",
];

const pagesUrl = [
  `${pageBasePath}/about.html`,
  `${pageBasePath}/contact.html`,
  `${pageBasePath}/home.html`,
  `${pageBasePath}/services.html`,
];

const cssUrl = ["/css/materialize.min.css", "/css/custom.css"];

const fontsUrl = [
  `${fontBasePath}/ubuntu-v14-latin-500.woff2`,
  `${fontBasePath}/ubuntu-v14-latin-700.woff2`,
  `${fontBasePath}/ubuntu-v14-latin-regular.woff2`,
];

const urlsToCache = [
  "/",
  "/manifest.json",
  "/favicon.ico",
  "/apple-icon-192x192.png",
  "/index.html",
  "/nav.html",
  ...imgUrl,
  ...logoUrl,
  ...jsUrl,
  ...cssUrl,
  ...pagesUrl,
  ...fontsUrl,
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("install");
      cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request, { cacheName: CACHE_NAME }).then((res) => {
      console.log("fetching");
      if (res) {
        return res;
      }
      return fetch(e.request);
    })
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      console.log("activated");
      return Promise.all(
        cacheNames.map((name) => {
          if (name != CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    })
  );
});
