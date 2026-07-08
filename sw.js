// Service worker minimale per Friends Advisor.
// Strategia network-first con fallback alla cache: online si usa sempre la
// versione più recente (e la sincronizzazione live continua a funzionare),
// offline si serve l'ultima copia in cache così l'app si apre comunque.
const CACHE = 'friends-advisor-v1';

self.addEventListener('install', (e) => { self.skipWaiting(); });

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  // Non intercettare le chiamate al database condiviso: devono andare in rete.
  if (req.url.includes('textdb.online')) return;
  e.respondWith((async () => {
    try {
      const res = await fetch(req);
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
      return res;
    } catch (err) {
      const cached = await caches.match(req);
      return cached || caches.match('./') || Response.error();
    }
  })());
});
