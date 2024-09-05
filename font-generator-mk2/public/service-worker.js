const APP_PREFIX = "BoosBlankets-";
const VERSION = "version_01";
const CACHE_NAME = APP_PREFIX + VERSION;

// Maybe add more files here later
const FILES_TO_CACHE = [
  "./Baby-boos-logo.ico",
  "./index.html",
  "./manifest.json",
  "./fabrics/basilGlacier.jpg",
  "./fabrics/safariBabies.jpg",
  "./fabrics/alloyGlacier.jpg",
  "./fabrics/amethystDot.jpg",
  "./fabrics/aquamarineDot.jpg",
  "./fabrics/arubaGlacier.jpg",
  "./fabrics/babyBlueDot.jpg",
  "./fabrics/babyBlueHide.jpg",
  "./fabrics/babyPinkDot.jpg",
  "./fabrics/bananaHide.jpg",
  "./fabrics/bellflowerHide.jpg",
  "./fabrics/blackDot.jpg",
  "./fabrics/blackGlacier.jpg",
  "./fabrics/blackHide.jpg",
  "./fabrics/blackSeal.jpg",
  "./fabrics/blueSorbet.jpg",
  "./fabrics/blueTieDye.jpg",
  "./fabrics/blushHide.jpg",
  "./fabrics/brownDot.jpg",
  "../src/fonts/Lively.ttf",
  "../src/fonts/blossom.ttf",
  "../src/fonts/BrittanySignature.ttf",
  "../src/components/Generator.css",
  "../src/components/Generator.js",
  "../src/App.css",
  "../src/App.js",
  "../src/index.css",
  "../src/index.js",
];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("installing : " + CACHE_NAME);
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keyList) {
      let cacheKeepList = keyList.filter(function (key) {
        return key.indexOf(APP_PREFIX);
      });
      cacheKeepList.push(CACHE_NAME);

      return Promise.all(
        keyList.map(function (key, i) {
          if (cacheKeepList.indexOf(key) === -1) {
            console.log("deleting cache : " + keyList[i]);
            return caches.delete(keyList[i]);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", function (e) {
  console.log("fetch request : " + e.request.url);
  e.respondWith(
    caches.match(e.request).then(function (request) {
      if (request) {
        console.log("Responding with cache : " + e.request.url);
        return request;
      } else {
        console.log("File is not cached, fetching : " + e.request.url);
        return fetch(e.request);
      }
    })
  );
});
