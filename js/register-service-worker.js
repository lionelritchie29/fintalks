if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(() => console.log("ServiceWorker: Register Success"))
      .catch(() => console.log("ServiceWorker: Register Failed"));
  });
} else {
  console.log("This browser does not support Service Worker");
}
