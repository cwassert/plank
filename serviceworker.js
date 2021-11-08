self.addEventListener('install', function(event) {
  event.waitUntil(caches.open('plank-cache').then(cache => Promise.all([
    //cache.add('index.html'),
    cache.add('serviceworker.js'),
    cache.add('plank.svg'),
    cache.add('plank.png')
  ])));
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

