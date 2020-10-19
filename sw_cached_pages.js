
const cacheName = 'v1';

const cacheAssets= [
  'index.html',
  'guitars.html',
  'laptop.html',
  'smartphones.html',
  'style.css',
  '/js/catalogue.js',
  '/js/product.js',
  '/js/test.js'
];
self.addEventListener('install', e => {
  console.log('Service Worker:Installed');
})

self.addEventListener('activate', e => {
  console.log('Service Worker:Activated');
})
