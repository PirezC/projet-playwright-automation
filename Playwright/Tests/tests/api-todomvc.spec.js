import { test, expect } from '@playwright/test';

test('Compléter et supprimer une tâche avec attentes', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  const input = page.locator('.new-todo');
  await expect(input).toBeVisible({ timeout: 10000 });

  // Ajouter une tâche
  await input.fill('Apprendre Playwright');
  await input.press('Enter');

  // Attendre que la tâche apparaisse
  const todoItem = page.locator('.todo-list li').first();
  await expect(todoItem).toBeVisible();

  // Compléter la tâche
  const checkbox = todoItem.locator('.toggle');
  await expect(checkbox).toBeVisible();
  await checkbox.check();

  // Vérifier que la tâche est complétée (classe CSS "completed")
  await expect(todoItem).toHaveClass(/completed/);

  // Passer la souris (hover) sur la tâche pour faire apparaître le bouton "X"
  await todoItem.hover();
  const deleteBtn = todoItem.locator('.destroy');
  await expect(deleteBtn).toBeVisible();

  // Supprimer la tâche
  await deleteBtn.click();

  // Vérifier que la liste est vide
  await expect(page.locator('.todo-list li')).toHaveCount(0);


await page.screenshot({ path: 'screenshot.png' });
});


//npx playwright test --headed --slow-mo 100