// Entry point requerido por Wrangler para Workers Sites
addEventListener('fetch', event => {
  return event.respondWith(new Response('Archivo estático no encontrado', { status: 404 }));
});