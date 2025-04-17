import { defineConfig } from '@playwright/test';

export default defineConfig({
  
  testDir: './tests',
  timeout: 30 * 1000, // 30 secondes max par test
  expect: {
    timeout: 1000, // 1 secondes pour les assertions
    
    reporter: [['html', { open: 'on-failure' }]],
  },
  
  use: {
    headless: false,         // Lance le navigateur en mode visible
    slowMo: 100,             // Délai de 100ms entre chaque action
    locale: 'fr-FR',         // Langue du navigateur
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});