/* Kennedy 3.0 · fonctionnement hors connexion (même principe que ProfDeMaths 2.0) */
const V = 'k3-202610191410';
const CORE = ['./', './index.html', './data.js?v=202610191410', './manifest.webmanifest', './icon-192.png', './icon-512.png',
  './img/s3_test_question.jpg', './img/s4_groupe.jpg', './img/s5_cours.jpg', './img/s6_quiz.jpg', './img/s7_eval_fiche.jpg', './img/s8_classement.jpg', './img/ex_bd.jpg', './img/ex_carte_mentale.jpg'];
self.addEventListener('install', e => { e.waitUntil(caches.open(V).then(c => c.addAll(CORE)).then(() => self.skipWaiting())) });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())) });
self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || /script\.google(usercontent)?\.com$/.test(url.hostname)) return;
  if (req.mode === 'navigate') {
    e.respondWith((async () => {
      const c = await caches.open(V);
      try { const ctl = new AbortController(), t = setTimeout(() => ctl.abort(), 4000); const r = await fetch(req, { signal: ctl.signal }); clearTimeout(t); if (r.ok) c.put('./', r.clone()); return r }
      catch (err) { return (await c.match('./')) || (await c.match('./index.html')) || Response.error() }
    })()); return;
  }
  if (url.origin === location.origin && /\.(js|webmanifest)$/.test(url.pathname)) {   // code de l'appli : réseau d'abord, jamais d'ancienne version
    e.respondWith((async () => { const c = await caches.open(V);
      try { const r = await fetch(req, { cache: 'no-store' }); if (r.ok) c.put(req, r.clone()); return r } catch (err) { return (await c.match(req)) || (await c.match(req, { ignoreSearch: true })) || Response.error() } })());
    return;
  }
  e.respondWith((async () => {
    const c = await caches.open(V), hit = await c.match(req);
    const net = fetch(req).then(r => { if (r && (r.ok || r.type === 'opaque')) c.put(req, r.clone()); return r }).catch(() => hit);
    return hit || net;
  })());
});
