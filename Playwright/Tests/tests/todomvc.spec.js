import { test, expect, request } from '@playwright/test';

test('API: Vérifier que la page TodoMVC se charge correctement', async () => {
  // Créer un contexte de requête API
  const apiContext = await request.newContext();
  
  // Envoyer une requête GET vers l'URL TodoMVC
  const response = await apiContext.get('https://demo.playwright.dev/todomvc');
  
  // Vérifier que le code de statut est 200 (OK)
  expect(response.status()).toBe(200);
  
  // Vérifier que l'en-tête Content-Type contient 'text/html'
  const contentType = response.headers()['content-type'] || '';
  expect(contentType).toContain('text/html');

});



test('API: Test non passant - Vérifier un code de statut incorrect', async () => {
  // Créer un contexte de requête API
  const apiContext = await request.newContext();

  // Envoyer une requête GET vers l'URL TodoMVC
  const response = await apiContext.get('https://demo.playwright.dev/todomvc');

  // Ce test est conçu pour échouer :
  // On s'attend à ce que le code de statut soit 404, mais le serveur renvoie 200.
  expect(response.status()).toBe(404);
});