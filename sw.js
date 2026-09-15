self.addEventListener('install', (e) => {
  console.log('Service Worker установлен');
});

self.addEventListener('fetch', (e) => {
  // Базовый перехват запросов для работы PWA
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
