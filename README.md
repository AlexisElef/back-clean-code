# 📘 Guide d'installation et d'exécution des tests end-to-end

## 🛠️ Prérequis

- [Node.js](https://nodejs.org/) (version 16 ou supérieure recommandée)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Playwright](https://playwright.dev/)

## 🏃 Exécution des tests

### 📌 Lancer le test end-to-end

```sh
npx playwright test end-to-end.test.ts
```

## 📝 Scénario Gherkin

Le test end-to-end repose sur le scénario suivant, écrit en **Gherkin** :

```gherkin
  Création de fiches d’apprentissage

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
```

