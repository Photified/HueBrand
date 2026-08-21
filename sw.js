const CACHE_NAME = 'huebrand-v20';

const ASSETS = [
  './',
  './index.html',
  './app.js',
  './manifest.json',
  './images/logo192.png',
  './images/logo512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );

  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      );
    })
  );

  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  const request = e.request;
  const url = new URL(request.url);

  // External logo/image services should go directly to the network.
  // We do not want the PWA service worker caching broken third-party logos.
  if (url.origin !== self.location.origin) {
    return;
  }

  // NETWORK FIRST
  //
  // This is better while you are actively developing the game on GitHub
  // because new versions of index.html and app.js are picked up immediately.
  //
  // If there is no internet connection, the PWA falls back to the cache.

  e.respondWith(
    fetch(request)
      .then((networkResponse) => {

        if (
          request.method === 'GET' &&
          networkResponse.ok
        ) {
          const responseCopy =
            networkResponse.clone();

          caches
            .open(CACHE_NAME)
            .then((cache) => {
              cache.put(
                request,
                responseCopy
              );
            });
        }

        return networkResponse;
      })

      .catch(() => {
        return caches.match(request);
      })
  );
});