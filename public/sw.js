// Service worker FinPath — l'app fonctionne hors ligne une fois visitée.
// Stratégie : réseau d'abord pour les navigations (HTML frais quand il y a du
// réseau), cache d'abord pour les assets (fichiers hachés par Vite, immuables).

const CACHE = 'finpath-v1'

self.addEventListener('install', (event) => {
  self.skipWaiting()
  event.waitUntil(caches.open(CACHE))
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  )
})

self.addEventListener('fetch', (event) => {
  const { request } = event
  if (request.method !== 'GET' || !request.url.startsWith(self.location.origin)) return

  if (request.mode === 'navigate') {
    // Navigation : réseau d'abord, cache en secours (mode hors ligne).
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone()
          caches.open(CACHE).then((cache) => cache.put(request, copy))
          return response
        })
        .catch(() => caches.match(request))
    )
    return
  }

  // Assets : cache d'abord (hachés donc immuables), réseau sinon.
  event.respondWith(
    caches.match(request).then(
      (cached) =>
        cached ||
        fetch(request).then((response) => {
          const copy = response.clone()
          caches.open(CACHE).then((cache) => cache.put(request, copy))
          return response
        })
    )
  )
})
