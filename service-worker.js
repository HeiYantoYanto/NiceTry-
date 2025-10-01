const CACHE_NAME = 'nicetry-cache-v1';
const urlsToCache = [
  'index.html',
  'theme.css',
  'styles.css',
  'navbar/navbar_main.css',
  'course/courses-mainpage/courses-styles.css',
  // Add other assets you want cached
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});