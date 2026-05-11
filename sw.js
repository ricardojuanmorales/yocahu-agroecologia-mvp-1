const CACHE_NAME = 'yocahu-agroecologia-pr-v0-2-2';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './data/app.json',
  './data/levels.json',
  './data/projects.json',
  './data/activities.json',
  './data/prompts.json',
  './data/badges.json',
  './data/rubric.json',
  './docs/app-readme.md',
  './docs/user-guide.md',
  './data/guides.json',
  './data/top_project_profiles.json',
  './data/project_fichas_compactas.json',
  './assets/icons/yocahu-icon.svg',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './assets/icons/maskable-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
        return response;
      }).catch(() => {
        if (request.mode === 'navigate') return caches.match('./index.html');
        return new Response('Recurso no disponible offline.', { status: 503, statusText: 'Offline' });
      });
    })
  );
});
