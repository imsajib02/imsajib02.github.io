'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e57b373cc90490dedc2ffb0de321cf57",
".git/config": "f1a6886c46b00ba9a017a73220841fbf",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "7906e621b36ac4486baaf311f1a7074e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "32e9ca0e4b910fd8f13894cc3c27989a",
".git/logs/refs/heads/master": "32e9ca0e4b910fd8f13894cc3c27989a",
".git/logs/refs/remotes/origin/master": "dd229b39cb705033710f499f8f0ce93f",
".git/objects/01/b97b7b47faf2abdc724be5439ee9e6c86dea08": "caed134443bb7a0b4443591d520f84b2",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/03/09fd296ae2d3c95beaf0799f8ed535f0e23d64": "787cb66a6ac7c9ae814ae691fd520852",
".git/objects/05/5ae81df2b1ccc06e6373088bbd8eb840e63751": "3860e2f4edc9e7273fa1420ce7948d97",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0e/1b16b929df2c8f2ed28ffcdcdbaa6f7cdf5a7d": "c188fece68947ce0350f6c9f4363a2e2",
".git/objects/1a/23181d7321ea6c1b4222a57cb298d232fcb7e4": "48a1c33808c81911ead788bb8005a705",
".git/objects/1d/58d384e0fbe357511ceb585110d9a7ff263604": "92ff1370164a7c90633f092d66a6ee61",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/9f515ab1afd263ad73d79f64e58e238ed3af42": "9727f3a2614a76c8c14d661637087c04",
".git/objects/28/5d3b3a65eb455d410c3bf31fccc8dbbc8cbdbc": "8f13b3e9424f71d09fc00a1d9e39692c",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/37/26d31da3805001d9ee9ae1265beaebbacbb4e4": "c5e533250e7908347fd09b3e10cee840",
".git/objects/3d/3ee4a025d1a1fec87536562b0afd3dfab395d8": "218dfe4f265f5332ac4dc38e673346cc",
".git/objects/3d/f165fda50ae5205f2640f03f63679a3aba8b62": "8a89c0b3f8789bf254c6707f3913ee1a",
".git/objects/3e/7a3e0e605ca4e7241f964fad33b1c449e530d6": "62df7f6b1ea932601111e1400e4c540e",
".git/objects/42/0aacda1d1b71f05dd5df2170f73ba200191901": "9e1c68c3d8d5ef7b1096aae1716dbc4a",
".git/objects/48/360859a191be3e1b62866218ce275a68eac3f5": "b3ab5f08dffa251023b1d7012b1ab253",
".git/objects/49/6e4be8d8ad60adaaca7db68dfb5926b774ef9c": "a08783e6e849b2c9bcfbcecc6e90a78b",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/d482e2517f2d0b9c9a17f78fb8151b04c97034": "bb1dc433f210a8b47213994aaad16da7",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/68/c7ebce1be28442adfd03f5133edf0a404fd0d4": "a4c08ccfee82007df30fa490c24ca824",
".git/objects/6c/5c04931cc1705447b50fc86d621b93668b88a4": "f0b439bbbc2769e4a6dbcd743c661428",
".git/objects/6c/84b9e1494e9ea67c043ae9f579333218d5d7fb": "9294b538654cdd11f04b5b6c6a07c5ff",
".git/objects/70/6f24fd53d6b51668c67fdc9cfc9840e18f3d98": "95afd0f4f51b052f149a0cc054416272",
".git/objects/75/9ce388753a436f40b75f574d1377077a7a40ec": "22405202bcf8e16da18d3b49990c9820",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/87bd6bcaf06828e06fc9076073039a6c1e17b4": "410214aed083f35f8b738c316751bb39",
".git/objects/81/f8da657f4d111d76b4d2cd5a7411b77310dc0d": "8b8ee3407d538b030f8eb735009c6074",
".git/objects/83/6382f6ad0686bd6d61d6030a81971ce7ee0bfd": "e6ffb5df4eb736bdff7edfb387643f44",
".git/objects/8f/bf90202b5bf81bd4e588ef4ea83302ab5fbbc1": "7b7579ec4665a952b1281503e03198f9",
".git/objects/92/9858726e68ae15b92e01b9f0e5fd4252ce4788": "b34fe0f903fdd018cac22bfc473ae23a",
".git/objects/9e/bfc2c078a9f87eea12f4fc82fb454709a09950": "a998ddeee605502b52081b899a88f6be",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/47d7530b17547f40e077669375b1875461b335": "9e2b85de372e6f80ffa977145f86f3c4",
".git/objects/bc/65d63b38ee9619873c7386c4fdda4e686f1683": "d270fe5794e1d578ddf16db1c85e323f",
".git/objects/bf/b34b1d678c1de94ad5a4c659a165e3a8018c38": "1eff6aa3b513324b37786ae0a4a4accf",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d6/f69b8135bb6ac18334104e2baa8b035d4f4642": "83dc685ccaf1543a67452582e0a9ccee",
".git/objects/d7/e61dfd72318dc08fbe50b60180e6e74ddcff4f": "b659337f0a1d5a588cdde6e37ca93f05",
".git/objects/d8/fcbee698b5b8e5b08a8ef8760adbd781ffc32e": "3ab005ac88f5b78167a42fffa82d6b27",
".git/objects/da/22cf796d9731d9f069833dc2187d14f7e6d91c": "f3e55a42262c54bbd97111d41cbbb446",
".git/objects/db/d00cf6230726bf1c60933e93a75ce753ecdcdb": "1770b3cff246dd7bc7c06046906e8d19",
".git/objects/dc/66aaa30f5e93928a0a7a704b50493c2ceabc83": "b939bb79b8b40a67c7ae10bbacfd7f9e",
".git/objects/dd/4b1d64400706d69404b71b3af0ed1cc72aec40": "23f3ab2ac26f06086ec87625b63c8048",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/ddcba877d174ba8d6df0c43f58a4732fc133cb": "111c7aed414dd6212589f966cb0c844f",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/730e9dc0f3f4618c2526127d5d929ee266c14f": "9ff0306334334383e3a8bfe78924542d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ed/84d10846c93f22dad98769533e5f6cbbdde388": "61d2a34250c6e5f44a1855041197bbcb",
".git/objects/f1/6b586918ae57b838e8c23711d7ff36727d69ca": "75d81a07f217b8831742764c638708b6",
".git/objects/f3/4fc49b74f5cc18f64c00b295ff1e30bd2871c1": "50a7ed60c8defea2f24e31100eb4fc33",
".git/objects/fa/9617aeec21d49e8c250f0234326b4f4e3b7c40": "10e25aa84204a26ebaf8a511520b2c7d",
".git/refs/heads/master": "d3d490b96fb5adb7898da9d276789b58",
".git/refs/remotes/origin/master": "d3d490b96fb5adb7898da9d276789b58",
"assets/AssetManifest.json": "8b05af0fde30dc338c9f4802a36cfaa4",
"assets/assets/animations/splash_loading.json": "fb54677f8458b0f168a60ec2f18bd3d4",
"assets/assets/gif/programmer2.gif": "680033459de4ba5559b8d3094ad0987b",
"assets/assets/images/blob_ash.png": "f76b87a8dd8bb4ad017b441854541a2b",
"assets/assets/images/code.png": "70856270a422e842d8f45f624e79a0c6",
"assets/assets/images/duration.png": "04531ba2e72be2050df2c02e578aa6a5",
"assets/assets/images/flutter_logo.png": "30200e4ceba35ad41756a8313ccd148c",
"assets/assets/images/formal_image.png": "c491091d19ad515362f95cea651045d6",
"assets/assets/images/framework.png": "d94e6395b0bae44f556e9db6df373210",
"assets/assets/images/implementation.png": "70c4e16657dd0f67e148317e6bd4e7a6",
"assets/assets/images/link.png": "2e816c9386895b4c4c75b8730a4703f4",
"assets/assets/images/no_image.png": "51a781d442c43c68c4b273baf0144502",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "b9905340a799adf76fe5d28d873fe55a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.ico": "15865cf516213e4c074443af8e192116",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/apple-touch-icon.png": "5ab24afeacdc541f6db34fd3c3a46bd0",
"icons/Icon-192.png": "47763699f24137cdb98f4d192d332b07",
"icons/Icon-512.png": "1eff3eb3bff7c2325199ea4495840a59",
"index.html": "71c8c5c0f7c5478886e808d484d47375",
"/": "71c8c5c0f7c5478886e808d484d47375",
"main.dart.js": "42b5b0eb79eace7d1b46f78abad2a9a9",
"manifest.json": "a7f12868aa46190c9bae9bc945f54002",
"version.json": "009c9e65172e010890f7f65fde438006"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
