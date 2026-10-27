const CACHE_NAME = 'pm-manager-shell-v3-20261027';
const APP_SHELL = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('pm-manager-shell-') && key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const req = event.request;
  if(req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith(fetch(req).then(resp => {
    if(resp.ok && APP_SHELL.some(path => new URL(path,self.registration.scope).href === req.url)){
      const clone=resp.clone();
      event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.put(req,clone)));
    }
    return resp;
  }).catch(()=>caches.match(req).then(cached=>cached || (req.mode==='navigate'?caches.match('./index.html'):Response.error()))));
});
