const { self: _self } = globalThis as any as { self: ServiceWorkerGlobalScope }

_self.addEventListener('install', event => {
  event.waitUntil(_self.skipWaiting())
})

_self.addEventListener('activate', event => {
  event.waitUntil(_self.clients.claim())
})

_self.addEventListener('fetch', event => {
  const { url, method } = event.request
  console.log(event.request)
  // const matchedPaths = url.match(/api([^?]*)/)
  // const matchedConfigKey = matchedPaths && matchedPaths[1]
  // if (matchedConfigKey && mockConfig[matchedConfigKey]) {
  //   const { mockUrl, mockData } = mockConfig[matchedConfigKey]
  //   if (mockUrl) {
  //     event.respondWith(fetch(mockUrl, { method }))
  //   } else if (mockData) {
  //     event.respondWith(Promise.resolve(mockData))
  //   }
  // }
})
