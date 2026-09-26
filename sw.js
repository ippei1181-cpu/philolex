const CACHE="philolex-cyberpunk-v4-4";
const SHELL=["./manifest.webmanifest","./apple-touch-icon.png","./icon-192.png","./icon-512.png"];
self.addEventListener("install",event=>{
 event.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()));
});
self.addEventListener("activate",event=>{
 event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener("fetch",event=>{
 if(event.request.method!=="GET")return;
 const url=new URL(event.request.url);if(url.origin!==self.location.origin)return;
 if(event.request.mode==="navigate"||url.pathname.endsWith("/index.html")||url.pathname.endsWith("/")){
  event.respondWith(fetch(event.request,{cache:"no-store"}).then(response=>{
   const copy=response.clone();caches.open(CACHE).then(c=>c.put("./index.html",copy));return response;
  }).catch(()=>caches.match("./index.html")));
  return;
 }
 event.respondWith(caches.match(event.request).then(cached=>{
  const network=fetch(event.request,{cache:"no-cache"}).then(response=>{
   if(response&&response.ok){const copy=response.clone();caches.open(CACHE).then(c=>c.put(event.request,copy))}
   return response;
  }).catch(()=>cached);
  return cached||network;
 }));
});
