# 🧪 Projet d'Automatisation de Tests avec Playwright

Ce projet contient une suite de tests automatisés E2E (end-to-end) réalisés avec [Playwright](https://playwright.dev), permettant de tester une application web (ex : [TodoMVC](https://demo.playwright.dev/todomvc)).

---

## 📁 Structure du projet
mon-projet/ ├── tests/ # Dossier contenant les tests (.spec.ts) │ └── exemple.spec.ts ├── .github/ │ └── workflows/ │ └── playwright.yml # Workflow GitHub Actions pour exécuter les tests automatiquement ├── playwright.config.ts # Configuration globale Playwright ├── package.json └── README.md

---

## 🚀 Installation
Assure-toi d'avoir **Node.js >= 16** installé, puis :
npm install
npx playwright install --with-deps

---

## ▶️ Exécution des tests en local
npx playwright test

Exécution en mode non-headless (navigateur visible) :
npx playwright test --headed

---

## 📊 Rapport HTML des tests
npx playwright show-report


## 🔄 Intégration Continue (CI) avec GitHub Actions
Le fichier .github/workflows/playwright.yml permet de :

Lancer automatiquement les tests Playwright à chaque push ou pull request sur la branche main

Générer et sauvegarder un rapport HTML téléchargeable depuis GitHub

---

## ✅ Voir les résultats dans GitHub
Aller dans l'onglet Actions de ton dépôt

Sélectionner une exécution

Télécharger le rapport dans la section Artifacts > playwright-report.zip

Ouvrir index.html dans ton navigateur

---

## ⚙️ Exemple de configuration Playwright
Fichier playwright.config.ts :

import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
});

---

## 📎 Exemple de test Playwright

import { test, expect } from '@playwright/test';

test('Visite de la page TodoMVC', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
  await expect(page).toHaveTitle(/TodoMVC/);
});

---

## 🧰 Scripts utiles (dans package.json)
"scripts": {
  "test": "npx playwright test",
  "test:headed": "npx playwright test --headed",
  "report": "npx playwright show-report"
}
