const CACHE_NAME = 'huebrand-v22';

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
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(ASSETS);
      })
  );

  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((keys) => {
        return Promise.all(
          keys
            .filter(
              (key) =>
                key !== CACHE_NAME
            )
            .map(
              (key) =>
                caches.delete(key)
            )
        );
      })
  );

  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  const request = e.request;

  if (
    request.method !== 'GET'
  ) {
    return;
  }

  const url =
    new URL(request.url);

  // Do not intercept Brandfetch or other
  // third-party image/API requests.
  if (
    url.origin !==
    self.location.origin
  ) {
    return;
  }

  // Network first for our GitHub Pages files.
  // This makes new app.js/index.html versions
  // show up much faster after you upload them.
  e.respondWith(
    fetch(request)
      .then(
        (networkResponse) => {
          if (
            networkResponse.ok
          ) {
            const responseCopy =
              networkResponse.clone();

            caches
              .open(CACHE_NAME)
              .then(
                (cache) => {
                  cache.put(
                    request,
                    responseCopy
                  );
                }
              );
          }

          return networkResponse;
        }
      )
      .catch(
        () => {
          return caches.match(
            request
          );
        }
      )
  );
});