const APP_PREFIX = "BoosBlankets-";
const VERSION = "version_01";
const CACHE_NAME = APP_PREFIX + VERSION;

// const FILES_TO_CACHE = [
//   "./Baby-boos-logo.png",
//   "./desktopScreenshot.png",
//   "./mobileScreenshot.png",
//   "./index.html",
//   "./manifest.json",
//   "./fabrics/basilGlacier.jpg",
//   "./fabrics/safariBabies.jpg",
//   "./fabrics/alloyGlacier.jpg",
//   "./fabrics/amethystDot.jpg",
//   "./fabrics/aquamarineDot.jpg",
//   "./fabrics/arubaGlacier.jpg",
//   "./fabrics/babyBlueDot.jpg",
//   "./fabrics/babyBlueHide.jpg",
//   "./fabrics/babyPinkDot.jpg",
//   "./fabrics/bananaHide.jpg",
//   "./fabrics/bellflowerHide.jpg",
//   "./fabrics/blackDot.jpg",
//   "./fabrics/blackGlacier.jpg",
//   "./fabrics/blackHide.jpg",
//   "./fabrics/blackSeal.jpg",
//   "./fabrics/blueSorbet.jpg",
//   "./fabrics/blueTieDye.jpg",
//   "./fabrics/blushHide.jpg",
//   "./fabrics/brownDot.jpg",
//   "./fabrics/brownpony.jpg",
//   "./fabrics/brownsugarPony.jpg",
//   "./fabrics/buffaloCheck.jpg",
//   "./fabrics/cactus.jpg",
//   "./fabrics/calloftheWild.jpg",
//   "./fabrics/cardinalGlacier.jpg",
//   "./fabrics/cedarwoodGlacier.jpg",
//   "./fabrics/ceriseHide.jpg",
//   "./fabrics/champagneHide.jpg",
//   "./fabrics/chiveHide.jpg",
//   "./fabrics/chocolateGlacier.jpg",
//   "./fabrics/claySky.jpg",
//   "./fabrics/cocaMochaSorbet.jpg",
//   "./fabrics/coralDot.jpg",
//   "./fabrics/denimDot.jpg",
//   "./fabrics/driftwoodRabbit.jpg",
//   "./fabrics/dustyRoseDot.jpg",
//   "./fabrics/elderberryHide.jpg",
//   "./fabrics/electricBlueDot.jpg",
//   "./fabrics/fairytaleBlush.jpg",
//   "./fabrics/fawnMinky.jpg",
//   "./fabrics/firefighters.jpg",
//   "./fabrics/fuschiaDot.jpg",
//   "./fabrics/gingerGlacier.jpg",
//   "./fabrics/goldDot.jpg",
//   "./fabrics/graphiteDot.jpg",
//   "./fabrics/grayGalaxy.jpg",
//   "./fabrics/grayHide.jpg",
//   "./fabrics/greenGlacier.jpg",
//   "./fabrics/hotPinkGlacier.jpg",
//   "./fabrics/hunterDot.jpg",
//   "./fabrics/hunterGalaxy.jpg",
//   "./fabrics/iceHide.jpg",
//   "./fabrics/icePinkGlacier.jpg",
//   "./fabrics/icePinkSeal.jpg",
//   "./fabrics/inkGlacier.jpg",
//   "./fabrics/ivoryDot.jpg",
//   "./fabrics/ivoryGlacier.jpg",
//   "./fabrics/ivoryHide.jpg",
//   "./fabrics/jadeDot.jpg",
//   "./fabrics/jeansGlacier.jpg",
//   "./fabrics/jeansHide.jpg",
//   "./fabrics/kellyGreenDot.jpg",
//   "./fabrics/latteDot.jpg",
//   "./fabrics/latteGlacier.jpg",
//   "./fabrics/lavenderDot.jpg",
//   "./fabrics/lavenderFawn.jpg",
//   "./fabrics/lavenderGlacier.jpg",
//   "./fabrics/lavenderHeather.jpg",
//   "./fabrics/lavenderLynx.jpg",
//   "./fabrics/leopardBlush.jpg",
//   "./fabrics/leopardSand.jpg",
//   "./fabrics/lilacGlacier.jpg",
//   "./fabrics/loganberrySeal.jpg",
//   "./fabrics/mallardDot.jpg",
//   "./fabrics/mallardHide.jpg",
//   "./fabrics/merlotDot.jpg",
//   "./fabrics/merlotGlacier.jpg",
//   "./fabrics/merlotHide.jpg",
//   "./fabrics/mermaidSorbet.jpg",
//   "./fabrics/midnightBlueDot.jpg",
//   "./fabrics/mightyJungle.jpg",
//   "./fabrics/mintCalf.jpg",
//   "./fabrics/mistyMauveGlacier.jpg",
//   "./fabrics/mossGlacier.jpg",
//   "./fabrics/mudpiePony.jpg",
//   "./fabrics/mushroomMinky.jpg",
//   "./fabrics/mysticSorbet.jpg",
//   "./fabrics/naturalSeal.jpg",
//   "./fabrics/naturalSnowOwl.jpg",
//   "./fabrics/navyDot.jpg",
//   "./fabrics/navyGlacier.jpg",
//   "./fabrics/navyHide.jpg",
//   "./fabrics/navySnowOwl.jpg",
//   "./fabrics/nineIron.jpg",
//   "./fabrics/opalDot.jpg",
//   "./fabrics/papayaDot.jpg",
//   "./fabrics/parisPinkDot.jpg",
//   "./fabrics/pastelSorbet.jpg",
//   "./fabrics/pecanGlacier.jpg",
//   "./fabrics/plumWineGlacier.jpg",
//   "./fabrics/purpleDot.jpg",
//   "./fabrics/razzledazzleSorbet.jpg",
//   "./fabrics/redDot.jpg",
//   "./fabrics/riteofSpring.jpg",
//   "./fabrics/rosewaterFawn.jpg",
//   "./fabrics/rosewaterHide.jpg",
//   "./fabrics/royalBlueDot.jpg",
//   "./fabrics/royalGlacier.jpg",
//   "./fabrics/rustDot.jpg",
//   "./fabrics/safariDreamsBlue.jpg",
//   "./fabrics/sageDot.jpg",
//   "./fabrics/saltwaterDot.jpg",
//   "./fabrics/sandshellRabbit.jpg",
//   "./fabrics/shellDot.jpg",
//   "./fabrics/silverGlacier.jpg",
//   "./fabrics/simplyTaupeGlacier.jpg",
//   "./fabrics/snowGlacier.jpg",
//   "./fabrics/snowHide.jpg",
//   "./fabrics/snowWhiteSeal.jpg",
//   "./fabrics/spiceHide.jpg",
//   "./fabrics/spruceHide.jpg",
//   "./fabrics/steelDot.jpg",
//   "./fabrics/sunshineDot.jpg",
//   "./fabrics/tangerineDot.jpg",
//   "./fabrics/teddyQuartz.jpg",
//   "./fabrics/thymeHide.jpg",
//   "./fabrics/tiedyeRabbitBeige.jpg",
//   "./fabrics/tiedyeRabbitBrown.jpg",
//   "./fabrics/truffleSeal.jpg",
//   "./fabrics/unicornSorbet.jpg",
//   "./fabrics/viennaCrystal.jpg",
//   "./fabrics/viennaPlumwine.jpg",
//   "./fabrics/viennaSpruce.jpg",
//   "./fabrics/whiteDot.jpg",
//   "./fabrics/wildroseLynx.jpg",
//   "./fabrics/woodroseGlacier.jpg",
//   "./fabrics/woodroseHide.jpg",
//   "./fabrics/xmasTrucks.jpg",
//   "./fabrics/yellowDot.jpg",
//   "../src/fonts/Lively.ttf",
//   "../src/fonts/blossom.ttf",
//   "../src/fonts/almondbutter.ttf",
//   "../src/fonts/AmazinglyBeautifulRegular.ttf",
//   "../src/fonts/Andrea.ttf",
//   "../src/fonts/aurora.ttf",
//   "../src/fonts/Autery.ttf",
//   "../src/fonts/Babypoint.ttf",
//   "../src/fonts/Bakedfresh.ttf",
//   "../src/fonts/BohoFlowers.ttf",
//   "../src/fonts/Brooklyn.ttf",
//   "../src/fonts/carefree.ttf",
//   "../src/fonts/Chakra.ttf",
//   "../src/fonts/Chalk.ttf",
//   "../src/fonts/classico.ttf",
//   "../src/fonts/Clocks.ttf",
//   "../src/fonts/Cookie.ttf",
//   "../src/fonts/Doodle.ttf",
//   "../src/fonts/Eduarda.ttf",
//   "../src/fonts/Farmhouse.ttf",
//   "../src/fonts/Ghisella.ttf",
//   "../src/fonts/Hancock.ttf",
//   "../src/fonts/Harpsichord.ttf",
//   "../src/fonts/Homework.ttf",
//   "../src/fonts/Langrish.ttf",
//   "../src/fonts/Layla.ttf",
//   "../src/fonts/Sweetheart.ttf",
//   "../src/fonts/Tatertot.ttf",
//   "../src/fonts/Violetta.ttf",
//   "../src/fonts/Wonderful.ttf",
//   "../src/fonts/BrittanySignature.ttf",
//   "../src/components/Generator.css",
//   "../src/components/Generator.js",
//   "../src/App.css",
//   "../src/App.js",
//   "../src/index.css",
//   "../src/index.js",
// ];

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
