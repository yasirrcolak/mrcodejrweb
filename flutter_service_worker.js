'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "de141200d3dc5260b05e8d7e1e2adb52",
".git/config": "ce14aaa5e50e104fd2f50ac5c1597954",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c451e5c0dc48977f54dcff009c265fa1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f4d7722dbf63beb106870970982e2464",
".git/logs/refs/heads/master": "f4d7722dbf63beb106870970982e2464",
".git/logs/refs/remotes/origin/master": "49ff92ea9863aa3edd624964972d06e0",
".git/objects/05/6319498b9a15798b7ed8cfa3ffcd99bef60ab4": "0e1b24bb3d9599240f23478ff83cb9d8",
".git/objects/0c/cc92f76b889f323bd87731003d599ec0abd9ff": "18c738eeb498589bf37720e3db3d454a",
".git/objects/1f/1aea7c7b5f2a6251eadb7803ece5a0cb6d6292": "165640903f78b7dea29417a32740926c",
".git/objects/1f/fefe9a56a13136797c9418e6d9510b0ad605e0": "8bfa094a6454b4c316b530dce0d54d50",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/30/1992437b89919079d8748f1f6ebafc8cae2b8a": "1c1569b5bb1d64c6454cf4537ac91120",
".git/objects/32/4606f07574e55cb46ccda4bbcab98622cb6baf": "a1133183b4a6c8196356278e27c951d9",
".git/objects/34/d3e831e4f018d2d3951cf8c61257d8ae4cdfb2": "ac5720697eb49d3d3bd348c353462169",
".git/objects/37/ba04076a78f58cb545510065bb138340ae84e5": "7a5b7b4c12d5939561e52a3a80825b0e",
".git/objects/40/0980f10ac1136f4a141969bcce843272aa3e82": "ffcc0ea8047608a4174ad60cb4fedcc2",
".git/objects/43/de39bfb6aa8916943b22fb5c245259c0b61f84": "4bcd3c475cdb3e91d4569edd14f24036",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/63ea499d48c825e94ecd043817479ad8f28b9a": "26d00fd5d6a24694c44413f3ec64ebfa",
".git/objects/48/b9d28bbe05aa1aa33e5270c7fa7cd20cf1db4f": "9a919295ef400e5917d78293ddf4fe81",
".git/objects/59/f1e8d078548c13d28b1c04b4a4506df57d70e6": "12d7b02be23235b593fdebcf13c613a8",
".git/objects/5a/895d33a2ece18e920c896887106c863c589569": "cba254938838282bae9ab2d87b8e2b65",
".git/objects/62/8a0b8c8c50f0a93b6a63c8e433da17b020aa7b": "bec9db09b17845fe90e87cacc3bb725f",
".git/objects/6f/da78eefc97616bd345be87b3163acf39613568": "00343eae2b63df29cd19f6a6fb7332a7",
".git/objects/79/20c3b340112effd13c75010d85f03e7c6f79ee": "49268de0eafc9601d24386c600f63ec4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/a5ad6ed71289beb4a4ed2ac37aaedf2c76e733": "3f64976cb0a6832828c33475fa58b755",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/ad3713b91d428431ec6f8714c7bcdb8d0a3537": "171fd032c34dc508d2dc594bdd2b3aca",
".git/objects/8d/303ad1a62c5ae7a0226c8213b84fb76e1dcc8a": "8d436cc9ce98eb1cf58a15031ba34281",
".git/objects/8d/8d82f84d5bb79fea15c4b127e39b087dc406c9": "2b6c1994cfe1089a9ca1430f502ed482",
".git/objects/8d/b068b8e107681af48da793337dfd50f4b9ed2f": "459f912d869339687280ba7fd6401a4b",
".git/objects/9f/aec97a3ef7be37808625f948014434aa80638a": "4affcb85f1b3cd668a52b77e3cca5182",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/0918eba880864aa2ff139ffd3ef11c49b1a883": "9a4aa1dc6ba3ed37801c219096f030c7",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/e7e9f1a51fe91ff39f75a6318a60b55b7e4a77": "0e8555137d1be5f27b794133b4649dd0",
".git/objects/ad/0de441c0a27d2ae7b8af8536d1e3e35bb89c87": "28f8643f461e517728a9cb5fb6f26d4d",
".git/objects/b2/3b3702575c05dd58886559da73a2891a89a7bd": "83dcafe356c7d711494920cadbe11a80",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/e3e5db1e48cc86f9ea80decc330b1d06725629": "4d3d479aeb61c2d7d4e61934b2b1337e",
".git/objects/bc/77ca53c08bd012694aa827d1814185d3ff8616": "e13426f195a2e501f192da53bfd3c611",
".git/objects/d5/35b0cde3ed588ab256767664e09417f2a6b54f": "8e2a3f90b2014e411fb053077bd40dd7",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/7b5b1f014df493f3f79841fa869297c2405b88": "78b9e5a6b1ab5a1f144162c08e42cf35",
".git/objects/e8/838c901b5be05b35a9d5b7f505a746fb0d0a97": "1711a5946122194bb47fe415723e7617",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/fb/23252f6e2c14a2dbddc83527bd3a1f1b1ae358": "e0cb2e473141b92b27524a8653cad670",
".git/refs/heads/master": "f0968be7745ddc198ad08156777f7496",
".git/refs/remotes/origin/master": "f0968be7745ddc198ad08156777f7496",
"assets/AssetManifest.json": "3e989e3256fb7584aa9a603e647a3f56",
"assets/assets/images/%25C4%25B0sarSoft.png": "ee04b9abbb41ee8439980748d34b772e",
"assets/assets/images/cardLevelImage1.png": "d26148827176cdcccaf44745b203b2ef",
"assets/assets/images/cardLevelImage10.png": "4316652d2eb25b4c886927e689711817",
"assets/assets/images/cardLevelImage11.png": "6cf58ff82209f99cdd3c1c18c1a90388",
"assets/assets/images/cardLevelImage12.png": "fd710417116bc7b8099c8bf50bb7451d",
"assets/assets/images/cardLevelImage13.png": "7896b3f3ca618c2e9ca374be8504eed7",
"assets/assets/images/cardLevelImage14.png": "c97604eedd0c205ea1fb3baf1be38de1",
"assets/assets/images/cardLevelImage15.png": "d3caa989f2baf883d2592e84c21ff89b",
"assets/assets/images/cardLevelImage16.png": "1bb7f34f7217cdc6bf243697fd1b8518",
"assets/assets/images/cardLevelImage17.png": "cdf1333a33b212a80c305904ea7a6214",
"assets/assets/images/cardLevelImage18.png": "765d0f9ddd46f9b16a318561dfda075b",
"assets/assets/images/cardLevelImage19.png": "22fccb7475e58258d5d5f0935d66865f",
"assets/assets/images/cardLevelImage2.png": "68a2a8715dfe344b60f51e666ad84c52",
"assets/assets/images/cardLevelImage20.png": "a477a51838ef396c8b1168a40e85e85e",
"assets/assets/images/cardLevelImage21.png": "9208a67b887ca530bd67c81626cc604a",
"assets/assets/images/cardLevelImage22.png": "e4e5996aae67b02c03f690e7b8c1ef32",
"assets/assets/images/cardLevelImage23.png": "c405abdbee41dc5b3a438cf601516ebb",
"assets/assets/images/cardLevelImage24.png": "46282d66558185faf38c2a963b3ce8f2",
"assets/assets/images/cardLevelImage25.png": "ba48f928eaa54c8676a8e143ad3facac",
"assets/assets/images/cardLevelImage26.png": "8071d3659dcb17e9a5cb7dc12a59ee40",
"assets/assets/images/cardLevelImage27.png": "51306633cea600f56559b6caf3d8c807",
"assets/assets/images/cardLevelImage28.png": "b6fae1073c243f7c998586e554d5d7e4",
"assets/assets/images/cardLevelImage29.png": "b230626eb51cb756b0abf94262450f59",
"assets/assets/images/cardLevelImage3.png": "5bc8b172d5423c92b88be9a6e8faf6dc",
"assets/assets/images/cardLevelImage30.png": "0514df3589bce4be0ae82821a31df05c",
"assets/assets/images/cardLevelImage4.png": "b2ff9d4b8fe3aff80d423698583ad605",
"assets/assets/images/cardLevelImage5.png": "6e195862434561d10968d88048b82608",
"assets/assets/images/cardLevelImage6.png": "344122144bfc23a5d3108f8d27b87162",
"assets/assets/images/cardLevelImage7.png": "ac1a8eddda14edcbc1765104bda9dccb",
"assets/assets/images/cardLevelImage8.png": "e2cd3a6ab814a5b45b4de5f74e4bfaab",
"assets/assets/images/cardLevelImage9.png": "d1731c91449c2b4ccf82d1886008faa0",
"assets/assets/images/commingSoon.png": "d3088db00768681d64acf2aa0d3f5bc7",
"assets/assets/images/gamezone.png": "a7b9d9be1c2bb2e63cf331786a292cdb",
"assets/assets/images/ISAR_GAMES_LOGO.jpeg": "c4acb4fbeed70bdcf1571557978576d7",
"assets/assets/images/isar_logo_1.png": "f1536c4d0c84f28fb5e3b5e1b479ff75",
"assets/assets/images/isar_logo_siyah.png": "2fd0e7804c4b10a6c8692a0768922fe0",
"assets/assets/images/level1.png": "fce518ec4fb890fee55c662e49ef5595",
"assets/assets/images/level10.png": "d82739d9eeca8a8b1ac37d69ef942514",
"assets/assets/images/level11.png": "096dde79792c668399c73e38514da5f3",
"assets/assets/images/level12.png": "0018a402bf3eeca535cd3af9f4f6a789",
"assets/assets/images/level13.png": "73017ba8c2997600ff32ce225689ee48",
"assets/assets/images/level14.png": "2a7e1f09e3143059d767c5416c9eb821",
"assets/assets/images/level15.png": "17c1887aa222ecf503fb20d49b2f5436",
"assets/assets/images/level16.png": "882a5c989ad546726359ca5c1d7503d0",
"assets/assets/images/level17.png": "f08b4c0ab722fbe76ec801d2e5520ab1",
"assets/assets/images/level18.png": "dd60117a62cd53c1d864e11b598db04c",
"assets/assets/images/level19.png": "071ac7dbc600e554dd86b9ccc6542156",
"assets/assets/images/level2.png": "52e5ab242c75250184021ccb0f96669d",
"assets/assets/images/level20.png": "7c1d19dbb10e4556efa5bd2a6a73cc6d",
"assets/assets/images/level21.png": "89dcb7cc45da4d6b2881d91b0c877b9c",
"assets/assets/images/level22.png": "abd95f99fd5afeecbc079f949f09ffc6",
"assets/assets/images/level23.png": "aea96d94b49f2f1f597c8b731d639c4c",
"assets/assets/images/level24.png": "89d1e690e26a6228ab4e0ed44df9d6ca",
"assets/assets/images/level25.png": "6eb5896c4f259c660c3bd49bdc47ef53",
"assets/assets/images/level26.png": "cda412cdbdde69ff1c293a89b27879f4",
"assets/assets/images/level27.png": "8dc65bbbbc0ac66ffc7eb73e291da621",
"assets/assets/images/level28.png": "feeef0fc6d683b54fb143a4b2906aa65",
"assets/assets/images/level29.png": "00320cd1bbdf4ef933a43df7e95cb179",
"assets/assets/images/level3.png": "ba0c8d5c9bd3a092e8b31b6a3192e286",
"assets/assets/images/level30.png": "8d9ada6f63c76786beeb0e039045920f",
"assets/assets/images/level4.png": "2533d944ca3e8cebbeedee7cfb02cba1",
"assets/assets/images/level5.png": "fbfd0a3639c58c424584c0082f53c2c9",
"assets/assets/images/level6.png": "e9e8d3d744c2d6328cae7f6acd26551b",
"assets/assets/images/level7.png": "6e85bb98940e9d51f958cb89861cd12b",
"assets/assets/images/level8.png": "e0e94886d7a2f22a438b700596efdd4b",
"assets/assets/images/level9.png": "3ff9cfcb7c3c17d099718eaced8531c3",
"assets/assets/images/swipedImage.png": "fc88e805ff31ad5f2de43f6dab25f32d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "6fd632f7aad32c628aa0308bf454dd92",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/en.json": "5bd908341879a431441c8208ae30e4fd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "c21c1ab0f5be16870fbc596da5fecd75",
"/": "c21c1ab0f5be16870fbc596da5fecd75",
"main.dart.js": "90249a121a77c2eb205753fb77e8961f",
"manifest.json": "88aae3778c23e3efb7f622c05b674163",
"version.json": "55cd4a9b6a7c70156a8dc3b0f475d25b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
