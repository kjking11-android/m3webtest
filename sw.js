const CACHE_NAME = 'm3webtest-cache-v1';
const urlsToCache = [
  '/m3webtest/',
  '/m3webtest/index.html',
  '/m3webtest/app.js',
  '/m3webtest/icons/icon-192x192.png',
  '/m3webtest/icons/icon-512x512.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
