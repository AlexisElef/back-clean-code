import { test, expect } from '@playwright/test';
import e from 'express';


/*Feature: Création de fiches d’apprentissage

  En tant qu’utilisateur connecté,
  Je souhaite pouvoir créer des fiches qui seront intégrées dans le système en catégorie 1
  Afin de pouvoir les réviser plus tard.

  Scenario: Ajout d’une fiche dans la catégorie 1
    Given Un utilisateur est connecté
    When Il accède à la page de création de fiche
    And Il remplit la question avec "Quelle est la capitale de la France ?"
    And Il remplit la réponse avec "Paris"
    And il remplit le tag avec "Capitale"
    And Il clique sur le bouton "Add Card"
    Then La fiche apparaît dans la liste des fiches en catégorie 1
*/

test('Création de Carte', async ({ page }) => {
    await page.goto('http://localhost:5173/');

    const addButton = page.locator('button', { hasText: '+' });
    await addButton.waitFor();
    await addButton.click();

    await page.fill('input[name=question]', 'Quelle est la capitale de la France ?');
    await page.fill('input[name=answer]', 'Paris');

    const tagInput = page.locator('input[name=tag]');
    await tagInput.fill('Capilole');
    await tagInput.press('Enter');
    

    const showButton = page.locator('button', { hasText: 'Show All Cards' });
    await showButton.waitFor();
    await showButton.click();

    const lastCard = page.locator('.bg-gray-700').last();

    await expect(lastCard).toContainText('Quelle est la capitale de la France ?');
    await expect(lastCard).toContainText('Paris');
    await expect(lastCard).toContainText('Capilole');
    await expect(lastCard).toContainText('Category: 1');
});
