var cacheName = 'v2';
var cacheFiles=[
  './',
  './index.html',
  './style.css',
  './guitars.html',
  './laptop.html',
  './smartphones.html',
  './js/catalogue.js',
  './js/product.js',
  './js/test.js',
  'https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
]

self.addEventListener('install', function(e) {
  console.log('Service Worker:Installed');
  e.waitUntil(

    caches.open(cacheName).then(function(cache){
      console.log("[ServiceWorker] Caching cacheFiles");
      return cache.addAll(cacheFiles);
    })
  )
});

self.addEventListener('activate', function(e) {
  console.log('Service Worker:Activated');
  e.waitUntil(

    caches.keys().then(function(name){
       Promise.all(
         names.filter(function(cacheName){
           return name !== cacheName;
         }).map(function(name){
           return caches.delete(name);
         })

       })
    })
  )
});

self.addEventListener('fetch', function(e) {
  event.respondWith(
    caches.open(cacheName).then(function(cache){
      return cache.match(event.request);
    })
  );
  console.log('Service Worker: fetching', e.request.url);
});
