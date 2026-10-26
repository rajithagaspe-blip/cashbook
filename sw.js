/* Cash Book service worker: lets the app install and open offline */
var CACHE='cashbook-v1';
var SHELL=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','icon-maskable-512.png'];
self.addEventListener('install',function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(SHELL)}).then(function(){return self.skipWaiting()}));
});
self.addEventListener('activate',function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.filter(function(k){return k!==CACHE}).map(function(k){return caches.delete(k)}));
  }).then(function(){return self.clients.claim()}));
});
self.addEventListener('fetch',function(e){
  var req=e.request;
  if(req.method!=='GET')return;
  var url=new URL(req.url);
  var same=url.origin===self.location.origin;
  if(same&&(req.mode==='navigate'||url.pathname.endsWith('/index.html'))){
    /* page itself: try the network first so updates arrive, fall back to the saved copy offline */
    e.respondWith(fetch(req).then(function(r){
      var copy=r.clone();caches.open(CACHE).then(function(c){c.put('index.html',copy)});return r;
    }).catch(function(){return caches.match('index.html').then(function(r){return r||caches.match('./')})}));
    return;
  }
  /* everything else (icons, fonts, Excel and PDF libraries): saved copy first, then network and save it */
  e.respondWith(caches.match(req).then(function(hit){
    return hit||fetch(req).then(function(r){
      if(r&&(r.status===200||r.type==='opaque')){var copy=r.clone();caches.open(CACHE).then(function(c){c.put(req,copy)})}
      return r;
    });
  }));
});
