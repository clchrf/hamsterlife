'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "21c373e85084e11bf54eaceef6fd2605",
".git/config": "055ddf21a9cd80071e296bd8eb9edd0a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e29e54232305deede4580ecfa7982090",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4db31702894c5f2200387ccc8a2a8ead",
".git/logs/refs/heads/gh-pages": "5c1b4d21b9009ec44708ad4e9d00f8a9",
".git/logs/refs/remotes/origin/gh-pages": "b0a6fd3ce8b65ce24d9d48fa2254d9f9",
".git/objects/00/cd36b01acd362b3acfc679ceadfd848fe91682": "4eac66df2705a5e134ffad14d627908b",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/04/410402abf5d54cbf578f4c082d98785c0180db": "71c65afd4c3effbbaf5a01e6a72c798b",
".git/objects/07/31262d75b0e1c5ce3c1fbc9b46c37573e9fab3": "24680fa14cd662487c03baf12a86f039",
".git/objects/0d/de36f238fa16eeabcd6d1f21fc61e100a78320": "b1b2a26c0e56ab2aea1b4012bceef7a1",
".git/objects/12/7e617d34e77b4a99d8e838bce6c64fa725a8ea": "6d35656eab475fb9db6aa51da95131c6",
".git/objects/18/1024953f238dc4858dcdeff636e8a6c8c345f2": "0b2a6d911dffe7795103e138c7f736f9",
".git/objects/19/3d642de5d4be46976f6ec06c3ad21625c649f7": "f9f61a3927332792e4934cb9d2f22a03",
".git/objects/1b/4f6b4c97bc7959edbbad1a4480eb0e87c9ef89": "84790d330e043d0261309cc856c04f27",
".git/objects/1d/f5d10172073b343e74c1d50dfbbb0a6c3401ca": "1c1e43e773d83d6048b0faaed66e559b",
".git/objects/26/c4e61f8fd5261e9026ed485b0dbf490d1204cc": "596ac8c520cd301fbb6028949bf9df1f",
".git/objects/27/812ccc6c2679fde5ef4842960cd162ae369d60": "ee9bcee6bba53c2973fe7b6201687d89",
".git/objects/29/03a57c34524114c4bd2d57760fb58ab70d2212": "81012894bd62b8e0fdce8438b242c3a5",
".git/objects/29/4a3d446accd25188828a270086521a54a866df": "18887bb31adf624f2536818b8e20026e",
".git/objects/2a/8fd38f57daacb352efd8668cc79ce27bf34d8a": "27f30ed4ddb02bd2ffeeae5749210928",
".git/objects/30/31fc571af3589df900f65c6a0169887005123a": "7a0a8aa6938d668518424ac09d81f527",
".git/objects/30/58a512d2b7146966ad7ff597808bb87c99c0ef": "19fc1a319554bbb360fd1fed9b7a1012",
".git/objects/30/fda9893a1a4c73d52c4446659c95bfcb189b7b": "370e009deb8da231a338f147557e2122",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/36/12d21c4c51b938e27a85bd58384f4284c16e12": "ec08b91df80d5bcfa9503c1be4d41d77",
".git/objects/3e/8ba13c2f645a357be2ee2e5fd373952f83642d": "b065f0c093f709a91b1f3082761d365c",
".git/objects/3e/9d9def559d4bb9cebed7b0f6c712eb6a54acd9": "03d37e2f585e09ef9638cd657cadba4a",
".git/objects/3e/bab88238ef9687da1a91e9290bba381ccbe4bf": "784447a0793286a055aa7d040c0daa78",
".git/objects/3f/8398c43092d2c5a8a08341f7646596d62308fc": "515669af4bd77bcf795b1b9366df7342",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/48/a1e46d37035f787bad41a2dce61d2330c2fd26": "dcd649f6da244f177cbf920a1b7eb008",
".git/objects/49/044aa7120c75c50baf1db59d06a9e3e078e437": "150c694a29838c65d8a40f411c00c9b7",
".git/objects/4b/27ca6da643585dcb49abe1b0bc18f58bfb8277": "b83381f02f558321afa8298beeb34f0a",
".git/objects/4b/cde2f99c49ed0c0f24da2b2ec82beb5d03d4b8": "3c47abdb3ea03701469deaf3e5567050",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/3fa491199fd22aaf03366024146fe5020b6579": "a04cbcef2330fe115a568b64df0d839b",
".git/objects/55/95cf56175e1b4c1313baab6dbfbb50d4cf7829": "79b075213119997d25fdbdec8f7da1e3",
".git/objects/55/d549b0c3f6e8846258d106dbf7dc29a2d8c3cc": "56a9b302fcd131a700e8e75cf1533783",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/57/998cf07ebf9e9b0e6a91a031f6e62bc73e128f": "0379e9b8f24a21e8fd9bd5c05a8fba6e",
".git/objects/5b/090549307a7ce9b96f0c7df33b1404cd0e0917": "0ef595bde16c97c2a03eac2d50d4ab06",
".git/objects/5c/adc08a2970335966df39124a7f8caecb0b725a": "c9a96bc5141b744be87d4b621e38f457",
".git/objects/5c/d46e1ef7d335465dd6385e0470c30c8d25e8a0": "b86b0fdc2e9442f4347a53382e6c637c",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/62/9089ed4bb986ff44f2e7b93af87dadf848ed20": "12fb6432d689164c253a437ec16e897e",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/65/4cbd1d673535ff2a52099e94b66b61a04a6227": "c0f52ef20e8a4fef314101e5522c0eca",
".git/objects/68/9fb1084f4d3e2b63a350cd9a73fd34d6040dff": "7d41d96de247cc5901059fe89b513a3e",
".git/objects/68/d08fd32dacc2b2e983f69064cbc68968bafcb3": "e86135395d63900887b8a4a0dd73a036",
".git/objects/70/102c35e1cd0f3f1b32d5dcf11477329c5a527a": "9a61ab92f584a0f1c8503443ea3e58a0",
".git/objects/77/2470ff281fb30f888a0a8c32e30ef3d8f7c6af": "72b1934ebf21f25712cc75a36f035788",
".git/objects/7b/9c14173f08c3c623b8e837ebbbac388bbd56cf": "76e169d5d400b30af0c548ca6dc44db2",
".git/objects/7b/ea289d26341d64efbc6a9b6ddaa37517aeea21": "899006ae07fef513e1572125ef77430f",
".git/objects/7f/a6c9193b98a149400261cbd58ceb3fac2a9cb9": "4b0ebd74d20031a7e3567db06d28011b",
".git/objects/85/a93d621798a299c2b00a3ccb05631e752592c0": "0c9dad29d0795bd1013be9265d3a1ef4",
".git/objects/87/46790b039afc06f24c20aa6d3424e39486d40a": "0185471ee524f04d4188281fc0c1ef5d",
".git/objects/88/1fe43a58016eb22367ee88408497450df2b677": "ccddf43ec5a1d3c37112a2389b131136",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/b65cd530d125622b212cf7a2b038bca8c5aa59": "8e99c15692d91df9bad8ce53a4c832f7",
".git/objects/8d/45ab50183e380077e63c3c5c8d252ae346c7f3": "bd39d89662a47b8b982a189312ffdd34",
".git/objects/91/4178c3aa9abe3807e74018f8b7bfc466df6115": "516f7db7ff8255a88e51eecfa2f42163",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/ee6a94f932c701017ff35ccbe15e3ad79531bd": "77956e296b5fe2f17e4938a57b610b80",
".git/objects/93/be7fd9b9dcdd8564dafd7040a0c8c8f68d4080": "b27ff257c793a735fc818ff37f392ff9",
".git/objects/94/5e075f46158a88db806b84bae9dc97f9adeaba": "3ec3ddcdb069456f03b41ab4f8516de2",
".git/objects/a0/37f9352f154673cd86401fdf590221ba413049": "52a29c1339d3bce21655ee69990f5b03",
".git/objects/a4/c2406b97ecdb72b1573dfe7e05e36293a51701": "3d8148356785406145e755a50409f5e7",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/aa/d1161d246d599dc0bda18e61530985f45133fd": "85b7c899c3864b82396e43fa8615f199",
".git/objects/ac/48bf9fe3c40e2a534773792c50811fe06723d0": "81e96fda28d8b572b44c7e0c91b54f38",
".git/objects/b0/047e7d1daa637a1b8687cb3e7dd40273a43328": "a70fb18b04136275175fe0db50ef0e01",
".git/objects/b3/3a1c249146fff14cf3d60b0ef6b92ca898c502": "54618875f586dc453a1775763b3bd41f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c7/22a88b62082bd677f67a1263196fd3713c461e": "c82e256e741a18ec16d1d039cb54d0e6",
".git/objects/cc/37f144c690d5e11099f37a81b313414d3563ca": "a445096d9e7e09376300496a3458a108",
".git/objects/ce/89b6ef6600edfc9fd974633d8eee623c66a7b1": "ff4c892b5245221da9750c7b4dcdb9c8",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/28ceff41155335571b9b50cf6054740f97e90d": "eca3ff6cde41e969765c07fa2642b6df",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/f729eceed8e9431a6cfb40e1bb71615ccc9322": "9c9c707633eb7dc4fc04ce290df2ebe1",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/de/e64e5308e2bba9e65cad5ff4426fb5ab83e3f1": "3fefc60e34b43b9f57e78356e823bb8c",
".git/objects/e4/236904ab2691a66130c5f333d64c8404c006d2": "6aadfc3f6ebb7f48a5982343df58e48f",
".git/objects/e7/e6a102d29341e3e4ec5059c9792fc135f2f9d9": "b5288c0a25cfa7c50b39efd33817888a",
".git/objects/e9/57e3b2e1865747f3687211e8760f6554d78931": "d9378be3757a8cbe7d525228d7719846",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f1/fc9d08d9a4d93ff7f93e901f91d31eedd48a01": "357fdb2f4bc693c974fcdd6fc95b46bc",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f4/19cb83c2a903adcc7c2a622baa9e9e17513efd": "a9c5034e9e6418ffa1fdc548cb5bc715",
".git/objects/f6/82b4e14a70d4016ca5ec16b5ef93158d79a0e5": "f19f5c2548159e7997c19033b35bb682",
".git/objects/fb/cf6950ec8fd6f981746c5beb232756fb2c0bae": "7dd2837284e1cf0ed29e6cc33df1d68f",
".git/objects/fc/0713a3c9ca2fedb58ecee0a78a5ca5581374d6": "64194c47d5f72cc91a8a8b1cfcc54266",
".git/objects/fc/a04ffd1e287821752b9dc042310d2892d33ac1": "533da060218f9201bd71f5cd6c3da177",
".git/objects/fd/57a1f4eb6f9d0054c5ebbfa464f9939486b70e": "13743fa82856a2bb0c13885b5a35fc8b",
".git/refs/heads/gh-pages": "fd2a3f284ffd01d3b75950bfc0745ded",
".git/refs/remotes/origin/gh-pages": "fd2a3f284ffd01d3b75950bfc0745ded",
"assets/AssetManifest.bin": "45e5f122348b65aa20a0b951a0767332",
"assets/AssetManifest.bin.json": "df42dbc0a49074578946f67d9dad5a5a",
"assets/AssetManifest.json": "fc37014c0676c2a804addca564fbf42d",
"assets/assets/hamster_eat.png": "973ba675a72e8f98f64c291d654f1403",
"assets/assets/hamster_run.png": "0b913b52b7c85fca802204116eb9912b",
"assets/assets/hamster_sick.png": "ad419b67328be25294619c52ed5a76d0",
"assets/assets/hamster_sit.png": "444e5ef807d57539c4a39aaf3642aaf9",
"assets/assets/hamster_sleep.png": "c4c2ad333a9c68411228912b70e96afc",
"assets/FontManifest.json": "3020802906dc520f88ca973c65aa46d8",
"assets/NOTICES": "fceb42ac95297c174c7908e55cb47fdc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "78d4375898edee933e1d706531333b4b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "b5f8f6fe5a25a5483bfabbae6515597a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "60a310c5b3a1517751c52b5a5dbe5fdf",
"/": "60a310c5b3a1517751c52b5a5dbe5fdf",
"main.dart.js": "db5d127d6b77c5cce9a6d99ec246e1cf",
"manifest.json": "03a5197719713e5813a1edccb8585e66",
"version.json": "9b6cd43a8e24b9275f644a619c5c4416"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
