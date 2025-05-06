'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "6fe9f2d565d592ccd2cad9d828f7b10d",
".git/config": "cb33dd88a607d27d90f0d49439814008",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "14d13d5f2fc7beb4bbe4895397bb0ac0",
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
".git/index": "00a223eb09ddfefda0c6e2498f7fba32",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "69681fad1cb12c75d6eeb4e142d69ee1",
".git/logs/refs/heads/master": "defe6d9b97dd6d618e2cb2084a1f2120",
".git/logs/refs/heads/web-app": "012d9146338a443de1ec6f5a6077efcd",
".git/logs/refs/remotes/origin/web-app": "839a7f7a09c56939abc9527cc3a0cad0",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/04/e85505bb8d20cd9750a584e9e2bd34120445cb": "95346cd24870596493ef3a24495db4f6",
".git/objects/05/fad17af069f2222c4e7ab523d3fb00830a4cd3": "2a33049ae77db197295126540f14dd44",
".git/objects/11/c6da42f27f3be1ffd0d802804e37d9fc567721": "c2f7229577390a3e1e8361370cedfd41",
".git/objects/12/3f1df22a89eb3366685d9f5537066cdc94b079": "3a7eff4c1b8c89a16149efa78c7ec369",
".git/objects/1a/8b156a20639d3002edddc2947d7b2c9bb69c9a": "2aecd71258deb6c11a71e18f243491b4",
".git/objects/1b/5e06239997a8ac9b675de1151408d87ec95933": "d89bd9ad4f473c7f5fd1d21fa0b99da3",
".git/objects/1e/df3c934c37fc3574350be60130063d1a4fd6b1": "f9c83a40f9b73a95b28ee22a9a02d4c0",
".git/objects/21/6d60119f0cb528e426439b790222c19ffd4d51": "cdaf2ddf86ca06ee7b61e7f8f31798bd",
".git/objects/28/f9c50e75b4db1359ad314093c36c52a65de8f1": "02e65b973aefe73c4d844068135ec190",
".git/objects/2c/f543d7081848ae0216b65516ecc3e506d8b3b7": "795c806a2852def6bf10a786ea6c0e78",
".git/objects/2d/5c03332b5c78e6c34cec1f4926598578463547": "eeb248345128d230f4fa9613bd7ece7e",
".git/objects/30/12959ce41235ca15396ba0a12328dec106c0ca": "d9a4ffa6bb2bfffb616da2115091ba36",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/37/bfcfe897c810a8c444f68c62d9ae4585f1fb98": "171b5d4881e2ec8017c00aa002a74f78",
".git/objects/3a/928591d70d687bd7d6f0fd9872be2cbd42f4f1": "ca67cb3ac2043a611a0aa2687dfab880",
".git/objects/3f/717a9cd48663646a6519b34e500d9fe171cf29": "8f6db38084a7a5c830539b8af78b7de6",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/41/b862e35c0bfea710297cfb41aebaf327f37323": "64c95fdadc45699ee4501ac983268399",
".git/objects/44/aef8f4dc848482247f7805a6aef82dacc760da": "35860d135350b96d76036e6ed775b9b9",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/a9423cf3df4f38c9e12bbde386fc497b86c532": "1567edc56bdf6d9044efd9150934d140",
".git/objects/4a/506a4043efeb8ed328458a4bcd8ba88b213bdb": "acf508c4d8e564472eb428aceb71f9f7",
".git/objects/4a/ed5940f0bf2dc6e4c508d7b70a6fafd8f8e6a2": "7bc9140ccae5a48c86cb78e5cad0b73f",
".git/objects/4e/a79c46485b6d661effe1037ffe4f5869ba5ce0": "dfb148ee17df7030aa159251d5d77b56",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/52/eef823bafc4165ff9daf309eeb233f5d9c45eb": "df61e6b24b694cd3b982e44d5470bfa8",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5e/dcd90c2d2dbcf4c4ef4992c24a5f4f836bda3f": "db65c033566c8e7434f842242d4f3129",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/60/6c7503ef06b9ffffbaa6efa23ff141efa9877c": "fbd3ea9e1e46f02cb005100fb1cf026c",
".git/objects/63/07fd5b86cc2df9468de6a8d4789a9246708e98": "9e2867fc63affdf2c02eb7bc112ee16b",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/66/3ae7b935bc82a8dcf9f0eb67b356ce7cc08cda": "e87891874aa5a6d7fcb08a09d4587d7d",
".git/objects/67/31cd1e8aa1db97fb48bd5389e42391e5bfd39a": "4b512b08bd8887e1534801ff7466335d",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/59cd589f1b967f17c6e13048287fc3d90545bb": "f5d068fbb67a3b09bbebb53d09cefa15",
".git/objects/6d/8f21047c6a88537c4ebf4eb44c1e96db3d5a7e": "b1114aa7551d517e1702bc8d6be4ed6f",
".git/objects/6e/0c12b833e5196f0ae9bc9f123b40faeea0089f": "d9831aee95e5535e59fe31c4226f08c2",
".git/objects/70/ef3235a276288ce517d1964a45db6ee85f644e": "6181d0e34817f278815035f0f7776d4b",
".git/objects/73/2eb16b4397c55559b095869ed3411f9cf0e53f": "db9faf9b39f37a0e22cedb873a99ff66",
".git/objects/77/7746c346fbe024525322e8794e9a622bbaea9d": "409ce03315cd7640d4198847b07a0360",
".git/objects/79/4aa94beac914dc83a3d046a8e2e5abee162a42": "9c9f9f9c6268134319a31c8ee6fafcf4",
".git/objects/7a/43cc1872cc0fd3b533e3bbcff3021a25a6b91e": "75311bb6a5a62afeb3bea07765dba9de",
".git/objects/7b/97fb458835c6f20ee3ee4c0722cc9e51e642f0": "1310a929d2d3f2f280e5e754d3d31462",
".git/objects/80/e00f24385ab02f372c971c2069764c6a99a112": "81468cd4e29a1bb5396a4097e6353f5c",
".git/objects/82/cdb9cc6945ccac684fa3cf4df93154e9d1ad91": "098f3fc76bf2b02c9d259314f910506c",
".git/objects/83/95da964e68598cd288209ffe22d1b09bb60921": "0c1644bc4b739efabf4dd23fe6003979",
".git/objects/88/0f00daf64da158defa188d31917d2f04171ac7": "ff3b1cf76b2bdef657ef11ce7c10502d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/6c78b2c84fde28547eac955388f5b85aee3136": "edfc121841c160f5fb51691d06760c83",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/93/21850fd842337020f44a8184f9eb2a80279260": "aec4795474df3a0ce87b228f8264d6b7",
".git/objects/93/be7fd9b9dcdd8564dafd7040a0c8c8f68d4080": "b27ff257c793a735fc818ff37f392ff9",
".git/objects/94/bf654150786f158089769e1b371b0b3a79c3f6": "63b6541914882350ce6f254ce52987c9",
".git/objects/95/3550f68195cc8f3119a10c9519d349312b1384": "74cf7541748f84c5f2ce39eaaa3b0cbe",
".git/objects/9c/ce144e3ea00c922d5545d5fca413e3ff046f76": "77640462f8be9508682a9af3cfa9197f",
".git/objects/a3/be85612d85c7768cf1ebdf2c1e4040a4ea5158": "d9ab91905f8de939f1f1769c2e2f1c41",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/33c1dff164b83f919aec35ce38fb412028e4c7": "e59c8d3e10850b64218d1f8cb76ba98e",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a8/d7aebaa4b344b4c06b5fc62f40213afe28ba24": "4f9137fc59c1008c783ed4e93e811b3c",
".git/objects/a9/a5c038e30d07c6901cf535adb6886f079fd305": "32abe217f770bf54430906f2900caf14",
".git/objects/af/75549698505d74ec71874bf953fb51734c5f5d": "906bb00f58de033c9ee39b2c01650be5",
".git/objects/b1/a37fb2bc33008ccb555def5aa74a4d91976b07": "db8c6ecce57a1db86e7b0b03d2f95acc",
".git/objects/b2/9b8aacd1e1bb236fe938a10575e20af1453966": "878a5549506e1f0871c68aee6c8fe87b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/01ceed1bdbecaa2f27de86fe94016628ac5d3c": "c7c97fa5c5ff96fc297775099f6d4519",
".git/objects/bd/d103c984b8b45a06840cd62ee79ff0a4052d63": "3b3dfd01dc65fae58bb8f1f2f08f68c8",
".git/objects/c4/bac1893bb369ef9a971130b751e4ac2b2b5716": "524795fc23f161eed93a22bba45271a1",
".git/objects/ca/32424497169892bf3b4cd226afad03478ecfd3": "a5adf66edf7a1dd72ae18d39085d0e89",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/db/e84bb966584d65215d87951c1899bbef087578": "f6994a63c73ad301a5f018b880b453ef",
".git/objects/e6/eb426ca4aa7c930decb8becd11920e92d3aacf": "1139c172631f8cd39d5609e228a832f3",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f0/3622ca0d89a25f88aefce35214e61ede6740a1": "cfdea2161dd19a8788c84ab4d597ee0c",
".git/objects/f0/ce19a80f0259d3533ca99e400a7edffd930f83": "421fe8b9c125613568cfe46b0fb2b12b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f4/5ae28e59b1b3a66dedfa42a473e3543552d115": "635bfa67491ababf8bfa3775ed9ae679",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f7/da2ddae956230d431f71b7df06fb6df29785a6": "c338c898ccbe87b8fac90899d36aeeae",
".git/objects/f8/800852d9d0ecdd5549ae209eeaf239c32f32a2": "567882a9b5ffdee7fd0486a4bbbb470c",
".git/objects/fb/36499f34feec46b415db0fbeffe71397023da5": "d1dbd9b26665931bd2ac15b6d6d9258b",
".git/objects/fe/d3701ff1cace991e8673a54e2b0405a8616283": "94ce00956c2bf52ec055de7d1a7eec7e",
".git/refs/heads/master": "f5f90abb915d32a277f479e82f4b2d9f",
".git/refs/heads/web-app": "a422173f7a19e711d8fc128b481a47e4",
".git/refs/remotes/origin/web-app": "a422173f7a19e711d8fc128b481a47e4",
"assets/AssetManifest.bin": "357db3b084b70ddc91e7c330a35abfd4",
"assets/AssetManifest.bin.json": "a2c33882c0db1943900dcd24731af36c",
"assets/AssetManifest.json": "f6a0cd555bab16b17ff4a048b04bc55d",
"assets/assets/Cover.png": "d5f4c716f0f7a58afeaf6e1b7e456e2b",
"assets/assets/Logo.png": "b89eb851f32a00070aa84e1e3a89c27c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1a0682d034e4066e8568e912b1fc6be9",
"assets/icons/Kanon.jpg": "34d6a52c7a9abe7919bada04e1667740",
"assets/icons/logouticon.png": "386ecfe0a6be6042890509e9121ba2d4",
"assets/icons/mangalinkicon.png": "983491bbdfd098a6adb6addf62e5fc4e",
"assets/icons/tab_icon.png": "d5d124308ad889cb54795ad7216396c9",
"assets/NOTICES": "d6f1ab0cf35f989e9dfe396f1c2501c7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
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
"flutter_bootstrap.js": "f0d5abf1d01d4df4a16e77f29b73ee36",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f2aef8c2157549534bd03924bb126370",
"/": "f2aef8c2157549534bd03924bb126370",
"main.dart.js": "d113abd229010583f826f8ef36b8870e",
"manifest.json": "748d32a48511033d0368f187be8435f4",
"version.json": "a253dbc81ffa2757870e6e59b274ec67"};
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
